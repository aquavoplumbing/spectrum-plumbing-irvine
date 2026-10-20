"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Phone,
  ArrowDown,
  Droplets,
  Flame,
  Gauge,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Search,
  Wrench,
  GitBranch,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";
import { ServicePageData } from "@/types/service";
import { BUSINESS_PHONE } from "@/config/business";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Flame,
  Gauge,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Search,
  Wrench,
  GitBranch,
  Building2,
  Clock,
  Sparkles,
  Phone,
};

interface ServiceHeroProps {
  service: ServicePageData;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const telemetry = service.hero.telemetryBadges || [
    { icon: "Droplets", title: "Irvine Diagnostic", subtitle: "Branch & Mainline" },
    { icon: "Gauge", title: "Precision Triage", subtitle: "Local Expertise" },
    { icon: "ShieldCheck", title: "Zero Online Forms", subtitle: "Direct Phone Call" },
  ];

  return (
    <section className="relative min-h-[680px] lg:min-h-[760px] flex items-center overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white pt-6 pb-16 lg:py-16 border-b border-cyan-500/15">
      {/* 3D Atmospheric Background Glows & Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[650px] h-[650px] bg-[#087BDB]/25 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 left-10 w-[500px] h-[500px] bg-[#38BDF8]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#94A3B8] backdrop-blur-md max-w-full"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <Link
            href="/services/"
            className="hover:text-[#38BDF8] transition-colors"
          >
            Services
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <span className="text-white font-medium truncate max-w-[130px] xs:max-w-[180px] sm:max-w-none">
            {service.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Copy, Telemetry & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#09223D]/90 border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-xl shadow-lg shadow-[#168DFF]/15">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>{service.hero.eyebrow}</span>
            </div>

            {/* Dynamic H1 */}
            <h1 className="hero-title font-extrabold font-heading text-white mb-5 tracking-tight">
              {service.hero.heading}
            </h1>

            {/* Helpful, Unique Service Description */}
            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mb-8 font-normal">
              {service.hero.description}
            </p>

            {/* Conversion Actions */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <PhoneCTA
                placement={`service_hero_${service.slug}`}
                label={service.hero.ctaText || `Call ${BUSINESS_PHONE.display}`}
                variant="hero"
                className="w-full sm:w-auto shadow-2xl shadow-[#168DFF]/40 hover:shadow-[#38BDF8]/60 text-lg py-4 px-8 btn-3d"
                showIcon={true}
                subtext="Direct Phone Assistance • Zero Automated Phone Trees"
              />

              <a
                href="#overview"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#94A3B8] hover:text-white py-3.5 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all group backdrop-blur-sm"
              >
                <span>Explore This Service</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-[#38BDF8]" />
              </a>
            </div>

            {/* 3 Holographic Telemetry Badges */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-700/60">
              {telemetry.map((badge, idx) => {
                const IconComponent = ICON_MAP[badge.icon] || Droplets;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-md shadow-sm hover:border-[#38BDF8]/40 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#168DFF]/30">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">{badge.title}</p>
                      <p className="text-[11px] text-[#94A3B8]">{badge.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Visual in 3D Specular Frame */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden glass-panel-dark border border-cyan-400/30 shadow-[0_25px_60px_-15px_rgba(8,123,219,0.35)] group card-sheen">
                <div className="relative h-[380px] sm:h-[460px] w-full bg-slate-950">
                  <Image
                    src={service.hero.image}
                    alt={service.hero.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/35 to-transparent" />
                </div>

                {/* Overlaid Badge */}
                <div className="absolute top-4 right-4 bg-[#030C17]/85 border border-cyan-400/30 backdrop-blur-md rounded-xl px-3 py-1.5 text-[11px] font-mono text-cyan-300">
                  <span>IRVINE LOCAL LINE</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-2xl bg-[#051426]/90 border border-cyan-400/30 backdrop-blur-xl text-center shadow-xl">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-left min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] truncate">
                        Need Immediate Assistance?
                      </p>
                      <p className="text-sm sm:text-lg font-extrabold text-white mt-0.5 truncate">
                        {BUSINESS_PHONE.display}
                      </p>
                    </div>
                    <a
                      href={BUSINESS_PHONE.href}
                      className="px-3 sm:px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#168DFF] to-[#087BDB] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex-shrink-0 whitespace-nowrap"
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
