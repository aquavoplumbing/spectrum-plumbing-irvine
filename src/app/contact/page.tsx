import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { ContactForm } from "@/components/contact/ContactForm";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Contact Spectrum Plumbing Irvine | Call (949) 539-8503",
  description:
    "Have a plumbing question or urgent issue in Irvine, CA? Call (949) 539-8503 for direct telephone triage and connection with experienced local plumbers.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/contact/`,
  },
  openGraph: {
    title: "Contact Spectrum Plumbing Irvine | Call (949) 539-8503",
    description:
      "Get in touch with Spectrum Plumbing Irvine. Direct phone line at (949) 539-8503 for plumbing assistance across Irvine, CA.",
    url: `${BUSINESS_INFO.domain}/contact/`,
    siteName: BUSINESS_INFO.name,
    type: "website",
  },
};

export default function ContactPage() {
  const contactFaqs = [
    {
      question: "What happens when I call (949) 539-8503?",
      answer:
        "Your call is answered directly by a triage representative who gathers essential details about your plumbing symptoms (e.g., active water leak, no hot water, blocked mainline sewer) and your location within Irvine. You are then connected with an available independent plumbing professional servicing your neighborhood.",
    },
    {
      question: "Is there an inspection fee or diagnostic charge?",
      answer:
        "Diagnostic and dispatch fees vary depending on the independent plumbing service contractor assigned, the nature of the issue, and the time of call. You can confirm all pricing and assessment terms directly with the contractor prior to approving any physical work.",
    },
    {
      question: "How quickly can someone assist me in an emergency?",
      answer:
        "Because plumbing emergencies (such as ruptured supply lines or sewer backups) cause rapid structural damage, calling provides immediate triage guidance. The representative will help determine emergency shutoff procedures and connect you to the earliest available specialist.",
    },
    {
      question: "Can I use the contact form for emergency plumbing issues?",
      answer:
        "We strongly advise calling (949) 539-8503 for all time-sensitive or active plumbing problems. Online contact form submissions are processed during standard review windows and should only be used for general, non-urgent inquiries.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-12 pb-20 md:py-24 border-b border-cyan-500/15">
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#168DFF]/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09223D]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIRECT INQUIRIES &amp; PHONE TRIAGE</span>
            </div>

            <h1 className="hero-title font-extrabold font-heading text-white tracking-tight mb-6 max-w-4xl mx-auto">
              Contact <span className="gradient-text-electric">Spectrum Plumbing Irvine</span>
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Have a plumbing question or need assistance in Irvine? Call to discuss your situation and available service options directly with an experienced professional.
            </p>

            <div className="inline-block">
              <PhoneCTA
                placement="contact_hero"
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="text-base sm:text-lg py-4 px-9 font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
                showIcon={true}
                subtext="Direct Telephone Line • Serving All Irvine Villages"
              />
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <TrustStrip />

        {/* Section 2 & 3: Primary Phone Card + Optional Form */}
        <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Primary Phone Contact Column (Dominant Action) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#051426] via-[#09223D] to-[#0D2B4D] text-white border border-cyan-400/30 shadow-2xl card-sheen relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#168DFF]/20 rounded-full blur-[80px] pointer-events-none" />

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168DFF]/20 border border-cyan-400/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6">
                    <Headphones className="w-3.5 h-3.5" />
                    <span>Fastest Response Option</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-3">
                    Speak With a Professional
                  </h2>

                  <p className="text-sm text-[#CBD5E1] leading-relaxed mb-8">
                    Direct phone communication is the most effective way to evaluate water leaks, drain blockages, and water heater failures in Irvine.
                  </p>

                  <div className="p-6 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8">
                    <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-bold mb-1">
                      Direct Telephone Line
                    </p>
                    <a
                      href={BUSINESS_PHONE.href}
                      className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8] hover:text-white transition-colors block"
                    >
                      {BUSINESS_PHONE.display}
                    </a>
                    <p className="text-[11px] text-[#94A3B8] mt-2">
                      Click to place a call directly from your phone or browser
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#CBD5E1] mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Service Coverage:</strong>
                        <span>Serving Woodbridge, Turtle Rock, Northwood, Westpark, Great Park, and all Irvine villages.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Availability Information:</strong>
                        <span>Direct phone inquiry triage with immediate routing to independent plumbing contractors.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Direct Connection:</strong>
                        <span>No complicated interactive automated phone trees or hidden call routing fees.</span>
                      </div>
                    </div>
                  </div>

                  <PhoneCTA
                    placement="contact_featured_card"
                    label={`Call Now ${BUSINESS_PHONE.display}`}
                    variant="hero"
                    className="w-full text-base py-4 font-bold shadow-xl shadow-[#168DFF]/40 btn-3d"
                    showIcon={true}
                  />
                </div>

                {/* Helpful Reminder Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-[#475569] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Independent Contractor Network</span>
                  </div>
                  <p className="leading-relaxed">
                    Spectrum Plumbing Irvine operates as a lead generation and referral directory connecting callers with licensed, independent trade specialists across Orange County.
                  </p>
                </div>
              </div>

              {/* Optional Contact Form Column (Secondary) */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Service Areas */}
        <ServiceAreasSection />

        {/* Section 5: Contact FAQ */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Common Questions"
              title={
                <>
                  Frequently Asked <span className="gradient-text-accent">Contact Questions</span>
                </>
              }
              subtitle="Clear details on our phone triage process and response expectations."
              centered={true}
            />

            <div className="space-y-6 mt-10">
              {contactFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm"
                >
                  <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-2 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#168DFF]/15 text-[#087BDB] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Final Phone CTA */}
        <FinalCTA
          heading={<>Ready to Speak With a Local <span className="gradient-text-electric">Plumbing Professional?</span></>}
          description="Call (949) 539-8503 to discuss your plumbing issue with someone who understands Irvine homes."
          placement="contact_final"
        />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
