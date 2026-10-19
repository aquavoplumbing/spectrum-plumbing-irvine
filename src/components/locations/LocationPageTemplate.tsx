import React from "react";
import { LocationPageData } from "@/types/location";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { LocationHero } from "@/components/locations/LocationHero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { NeighborhoodOverview } from "@/components/locations/NeighborhoodOverview";
import { LocalServiceGrid } from "@/components/locations/LocalServiceGrid";
import { PlumbingProblems } from "@/components/home/PlumbingProblems";
import { MidPageCTA } from "@/components/home/MidPageCTA";
import { LocalPlumbingConcerns } from "@/components/locations/LocalPlumbingConcerns";
import { ProcessSection } from "@/components/home/ProcessSection";
import { LocalEmergencyGuidance } from "@/components/locations/LocalEmergencyGuidance";
import { LocalPricingFactors } from "@/components/locations/LocalPricingFactors";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { LocalCoverageMap } from "@/components/locations/LocalCoverageMap";
import { CustomerProof } from "@/components/home/CustomerProof";
import { LocalRelatedServices } from "@/components/locations/LocalRelatedServices";
import { LocalNearbyAreas } from "@/components/locations/LocalNearbyAreas";
import { PlumbingInsights } from "@/components/home/PlumbingInsights";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { generateLocationStructuredData } from "@/lib/structuredData";

interface LocationPageTemplateProps {
  location: LocationPageData;
}

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const structuredData = generateLocationStructuredData(location);

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
        {/* Section 01: Dark Premium Hyperlocal Hero */}
        <LocationHero location={location} />

        {/* Section 02: Light Trust Strip */}
        <TrustStrip items={location.highlights} />

        {/* Section 03: White Detailed Neighborhood Overview */}
        <NeighborhoodOverview location={location} />

        {/* Section 04: Soft-Blue Standalone Complete Plumbing Services Grid */}
        <LocalServiceGrid location={location} />

        {/* Section 05: Dark Interactive Plumbing Problem Explorer */}
        <PlumbingProblems
          badge="Interactive 3D Diagnostic Center"
          title={<>{location.problemExplorer.heading}</>}
          subtitle={location.problemExplorer.subtitle}
          locationName={location.name}
        />

        {/* Section 06: Dark High-Impact Mid-Page Call CTA */}
        <MidPageCTA
          eyebrow={location.midPageCTA.eyebrow}
          heading={
            <>
              {location.midPageCTA.heading}{" "}
              {location.midPageCTA.highlightText && (
                <span className="gradient-text-electric">
                  {location.midPageCTA.highlightText}
                </span>
              )}
            </>
          }
          description={location.midPageCTA.description}
          ctaText={location.midPageCTA.ctaText}
          image={location.midPageCTA.image || location.hero.image}
          imageAlt={location.midPageCTA.imageAlt || location.hero.imageAlt}
          placement={`mid_page_${location.slug}`}
          bulletPoints={location.midPageCTA.bulletPoints}
        />

        {/* Section 07: Common Local Plumbing Concerns (Educational Cards) */}
        <LocalPlumbingConcerns location={location} />

        {/* Section 08: How Plumbing Assistance Works (Phone Process) */}
        <ProcessSection
          badge={location.process.badge}
          title={<>{location.process.heading}</>}
          subtitle={location.process.subtitle}
          steps={location.process.steps}
          placement={`process_${location.slug}`}
        />

        {/* Section 09: Dark Emergency Plumbing & Safety Guidance */}
        <LocalEmergencyGuidance location={location} />

        {/* Section 10: Plumbing Cost & Pricing Factors */}
        <LocalPricingFactors location={location} />

        {/* Section 11: Why Choose Spectrum in Woodbridge */}
        <WhyChooseUs
          heading={location.whyChooseUs.heading}
          subtitle={location.whyChooseUs.subtitle}
          benefits={location.whyChooseUs.benefits}
          image={location.overview.image || location.hero.image}
          imageAlt={location.overview.imageAlt || location.hero.imageAlt}
          ctaPlacement={`why_choose_${location.slug}`}
        />

        {/* Section 12: Local Map & Geographic Coverage */}
        <LocalCoverageMap location={location} />

        {/* Section 13: Real Service Scenarios & Customer Proof */}
        {location.scenarios && location.scenarios.length > 0 && (
          <CustomerProof
            badge="Verified Local Scenarios"
            title={<>{location.name} <span className="gradient-text-accent">Project &amp; Diagnostic Insights</span></>}
            subtitle={`Realistic plumbing diagnostic cases illustrating how ${location.name} property owners resolve issues through direct phone assistance.`}
            scenarios={location.scenarios}
          />
        )}

        {/* Section 14: Related Plumbing Services */}
        <LocalRelatedServices locationName={location.name} />

        {/* Section 15: Nearby Irvine Neighborhoods */}
        <LocalNearbyAreas
          currentSlug={location.slug}
          locationName={location.name}
          nearbySlugs={location.nearbyLocationSlugs}
        />

        {/* Section 16: Helpful Local Educational Plumbing Articles */}
        <PlumbingInsights
          badge="Educational Resource"
          title={<>Helpful Plumbing Guides for <span className="gradient-text-accent">{location.name} Homeowners</span></>}
          subtitle={`Understanding your ${location.name} property's plumbing infrastructure helps you spot warning signs early, protect your foundation, and make informed choices.`}
          articleSlugs={location.relatedArticleSlugs}
        />

        {/* Section 17: Location-Specific FAQ Accordion */}
        <FAQSection
          badge="Woodbridge Questions & Answers"
          title={<>{location.name} Plumbing <span className="gradient-text-accent">Questions &amp; Answers</span></>}
          subtitle={`Straightforward answers to common questions about plumbing repairs, slab leaks, water shutoffs, and technician availability in ${location.name}, Irvine.`}
          faqs={location.faqs}
          serviceName={`${location.name} Plumbing`}
          sidebarTitle={`Questions About ${location.name} Plumbing?`}
          sidebarText={`Call our Irvine line directly at (949) 539-8503 to discuss your ${location.name} home's symptoms with a knowledgeable professional.`}
        />

        {/* Section 18: Final High-Impact Conversion CTA */}
        <FinalCTA
          eyebrow={location.finalCTA.eyebrow}
          heading={
            <>
              {location.finalCTA.heading}{" "}
              {location.finalCTA.highlightText && (
                <span className="gradient-text-electric">
                  {location.finalCTA.highlightText}
                </span>
              )}
            </>
          }
          description={location.finalCTA.description}
          ctaText={location.finalCTA.ctaText}
          placement={`final_${location.slug}`}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mandatory Mobile Sticky Call Bar */}
      <MobileCallBar />
    </div>
  );
}
