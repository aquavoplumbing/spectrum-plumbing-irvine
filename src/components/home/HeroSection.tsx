"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Gauge,
  Activity,
  Layers,
  Radio,
  Wrench,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

const SHOWCASE_TABS = [
  {
    id: "infrastructure",
    label: "3D Pipes",
    image: "/images/hero-pipes-3d.jpg",
    alt: "Precision 3D plumbing manifold with illuminated flowing water and pressure calibration",
    badge: "3D Pipeline Analysis",
    caption: "High-spec copper manifolds & flow calibration",
    telemetry: "72 PSI • Optimal Supply",
  },
  {
    id: "leak-detection",
    label: "Sonar Scan",
    image: "/images/leak-detection-acoustic.jpg",
    alt: "Licensed technician performing non-invasive acoustic slab leak detection in an upscale home",
    badge: "Acoustic Sonar Detection",
    caption: "Acoustic frequency sonar for slab leaks",
    telemetry: "99.8% Leak Precision",
  },
  {
    id: "tankless",
    label: "Tankless",
    image: "/images/tankless-water-heater.jpg",
    alt: "Modern high-efficiency tankless water heater installation in Irvine garage",
    badge: "Tankless System Setup",
    caption: "Descaling flushes & high-output gas lines",
    telemetry: "Instant Hot Water Flow",
  },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = SHOWCASE_TABS[activeTab];

  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-8 pb-16 lg:py-20 border-b border-cyan-500/15">
      {/* Dynamic 3D Grid Backdrop & Volumetric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[750px] h-[750px] bg-[#087BDB]/25 rounded-full blur-[170px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 left-10 w-[600px] h-[600px] bg-[#38BDF8]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#168DFF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: High-Impact Typography & Conversion */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Operational Beacon Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#09223D]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xl shadow-lg shadow-[#168DFF]/15">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="tracking-widest">Live Dispatch • Serving All Irvine Villages</span>
            </div>

            {/* Primary H1 Heading: Modern Geometric Outfit Typography */}
            <h1 className="hero-title font-extrabold font-heading text-white mb-6">
              Plumber in Irvine, CA —{" "}
              <span className="gradient-text-electric">
                Immediate Help for Any Plumbing Problem
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mb-8 font-normal">
              Direct telephone triage for Irvine residential systems. From non-invasive acoustic slab leak scans and copper repiping to tankless water heaters and sewer restoration, call to discuss your symptoms directly with an experienced local specialist.
            </p>

            {/* Primary CTA & Secondary Interaction */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <PhoneCTA
                placement="hero_primary"
                label={`Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="w-full sm:w-auto shadow-2xl shadow-[#168DFF]/40 hover:shadow-[#38BDF8]/60 text-lg py-4 px-8 btn-3d"
                showIcon={true}
                subtext="Direct Phone Assistance • Zero Automated Phone Trees"
              />

              <a
                href="#problem-solver"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#94A3B8] hover:text-white py-3.5 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all group backdrop-blur-sm"
              >
                <span>Diagnostic Symptom Scanner</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#38BDF8]" />
              </a>
            </div>

            {/* 3 Sleek Holographic Glass Telemetry Badges */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-700/60">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-sm hover:border-[#38BDF8]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#168DFF]/30">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Slab & Copper</p>
                  <p className="text-[11px] text-[#94A3B8]">Acoustic Sonar Scan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-sm hover:border-[#38BDF8]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#087BDB] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#087BDB]/30">
                  <Gauge className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">55–75 PSI Standard</p>
                  <p className="text-[11px] text-[#94A3B8]">Irvine PRV Calibrated</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-sm hover:border-[#38BDF8]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/30">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">15–45 Min Dispatch</p>
                  <p className="text-[11px] text-[#94A3B8]">Local Irvine Coverage</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Next-Gen Interactive Visual Showcase Console */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer 3D Halo Glow Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-panel-dark border border-cyan-400/35 shadow-[0_25px_60px_-15px_rgba(8,123,219,0.45)] group card-sheen">
                
                {/* Top Interactive Tabs */}
                <div className="p-2.5 sm:p-3 bg-[#030C17]/95 border-b border-white/10 flex items-center justify-between backdrop-blur-xl z-20 relative gap-2">
                  <div className="hidden sm:flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 truncate">
                      {current.badge}
                    </span>
                  </div>
                  <div className="sm:hidden flex items-center gap-1.5 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">Live</span>
                  </div>

                  {/* Mode Switcher Tabs */}
                  <div className="flex items-center bg-[#09223D] p-1 rounded-xl border border-white/10 text-xs flex-shrink-0 gap-1">
                    {SHOWCASE_TABS.map((tab, idx) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(idx)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                          activeTab === idx
                            ? "bg-gradient-to-r from-[#168DFF] to-[#087BDB] text-white shadow-md shadow-[#168DFF]/40"
                            : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Showcase Image Viewport */}
                <div className="relative h-[400px] xs:h-[440px] sm:h-[490px] w-full overflow-hidden bg-[#030C17]">
                  <Image
                    key={current.id}
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in"
                    priority
                  />
                  {/* Subtle Dark Vignette & Specular Highlights */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/25 to-transparent pointer-events-none" />

                  {/* Top-Right Floating Telemetry Pill */}
                  <div className="absolute top-3.5 right-3.5 bg-[#051426]/90 border border-[#38BDF8]/40 backdrop-blur-md rounded-xl p-2.5 text-white shadow-2xl flex items-center gap-2.5 pointer-events-none z-10 animate-float-gentle">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md flex-shrink-0">
                      <Gauge className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-wider">
                        Telemetry
                      </p>
                      <p className="text-[11px] font-extrabold text-white">
                        {current.telemetry}
                      </p>
                    </div>
                  </div>

                  {/* Mid-Left Feature Micro-Badge */}
                  <div className="absolute bottom-24 left-3.5 bg-[#051426]/85 border border-cyan-400/30 backdrop-blur-md rounded-xl px-3 py-1.5 text-white shadow-xl flex items-center gap-2 pointer-events-none z-10">
                    <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      {current.caption}
                    </span>
                  </div>

                  {/* Bottom Command Bar: Clickable Dispatch Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#09223D]/95 border border-[#38BDF8]/35 backdrop-blur-xl rounded-2xl p-3 text-white shadow-2xl flex items-center justify-between z-20 gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] flex items-center justify-center text-white shadow-lg shadow-[#168DFF]/40 flex-shrink-0">
                        <Phone className="w-4.5 h-4.5 fill-current" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider truncate">
                          Direct Irvine Service Line
                        </p>
                        <a
                          href={BUSINESS_PHONE.href}
                          className="text-sm sm:text-base font-extrabold text-white hover:text-[#38BDF8] transition-colors truncate block"
                        >
                          {BUSINESS_PHONE.display}
                        </a>
                      </div>
                    </div>

                    <a
                      href={BUSINESS_PHONE.href}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#168DFF] to-[#087BDB] hover:from-[#38BDF8] hover:to-[#168DFF] text-white text-xs font-bold shadow-lg shadow-[#168DFF]/30 transition-all btn-3d whitespace-nowrap flex-shrink-0 cursor-pointer"
                    >
                      Call Now
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
