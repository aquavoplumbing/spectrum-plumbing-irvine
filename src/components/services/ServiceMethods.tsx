import React from "react";
import { Wrench, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { ServicePageData } from "@/types/service";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface ServiceMethodsProps {
  service: ServicePageData;
}

export function ServiceMethods({ service }: ServiceMethodsProps) {
  const { methods } = service;

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering & Trade Practices"
          title={methods.heading}
          subtitle={methods.subtitle}
          centered={true}
        />

        {/* Methods Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-stretch">
          {methods.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_30px_-8px_rgba(15,23,42,0.06)] bento-card-3d card-sheen flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#0F172A]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {item.consideration && (
                <div className="p-4 rounded-2xl bg-[#F0F7FF] border border-[#168DFF]/20 text-xs text-[#087BDB] leading-relaxed flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F172A] font-bold uppercase tracking-wider text-[10px] mb-0.5">
                      Technical Consideration:
                    </strong>
                    <span>{item.consideration}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Safety Alert Notice when present */}
        {methods.safetyNotice && (
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-rose-600/30">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-heading text-rose-900 mb-1">
                Important Safety Advisory
              </h4>
              <p className="text-xs sm:text-sm text-rose-800 leading-relaxed font-medium">
                {methods.safetyNotice}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
