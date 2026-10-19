"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-3xl border transition-all duration-300 overflow-hidden card-sheen",
              isOpen
                ? "bg-white border-[#168DFF] shadow-[0_12px_30px_-8px_rgba(22,141,255,0.18)] ring-1 ring-[#168DFF]/25"
                : "bg-white/90 hover:bg-white border-slate-200/90 hover:border-[#168DFF]/40 shadow-sm"
            )}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between text-left gap-4 p-5 sm:p-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168DFF]"
              >
                <span
                  className={cn(
                    "text-base sm:text-lg font-bold font-heading transition-colors duration-200",
                    isOpen ? "text-[#168DFF]" : "text-[#0F172A] group-hover:text-[#168DFF]"
                  )}
                >
                  {item.question}
                </span>

                {/* Animated Plus / Minus Indicator with Glow */}
                <span
                  className={cn(
                    "flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
                    isOpen
                      ? "bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white rotate-180 shadow-md shadow-[#168DFF]/30"
                      : "bg-[#F0F7FF] text-[#168DFF] group-hover:bg-[#168DFF] group-hover:text-white"
                  )}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={cn(
                "px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed text-[#475569] border-t border-slate-100 mt-1",
                !isOpen && "hidden"
              )}
            >
              <p className="mt-3 leading-relaxed">{item.answer}</p>
              {item.serviceLink && (
                <div className="pt-3.5">
                  <a
                    href={item.serviceLink.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] hover:underline"
                  >
                    <span>{item.serviceLink.text}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

