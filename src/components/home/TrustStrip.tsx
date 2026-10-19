import React from "react";
import {
  MapPin,
  PhoneCall,
  Gauge,
  Activity,
  Flame,
  Droplets,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Search,
  Wrench,
  GitBranch,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";
import { ServiceHighlight } from "@/types/service";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>> = {
  MapPin,
  PhoneCall,
  Gauge,
  Activity,
  Flame,
  Droplets,
  Zap,
  ShieldAlert,
  ShieldCheck,
  Search,
  Wrench,
  GitBranch,
  Building2,
  Clock,
  Sparkles,
};

const DEFAULT_TRUST_ITEMS = [
  {
    icon: MapPin,
    title: "Irvine-Focused Specialists",
    metric: "10+ Villages",
    description: "Dedicated to single-family homes, townhomes, and HOAs across Irvine.",
    gradient: "from-[#168DFF] to-[#38BDF8]",
  },
  {
    icon: Activity,
    title: "Slab & Copper Infrastructure",
    metric: "Acoustic Sonar",
    description: "Specialized diagnostics for concrete slab foundations and pinhole leaks.",
    gradient: "from-[#087BDB] to-[#168DFF]",
  },
  {
    icon: Gauge,
    title: "Water Pressure Regulators",
    metric: "65–80 PSI",
    description: "Protection against municipal pressure surges and water heater stress.",
    gradient: "from-[#38BDF8] to-[#0284C7]",
  },
  {
    icon: PhoneCall,
    title: "Direct Master Connection",
    metric: "Zero Waiting",
    description: "Direct telephone access to discuss your symptoms before dispatch.",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const GRADIENTS = [
  "from-[#168DFF] to-[#38BDF8]",
  "from-[#087BDB] to-[#168DFF]",
  "from-[#38BDF8] to-[#0284C7]",
  "from-emerald-500 to-teal-400",
];

export interface TrustStripProps {
  items?: ServiceHighlight[];
}

export function TrustStrip({ items }: TrustStripProps = {}) {
  const displayItems = items && items.length > 0
    ? items.map((item, idx) => ({
        icon: ICON_MAP[item.icon] || Droplets,
        title: item.title,
        metric: item.metric,
        description: item.description,
        gradient: GRADIENTS[idx % GRADIENTS.length],
      }))
    : DEFAULT_TRUST_ITEMS;

  return (
    <section
      aria-label="Core Service Standards"
      className="relative z-20 py-8 bg-gradient-to-b from-[#09223D] via-[#0D2B4D] to-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_10px_25px_-5px_rgba(5,20,38,0.08)] hover:shadow-[0_20px_35px_-10px_rgba(8,123,219,0.22)] hover:-translate-y-1.5 transition-all duration-300 card-sheen"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center shadow-md shadow-[#168DFF]/20 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-[#F0F7FF] text-[#087BDB] border border-[#168DFF]/20">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


