import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SearchClient } from "./SearchClient";
import { BUSINESS_INFO } from "@/config/business";

export const metadata: Metadata = {
  title: "Search Plumbing Services & Guides | Spectrum Plumbing Irvine",
  description:
    "Search across Spectrum Plumbing Irvine's services directory, Irvine neighborhood guides, troubleshooting articles, and FAQs.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/search/`,
  },
};

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header />

      <main id="main-content" className="flex-1 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#087BDB]">
              Home
            </Link>{" "}
            / <span className="text-[#0F172A] font-semibold">Search</span>
          </nav>

          <SectionHeading
            badge="Instant Site Search"
            title={
              <>
                Search Services, Guides &amp;{" "}
                <span className="gradient-text-accent">Neighborhoods</span>
              </>
            }
            subtitle="Quickly find answers to specific plumbing concerns across Irvine, California."
            centered={true}
          />

          <div className="mt-10">
            <Suspense
              fallback={
                <div className="text-center py-12 text-sm text-[#64748B]">
                  Loading search interface...
                </div>
              }
            >
              <SearchClient />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
