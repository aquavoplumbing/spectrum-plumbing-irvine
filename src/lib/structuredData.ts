import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export function generateHomepageStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.domain}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.domain,
    description:
      "Local plumbing referral and information platform connecting Irvine homeowners with independent plumbing specialists.",
    telephone: BUSINESS_PHONE.raw,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Irvine, California",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE.raw,
      contactType: "customer service",
      areaServed: "US-CA",
      availableLanguage: "en",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_INFO.domain}/#website`,
    url: BUSINESS_INFO.domain,
    name: BUSINESS_INFO.name,
    description:
      "Plumbing information and phone referral service for Irvine, CA residents.",
    publisher: {
      "@id": `${BUSINESS_INFO.domain}/#organization`,
    },
    inLanguage: "en-US",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BUSINESS_INFO.canonicalUrl}#webpage`,
    url: BUSINESS_INFO.canonicalUrl,
    name: "Plumber in Irvine, CA | Spectrum Plumbing Irvine",
    isPartOf: {
      "@id": `${BUSINESS_INFO.domain}/#website`,
    },
    about: {
      "@id": `${BUSINESS_INFO.domain}/#organization`,
    },
    description:
      "Find professional plumbing help in Irvine, CA. Fast phone assistance for water heater repairs, drain cleaning, leak detection, and residential plumbing problems.",
    inLanguage: "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Plumbing Referral and Information Service",
    provider: {
      "@id": `${BUSINESS_INFO.domain}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Irvine",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Irvine Plumbing Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Plumbing Assistance",
            description: "Phone connection to plumbers handling urgent residential pipe bursts and blockages.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drain Cleaning Services",
            description: "Clearing clogged kitchen sinks, mainlines, and persistent bathroom drains.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Heater Repair & Replacement",
            description: "Diagnosis and maintenance for tank and tankless water heaters in Irvine homes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electronic Leak Detection",
            description: "Non-invasive acoustic locating for hidden wall, ceiling, and underground leaks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Slab Leak Diagnosis & Repair",
            description: "Specialized guidance for foundation moisture and below-slab copper piping repairs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewer Line Inspection & Repair",
            description: "Video camera pipeline diagnostics and sewer line rehabilitation options.",
          },
        },
      ],
    },
  };

  return [organizationSchema, websiteSchema, webPageSchema, serviceSchema];
}

import { ServicePageData } from "@/types/service";

export function generateServiceStructuredData(service: ServicePageData) {
  const serviceUrl = `${BUSINESS_INFO.domain}/services/${service.slug}/`;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BUSINESS_INFO.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BUSINESS_INFO.domain}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: serviceUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.name,
    serviceType: service.name,
    url: serviceUrl,
    description: service.seo.description,
    provider: {
      "@type": "Organization",
      "@id": `${BUSINESS_INFO.domain}/#organization`,
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.domain,
      telephone: BUSINESS_PHONE.raw,
    },
    areaServed: {
      "@type": "City",
      name: "Irvine",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Call (949) 539-8503 for telephone diagnostic triage and service pricing factors.",
      },
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${serviceUrl}#webpage`,
    url: serviceUrl,
    name: service.seo.title,
    description: service.seo.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BUSINESS_INFO.domain}/#website`,
      url: BUSINESS_INFO.domain,
      name: BUSINESS_INFO.name,
    },
    breadcrumb: {
      "@id": `${serviceUrl}#breadcrumbs`,
    },
    inLanguage: "en-US",
  };

  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return [breadcrumbsSchema, serviceSchema, webPageSchema, ...(faqSchema ? [faqSchema] : [])];
}

import { LocationPageData } from "@/types/location";

export function generateLocationStructuredData(location: LocationPageData) {
  const locationUrl = `${BUSINESS_INFO.domain}/service-areas/${location.slug}/`;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BUSINESS_INFO.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${BUSINESS_INFO.domain}/service-areas/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: locationUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${locationUrl}#service`,
    name: `Plumbing Services in ${location.name}, Irvine`,
    serviceType: "Plumbing Referral and Information Service",
    url: locationUrl,
    description: location.seo.description,
    provider: {
      "@type": "Organization",
      "@id": `${BUSINESS_INFO.domain}/#organization`,
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.domain,
      telephone: BUSINESS_PHONE.raw,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${location.name}, Irvine, CA`,
      containedInPlace: {
        "@type": "City",
        name: "Irvine",
        containedInPlace: {
          "@type": "State",
          name: "California",
        },
      },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Call (949) 539-8503 for telephone diagnostic triage and plumbing service factors.",
      },
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${locationUrl}#webpage`,
    url: locationUrl,
    name: location.seo.title,
    description: location.seo.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BUSINESS_INFO.domain}/#website`,
      url: BUSINESS_INFO.domain,
      name: BUSINESS_INFO.name,
    },
    breadcrumb: {
      "@id": `${locationUrl}#breadcrumbs`,
    },
    inLanguage: "en-US",
  };

  const faqSchema =
    location.faqs && location.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return [breadcrumbsSchema, serviceSchema, webPageSchema, ...(faqSchema ? [faqSchema] : [])];
}

import { BlogPost } from "@/types/blog";

export function generateBlogPostStructuredData(post: BlogPost) {
  const postUrl = `${BUSINESS_INFO.domain}/blog/${post.slug}/`;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BUSINESS_INFO.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BUSINESS_INFO.domain}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    image: [
      post.featuredImage.src.startsWith("http")
        ? post.featuredImage.src
        : `${BUSINESS_INFO.domain}${post.featuredImage.src}`,
    ],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: `${BUSINESS_INFO.domain}${post.author.profileUrl || "/editorial-standards/"}`,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.domain,
      logo: {
        "@type": "ImageObject",
        url: `${BUSINESS_INFO.domain}/images/hero-pipes-3d.jpg`,
      },
    },
    articleSection: post.category,
    inLanguage: "en-US",
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return [breadcrumbsSchema, blogPostingSchema, ...(faqSchema ? [faqSchema] : [])];
}



