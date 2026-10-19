import React from "react";
import { ServicePageData } from "@/types/service";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { ServiceHero } from "@/components/services/ServiceHero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceSymptoms } from "@/components/services/ServiceSymptoms";
import { ServiceTypes } from "@/components/services/ServiceTypes";
import { MidPageCTA } from "@/components/home/MidPageCTA";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServiceMethods } from "@/components/services/ServiceMethods";
import { ServicePricingFactors } from "@/components/services/ServicePricingFactors";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceLocalInsights } from "@/components/services/ServiceLocalInsights";
import { CustomerProof } from "@/components/home/CustomerProof";
import { RelatedServices } from "@/components/services/RelatedServices";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { generateServiceStructuredData } from "@/lib/structuredData";

interface ServicePageTemplateProps {
  service: ServicePageData;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const structuredData = generateServiceStructuredData(service);

  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Global Sticky Header */}
      <Header />

      {/* Main Content Sections with Natural Visual Rhythm */}
      <main id="main-content" className="flex-1">
        {/* Section 01: Dark Premium Service Hero */}
        <ServiceHero service={service} />

        {/* Section 02: Light Trust Strip */}
        <TrustStrip items={service.highlights} />

        {/* Section 03: White Detailed Service Overview */}
        <ServiceOverview service={service} />

        {/* Section 04: Soft-Blue Signs & Symptoms Grid */}
        <ServiceSymptoms service={service} />

        {/* Section 05: Problems & Service Applications Covered */}
        <ServiceTypes service={service} />

        {/* Section 06: Dark High-Impact Mid-Page Call CTA */}
        <MidPageCTA
          eyebrow={service.midPageCTA.eyebrow}
          heading={
            <>
              {service.midPageCTA.heading}{" "}
              {service.midPageCTA.highlightText && (
                <span className="gradient-text-electric">
                  {service.midPageCTA.highlightText}
                </span>
              )}
            </>
          }
          description={service.midPageCTA.description}
          ctaText={service.midPageCTA.ctaText}
          image={service.overview.image || service.hero.image}
          imageAlt={service.overview.imageAlt || service.hero.imageAlt}
          placement={`mid_page_${service.slug}`}
          bulletPoints={service.midPageCTA.bulletPoints}
        />

        {/* Section 07: Service Process Workflow */}
        <ProcessSection
          badge={service.process.badge}
          title={<>{service.process.heading}</>}
          subtitle={service.process.subtitle}
          steps={service.process.steps}
          placement={`process_${service.slug}`}
        />

        {/* Section 08: Service Methods & Technical Solutions */}
        <ServiceMethods service={service} />

        {/* Section 09: Honest Pricing Factors */}
        <ServicePricingFactors service={service} />

        {/* Section 10: Why Irvine Homeowners Choose Spectrum Plumbing Irvine */}
        <WhyChooseUs
          heading={service.whyChooseUs.heading}
          subtitle={service.whyChooseUs.subtitle}
          benefits={service.whyChooseUs.benefits}
          image={service.hero.image}
          imageAlt={service.hero.imageAlt}
          ctaPlacement={`why_choose_${service.slug}`}
        />

        {/* Section 11: Irvine-Specific Local Context & Village Insights */}
        <ServiceLocalInsights service={service} />

        {/* Section 12: Real Service Scenarios & Diagnostic Case Insights */}
        {service.scenarios && service.scenarios.length > 0 && (
          <CustomerProof
            badge="Verified Project Insights"
            title={<>{service.name} <span className="gradient-text-accent">Case Insights</span></>}
            subtitle="Realistic plumbing scenarios illustrating how Irvine residents diagnose and resolve issues through direct telephone assistance."
            scenarios={service.scenarios}
          />
        )}

        {/* Section 13: Related Plumbing Services */}
        <RelatedServices
          relatedSlugs={service.relatedServiceSlugs}
          currentServiceSlug={service.slug}
        />

        {/* Section 14: Service-Specific FAQ Accordion */}
        <FAQSection
          badge="Frequently Asked Questions"
          title={<>{service.name} <span className="gradient-text-accent">Questions &amp; Answers</span></>}
          subtitle={`Helpful answers to common questions about ${service.name.toLowerCase()} in Irvine homes and commercial properties.`}
          faqs={service.faqs}
          serviceName={service.name}
          sidebarTitle={`Questions About ${service.name}?`}
          sidebarText={`Call our Irvine line directly at (949) 539-8503 to discuss your ${service.name.toLowerCase()} questions with a knowledgeable professional.`}
        />

        {/* Section 15: Final High-Impact Conversion CTA */}
        <FinalCTA
          eyebrow={service.finalCTA.eyebrow}
          heading={
            <>
              {service.finalCTA.heading}{" "}
              {service.finalCTA.highlightText && (
                <span className="gradient-text-electric">
                  {service.finalCTA.highlightText}
                </span>
              )}
            </>
          }
          description={service.finalCTA.description}
          ctaText={service.finalCTA.ctaText}
          placement={`final_${service.slug}`}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mandatory Mobile Sticky Call Bar */}
      <MobileCallBar />
    </div>
  );
}
