import React from "react";
import {
  DollarSign,
  Scale,
  Wrench,
  Search,
  Layers,
  FileCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { LocationPageData } from "@/types/location";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

interface LocalPricingFactorsProps {
  location: LocationPageData;
}

const FACTOR_ICONS = [Search, Layers, Wrench, Scale, FileCheck];

export function LocalPricingFactors({ location }: LocalPricingFactorsProps) {
  const pricing = location.pricingFactors;

  return (
    <section
      id="pricing-factors"
      className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Honest Financial Transparency"
          title={<>{pricing.heading}</>}
          subtitle={pricing.subtitle}
          centered={true}
        />

        {/* Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricing.factors.map((factor, idx) => {
            const Icon = FACTOR_ICONS[idx % FACTOR_ICONS.length];

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#168DFF]/60 transition-all duration-300 bento-card-3d card-sheen flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087BDB] bg-[#F0F7FF] px-2.5 py-1 rounded-full border border-[#168DFF]/20">
                      Factor 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-2.5 leading-snug">
                    {factor.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {factor.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 bg-[#F8FAFC] p-3 rounded-2xl border border-slate-200/70 text-xs">
                  <span className="font-bold text-[#0F172A] block mb-0.5 uppercase tracking-wider text-[10px]">
                    Cost Impact:
                  </span>
                  <p className="text-[#087BDB] font-semibold">{factor.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency & Direct Consultation Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 card-sheen">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] border border-white/20 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#168DFF]/30 mt-0.5">
              <DollarSign className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Straightforward Estimates Without Surprises
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl leading-relaxed">
                {pricing.pricingNote}
              </p>
            </div>
          </div>

          <PhoneCTA
            placement={`pricing_consultation_${location.slug}`}
            label="Call to Discuss Your Plumbing Issue"
            variant="hero"
            className="w-full lg:w-auto text-xs py-4 px-8 whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d font-bold"
            showIcon={true}
          />
        </div>

      </div>
    </section>
  );
}
