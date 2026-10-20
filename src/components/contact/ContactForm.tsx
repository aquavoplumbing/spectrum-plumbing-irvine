"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, PhoneCall } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceCategory: "Emergency or Diagnostic Inquiry",
    message: "",
    privacyConsent: false,
    honeypot: "", // hidden spam trap
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMessage("Please confirm you agree to our privacy policy.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Unable to send your message. Please call directly.");
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("error");
      setErrorMessage("A network error occurred. Please call (949) 539-8503 directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-200 shadow-xl text-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-2">
          Inquiry Successfully Received
        </h3>
        <p className="text-sm text-[#475569] max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for reaching out. We will review your message. If you have an active leak, sewer backup, or urgent repair need, calling is always fastest.
        </p>

        <div className="p-5 rounded-2xl bg-[#09223D] text-white max-w-md mx-auto">
          <p className="text-xs text-[#94A3B8] mb-2">Need immediate plumbing assistance?</p>
          <a
            href={BUSINESS_PHONE.href}
            className="inline-flex items-center gap-2 text-base font-extrabold text-[#38BDF8] hover:underline"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {BUSINESS_PHONE.display}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg">
      <div className="mb-6">
        <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
          Non-Urgent Communication
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
          Send an Online Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1">
          For urgent emergencies or active leaks, calling <strong className="text-[#087BDB]">(949) 539-8503</strong> provides instant assistance.
        </p>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Spam Honeypot Field (invisible to humans) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="form_website_trap">Leave this blank</label>
          <input
            type="text"
            id="form_website_trap"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-[#0F172A] mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Sarah Mitchell"
            className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168DFF]/40 focus:border-[#168DFF] transition-all bg-slate-50/50"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#0F172A] mb-1.5">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(949) 000-0000"
              className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168DFF]/40 focus:border-[#168DFF] transition-all bg-slate-50/50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#0F172A] mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@example.com"
              className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168DFF]/40 focus:border-[#168DFF] transition-all bg-slate-50/50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceCategory" className="block text-xs font-bold text-[#0F172A] mb-1.5">
            Service Category
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#168DFF]/40 focus:border-[#168DFF] transition-all bg-slate-50/50"
          >
            <option value="Emergency or Diagnostic Inquiry">Emergency / Immediate Diagnostic Inquiry</option>
            <option value="Drain Cleaning">Drain Cleaning &amp; Clog Removal</option>
            <option value="Water Heater Service">Water Heater Repair or Replacement</option>
            <option value="Leak Detection">Leak Detection &amp; Water Line Pipe Repair</option>
            <option value="Slab Leak Investigation">Slab Leak Investigation</option>
            <option value="Sewer Line Service">Sewer Line Repair or Hydro Jetting</option>
            <option value="Fixtures & Disposal">Toilet, Faucet, or Garbage Disposal</option>
            <option value="Commercial Plumbing">Commercial Plumbing Service</option>
            <option value="Other Question">Other General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#0F172A] mb-1.5">
            Describe Your Plumbing Problem <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please share any visible symptoms, location in your home, or neighborhood in Irvine..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168DFF]/40 focus:border-[#168DFF] transition-all bg-slate-50/50 resize-y"
          />
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer text-xs text-[#475569] min-h-[44px] py-1">
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#087BDB] focus:ring-[#087BDB]"
            />
            <span className="leading-snug">
              I agree to the{" "}
              <a href="/privacy-policy/" className="text-[#087BDB] underline hover:text-[#168DFF]" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              and understand Spectrum Plumbing Irvine connects inquiries with independent plumbing service providers.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-6 min-h-[48px] rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#09223D] to-[#0D2B4D] hover:from-[#051426] hover:to-[#09223D] border border-cyan-500/20 shadow-md transition-all disabled:opacity-50 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
