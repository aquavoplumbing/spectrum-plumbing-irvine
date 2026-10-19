"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu, Droplets, Search } from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
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
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#030C17]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] py-3 border-b border-cyan-500/20"
            : "bg-[#030C17]/75 backdrop-blur-md py-4 md:py-5 border-b border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-xl"
              aria-label="Spectrum Plumbing Irvine Homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] flex items-center justify-center text-white shadow-lg shadow-[#168DFF]/35 group-hover:scale-105 transition-transform duration-200 border border-white/20">
                <Droplets className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg md:text-xl tracking-tight text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                  Spectrum Plumbing
                </span>
                <span className="text-[10px] font-extrabold text-[#38BDF8] tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Irvine, CA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/[0.04] p-1.5 rounded-2xl border border-white/10 backdrop-blur-md"
              aria-label="Main Navigation"
            >
              <Link
                href="/"
                className="px-3.5 py-1.5 text-xs font-bold text-white/90 hover:text-[#38BDF8] transition-colors rounded-xl hover:bg-white/10"
              >
                Home
              </Link>

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
                    <div className="bg-[#051426]/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-2.5 backdrop-blur-2xl">
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
                    <div className="bg-[#051426]/95 border border-cyan-500/30 rounded-2xl shadow-2xl p-2.5 grid grid-cols-2 gap-1 backdrop-blur-2xl">
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

            {/* Right: Phone CTA & Mobile Toggle */}
            <div className="flex items-center gap-3.5">
              {/* Phone display for desktop */}
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-[10px] text-[#38BDF8] uppercase font-bold tracking-wider flex items-center justify-end gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Direct Irvine Line
                </span>
                <a
                  href={BUSINESS_PHONE.href}
                  className="text-base font-extrabold text-white hover:text-[#38BDF8] transition-colors"
                >
                  {BUSINESS_PHONE.display}
                </a>
              </div>

              {/* Call Now Button */}
              <PhoneCTA
                placement="header"
                label="Call Now"
                variant="hero"
                className="hidden md:inline-flex text-xs py-2.5 px-5 shadow-lg shadow-[#168DFF]/30 btn-3d"
                showIcon={true}
              />

              {/* Compact Call Icon for Mobile */}
              <a
                href={BUSINESS_PHONE.href}
                className="md:hidden p-2 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white shadow-md shadow-[#168DFF]/40"
                aria-label={`Call ${BUSINESS_PHONE.display}`}
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>

              {/* Mobile Drawer Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
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
