import React from "react";
import Link from "next/link";
import { Droplets, MapPin, ChevronRight, Radio, PhoneCall } from "lucide-react";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";
import { SERVICES_DATA } from "@/data/services";
import { SERVICE_AREAS_DATA } from "@/data/serviceAreas";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const currentYear = 2026;
  const majorServices = SERVICES_DATA.slice(0, 6);

  return (
    <footer className="bg-[#02070D] text-white border-t border-cyan-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#168DFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Row */}
        <div className="bg-gradient-to-r from-[#051426] via-[#09223D] to-[#0D2B4D] rounded-3xl p-8 sm:p-10 border border-cyan-400/25 shadow-2xl mb-14 flex flex-col md:flex-row items-center justify-between gap-6 card-sheen">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-cyan-400/20">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Direct Phone Support</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Have a Residential Plumbing Question in Irvine?
            </h3>
            <p className="text-sm text-[#94A3B8] mt-1">
              Speak directly with an experienced plumbing professional today.
            </p>
          </div>
          <PhoneCTA
            placement="footer_banner"
            label={`Call ${BUSINESS_PHONE.display}`}
            variant="hero"
            className="w-full md:w-auto text-base py-4 px-8 shadow-xl shadow-[#168DFF]/30 btn-3d"
            showIcon={true}
          />
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Model Disclosure */}
          <div className="lg:col-span-1">
            <Logo size="md" subtext="Irvine & Orange County, CA" className="mb-4" />
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
              Spectrum Plumbing Irvine connects Irvine property owners with experienced, independent plumbing professionals. We help you find timely assistance for residential water leaks, drain blockages, and water heater repairs.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold mb-4">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Serving All Irvine Villages, CA</span>
            </div>
            <a
              href={BUSINESS_PHONE.href}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#38BDF8] hover:underline"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{BUSINESS_PHONE.display}</span>
            </a>
          </div>

          {/* Column 2: Plumbing Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4">
              Plumbing Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {majorServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}/`}
                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#168DFF]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/"
                  className="text-[#38BDF8] hover:underline font-bold inline-flex items-center gap-1.5 pt-1"
                >
                  <span>View All 15 Services →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Irvine Neighborhoods */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_AREAS_DATA.slice(0, 6).map((area) => {
                const href = `/service-areas/${area.id}/`;
                return (
                  <li key={area.id}>
                    <Link
                      href={href}
                      className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3 h-3 text-[#168DFF]" />
                      <span>{area.name}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/service-areas/"
                  className="text-[#38BDF8] hover:underline font-bold inline-flex items-center gap-1.5 pt-1"
                >
                  <span>All Irvine Communities →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4">
              Company &amp; Guides
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link href="/about/" className="hover:text-[#38BDF8] transition-colors">
                  About Spectrum Plumbing
                </Link>
              </li>
              <li>
                <Link href="/how-it-works/" className="hover:text-[#38BDF8] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-[#38BDF8] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-[#38BDF8] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-[#38BDF8] transition-colors">
                  Plumbing Guides &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-[#38BDF8] transition-colors">
                  Editorial Standards
                </Link>
              </li>
              <li>
                <Link href="/authors/spectrum-editorial-team/" className="hover:text-[#38BDF8] transition-colors">
                  Author Profiles
                </Link>
              </li>
              <li>
                <Link href="/sitemap/" className="hover:text-[#38BDF8] transition-colors">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Disclosures */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-4">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <Link href="/privacy-policy/" className="hover:text-[#38BDF8] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use/" className="hover:text-[#38BDF8] transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="hover:text-[#38BDF8] transition-colors">
                  Website Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/accessibility/" className="hover:text-[#38BDF8] transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>

            <div className="pt-6 border-t border-white/10 mt-6">
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Emergency Line:{" "}
                <a href={BUSINESS_PHONE.href} className="text-[#38BDF8] font-bold hover:underline">
                  {BUSINESS_PHONE.display}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-[11px] max-w-4xl leading-relaxed">
              {BUSINESS_INFO.disclosure}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[11px] text-[#38BDF8]">
              <Link href="/blog/" className="hover:underline">
                Plumbing Educational Guides
              </Link>
              <span>•</span>
              <Link href="/editorial-policy/" className="hover:underline">
                Editorial Standards &amp; Review Policy
              </Link>
              <span>•</span>
              <Link href="/sitemap/" className="hover:underline">
                HTML Sitemap
              </Link>
              <span>•</span>
              <Link href="/privacy-policy/" className="hover:underline">
                California Privacy Rights
              </Link>
            </div>
          </div>
          <p className="whitespace-nowrap text-center md:text-right text-[11px]">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
