import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Zap,
} from "lucide-react";
import { LocationPageData } from "@/types/location";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";
import { cn } from "@/lib/utils";

interface LocalServiceGridProps {
  location: LocationPageData;
}

export function LocalServiceGrid({ location }: LocalServiceGridProps) {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* 3D ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#168DFF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={`Available in ${location.name}`}
          title={<>{location.services.heading}</>}
          subtitle={location.services.subtitle}
          centered={true}
        />

        {/* Varied Bento Grid of Standalone Complete Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {location.services.items.map((service, index) => {
            const isFeatured = service.isFeatured || index === 0 || index === 1;

            return (
              <article
                key={service.slug}
                className={cn(
                  "group relative flex flex-col justify-between h-full rounded-3xl overflow-hidden bg-white border transition-all duration-300 card-sheen bento-card-3d",
                  isFeatured
                    ? "border-[#168DFF]/60 shadow-[0_20px_45px_-10px_rgba(22,141,255,0.2)] ring-1 ring-[#168DFF]/30"
                    : "border-slate-200/90 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.06)] hover:border-[#168DFF]/60"
                )}
              >
                {/* Top Image Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={service.image}
                    alt={`${service.name} in ${location.name}, Irvine, CA`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/40 to-transparent" />

                  {/* Category / Urgency Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4">
                      <span
                        className={cn(
                          "px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide backdrop-blur-xl shadow-lg border",
                          isFeatured
                            ? "bg-[#168DFF] text-white border-white/20 shadow-[#168DFF]/40"
                            : "bg-[#030C17]/90 text-[#38BDF8] border-cyan-400/30"
                        )}
                      >
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Location Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-white uppercase tracking-wider drop-shadow-md">
                      {location.name}, Irvine Service
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Service Name */}
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-3 leading-snug">
                      {service.name}
                    </h3>

                    {/* Detailed 50-90 Word Explanation */}
                    <p className="text-sm text-[#475569] leading-relaxed mb-5">
                      {service.shortExplanation}
                    </p>

                    {/* Symptoms Addressed Preview */}
                    <div className="pt-4 border-t border-slate-100 mb-6 bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200/70">
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#168DFF]" />
                        <span>Common Signs In {location.name}:</span>
                      </p>
                      <div className="space-y-1.5">
                        {service.commonSymptoms.slice(0, 3).map((symptom, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#334155]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#168DFF] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1 font-medium">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer: Primary Phone CTA + Secondary Service Page Link */}
                  <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
                    <PhoneCTA
                      placement={`loc_srv_${location.slug}_${service.slug}`}
                      label="Call for Service"
                      variant="primary"
                      className="w-full sm:w-auto text-xs py-2.5 px-5 font-bold shadow-md shadow-[#168DFF]/25 btn-3d"
                      showIcon={true}
                    />

                    <Link
                      href={service.serviceLink}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors py-2 group/link"
                    >
                      <span>Explore Service Page</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Call Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative overflow-hidden card-sheen">
          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#168DFF]/40">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-cyan-400/20">
                <Zap className="w-3.5 h-3.5" />
                <span>{location.name} Phone Triage</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Unsure Which Plumbing Service Fits Your Symptom?
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1.5 max-w-xl leading-relaxed">
                Describe what you are hearing or seeing in your {location.name} property. We will help identify the root issue and connect you with the appropriate specialist.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-auto flex flex-col items-center sm:items-end">
            <PhoneCTA
              placement={`loc_services_bottom_${location.slug}`}
              label={`Call ${BUSINESS_PHONE.display}`}
              variant="hero"
              className="w-full sm:w-auto text-sm py-4 px-8 font-bold whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
              showIcon={true}
            />
            <span className="text-[11px] text-[#94A3B8] mt-2">
              Direct consultation • Zero waiting queues
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
