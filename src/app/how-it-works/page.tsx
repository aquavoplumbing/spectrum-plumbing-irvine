import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  PhoneCall,
  Search,
  MessageSquare,
  Wrench,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Clock,
  ArrowRight,
  ClipboardList,
  AlertCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "How It Works | Phone-First Plumbing Triage in Irvine, CA",
  description:
    "Learn how Spectrum Plumbing Irvine connects homeowners with independent plumbing contractors. Step-by-step phone inquiry process, what to expect, and key questions to ask.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/how-it-works/`,
  },
  openGraph: {
    title: "How It Works | Spectrum Plumbing Irvine",
    description:
      "Understand our transparent phone inquiry and referral process connecting Irvine callers with independent plumbing contractors.",
    url: `${BUSINESS_INFO.domain}/how-it-works/`,
    siteName: BUSINESS_INFO.name,
    type: "website",
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Explore Diagnostic Guides & Identify Symptoms",
      description:
        "Browse our comprehensive service guides and educational articles to recognize symptoms—such as unexplained water meter movement, gurgling drains, or hot floor patches indicative of an under-slab leak.",
    },
    {
      number: "02",
      icon: PhoneCall,
      title: "Call Our Listed Number: (949) 539-8503",
      description:
        "Place a call directly to speak with an experienced telephone representative. No automated phone trees, no waiting days for someone to check a website contact form.",
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Describe Your Plumbing Issue & Irvine Neighborhood",
      description:
        "Share details about the issue you are experiencing, whether it is an urgent overflow or scheduled maintenance, and your specific village in Irvine (e.g., Woodbridge, Turtle Rock, Northwood).",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Connect With an Available Independent Specialist",
      description:
        "Based on your problem type and location, your inquiry is connected with an available, independent plumbing contractor who can discuss service windows, diagnostics, and on-site repair options.",
    },
  ];

  const questionsToAsk = [
    {
      title: "Service Availability & Timing",
      question: "What is your earliest availability for an on-site diagnostic assessment in my Irvine neighborhood?",
      rationale: "Ensures expectations match your urgency, particularly for active water leaks or sewer backups.",
    },
    {
      title: "Diagnostic Fees & Estimates",
      question: "Do you offer a flat diagnostic fee, and is that fee applied toward the total repair cost if approved?",
      rationale: "Prevents surprise assessment charges and establishes transparent financial expectations upfront.",
    },
    {
      title: "Licensing & Insurance",
      question: "Are your technicians licensed by the California Contractors State License Board (CSLB) and fully insured?",
      rationale: "Protects your property and confirms trade compliance with California state plumbing codes.",
    },
    {
      title: "Repair vs. Replacement Options",
      question: "Can this fixture or line be safely repaired, or does it require full component replacement?",
      rationale: "Allows you to weigh short-term patch solutions against long-term reliability and cost efficiency.",
    },
    {
      title: "Warranty & Workmanship Coverage",
      question: "What warranties or guarantees do you provide on newly installed parts and labor?",
      rationale: "Gives you written peace of mind in the event of component failure or recurring symptoms.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-12 pb-20 md:py-24 border-b border-cyan-500/15">
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#168DFF]/20 rounded-full blur-[170px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09223D]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TRANSPARENT INQUIRY &amp; REFERRAL PROCESS</span>
            </div>

            <h1 className="hero-title font-extrabold font-heading text-white tracking-tight mb-6 max-w-4xl mx-auto">
              How <span className="gradient-text-electric">Spectrum Plumbing Irvine Works</span>
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              We provide a transparent, phone-first connection service that matches Irvine property owners with experienced, independent plumbing professionals. No guesswork, no confusing phone trees.
            </p>

            <div className="inline-block">
              <PhoneCTA
                placement="how_it_works_hero"
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="text-base sm:text-lg py-4 px-9 font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
                showIcon={true}
                subtext="Immediate Assistance • Independent Trade Network"
              />
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <TrustStrip />

        {/* Section 2: Detailed Process Steps */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="The 4-Step Process"
              title={
                <>
                  From Initial Symptom to{" "}
                  <span className="gradient-text-accent">Plumbing Resolution</span>
                </>
              }
              subtitle="Here is exactly how our phone-first diagnostic triage and referral workflow operates."
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.number}
                    className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#168DFF]/50 transition-all duration-300 bento-card-3d card-sheen relative"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#09223D] to-[#168DFF] text-white flex items-center justify-center shadow-lg shadow-[#168DFF]/20">
                        <IconComponent className="w-7 h-7 text-[#38BDF8]" />
                      </div>
                      <span className="text-3xl font-extrabold font-mono text-slate-200">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: What to Expect When Calling */}
        <section className="py-20 md:py-28 bg-[#F0F7FF]/50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <SectionHeading
                  badge="Call Transparency"
                  title={
                    <>
                      What to Expect When You{" "}
                      <span className="gradient-text-accent">Call (949) 539-8503</span>
                    </>
                  }
                  subtitle="We value your time. Knowing what to expect makes the call efficient, productive, and reassuring."
                  centered={false}
                />

                <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <h4 className="text-base font-bold text-[#0F172A] mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087BDB]" />
                      Information We Ask You
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569]">
                      You will be asked about visible symptoms (e.g., active water pooling, knocking pipes, foul drain odors), affected fixtures, home foundation type (concrete slab vs. crawlspace), and your approximate Irvine neighborhood or ZIP code.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <h4 className="text-base font-bold text-[#0F172A] mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087BDB]" />
                      Why Symptom Accuracy Matters
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569]">
                      A slab leak requires specialized acoustic locating equipment, while main sewer root intrusion requires high-torque motorized cables or hydro jetters. Accurately describing symptoms ensures you are connected with a technician equipped for the exact job.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <h4 className="text-base font-bold text-[#0F172A] mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087BDB]" />
                      Determining Contractor Availability
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569]">
                      We verify current schedule bandwidth with independent contractors in our local network to provide realistic arrival windows rather than vague all-day waiting blocks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <h4 className="text-base font-bold text-[#0F172A] mb-1 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      What We Do Not Promise
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569]">
                      Because Spectrum Plumbing Irvine connects callers with independent licensed service providers, we do not guarantee dispatch or binding quotes over the phone. Final assessment and pricing are determined directly between you and the servicing contractor on site.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call Summary Highlight Card */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#051426] via-[#09223D] to-[#0D2B4D] text-white border border-cyan-400/25 shadow-2xl card-sheen">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#168DFF]/20 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-400/20">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Average Call Duration: 2-4 Minutes</span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white mb-4">
                    Ready to Discuss Your Plumbing Problem?
                  </h3>

                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-8">
                    Our direct phone line connects you without complicated digital booking hoops or unmonitored email queues.
                  </p>

                  <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/10 mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold block mb-1">
                      Primary Phone Line
                    </span>
                    <a
                      href={BUSINESS_PHONE.href}
                      className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8] hover:text-white transition-colors"
                    >
                      {BUSINESS_PHONE.display}
                    </a>
                  </div>

                  <PhoneCTA
                    placement="how_it_works_call_box"
                    label={`Call ${BUSINESS_PHONE.display}`}
                    variant="hero"
                    className="w-full text-base py-4 font-bold shadow-xl shadow-[#168DFF]/30 btn-3d"
                    showIcon={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Practical Questions to Ask Your Contractor */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Homeowner Advocacy"
              title={
                <>
                  Smart Questions to Ask Your{" "}
                  <span className="gradient-text-accent">Plumbing Professional</span>
                </>
              }
              subtitle="Empowering Irvine property owners to make confident, informed repair decisions."
              centered={true}
            />

            <div className="space-y-6 mt-12">
              {questionsToAsk.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#087BDB] uppercase tracking-wider block mb-1">
                      {item.title}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-2">
                      &ldquo;{item.question}&rdquo;
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      <strong>Why this matters:</strong> {item.rationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <FAQSection />

        {/* Section 6: Final CTA */}
        <FinalCTA
          heading={<>Ready to Get Started With <span className="gradient-text-electric">Irvine Plumbing Support?</span></>}
          description="Speak with an experienced professional right now. Call (949) 539-8503 to discuss symptoms and available service options."
          placement="how_it_works_final"
        />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
