import React from "react";
import Link from "next/link";
import {
  AlertTriangle,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  Flame,
  Droplet,
  Layers,
  Gauge,
  Sparkles,
} from "lucide-react";
import { LocationPageData } from "@/types/location";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

interface LocalPlumbingConcernsProps {
  location: LocationPageData;
}

const CONCERN_ICONS = [Layers, Flame, Droplet, Gauge];

export function LocalPlumbingConcerns({ location }: LocalPlumbingConcernsProps) {
  return (
    <section
      id="local-concerns"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={`Neighborhood Insights`}
          title={<>{location.localConcerns.heading}</>}
          subtitle={location.localConcerns.subtitle}
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          {location.localConcerns.items.map((concern, idx) => {
            const Icon = CONCERN_ICONS[idx % CONCERN_ICONS.length];

            return (
              <div
                key={idx}
                className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#168DFF]/60 transition-all duration-300 bento-card-3d card-sheen flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#087BDB] bg-[#F0F7FF] px-2.5 py-1 rounded-full border border-[#168DFF]/20">
                      {location.name} Risk 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] mb-3 leading-snug">
                    {concern.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-5">
                    {concern.description}
                  </p>

                  {/* Causes & Warning Signs Grid */}
                  <div className="space-y-3.5 mb-6 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80">
                      <strong className="text-[#0F172A] block mb-1 uppercase tracking-wide text-[10px] flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-[#168DFF]" />
                        <span>Root Technical Causes:</span>
                      </strong>
                      <p className="text-[#475569] leading-relaxed">{concern.causes}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80">
                      <strong className="text-[#0F172A] block mb-1.5 uppercase tracking-wide text-[10px] flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                        <span>Warning Signs to Watch For:</span>
                      </strong>
                      <ul className="space-y-1 text-[#334155]">
                        {concern.warningSigns.map((sign, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-300/40 text-amber-950">
                      <strong className="block mb-1 uppercase tracking-wide text-[10px] text-amber-900">
                        Consequences of Delay:
                      </strong>
                      <p className="leading-relaxed">{concern.consequences}</p>
                    </div>
                  </div>
                </div>

                {/* Footer with assessment advice & contextual link */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-[#64748B]">
                    <strong className="text-[#0F172A]">When to Call:</strong> {concern.whenToCall}
                  </div>

                  {concern.relatedServiceSlug && (
                    <Link
                      href={`/services/${concern.relatedServiceSlug}/`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] whitespace-nowrap group/link"
                    >
                      <span>Explore {concern.relatedServiceName || "Service"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Call Banner */}
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 card-sheen">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Noticing Any of These Signs in Your {location.name} Home?
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
              Early detection prevents small pinhole leaks or drain blockages from turning into severe water damage. Call to evaluate your symptoms.
            </p>
          </div>
          <PhoneCTA
            placement={`concerns_banner_${location.slug}`}
            label={`Call ${BUSINESS_PHONE.display}`}
            variant="hero"
            className="w-full sm:w-auto text-xs py-3.5 px-8 whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
            showIcon={true}
          />
        </div>

      </div>
    </section>
  );
}
