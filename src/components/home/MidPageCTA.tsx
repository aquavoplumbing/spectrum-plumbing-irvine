import React from "react";
import Image from "next/image";
import { CheckCircle2, Radio } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

export interface MidPageCTAProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  highlightText?: string;
  description?: string;
  ctaText?: string;
  image?: string;
  imageAlt?: string;
  placement?: string;
  bulletPoints?: string[];
}

export function MidPageCTA({
  eyebrow = "Direct Irvine Phone Line • Immediate Response",
  heading,
  highlightText,
  description = "Call to discuss your plumbing issue and explore available assistance in Irvine. We connect you directly with knowledgeable local trade specialists without waiting in phone queues.",
  ctaText = `Call ${BUSINESS_PHONE.display}`,
  image = "/images/copper-pipe-repair.jpg",
  imageAlt = "Plumbing craftsmanship and precision pipe connection in Irvine",
  placement = "mid_page_cta",
  bulletPoints = [
    "Zero forms to fill out",
    "Direct phone consultation",
    "Residential slab & copper expertise",
  ],
}: MidPageCTAProps = {}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white py-20 md:py-28 border-y border-cyan-500/20">
      {/* 3D Atmospheric Radial Glows & Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#168DFF]/25 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-[#38BDF8]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Text & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#168DFF]/15 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md shadow-md w-fit mx-auto lg:mx-0">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="hero-title font-extrabold font-heading text-white tracking-tight mb-5">
              {heading ? (
                heading
              ) : (
                <>
                  Your Plumbing Problem{" "}
                  <span className="gradient-text-electric">
                    Deserves Immediate Attention.
                  </span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mb-8 leading-relaxed font-normal">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <PhoneCTA
                placement={placement}
                label={ctaText}
                variant="hero"
                className="w-full sm:w-auto text-base sm:text-lg py-4 px-9 font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
                showIcon={true}
                subtext="Immediate Connection • Serving All Irvine Communities"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#94A3B8]">
              {bulletPoints.map((bp, i) => (
                <span key={i} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  {bp}
                </span>
              ))}
            </div>
          </div>

          {/* Right Visual Pipe Graphic Element - Perfectly Sized to Match Content */}
          <div className="lg:col-span-5 flex justify-center w-full mt-6 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-none h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] rounded-3xl overflow-hidden glass-panel-dark border border-cyan-400/35 shadow-[0_25px_60px_-15px_rgba(3,12,23,0.8)] group card-sheen flex flex-col justify-between p-5 sm:p-6">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover transition-transform duration-700 group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/30 to-transparent pointer-events-none" />

              <div className="relative z-10 self-end bg-[#030C17]/85 border border-cyan-400/30 backdrop-blur-md rounded-xl px-3.5 py-1.5 text-[11px] font-mono text-cyan-300 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>EST. DISPATCH: 15–45 MIN</span>
              </div>

              <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-[#051426]/90 border border-cyan-400/35 backdrop-blur-xl text-center shadow-2xl mt-auto">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
                  Irvine Local Line
                </p>
                <a
                  href={BUSINESS_PHONE.href}
                  className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 hover:text-[#38BDF8] transition-colors block"
                >
                  {BUSINESS_PHONE.display}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

