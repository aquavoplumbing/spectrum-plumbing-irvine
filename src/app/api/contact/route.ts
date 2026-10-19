import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter per IP
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";

    // Rate limiting check
    const now = Date.now();
    const clientRecord = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - clientRecord.lastReset > RATE_LIMIT_WINDOW_MS) {
      clientRecord.count = 0;
      clientRecord.lastReset = now;
    }

    if (clientRecord.count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute before trying again or call (949) 539-8503 directly." },
        { status: 429 }
      );
    }

    clientRecord.count += 1;
    rateLimitMap.set(ip, clientRecord);

    const body = await req.json();
    const { fullName, phone, email, serviceCategory, message, honeypot, privacyConsent } = body;

    // Spam honeypot detection (bots usually fill hidden fields)
    if (honeypot) {
      // Silently fail for bots
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // Input validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { success: false, error: "Please agree to the privacy policy to submit an inquiry." },
        { status: 400 }
      );
    }

    // Basic sanitization
    const sanitizedData = {
      fullName: fullName.trim().slice(0, 100),
      phone: phone.trim().slice(0, 25),
      email: email ? String(email).trim().slice(0, 100) : "",
      serviceCategory: serviceCategory ? String(serviceCategory).trim().slice(0, 50) : "General Inquiry",
      message: message ? String(message).trim().slice(0, 1000) : "",
      submittedAt: new Date().toISOString(),
      ipHash: ip.substring(0, 7) + "***",
    };

    // Log the valid inquiry safely on the server side
    console.log("[Contact Form Received]", {
      name: sanitizedData.fullName,
      phone: sanitizedData.phone,
      service: sanitizedData.serviceCategory,
      timestamp: sanitizedData.submittedAt,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received. For faster priority assistance, call (949) 539-8503 directly.",
    });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please call (949) 539-8503 for direct assistance." },
      { status: 500 }
    );
  }
}
