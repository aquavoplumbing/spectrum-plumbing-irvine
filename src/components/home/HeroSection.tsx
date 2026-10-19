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
  Box,
  Layers,
  Radio,
} from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { HeroPlumbingScene } from "@/components/three/HeroPlumbingScene";

export function HeroSection() {
  const [viewMode, setViewMode] = useState<"3d" | "studio">("3d");

  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-8 pb-16 lg:py-20 border-b border-cyan-500/15">
      {/* Dynamic 3D Grid Backdrop & Volumetric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[700px] h-[700px] bg-[#087BDB]/25 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 left-10 w-[550px] h-[550px] bg-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#168DFF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: 55% - High-Impact Typography & Conversion */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Operational Beacon Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#09223D]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xl shadow-lg shadow-[#168DFF]/15">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="tracking-widest">Live Dispatch • Irvine, CA Local Line</span>
            </div>

            {/* Primary H1 Heading: Modern Geometric Outfit Typography */}
            <h1 className="hero-title font-extrabold font-heading text-white mb-6">
              Plumber in Irvine, CA —{" "}
              <span className="gradient-text-electric">
                Help for Every Plumbing Problem
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mb-8 font-normal">
              Specialized assistance for Irvine residential infrastructure. From slab leak acoustics and copper repiping to high-pressure regulator calibration and water heater diagnostics, call to talk directly with a plumbing specialist.
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
                <span>Interactive Symptom Scanner</span>
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
                  <p className="text-xs font-bold text-white">65–80 PSI</p>
                  <p className="text-[11px] text-[#94A3B8]">Irvine PRV Standard</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-sm hover:border-[#38BDF8]/40 transition-all">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">Zero Online Forms</p>
                  <p className="text-[11px] text-[#94A3B8]">Direct Plumber Call</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 45% - State-of-the-art 3D Command Deck */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer 3D Halo Glow Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-panel-dark border border-cyan-400/30 shadow-[0_25px_60px_-15px_rgba(8,123,219,0.35)] group card-sheen">
                
                {/* Top Control Header with View Toggle (3D Interactive vs Studio HD) */}
                <div className="p-3.5 bg-[#030C17]/90 border-b border-white/10 flex items-center justify-between backdrop-blur-md z-20 relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      {viewMode === "3d" ? "Interactive 3D Pipeline Model" : "High-Def Architectural View"}
                    </span>
                  </div>

                  {/* Mode Switcher */}
                  <div className="flex items-center bg-[#09223D] p-1 rounded-xl border border-white/10 text-xs">
                    <button
                      type="button"
                      onClick={() => setViewMode("3d")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold transition-all ${
                        viewMode === "3d"
                          ? "bg-[#168DFF] text-white shadow-sm"
                          : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      <Box className="w-3.5 h-3.5" />
                      <span>3D Model</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("studio")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold transition-all ${
                        viewMode === "studio"
                          ? "bg-[#168DFF] text-white shadow-sm"
                          : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Studio HD</span>
                    </button>
                  </div>
                </div>

                {/* Main 3D Viewport Area */}
                <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden bg-[#030C17]">
                  {viewMode === "3d" ? (
                    <div className="w-full h-full relative">
                      <HeroPlumbingScene />
                      <div className="absolute top-3 left-3 bg-[#030C17]/80 backdrop-blur-md border border-cyan-400/25 px-2.5 py-1 rounded-lg text-[10px] text-cyan-300 font-mono flex items-center gap-1.5 pointer-events-none">
                        <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                        <span>INTERACTIVE 3D • DRAG TO ROTATE</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/hero-pipes-3d.jpg"
                        alt="Realistic 3D modern architectural plumbing piping with flowing water"
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-transparent to-transparent opacity-85" />
                    </div>
                  )}

                  {/* Floating Hologram Telemetry 1: Top Right */}
                  <div className="absolute top-4 right-4 animate-float-gentle bg-[#051426]/90 border border-[#38BDF8]/40 backdrop-blur-md rounded-2xl p-3 text-white shadow-2xl flex items-center gap-3 pointer-events-none">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">
                        Irvine Water Pressure
                      </p>
                      <p className="text-xs font-extrabold text-white">
                        72 PSI • Calibrated
                      </p>
                    </div>
                  </div>

                  {/* Floating Hologram Telemetry 2: Mid-Left Tag */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 animate-float-reverse bg-[#051426]/90 border border-white/20 backdrop-blur-md rounded-xl px-3 py-2 text-white shadow-xl flex items-center gap-2 pointer-events-none">
                    <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      Acoustic Leak Detection
                    </span>
                  </div>

                  {/* Floating Glassmorphism Command Bar: Bottom Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#09223D]/95 border border-[#38BDF8]/35 backdrop-blur-xl rounded-2xl p-3.5 text-white shadow-2xl flex items-center justify-between z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#168DFF] flex items-center justify-center text-white shadow-lg shadow-[#168DFF]/40">
                        <Phone className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider">
                          Irvine Service Line
                        </p>
                        <p className="text-base font-extrabold text-white">
                          {BUSINESS_PHONE.display}
                        </p>
                      </div>
                    </div>

                    <a
                      href={BUSINESS_PHONE.href}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#168DFF] to-[#087BDB] hover:from-[#38BDF8] hover:to-[#168DFF] text-white text-xs font-bold shadow-lg shadow-[#168DFF]/30 transition-all btn-3d"
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

