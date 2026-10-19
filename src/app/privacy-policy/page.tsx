import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, ArrowLeft, PhoneCall } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy | Spectrum Plumbing Irvine",
  description:
    "Review Spectrum Plumbing Irvine's privacy practices, including call tracking disclosure, information collection, data sharing with independent contractors, and California privacy rights.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/privacy-policy/`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 19, 2026";

  const sections = [
    { id: "operator-identity", title: "1. Website Operator & Service Model" },
    { id: "information-collected", title: "2. Information We Collect" },
    { id: "phone-inquiries", title: "3. Telephone Inquiries & Call Tracking" },
    { id: "contact-form", title: "4. Contact Form Submissions" },
    { id: "sharing-practices", title: "5. Information Sharing with Independent Contractors" },
    { id: "analytics-cookies", title: "6. Cookies, Analytics & Tracking Technologies" },
    { id: "retention-security", title: "7. Data Retention & Information Security" },
    { id: "california-rights", title: "8. California Privacy Rights (CCPA / CPRA)" },
    { id: "third-party-links", title: "9. Third-Party Websites & Services" },
    { id: "policy-updates", title: "10. Changes to This Privacy Policy" },
    { id: "contact-us", title: "11. Contact Details & Privacy Inquiries" },
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
            / <span className="text-[#0F172A] font-semibold">Privacy Policy</span>
          </nav>

          <SectionHeading
            badge="Legal Transparency"
            title={
              <>
                Privacy <span className="gradient-text-accent">Policy</span>
              </>
            }
            subtitle={`Last Updated: ${lastUpdated}. Please review our data collection, call tracking, and referral disclosures.`}
            centered={false}
          />

          {/* Legal Notice Box */}
          <div className="mt-8 p-6 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-xs sm:text-sm text-[#334155] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#087BDB] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0F172A] block mb-1">Notice to Irvine Visitors:</strong>
              <span>
                Spectrum Plumbing Irvine is a referral and educational platform. When you call (949) 539-8503 or submit an inquiry, you may be connected with an independent, third-party plumbing service provider. This document explains how your information is handled during that process.
              </span>
            </div>
          </div>

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

          {/* Legal Content Sections */}
          <div className="space-y-12 text-sm leading-[1.8] text-[#334155]">
            <section id="operator-identity" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                1. Website Operator &amp; Service Model
              </h2>
              <p className="text-[#475569] mb-3">
                This website, <strong>Spectrum Plumbing Irvine</strong> (accessible at {BUSINESS_INFO.domain}), is operated as a specialized local lead-generation, referral, and educational directory. Spectrum Plumbing Irvine is not a licensed plumbing contractor and does not directly employ plumbers or perform physical plumbing repairs.
              </p>
              <p className="text-[#475569]">
                Our platform exists to assist property owners in Irvine and Orange County in researching plumbing diagnostic information and establishing direct telephone contact with independent, third-party plumbing trade specialists.
              </p>
            </section>

            <section id="information-collected" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                2. Information We Collect
              </h2>
              <p className="text-[#475569] mb-3">
                We collect personal information solely to facilitate your inquiry and optimize our platform. The types of data collected depend on how you interact with our services:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                <li>
                  <strong>Direct Inquiries:</strong> When you place a phone call or voluntarily submit an inquiry on our Contact page, we may collect your name, phone number, email address, Irvine neighborhood or ZIP code, and the nature of your plumbing symptoms.
                </li>
                <li>
                  <strong>Technical Data:</strong> Standard internet log information including your IP address, browser type, operating system, referring URL, pages viewed, and device identifiers.
                </li>
              </ul>
            </section>

            <section id="phone-inquiries" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                3. Telephone Inquiries &amp; Call Tracking
              </h2>
              <p className="text-[#475569] mb-3">
                Because our primary service model is telephone triage, we utilize industry-standard telecommunications routing and call-tracking platforms (such as Ringba or equivalent providers). When you dial <strong>(949) 539-8503</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#475569] mb-3">
                <li>
                  <strong>Call Metadata:</strong> Telephony routing platforms record transmission metadata, including caller phone number (Caller ID), call timestamp, call duration, originating area code, and whether the call was successfully connected to an available independent contractor.
                </li>
                <li>
                  <strong>Call Monitoring:</strong> Calls may be monitored or recorded for quality assurance, training, and referral verification purposes. If call recording is active, an automated disclosure will notify you at the start of your call. Continued participation after the notification constitutes your consent.
                </li>
              </ul>
            </section>

            <section id="contact-form" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                4. Contact Form Submissions
              </h2>
              <p className="text-[#475569]">
                Forms are strictly restricted on our website and are available only on our dedicated Contact page (/contact/). If you choose to send a message through that form, we collect your submitted name, phone number, optional email, selected service category, and inquiry description. This data is transmitted securely over HTTPS and used exclusively to evaluate and route your request.
              </p>
            </section>

            <section id="sharing-practices" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                5. Information Sharing with Independent Contractors
              </h2>
              <p className="text-[#475569] mb-3">
                We do not sell, rent, or trade your personal information to third-party data brokers or marketing firms for unrelated commercial solicitations.
              </p>
              <p className="text-[#475569]">
                However, to satisfy the fundamental purpose of our website—connecting you with plumbing support—we transfer inquiry details (such as your phone number, location, and issue description) to independent plumbing contractors servicing Irvine. Once connected, the independent contractor&apos;s own privacy practices govern their handling of your information.
              </p>
            </section>

            <section id="analytics-cookies" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                6. Cookies, Analytics &amp; Tracking Technologies
              </h2>
              <p className="text-[#475569] mb-3">
                We may use session cookies, local storage, and privacy-respecting analytics tools to understand website traffic patterns, evaluate page performance, and track anonymous conversion events (such as button click events when you tap a telephone number link).
              </p>
              <p className="text-[#475569]">
                You can manage or disable cookies through your individual browser settings. Disabling cookies will not restrict your ability to read educational articles or call our telephone line.
              </p>
            </section>

            <section id="retention-security" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                7. Data Retention &amp; Information Security
              </h2>
              <p className="text-[#475569]">
                We maintain appropriate administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, destruction, loss, or alteration. We retain contact inquiries and call logs only as long as reasonably necessary to fulfill legitimate business and compliance obligations.
              </p>
            </section>

            <section id="california-rights" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                8. California Consumer Privacy Rights (CCPA / CPRA)
              </h2>
              <p className="text-[#475569] mb-3">
                If you are a California resident, the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA) may afford you specific rights regarding your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#475569] mb-3">
                <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information collected about you.</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information collected from you, subject to legal exceptions.</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will never discriminate against you for exercising your privacy rights.</li>
              </ul>
              <p className="text-[#475569]">
                To exercise any California consumer rights, please contact us using the contact details provided below.
              </p>
            </section>

            <section id="third-party-links" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                9. Third-Party Websites &amp; Services
              </h2>
              <p className="text-[#475569]">
                Our website may contain links to external resources, such as municipal utility sites (e.g., Irvine Ranch Water District) or trade code references. We are not responsible for the privacy practices, content, or security of external websites.
              </p>
            </section>

            <section id="policy-updates" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-[#475569]">
                We reserve the right to amend this Privacy Policy at any time to reflect operational, legal, or regulatory updates. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section id="contact-us" className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                11. Contact Details &amp; Privacy Inquiries
              </h2>
              <p className="text-[#475569] mb-4">
                If you have questions, comments, or wish to exercise your privacy rights under California law, please reach out via our contact page or by phone:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                <p><strong>Platform:</strong> Spectrum Plumbing Irvine</p>
                <p><strong>Target Region:</strong> Irvine, Orange County, California</p>
                <p><strong>Direct Telephone:</strong> <a href={BUSINESS_PHONE.href} className="text-[#087BDB] font-bold hover:underline">{BUSINESS_PHONE.display}</a></p>
                <p><strong>Online Inquiries:</strong> <Link href="/contact/" className="text-[#087BDB] font-bold hover:underline">spectrumplumbingirvine.com/contact/</Link></p>
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
