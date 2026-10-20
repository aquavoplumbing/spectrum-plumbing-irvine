"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Home, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { ServiceAreaItem } from "@/data/serviceAreas";
import { BUSINESS_PHONE } from "@/config/business";
import { trackPhoneClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface AreaCardProps {
  area: ServiceAreaItem;
  isFeatured?: boolean;
}

export function AreaCard({ area, isFeatured = false }: AreaCardProps) {
  const handlePhoneClick = () => {
    trackPhoneClick(`service_area_${area.id}`, `Call for ${area.name}`);
  };

  return (
    <article
      id={area.anchor.replace("#", "")}
      className={cn(
        "relative rounded-3xl p-5 sm:p-5.5 bg-white border transition-all duration-300 flex flex-col justify-between group bento-card-3d card-sheen h-full",
        isFeatured
          ? "border-[#168DFF]/60 shadow-[0_16px_35px_-8px_rgba(22,141,255,0.18)] ring-1 ring-[#168DFF]/25"
          : "border-slate-200/90 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.05)] hover:border-[#168DFF]/60 hover:shadow-[0_16px_35px_-8px_rgba(15,23,42,0.1)]"
      )}
    >
      <div>
        {/* Row 1: MapPin Icon + Zip Code Pill */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25 group-hover:scale-105 transition-transform flex-shrink-0">
            <MapPin className="w-4.5 h-4.5" aria-hidden="true" />
          </div>
          <span className="flex-shrink-0 text-[10px] px-2.5 py-1 rounded-full bg-[#F0F7FF] border border-[#168DFF]/25 text-[#087BDB] font-extrabold font-mono">
            ZIP {area.zipCodes.split(",")[0]}
          </span>
        </div>

        {/* Row 2: Full Village Name & Subtitle - Zero Truncation, Consistent Height */}
        <div className="mb-3 min-h-[46px] flex flex-col justify-center">
          <Link href={`/service-areas/${area.id}/`}>
            <h3
              className="text-base font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors leading-snug hover:underline"
            >
              {area.name}
            </h3>
          </Link>
          <span className="text-[10px] text-[#64748B] font-medium block mt-0.5">
            Irvine Neighborhood
          </span>
        </div>

        {/* Short Description with Uniform 3-Line Box */}
        <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-3 min-h-[54px]">
          {area.shortDescription}
        </p>

        {/* Home Types and Notable Trade Features with Aligned Heights */}
        <div className="space-y-2 pt-3 border-t border-slate-100 text-xs min-h-[72px] mb-4">
          <div className="flex items-start gap-1.5 text-[#0F172A]">
            <Home className="w-3.5 h-3.5 text-[#168DFF] flex-shrink-0 mt-0.5" />
            <span className="text-[#475569] font-medium text-[11px] leading-snug line-clamp-2">
              {area.commonHomeTypes}
            </span>
          </div>
          <div className="flex items-start gap-1.5 text-[#087BDB]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-[11px] font-semibold leading-snug line-clamp-2">
              {area.notableFeature}
            </span>
          </div>
        </div>
      </div>

      {/* Aligned Card Action Footer: Full-Width Primary Call Button + Secondary Guide Link */}
      <div className="pt-3.5 mt-auto border-t border-slate-100 flex flex-col gap-2">
        <a
          href={BUSINESS_PHONE.href}
          onClick={handlePhoneClick}
          aria-label={`Call Spectrum Plumbing Irvine for ${area.name}`}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#087BDB] to-[#168DFF] hover:from-[#098BF7] hover:to-[#087BDB] shadow-md shadow-[#087BDB]/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer select-none btn-3d"
        >
          <Phone className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden="true" />
          <span className="truncate">Call Irvine Dispatch</span>
        </a>

        <Link
          href={`/service-areas/${area.id}/`}
          className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#64748B] hover:text-[#087BDB] transition-colors py-1 group/link"
        >
          <span>View Village Guide</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1 flex-shrink-0" />
        </Link>
      </div>
    </article>
  );
}
