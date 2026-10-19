import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Home,
  ChevronRight,
  Compass,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Building2,
  Layers,
} from "lucide-react";
import { SERVICE_AREAS_DATA } from "@/data/serviceAreas";
import { getAllLocationSlugs } from "@/data/locations";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Plumbing Service Areas in Irvine, CA | Spectrum Plumbing",
  description:
    "Explore plumbing services across Irvine neighborhoods including Woodbridge, Turtle Rock, Northwood, Westpark, and Great Park. Call (949) 539-8503 for telephone diagnostic triage.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/service-areas/`,
  },
  openGraph: {
    title: "Plumbing Service Areas in Irvine, CA | Spectrum Plumbing",
    description:
      "Explore plumbing services across Irvine neighborhoods including Woodbridge, Turtle Rock, Northwood, and Westpark. Direct phone assistance at (949) 539-8503.",
    url: `${BUSINESS_INFO.domain}/service-areas/`,
    siteName: BUSINESS_INFO.name,
    type: "website",
  },
};

export default function ServiceAreasHubPage() {
  const publishedSlugs = getAllLocationSlugs();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Section 1: Hub Hero */}
        <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-8 pb-16 lg:py-20 border-b border-cyan-500/15">
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#168DFF]/20 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#94A3B8] backdrop-blur-md"
            >
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              <span className="text-white font-medium">Service Areas</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#168DFF]/15 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>Irvine Neighborhood Service Coverage</span>
            </div>

            <h1 className="hero-title font-extrabold font-heading text-white tracking-tight mb-6 max-w-4xl mx-auto">
              Plumbing Service Areas in{" "}
              <span className="gradient-text-electric">Irvine, California</span>
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore localized plumbing information, common residential infrastructure considerations, and phone-first diagnostic triage across Irvine villages and master-planned communities.
            </p>

            <div className="inline-block">
              <PhoneCTA
                placement="service_areas_hub_hero"
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="text-base sm:text-lg py-4 px-9 font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
                showIcon={true}
                subtext="Direct Phone Assistance • Zero Automated Forms"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Trust Strip */}
        <TrustStrip />

        {/* Section 2 & 3: Irvine Coverage Overview & Geographic Visual */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <SectionHeading
                  badge="Geographic Context"
                  title={
                    <>
                      Understanding Plumbing Across{" "}
                      <span className="gradient-text-accent">Irvine’s Master-Planned Villages</span>
                    </>
                  }
                  subtitle="Irvine was master-planned in distinct residential villages starting in the 1970s. Each generation of homes presents unique piping and drainage characteristics."
                  centered={false}
                />

                <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                  <p>
                    From early 1970s developments in <strong>Woodbridge</strong> and <strong>University Park</strong> where below-slab copper piping and aging mainline cast iron or clay sewers are common, to newer master-planned enclaves in <strong>Portola Springs</strong> and <strong>Great Park</strong> with PEX tubing and high-efficiency tankless units, plumbing challenges vary substantially by village.
                  </p>
                  <p>
                    Spectrum Plumbing Irvine connects callers with experienced plumbing professionals familiar with local Irvine architectural guidelines, homeowner association (HOA) rules, and city permitting standards.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center">
                    <span className="text-xl font-extrabold text-[#087BDB] block">10+</span>
                    <span className="text-xs text-[#64748B]">Irvine Villages</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center">
                    <span className="text-xl font-extrabold text-[#087BDB] block">8</span>
                    <span className="text-xs text-[#64748B]">ZIP Codes</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center">
                    <span className="text-xl font-extrabold text-[#087BDB] block">100%</span>
                    <span className="text-xs text-[#64748B]">Phone Direct</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center">
                    <span className="text-xl font-extrabold text-[#087BDB] block">UPC</span>
                    <span className="text-xs text-[#64748B]">Code Standards</span>
                  </div>
                </div>
              </div>

              {/* Geographic Graphic Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-gradient-to-br from-[#030C17] via-[#051426] to-[#09223D] p-7 text-white border border-cyan-400/25 shadow-2xl relative overflow-hidden card-sheen">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2">
                      <Compass className="w-5 h-5 text-[#38BDF8]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Irvine Service Matrix
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ACTIVE COVERAGE
                    </span>
                  </div>

                  <p className="text-xs text-[#CBD5E1] mb-6 leading-relaxed">
                    Connecting Orange County homeowners with independent plumbing providers across these primary Irvine ZIP codes:
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-6">
                    {["92602 - Northwood", "92603 - Turtle Rock", "92604 - Woodbridge", "92606 - Westpark", "92612 - Univ. Park", "92614 - Woodbridge S.", "92618 - Great Park", "92620 - Northwood N."].map((item, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0" />
                        <span className="text-[11px] truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-[#168DFF]/15 border border-[#38BDF8]/30 text-center">
                    <p className="text-[11px] text-[#CBD5E1] mb-2">Immediate local dispatch triage:</p>
                    <a
                      href={BUSINESS_PHONE.href}
                      className="text-lg font-extrabold text-[#38BDF8] hover:underline"
                    >
                      {BUSINESS_PHONE.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Neighborhood Directory Bento Grid */}
        <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              badge="Explore Communities"
              title={<>Irvine Neighborhoods &amp; <span className="gradient-text-accent">Plumbing Profiles</span></>}
              subtitle="Select your neighborhood to review specialized architectural insights, foundation considerations, or call directly."
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-12">
              {SERVICE_AREAS_DATA.map((area, index) => {
                const isPublished = publishedSlugs.includes(area.id);

                return (
                  <article
                    key={area.id}
                    id={area.anchor.replace("#", "")}
                    className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#168DFF]/60 transition-all duration-300 bento-card-3d card-sheen flex flex-col justify-between group shadow-sm hover:shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25 group-hover:scale-105 transition-transform">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors leading-tight">
                              {area.name}
                            </h2>
                            <span className="text-[11px] text-[#64748B]">
                              Irvine, CA {area.zipCodes}
                            </span>
                          </div>
                        </div>

                        {isPublished ? (
                          <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold uppercase tracking-wider">
                            Verified Guide
                          </span>
                        ) : (
                          <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F0F7FF] text-[#087BDB] border border-[#168DFF]/20 font-bold">
                            Service Area
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-[#475569] leading-relaxed mb-5">
                        {area.shortDescription}
                      </p>

                      <div className="space-y-2 pt-3.5 border-t border-slate-100 text-xs mb-6">
                        <div className="flex items-start gap-2 text-[#0F172A]">
                          <Home className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                          <span className="text-[#475569] font-medium">{area.commonHomeTypes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#087BDB] font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{area.notableFeature}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      {isPublished ? (
                        <Link
                          href={`/service-areas/${area.id}/`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors py-2"
                        >
                          <span>Explore {area.name} Page</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <a
                          href={BUSINESS_PHONE.href}
                          className="text-xs font-bold text-[#64748B] hover:text-[#0F172A]"
                        >
                          Inquire about {area.name}
                        </a>
                      )}

                      <PhoneCTA
                        placement={`hub_${area.id}`}
                        label="Call for Service"
                        variant="primary"
                        className="w-full sm:w-auto text-xs py-2.5 px-4 font-bold shadow-md shadow-[#168DFF]/20 btn-3d"
                        showIcon={true}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: Services Across Irvine */}
        <ServicesSection />

        {/* Section 6: How It Works */}
        <ProcessSection />

        {/* Section 7: FAQs */}
        <FAQSection />

        {/* Section 8: Final CTA */}
        <FinalCTA
          heading={<>Ready to Discuss Plumbing Help in <span className="gradient-text-electric">Your Irvine Neighborhood?</span></>}
          description="Speak directly with someone who understands Irvine residential plumbing systems. No online waiting forms, no automated phone trees."
          placement="service_areas_hub_final"
        />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
