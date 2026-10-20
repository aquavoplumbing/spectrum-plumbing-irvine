"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu, Search } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { Logo } from "@/components/shared/Logo";
import { trackPhoneClick } from "@/lib/analytics";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesNav = MAIN_NAVIGATION.find((n) => n.title === "Services");
  const areasNav = MAIN_NAVIGATION.find((n) => n.title === "Service Areas");

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#041122]/95 backdrop-blur-xl shadow-[0_12px_36px_rgba(2,10,22,0.65)] py-2.5 md:py-3 border-b border-cyan-500/25"
            : "bg-gradient-to-r from-[#041122] via-[#071F3D] to-[#041122] backdrop-blur-lg py-3.5 md:py-4 border-b border-cyan-500/15 shadow-[0_4px_24px_rgba(2,10,22,0.4)]"
        )}
      >
        {/* Subtle luminous top highlight line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <Logo priority size="md" />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#092242]/70 p-1.5 rounded-2xl border border-cyan-400/20 shadow-inner backdrop-blur-md"
              aria-label="Main Navigation"
            >
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesDropdownOpen}
                  className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10 cursor-pointer"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200 text-cyan-400",
                      servicesDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {servicesDropdownOpen && servicesNav?.children && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="bg-[#061830]/98 border border-cyan-400/30 rounded-2xl shadow-[0_20px_50px_rgba(2,10,22,0.85)] p-2.5 backdrop-blur-2xl">
                      {servicesNav.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-3 py-2 rounded-xl hover:bg-white/10 transition-colors group"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <p className="text-xs font-bold text-white group-hover:text-[#38BDF8]">
                            {child.title}
                          </p>
                          {child.description && (
                            <p className="text-[11px] text-[#94A3B8] line-clamp-1 mt-0.5">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                      <div className="pt-2 mt-1 border-t border-white/10 px-3">
                        <Link
                          href="/services/"
                          className="text-xs font-bold text-[#38BDF8] hover:text-white flex items-center justify-between py-1.5 transition-colors"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span>Explore All 15 Services</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={areasDropdownOpen}
                  className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10 cursor-pointer"
                  onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                >
                  <span>Villages</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200 text-cyan-400",
                      areasDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {areasDropdownOpen && areasNav?.children && (
                  <div className="absolute top-full left-0 w-76 pt-2 z-50">
                    <div className="bg-[#061830]/98 border border-cyan-400/30 rounded-2xl shadow-[0_20px_50px_rgba(2,10,22,0.85)] p-2.5 grid grid-cols-2 gap-1 backdrop-blur-2xl">
                      {areasNav.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-xs font-medium text-white/90 hover:text-[#38BDF8] transition-colors"
                          onClick={() => setAreasDropdownOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/how-it-works/"
                className="px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10"
              >
                How It Works
              </Link>
              <Link
                href="/about/"
                className="px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10"
              >
                About
              </Link>
              <Link
                href="/blog/"
                className="px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10"
              >
                Guides
              </Link>
              <Link
                href="/faq/"
                className="px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10"
              >
                FAQ
              </Link>
              <Link
                href="/contact/"
                className="px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10"
              >
                Contact
              </Link>

              {/* Search Icon */}
              <Link
                href="/search/"
                className="p-1.5 text-white/80 hover:text-[#38BDF8] transition-colors rounded-lg hover:bg-white/10 ml-1"
                aria-label="Search website"
              >
                <Search className="w-4 h-4" />
              </Link>
            </nav>

            {/* Right: Merged Phone Call Button & Mobile Toggle */}
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 flex-shrink-0">
              {/* Unified Call Button (Merged Number + Call Button) */}
              <a
                href={BUSINESS_PHONE.href}
                onClick={() => trackPhoneClick("header", BUSINESS_PHONE.display)}
                className="hidden sm:inline-flex items-center gap-2.5 bg-gradient-to-r from-[#168DFF] via-[#087BDB] to-[#0284C7] hover:from-[#2563EB] hover:to-[#0284C7] text-white py-2 px-3.5 md:py-2 md:px-4 rounded-xl shadow-lg shadow-[#168DFF]/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-cyan-400/30 group"
                aria-label={`Call ${BUSINESS_PHONE.display}`}
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[9px] md:text-[10px] uppercase font-extrabold tracking-wider text-cyan-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Direct Irvine Line
                  </span>
                  <span className="text-xs md:text-sm font-extrabold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
                    {BUSINESS_PHONE.display}
                  </span>
                </div>
              </a>

              {/* Compact Call Icon for Mobile (< sm) - 44x44px accessible touch target */}
              <a
                href={BUSINESS_PHONE.href}
                onClick={() => trackPhoneClick("header", BUSINESS_PHONE.display)}
                className="sm:hidden w-11 h-11 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white shadow-md shadow-[#168DFF]/40 flex items-center justify-center active:scale-95 transition-transform"
                aria-label={`Call ${BUSINESS_PHONE.display}`}
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>

              {/* Mobile Drawer Toggle - 44x44px accessible touch target */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-11 h-11 rounded-xl text-white/90 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
