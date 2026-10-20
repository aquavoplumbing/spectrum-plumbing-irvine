import React from "react";
import { Compass, Radio } from "lucide-react";
import { SERVICE_AREAS_DATA } from "@/data/serviceAreas";
import { AreaCard } from "@/components/shared/AreaCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

export function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
      {/* Dynamic 3D ambient orbs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#168DFF]/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Orange County Service Coverage"
          title={<>Plumbing Service Coverage <span className="gradient-text-accent">Across Irvine</span></>}
          subtitle="Explore plumbing information and available services for Irvine neighborhoods. Confirm technician availability for your community by calling (949) 539-8503."
          centered={true}
        />

        {/* 10 Neighborhood Grid with 3D bento alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
          {SERVICE_AREAS_DATA.map((area, index) => (
            <AreaCard
              key={area.id}
              area={area}
              isFeatured={index === 0 || index === 1}
            />
          ))}
        </div>

        {/* Section bottom banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 card-sheen">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#168DFF]/40 border border-white/20">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-1.5 border border-cyan-400/20">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Greater Irvine Perimeter Coverage</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Located near Irvine or unincorporated Orange County?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                We also connect homeowners in adjacent communities including Tustin, Newport Coast, and Costa Mesa.
              </p>
            </div>
          </div>

          <PhoneCTA
            placement="service_areas_bottom"
            label={`Call ${BUSINESS_PHONE.display}`}
            variant="hero"
            className="w-full md:w-auto text-sm py-4 px-8 font-bold whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
            showIcon={true}
          />
        </div>
      </div>
    </section>
  );
}

