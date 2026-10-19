import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const westparkLocationData: LocationPageData = {
  slug: "westpark",
  name: "Westpark",
  fullName: "Westpark, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92606", "92614"],
  published: true,

  seo: {
    title: "Plumbing Services in Westpark, Irvine | Spectrum Plumbing",
    description:
      "Expert plumbing services in Westpark, Irvine. Pressure regulator replacement, slab leak detection, water heater service, and drain cleaning. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/westpark/`,
    primaryKeyword: "plumber Westpark Irvine",
    secondaryKeywords: [
      "plumbing services Westpark Irvine CA",
      "water pressure regulator Westpark",
      "Westpark Irvine slab leak repair",
      "water heater repair Westpark 92606",
      "drain cleaning Westpark Irvine",
    ],
    ogImage: "/images/water-line-main-repair.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN WESTPARK, IRVINE",
    heading: "Plumbing Services in Westpark, Irvine, CA",
    description:
      "Need experienced plumbing assistance in Westpark? Discover trusted help for water pressure surges, failing pressure regulators, slab leaks, water heaters, and drain clogs. Call our Irvine phone team directly at (949) 539-8503 for fast, personalized assistance.",
    image: "/images/water-line-main-repair.jpg",
    imageAlt: "Plumbing pressure regulator and main line service in Westpark, Irvine",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Westpark Village",
        subtitle: "ZIP 92606 & 92614",
      },
      {
        icon: "Gauge",
        title: "Pressure Regulator Focus",
        subtitle: "PRV Replacement & Calibration",
      },
      {
        icon: "PhoneCall",
        title: "Direct Phone Line",
        subtitle: "Speak to Plumbers Directly",
      },
    ],
  },

  highlights: [
    {
      icon: "MapPin",
      title: "Westpark Specialists",
      metric: "92606 / 92614",
      description:
        "Dedicated plumbing services for Mediterranean villas, townhomes, and courtyard residences throughout Westpark.",
    },
    {
      icon: "Gauge",
      title: "PRV Valve Replacement",
      metric: "65–75 PSI Safe Range",
      description:
        "Replacing failed municipal pressure reducing valves to protect plumbing fixtures and appliance flex lines.",
    },
    {
      icon: "Activity",
      title: "Slab Leak Diagnostics",
      metric: "Acoustic Locating",
      description:
        "Non-destructive electronic acoustic and infrared locating for copper water line pinholes beneath slab floors.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Connection",
      metric: "No Web Queues",
      description:
        "Connect immediately with experienced local professionals who know Westpark's plumbing infrastructure.",
    },
  ],

  overview: {
    heading: "Tailored Plumbing Solutions for Westpark Residents",
    paragraphs: [
      "Westpark is one of Irvine's most vibrant and centrally connected villages, characterized by distinctive Mediterranean architecture, tiled roofs, manicured boulevards, and community parks. Built predominantly between the late 1980s and the 1990s, Westpark includes single-family homes, patio homes, and established multi-family townhome communities governed by active associations.",
      "A primary plumbing challenge for Westpark homeowners is managing high municipal water pressure. Municipal supply lines entering Westpark often exceed 90 to 105 PSI. The brass Pressure Reducing Valves (PRVs) originally installed during construction have an operational lifespan of 10 to 15 years. When a PRV fails, excessive pressure causes toilet fill valves to hiss, faucet cartridges to leak, and washing machine supply lines to burst.",
      "Additionally, the copper supply lines routed beneath concrete slabs in Westpark homes are subject to mineral pitting and thermal cycling fatigue from hard water. Spectrum Plumbing Irvine connects Westpark property owners directly with independent, licensed plumbing specialists who provide prompt pressure diagnostics, acoustic leak locating, and water heater servicing.",
    ],
    image: "/images/pipe-repiping-copper.jpg",
    imageAlt: "Professional plumbing technician inspecting water lines in a Westpark home",
    residentialContext: {
      constructionEra: "1986 – 1998 Mediterranean Master Plan",
      foundationType: "Post-Tensioned & Standard Concrete Slab-on-Grade",
      pipeInfrastructure: "Type L & Type M Copper Water Lines with ABS Drainage",
      waterCharacteristics: "IRWD Municipal Hard Water (12–16 GPG) with High Supply Pressures",
      hoaGuidelines: "Active Master Association & Sub-Association Architectural Rules",
    },
    localHighlights: [
      "Pressure regulator testing, recalibration, and commercial-grade replacement",
      "Precision acoustic slab leak detection preserving tile and hardwood flooring",
      "Tankless and hybrid water heater maintenance and descaling",
      "HOA-compliant plumbing repair protocols for townhomes and attached residences",
    ],
  },

  services: {
    heading: "Core Plumbing Services Provided in Westpark",
    subtitle: "Professional solutions for the most common plumbing needs across Westpark homes.",
    items: [
      {
        slug: "water-line-repair-irvine-ca",
        name: "Pressure Regulators (PRV Replacement)",
        badge: "Critical Westpark Need",
        image: "/images/water-line-main-repair.jpg",
        shortExplanation:
          "High municipal water pressure in Westpark destroys faucet cartridges, water heaters, and appliance lines. We install heavy-duty, adjustable lead-free PRV valves to keep your home safely under 75 PSI.",
        commonSymptoms: [
          "Banging pipes (water hammer) when taps turn off",
          "Constantly running or hissing toilet valves",
          "Rapid wear on kitchen and bathroom faucet cartridges",
          "Exterior hose bib pressure reading over 80 PSI",
        ],
        serviceLink: "/services/water-line-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "slab-leak-repair-irvine-ca",
        name: "Slab Leak Detection & Repair",
        badge: "Under-Slab Specialist",
        image: "/images/slab-leak-inspection.jpg",
        shortExplanation:
          "Copper pipes running beneath Westpark foundation slabs can develop pinhole leaks. Our network uses acoustic sensors and infrared imaging to find leaks accurately without exploratory floor damage.",
        commonSymptoms: [
          "Warm spots on tile, laminate, or carpeted flooring",
          "Water meter flow dial spinning with all taps closed",
          "Sound of running water behind downstairs walls",
          "Sudden unexplained spike on monthly IRWD bill",
        ],
        serviceLink: "/services/slab-leak-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-heater-repair-irvine-ca",
        name: "Water Heater Repair & Upgrades",
        image: "/images/tankless-water-heater.jpg",
        shortExplanation:
          "Keep hot water flowing consistently with expert maintenance and replacement of conventional storage tanks and high-efficiency tankless water heaters in Westpark.",
        commonSymptoms: [
          "Hot water running out prematurely during showers",
          "Popping or rumbling noises from mineral sediment",
          "Water leaking around the base of the tank in the garage",
          "Tankless error codes and temperature fluctuations",
        ],
        serviceLink: "/services/water-heater-repair-irvine-ca/",
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Drain Cleaning & Clog Removal",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Clear kitchen grease, hair, and soap scum obstructions from branch lines and main building drains with motorized snaking and eco-friendly hydro jetting.",
        commonSymptoms: [
          "Slow-draining showers, bathtubs, or kitchen sinks",
          "Foul odors rising from garbage disposals and sink drains",
          "Gurgling sounds in adjacent fixtures when water drains",
          "Standing water in shower pans",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "faucet-and-sink-repair-irvine-ca",
        name: "Faucet & Fixture Plumbing",
        image: "/images/kitchen-sink-repair.jpg",
        shortExplanation:
          "Repair leaking single-handle cartridges, high-arc kitchen faucets, Roman tub fillers, and running toilets in Westpark Mediterranean bathrooms.",
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
    heading: "Common Plumbing Symptoms in Westpark",
    subtitle:
      "Learn to spot the signs of high water pressure, failing regulators, and foundation leaks in Westpark homes.",
  },

  midPageCTA: {
    eyebrow: "DIRECT WESTPARK TELEPHONE ASSISTANCE",
    heading: "Need a Pressure Regulator or Slab Leak Inspection?",
    highlightText: "Call Our Direct Irvine Plumbing Line.",
    description:
      "Avoid third-party web forms. Call our phone line directly to speak with an experienced specialist who understands Westpark's residential plumbing systems.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing professional",
      "Rapid dispatch for active water leaks",
      "Licensed and insured Orange County contractors",
      "Precision pressure testing and acoustic locating",
    ],
    image: "/images/water-line-main-repair.jpg",
    imageAlt: "Technician replacing pressure reducing valve in Westpark Irvine",
  },

  localConcerns: {
    heading: "Specific Plumbing Concerns in Westpark",
    subtitle: "How high municipal pressure and home age impact plumbing systems in Westpark.",
    items: [
      {
        title: "High Municipal Water Pressure Damaging Fixtures",
        description:
          "Municipal water mains in Westpark operate at elevated pressures. When the home's primary pressure regulator wears out after 10–12 years, incoming water surges directly into household fixtures.",
        causes: "Internal rubber diaphragm and spring failure in aged pressure reducing valves (PRVs).",
        warningSigns: [
          "Loud banging pipes when faucets or irrigation valves shut off",
          "Constantly running or leaking toilet fill valves",
          "Water dripping from appliance supply lines and faucets",
        ],
        consequences:
          "Blown washing machine hoses causing catastrophic indoor flooding, ruptured water heaters, and premature fixture failure.",
        whenToCall: "Whenever hose bib pressure tests above 75–80 PSI or pipes vibrate loudly.",
        relatedServiceSlug: "water-line-repair-irvine-ca",
        relatedServiceName: "PRV Valve Replacement",
      },
      {
        title: "Pinhole Slab Leaks in Copper Hot Water Lines",
        description:
          "Copper pipes installed beneath concrete slabs in Westpark homes constructed during the late 1980s and 1990s can develop microscopic pinhole breaches.",
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
      {
        title: "Hard Water Mineral Scaling in Water Heaters",
        description:
          "Irvine Ranch Water District water carries 12–16 grains of dissolved minerals per gallon, which precipitates as calcium carbonate scale inside water heaters and fixtures.",
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
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Serve Westpark Homeowners",
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
    heading: "Emergency Plumbing Protocols for Westpark",
    subtitle: "Actionable steps to take immediately during a plumbing emergency in your Westpark residence.",
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
        "In Westpark homes, the main water shutoff valve is typically located in the garage near the water heater or outside near the front garden hose bib.",
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
    heading: "Westpark Plumbing Pricing Factors",
    subtitle: "Transparent variables that shape residential plumbing repair costs in Westpark.",
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
          "Attached townhome communities in Westpark may require specialized access protocols, acoustic dampening, or City of Irvine permits.",
        impact: "Ensures compliance with community association rules and local building codes.",
      },
    ],
    pricingNote:
      "All technicians provide written estimates with clear pricing before commencing any repair work.",
  },

  whyChooseUs: {
    heading: "Why Westpark Residents Choose Spectrum Plumbing",
    subtitle: "Dedicated to prompt phone communication, honest advice, and quality craftsmanship.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description: "Speak directly with an experienced plumbing specialist without filling out web forms.",
        highlight: "Fast phone dispatch",
      },
      {
        title: "Westpark Infrastructure Expertise",
        description: "Extensive experience with Westpark's high-pressure zones, PRV failures, and Mediterranean home architecture.",
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
    heading: "Serving All Neighborhoods in Westpark",
    description: "Providing residential plumbing coverage across all sectors and subdivisions of Westpark, Irvine.",
    subAreas: [
      "Westpark Village",
      "Westpark Promenade",
      "The Colony at Westpark",
      "Brio at Westpark",
      "San Leandro",
      "San Marco",
      "San Marino",
      "Tierrasanta",
    ],
    landmarkBoundaries:
      "Bounded by Culver Drive, Alton Parkway, Main Street, and Harvard Avenue.",
    zipCodesServed: ["92606", "92614"],
  },

  nearbyLocationSlugs: ["woodbridge", "turtle-rock", "university-park", "northwood"],
  relatedArticleSlugs: ["signs-of-a-slab-leak", "irvine-hard-water-plumbing", "water-heater-not-heating"],

  faqs: [
    {
      id: "wp-faq-1",
      question: "How do I know if my water pressure regulator in Westpark has failed?",
      answer:
        "Common symptoms of a failed pressure reducing valve (PRV) include banging pipes (water hammer) when taps close, vibrating pipes, leaking toilet fill valves, dripping faucets, or water pressure testing above 75–80 PSI at an outdoor hose bib. High pressure can cause appliance supply hoses to burst.",
    },
    {
      id: "wp-faq-2",
      question: "Are slab leaks common in Westpark homes?",
      answer:
        "Yes. Westpark homes built in the late 1980s and 1990s have copper supply lines routed under concrete slabs. Over 25 to 35 years of service, thermal expansion, high water pressure, and soil minerals can cause pinhole leaks. Acoustic leak detection can pinpoint the leak location without destructive digging.",
    },
    {
      id: "wp-faq-3",
      question: "What is the recommended water pressure for a Westpark home?",
      answer:
        "The Uniform Plumbing Code recommends household water pressure between 50 and 70 PSI, with 75 PSI being the maximum safe limit. Any pressure above 80 PSI requires a pressure reducing valve to protect home fixtures and appliances.",
    },
    {
      id: "wp-faq-4",
      question: "Do plumbers need HOA approval for repairs in Westpark?",
      answer:
        "Standard interior plumbing repairs—such as water heater replacements, fixture fixes, and interior PEX reroutes—typically do not require HOA architectural approval. However, any exterior work, trenching, or visible modifications must comply with association rules and City of Irvine building permits.",
    },
    {
      id: "wp-faq-5",
      question: "How fast can I get a plumber to my Westpark residence?",
      answer:
        "Call our direct Irvine line at (949) 539-8503. For active leaks and emergencies, local technicians can be dispatched quickly to evaluate and resolve the issue.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE WESTPARK PLUMBING HELP",
    heading: "Speak With a Westpark Plumber Today",
    highlightText: "Direct Phone Line • Upfront Pricing • Local Expertise",
    description:
      "Whether you need a pressure regulator replacement, slab leak detection, or water heater repair in Westpark, call our Irvine team directly for fast assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
