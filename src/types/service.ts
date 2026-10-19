export interface ServiceTelemetryBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ServiceHighlight {
  icon: string;
  title: string;
  metric: string;
  description: string;
}

export interface ServiceSymptom {
  icon: string;
  title: string;
  description: string;
  severity?: "low" | "medium" | "high" | "urgent";
}

export interface ServiceTypeItem {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ServiceMethodItem {
  title: string;
  description: string;
  consideration?: string;
}

export interface ServicePricingFactor {
  title: string;
  description: string;
  impact: string;
}

export interface ServiceWhyChooseBenefit {
  title: string;
  description: string;
  highlight: string;
}

export interface ServiceScenario {
  village: string;
  title: string;
  scenario: string;
  resolution: string;
  keyTakeaway: string;
}

export interface ServiceFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  name: string;
  primaryKeyword: string;
  badge: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
    keywords?: string[];
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
    ctaText?: string;
    telemetryBadges?: ServiceTelemetryBadge[];
  };
  highlights: ServiceHighlight[];
  overview: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    bulletPoints?: string[];
    secondaryHeading?: string;
    secondaryParagraphs?: string[];
  };
  symptoms: {
    heading: string;
    subtitle: string;
    items: ServiceSymptom[];
  };
  serviceTypes: {
    heading: string;
    subtitle: string;
    items: ServiceTypeItem[];
  };
  midPageCTA: {
    eyebrow?: string;
    heading: string;
    highlightText?: string;
    description: string;
    ctaText?: string;
    bulletPoints?: string[];
  };
  process: {
    badge?: string;
    heading: string;
    subtitle: string;
    steps: ServiceProcessStep[];
  };
  methods: {
    heading: string;
    subtitle: string;
    items: ServiceMethodItem[];
    safetyNotice?: string;
  };
  pricingFactors: {
    heading: string;
    subtitle: string;
    factors: ServicePricingFactor[];
    pricingNote: string;
  };
  whyChooseUs: {
    heading: string;
    subtitle?: string;
    benefits: ServiceWhyChooseBenefit[];
  };
  localInsights: {
    heading: string;
    subtitle?: string;
    paragraphs: string[];
    villages: string[];
    practicalTip?: string;
  };
  scenarios?: ServiceScenario[];
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
  finalCTA: {
    eyebrow?: string;
    heading: string;
    highlightText?: string;
    description: string;
    ctaText?: string;
  };
  enabledSections?: string[];
}
