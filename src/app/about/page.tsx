import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Clock,
  Layers,
  HeartHandshake,
  Compass,
  FileCheck,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { CustomerProof } from "@/components/home/CustomerProof";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";
import { SERVICES_DATA } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us | Spectrum Plumbing Irvine",
  description:
    "Learn how Spectrum Plumbing Irvine connects Irvine residents and property owners with experienced, independent plumbing professionals. Transparent phone-first assistance.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/about/`,
  },
  openGraph: {
    title: "About Spectrum Plumbing Irvine",
    description:
      "A trusted local platform connecting Irvine residents with qualified, independent plumbing contractors across Orange County.",
    url: `${BUSINESS_INFO.domain}/about/`,
    siteName: BUSINESS_INFO.name,
    type: "website",
  },
};

export default function AboutPage() {
  const featuredServices = SERVICES_DATA.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Section 1: Cinematic About Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-12 pb-20 md:py-24 border-b border-cyan-500/15">
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#168DFF]/20 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09223D]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ABOUT SPECTRUM PLUMBING IRVINE</span>
                </div>

                <h1 className="hero-title font-extrabold font-heading text-white tracking-tight mb-6">
                  Helping Irvine Residents Find{" "}
                  <span className="gradient-text-electric">Plumbing Assistance</span>
                </h1>

                <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Spectrum Plumbing Irvine is a dedicated local plumbing referral and information platform designed for Irvine homeowners, property managers, and businesses. We simplify the process of understanding plumbing issues and immediately connect you by phone with independent, experienced plumbing professionals serving Orange County.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                  <PhoneCTA
                    placement="about_hero"
                    label={`Call ${BUSINESS_PHONE.display}`}
                    variant="hero"
                    className="w-full sm:w-auto text-base py-4 px-8 font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
                    showIcon={true}
                    subtext="Immediate Phone Triage • No Automated Forms"
                  />

                  <Link
                    href="/services/"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#94A3B8]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                    Direct Telephone Connection
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                    Local Irvine Village Coverage
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                    Honest Business Transparency
                  </span>
                </div>
              </div>

              {/* Hero Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-cyan-400/25 bg-[#051426] shadow-2xl card-sheen">
                  <div className="relative h-80 sm:h-96 w-full">
                    <Image
                      src="/images/hero-pipes-3d.jpg"
                      alt="Modern residential plumbing manifold and pipe infrastructure"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/40 to-transparent" />
                  </div>
                  <div className="p-6 relative z-10 bg-[#09223D]/95 border-t border-cyan-500/20 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#168DFF]/20 text-[#38BDF8] flex items-center justify-center border border-[#38BDF8]/30">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-sm font-heading">
                          Referral &amp; Informational Platform
                        </h2>
                        <p className="text-[11px] text-[#94A3B8]">
                          Connecting Irvine callers to independent trade providers
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-[#CBD5E1] leading-relaxed">
                      We focus on clear diagnostics, upfront advice, and rapid phone assistance so you never waste time waiting on unanswered contact forms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <TrustStrip />

        {/* Section 2: Who We Are & How We Operate */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionHeading
                badge="Who We Are"
                title={
                  <>
                    A Transparent Approach to{" "}
                    <span className="gradient-text-accent">Plumbing Assistance</span>
                  </>
                }
                subtitle="We believe in clear expectations, direct communication, and zero marketing illusions."
                centered={true}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 bento-card-3d">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25 mb-6">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                  Phone-First Resolution
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Plumbing issues like running slab leaks, overflowing toilets, or dying water heaters require immediate conversation, not email queues. When you call (949) 539-8503, you speak with a professional ready to review your situation.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 bento-card-3d">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#087BDB] to-[#168DFF] text-white flex items-center justify-center shadow-md shadow-[#087BDB]/25 mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                  Independent Provider Network
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Spectrum Plumbing Irvine does not directly employ plumbers or own utility vehicles. Instead, we match your specific plumbing problem and location with independent, experienced plumbing contractors servicing Irvine and surrounding communities.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 bento-card-3d">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#0284C7]/25 mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                  Irvine-Specific Insights
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  From slab-on-grade foundations common in Woodbridge to high-mineral water chemistry impacting tankless water heaters in Northwood and Westpark, we tailor our educational materials to Irvine’s exact architectural characteristics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Purpose */}
        <section className="py-20 md:py-28 bg-[#F0F7FF]/50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  badge="Our Purpose"
                  title={
                    <>
                      Making Plumbing Information{" "}
                      <span className="gradient-text-accent">Clear &amp; Accessible</span>
                    </>
                  }
                  subtitle="We bridge the gap between technical trade jargon and practical homeowner decision-making."
                  centered={false}
                />

                <div className="space-y-6 text-sm text-[#475569] leading-relaxed mt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-[#087BDB] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-1">
                        Diagnostic Clarity Before You Commit
                      </h4>
                      <p>
                        We explain what symptoms mean—whether a warm spot on your floor indicates a pressurized slab leak or if gurgling drains signal a sewer line obstruction—so you understand what questions to ask.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-[#087BDB] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-1">
                        Eliminating Wasted Response Time
                      </h4>
                      <p>
                        Web forms often languish in unmonitored inboxes. By prioritizing telephone contact at (949) 539-8503, Irvine callers receive real-time answers about contractor availability and emergency triage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-[#087BDB] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0F172A] mb-1">
                        Zero Marketing Gimmicks
                      </h4>
                      <p>
                        We do not fabricate years in business, fake awards, or artificial technician badges. We operate as an honest directory and referral bridge that respects your time and property.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl card-sheen">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#087BDB]/10 text-[#087BDB] flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading text-[#0F172A]">
                      The Spectrum Connection Model
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      How inquiries transition into on-site solutions
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-[#334155]">
                  <li className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#168DFF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </span>
                    <span>Homeowner identifies an issue and calls (949) 539-8503</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#168DFF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <span>Triage operator reviews symptoms, village location, &amp; urgency</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#168DFF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <span>Caller is connected directly with an independent service provider</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </span>
                    <span>The independent professional conducts on-site diagnostic &amp; quote</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <PhoneCTA
                    placement="about_model_card"
                    label={`Speak With Us: ${BUSINESS_PHONE.display}`}
                    variant="primary"
                    className="w-full text-sm py-3.5 px-6 font-bold shadow-lg shadow-[#168DFF]/25 btn-3d"
                    showIcon={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What We Help With */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Major Services"
              title={
                <>
                  Core Plumbing Needs We{" "}
                  <span className="gradient-text-accent">Connect You For</span>
                </>
              }
              subtitle="Browse high-priority plumbing categories supported across Irvine residential communities."
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <div
                  key={service.id}
                  className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#168DFF]/50 transition-all duration-300 bento-card-3d flex flex-col justify-between"
                >
                  <div>
                    {service.badge && (
                      <span className="text-[11px] font-bold text-[#087BDB] uppercase tracking-wider mb-2 block">
                        {service.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      href={`/services/${service.id}/`}
                      className="text-xs font-bold text-[#087BDB] hover:text-[#168DFF] inline-flex items-center gap-1 group"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <PhoneCTA
                      placement={`about_service_${service.id}`}
                      label="Call"
                      variant="outline"
                      className="text-xs py-2 px-3 font-semibold"
                      showIcon={false}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors"
              >
                <span>View All 15 Specialized Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: How It Works */}
        <ProcessSection />

        {/* Section 6: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 7: Areas We Cover */}
        <ServiceAreasSection />

        {/* Section 8: Real Customer Standards & Honest Service */}
        <CustomerProof />

        {/* Section 9: FAQ */}
        <FAQSection />

        {/* Section 10: Final CTA */}
        <FinalCTA
          heading={<>Need Plumbing Help in <span className="gradient-text-electric">Irvine, CA?</span></>}
          description="Speak directly with an experienced professional. Discuss your symptoms and connect with trusted local plumbing specialists."
          placement="about_final"
        />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
