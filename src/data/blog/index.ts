import { BlogPost, BlogPostMetadata } from "@/types/blog";
import { signsOfASlabLeakPost } from "./signs-of-a-slab-leak";
import { BUSINESS_INFO } from "@/config/business";

// Additional high-intent educational articles for the blog index and related cards
export const whyDrainsKeepCloggingPost: BlogPost = {
  slug: "why-drains-keep-clogging",
  title: "Why Does My Drain Keep Clogging? Common Causes & Permanent Solutions",
  description:
    "Discover why household drains keep clogging repeatedly in Orange County homes. Learn the difference between branch clogs, main sewer line obstructions, hydro jetting, and root intrusion.",
  category: "Drainage Systems",
  primaryKeyword: "why drain keeps clogging",
  secondaryKeywords: [
    "recurring clogged sink irvine",
    "drain cleaning vs hydro jetting",
    "main sewer line clog signs",
    "chronic drain blockage irvine ca",
  ],
  publishedAt: "2026-10-12T09:00:00Z",
  updatedAt: "2026-10-18T14:20:00Z",
  author: {
    name: "Spectrum Editorial Trade Team",
    role: "Senior Plumbing Content & Technical Research Group",
    bio: "Our technical editorial team consults licensed California plumbing contractors, municipal utility reports, and standard code manuals to publish accurate, transparent diagnostic guides for Orange County property owners.",
    profileUrl: "/editorial-standards/",
    avatar: "/images/hero-pipes-3d.jpg",
  },
  reviewer: {
    name: "Independent Trade Review Board",
    credentials: "Reviewed against Uniform Plumbing Code (UPC) and Irvine Municipal Drainage Codes",
    reviewedAt: "2026-10-18",
  },
  featuredImage: {
    src: "/images/drain-cleaning-equipment.jpg",
    alt: "Commercial drain cleaning snaking machine and camera diagnostic monitor ready for sewer line inspection",
    caption:
      "Recurring drain blockages often indicate deeper sewer line root intrusion or heavy grease accumulation requiring video camera inspection.",
    width: 1200,
    height: 675,
  },
  readingTime: 9,
  quickAnswer: {
    heading: "Quick Drainage Answer",
    text: "A drain that clogs repeatedly usually indicates one of three problems: (1) stubborn organic grease, hair, and soap scum buildup clinging to pipe walls that basic plungers cannot scrub away, (2) a damaged, bowed, or bellied branch drain pipe under the floor, or (3) an obstruction deeper in your main building sewer line caused by tree root intrusion or municipal pipe settlement.",
    highlight:
      "If multiple plumbing fixtures in your house gurgle or back up simultaneously, stop using water immediately—this indicates a main sewer line blockage rather than a simple sink trap issue.",
  },
  relatedServiceSlugs: [
    "drain-cleaning-irvine-ca",
    "hydro-jetting-irvine-ca",
    "sewer-line-repair-irvine-ca",
    "emergency-plumbing-irvine-ca",
  ],
  relatedArticleSlugs: [
    "signs-of-a-slab-leak",
    "water-heater-not-heating",
    "irvine-hard-water-plumbing",
  ],
  references: [
    {
      title: "Protecting Your Home Drainage & Preventing Sewer Backups",
      publisher: "Irvine Ranch Water District (IRWD)",
      url: "https://www.irwd.com/services/sewer-service",
      accessDate: "October 2026",
    },
    {
      title: "Chemical Drain Cleaners: Pipe Corrosion & Septic Hazards",
      publisher: "Plumbing-Heating-Cooling Contractors Association (PHCC)",
      url: "https://www.phccweb.org",
      accessDate: "October 2026",
    },
  ],
  seo: {
    title: "Why Does My Drain Keep Clogging? Causes & Solutions | Spectrum Plumbing",
    description:
      "Learn why drains clog repeatedly in Irvine homes. Explore branch line vs main sewer blockages, root intrusion, chemical cleaner hazards, and hydro jetting.",
    canonical: `${BUSINESS_INFO.domain}/blog/why-drains-keep-clogging/`,
    ogImage: "/images/drain-cleaning-equipment.jpg",
  },
  published: true,
  sections: [
    {
      id: "branch-vs-mainline-clogs",
      title: "Branch Line vs. Main Sewer Line: Diagnosing the Blockage Depth",
      badge: "Diagnostic Classification",
      paragraphs: [
        "Before attempting any drain clearance, homeowners must determine whether the problem is isolated to a single plumbing fixture (a branch drain) or affects the shared drainage backbone of the home (the main building drain or building sewer).",
        "If only your master bathroom sink drains slowly, the obstruction is almost certainly located in the immediate P-trap or vertical tailpiece beneath the basin. However, if running the washing machine causes wastewater to bubble up into the ground-floor shower pan, the blockage is downstream in the primary 3-inch or 4-inch sewer line.",
      ],
      callout: {
        type: "safety",
        title: "Danger of Caustic Chemical Drain Openers",
        content:
          "Liquid drain cleaners containing sodium hydroxide (lye) or sulfuric acid generate intense exothermic heat that can soften plastic PVC/ABS trap assemblies, dissolve older brass slip-nuts, and splash caustic acid onto technicians performing mechanical snaking.",
      },
    },
    {
      id: "root-intrusion-and-grease",
      title: "The Major Causes of Chronic Drain Failures in Irvine",
      badge: "Common Causes",
      paragraphs: [
        "In master-planned communities like Irvine, mature street trees (including ficus, eucalyptus, and sycamores) planted during the 1970s and 1980s have roots that vigorously seek moisture through vitrified clay or cast iron sewer joints.",
        "Additionally, cooking grease poured down kitchen disposals adheres to the cooler underground pipe walls, forming a waxy, sticky mass that catches food particles and paper until water flow is completely halted.",
      ],
    },
  ],
  faqs: [
    {
      id: "faq-hydro-jetting-vs-snaking",
      question: "What is the difference between drain snaking and hydro jetting?",
      answer:
        "A motorized mechanical snake uses a steel cable to punch a hole through a localized blockage to restore emergency drainage. Hydro jetting uses ultra-high pressure water (3,500 to 4,000 PSI) with specialized rotating nozzles to scrub the entire interior circumference of the pipe clean of grease, scale, and root hairs.",
    },
    {
      id: "faq-gurgling-toilet",
      question: "Why does my toilet bubble when the shower is running?",
      answer:
        "Gurgling sounds indicate trapped sewer air under vacuum pressure. When water drains down a line blocked further downstream, air is displaced and forced backward up through adjacent fixture water traps, creating bubbling sounds and sewer odors.",
    },
  ],
  conclusion: {
    heading: "Restoring Free-Flowing Drainage Reliably",
    paragraphs: [
      "Plunging a recurring clog only provides temporary relief if grease or tree roots remain inside the pipe. High-definition sewer camera diagnostics eliminate guesswork.",
    ],
    keyTakeaway:
      "If you are dealing with chronic slow drains or simultaneous backups in multiple rooms, contact our Irvine line directly to discuss drain cleaning and camera inspection options.",
  },
};

export const waterHeaterNotHeatingPost: BlogPost = {
  slug: "water-heater-not-heating",
  title: "Water Heater Not Heating? Troubleshooting Tank & Tankless Systems",
  description:
    "Practical troubleshooting guide for Irvine homeowners experiencing lukewarm or no hot water. Diagnostic steps for pilot lights, thermostats, heating elements, and sediment.",
  category: "Water Heating",
  primaryKeyword: "water heater not heating",
  secondaryKeywords: [
    "hot water heater not working irvine",
    "tankless water heater error codes",
    "gas pilot light went out",
    "water heater repair irvine ca",
  ],
  publishedAt: "2026-10-08T11:00:00Z",
  updatedAt: "2026-10-17T16:00:00Z",
  author: {
    name: "Spectrum Editorial Trade Team",
    role: "Senior Plumbing Content & Technical Research Group",
    bio: "Our technical editorial team consults licensed California plumbing contractors, municipal utility reports, and standard code manuals to publish accurate, transparent diagnostic guides for Orange County property owners.",
    profileUrl: "/editorial-standards/",
    avatar: "/images/hero-pipes-3d.jpg",
  },
  reviewer: {
    name: "Independent Trade Review Board",
    credentials: "Reviewed against California Energy Code (Title 24, Part 6) & Gas Appliance Standards",
    reviewedAt: "2026-10-17",
  },
  featuredImage: {
    src: "/images/water-heater-diagnostic.jpg",
    alt: "Plumbing technician inspecting burner assembly and gas control valve on a residential water heater",
    caption:
      "Water heater failure can stem from thermocouple fatigue, sediment buildup on burner bases, or scale fouling inside tankless heat exchangers.",
    width: 1200,
    height: 675,
  },
  readingTime: 8,
  quickAnswer: {
    heading: "Quick Hot Water Diagnostic",
    text: "If your water heater is not heating: For gas units, check if the pilot light has extinguished or if the thermocouple needs replacement. For electric units, verify that the double-pole circuit breaker has not tripped and check the high-limit reset button behind the upper access panel. For tankless units, check the digital control panel for specific diagnostic error codes and ensure the gas supply valve is fully open.",
    highlight:
      "If you smell rotten eggs or natural gas near your water heater, do NOT attempt to light the pilot or touch electrical switches. Evacuate the home and call the Southern California Gas Company (SoCalGas) and emergency services immediately.",
  },
  relatedServiceSlugs: [
    "water-heater-repair-irvine-ca",
    "tankless-water-heaters-irvine-ca",
    "gas-line-services-irvine-ca",
    "emergency-plumbing-irvine-ca",
  ],
  relatedArticleSlugs: [
    "signs-of-a-slab-leak",
    "why-drains-keep-clogging",
    "irvine-hard-water-plumbing",
  ],
  references: [
    {
      title: "Water Heating Energy Efficiency & Safety Guidelines",
      publisher: "U.S. Department of Energy (DOE)",
      url: "https://www.energy.gov/energysaver/water-heating",
      accessDate: "October 2026",
    },
    {
      title: "Natural Gas Appliance Safety & Emergency Procedures",
      publisher: "Southern California Gas Company (SoCalGas)",
      url: "https://www.socalgas.com/stay-safe",
      accessDate: "October 2026",
    },
  ],
  seo: {
    title: "Water Heater Not Heating? Troubleshooting Guide | Spectrum Plumbing",
    description:
      "Step-by-step diagnostic guide for gas, electric, and tankless water heaters in Irvine, CA. Learn about pilot lights, thermocouples, sediment, and when to call.",
    canonical: `${BUSINESS_INFO.domain}/blog/water-heater-not-heating/`,
    ogImage: "/images/water-heater-diagnostic.jpg",
  },
  published: true,
  sections: [
    {
      id: "gas-vs-electric-troubleshooting",
      title: "Gas vs. Electric Water Heater Diagnostic Fundamentals",
      badge: "System Diagnostics",
      paragraphs: [
        "Determining whether your water heating system is natural gas-fired or all-electric is the essential starting point for safe troubleshooting.",
        "In Orange County, approximately 85% of single-family residences utilize natural gas storage tanks or tankless units. Common failure points include thermocouple degradation, electronic spark igniters, closed gas shutoff valves, or heavy mineral scale accumulation insulating the tank floor.",
      ],
      callout: {
        type: "safety",
        title: "Natural Gas Odor Safety Protocol",
        content:
          "Mercaptan is added to natural gas to give it a distinctive rotten egg odor. If this smell is detected near your garage or utility closet water heater, avoid using matches, lighters, or light switches. Leave the home immediately and call SoCalGas or 911.",
      },
    },
  ],
  faqs: [
    {
      id: "faq-water-heater-lifespan",
      question: "What is the expected lifespan of a water heater in Irvine?",
      answer:
        "Due to moderate-to-high water hardness in Orange County, conventional tank water heaters typically last between 8 and 12 years. Tankless water heaters with proper annual descaling flushes can operate reliably for 18 to 22 years.",
    },
  ],
  conclusion: {
    heading: "Getting Your Hot Water Restored Quickly",
    paragraphs: [
      "Living without hot water is disruptive for any family. Many simple pilot issues can be safely reset, while electronic gas control valves or aging tanks require professional trade intervention.",
    ],
    keyTakeaway:
      "Call our Irvine phone line directly to discuss your water heater symptoms and schedule convenient local service.",
  },
};

export const irvineHardWaterPost: BlogPost = {
  slug: "irvine-hard-water-plumbing",
  title: "Managing Mineral Hardness & Water Pressure in Irvine Homes",
  description:
    "Understand how Irvine Ranch Water District (IRWD) mineral hardness and municipal supply pressure impact home plumbing, tankless water heaters, and fixture longevity.",
  category: "Water Quality",
  primaryKeyword: "irvine hard water plumbing",
  secondaryKeywords: [
    "irwd water hardness",
    "pressure reducing valve irvine",
    "water softener Irvine CA",
    "protecting tankless water heater scale",
  ],
  publishedAt: "2026-10-05T10:00:00Z",
  updatedAt: "2026-10-16T12:00:00Z",
  author: {
    name: "Spectrum Editorial Trade Team",
    role: "Senior Plumbing Content & Technical Research Group",
    bio: "Our technical editorial team consults licensed California plumbing contractors, municipal utility reports, and standard code manuals to publish accurate, transparent diagnostic guides for Orange County property owners.",
    profileUrl: "/editorial-standards/",
    avatar: "/images/hero-pipes-3d.jpg",
  },
  reviewer: {
    name: "Independent Trade Review Board",
    credentials: "Reviewed against IRWD Annual Water Quality Reports & Copper Development Association Standards",
    reviewedAt: "2026-10-16",
  },
  featuredImage: {
    src: "/images/copper-pipe-repair.jpg",
    alt: "Plumber inspecting mineral scale accumulation and copper pipe joints under residential water pressure",
    caption:
      "Irvine municipal water contains natural calcium and magnesium that precipitates out under high heat, coating water heater elements and fixture aerators.",
    width: 1200,
    height: 675,
  },
  readingTime: 7,
  quickAnswer: {
    heading: "Quick Water Quality Summary",
    text: "Potable water in Irvine supplied by the Irvine Ranch Water District (IRWD) is moderately to very hard, averaging 8 to 18 grains per gallon (140 to 310 mg/L) of dissolved calcium and magnesium. When combined with street water pressures exceeding 75–80 PSI, this mineral content accelerates valve wear, fouls tankless heat exchangers, and contributes to internal copper pipe turbulence.",
    highlight:
      "Testing your household water pressure and ensuring your Pressure-Reducing Valve (PRV) is regulated between 55 and 65 PSI is the single most cost-effective measure to protect your home's plumbing infrastructure.",
  },
  relatedServiceSlugs: [
    "tankless-water-heaters-irvine-ca",
    "water-line-repair-irvine-ca",
    "pipe-repair-and-repiping-irvine-ca",
    "leak-detection-irvine-ca",
  ],
  relatedArticleSlugs: [
    "signs-of-a-slab-leak",
    "water-heater-not-heating",
    "why-drains-keep-clogging",
  ],
  references: [
    {
      title: "Annual Water Quality Report (Consumer Confidence Report)",
      publisher: "Irvine Ranch Water District (IRWD)",
      url: "https://www.irwd.com/water-report",
      accessDate: "October 2026",
    },
    {
      title: "Household Water Pressure & Pressure-Reducing Valves",
      publisher: "International Association of Plumbing and Mechanical Officials (IAPMO)",
      url: "https://www.iapmo.org",
      accessDate: "October 2026",
    },
  ],
  seo: {
    title: "Managing Hard Water & Pressure in Irvine Homes | Spectrum Plumbing",
    description:
      "Guide to Irvine water hardness, IRWD water sources, pressure-reducing valves (PRVs), and protecting water heaters and plumbing fixtures from scale.",
    canonical: `${BUSINESS_INFO.domain}/blog/irvine-hard-water-plumbing/`,
    ogImage: "/images/copper-pipe-repair.jpg",
  },
  published: true,
  sections: [
    {
      id: "irwd-sources-hardness",
      title: "Where Irvine Gets Its Water & Why It Is Naturally Hard",
      badge: "Local Water Chemistry",
      paragraphs: [
        "Irvine Ranch Water District (IRWD) delivers clean, thoroughly tested drinking water drawn from two primary sources: deep groundwater wells drilled into the local Orange County groundwater basin, and imported surface water delivered through the Colorado River Aqueduct and California State Water Project.",
        "As rainwater percolates through mineral-rich mountain soils and rock strata before reaching aquifers, it dissolves significant amounts of calcium and magnesium carbonate. While completely safe to drink, these minerals precipitate out when heated above 130°F, creating a chalky white rock scale inside tankless heat exchangers, dishwasher heating coils, and showerhead nozzles.",
      ],
      callout: {
        type: "tip",
        title: "Annual Tankless Water Heater Descaling Flush",
        content:
          "Because tankless water heaters pass water over ultra-compact heat exchanger fins, scale deposits act as an insulating blanket, causing the unit to work harder and trigger error code 11 or 12. Performing an annual recirculating white vinegar flush preserves your warranty and fuel efficiency.",
      },
    },
  ],
  faqs: [
    {
      id: "faq-prv-lifespan",
      question: "How long does a pressure-reducing valve (PRV) last in Irvine?",
      answer:
        "In Southern California homes, a pressure-reducing valve typically lasts 5 to 8 years. As the internal rubber diaphragm and spring degrade from constant municipal water pressure, household pressure can creep above 80–90 PSI, stressing supply lines, appliance hoses, and toilet fill valves.",
    },
  ],
  conclusion: {
    heading: "Proactive Protection for Your Plumbing System",
    paragraphs: [
      "Balancing household water pressure and addressing mineral hardness will extend the working lifespan of appliances and copper piping by decades.",
    ],
    keyTakeaway:
      "Call (949) 539-8503 to discuss whole-home water pressure testing, PRV replacements, and water conditioning options for your Irvine property.",
  },
};

export const ALL_BLOG_POSTS: BlogPost[] = [
  signsOfASlabLeakPost,
  whyDrainsKeepCloggingPost,
  waterHeaterNotHeatingPost,
  irvineHardWaterPost,
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = ALL_BLOG_POSTS.reduce(
  (acc, post) => {
    acc[post.slug] = post;
    return acc;
  },
  {} as Record<string, BlogPost>
);

export function getAllBlogPosts(): BlogPost[] {
  return ALL_BLOG_POSTS.filter((p) => p.published);
}

export function getAllBlogPostSlugs(): string[] {
  return ALL_BLOG_POSTS.filter((p) => p.published).map((p) => p.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS_BY_SLUG[slug];
}

export function getRelatedBlogPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map((slug) => BLOG_POSTS_BY_SLUG[slug])
    .filter((p): p is BlogPost => Boolean(p && p.published));
}

export function getBlogCategories(): string[] {
  const categories = new Set(ALL_BLOG_POSTS.map((p) => p.category));
  return Array.from(categories);
}
