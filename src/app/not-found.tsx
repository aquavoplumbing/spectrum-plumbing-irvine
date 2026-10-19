import React from "react";
import Link from "next/link";
import { Droplets, ArrowRight, Home, Wrench, Compass, PhoneCall, HelpCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030C17] via-[#051426] to-[#09223D] text-white relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#168DFF]/20 rounded-full blur-[170px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* Visual 404 Badge with Pipe / Water Drop Graphic */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#09223D]/90 border border-cyan-400/40 text-[#38BDF8] shadow-2xl shadow-[#168DFF]/30 mb-8 backdrop-blur-xl">
            <Droplets className="w-12 h-12 animate-bounce" />
          </div>

          <div className="text-xs uppercase font-extrabold tracking-widest text-[#38BDF8] mb-3">
            Error 404 • Resource Not Found
          </div>

          <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-6">
            Looks Like This Page{" "}
            <span className="gradient-text-electric">Has a Leak.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#CBD5E1] max-w-lg mx-auto mb-10 leading-relaxed font-normal">
            The page you&apos;re looking for isn&apos;t available, but you can still explore plumbing services in Irvine or speak directly with an experienced professional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/services/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#087BDB] to-[#168DFF] hover:from-[#076EBE] hover:to-[#087BDB] shadow-xl shadow-[#168DFF]/30 transition-all btn-3d"
            >
              <Wrench className="w-4 h-4" />
              <span>Explore Plumbing Services</span>
            </Link>

            <PhoneCTA
              placement="404_page"
              label={`Call ${BUSINESS_PHONE.display}`}
              variant="hero"
              className="w-full sm:w-auto text-sm py-4 px-8 font-bold shadow-xl shadow-[#168DFF]/30 btn-3d"
              showIcon={true}
            />
          </div>

          {/* Quick Helpful Navigation Links */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-4">
              Helpful Irvine Navigation:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link
                href="/"
                className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Home className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Homepage</span>
              </Link>
              <Link
                href="/service-areas/"
                className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Service Areas</span>
              </Link>
              <Link
                href="/blog/"
                className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Plumbing Guides</span>
              </Link>
              <Link
                href="/contact/"
                className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#38BDF8] text-[#CBD5E1] hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Contact Page</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
