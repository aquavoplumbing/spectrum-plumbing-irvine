import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const quailHillLocationData: LocationPageData = {
  slug: "quail-hill",
  name: "Quail Hill",
  fullName: "Quail Hill, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92603"],
  published: true,

  seo: {
    title: "Plumbing Services in Quail Hill, Irvine | Spectrum Plumbing",
    description:
      "Trusted plumbing services in Quail Hill, Irvine. Water pressure regulator replacement, water heater repair, slab leak detection, and drain cleaning. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/quail-hill/`,
    primaryKeyword: "plumber Quail Hill Irvine",
    secondaryKeywords: [
      "plumbing services Quail Hill Irvine CA",
      "water pressure regulator Quail Hill",
      "water heater repair Quail Hill 92603",
      "slab leak detection Quail Hill",
      "emergency plumber Quail Hill",
    ],
    ogImage: "/images/water-line-main-repair.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN QUAIL HILL, IRVINE",
    heading: "Plumbing Services in Quail Hill, Irvine, CA",
    description:
      "Looking for dependable plumbing assistance in Quail Hill? Discover expert help for water pressure regulators, water heater repairs, slab leak detection, and drain cleaning. Call our Irvine team directly at (949) 539-8503 for fast telephone triage.",
    image: "/images/water-line-main-repair.jpg",
    imageAlt: "Plumbing pressure regulation and water line repair in Quail Hill, Irvine",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Quail Hill Focus",
        subtitle: "ZIP Code 92603",
      },
      {
        icon: "Gauge",
        title: "Pressure Management",
        subtitle: "PRV Valve Testing & Service",
      },
      {
        icon: "PhoneCall",
        title: "Direct Phone Line",
        subtitle: "Immediate Telephone Triage",
      },
    ],
  },

  highlights: [
    {
      icon: "MapPin",
      title: "Quail Hill Specialists",
      metric: "ZIP 92603",
      description:
        "Tailored plumbing services for Tuscan-inspired single-family homes, townhomes, and courtyard residences in Quail Hill.",
    },
    {
      icon: "Gauge",
      title: "Pressure Regulator Replacement",
      metric: "65–75 PSI Safe Target",
      description:
        "Protecting household plumbing and appliances against excessive municipal water pressure caused by hillside elevation changes.",
    },
    {
      icon: "Activity",
      title: "Slab Leak Pinpointing",
      metric: "Acoustic Locating",
      description:
        "Non-destructive electronic acoustic and infrared locating for copper water line pinholes beneath slab foundations.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Connection",
      metric: "No Online Forms",
      description:
        "Call directly to speak with an experienced specialist who understands Quail Hill's plumbing infrastructure.",
    },
  ],

  overview: {
    heading: "Dedicated Plumbing Care for Quail Hill Homeowners",
    paragraphs: [
      "Quail Hill is an award-winning master-planned community situated in south Irvine, set against the rolling hills of the Laguna Coast Wilderness Park and Shady Canyon. Built in the early to mid-2000s, Quail Hill features charming Tuscan and Spanish-influenced architecture, extensive trail networks, and a mix of single-family residences and upscale attached townhomes.",
      "As Quail Hill homes reach 15 to 25 years of age, key plumbing components require preventative maintenance and scheduled replacement. The original Pressure Reducing Valves (PRVs) installed during construction have an expected service life of 10 to 15 years. When a PRV fails, high municipal water pressure from adjacent hillside water storage tanks surges into household lines, stressing toilet valves, water heater tanks, and appliance supply hoses.",
      "Additionally, water heaters in Quail Hill frequently suffer from mineral scaling caused by Irvine Ranch Water District's hard water (12–18 grains per gallon). Spectrum Plumbing Irvine connects Quail Hill homeowners directly with certified, independent plumbing contractors experienced in pressure regulation, tankless water heater flushing, and HOA-compliant repairs.",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Tuscan-inspired residential street and hillside landscaping in Quail Hill, Irvine",
    residentialContext: {
      constructionEra: "2001 – 2008 Tuscan-Inspired Master Plan",
      foundationType: "Post-Tensioned Concrete Slab Foundations",
      pipeInfrastructure: "Type L Copper Supply Lines & PEX-A with ABS Drainage Systems",
      waterCharacteristics: "IRWD Municipal Hard Water (12–16 GPG) with High Supply Pressures",
      hoaGuidelines: "Quail Hill Community Association Architectural Guidelines",
    },
    localHighlights: [
      "Pressure regulator testing, recalibration, and commercial-grade replacement",
      "Precision acoustic slab leak detection preserving stone and hardwood flooring",
      "Tank and tankless water heater maintenance, descaling, and replacements",
      "HOA-compliant plumbing repair protocols for attached townhomes and courtyard villas",
    ],
  },

  services: {
    heading: "Core Plumbing Services for Quail Hill Homes",
    subtitle: "Professional solutions for the most common plumbing needs across Quail Hill residences.",
    items: [
      {
        slug: "water-line-repair-irvine-ca",
        name: "Pressure Regulators (PRV Replacement)",
        badge: "Critical Quail Hill Service",
        image: "/images/water-line-main-repair.jpg",
        shortExplanation:
          "High municipal water pressure in Quail Hill causes leaking toilet valves, banging pipes, and appliance hose bursts. We install heavy-duty lead-free PRV valves to keep your home safely under 75 PSI.",
        commonSymptoms: [
          "Banging or vibrating pipes (water hammer) when taps close",
          "Constantly running or hissing toilet fill valves",
          "Rapid wear on faucet cartridges and shower diverters",
          "Exterior hose bib pressure reading over 80 PSI",
        ],
        serviceLink: "/services/water-line-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-heater-repair-irvine-ca",
        name: "Water Heater Repair & Replacement",
        badge: "Essential Service",
        image: "/images/water-heater-diagnostic.jpg",
        shortExplanation:
          "Service, flush, and replace aging 50-gallon conventional water heaters and high-efficiency tankless units. Ensure compliance with California Title 24 energy and seismic standards.",
        commonSymptoms: [
          "Rumbling, popping, or kettle sounds from the tank bottom",
          "Hot water running out prematurely during showers",
          "Water pooling around the base of the water heater in the garage",
          "Rusty or discolored water from hot water taps",
        ],
        serviceLink: "/services/water-heater-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "slab-leak-repair-irvine-ca",
        name: "Slab Leak Detection & Repair",
        image: "/images/slab-leak-inspection.jpg",
        shortExplanation:
          "Copper pipes running beneath Quail Hill foundation slabs can develop pinhole leaks over 15 to 20 years. Our network uses non-destructive acoustic sensors and thermal imaging to locate leaks accurately.",
        commonSymptoms: [
          "Warm spots on tile, laminate, or carpeted flooring",
          "Water meter flow dial spinning with all faucets closed",
          "Sound of running water behind downstairs baseboards",
          "Sudden unexplained spike on monthly IRWD water bill",
        ],
        serviceLink: "/services/slab-leak-repair-irvine-ca/",
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Drain Cleaning & Clog Removal",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Clear kitchen grease, soap scum, and bathroom hair clogs from branch lines and main building drains with motorized snaking and safe hydro jetting.",
        commonSymptoms: [
          "Slow drainage in master bathroom sinks and showers",
          "Garbage disposal backing up with foul drain odors",
          "Gurgling sounds in adjacent fixtures when water drains",
          "Standing water in shower pans",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "faucet-and-sink-repair-irvine-ca",
        name: "Fixture & Faucet Plumbing",
        image: "/images/kitchen-sink-repair.jpg",
        shortExplanation:
          "Repair leaking single-handle cartridges, pull-down kitchen faucets, Roman tub fillers, and running toilets in Quail Hill bathrooms.",
        commonSymptoms: [
          "Persistent faucet spout dripping or handle leaks",
          "Corrosion or mineral crusting around supply shutoffs",
          "Low flow from sink sprayers due to aerator calcification",
          "Toilet tanks failing to refill properly",
        ],
        serviceLink: "/services/faucet-and-sink-repair-irvine-ca/",
      },
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Response",
        badge: "24/7 Phone Triage",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "Active supply pipe ruptures, sewage backups, or failed water shutoffs require immediate response. Call our direct line to connect with an experienced local technician.",
        commonSymptoms: [
          "Water spraying from high-pressure flex lines",
          "Sewage backing up into ground-floor fixtures",
          "Active water pooling along baseboards",
          "Main water shutoff valve frozen or broken",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Symptoms in Quail Hill",
    subtitle:
      "Learn to spot the signs of failing pressure regulators, water heater fatigue, and under-slab leaks in Quail Hill homes.",
  },

  midPageCTA: {
    eyebrow: "DIRECT QUAIL HILL TELEPHONE ASSISTANCE",
    heading: "Need a Pressure Regulator or Water Heater Servicing?",
    highlightText: "Call Our Direct Irvine Plumbing Line.",
    description:
      "Avoid third-party web forms. Call our phone line directly to speak with an experienced specialist who understands Quail Hill's residential plumbing systems.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing professional",
      "Rapid dispatch for active water leaks",
      "Licensed and insured Orange County contractors",
      "Precision pressure testing and acoustic locating",
    ],
    image: "/images/water-line-main-repair.jpg",
    imageAlt: "Technician replacing pressure reducing valve in Quail Hill Irvine",
  },

  localConcerns: {
    heading: "Specific Plumbing Concerns in Quail Hill",
    subtitle: "How high municipal water pressure and local water hardness affect Quail Hill homes.",
    items: [
      {
        title: "15-Year Pressure Regulator Diaphragm Failure",
        description:
          "Homes in Quail Hill built in the early to mid-2000s have pressure reducing valves that are now reaching the end of their operational lifespan.",
        causes: "Rubber diaphragm stiffening and spring fatigue from continuous municipal pressure over 15+ years.",
        warningSigns: [
          "Loud banging pipes (water hammer) when taps close",
          "Toilet fill valves hissing continuously",
          "Water dripping from appliance supply lines and faucets",
        ],
        consequences:
          "Burst washing machine hoses causing catastrophic indoor flooding, ruptured water heaters, and damaged fixture cartridges.",
        whenToCall: "Whenever hose bib pressure tests above 75–80 PSI or pipes vibrate loudly.",
        relatedServiceSlug: "water-line-repair-irvine-ca",
        relatedServiceName: "PRV Valve Replacement",
      },
      {
        title: "Hard Water Sediment Accumulation in Water Heaters",
        description:
          "Irvine Ranch Water District water carries 12–16 grains of dissolved minerals per gallon, which settles as heavy calcium scale inside water heaters.",
        causes: "High mineral hardness baking into rock-hard scale inside water heaters.",
        warningSigns: [
          "Popping or rumbling noises from the water heater during heating cycles",
          "Hot water running out prematurely",
          "White chalky residue building up on showerheads and faucets",
        ],
        consequences:
          "Premature water heater failure, higher gas bills, and restricted water flow through fixture cartridges.",
        whenToCall: "If your water heater has not been flushed in the past 12 months.",
        relatedServiceSlug: "water-heater-repair-irvine-ca",
        relatedServiceName: "Water Heater Flush & Service",
      },
      {
        title: "Pinhole Slab Leaks in Copper Hot Water Lines",
        description:
          "Copper pipes installed beneath concrete slabs in Quail Hill homes can develop microscopic pinhole breaches as they reach 15 to 20 years of age.",
        causes: "A combination of soil mineral reactions, thermal cycling expansion, and continuous high water pressure.",
        warningSigns: [
          "Warm or damp spots on tile, wood, or carpeted floors",
          "The sound of running water when all household taps are off",
          "Water meter flow indicator continuously spinning",
        ],
        consequences:
          "Subsurface void formation beneath foundation slabs, mold under flooring, and high utility bills.",
        whenToCall: "Immediately when floor warmth or continuous meter dial movement is noticed.",
        relatedServiceSlug: "slab-leak-repair-irvine-ca",
        relatedServiceName: "Slab Leak Detection",
      },
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Serve Quail Hill Homeowners",
    subtitle: "A direct, phone-first service model designed for rapid response and honest, transparent pricing.",
    steps: [
      {
        step: "01",
        title: "Call Our Direct Line",
        description:
          "Dial (949) 539-8503 to connect immediately with a knowledgeable representative who understands Irvine plumbing.",
        highlight: "Zero waiting on hold",
      },
      {
        step: "02",
        title: "Symptom Triage & Shutoff Help",
        description:
          "We evaluate your issue, explain emergency shutoff steps if water is actively leaking, and schedule convenient dispatch.",
        highlight: "Immediate guidance",
      },
      {
        step: "03",
        title: "On-Site Diagnostic Assessment",
        description:
          "A licensed local plumbing specialist arrives with advanced diagnostic tools to test pressure, locate leaks, or inspect drains.",
        highlight: "Non-destructive testing",
      },
      {
        step: "04",
        title: "Clear, Upfront Repair Estimate",
        description:
          "You receive an upfront estimate with fixed pricing and warranty details before any repair work starts.",
        highlight: "No hidden costs",
      },
    ],
  },

  emergencyGuidance: {
    heading: "Emergency Plumbing Protocols for Quail Hill",
    subtitle: "Actionable steps to take immediately during a plumbing emergency in your Quail Hill residence.",
    urgentSituations: [
      {
        title: "Burst Washing Machine or Sink Flex Line",
        description: "High pressure can cause flexible supply hoses to rupture, releasing dozens of gallons per minute.",
        protocol: "Shut off the fixture angle stop under the sink, or immediately shut off the home's main water valve.",
        severity: "critical",
      },
      {
        title: "Active Under-Slab Copper Leak",
        description: "Water continuously flowing beneath your slab can erode soil and damage expensive flooring.",
        protocol: "If the leak is on the hot water line, turn off the cold water shutoff valve above the water heater.",
        severity: "critical",
      },
      {
        title: "Main Sewer Line Overflow in Townhome",
        description: "Backups in attached townhomes require immediate attention to prevent multi-unit damage.",
        protocol: "Stop all water use immediately and call our emergency line for rapid dispatch.",
        severity: "critical",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In Quail Hill homes, the main water shutoff valve is typically located in the garage near the water heater or outside near the front courtyard hose bib.",
      steps: [
        "Locate the main ball valve with a lever handle on the primary incoming copper water pipe.",
        "Turn the lever 90 degrees until it is perpendicular to the pipe to stop water flow.",
        "Open an exterior garden hose bib to drain remaining line pressure.",
        "Verify that faucets inside the house have completely stopped running.",
      ],
      gasWarning:
        "If you suspect a natural gas leak, evacuate immediately and call 911 / SoCalGas from outside.",
    },
  },

  pricingFactors: {
    heading: "Quail Hill Plumbing Pricing Factors",
    subtitle: "Transparent variables that shape residential plumbing repair costs in Quail Hill.",
    factors: [
      {
        title: "Type of Pressure Regulator Required",
        description:
          "Standard residential PRVs range from 3/4-inch to 1-inch sizes, while larger custom homes may require high-flow commercial-grade units.",
        impact: "Commercial-grade regulators provide longer lifespan and tighter pressure control.",
      },
      {
        title: "Leak Location & Repair Method",
        description:
          "Slab leaks can be repaired via direct spot repair under the floor or an overhead PEX reroute through interior walls and ceilings.",
        impact: "Overhead reroutes protect expensive hardwood and tile flooring from demolition.",
      },
      {
        title: "HOA Guidelines & Permitting",
        description:
          "Attached townhome communities in Quail Hill may require specialized access protocols, acoustic dampening, or City of Irvine permits.",
        impact: "Ensures compliance with community association rules and local building codes.",
      },
    ],
    pricingNote:
      "All technicians provide written estimates with clear pricing before commencing any repair work.",
  },

  whyChooseUs: {
    heading: "Why Quail Hill Residents Choose Spectrum Plumbing",
    subtitle: "Dedicated to prompt phone communication, honest advice, and quality craftsmanship.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description: "Speak directly with an experienced plumbing specialist without filling out web forms.",
        highlight: "Fast phone dispatch",
      },
      {
        title: "Quail Hill Infrastructure Expertise",
        description: "Extensive experience with Quail Hill's high-pressure zones, PRV failures, and Tuscan home architecture.",
        highlight: "Local knowledge",
      },
      {
        title: "Non-Destructive Leak Detection",
        description: "Advanced acoustic and thermal tools find leaks without tearing up flooring unnecessarily.",
        highlight: "Protects your home",
      },
      {
        title: "Upfront, Honest Pricing",
        description: "Written estimates upfront with no hidden fees or surprise hourly billing.",
        highlight: "Transparent pricing",
      },
    ],
  },

  coverage: {
    heading: "Serving All Neighborhoods in Quail Hill",
    description: "Providing residential plumbing coverage across all sectors and tracts of Quail Hill, Irvine.",
    subAreas: [
      "Quail Hill Village",
      "Casalon",
      "Sandalwood",
      "Sienna",
      "Solstice",
      "Chantilly",
      "Laurel",
      "Linden",
    ],
    landmarkBoundaries:
      "Bounded by Laguna Canyon Road, Shady Canyon Drive, Quail Hill Parkway, and the 405 Freeway.",
    zipCodesServed: ["92603"],
  },

  nearbyLocationSlugs: ["turtle-rock", "woodbridge", "university-park", "westpark"],
  relatedArticleSlugs: ["signs-of-a-slab-leak", "irvine-hard-water-plumbing", "water-heater-not-heating"],

  faqs: [
    {
      id: "qh-faq-1",
      question: "Why do pressure regulators fail in Quail Hill homes?",
      answer:
        "Quail Hill's proximity to elevated municipal water storage tanks results in high incoming static pressure (often 90 to 110 PSI). Over 10 to 15 years, the internal rubber diaphragm and spring inside the pressure reducing valve (PRV) wear out, allowing high pressure to surge into home fixtures and appliances.",
    },
    {
      id: "qh-faq-2",
      question: "Are water heaters in Quail Hill affected by hard water?",
      answer:
        "Yes. Irvine Ranch Water District water carries 12 to 16 grains per gallon of mineral hardness. Over several years, calcium scale settles inside water heaters, reducing heating efficiency, causing rumbling sounds, and leading to premature tank failure if not flushed annually.",
    },
    {
      id: "qh-faq-3",
      question: "What are the early warning signs of a slab leak in Quail Hill?",
      answer:
        "Common early signs of an under-slab leak include warm spots on flooring, the sound of water running when all faucets are closed, an unexpected jump in your IRWD water bill, or a continuously spinning water meter flow indicator.",
    },
    {
      id: "qh-faq-4",
      question: "Do Quail Hill townhomes require HOA approval for plumbing work?",
      answer:
        "Standard interior plumbing repairs—such as water heater replacements, fixture fixes, and interior line repairs—typically do not require HOA architectural review. However, any exterior modifications, penetrations, or major repipes must adhere to association rules and City of Irvine permits.",
    },
    {
      id: "qh-faq-5",
      question: "How quickly can a plumber arrive at my Quail Hill home?",
      answer:
        "For urgent situations such as active slab leaks or water line ruptures, local technicians can be dispatched promptly. When you call (949) 539-8503, our representative immediately evaluates your emergency and gives you an accurate arrival window.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE QUAIL HILL PLUMBING HELP",
    heading: "Speak With a Quail Hill Plumber Today",
    highlightText: "Direct Phone Line • Upfront Pricing • Local Expertise",
    description:
      "Whether you need a pressure regulator replacement, slab leak detection, or water heater repair in Quail Hill, call our Irvine team directly for fast assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
