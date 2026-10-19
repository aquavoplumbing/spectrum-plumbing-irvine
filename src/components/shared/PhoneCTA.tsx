"use client";

import React from "react";
import { Phone } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { trackPhoneClick, type PhoneCTAPlacement } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export type PhoneCTAVariant =
  | "primary"
  | "header"
  | "hero"
  | "dark"
  | "outline"
  | "compact"
  | "white"
  | "subtle";

export interface PhoneCTAProps {
  placement: PhoneCTAPlacement | string;
  label?: string;
  variant?: PhoneCTAVariant;
  showIcon?: boolean;
  className?: string;
  subtext?: string;
}

export function PhoneCTA({
  placement,
  label = BUSINESS_PHONE.display,
  variant = "primary",
  showIcon = true,
  className,
  subtext,
}: PhoneCTAProps) {
  const handleClick = () => {
    trackPhoneClick(placement, label);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-[#087BDB] to-[#076EBE] hover:from-[#098BF7] hover:to-[#087BDB] text-white shadow-lg shadow-[#087BDB]/25 hover:shadow-xl hover:shadow-[#087BDB]/35 hover:-translate-y-0.5 active:translate-y-0";
      case "hero":
        return "bg-[#087BDB] hover:bg-[#076EBE] text-white text-lg md:text-xl font-bold py-4 px-8 rounded-xl shadow-xl shadow-[#087BDB]/35 hover:shadow-2xl hover:shadow-[#087BDB]/45 hover:-translate-y-1 transition-all duration-200 border border-[#35C7F4]/30";
      case "header":
        return "bg-[#087BDB] hover:bg-[#076EBE] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md shadow-[#087BDB]/20 hover:shadow-lg transition-all duration-200";
      case "dark":
        return "bg-[#071D35] hover:bg-[#061426] text-white border border-[#35C7F4]/40 hover:border-[#35C7F4] shadow-lg shadow-[#071D35]/30 hover:-translate-y-0.5";
      case "white":
        return "bg-white hover:bg-[#F7FAFC] text-[#071D35] font-bold shadow-xl shadow-black/15 hover:shadow-2xl hover:-translate-y-1 border border-white/60";
      case "outline":
        return "bg-transparent hover:bg-[#087BDB]/10 text-[#087BDB] border-2 border-[#087BDB] hover:border-[#076EBE]";
      case "compact":
        return "bg-[#087BDB] hover:bg-[#076EBE] text-white text-xs font-semibold px-3 py-1.5 rounded-md";
      case "subtle":
        return "text-[#087BDB] hover:text-[#076EBE] underline-offset-4 hover:underline p-0";
      default:
        return "bg-[#087BDB] text-white";
    }
  };

  return (
    <a
      href={BUSINESS_PHONE.href}
      onClick={handleClick}
      aria-label={`Call Spectrum Plumbing Irvine at ${BUSINESS_PHONE.display}`}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-200 select-none group text-center cursor-pointer",
        variant !== "subtle" &&
          "px-5 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-[#087BDB] focus-visible:ring-offset-2",
        getVariantStyles(),
        className
      )}
    >
      {showIcon && (
        <span className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6">
          <Phone className="w-5 h-5 fill-current" aria-hidden="true" />
        </span>
      )}
      <span className="flex flex-col items-start leading-tight">
        <span className="font-bold tracking-tight">{label}</span>
        {subtext && (
          <span className="text-xs opacity-90 font-normal">{subtext}</span>
        )}
      </span>
    </a>
  );
}
