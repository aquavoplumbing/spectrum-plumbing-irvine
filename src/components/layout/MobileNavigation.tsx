"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, ChevronRight, Droplets, MapPin, Wrench, Search, HelpCircle, FileText, Info } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const servicesNav = MAIN_NAVIGATION.find((n) => n.title === "Services");
  const areasNav = MAIN_NAVIGATION.find((n) => n.title === "Service Areas");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Menu Panel */}
      <div className="relative w-full max-w-sm bg-[#061426] text-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-white/10 z-10 p-6">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div onClick={onClose}>
              <Logo size="sm" />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-11 h-11 rounded-xl text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Call Box in Mobile Drawer */}
          <div className="my-5 p-4 rounded-2xl bg-[#071D35] border border-[#35C7F4]/30 shadow-lg">
            <p className="text-xs text-[#35C7F4] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct Phone Assistance
            </p>
            <PhoneCTA
              placement="mobile_drawer"
              label={`Call ${BUSINESS_PHONE.display}`}
              variant="primary"
              className="w-full min-h-[46px] py-3 text-sm font-bold mt-2 shadow-lg shadow-[#168DFF]/30 btn-3d"
              showIcon={true}
            />
          </div>

          {/* Nav List */}
          <nav className="space-y-4 py-2">
            <div>
              <p className="text-xs font-bold uppercase text-[#A6C5E2] tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#35C7F4]" />
                Primary Services
              </p>
              <div className="grid grid-cols-1 gap-1 pl-1">
                {servicesNav?.children?.slice(0, 5).map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    onClick={onClose}
                    className="min-h-[44px] py-2 px-3 text-sm text-white/90 hover:text-[#35C7F4] hover:bg-white/5 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <span>{child.title}</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </Link>
                ))}
                <Link
                  href="/services/"
                  onClick={onClose}
                  className="min-h-[44px] flex items-center py-2 px-3 text-xs font-bold text-[#35C7F4] hover:underline"
                >
                  View All 15 Services →
                </Link>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <p className="text-xs font-bold uppercase text-[#A6C5E2] tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#35C7F4]" />
                Irvine Neighborhoods
              </p>
              <div className="grid grid-cols-2 gap-1.5 pl-1">
                {areasNav?.children?.slice(0, 8).map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    onClick={onClose}
                    className="min-h-[40px] flex items-center py-1.5 px-2.5 text-xs text-white/80 hover:text-[#35C7F4] hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-1">
              <Link
                href="/how-it-works/"
                onClick={onClose}
                className="min-h-[44px] flex items-center py-2 px-3 text-sm text-white/90 hover:text-[#35C7F4] hover:bg-white/5 rounded-xl transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/about/"
                onClick={onClose}
                className="min-h-[44px] flex items-center py-2 px-3 text-sm text-white/90 hover:text-[#35C7F4] hover:bg-white/5 rounded-xl transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blog/"
                onClick={onClose}
                className="min-h-[44px] flex items-center py-2 px-3 text-sm text-white/90 hover:text-[#35C7F4] hover:bg-white/5 rounded-xl font-bold transition-colors"
              >
                Plumbing Educational Guides
              </Link>
              <Link
                href="/faq/"
                onClick={onClose}
                className="min-h-[44px] flex items-center py-2 px-3 text-sm text-white/90 hover:text-[#35C7F4] hover:bg-white/5 rounded-xl transition-colors"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="/contact/"
                onClick={onClose}
                className="min-h-[44px] flex items-center py-2 px-3 text-sm text-[#35C7F4] hover:bg-white/5 rounded-xl font-bold transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/search/"
                onClick={onClose}
                className="min-h-[44px] flex items-center py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                Site Search
              </Link>
            </div>
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 border-t border-white/10 text-xs text-[#A6C5E2] pb-safe">
          <p className="font-semibold text-white">Serving Irvine, California</p>
          <p className="mt-1 text-[11px] leading-tight">
            Direct Phone: <a href={BUSINESS_PHONE.href} className="text-[#35C7F4] font-bold">{BUSINESS_PHONE.display}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
