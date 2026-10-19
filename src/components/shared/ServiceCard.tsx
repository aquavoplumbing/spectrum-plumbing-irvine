import React from "react";
import Image from "next/image";
import {
  Flame,
  Droplets,
  Zap,
  Activity,
  ShieldAlert,
  GitBranch,
  Search,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import { PhoneCTA } from "./PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  isFeatured?: boolean;
}

const iconMap = {
  Flame,
  Droplets,
  Zap,
  Activity,
  ShieldAlert,
  GitBranch,
  Search,
  Wrench,
};

export function ServiceCard({
  service,
  isFeatured = false,
}: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Wrench;

  return (
    <article
      id={service.anchor.replace("#", "")}
      className={cn(
        "group relative flex flex-col justify-between h-full rounded-3xl overflow-hidden bg-white border transition-all duration-300 card-sheen bento-card-3d",
        isFeatured
          ? "border-[#168DFF]/60 shadow-[0_20px_45px_-10px_rgba(22,141,255,0.2)] ring-1 ring-[#168DFF]/30"
          : "border-slate-200/90 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.06)] hover:border-[#168DFF]/60"
      )}
    >
      {/* Top Image Container with Uniform Aspect Ratio */}
      <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-950">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Subtle Dark Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/40 to-transparent" />

        {/* Floating Category Badge */}
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

        {/* Floating Icon Box & Location */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#087BDB] to-[#38BDF8] text-white flex items-center justify-center shadow-lg shadow-[#087BDB]/40 border border-white/20 group-hover:scale-105 transition-transform">
              <IconComponent className="w-5 h-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-extrabold text-white uppercase tracking-wider drop-shadow-md">
              Irvine, CA Support
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-3 leading-snug">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#475569] leading-relaxed mb-6">
            {service.shortDescription}
          </p>

          {/* Key problems solved preview (consistent 2 items for alignment) */}
          <div className="pt-4 border-t border-slate-100 mb-6 bg-[#F8FAFC] p-3.5 rounded-2xl border">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#0F172A] mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#168DFF]" />
              <span>Common Issues Addressed:</span>
            </p>
            <div className="space-y-2">
              {service.typicalProblems.slice(0, 2).map((prob, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-[#334155]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1 font-medium">{prob}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Actions Footer - Perfectly Aligned */}
        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
          <PhoneCTA
            placement={`service_card_${service.id}`}
            label="Call for Service"
            variant="primary"
            className="w-full sm:w-auto text-xs py-3 px-5 font-bold shadow-md shadow-[#168DFF]/25 btn-3d"
            showIcon={true}
          />

          <a
            href={BUSINESS_PHONE.href}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors py-2 group/link"
          >
            <span>Discuss Issue</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}

