import React from "react";
import Link from "next/link";
import { MapPin, Lightbulb, CheckCircle2, Sparkles, Building } from "lucide-react";
import { ServicePageData } from "@/types/service";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface ServiceLocalInsightsProps {
  service: ServicePageData;
}

export function ServiceLocalInsights({ service }: ServiceLocalInsightsProps) {
  const { localInsights } = service;

  return (
    <section className="py-20 md:py-28 bg-[#F0F7FF] relative overflow-hidden border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Local Irvine Context"
          title={localInsights.heading}
          subtitle={localInsights.subtitle || "Understanding how Irvine's construction history, water conditions, and community standards influence plumbing performance."}
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-10">
          {/* Left Column (7 cols): Editorial Local Analysis */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#475569] leading-relaxed">
            {localInsights.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Practical Homeowner Tip Callout */}
            {localInsights.practicalTip && (
              <div className="p-6 rounded-3xl bg-white border border-[#168DFF]/30 shadow-md flex items-start gap-4 mt-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-[#0F172A] uppercase tracking-wider mb-1">
                    Irvine Homeowner Tip
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {localInsights.practicalTip}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Covered Irvine Villages Panel */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl card-sheen">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-[#0F172A]">
                    Irvine Village Coverage
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Prompt Telephone Triage &amp; Dispatch
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                We connect homeowners and commercial property operators across all master-planned Irvine villages with qualified trade specialists familiar with local plumbing layouts.
              </p>

              {/* Village Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {localInsights.villages.map((village, idx) => (
                  <Link
                    key={idx}
                    href={`/#area-${village.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0F7FF] text-[#087BDB] border border-[#168DFF]/20 text-xs font-semibold hover:bg-[#168DFF] hover:text-white transition-all shadow-sm"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{village}</span>
                  </Link>
                ))}
              </div>

              {/* Municipal Water Hardness Note */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A] block mb-0.5">IRWD Municipal Water Conditions:</strong>
                Irvine domestic water measures 16–18 grains per gallon (GPG) hardness. Regular plumbing maintenance protects valves, tankless coils, and fixtures from aggressive calcium carbonate calcification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
