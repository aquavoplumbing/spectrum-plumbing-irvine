"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  PhoneCall,
  ArrowRight,
  ShieldAlert,
  Flame,
  Droplets,
  SearchCode,
  DollarSign,
  MapPin,
  Headphones,
  HelpCircle,
} from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";

export interface CategorizedFAQ {
  category: string;
  categorySlug: string;
  iconName: string;
  items: {
    question: string;
    answer: string;
    serviceLink?: {
      title: string;
      href: string;
    };
  }[];
}

const FAQ_CATEGORIES: CategorizedFAQ[] = [
  {
    category: "General Plumbing",
    categorySlug: "general",
    iconName: "HelpCircle",
    items: [
      {
        question: "How does Spectrum Plumbing Irvine help homeowners?",
        answer:
          "Spectrum Plumbing Irvine provides educational diagnostics, maintenance guides, and direct phone connections to experienced, independent plumbing professionals who service residential and commercial properties across Irvine, CA.",
      },
      {
        question: "Does Spectrum Plumbing Irvine directly employ plumbers?",
        answer:
          "No. Spectrum Plumbing Irvine is an informational and referral platform connecting property owners with independent, licensed trade contractors across Orange County. All physical diagnostics, repairs, warranties, and pricing agreements are handled directly between you and the servicing contractor.",
      },
      {
        question: "Are forms required before I can speak with someone?",
        answer:
          "No forms are required. You can simply call (949) 539-8503 directly to describe your symptoms and discuss available service options with a live representative.",
      },
    ],
  },
  {
    category: "Emergency Plumbing",
    categorySlug: "emergency",
    iconName: "ShieldAlert",
    items: [
      {
        question: "What should I do immediately during an active water pipe burst?",
        answer:
          "Immediately locate your home's main water shutoff valve—typically located on the exterior front wall near a hose bib, in your garage near the water heater, or at the municipal water meter box near the curb. Turn the handle perpendicular to the pipe (or clockwise for gate valves) to stop water flow. Then call (949) 539-8503 for rapid emergency assistance.",
        serviceLink: {
          title: "Read Emergency Plumbing Guide",
          href: "/services/emergency-plumbing-irvine-ca/",
        },
      },
      {
        question: "How quickly can an emergency technician arrive in Irvine?",
        answer:
          "Arrival times depend on current technician availability and traffic conditions in Orange County. Calling (949) 539-8503 enables immediate dispatch triage to match you with the closest available contractor.",
      },
      {
        question: "What qualifies as an urgent plumbing emergency?",
        answer:
          "Active high-pressure water leaks threatening drywall or flooring, sewage backflow into tubs and sinks, complete loss of water supply, and active gas line odors constitute urgent emergencies requiring immediate response.",
      },
    ],
  },
  {
    category: "Drain & Sewer",
    categorySlug: "drain-sewer",
    iconName: "Droplets",
    items: [
      {
        question: "Why do my household drains keep clogging repeatedly?",
        answer:
          "Recurring clogs usually indicate that grease, soap scum, or mineral scale has accumulated along the interior pipe wall, or that tree roots have invaded your main sewer lateral underground. While chemical cleaners or simple plungers might puncture a small opening, professional motorized snaking or hydro jetting removes the entire obstruction.",
        serviceLink: {
          title: "Explore Drain Cleaning Services",
          href: "/services/drain-cleaning-irvine-ca/",
        },
      },
      {
        question: "What is the difference between drain snaking and hydro jetting?",
        answer:
          "Snaking uses a flexible steel cable with a cutting blade to bore through solid obstructions like roots or hair clogs. Hydro jetting uses ultra-high pressure water (up to 4,000 PSI) with forward and reverse jets to thoroughly scrub accumulated sludge, grease, and mineral scale off pipe walls.",
        serviceLink: {
          title: "Learn About Hydro Jetting",
          href: "/services/hydro-jetting-irvine-ca/",
        },
      },
      {
        question: "How does a video camera sewer inspection work?",
        answer:
          "A high-definition waterproof fiber-optic camera attached to a flexible rod is fed through a cleanout into your building sewer line. Real-time footage reveals root intrusion, pipe fractures, bellies, or joint offsets without excavating your yard.",
        serviceLink: {
          title: "Sewer Line Repair & Diagnostics",
          href: "/services/sewer-line-repair-irvine-ca/",
        },
      },
    ],
  },
  {
    category: "Water Heaters",
    categorySlug: "water-heaters",
    iconName: "Flame",
    items: [
      {
        question: "How long do conventional water heaters last in Irvine?",
        answer:
          "In Irvine, standard storage tank water heaters generally last between 8 to 12 years. Irvine’s moderate-to-hard mineral water accelerates sediment buildup at the base of the tank, which can cause premature tank corrosion without periodic annual flushing.",
        serviceLink: {
          title: "Water Heater Repair Information",
          href: "/services/water-heater-repair-irvine-ca/",
        },
      },
      {
        question: "What causes a water heater to make rumbling or popping sounds?",
        answer:
          "Popping or rumbling sounds are caused by hardened mineral scale trapping water at the bottom of the tank. As the burner heats the metal, trapped water boils violently beneath the sediment layer, creating mini steam explosions. Flushing the tank often relieves this issue.",
      },
      {
        question: "Is switching to a tankless water heater worth it in Irvine homes?",
        answer:
          "Tankless water heaters provide continuous on-demand hot water, take up virtually no floor space, and boast longer lifespans (15 to 20+ years). However, they require adequate gas line sizing, dedicated venting, and annual descaling flushes to combat mineral scaling.",
        serviceLink: {
          title: "Tankless Water Heater Services",
          href: "/services/tankless-water-heaters-irvine-ca/",
        },
      },
    ],
  },
  {
    category: "Leak Detection",
    categorySlug: "leak-detection",
    iconName: "SearchCode",
    items: [
      {
        question: "What are the telltale symptoms of an under-slab water leak?",
        answer:
          "Key signs include unexplained hot spots on carpet or tile flooring, the sound of running water when all fixtures are turned off, damp or warped baseboards, sudden drops in water pressure, and unexpected spikes on your municipal Irvine Ranch Water District (IRWD) bill.",
        serviceLink: {
          title: "Slab Leak Diagnosis & Repair",
          href: "/services/slab-leak-repair-irvine-ca/",
        },
      },
      {
        question: "How do technicians pinpoint hidden leaks without tearing up floors?",
        answer:
          "Specialists utilize non-destructive diagnostic tools including acoustic listening devices that detect high-frequency pipe hiss, thermal imaging cameras that reveal temperature signatures under concrete, and helium or nitrogen tracer gas testing.",
        serviceLink: {
          title: "Electronic Leak Detection Services",
          href: "/services/leak-detection-irvine-ca/",
        },
      },
    ],
  },
  {
    category: "Pricing & Estimates",
    categorySlug: "pricing",
    iconName: "DollarSign",
    items: [
      {
        question: "Can I receive an exact quote over the phone?",
        answer:
          "Because plumbing problems can stem from multiple unseen root causes (for instance, a running toilet could be a simple flapper or high incoming household pressure requiring a pressure regulator replacement), reputable contractors require an on-site physical inspection before providing a binding quote.",
      },
      {
        question: "Are diagnostic fees applied toward the total repair cost?",
        answer:
          "Many independent plumbing contractors apply their initial assessment or trip fee toward the final repair invoice if you choose to proceed with their proposed service. You can confirm these terms during your initial call.",
      },
    ],
  },
  {
    category: "Service Areas & Coverage",
    categorySlug: "areas",
    iconName: "MapPin",
    items: [
      {
        question: "Which Irvine villages and neighborhoods are covered?",
        answer:
          "Coverage includes all major Irvine master-planned communities: Woodbridge, Turtle Rock, Northwood, Westpark, University Park, Portola Springs, Great Park, Orchard Hills, Quail Hill, and Cypress Village, as well as surrounding Orange County regions.",
        serviceLink: {
          title: "Browse All Irvine Service Areas",
          href: "/service-areas/",
        },
      },
      {
        question: "Do technicians comply with Irvine Homeowner Association (HOA) rules?",
        answer:
          "Yes. Independent contractors in our network routinely work in Irvine HOA-governed communities and are familiar with community parking regulations, architectural guidelines, and permitted working hours.",
      },
    ],
  },
  {
    category: "Contact & Phone Inquiries",
    categorySlug: "contact",
    iconName: "Headphones",
    items: [
      {
        question: "What is the best way to request plumbing help?",
        answer:
          "Calling (949) 539-8503 directly is always the fastest and most reliable method. Phone calls are answered by representatives who evaluate your issue and connect you directly with an available contractor.",
      },
      {
        question: "What hours is the phone line available?",
        answer:
          "Our phone line is staffed for rapid inquiry intake. When you call (949) 539-8503, your inquiry is reviewed and routed according to contractor availability.",
      },
    ],
  },
];

export function FAQHubClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter categories and items based on search and active tab
  const filteredCategories = FAQ_CATEGORIES.map((cat) => {
    const matchesCategory = activeCategory === "all" || activeCategory === cat.categorySlug;
    if (!matchesCategory) return null;

    const filteredItems = cat.items.filter((item) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        cat.category.toLowerCase().includes(q)
      );
    });

    if (filteredItems.length === 0) return null;

    return {
      ...cat,
      items: filteredItems,
    };
  }).filter(Boolean) as CategorizedFAQ[];

  return (
    <div className="space-y-12">
      {/* Search Input Bar */}
      <div className="max-w-2xl mx-auto relative">
        <label htmlFor="faq-search" className="sr-only">
          Search frequently asked plumbing questions
        </label>
        <div className="relative">
          <input
            id="faq-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., slab leak, water heater, pricing, Woodbridge)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168DFF]/40 focus:border-[#168DFF] shadow-sm transition-all"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Category Pills Navigation with Smooth Touch Horizontal Scrolling */}
      <div className="w-full max-w-full min-w-0 overflow-x-auto no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex items-center justify-start lg:justify-center gap-2 touch-scroll">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer select-none min-h-[40px] ${
            activeCategory === "all"
              ? "bg-[#09223D] text-white shadow-md border border-cyan-500/40"
              : "bg-white text-[#475569] hover:bg-slate-100 border border-slate-200"
          }`}
        >
          All Categories
        </button>

        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat.categorySlug}
            type="button"
            onClick={() => setActiveCategory(cat.categorySlug)}
            className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer select-none min-h-[40px] ${
              activeCategory === cat.categorySlug
                ? "bg-[#09223D] text-white shadow-md border border-cyan-500/40"
                : "bg-white text-[#475569] hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* FAQ Groups Accordion */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-white border border-slate-200">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-1">
            No Matching Questions Found
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto mb-6">
            We could not find an answer matching &ldquo;{searchQuery}&rdquo;. Call (949) 539-8503 to discuss your question directly.
          </p>
          <a
            href={BUSINESS_PHONE.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#087BDB] text-white font-bold text-xs shadow-md hover:bg-[#076EBE] transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {BUSINESS_PHONE.display}</span>
          </a>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredCategories.map((group) => (
            <div key={group.categorySlug} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#168DFF]" />
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  {group.category}
                </h2>
              </div>

              <div className="space-y-3">
                {group.items.map((item, idx) => {
                  const itemKey = `${group.categorySlug}-${idx}`;
                  const isOpen = openItems[itemKey] ?? false;

                  return (
                    <div
                      key={itemKey}
                      className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-xs hover:border-[#168DFF]/40"
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(itemKey)}
                        aria-expanded={isOpen}
                        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-bold font-heading text-[#0F172A]">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#087BDB] flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 space-y-3">
                          <p>{item.answer}</p>
                          {item.serviceLink && (
                            <div className="pt-2">
                              <Link
                                href={item.serviceLink.href}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors"
                              >
                                <span>{item.serviceLink.title}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
