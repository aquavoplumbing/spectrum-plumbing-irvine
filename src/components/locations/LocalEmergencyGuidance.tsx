import React from "react";
import {
  AlertOctagon,
  ShieldAlert,
  Flame,
  Droplets,
  RotateCcw,
  Zap,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { LocationPageData } from "@/types/location";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

interface LocalEmergencyGuidanceProps {
  location: LocationPageData;
}

export function LocalEmergencyGuidance({ location }: LocalEmergencyGuidanceProps) {
  const emergency = location.emergencyGuidance;

  return (
    <section
      id="emergency-guidance"
      className="py-20 md:py-28 bg-[#030C17] text-white relative overflow-hidden border-y border-cyan-500/20"
    >
      {/* 3D Cyber grid & Atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#168DFF_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-[#168DFF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Urgent Situation Protocols"
          title={<>{emergency.heading}</>}
          subtitle={emergency.subtitle}
          centered={true}
          theme="dark"
        />

        {/* 4 Urgent Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {emergency.urgentSituations.map((sit, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#051426]/90 border border-cyan-500/25 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30 uppercase">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>{sit.severity} Status</span>
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  ACTION 0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                {sit.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {sit.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#09223D] border border-cyan-400/20 text-xs text-cyan-200">
                <strong className="text-[#38BDF8] block mb-1 uppercase tracking-wide text-[10px]">
                  Immediate Safe Protocol:
                </strong>
                <p className="leading-relaxed">{sit.protocol}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Woodbridge Specific Water & Gas Shutoff Guidance Box */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-dark border border-cyan-400/35 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-cyan-400/20">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span>Homeowner Safety Checklist</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                How to Shut Off the Main Water in Your {location.name} Property
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-2xl leading-relaxed">
                {emergency.shutoffInstructions.locationDescription}
              </p>
            </div>

            <PhoneCTA
              placement={`emergency_box_${location.slug}`}
              label={`Emergency Phone: ${BUSINESS_PHONE.display}`}
              variant="hero"
              className="py-4 px-8 text-sm font-bold shadow-2xl shadow-[#168DFF]/40 btn-3d"
              showIcon={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergency.shutoffInstructions.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#168DFF] text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Step 0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          {/* Critical Natural Gas Caution Banner */}
          <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-xs text-amber-200 flex items-start gap-3">
            <Flame className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 uppercase tracking-wide block mb-0.5">
                Critical Natural Gas Notice
              </strong>
              <p>{emergency.shutoffInstructions.gasWarning}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
