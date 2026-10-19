import React from "react";
import { PhoneCall, MessageSquare, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

import { ServiceProcessStep } from "@/types/service";

const DEFAULT_STEPS = [
  {
    step: "01",
    title: "Direct Phone Contact",
    description: `Call ${BUSINESS_PHONE.display} and speak directly with a representative about the plumbing symptoms you are noticing in your home.`,
    icon: PhoneCall,
    highlight: "Instant Phone Connection",
    gradient: "from-[#168DFF] to-[#38BDF8]",
  },
  {
    step: "02",
    title: "Symptom & Village Triage",
    description:
      "Share your symptoms (active leak, water heater rumble, drain backup), your Irvine village, and whether you need urgent water shutoff instructions.",
    icon: MessageSquare,
    highlight: "Expert Diagnostic Triage",
    gradient: "from-[#087BDB] to-[#168DFF]",
  },
  {
    step: "03",
    title: "Explore Available Options",
    description:
      "Receive guidance on recommended next steps and explore available independent plumbing specialists in your specific area.",
    icon: Wrench,
    highlight: "Clear, Upfront Clarity",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const STEP_ICONS = [PhoneCall, MessageSquare, Wrench, CheckCircle2];
const STEP_GRADIENTS = [
  "from-[#168DFF] to-[#38BDF8]",
  "from-[#087BDB] to-[#168DFF]",
  "from-[#38BDF8] to-[#0284C7]",
  "from-emerald-500 to-teal-400",
];

export interface ProcessSectionProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  steps?: ServiceProcessStep[];
  ctaText?: string;
  placement?: string;
}

export function ProcessSection({
  badge = "Simple 3-Step Journey",
  title = <>How to Get <span className="gradient-text-accent">Plumbing Help</span></>,
  subtitle = "Connecting with plumbing assistance in Irvine is simple, direct, and straightforward. Here is what to expect when you contact us.",
  steps,
  ctaText = `Start With Step 1: Call ${BUSINESS_PHONE.display}`,
  placement = "process_section",
}: ProcessSectionProps = {}) {
  const displaySteps = steps && steps.length > 0
    ? steps.map((s, idx) => ({
        step: s.step || `0${idx + 1}`,
        title: s.title,
        description: s.description,
        icon: STEP_ICONS[idx % STEP_ICONS.length],
        highlight: s.highlight,
        gradient: STEP_GRADIENTS[idx % STEP_GRADIENTS.length],
      }))
    : DEFAULT_STEPS;

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          centered={true}
        />

        {/* Timeline Cards with Glowing Connecting Conduit */}
        <div className={`grid grid-cols-1 ${displaySteps.length === 4 ? "md:grid-cols-4" : displaySteps.length === 5 ? "md:grid-cols-5" : "md:grid-cols-3"} gap-6 sm:gap-8 relative items-stretch`}>
          {/* Glowing Connecting Conduit for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-20 right-20 h-1 bg-gradient-to-r from-[#168DFF] via-[#38BDF8] to-emerald-400 -z-0 opacity-30 shadow-[0_0_10px_#38BDF8]" />

          {displaySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#168DFF]/60 bento-card-3d card-sheen group"
              >
                <div>
                  {/* Step Number & Illuminated Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-black font-heading text-slate-300 group-hover:text-[#168DFF] transition-colors">
                      {step.step}
                    </span>
                    <div className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr ${step.gradient} text-white flex items-center justify-center shadow-lg shadow-[#168DFF]/25 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] mb-3 group-hover:text-[#087BDB] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#087BDB] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {step.highlight}
                  </span>
                  {index < displaySteps.length - 1 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-slate-300 group-hover:text-[#168DFF] group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action beneath steps */}
        <div className="mt-14 text-center">
          <PhoneCTA
            placement={placement}
            label={ctaText}
            variant="primary"
            className="text-sm py-4 px-9 font-bold shadow-xl shadow-[#168DFF]/25 btn-3d"
            showIcon={true}
          />
        </div>
      </div>
    </section>
  );
}

