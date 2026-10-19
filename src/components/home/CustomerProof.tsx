import React from "react";
import { CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

import { ServiceScenario } from "@/types/service";

const DEFAULT_SERVICE_SCENARIOS = [
  {
    village: "Woodbridge",
    title: "Water Heater Diagnostic & Sediment Flush",
    scenario: "Homeowner experienced rumbling sounds and lukewarm shower water from a 10-year-old gas water heater.",
    resolution: "Connected customer with an experienced water heater technician who diagnosed heavy sediment build-up and replaced degraded thermocouple elements.",
    keyTakeaway: "Prompt diagnostics prevented premature full tank replacement and restored hot water flow within the day.",
  },
  {
    village: "Northwood",
    title: "Non-Invasive Slab Leak Locating",
    scenario: "Customer noticed warm tile flooring in the kitchen and an unexpected 35% increase in their monthly water utility bill.",
    resolution: "Arranged non-invasive electronic acoustic leak detection locating a copper line pinhole rupture under the subfloor slab without destructive trenching.",
    keyTakeaway: "Acoustic sensor testing isolated the exact line for an overhead bypass reroute.",
  },
  {
    village: "Turtle Rock",
    title: "Mainline Sewer Hydro-Jetting Descaling",
    scenario: "Recurring shower drain backups and gurgling toilets throughout the lower level of a hillside multi-story residence.",
    resolution: "Connected homeowner to a hydro jetting specialist who conducted an HD camera inspection revealing tree root intrusion near the cleanout.",
    keyTakeaway: "High-pressure jetting cleared the root blockage and restored full hydraulic flow without trenching.",
  },
];

export interface CustomerProofProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  scenarios?: ServiceScenario[];
}

export function CustomerProof({
  badge = "Verified Case Insights",
  title = <>Customer Experiences &amp; <span className="gradient-text-accent">Project Insights</span></>,
  subtitle = "Real-world plumbing scenarios illustrating how Irvine residents resolve water leaks, drain clogs, and water heater failures through direct telephone connection.",
  scenarios,
}: CustomerProofProps = {}) {
  const displayScenarios = scenarios && scenarios.length > 0 ? scenarios : DEFAULT_SERVICE_SCENARIOS;

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#168DFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          centered={true}
        />

        {/* Real Service Scenario Cards in 3D Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 items-stretch">
          {displayScenarios.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 bento-card-3d card-sheen transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#F0F7FF] text-[#087BDB] border border-[#168DFF]/20">
                    <MapPin className="w-3 h-3 text-[#168DFF]" />
                    <span>{item.village}, Irvine</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    CASE 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] mb-4 leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-3.5 text-xs leading-relaxed text-[#475569] mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
                    <strong className="text-[#0F172A] block mb-1 uppercase tracking-wide text-[10px]">
                      Reported Symptom:
                    </strong>
                    <p className="text-xs text-[#334155]">{item.scenario}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F0F7FF]/70 border border-[#168DFF]/20">
                    <strong className="text-[#087BDB] block mb-1 uppercase tracking-wide text-[10px]">
                      Diagnostic & Resolution:
                    </strong>
                    <p className="text-xs text-[#1E293B]">{item.resolution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-[#0F172A] bg-emerald-50/60 border border-emerald-500/20 p-3.5 rounded-2xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-emerald-950">{item.keyTakeaway}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Truth in Advertising & Service Standard Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 card-sheen">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] border border-white/20 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#168DFF]/30 mt-0.5">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Our Commitment to Honest, Transparent Service
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-2xl leading-relaxed">
                We believe in straightforward communication. We do not publish fabricated star ratings or fake stock testimonials. When you call (949) 539-8503, you get realistic guidance and direct referral to licensed, insured independent plumbing providers.
              </p>
            </div>
          </div>

          <PhoneCTA
            placement="customer_proof"
            label="Call (949) 539-8503"
            variant="hero"
            className="w-full md:w-auto text-xs py-4 px-8 whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
            showIcon={true}
          />
        </div>
      </div>
    </section>
  );
}

