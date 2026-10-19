import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocalIrvineSectionProps {
  heading: string;
  description: string;
  villages: string[];
  serviceLinks: Array<{
    title: string;
    href: string;
    description: string;
  }>;
  className?: string;
}

export function LocalIrvineSection({
  heading,
  description,
  villages,
  serviceLinks,
  className,
}: LocalIrvineSectionProps) {
  return (
    <div
      className={cn(
        "my-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden",
        className
      )}
    >
      <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#087BDB] mb-3">
        <MapPin className="w-4 h-4 text-[#168DFF]" />
        <span>Irvine, California Neighborhood Guide</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] mb-3">
        {heading}
      </h3>

      <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
        {description}
      </p>

      {/* Villages Grid */}
      <div className="space-y-3 mb-8">
        {villages.map((village, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-xs text-[#334155] leading-relaxed flex items-start gap-3"
          >
            <Building2 className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
            <span>{village}</span>
          </div>
        ))}
      </div>

      {/* Relevant Internal Links Grid */}
      <div className="pt-6 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
          Related Irvine Plumbing Resources:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {serviceLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="p-3.5 rounded-xl border border-slate-200/80 hover:border-[#168DFF]/60 bg-white hover:bg-[#F0F7FF]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-xs text-[#0F172A] group-hover:text-[#087BDB] transition-colors flex items-center justify-between">
                  <span>{link.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#168DFF] transition-transform group-hover:translate-x-1" />
                </span>
                <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
