import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Eye, CheckCircle2, ShieldCheck, Mail, PhoneCall, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Accessibility Statement | Spectrum Plumbing Irvine",
  description:
    "Spectrum Plumbing Irvine is committed to digital accessibility. Learn about our WCAG 2.1 AA conformance targets, assistive technology features, and feedback channels.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/accessibility/`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityStatementPage() {
  const lastReviewed = "October 19, 2026";

  const accessibilityFeatures = [
    {
      title: "Semantic HTML Structure",
      desc: "We use correct HTML5 landmark elements (<main>, <nav>, <header>, <footer>, <section>) and a single logical <h1> per page to enable assistive screen readers to navigate smoothly.",
    },
    {
      title: "High-Contrast Visual Hierarchy",
      desc: "Our color palette adheres to WCAG 2.1 AA contrast requirements with high text-to-background contrast ratios for dark navy surfaces and light off-white reading zones.",
    },
    {
      title: "Keyboard Navigation & Focus Rings",
      desc: "All interactive elements, including phone call links, accordions, and navigation menus, are fully navigable and operable via standard keyboard tabs and Enter/Space keys.",
    },
    {
      title: "Descriptive Text Alternatives (Alt Text)",
      desc: "Every photographic asset and diagram includes meaningful descriptive alternative text to convey contextual information to visitors utilizing screen readers.",
    },
    {
      title: "Responsive Scalability",
      desc: "The interface scales cleanly from 320px mobile displays up to 4K ultra-wide monitors without horizontal overflow or loss of content functionality.",
    },
    {
      title: "Direct Phone Access",
      desc: "Our primary call-to-action is a direct telephone link (tel:+19495398503), eliminating complex multi-step digital forms for users who prefer verbal communication.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header />

      <main id="main-content" className="flex-1 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#087BDB]">
              Home
            </Link>{" "}
            / <span className="text-[#0F172A] font-semibold">Accessibility</span>
          </nav>

          <SectionHeading
            badge="Digital Inclusion"
            title={
              <>
                Accessibility <span className="gradient-text-accent">Statement</span>
              </>
            }
            subtitle={`Date of Last Review: ${lastReviewed}. Our commitment to ensuring digital accessibility for all visitors, including individuals with disabilities.`}
            centered={false}
          />

          <div className="space-y-10 text-sm leading-[1.8] text-[#334155] mt-10">
            {/* Section 1: Our Commitment */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  Our Commitment to Accessibility
                </h2>
              </div>
              <p className="text-[#475569] mb-4">
                At <strong>Spectrum Plumbing Irvine</strong>, we are committed to ensuring digital accessibility for people of all abilities. We continuously apply relevant accessibility standards to improve the user experience for everyone and target conformance with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>.
              </p>
              <p className="text-[#475569]">
                These guidelines outline how to make web content more accessible to people with visual, auditory, cognitive, and motor disabilities, making the web experience more usable for all Irvine residents.
              </p>
            </section>

            {/* Section 2: Key Accessibility Measures */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-6">
                Measures Taken to Support Accessibility
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {accessibilityFeatures.map((feat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-sm font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feat.title}</span>
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Known Limitations */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                Known Limitations &amp; Potential Barriers
              </h2>
              <p className="text-[#475569] mb-3">
                While we strive for comprehensive accessibility, certain external services or embedded components may occasionally present limitations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                <li>
                  <strong>Third-Party Telephony Routing:</strong> Automated telecommunications call tracking systems may rely on carrier-specific touch-tone inputs. Callers using TTY or California Relay Service (CRS) can dial 711 to connect with our direct number.
                </li>
                <li>
                  <strong>Legacy Technical Diagrams:</strong> Some detailed historical engineering schematics or vector diagrams may require supplementary narrative descriptions, which we provide in article text.
                </li>
              </ul>
            </section>

            {/* Section 4: Feedback & Assistance Contact */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                Accessibility Feedback &amp; Assistance
              </h2>
              <p className="text-[#475569] mb-6">
                We welcome your feedback on the accessibility of Spectrum Plumbing Irvine. If you encounter accessibility barriers, experience difficulty reading any section of our website, or require assistance in an alternate format:
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-[#087BDB] flex-shrink-0" />
                  <span>
                    <strong>Telephone Support:</strong> Call{" "}
                    <a href={BUSINESS_PHONE.href} className="text-[#087BDB] font-bold hover:underline">
                      {BUSINESS_PHONE.display}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#087BDB] flex-shrink-0" />
                  <span>
                    <strong>Online Feedback:</strong> Send details via our{" "}
                    <Link href="/contact/" className="text-[#087BDB] font-bold hover:underline">
                      Contact Form
                    </Link>
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#64748B] mt-4">
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
