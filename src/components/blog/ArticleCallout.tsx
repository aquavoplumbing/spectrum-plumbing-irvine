import React from "react";
import {
  Info,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { BlogCalloutData } from "@/types/blog";
import { BUSINESS_PHONE } from "@/config/business";
import { trackPhoneClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface ArticleCalloutProps {
  callout: BlogCalloutData;
  className?: string;
}

export function ArticleCallout({ callout, className }: ArticleCalloutProps) {
  const { type, title, content, actionText, actionPhone } = callout;

  const handlePhoneClick = () => {
    trackPhoneClick("blog_callout", BUSINESS_PHONE.display);
  };

  switch (type) {
    case "safety":
      return (
        <aside
          role="alert"
          aria-label={`Safety Warning: ${title}`}
          className={cn(
            "my-8 p-6 sm:p-7 rounded-2xl bg-amber-50/90 border-2 border-amber-500/80 shadow-md relative overflow-hidden",
            className
          )}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <AlertTriangle className="w-5 h-5 fill-current" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-amber-200 text-amber-900">
                  Safety Warning
                </span>
                <h4 className="text-base sm:text-lg font-bold text-amber-950">
                  {title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-amber-900 leading-relaxed font-medium">
                {content}
              </p>
            </div>
          </div>
        </aside>
      );

    case "important":
      return (
        <aside
          role="note"
          aria-label={`Important Information: ${title}`}
          className={cn(
            "my-8 p-6 sm:p-7 rounded-2xl bg-[#F0F7FF] border border-[#168DFF]/40 shadow-sm relative overflow-hidden",
            className
          )}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#168DFF] text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#168DFF]/30">
              <Info className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#168DFF]/20 text-[#087BDB]">
                  Important
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {content}
              </p>
            </div>
          </div>
        </aside>
      );

    case "insight":
      return (
        <aside
          role="note"
          aria-label={`Professional Insight: ${title}`}
          className={cn(
            "my-8 p-6 sm:p-7 rounded-2xl bg-cyan-50/70 border border-cyan-400/50 shadow-sm relative overflow-hidden",
            className
          )}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#087BDB] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-cyan-400/30">
              <Lightbulb className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-cyan-200/80 text-cyan-900">
                  Trade Insight
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {content}
              </p>
            </div>
          </div>
        </aside>
      );

    case "tip":
      return (
        <aside
          role="note"
          aria-label={`Quick Tip: ${title}`}
          className={cn(
            "my-8 p-6 sm:p-7 rounded-2xl bg-emerald-50/70 border border-emerald-400/50 shadow-sm relative overflow-hidden",
            className
          )}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-600/30">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-emerald-200/80 text-emerald-900">
                  Practical Tip
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  {title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {content}
              </p>
            </div>
          </div>
        </aside>
      );

    case "when-to-call":
    default:
      return (
        <aside
          role="region"
          aria-label={`When to Call: ${title}`}
          className={cn(
            "my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/30 shadow-xl relative overflow-hidden card-sheen",
            className
          )}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#168DFF]/40 border border-white/20">
                <PhoneCall className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] mb-1">
                  When to Seek Professional Assistance
                </span>
                <h4 className="text-lg font-bold font-heading text-white mb-1.5">
                  {title}
                </h4>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-xl">
                  {content}
                </p>
              </div>
            </div>

            <a
              href={BUSINESS_PHONE.href}
              onClick={handlePhoneClick}
              aria-label={`Call Spectrum Plumbing Irvine at ${BUSINESS_PHONE.display}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#168DFF] to-[#087BDB] hover:from-[#38BDF8] hover:to-[#168DFF] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#168DFF]/35 active:scale-95 transition-all text-center whitespace-nowrap btn-3d"
            >
              <span>{actionText || `Call ${BUSINESS_PHONE.display}`}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </aside>
      );
  }
}
