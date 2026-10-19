import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Terms of Use | Spectrum Plumbing Irvine",
  description:
    "Review the terms and conditions governing the use of Spectrum Plumbing Irvine's website, referral directory, and informational content.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/terms-of-use/`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfUsePage() {
  const lastUpdated = "October 19, 2026";

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "website-purpose", title: "2. Website Purpose & Referral Model" },
    { id: "informational-limits", title: "3. Informational Content & Diagnostic Advice" },
    { id: "independent-contractors", title: "4. Independent Service Provider Relationships" },
    { id: "permitted-use", title: "5. Permitted & Prohibited Use" },
    { id: "intellectual-property", title: "6. Intellectual Property Rights" },
    { id: "disclaimer-warranties", title: "7. Disclaimer of Warranties" },
    { id: "limitation-liability", title: "8. Limitation of Liability" },
    { id: "indemnification", title: "9. Indemnification" },
    { id: "dispute-resolution", title: "10. Governing Law & Dispute Resolution" },
    { id: "modifications", title: "11. Modifications to Terms" },
    { id: "contact-information", title: "12. Contact Information" },
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
            / <span className="text-[#0F172A] font-semibold">Terms of Use</span>
          </nav>

          <SectionHeading
            badge="Terms &amp; Conditions"
            title={
              <>
                Terms of <span className="gradient-text-accent">Use</span>
              </>
            }
            subtitle={`Last Updated: ${lastUpdated}. Please read these terms carefully before accessing or using this website.`}
            centered={false}
          />

          {/* Table of Contents */}
          <nav
            aria-label="Table of Contents"
            className="my-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs"
          >
            <h2 className="text-base font-bold font-heading text-[#0F172A] mb-4">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="text-[#087BDB] hover:text-[#168DFF] hover:underline py-1"
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Legal Sections */}
          <div className="space-y-12 text-sm leading-[1.8] text-[#334155]">
            <section id="acceptance" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-[#475569]">
                By browsing, viewing, accessing, or using the website located at <strong>{BUSINESS_INFO.domain}</strong> (the &ldquo;Site&rdquo;), or by placing a telephone call to <strong>{BUSINESS_PHONE.display}</strong>, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, you must discontinue your use of this Site immediately.
              </p>
            </section>

            <section id="website-purpose" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                2. Website Purpose &amp; Referral Model
              </h2>
              <p className="text-[#475569] mb-3">
                Spectrum Plumbing Irvine operates exclusively as a local consumer informational resource and referral connection platform. <strong>Spectrum Plumbing Irvine is not a licensed plumbing contractor</strong> under California law and does not directly provide plumbing diagnostic, repair, installation, or emergency dispatch services.
              </p>
              <p className="text-[#475569]">
                Our telephone lines connect callers to independent, third-party plumbing professionals who operate autonomously and maintain their own licenses, insurance, pricing schedules, and customer contracts.
              </p>
            </section>

            <section id="informational-limits" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                3. Informational Content &amp; Diagnostic Advice Limitations
              </h2>
              <p className="text-[#475569] mb-3">
                All articles, diagnostic checklists, troubleshooting guides, pricing factors, and technical commentary published on this Site are provided for general educational and informational purposes only.
              </p>
              <p className="text-[#475569]">
                This content does not constitute customized engineering, structural, or official trade advice for your specific building. Residential plumbing systems involve pressurized potable water, natural gas, high-voltage electrical connections, and subterranean sewer piping. You should never undertake repairs beyond your verified mechanical competence. Always consult a licensed California plumbing contractor before taking physical action on your property.
              </p>
            </section>

            <section id="independent-contractors" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                4. Independent Service Provider Relationships
              </h2>
              <p className="text-[#475569] mb-3">
                Any contractual agreement, quote, scope of work, warranty, or financial transaction for plumbing services is entered into solely between you (the property owner or tenant) and the independent plumbing contractor assigned to your job.
              </p>
              <p className="text-[#475569]">
                Spectrum Plumbing Irvine does not guarantee the workmanship, arrival time, pricing, or licensing status of independent third-party contractors. We strongly encourage homeowners to independently verify contractor license standing via the <strong>California Contractors State License Board (CSLB)</strong> website prior to signing agreements.
              </p>
            </section>

            <section id="permitted-use" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                5. Permitted &amp; Prohibited Use
              </h2>
              <p className="text-[#475569] mb-3">
                You may access this Site solely for legitimate, non-commercial personal use to review plumbing information and request telephone plumbing assistance.
              </p>
              <p className="text-[#475569]">
                You agree not to: (a) scrape, crawl, or harvest content through automated bots without authorization; (b) disrupt or compromise server security or network infrastructure; (c) submit false or spam inquiries; or (d) misuse phone links for prank or unauthorized commercial solicitations.
              </p>
            </section>

            <section id="intellectual-property" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                6. Intellectual Property Rights
              </h2>
              <p className="text-[#475569]">
                All text, graphics, logos, user interfaces, layouts, code, and photographic assets displayed on this Site are the proprietary property of Spectrum Plumbing Irvine (or used under license) and are protected by United States and international copyright, trademark, and unfair competition laws.
              </p>
            </section>

            <section id="disclaimer-warranties" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-[#475569]">
                THE SITE AND ALL CONTENT, GUIDES, AND REFERRALS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section id="limitation-liability" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-[#475569]">
                IN NO EVENT SHALL SPECTRUM PLUMBING IRVINE, ITS OPERATORS, DIRECTORS, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SITE, RELIANCE ON EDUCATIONAL GUIDES, OR WORK PERFORMED BY INDEPENDENT CONTRACTORS REFERRED THROUGH THE PLATFORM.
              </p>
            </section>

            <section id="indemnification" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                9. Indemnification
              </h2>
              <p className="text-[#475569]">
                You agree to defend, indemnify, and hold harmless Spectrum Plumbing Irvine and its operators from and against any claims, liabilities, damages, losses, or legal expenses arising out of your violation of these Terms of Use or your misuse of the platform.
              </p>
            </section>

            <section id="dispute-resolution" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                10. Governing Law &amp; Dispute Resolution
              </h2>
              <p className="text-[#475569]">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the state or federal courts located in Orange County, California.
              </p>
            </section>

            <section id="modifications" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                11. Modifications to Terms
              </h2>
              <p className="text-[#475569]">
                We reserve the right to revise these Terms of Use at any time. When revisions occur, we will update the &ldquo;Last Updated&rdquo; date at the top of this document. Continued use of the Site after revisions constitutes acceptance of the amended terms.
              </p>
            </section>

            <section id="contact-information" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                12. Contact Information
              </h2>
              <p className="text-[#475569] mb-4">
                If you have questions regarding these Terms of Use, please contact us:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                <p><strong>Platform:</strong> Spectrum Plumbing Irvine</p>
                <p><strong>Inquiries:</strong> <Link href="/contact/" className="text-[#087BDB] font-bold hover:underline">spectrumplumbingirvine.com/contact/</Link></p>
                <p><strong>Direct Line:</strong> <a href={BUSINESS_PHONE.href} className="text-[#087BDB] font-bold hover:underline">{BUSINESS_PHONE.display}</a></p>
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
