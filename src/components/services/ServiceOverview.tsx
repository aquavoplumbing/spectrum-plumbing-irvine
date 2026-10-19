import React from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { ServicePageData } from "@/types/service";

interface ServiceOverviewProps {
  service: ServicePageData;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  const { overview } = service;

  return (
    <section
      id="overview"
      className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Editorial Text, Bullets & Secondary Explanation */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168DFF]/10 text-[#087BDB] border border-[#168DFF]/25 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{overview.eyebrow || "Service Overview & Guidance"}</span>
            </div>

            <h2 className="section-title font-extrabold font-heading text-[#0F172A] mb-6">
              {overview.heading}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#475569] leading-relaxed mb-8">
              {overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Bullet Points */}
            {overview.bulletPoints && overview.bulletPoints.length > 0 && (
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 mb-8 card-sheen">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#168DFF]" />
                  <span>Key Situations &amp; Symptoms Addressed:</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {overview.bulletPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Secondary Heading and Paragraphs if present */}
            {overview.secondaryHeading && (
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] mb-4">
                  {overview.secondaryHeading}
                </h3>
                {overview.secondaryParagraphs && (
                  <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                    {overview.secondaryParagraphs.map((sp, idx) => (
                      <p key={idx}>{sp}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Large Editorial Photographic Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden glass-panel-dark border border-cyan-400/30 shadow-[0_20px_50px_rgba(5,20,38,0.2)] group card-sheen">
              <div className="relative h-[420px] sm:h-[480px] w-full bg-slate-950">
                <Image
                  src={overview.image || service.hero.image}
                  alt={overview.imageAlt || service.hero.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/35 to-transparent" />
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#051426]/95 border border-cyan-400/30 backdrop-blur-xl text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] flex items-center justify-center text-white shadow-md shadow-[#168DFF]/40">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-white">
                      Professional Diagnostic Standard
                    </h4>
                    <p className="text-[11px] text-[#38BDF8]">
                      Irvine, CA Local Assistance
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Avoid guesswork and harmful retail chemical products. Discuss your exact symptoms directly with an experienced professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
