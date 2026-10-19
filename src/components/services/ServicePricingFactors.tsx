import React from "react";
import { DollarSign, HelpCircle, PhoneCall, CheckCircle2, Sparkles } from "lucide-react";
import { ServicePageData } from "@/types/service";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

interface ServicePricingFactorsProps {
  service: ServicePageData;
}

export function ServicePricingFactors({ service }: ServicePricingFactorsProps) {
  const { pricingFactors } = service;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Pricing Clarity"
          title={pricingFactors.heading}
          subtitle={pricingFactors.subtitle}
          centered={true}
        />

        {/* 4 Cost Factor Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 items-stretch">
          {pricingFactors.factors.map((factor, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.05)] hover:border-[#168DFF]/50 transition-all card-sheen flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0F7FF] text-[#168DFF] flex items-center justify-center border border-[#168DFF]/20 shadow-sm">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full bg-white text-[#087BDB] border border-slate-200 shadow-sm">
                    {factor.impact}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] mb-2.5">
                  {factor.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {factor.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-[#087BDB]">
                <CheckCircle2 className="w-4 h-4 text-[#168DFF]" />
                <span>Factor evaluated during phone triage</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Banner with Direct Call Action */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 card-sheen">
          <div className="flex items-start gap-5">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] border border-white/20 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#168DFF]/30 mt-0.5">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Transparent Pricing, Zero Hidden Fees
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-2 max-w-2xl leading-relaxed">
                {pricingFactors.pricingNote}
              </p>
            </div>
          </div>

          <PhoneCTA
            placement={`service_pricing_${service.slug}`}
            label={`Call ${BUSINESS_PHONE.display}`}
            variant="hero"
            className="w-full md:w-auto text-xs py-4 px-8 whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
            showIcon={true}
          />
        </div>
      </div>
    </section>
  );
}
