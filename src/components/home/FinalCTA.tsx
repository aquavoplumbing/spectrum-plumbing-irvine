import React from "react";
import { CheckCircle2, Radio } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

export interface FinalCTAProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  highlightText?: string;
  description?: string;
  ctaText?: string;
  placement?: string;
}

export function FinalCTA({
  eyebrow = "Irvine, California Support • Live Phone Connection",
  heading,
  highlightText,
  description = "Speak with someone about your plumbing issue and available service options in Irvine, California. We connect you directly with knowledgeable local trade specialists without delay.",
  ctaText = `Call Now — ${BUSINESS_PHONE.display}`,
  placement = "final_closing_cta",
}: FinalCTAProps = {}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#02070D] text-white py-24 md:py-32 border-t border-cyan-500/20">
      {/* 3D Volumetric lighting & Ambient Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#168DFF]/20 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#168DFF]/15 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-md">
          <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>{eyebrow}</span>
        </div>

        {/* Big Heading with Modern Gradient */}
        <h2 className="hero-title font-extrabold font-heading text-white tracking-tight mb-6 max-w-3xl mx-auto">
          {heading ? (
            heading
          ) : (
            <>
              Need Plumbing Help in{" "}
              <span className="gradient-text-electric">Irvine Today?</span>
            </>
          )}
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {description}
        </p>

        {/* Giant 3D Conversion Call Button */}
        <div className="inline-block w-full sm:w-auto">
          <PhoneCTA
            placement={placement}
            label={ctaText}
            variant="hero"
            className="w-full sm:w-auto text-lg md:text-xl py-5 px-10 rounded-2xl shadow-[0_16px_50px_rgba(22,141,255,0.45)] hover:shadow-[0_20px_65px_rgba(56,189,248,0.6)] btn-3d"
            showIcon={true}
            subtext="Direct Phone Assistance • Serving All Irvine Communities"
          />
        </div>

        {/* Reassuring microcopy */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
            No Online Waiting Forms
          </span>
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
            Direct Phone Call Connection
          </span>
          <span className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
            Irvine Slab & Copper Precision
          </span>
        </div>
      </div>
    </section>
  );
}

