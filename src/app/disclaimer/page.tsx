import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ShieldCheck, Flame, Droplets, ArrowRight, PhoneCall } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Website Disclaimer & Plumbing Advisory | Spectrum Plumbing Irvine",
  description:
    "Important advisory regarding general educational plumbing content, emergency safety procedures, and independent service contractor relationships in Irvine, CA.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/disclaimer/`,
  },
  openGraph: {
    title: "Website Disclaimer & Plumbing Advisory | Spectrum Plumbing Irvine",
    description:
      "Important advisory regarding general educational plumbing content, emergency safety procedures, and independent contractor relationships in Irvine, CA.",
    url: `${BUSINESS_INFO.domain}/disclaimer/`,
    siteName: BUSINESS_INFO.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spectrum Plumbing Irvine - Website Disclaimer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Disclaimer & Plumbing Advisory | Spectrum Plumbing Irvine",
    description:
      "Important advisory regarding general educational plumbing content, emergency safety procedures, and independent contractor relationships in Irvine, CA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  const lastUpdated = "October 19, 2026";

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
            / <span className="text-[#0F172A] font-semibold">Disclaimer</span>
          </nav>

          <SectionHeading
            badge="Homeowner Advisory"
            title={
              <>
                Website <span className="gradient-text-accent">Disclaimer</span>
              </>
            }
            subtitle={`Last Updated: ${lastUpdated}. Important information regarding our educational guides, emergency guidance, and contractor connections.`}
            centered={false}
          />

          {/* Critical Emergency Warning Banner */}
          <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-50 border border-amber-200 text-amber-900 shadow-xs">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div className="space-y-2 text-xs sm:text-sm">
                <h2 className="text-base font-bold text-amber-950 font-heading">
                  Immediate Safety Advisory: Gas Leaks &amp; Severe Flooding
                </h2>
                <p className="leading-relaxed">
                  <strong>If you smell natural gas (a rotten egg or sulfur odor):</strong> Do not turn on or off any light switches, do not use household appliances, and do not place phone calls from inside the building. Evacuate all occupants immediately and call Southern California Gas Company (SoCalGas) at 1-800-427-2200 or 911 from a safe distance outside.
                </p>
                <p className="leading-relaxed">
                  <strong>For severe water flooding:</strong> If water is in contact with electrical outlets or wiring, do not enter the standing water. Turn off power at the main electrical breaker panel first if it is safe to access, or contact your electric utility.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10 text-sm leading-[1.8] text-[#334155]">
            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                1. General Informational &amp; Educational Purpose Only
              </h2>
              <p className="text-[#475569] mb-3">
                All content, diagnostic checklists, troubleshooting guides, articles, and recommendations published on Spectrum Plumbing Irvine are provided solely for general educational purposes. This information is intended to help property owners understand common plumbing symptoms and terminology.
              </p>
              <p className="text-[#475569]">
                <strong>This content does not constitute customized engineering, architectural, or professional plumbing trade advice</strong> for your specific residence or commercial structure. Every building in Irvine features unique piping layouts, water pressure variables, and foundation conditions that require physical, on-site assessment by a qualified professional.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                2. When Professional Assessment is Mandatory
              </h2>
              <p className="text-[#475569] mb-3">
                While homeowners may safely clear a minor surface hair clog from an accessible bathroom drain trap, professional diagnostic assessment is necessary for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                <li>Suspected slab leaks or subterranean copper line corrosion under concrete foundations.</li>
                <li>Water heater gas supply valves, pilot assemblies, thermocouples, or electrical elements.</li>
                <li>Mainline sewer backflow affecting multiple household fixtures simultaneously.</li>
                <li>Excessive incoming municipal water pressure exceeding 80 PSI requiring pressure regulator installation.</li>
                <li>Natural gas piping, branch connections, or appliance flex lines.</li>
              </ul>
            </section>

            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                3. Independent Service Contractor Relationships
              </h2>
              <p className="text-[#475569] mb-3">
                Spectrum Plumbing Irvine is a marketing, referral, and informational directory. <strong>We do not directly employ technicians, dispatch company vehicles, or perform plumbing installations or repairs.</strong>
              </p>
              <p className="text-[#475569]">
                When you call (949) 539-8503, our telephone routing system connects you with independent, third-party plumbing professionals who operate their own businesses. Spectrum Plumbing Irvine does not supervise, endorse, or guarantee the workmanship, timeliness, pricing, or licensing of any contractor. All contracts and warranties exist solely between you and the servicing trade provider.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                4. No Guarantee of Specific Outcomes or Pricing
              </h2>
              <p className="text-[#475569] mb-3">
                Plumbing diagnostics are inherently complex. Hidden issues such as bellied sewer lines, galvanic corrosion, or unpermitted prior remodels may only become apparent during physical teardown or camera inspection.
              </p>
              <p className="text-[#475569]">
                Any price estimates or cost ranges mentioned in educational articles are rough general approximations based on historical Orange County market data. They do not represent a guaranteed, binding quote for your individual project.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                5. Accuracy &amp; Update Limitations
              </h2>
              <p className="text-[#475569]">
                While we strive to keep technical and municipal code information current, plumbing codes (including Uniform Plumbing Code and Irvine municipal amendments) change over time. We make no representations or warranties regarding the complete, real-time accuracy or completeness of all published guides.
              </p>
            </section>

            <section className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold font-heading text-[#0F172A] mb-3">
                6. Contact for Clarification
              </h2>
              <p className="text-[#475569] mb-4">
                If you have questions regarding this disclaimer or require plumbing assistance in Irvine:
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
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
