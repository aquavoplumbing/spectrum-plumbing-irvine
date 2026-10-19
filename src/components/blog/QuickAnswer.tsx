import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface QuickAnswerProps {
  heading?: string;
  text: string;
  highlight?: string;
}

export function QuickAnswer({
  heading = "Quick Answer",
  text,
  highlight,
}: QuickAnswerProps) {
  return (
    <div
      role="region"
      aria-label="Article Quick Answer"
      className="mb-12 p-6 sm:p-8 rounded-2xl rounded-l-none bg-[#F0F7FF] border border-l-4 border-[#087BDB]/25 border-l-[#168DFF] shadow-sm relative overflow-hidden"
    >
      <div className="flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[#087BDB] mb-3">
        <Sparkles className="w-4 h-4 text-[#168DFF]" />
        <span>{heading}</span>
      </div>

      <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-medium mb-4">
        {text}
      </p>

      {highlight && (
        <div className="pt-3.5 border-t border-[#087BDB]/15 flex items-start gap-2.5 text-xs sm:text-sm text-[#087BDB] font-semibold">
          <CheckCircle2 className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
          <span>{highlight}</span>
        </div>
      )}
    </div>
  );
}
