import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  PhoneCall,
  ArrowRight,
  ShieldAlert,
  Flame,
  Droplets,
  SearchCode,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { FAQHubClient } from "@/components/faq/FAQHubClient";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";
import { SERVICES_DATA } from "@/data/services";

export const metadata: Metadata = {
  title: "Plumbing Frequently Asked Questions | Spectrum Plumbing Irvine",
  description:
    "Find clear answers to common residential plumbing questions in Irvine, CA. Slab leaks, water heater maintenance, drain clogs, pricing, and phone triage. Call (949) 539-8503.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/faq/`,
  },
  openGraph: {
    title: "Plumbing Frequently Asked Questions | Spectrum Plumbing Irvine",
    description:
      "Comprehensive answers to homeowner plumbing, diagnostic, and pricing questions in Irvine, California.",
    url: `${BUSINESS_INFO.domain}/faq/`,
    siteName: BUSINESS_INFO.name,
    type: "website",
  },
};

export default function FAQPage() {
  const featuredServices = SERVICES_DATA.slice(0, 4);

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
              <span>IRVINE HOMEOWNER RESOURCE CENTER</span>
            </div>

            <h1 className="hero-title font-extrabold font-heading text-white tracking-tight mb-6 max-w-4xl mx-auto">
              Plumbing <span className="gradient-text-electric">Frequently Asked Questions</span>
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Find transparent, honest answers regarding residential plumbing diagnostics, repair vs. replacement options, pricing standards, and our phone inquiry process in Irvine, CA.
            </p>

            <div className="inline-block">
              <PhoneCTA
                placement="faq_hero"
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="text-base sm:text-lg py-4 px-9 font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
                showIcon={true}
                subtext="Direct Telephone Assistance • Zero Robotic Menus"
              />
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <TrustStrip />

        {/* Section 2 & 3: Interactive FAQ System with Categories */}
        <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Search &amp; Filter"
              title={
                <>
                  Explore Questions by{" "}
                  <span className="gradient-text-accent">Topic Category</span>
                </>
              }
              subtitle="Select a category or type a keyword below to find answers to specific plumbing concerns."
              centered={true}
            />

            <div className="mt-12">
              <FAQHubClient />
            </div>
          </div>
        </section>

        {/* Section 4: Related Services */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Specialized Assistance"
              title={
                <>
                  Need Direct Help for a{" "}
                  <span className="gradient-text-accent">Specific Service?</span>
                </>
              }
              subtitle="Explore detailed diagnostic and repair procedures for top Irvine plumbing categories."
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {featuredServices.map((svc) => (
                <div
                  key={svc.id}
                  className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-[#168DFF]/50 transition-all duration-300 bento-card-3d flex flex-col justify-between"
                >
                  <div>
                    {svc.badge && (
                      <span className="text-[10px] font-bold text-[#087BDB] uppercase tracking-wider block mb-2">
                        {svc.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-2 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed mb-4 line-clamp-3">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      href={`/services/${svc.id}/`}
                      className="text-xs font-bold text-[#087BDB] hover:text-[#168DFF] inline-flex items-center gap-1 group"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <PhoneCTA
                      placement={`faq_service_${svc.id}`}
                      label="Call"
                      variant="outline"
                      className="text-xs py-1.5 px-3 font-semibold"
                      showIcon={false}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#087BDB] hover:text-[#168DFF]"
              >
                <span>View All 15 Irvine Plumbing Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Final CTA */}
        <FinalCTA
          heading={<>Still Have Questions About <span className="gradient-text-electric">Your Plumbing Issue?</span></>}
          description="Speak directly with someone who understands Irvine homes. Call (949) 539-8503 for direct telephone triage and service connection."
          placement="faq_hub_final"
        />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
