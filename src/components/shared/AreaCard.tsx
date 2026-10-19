import React from "react";
import Link from "next/link";
import { MapPin, Home, CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceAreaItem } from "@/data/serviceAreas";
import { PhoneCTA } from "./PhoneCTA";
import { cn } from "@/lib/utils";

interface AreaCardProps {
  area: ServiceAreaItem;
  isFeatured?: boolean;
}

export function AreaCard({ area, isFeatured = false }: AreaCardProps) {
  const isWoodbridge = area.id === "woodbridge";

  return (
    <article
      id={area.anchor.replace("#", "")}
      className={cn(
        "relative rounded-3xl p-6 bg-white border transition-all duration-300 flex flex-col justify-between group bento-card-3d card-sheen",
        isFeatured
          ? "border-[#168DFF]/60 shadow-[0_16px_35px_-8px_rgba(22,141,255,0.18)] ring-1 ring-[#168DFF]/25"
          : "border-slate-200/90 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.05)] hover:border-[#168DFF]/60"
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25 group-hover:scale-105 transition-transform">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            {isWoodbridge ? (
              <Link href={`/service-areas/${area.id}/`}>
                <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors leading-tight hover:underline">
                  {area.name}
                </h3>
              </Link>
            ) : (
              <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors leading-tight">
                {area.name}
              </h3>
            )}
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F0F7FF] border border-[#168DFF]/20 text-[#087BDB] font-extrabold font-mono">
            {area.zipCodes.split(",")[0]}
          </span>
        </div>

        <p className="text-xs text-[#64748B] leading-relaxed mb-4">
          {area.shortDescription}
        </p>

        <div className="space-y-2 pt-3.5 border-t border-slate-100 text-xs">
          <div className="flex items-start gap-2 text-[#0F172A]">
            <Home className="w-3.5 h-3.5 text-[#168DFF] flex-shrink-0 mt-0.5" />
            <span className="text-[#475569] font-medium">{area.commonHomeTypes}</span>
          </div>
          <div className="flex items-center gap-2 text-[#087BDB] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
            <span className="text-xs">{area.notableFeature}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        {isWoodbridge ? (
          <Link
            href={`/service-areas/${area.id}/`}
            className="text-xs font-bold text-[#087BDB] hover:text-[#168DFF] inline-flex items-center gap-1 group/link"
          >
            <span>Woodbridge Page</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        ) : (
          <span className="text-[11px] font-medium text-slate-400">
            Irvine Village
          </span>
        )}

        <PhoneCTA
          placement={`service_area_${area.id}`}
          label={`Call for ${area.name}`}
          variant="outline"
          className="text-xs py-2 px-3 font-bold hover:bg-[#168DFF] hover:text-white hover:border-[#168DFF] transition-all btn-3d"
          showIcon={true}
        />
      </div>
    </article>
  );
}
