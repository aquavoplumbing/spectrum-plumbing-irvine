import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PlumbingProblems } from "@/components/home/PlumbingProblems";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { MidPageCTA } from "@/components/home/MidPageCTA";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServiceAreasSection } from "@/components/home/ServiceAreasSection";
import { PlumbingInsights } from "@/components/home/PlumbingInsights";
import { CustomerProof } from "@/components/home/CustomerProof";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Global Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* Section 01: Hero with 3D Visual & Conversion Priority */}
        <HeroSection />

        {/* Section 02: Trust & Confidence Strip */}
        <TrustStrip />

        {/* Section 03: Plumbing Services Grid */}
        <ServicesSection />

        {/* Section 04: Interactive Plumbing Problem Selector */}
        <PlumbingProblems />

        {/* Section 05: Why Choose Spectrum Plumbing Irvine */}
        <WhyChooseUs />

        {/* Section 06: Premium Mid-Page Call CTA */}
        <MidPageCTA />

        {/* Section 07: 3-Step Service Process */}
        <ProcessSection />

        {/* Section 08: Irvine Neighborhood Coverage */}
        <ServiceAreasSection />

        {/* Section 09: Editorial Plumbing Insights for Homeowners */}
        <PlumbingInsights />

        {/* Section 10: Verified Case Studies & Honest Service Standards */}
        <CustomerProof />

        {/* Section 11: Accessible FAQ Accordion */}
        <FAQSection />

        {/* Section 12: Final High-Impact Conversion Section */}
        <FinalCTA />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mandatory Mobile Sticky Call Bar */}
      <MobileCallBar />
    </div>
  );
}
