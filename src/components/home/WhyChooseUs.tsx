import React from "react";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  ShieldCheck,
  Droplets,
  Layers,
  Sparkles,
} from "lucide-react";
import { ServiceWhyChooseBenefit } from "@/types/service";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";


const DEFAULT_BENEFITS = [
  {
    icon: MapPin,
    title: "Irvine-Focused Technical Guidance",
    description:
      "Guidance tailored specifically to Irvine villages, HOA architectural guidelines, concrete slab foundations, and municipal water hardness conditions (16–18 GPG).",
    highlight: "Slab & HOA Specialized",
  },
  {
    icon: Droplets,
    title: "Clear, Upfront Engineering Explanations",
    description:
      "Understand what symptoms indicate an active emergency, what questions to ask, and what repair pathways exist before any technician steps foot into your home.",
    highlight: "Transparent Advice",
  },
  {
    icon: PhoneCall,
    title: "Direct Master Plumber Telephony",
    description:
      "No waiting for email replies or filling out 10-step online lead forms. Call (949) 539-8503 to speak immediately with someone who understands residential plumbing.",
    highlight: "Zero Phone Trees",
  },
  {
    icon: Layers,
    title: "Access to Qualified Local Specialists",
    description:
      "Connect with experienced, independent plumbing professionals specializing in your exact symptom, from water heater flushes to electronic slab leak locating.",
    highlight: "Independent Pros",
  },
];

const BENEFIT_ICONS = [MapPin, Droplets, PhoneCall, Layers, Sparkles, ShieldCheck];

export interface WhyChooseUsProps {
  heading?: string;
  subtitle?: string;
  benefits?: ServiceWhyChooseBenefit[];
  image?: string;
  imageAlt?: string;
  ctaPlacement?: string;
}

export function WhyChooseUs({
  heading = "Plumbing Help, Without the Guesswork",
  subtitle = "When water is leaking under concrete or water heaters fail, you need fast, direct telephone clarity — not frustrating online forms or automated call queues.",
  benefits,
  image = "/images/kitchen-sink-repair.jpg",
  imageAlt = "Plumbing professional working on residential sink installation in Irvine home",
  ctaPlacement = "why_choose_cta",
}: WhyChooseUsProps = {}) {
  const displayBenefits = benefits && benefits.length > 0
    ? benefits.map((b, idx) => ({
        icon: BENEFIT_ICONS[idx % BENEFIT_ICONS.length],
        title: b.title,
        description: b.description,
        highlight: b.highlight,
      }))
    : DEFAULT_BENEFITS;

  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Background radial gradient blobs */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#168DFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large 3D Editorial Photography with Floating Badges */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden glass-panel-dark border border-cyan-400/30 shadow-[0_20px_50px_rgba(5,20,38,0.2)] group card-sheen">
              <div className="relative h-[460px] sm:h-[540px] w-full bg-slate-950">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/40 to-transparent" />
              </div>

              {/* Overlaid Floating Feature Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-2xl bg-[#051426]/95 border border-cyan-400/30 backdrop-blur-xl text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] flex items-center justify-center text-white shadow-lg shadow-[#168DFF]/40">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading text-white">
                      Verified Irvine Plumbing Network
                    </h4>
                    <p className="text-xs text-[#38BDF8]">
                      Serving Single-Family Homes, Condos & Estates
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  We streamline your path to reliable assistance by evaluating symptoms over the phone and connecting you with qualified local trade specialists.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & 4 Modern Connected Benefit Blocks */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168DFF]/10 text-[#087BDB] border border-[#168DFF]/25 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Spectrum Plumbing Irvine</span>
            </div>

            <h2 className="section-title font-extrabold font-heading text-[#0F172A] mb-4">
              {heading}
            </h2>

            <p className="text-base text-[#475569] leading-relaxed mb-8">
              {subtitle}
            </p>

            {/* Connected Benefit Items with Glowing Energy Track */}
            <div className="relative pl-7 space-y-5 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#168DFF] before:via-[#38BDF8] before:to-transparent">
              {displayBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="relative group">
                    {/* Glowing Node on Timeline */}
                    <div className="absolute -left-[29px] top-4 w-4 h-4 rounded-full bg-white border-2 border-[#168DFF] group-hover:bg-[#168DFF] group-hover:scale-125 transition-all shadow-[0_0_8px_#168DFF]" />

                    <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_35px_-8px_rgba(8,123,219,0.18)] transition-all group-hover:border-[#168DFF]/60 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#F0F7FF] text-[#168DFF] flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-base font-bold font-heading text-[#0F172A]">
                            {b.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#F0F7FF] text-[#168DFF] border border-[#168DFF]/20">
                          {b.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-1">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct CTA action */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <PhoneCTA
                placement={ctaPlacement}
                label={`Speak With a Specialist Now`}
                variant="primary"
                className="w-full sm:w-auto text-sm py-4 px-8 font-bold shadow-xl shadow-[#168DFF]/30 btn-3d"
                showIcon={true}
              />
              <span className="text-xs text-[#475569]">
                Direct line: <strong className="text-[#0F172A]">{BUSINESS_PHONE.display}</strong>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

