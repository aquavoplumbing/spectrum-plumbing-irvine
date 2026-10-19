import React from "react";
import {
  Clock,
  Volume2,
  Droplets,
  Flame,
  AlertTriangle,
  Activity,
  Gauge,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  Search,
  Sparkles,
} from "lucide-react";
import { ServicePageData, ServiceSymptom } from "@/types/service";
import { SectionHeading } from "@/components/shared/SectionHeading";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Volume2,
  Droplets,
  Flame,
  AlertTriangle,
  Activity,
  Gauge,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  Search,
  Sparkles,
};

interface ServiceSymptomsProps {
  service: ServicePageData;
}

export function ServiceSymptoms({ service }: ServiceSymptomsProps) {
  const { symptoms } = service;

  const getSeverityBadge = (severity?: ServiceSymptom["severity"]) => {
    switch (severity) {
      case "urgent":
        return (
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
            Urgent Priority
          </span>
        );
      case "high":
        return (
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            High Priority
          </span>
        );
      case "medium":
        return (
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
            Moderate
          </span>
        );
      case "low":
      default:
        return (
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            Early Warning
          </span>
        );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F0F7FF] relative overflow-hidden border-b border-sky-100">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#168DFF]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Symptom Checklist"
          title={symptoms.heading}
          subtitle={symptoms.subtitle}
          centered={true}
        />

        {/* 6 to 8 Symptom Cards in Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {symptoms.items.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || AlertTriangle;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(5,20,38,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(8,123,219,0.2)] hover:-translate-y-1.5 transition-all duration-300 card-sheen flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F7FF] text-[#168DFF] flex items-center justify-center border border-[#168DFF]/20 group-hover:bg-gradient-to-tr group-hover:from-[#168DFF] group-hover:to-[#38BDF8] group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {getSeverityBadge(item.severity)}
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-2.5 group-hover:text-[#087BDB] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Sign #{idx + 1}</span>
                  <span className="font-semibold text-[#087BDB] group-hover:underline">
                    Telephone Evaluation Available
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
