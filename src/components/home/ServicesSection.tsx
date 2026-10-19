import React from "react";
import { SERVICES_DATA } from "@/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";
import { PhoneCall, Zap } from "lucide-react";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Dynamic 3D ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#168DFF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Comprehensive Irvine Solutions"
          title={<>Plumbing Services in <span className="gradient-text-accent">Irvine, CA</span></>}
          subtitle="Explore dedicated solutions for common plumbing problems affecting homes, condos, and estates across Irvine. Call (949) 539-8503 to discuss your repair needs."
          centered={true}
        />

        {/* Balanced 3-Column 3D Grid: 6 Evenly Aligned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isFeatured={index === 0 || index === 1}
            />
          ))}
        </div>

        {/* Bottom 3D Elevated Call Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative overflow-hidden card-sheen">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#168DFF]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#168DFF]/40">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-cyan-400/20">
                <Zap className="w-3.5 h-3.5" />
                <span>Instant Phone Triage</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Need Help Diagnosing Your Specific Plumbing Symptom?
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1.5 max-w-xl leading-relaxed">
                From water pressure regulators and angle stops to fixture replacements, call our Irvine line directly to discuss your setup.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-auto flex flex-col items-center sm:items-end">
            <PhoneCTA
              placement="services_bottom_banner"
              label={`Call ${BUSINESS_PHONE.display}`}
              variant="hero"
              className="w-full sm:w-auto text-sm py-4 px-8 font-bold whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
              showIcon={true}
            />
            <span className="text-[11px] text-[#94A3B8] mt-2">
              Direct master plumber consultation • No wait time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

