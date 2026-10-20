"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Droplet,
  Clock,
  Flame,
  Gauge,
  RotateCcw,
  AlertTriangle,
  ShieldAlert,
  Wrench,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  AlertOctagon,
  Search,
  Activity,
  Scan,
  Radio,
} from "lucide-react";
import { COMMON_PROBLEMS_DATA } from "@/data/problems";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";
import { cn } from "@/lib/utils";

const iconMap = {
  Droplet,
  Clock,
  Flame,
  Gauge,
  RotateCcw,
  AlertTriangle,
  ShieldAlert,
  Wrench,
};

export interface PlumbingProblemsProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  locationName?: string;
}

export function PlumbingProblems({
  badge = "Interactive 3D Diagnostic Center",
  title = <>What&apos;s Going Wrong With Your <span className="gradient-text-electric-dark">Plumbing?</span></>,
  subtitle = "Select the symptom you are observing in your Irvine property to run an instant diagnostic evaluation of causes, urgency, and recommended next steps.",
  locationName = "Irvine",
}: PlumbingProblemsProps = {}) {
  const [selectedId, setSelectedId] = useState<string>("leaking-pipes");
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>("leaking-pipes");

  const activeProblem =
    COMMON_PROBLEMS_DATA.find((p) => p.id === selectedId) ||
    COMMON_PROBLEMS_DATA[0];

  const ActiveIcon = iconMap[activeProblem.iconName] || Wrench;

  const toggleMobileItem = (id: string) => {
    setSelectedId(id);
    setMobileExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="problem-solver"
      className="py-20 md:py-28 bg-[#030C17] text-white relative overflow-hidden border-y border-cyan-500/20"
    >
      {/* 3D Cyber Grid & Radial Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#168DFF_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[#087BDB]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[550px] h-[550px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          centered={true}
          theme="dark"
        />


        {/* ================= DESKTOP 3D DIAGNOSTIC COMMAND DECK ================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch p-7 sm:p-9 rounded-3xl glass-panel-dark border border-cyan-500/30 shadow-[0_25px_60px_-15px_rgba(3,12,23,0.7)] relative overflow-hidden">
          
          {/* Subtle Ambient Scanline in Deck */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-60 animate-pulse" />

          {/* Left Column: 40% - Sleek Problem Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between px-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
                  <Scan className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Observed Symptoms</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                  {COMMON_PROBLEMS_DATA.length} SYSTEM TESTS
                </span>
              </div>

              <div className="space-y-2">
                {COMMON_PROBLEMS_DATA.map((problem) => {
                  const Icon = iconMap[problem.iconName] || Wrench;
                  const isSelected = problem.id === selectedId;

                  return (
                    <button
                      key={problem.id}
                      type="button"
                      onClick={() => setSelectedId(problem.id)}
                      aria-pressed={isSelected}
                      className={cn(
                        "w-full flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] relative overflow-hidden",
                        isSelected
                          ? "bg-gradient-to-r from-[#0D2B4D] to-[#09223D] border-[#38BDF8] shadow-lg shadow-[#168DFF]/20 translate-x-1.5"
                          : "bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-white/90"
                      )}
                    >
                      {/* Active Left Neon Glow Bar */}
                      {isSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />
                      )}

                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-sm",
                            isSelected
                              ? "bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white shadow-[#168DFF]/40"
                              : "bg-white/10 text-[#38BDF8] group-hover:bg-[#168DFF] group-hover:text-white"
                          )}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <span
                            className={cn(
                              "text-sm font-bold font-heading block transition-colors",
                              isSelected ? "text-white" : "text-white/80 group-hover:text-white"
                            )}
                          >
                            {problem.title}
                          </span>
                          <span className="text-[11px] text-[#94A3B8] flex items-center gap-1.5 mt-0.5">
                            <span
                              className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                problem.urgency.toLowerCase().includes("high") || problem.urgency.toLowerCase().includes("emergency")
                                  ? "bg-rose-400 animate-pulse"
                                  : "bg-amber-400"
                              )}
                            />
                            {problem.urgency} Urgency
                          </span>
                        </div>
                      </div>

                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isSelected
                            ? "text-[#38BDF8] translate-x-1"
                            : "text-white/30 group-hover:text-white"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Irvine Live Telemetry micro-widget */}
            <div className="p-3.5 rounded-2xl bg-[#051426]/80 border border-cyan-500/20 text-xs text-[#94A3B8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-white text-[11px] font-mono">IRVINE DISPATCH READY</span>
              </div>
              <a
                href={BUSINESS_PHONE.href}
                className="text-[#38BDF8] font-bold text-xs hover:underline flex items-center gap-1"
              >
                <span>Call (949) 539-8503</span>
              </a>
            </div>
          </div>

          {/* Right Column: 60% - ONE Active Holographic Diagnostic Panel */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#051426]/90 rounded-2xl border border-cyan-400/25 shadow-2xl overflow-hidden flex-1 flex flex-col justify-between relative">
              
              {/* Photo & Overlaid 3D Reticle Header */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-950">
                <Image
                  src={activeProblem.image}
                  alt={activeProblem.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority={selectedId === "leaking-pipes"}
                />
                
                {/* Visual Laser Reticle / Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051426] via-[#051426]/50 to-transparent" />
                
                {/* Animated Scanline Sweep */}
                <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-cyan-400/15 to-transparent pointer-events-none animate-scanline" />

                {/* Overlaid Telemetry Badge Header */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#030C17]/90 text-cyan-300 border border-cyan-400/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                    <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                    <span>DIAGNOSTIC STATUS: EVALUATED</span>
                  </span>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#168DFF] text-white shadow-lg shadow-[#168DFF]/40 border border-white/20">
                    {activeProblem.urgency} Urgency
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-lg shadow-[#168DFF]/40 border border-white/20">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
                        Active Irvine Diagnostic View
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {activeProblem.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel Details */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed mb-4">
                    {activeProblem.shortExplanation}
                  </p>

                  {/* Safety Advice Box */}
                  {activeProblem.safetyAdvice && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-start gap-3 mb-4">
                      <AlertOctagon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                          Safety Protocol & Shutoff Precaution
                        </p>
                        <p className="text-xs text-amber-100/90 mt-1 leading-relaxed">
                          {activeProblem.safetyAdvice}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Warning Signs vs Root Causes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Warning Signs</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                        {activeProblem.warningSigns.map((sign, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#38BDF8] font-bold">•</span>
                            <span className="line-clamp-1">{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5 flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Likely Root Causes</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                        {activeProblem.possibleCauses.map((cause, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommended Action */}
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-[#0D2B4D]/80 to-[#09223D]/80 border border-[#38BDF8]/30">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-1">
                      Recommended Next Step
                    </p>
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                      {activeProblem.recommendedNextStep}
                    </p>
                  </div>
                </div>

                {/* Conversion Action Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                  <div>
                    <span className="text-xs text-[#94A3B8]">Specialized Service:</span>
                    <a
                      href={activeProblem.serviceAnchor}
                      className="block text-sm font-bold text-[#38BDF8] hover:text-white hover:underline transition-colors"
                    >
                      {activeProblem.relevantService}
                    </a>
                  </div>

                  <PhoneCTA
                    placement={`problem_panel_${activeProblem.id}`}
                    label={`Call About ${activeProblem.title}`}
                    variant="hero"
                    className="w-full sm:w-auto py-3 px-6 text-xs font-bold shadow-xl shadow-[#168DFF]/30 btn-3d"
                    showIcon={true}
                  />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ================= MOBILE UNIFIED 3D DIAGNOSTIC HUB (ONE Active Detail Panel) ================= */}
        <div className="lg:hidden space-y-4">
          {/* Horizontal Symptom Selector Pills */}
          <div className="w-full min-w-0">
            <div className="flex items-center justify-between px-1 mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
                <Scan className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Select Observed Symptom</span>
              </span>
              <span className="text-[10px] text-cyan-300 font-mono">
                Swipe ← →
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 touch-scroll -mx-4 px-4">
              {COMMON_PROBLEMS_DATA.map((problem) => {
                const Icon = iconMap[problem.iconName] || Wrench;
                const isSelected = problem.id === selectedId;

                return (
                  <button
                    key={problem.id}
                    type="button"
                    onClick={() => setSelectedId(problem.id)}
                    aria-pressed={isSelected}
                    className={cn(
                      "flex-shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer",
                      isSelected
                        ? "bg-gradient-to-r from-[#168DFF] to-[#087BDB] text-white border-cyan-400 shadow-md shadow-[#168DFF]/30 scale-[1.02]"
                        : "bg-white/[0.05] hover:bg-white/[0.1] text-white/80 border-white/10"
                    )}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{problem.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ONE Dedicated Mobile Diagnostic Detail Card */}
          <div className="bg-[#051426]/95 rounded-2xl border border-cyan-400/30 shadow-xl overflow-hidden">
            {/* Header image with reticle */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
              <Image
                src={activeProblem.image}
                alt={activeProblem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051426] via-[#051426]/50 to-transparent" />
              <div className="absolute inset-x-0 h-12 bg-gradient-to-b from-cyan-400/15 to-transparent pointer-events-none animate-scanline" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#030C17]/90 text-cyan-300 border border-cyan-400/40 backdrop-blur-md flex items-center gap-1 shadow-sm">
                  <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span>DIAGNOSTIC STATUS: ACTIVE</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#168DFF] text-white shadow-md border border-white/20">
                  {activeProblem.urgency} Urgency
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-lg shadow-[#168DFF]/40 border border-white/20 flex-shrink-0">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#38BDF8] block">
                    Diagnostic Analysis
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white truncate">
                    {activeProblem.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 sm:p-5 space-y-3.5">
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {activeProblem.shortExplanation}
              </p>

              {activeProblem.safetyAdvice && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200 flex items-start gap-2">
                  <AlertOctagon className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-amber-300">Safety Notice: </strong>
                    {activeProblem.safetyAdvice}
                  </div>
                </div>
              )}

              {/* Warning Signs & Root Causes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="text-[11px] font-bold uppercase text-[#38BDF8] mb-1.5 flex items-center gap-1">
                    <ShieldAlert className="w-3 h-3" />
                    <span>Warning Signs</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[#CBD5E1]">
                    {activeProblem.warningSigns.slice(0, 3).map((sign, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#38BDF8] font-bold">•</span>
                        <span className="leading-tight">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="text-[11px] font-bold uppercase text-emerald-400 mb-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Likely Causes</span>
                  </p>
                  <ul className="space-y-1 text-xs text-[#CBD5E1]">
                    {activeProblem.possibleCauses.slice(0, 3).map((cause, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span className="leading-tight">{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="p-3 rounded-xl bg-[#0D2B4D] border border-cyan-400/30 text-xs text-white leading-relaxed">
                <strong className="text-[#38BDF8] block mb-0.5">Recommended Next Step:</strong>
                {activeProblem.recommendedNextStep}
              </div>

              {/* Call CTA Button */}
              <PhoneCTA
                placement={`mobile_problem_${activeProblem.id}`}
                label={`Call About ${activeProblem.title}`}
                variant="hero"
                className="w-full min-h-[46px] py-3 text-xs font-bold btn-3d shadow-xl shadow-[#168DFF]/30 mt-2"
                showIcon={true}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

