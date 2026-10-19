import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  Flame,
  Droplets,
  Wrench,
  Layers,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PlumbingProblems } from "@/components/home/PlumbingProblems";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { getAllServices } from "@/data/services";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Plumbing Services in Irvine, CA | Spectrum Plumbing Irvine",
  description:
    "Explore our complete directory of 15 residential and commercial plumbing services in Irvine, CA. Drain cleaning, water heaters, slab leak repair, and emergency assistance. Call (949) 539-8503.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/services/`,
  },
  openGraph: {
    title: "Plumbing Services in Irvine, CA | Spectrum Plumbing Irvine",
    description:
      "Complete directory of professional plumbing services across Irvine, CA. Immediate phone triage at (949) 539-8503.",
    url: `${BUSINESS_INFO.domain}/services/`,
    siteName: BUSINESS_INFO.name,
    type: "website",
  },
};

export default function ServicesHubPage() {
  const services = getAllServices();

  // Categorize services based on user prompt specification
  const categories = [
    {
      name: "Emergency & Leak Repair",
      description: "Time-sensitive diagnostic locating, copper pipe repair, and pressurized slab leak mitigation.",
      icon: ShieldAlert,
      slugs: [
        "emergency-plumbing-irvine-ca",
        "leak-detection-irvine-ca",
        "slab-leak-repair-irvine-ca",
        "pipe-repair-and-repiping-irvine-ca",
      ],
    },
    {
      name: "Drain & Sewer Solutions",
      description: "Motorized snaking, high-pressure hydro jetting, and sewer line camera inspections.",
      icon: Droplets,
      slugs: [
        "drain-cleaning-irvine-ca",
        "hydro-jetting-irvine-ca",
        "sewer-line-repair-irvine-ca",
      ],
    },
    {
      name: "Water Heater Systems",
      description: "Diagnostics, heating element repair, flushing, and high-efficiency tankless installations.",
      icon: Flame,
      slugs: [
        "water-heater-repair-irvine-ca",
        "tankless-water-heaters-irvine-ca",
      ],
    },
    {
      name: "Fixtures & Appliances",
      description: "Precision repairs and updates for toilets, kitchen and bathroom sinks, and disposals.",
      icon: Wrench,
      slugs: [
        "toilet-repair-irvine-ca",
        "faucet-and-sink-repair-irvine-ca",
        "garbage-disposal-repair-irvine-ca",
      ],
    },
    {
      name: "Piping & Commercial Infrastructure",
      description: "Mainline water supply lines, natural gas safety systems, and commercial plumbing facilities.",
      icon: Layers,
      slugs: [
        "water-line-repair-irvine-ca",
        "gas-line-services-irvine-ca",
        "commercial-plumbing-irvine-ca",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-10 pb-20 border-b border-cyan-500/15">
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
          <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#087BDB]/25 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09223D]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Comprehensive Irvine Plumbing Capabilities</span>
            </div>

            <h1 className="hero-title font-extrabold font-heading text-white max-w-4xl mx-auto mb-6">
              Plumbing Services in{" "}
              <span className="gradient-text-electric">Irvine, California</span>
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              From slab leak acoustics and copper repiping to high-flow motorized drain cleaning and commercial backflow testing, explore specialized plumbing solutions across Irvine.
            </p>

            <div className="inline-block">
              <PhoneCTA
                placement="services_hub_hero"
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="text-lg py-4 px-9 font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
                showIcon={true}
                subtext="Direct Phone Assistance • Serving All Irvine Communities"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Trust Strip */}
        <TrustStrip />

        {/* Section 3: Complete Categorized Service Directory */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Comprehensive Directory"
              title={
                <>
                  Explore All 15 <span className="gradient-text-accent">Plumbing Services</span>
                </>
              }
              subtitle="Organized by problem type so you can review diagnostic procedures, symptoms, pricing factors, and Irvine neighborhood insights."
              centered={true}
            />

            <div className="space-y-20 mt-16">
              {categories.map((cat) => {
                const catServices = services.filter((s) => cat.slugs.includes(s.slug));
                const IconComponent = cat.icon;

                return (
                  <div key={cat.name} className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#09223D] to-[#168DFF] text-white flex items-center justify-center shadow-md">
                          <IconComponent className="w-6 h-6 text-[#38BDF8]" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold font-heading text-[#0F172A]">
                            {cat.name}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#64748B]">
                            {cat.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#087BDB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 self-start md:self-auto">
                        {catServices.length} Specialized Services
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                      {catServices.map((service) => (
                        <article
                          key={service.slug}
                          className="group relative flex flex-col justify-between h-full rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.06)] hover:border-[#168DFF]/60 hover:shadow-[0_20px_45px_-10px_rgba(22,141,255,0.2)] transition-all duration-300 card-sheen bento-card-3d"
                        >
                          {/* Service Image */}
                          <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                            <Image
                              src={service.hero.image}
                              alt={service.hero.imageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/40 to-transparent" />

                            {service.badge && (
                              <div className="absolute top-4 left-4">
                                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide bg-[#030C17]/90 text-[#38BDF8] border border-cyan-400/30 backdrop-blur-xl shadow-lg">
                                  {service.badge}
                                </span>
                              </div>
                            )}

                            <div className="absolute bottom-4 left-4 right-4">
                              <span className="text-xs font-extrabold text-white uppercase tracking-wider drop-shadow-md">
                                Irvine, CA Support
                              </span>
                            </div>
                          </div>

                          {/* Body */}
                          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-3 leading-snug">
                                <Link href={`/services/${service.slug}/`} className="focus:outline-none">
                                  {service.name}
                                </Link>
                              </h3>

                              <p className="text-sm text-[#475569] leading-relaxed mb-6 line-clamp-3">
                                {service.hero.description}
                              </p>
                            </div>

                            <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                              <PhoneCTA
                                placement={`hub_card_${service.slug}`}
                                label="Call"
                                variant="primary"
                                className="text-xs py-2.5 px-4 font-bold shadow-md shadow-[#168DFF]/25 btn-3d"
                                showIcon={true}
                              />

                              <Link
                                href={`/services/${service.slug}/`}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors py-2 group/link"
                              >
                                <span>View Details</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Problem Explorer */}
        <PlumbingProblems />

        {/* Section 5: How It Works */}
        <ProcessSection />

        {/* Section 6: Irvine Service Areas */}
        <ServiceAreasSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Section 7: FAQs */}
        <FAQSection />

        {/* Section 8: Final CTA */}
        <FinalCTA
          heading={<>Need Immediate Plumbing Assistance in <span className="gradient-text-electric">Irvine?</span></>}
          description="Speak directly with an experienced plumbing professional. Discuss your symptoms and get matched with available local specialists."
          placement="services_hub_final"
        />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
