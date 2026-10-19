export interface LocationTelemetryBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface LocationHighlight {
  icon: string;
  title: string;
  metric: string;
  description: string;
}

export interface LocationServiceOffering {
  slug: string;
  name: string;
  badge?: string;
  image: string;
  shortExplanation: string; // 50-90 words rich explanation
  commonSymptoms: string[];
  features?: string[];
  serviceLink: string;
  isFeatured?: boolean;
}

export interface LocationLocalConcern {
  title: string;
  description: string;
  causes: string;
  warningSigns: string[];
  consequences: string;
  whenToCall: string;
  relatedServiceSlug?: string;
  relatedServiceName?: string;
}

export interface LocationEmergencySituation {
  title: string;
  description: string;
  protocol: string;
  severity: "urgent" | "critical";
}

export interface LocationPricingFactor {
  title: string;
  description: string;
  impact: string;
}

export interface LocationWhyChooseBenefit {
  title: string;
  description: string;
  highlight: string;
}

export interface LocationScenario {
  village: string;
  title: string;
  scenario: string;
  resolution: string;
  keyTakeaway: string;
}

export interface LocationFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LocationPageData {
  slug: string;
  name: string;
  fullName: string;
  city: string;
  state: string;
  stateCode: string;
  zipCodes: string[];
  published: boolean;
  seo: {
    title: string;
    description: string;
    canonical: string;
    primaryKeyword: string;
    secondaryKeywords?: string[];
    ogImage?: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
    ctaText?: string;
    telemetryBadges?: LocationTelemetryBadge[];
  };
  highlights: LocationHighlight[];
  overview: {
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    residentialContext: {
      constructionEra: string;
      foundationType: string;
      pipeInfrastructure: string;
      waterCharacteristics: string;
      hoaGuidelines: string;
    };
    localHighlights: string[];
  };
  services: {
    heading: string;
    subtitle: string;
    items: LocationServiceOffering[];
  };
  problemExplorer: {
    heading: string;
    subtitle: string;
  };
  midPageCTA: {
    eyebrow?: string;
    heading: string;
    highlightText?: string;
    description: string;
    ctaText?: string;
    bulletPoints?: string[];
    image?: string;
    imageAlt?: string;
  };
  localConcerns: {
    heading: string;
    subtitle: string;
    items: LocationLocalConcern[];
  };
  process: {
    badge?: string;
    heading: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
      highlight: string;
    }>;
  };
  emergencyGuidance: {
    heading: string;
    subtitle: string;
    urgentSituations: LocationEmergencySituation[];
    shutoffInstructions: {
      locationDescription: string;
      steps: string[];
      gasWarning: string;
    };
  };
  pricingFactors: {
    heading: string;
    subtitle: string;
    factors: LocationPricingFactor[];
    pricingNote: string;
  };
  whyChooseUs: {
    heading: string;
    subtitle: string;
    benefits: LocationWhyChooseBenefit[];
  };
  coverage: {
    heading: string;
    description: string;
    subAreas: string[];
    landmarkBoundaries: string;
    zipCodesServed: string[];
  };
  scenarios?: LocationScenario[];
  nearbyLocationSlugs: string[];
  relatedArticleSlugs: string[];
  faqs: LocationFAQ[];
  finalCTA: {
    eyebrow?: string;
    heading: string;
    highlightText?: string;
    description: string;
    ctaText?: string;
  };
  enabledSections?: string[];
}
