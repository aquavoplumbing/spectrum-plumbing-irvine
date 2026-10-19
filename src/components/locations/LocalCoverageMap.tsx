"use client";

import React, { useState } from "react";
import {
  Compass,
  MapPin,
  CheckCircle2,
  Navigation,
  Layers,
  Radio,
  PhoneCall,
} from "lucide-react";
import { LocationPageData } from "@/types/location";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";
import { cn } from "@/lib/utils";

interface LocalCoverageMapProps {
  location: LocationPageData;
}

export function LocalCoverageMap({ location }: LocalCoverageMapProps) {
  const [activeAreaIndex, setActiveAreaIndex] = useState<number | null>(null);
  const coverage = location.coverage;

  return (
    <section
      id="coverage-map"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Geographic Scope"
          title={<>{coverage.heading}</>}
          subtitle={coverage.description}
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          
          {/* Left Column (7 cols): Responsive Interactive Geographic Diagram */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-gradient-to-br from-[#030C17] via-[#051426] to-[#09223D] p-6 sm:p-8 text-white border border-cyan-500/25 shadow-2xl relative flex flex-col justify-between">
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#168DFF]/20 rounded-full blur-[100px] pointer-events-none" />

            <div>
              {/* Map Header Status */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#38BDF8]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {location.name} Perimeter Vector Grid
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  ZIP CODES: {coverage.zipCodesServed.join(", ")}
                </span>
              </div>

              {/* Styled SVG Geometric Map of Woodbridge */}
              <div className="relative w-full aspect-[16/10] bg-[#02070D]/90 rounded-2xl border border-cyan-400/20 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

                {/* Road Boundaries Labels */}
                <div className="absolute top-2 inset-x-0 text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase">
                    ▲ NORTH: IRVINE CENTER DRIVE
                  </span>
                </div>
                <div className="absolute bottom-2 inset-x-0 text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase">
                    ▼ SOUTH: ALTON PARKWAY
                  </span>
                </div>
                <div className="absolute left-2 inset-y-0 flex items-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
                    WEST: CULVER DRIVE
                  </span>
                </div>
                <div className="absolute right-2 inset-y-0 flex items-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase [writing-mode:vertical-lr]">
                    EAST: JEFFREY ROAD
                  </span>
                </div>

                {/* Central Interactive Schematic */}
                <div className="relative z-10 w-full max-w-md space-y-4">
                  {/* North Lake Node */}
                  <div
                    onMouseEnter={() => setActiveAreaIndex(0)}
                    onMouseLeave={() => setActiveAreaIndex(null)}
                    className={cn(
                      "p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between",
                      activeAreaIndex === 0
                        ? "bg-[#168DFF]/25 border-cyan-300 shadow-lg shadow-[#168DFF]/40 scale-102"
                        : "bg-white/[0.04] border-cyan-500/30 hover:border-cyan-400"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] flex items-center justify-center text-white">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">North Lake &amp; Stonecreek Sector</p>
                        <p className="text-[10px] text-[#94A3B8]">Single-family &amp; lakeside patio tracts</p>
                      </div>
                    </div>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                  </div>

                  {/* Woodbridge Village Center / Central Canal Node */}
                  <div
                    onMouseEnter={() => setActiveAreaIndex(1)}
                    onMouseLeave={() => setActiveAreaIndex(null)}
                    className={cn(
                      "p-3 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between mx-4",
                      activeAreaIndex === 1
                        ? "bg-[#168DFF]/25 border-cyan-300 shadow-lg shadow-[#168DFF]/40 scale-102"
                        : "bg-white/[0.03] border-cyan-500/20 hover:border-cyan-400"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center">
                        <Navigation className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs font-bold text-white">Woodbridge Center &amp; Barranca Corridor</p>
                    </div>
                    <span className="text-[10px] font-mono text-[#38BDF8]">MID-GRID</span>
                  </div>

                  {/* South Lake Node */}
                  <div
                    onMouseEnter={() => setActiveAreaIndex(2)}
                    onMouseLeave={() => setActiveAreaIndex(null)}
                    className={cn(
                      "p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between",
                      activeAreaIndex === 2
                        ? "bg-[#168DFF]/25 border-cyan-300 shadow-lg shadow-[#168DFF]/40 scale-102"
                        : "bg-white/[0.04] border-cyan-500/30 hover:border-cyan-400"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#087BDB] to-[#168DFF] flex items-center justify-center text-white">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">South Lake &amp; Windjammer Sector</p>
                        <p className="text-[10px] text-[#94A3B8]">Waterside residences &amp; townhomes</p>
                      </div>
                    </div>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Boundary Clarification */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Verified IRWD &amp; City of Irvine Service Boundaries</span>
              </span>
              <span className="text-white font-mono">100% COVERED</span>
            </div>
          </div>

          {/* Right Column (5 cols): Sub-Neighborhoods List & Verification Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-1">
                  Woodbridge Communities &amp; Tracts Served
                </h3>
                <p className="text-xs text-[#64748B]">
                  Full residential plumbing referral coverage across all Woodbridge Village tracts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coverage.subAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-[#1E293B] flex items-center gap-2 hover:border-[#168DFF] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#168DFF] flex-shrink-0" />
                    <span className="font-medium line-clamp-1">{area}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#F0F7FF] border border-[#168DFF]/20 text-xs text-[#087BDB] space-y-1">
                <strong className="block uppercase tracking-wider text-[10px]">
                  Arterial Boundary Definition:
                </strong>
                <p className="text-[#334155] leading-relaxed">
                  {coverage.landmarkBoundaries}
                </p>
              </div>
            </div>

            {/* Direct Phone Dispatch Consultation */}
            <div className="p-6 rounded-3xl bg-[#0F172A] text-white border border-slate-800 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Schedule or Inquire in {location.name}
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Confirm technician availability for your specific street or cul-de-sac. Call (949) 539-8503 directly.
              </p>
              <PhoneCTA
                placement={`map_section_${location.slug}`}
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="w-full text-xs py-3 font-bold btn-3d"
                showIcon={true}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
