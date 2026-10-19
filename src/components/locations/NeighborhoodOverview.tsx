import React from "react";
import Image from "next/image";
import {
  Building,
  Calendar,
  Layers,
  Droplet,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { LocationPageData } from "@/types/location";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

interface NeighborhoodOverviewProps {
  location: LocationPageData;
}

export function NeighborhoodOverview({ location }: NeighborhoodOverviewProps) {
  const ctx = location.overview.residentialContext;

  return (
    <section
      id="overview"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Ambient background accent */}
      <div className="absolute top-1/4 -right-36 w-96 h-96 bg-[#168DFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Photo & Architectural Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden glass-panel-dark border border-cyan-400/30 shadow-[0_20px_50px_rgba(5,20,38,0.15)] group card-sheen">
              <div className="relative h-72 sm:h-84 w-full bg-slate-950">
                <Image
                  src={location.overview.image}
                  alt={location.overview.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold bg-[#030C17]/90 text-[#38BDF8] border border-cyan-400/30 backdrop-blur-md shadow-lg">
                    {location.name} Residential Landscape
                  </span>
                </div>
              </div>

              {/* Overlaid Bottom Spec Bar */}
              <div className="p-5 bg-[#051426]/95 border-t border-cyan-400/25 text-white">
                <p className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-1">
                  Community Profile
                </p>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Established residential master plan with mature tree canopies, residential lakes, and suburban architecture.
                </p>
              </div>
            </div>

            {/* Structured Property & Plumbing Context Card */}
            <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2 pb-3 border-b border-slate-200">
                <Building className="w-4 h-4 text-[#168DFF]" />
                <span>{location.name} Plumbing Characteristics</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Development Era:</span>
                    <p className="text-[#64748B]">{ctx.constructionEra}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Foundation Type:</span>
                    <p className="text-[#64748B]">{ctx.foundationType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Pipe Materials:</span>
                    <p className="text-[#64748B]">{ctx.pipeInfrastructure}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Droplet className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Water Hardness:</span>
                    <p className="text-[#64748B]">{ctx.waterCharacteristics}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0F172A]">Association Context:</span>
                    <p className="text-[#64748B]">{ctx.hoaGuidelines}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Content & Local Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#168DFF]/10 text-[#087BDB] border border-[#168DFF]/25 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hyperlocal Community Context</span>
            </div>

            <h2 className="section-title font-extrabold font-heading text-[#0F172A] leading-tight">
              {location.overview.heading}
            </h2>

            <div className="space-y-4 text-base text-[#475569] leading-relaxed">
              {location.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Local Highlights Card */}
            <div className="p-6 rounded-2xl bg-[#F0F7FF]/70 border border-[#168DFF]/25 mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#087BDB] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#168DFF]" />
                <span>What {location.name} Property Owners Should Know:</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#1E293B]">
                {location.overview.localHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#168DFF] font-bold text-base leading-none">•</span>
                    <span className="font-medium">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <PhoneCTA
                placement={`overview_${location.slug}`}
                label={`Discuss Your ${location.name} Plumbing Need`}
                variant="primary"
                className="w-full sm:w-auto text-sm py-4 px-8 font-bold shadow-xl shadow-[#168DFF]/30 btn-3d"
                showIcon={true}
              />
              <span className="text-xs text-[#64748B]">
                Direct line: <strong className="text-[#0F172A]">{BUSINESS_PHONE.display}</strong>
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
