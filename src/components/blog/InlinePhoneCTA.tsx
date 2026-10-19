import React from "react";
import { Phone, ShieldCheck } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { cn } from "@/lib/utils";

interface InlinePhoneCTAProps {
  placement: string;
  heading: string;
  description: string;
  buttonText?: string;
  className?: string;
}

export function InlinePhoneCTA({
  placement,
  heading,
  description,
  buttonText,
  className,
}: InlinePhoneCTAProps) {
  return (
    <aside
      aria-label={`Phone Assistance: ${heading}`}
      className={cn(
        "my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#051426] via-[#09223D] to-[#0D2B4D] text-white border border-cyan-400/25 shadow-xl relative overflow-hidden card-sheen",
        className
      )}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#168DFF]/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#168DFF]/20 border border-cyan-400/30 text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Irvine Plumbing Assistance</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight mb-2">
            {heading}
          </h3>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        <div className="flex-shrink-0 w-full sm:w-auto text-center">
          <PhoneCTA
            placement={placement}
            label={buttonText || `Call ${BUSINESS_PHONE.display}`}
            variant="hero"
            className="w-full sm:w-auto text-xs py-3.5 px-6 font-bold shadow-lg shadow-[#168DFF]/30 btn-3d"
            showIcon={true}
          />
          <p className="text-[10px] text-[#94A3B8] mt-2 flex items-center justify-center gap-1">
            <Phone className="w-3 h-3 text-[#38BDF8]" />
            <span>Direct Phone Call • Serving All Irvine Villages</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
