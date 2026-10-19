import React from "react";
import {
  Wrench,
  Search,
  Droplets,
  Flame,
  Activity,
  Gauge,
  GitBranch,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Repeat,
  Sparkles,
} from "lucide-react";
import { ServicePageData } from "@/types/service";
import { SectionHeading } from "@/components/shared/SectionHeading";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Search,
  Droplets,
  Flame,
  Activity,
  Gauge,
  GitBranch,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Repeat,
  Sparkles,
};

interface ServiceTypesProps {
  service: ServicePageData;
}

export function ServiceTypes({ service }: ServiceTypesProps) {
  const { serviceTypes } = service;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Problems & Solutions Covered"
          title={serviceTypes.heading}
          subtitle={serviceTypes.subtitle}
          centered={true}
        />

        {/* Bento Card Arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {serviceTypes.items.map((item, idx) => {
            const IconComponent = (item.icon && ICON_MAP[item.icon]) || Wrench;
            const isFeatured = idx === 0 || Boolean(item.badge);

            return (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between card-sheen bento-card-3d ${
                  isFeatured
                    ? "bg-gradient-to-br from-white via-[#F8FAFC] to-[#F0F7FF] border-[#168DFF]/40 shadow-[0_16px_35px_-8px_rgba(22,141,255,0.14)]"
                    : "bg-white border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.05)] hover:border-[#168DFF]/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F7FF] text-[#168DFF] flex items-center justify-center border border-[#168DFF]/20 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {item.badge ? (
                      <span className="text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full bg-[#168DFF] text-white shadow-md shadow-[#168DFF]/30">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-bold text-slate-300">
                        0{idx + 1}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#087BDB]">
                  <CheckCircle2 className="w-4 h-4 text-[#168DFF]" />
                  <span>Comprehensive Irvine Guidance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
