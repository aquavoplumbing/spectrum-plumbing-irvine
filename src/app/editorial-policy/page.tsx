import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Scale,
  RefreshCw,
  Cpu,
  Mail,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Editorial Standards & Content Integrity Policy | Spectrum Plumbing Irvine",
  description:
    "Learn about Spectrum Plumbing Irvine's editorial research process, technical verification standards, fact checking, corrections policy, and content disclosure.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/editorial-policy/`,
  },
  openGraph: {
    title: "Editorial Standards & Content Integrity Policy | Spectrum Plumbing Irvine",
    description:
      "Our transparent commitment to publishing accurate, technically verified plumbing educational resources for Irvine property owners.",
    url: `${BUSINESS_INFO.domain}/editorial-policy/`,
    siteName: BUSINESS_INFO.name,
    type: "website",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header />

      <main id="main-content" className="flex-1 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#087BDB]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog/" className="hover:text-[#087BDB]">
              Resources
            </Link>{" "}
            / <span className="text-[#0F172A] font-semibold">Editorial Policy</span>
          </nav>

          <SectionHeading
            badge="Content Governance &amp; Ethics"
            title={
              <>
                Our Editorial Standards &amp;{" "}
                <span className="gradient-text-accent">Verification Policy</span>
              </>
            }
            subtitle="Our commitment to publishing accurate, transparent, and structurally sound plumbing educational resources for Irvine property owners."
            centered={false}
          />

          <div className="space-y-10 text-base leading-[1.8] text-[#334155] mt-10">
            {/* Section 1: Core Mission */}
            <section className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  1. Purpose &amp; Editorial Mission
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-4">
                Plumbing systems represent critical residential infrastructure. When pipes corrode under concrete slabs, water heaters fail, or sewer lines back up, homeowners face substantial property damage and safety risks. Spectrum Plumbing Irvine publishes comprehensive educational guides to empower Irvine residents with objective, actionable trade knowledge before they hire a contractor or undertake home maintenance.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                Our primary objective is to provide diagnostic clarity, debunk high-pressure sales myths, and explain local Orange County plumbing codes in accessible, practical language.
              </p>
            </section>

            {/* Section 2: Content Creation Process */}
            <section className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  2. Content Creation &amp; Research Process
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-4">
                Every guide published on Spectrum Plumbing Irvine begins with identifying real homeowner questions and architectural failure modes specific to Irvine. Our writers and technical contributors:
              </p>
              <ul className="space-y-2.5 text-sm text-[#475569] list-disc pl-5">
                <li>
                  Analyze architectural eras across Irvine (such as 1970s copper plumbing in Woodbridge vs. 2000s PEX in Portola Springs).
                </li>
                <li>
                  Incorporate municipal water quality parameters published by the <strong>Irvine Ranch Water District (IRWD)</strong>, specifically relating to mineral hardness and chloramine disinfection.
                </li>
                <li>
                  Outline step-by-step diagnostic procedures, potential root causes, and non-destructive inspection techniques.
                </li>
                <li>
                  Distinguish between minor homeowner DIY fixes (such as replacing a faucet aerator) and critical safety risks requiring licensed professionals (such as pressurized gas line repair or slab leak locating).
                </li>
              </ul>
            </section>

            {/* Section 3: Fact Checking & Technical Claims */}
            <section className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  3. Fact Checking &amp; Scientific Verification
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-4">
                Technical claims regarding pipe metallurgy, hydrostatic pressure thresholds, hydraulic flow rates, and chemical corrosion mechanisms are cross-checked against industry standards:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0F172A] block mb-1">Uniform Plumbing Code (UPC)</strong>
                  <span className="text-[#64748B]">
                    Governing California residential drain, waste, vent, and water supply sizing standards.
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0F172A] block mb-1">Copper Development Assoc. (CDA)</strong>
                  <span className="text-[#64748B]">
                    Guidelines on copper pinhole pitting, water velocity erosion, and soil chemistry interaction.
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0F172A] block mb-1">Irvine Ranch Water District (IRWD)</strong>
                  <span className="text-[#64748B]">
                    Official annual water quality and mineral hardness reports for Irvine potable water.
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-[#0F172A] block mb-1">California Title 24 Energy Standards</strong>
                  <span className="text-[#64748B]">
                    Efficiency and ventilation mandates for gas and electric tankless water heaters.
                  </span>
                </div>
              </div>
            </section>

            {/* Section 4 & 5: Professional Review & Sources */}
            <section className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  4. Professional Trade Consultation &amp; Sources
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-4">
                Our educational articles are attributed to our technical editorial trade group and reviewed against published trade codes and local contractor feedback. We do not invent fictitious master plumbers or falsify credentials.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                When third-party technical data, scientific studies, or code manuals are cited, we provide direct references and publication citations within the article footnotes.
              </p>
            </section>

            {/* Section 6: Updates and Corrections */}
            <section className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  5. Updates, Revisions &amp; Corrections Policy
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-4">
                Plumbing codes, municipal water regulations, and equipment technologies evolve. We systematically review published guides on a quarterly basis. When a factual error, code update, or obsolete manufacturer guideline is identified, we prompt:
              </p>
              <ul className="space-y-2 text-sm text-[#475569] list-disc pl-5">
                <li>Immediate correction of the erroneous technical statement or calculation.</li>
                <li>Updating the &ldquo;Last Updated&rdquo; timestamp on the article.</li>
                <li>Noting substantive technical changes for historical transparency.</li>
              </ul>
            </section>

            {/* Section 7: AI-Assisted Content Policy */}
            <section className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  6. AI-Assisted Research &amp; Human Trade Governance
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-4">
                We utilize modern digital tools and AI research assistance to synthesize complex municipal documents, format comparative data tables, and structure reading outlines.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                However, <strong>all technical recommendations, safety warnings, and diagnostic logic</strong> are reviewed and verified by human editors against actual California building regulations and real-world plumbing trade practice. We never publish unverified automated output.
              </p>
            </section>

            {/* Section 8: Reporting Issues & Contact */}
            <section className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                  7. Reporting Inaccuracies or Content Feedback
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#475569] mb-4">
                We welcome feedback, code clarifications, and suggestions from Irvine property owners, licensed plumbing contractors, municipal inspectors, and trade educators.
              </p>
              <p className="text-sm leading-relaxed text-[#475569] mb-6">
                If you detect an inaccuracy or believe a guide needs updating to reflect recent Irvine city ordinances, please contact our editorial staff:
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#087BDB] text-white text-xs font-bold hover:bg-[#076EBE] transition-colors"
                >
                  <span>Submit Editorial Feedback</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/authors/spectrum-editorial-team/"
                  className="text-xs font-bold text-[#64748B] hover:text-[#0F172A]"
                >
                  View Editorial Team Profile
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
