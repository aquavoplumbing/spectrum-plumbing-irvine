"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { trackPhoneClick } from "@/lib/analytics";

export function MobileCallBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(() => setIsVisible(true), 600);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    trackPhoneClick("mobile_sticky", BUSINESS_PHONE.display);
  };

  return (
    <aside
      aria-label="Quick Phone Call Bar"
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#06172B]/95 backdrop-blur-md border-t border-[#40D5FF]/30 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 pb-safe ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#087BDB]/30 border border-[#40D5FF]/40 flex items-center justify-center text-[#40D5FF] flex-shrink-0">
            <Phone className="w-4 h-4 fill-current" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-[#40D5FF] uppercase tracking-wider">
              Need Plumbing Help?
            </span>
            <span className="text-xs text-white/95 font-bold tracking-tight">
              {BUSINESS_PHONE.display}
            </span>
          </div>
        </div>

        <a
          href={BUSINESS_PHONE.href}
          onClick={handleClick}
          aria-label={`Call now at ${BUSINESS_PHONE.display}`}
          className="flex-1 max-w-[170px] min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#168DFF] to-[#087BDB] hover:from-[#2563EB] hover:to-[#087BDB] text-white font-bold text-sm shadow-lg shadow-[#168DFF]/40 active:scale-95 transition-all text-center border border-cyan-400/30"
        >
          <Phone className="w-4 h-4 fill-current flex-shrink-0" />
          <span>Call Now</span>
        </a>
      </div>
    </aside>
  );
}
