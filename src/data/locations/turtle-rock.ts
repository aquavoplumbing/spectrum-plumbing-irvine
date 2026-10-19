import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const turtleRockLocationData: LocationPageData = {
  slug: "turtle-rock",
  name: "Turtle Rock",
  fullName: "Turtle Rock, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92603", "92612"],
  published: true,

  seo: {
    title: "Plumbing Services in Turtle Rock, Irvine | Spectrum Plumbing",
    description:
      "Looking for trusted plumbing services in Turtle Rock, Irvine? Hillside leak detection, slab leak diagnosis, water pressure regulation, and emergency repairs. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/turtle-rock/`,
    primaryKeyword: "plumber Turtle Rock Irvine",
    secondaryKeywords: [
      "plumbing services Turtle Rock Irvine CA",
      "Turtle Rock Irvine slab leak repair",
      "water pressure regulator Turtle Rock",
      "emergency plumber Turtle Rock 92603",
      "hillside plumbing leak detection Irvine",
    ],
    ogImage: "/images/leak-detection-acoustic.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN TURTLE ROCK, IRVINE",
    heading: "Plumbing Services in Turtle Rock, Irvine, CA",
    description:
      "Searching for dependable plumbing services in Turtle Rock? Connect with experienced local plumbers specializing in custom hillside residences, under-slab copper lines, water pressure regulation, and emergency plumbing. Call our Irvine team directly at (949) 539-8503.",
    image: "/images/leak-detection-acoustic.jpg",
    imageAlt: "Acoustic leak detection and plumbing diagnostics for luxury homes in Turtle Rock, Irvine",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Turtle Rock Village",
        subtitle: "ZIP 92603 & 92612",
      },
      {
        icon: "Mountain",
        title: "Hillside Topography",
        subtitle: "High Pressure & Gravity Head",
      },
      {
        icon: "PhoneCall",
        title: "Direct Phone Triage",
        subtitle: "Zero Forms • Immediate Call",
      },
    ],
  },

  highlights: [
    {
      icon: "MapPin",
      title: "Hillside Home Specialists",
      metric: "92603 / 92612",
      description:
        "Customized plumbing diagnostics for multi-level hillside custom estates and single-family homes throughout Turtle Rock.",
    },
    {
      icon: "Gauge",
      title: "Pressure Regulation Expertise",
      metric: "PRV Specialists",
      description:
        "Addressing excessive municipal water pressures exceeding 90 PSI caused by steep hillside gravity elevation changes.",
    },
    {
      icon: "Activity",
      title: "Non-Invasive Slab Leak Locating",
      metric: "Acoustic & Thermal",
      description:
        "Pinpointing below-slab copper piping leaks beneath post-tensioned and reinforced concrete foundations without exploratory demolition.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Connection",
      metric: "24/7 Available",
      description:
        "Speak directly with knowledgeable plumbing representatives to triage symptoms and coordinate prompt on-site dispatch.",
    },
  ],

  overview: {
    heading: "Tailored Plumbing Services for Turtle Rock Residences",
    paragraphs: [
      "Turtle Rock is widely recognized as one of Irvine's most picturesque and architecturally distinguished neighborhoods. Nestled against the San Joaquin Hills with rolling elevations, winding streets, and scenic views, homes here range from established 1970s residences to sprawling custom hillside estates. These unique architectural features and elevation changes create distinct plumbing dynamics that standard flatland diagnostics often miss.",
      "Because many Turtle Rock properties sit along steep hillsides, municipal water distribution lines must maintain elevated pressures to push water up the hills. When incoming pressure reaches downhill homes or variable elevation changes without a functioning Pressure Reducing Valve (PRV), household lines frequently endure pressures between 95 and 120 PSI. This chronic hydraulic stress accelerates fixture wear, stresses supply flex lines, and contributes to premature copper pinhole leaks beneath concrete slabs.",
      "Furthermore, the expansive clay soil characteristic of Southern California hillside slopes expands when wet and contracts when dry, placing external physical stress on subterranean sewer laterals and incoming copper service mains. Spectrum Plumbing Irvine connects Turtle Rock property owners directly with licensed, independent plumbing contractors equipped with thermal imaging, electronic listening discs, and professional pressure testing instruments to protect your home's foundation and plumbing integrity.",
    ],
    image: "/images/copper-pipe-repair.jpg",
    imageAlt: "Professional copper pipe and plumbing manifold repair in a Turtle Rock residence",
    residentialContext: {
      constructionEra: "1972 – 1990s Custom & Tract Architecture",
      foundationType: "Slab-on-Grade & Multi-Level Hillside Stepped Foundations",
      pipeInfrastructure: "Type L Copper Supply Lines & ABS Drainage Systems",
      waterCharacteristics: "IRWD Municipal Hard Water (12–18 GPG) with High Elevation Pressures",
      hoaGuidelines: "Strict HOA Architectural Review Guidelines for Piping & Exterior Lines",
    },
    localHighlights: [
      "Hillside pressure regulation and dual-stage PRV valve configurations",
      "Non-destructive acoustic leak detection for multi-level concrete foundations",
      "High-capacity water heater diagnostics for expansive luxury floor plans",
      "Tree root clearing for sewer laterals running beneath mature hillside landscaping",
    ],
  },

  services: {
    heading: "Core Plumbing Services Provided in Turtle Rock",
    subtitle:
      "Explore specialized plumbing solutions commonly requested by homeowners across Turtle Rock.",
    items: [
      {
        slug: "slab-leak-repair-irvine-ca",
        name: "Slab Leak Detection & Repair",
        badge: "Critical Hillside Service",
        image: "/images/slab-leak-inspection.jpg",
        shortExplanation:
          "High elevation pressure and soil shifts place subterranean copper lines under stress. We connect you with certified technicians using non-destructive acoustic sensors and infrared imaging to find foundation leaks without tearing up flooring.",
        commonSymptoms: [
          "Unexplained warm patches on hardwood or tile",
          "Continuous water meter dial rotation with fixtures off",
          "Sound of running water behind downstairs baseboards",
          "Sudden spike in municipal water bills",
        ],
        serviceLink: "/services/slab-leak-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-line-repair-irvine-ca",
        name: "Water Pressure Regulators (PRV)",
        badge: "High Pressure Protection",
        image: "/images/water-line-main-repair.jpg",
        shortExplanation:
          "Gravity head from Turtle Rock's elevation changes causes incoming water pressure to surge past 90 PSI. Our network installs and recalibrates commercial-grade PRV valves to keep your home safely between 65 and 75 PSI.",
        commonSymptoms: [
          "Banging or vibrating pipes when faucets shut off",
          "Leaking toilet fill valves and dripping faucets",
          "Failed appliance water supply lines",
          "High static pressure readings at outside hose bibs",
        ],
        serviceLink: "/services/water-line-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-heater-repair-irvine-ca",
        name: "Tank & Tankless Water Heating",
        image: "/images/tankless-water-heater.jpg",
        shortExplanation:
          "Large Turtle Rock custom floor plans demand dependable hot water. Whether you have dual traditional storage tanks or high-efficiency tankless recirculating systems, get prompt diagnosis, descaling, and burner servicing.",
        commonSymptoms: [
          "Insufficient hot water for multi-bath showers",
          "Rumbling or popping noises from sediment buildup",
          "Error codes or shutdown on tankless units",
          "Rust-colored hot water or pilot light failure",
        ],
        serviceLink: "/services/water-heater-repair-irvine-ca/",
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Mainline Sewer & Drain Cleaning",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Mature pines and eucalyptus trees throughout Turtle Rock's private hillsides frequently penetrate older ABS or clay sewer laterals. Professional motorized snaking and camera inspections restore clean flow.",
        commonSymptoms: [
          "Multiple plumbing fixtures backing up simultaneously",
          "Gurgling sounds from downstairs toilets when sinks drain",
          "Sewer odors around yard cleanouts",
          "Slow draining bathtubs and showers",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Triage",
        badge: "24/7 Phone Line",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "Active water line ruptures, sewer overflows, or sudden ceiling leaks require rapid triage. Call directly to speak with an experienced specialist who guides your shutoff steps and dispatches help immediately.",
        commonSymptoms: [
          "Uncontrolled pipe bursts under cabinets or slabs",
          "Sewage backups through ground-floor showers",
          "Gas odors near water heater or furnace connections",
          "Sudden structural flooding",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "pipe-repair-and-repiping-irvine-ca",
        name: "Whole-Home PEX Repiping",
        image: "/images/pipe-repiping-copper.jpg",
        shortExplanation:
          "For Turtle Rock homes that have experienced multiple copper slab leaks, bypassing vulnerable underground lines with an overhead PEX-A restoration provides a permanent, non-invasive lifetime solution.",
        commonSymptoms: [
          "Recurring pinhole leaks in foundation pipes",
          "Low water pressure across multiple bathrooms",
          "Discolored water from aging copper oxidation",
          "Pipes with visible exterior green corrosion",
        ],
        serviceLink: "/services/pipe-repair-and-repiping-irvine-ca/",
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Symptoms in Turtle Rock",
    subtitle:
      "Identify the warning signs of hillside plumbing stress before minor leaks escalate into costly structural damage.",
  },

  midPageCTA: {
    eyebrow: "DIRECT TURTLE ROCK PHONE ASSISTANCE",
    heading: "Experiencing Water Pressure Surges or Foundation Leaks?",
    highlightText: "Speak Directly With an Irvine Plumbing Expert.",
    description:
      "Avoid automated web forms and waiting for email replies. Call our Irvine telephone dispatch line now to discuss your symptoms and coordinate prompt, professional service.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Accurate telephone diagnostic assessment",
      "Licensed and insured Orange County contractors",
      "Non-destructive acoustic leak detection equipment",
      "Upfront pricing and honest repair evaluations",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Quiet hillside residential street in Turtle Rock, Irvine",
  },

  localConcerns: {
    heading: "Specific Plumbing Challenges in Turtle Rock",
    subtitle:
      "Understanding how local hillside topography, high water pressure, and soil characteristics impact your plumbing systems.",
    items: [
      {
        title: "Hillside Water Pressure Surges Exceeding 100 PSI",
        description:
          "Municipal water mains running down from higher elevation storage tanks in the San Joaquin Hills generate substantial static water pressure. Without a functioning pressure reducing valve, this pressure floods directly into household fixtures.",
        causes: "Gravity head pressure compounded by failing or uncalibrated municipal pressure regulators.",
        warningSigns: [
          "Slamming sounds (water hammer) when valves shut",
          "Prematurely leaking toilet fill valves and cartridges",
          "Excessive spray velocity from sink faucets",
          "Pinhole bursts on appliance flex hoses",
        ],
        consequences:
          "Accelerated fatigue of underground copper pipes, blown water heater pressure relief valves, and catastrophic flooding from burst hoses.",
        whenToCall: "Immediately when pipes shake or hose bib pressure measures above 80 PSI.",
        relatedServiceSlug: "water-line-repair-irvine-ca",
        relatedServiceName: "Pressure Regulator Repair",
      },
      {
        title: "Stepped Foundation Under-Slab Copper Leaks",
        description:
          "Many multi-level Turtle Rock residences are constructed on stepped concrete foundations where copper hot water lines run beneath varying slab thicknesses and retaining footings.",
        causes: "Thermal expansion cycles against embedded aggregate combined with aggressive local soil minerals and high pressure.",
        warningSigns: [
          "Warm spots on flooring that persist throughout the day",
          "Water meter flow indicator spinning when all taps are off",
          "Audible hissing sound behind walls or under ground floor slabs",
        ],
        consequences:
          "Subsurface void formation under foundation footings, differential soil settlement, and costly floor damage.",
        whenToCall: "As soon as you suspect subterranean water movement or notice unexplained spikes on your IRWD water bill.",
        relatedServiceSlug: "slab-leak-repair-irvine-ca",
        relatedServiceName: "Slab Leak Diagnostics",
      },
      {
        title: "Mature Tree Root Intrusion in Hillside Sewer Laterals",
        description:
          "The lush, mature landscaping that defines Turtle Rock includes extensive eucalyptus and pine root systems that continuously seek moisture along subterranean sewer pipe joints.",
        causes: "Microscopic hairline separations in aging ABS or vitrified clay pipes allowing tree roots to penetrate and expand.",
        warningSigns: [
          "Gurgling noises from downstairs plumbing fixtures",
          "Slow drainage across multiple lower-level bathrooms",
          "Foul sewer gas odors near exterior cleanouts",
        ],
        consequences:
          "Complete sewer line blockages, interior sewage overflows, and structural pipe collapse requiring trenchless replacement.",
        whenToCall: "At the first sign of multiple fixtures draining sluggishly.",
        relatedServiceSlug: "sewer-line-repair-irvine-ca",
        relatedServiceName: "Sewer Camera Inspection",
      },
    ],
  },

  process: {
    badge: "Straightforward Dispatch",
    heading: "How Our Plumbing Service Works in Turtle Rock",
    subtitle: "A direct, phone-first approach designed to resolve plumbing emergencies quickly and transparently.",
    steps: [
      {
        step: "01",
        title: "Call Our Irvine Phone Line",
        description:
          "Dial (949) 539-8503 directly. You speak immediately with a real representative who understands Irvine residential plumbing systems.",
        highlight: "No digital form delays",
      },
      {
        step: "02",
        title: "Symptom Triage & Guidance",
        description:
          "We ask targeted questions about your symptoms, explain immediate shutoff steps if water is actively flowing, and determine dispatch urgency.",
        highlight: "Damage mitigation guidance",
      },
      {
        step: "03",
        title: "On-Site Evaluation & Diagnostic",
        description:
          "An experienced, licensed local plumbing specialist arrives equipped with precision diagnostic instruments to locate the root cause.",
        highlight: "Non-destructive testing",
      },
      {
        step: "04",
        title: "Clear Pricing & Permanent Repair",
        description:
          "You receive a clear, upfront estimate detailing recommended repair options, code compliance details, and warranty terms before work starts.",
        highlight: "Upfront pricing guarantee",
      },
    ],
  },

  emergencyGuidance: {
    heading: "Emergency Plumbing Protocols for Turtle Rock",
    subtitle:
      "Critical steps to take right now if you are experiencing an active plumbing emergency in Turtle Rock.",
    urgentSituations: [
      {
        title: "Uncontrolled Main Supply Line Rupture",
        description:
          "High-pressure water escaping under your slab or inside walls can cause thousands of dollars in structural damage within minutes.",
        protocol:
          "Locate your main water shutoff valve near the garage or front hose bib and rotate it 90 degrees clockwise immediately.",
        severity: "critical",
      },
      {
        title: "Main Sewer Line Backup Flooding Ground Floor",
        description:
          "Blackwater rising in downstairs bathtubs or shower pans presents severe health and biohazard risks.",
        protocol:
          "Immediately stop all indoor water use, including dishwashers and laundry, and call our emergency line.",
        severity: "critical",
      },
      {
        title: "Gas Smell Near Water Heater",
        description:
          "Natural gas accumulation near water heaters or indoor furnaces poses an explosive ignition hazard.",
        protocol:
          "Evacuate everyone outside, do not operate light switches or electronics, and call 911 / SoCalGas immediately.",
        severity: "critical",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In most Turtle Rock single-family homes, the main domestic water shutoff valve is located outside near the front exterior hose bib, or inside the garage near the water heater manifold.",
      steps: [
        "Locate the brass ball valve with a lever handle or the older multi-turn wheel valve.",
        "Turn the lever handle 90 degrees until it is perpendicular to the pipe, or turn the round wheel clockwise until tight.",
        "Open the lowest outdoor hose bib to drain residual pressure from your home's water lines.",
        "Verify that indoor faucets have completely stopped running to confirm water isolation.",
      ],
      gasWarning:
        "If you ever smell sulfur or rotten eggs, immediately exit your home before attempting any shutoffs.",
    },
  },

  pricingFactors: {
    heading: "Understanding Plumbing Service Pricing in Turtle Rock",
    subtitle:
      "Transparent factors that determine the scope and cost of residential plumbing repairs.",
    factors: [
      {
        title: "Diagnostic Depth & Locating Technology",
        description:
          "Simple fixture repairs require minimal diagnostics, whereas pinpointing subterranean slab leaks requires advanced electronic acoustic microphones, infrared thermography, and gas tracing.",
        impact: "Specialized non-invasive locating saves thousands in unnecessary structural floor demolition.",
      },
      {
        title: "Accessibility & Hillside Foundation Architecture",
        description:
          "Multi-level stepped foundations or high-ceiling custom floor plans may require specialized access equipment, crawlspace navigation, or overhead attic rerouting.",
        impact: "Determines labor hours and scaffolding or drywall opening requirements.",
      },
      {
        title: "Material Quality & Code Compliance",
        description:
          "We recommend premium materials such as Uponor PEX-A piping, lead-free brass ball valves, and commercial-grade pressure regulators to withstand Irvine's hard water and pressure dynamics.",
        impact: "Higher upfront quality prevents recurring leaks and guarantees long-term durability.",
      },
    ],
    pricingNote:
      "All technicians provide clear, written estimates before beginning any work. You remain in complete control of repair decisions.",
  },

  whyChooseUs: {
    heading: "Why Turtle Rock Residents Choose Spectrum Plumbing",
    subtitle: "A dependable, phone-first network committed to honest craftsmanship and local Irvine expertise.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description:
          "Speak directly with knowledgeable plumbing specialists without waiting through third-party call centers or online contact forms.",
        highlight: "Immediate telephone triage",
      },
      {
        title: "Familiarity with Hillside Infrastructure",
        description:
          "Our network understands the exact engineering nuances of Turtle Rock's stepped slabs, high-pressure zones, and HOA requirements.",
        highlight: "Local Irvine expertise",
      },
      {
        title: "Non-Destructive Leak Detection",
        description:
          "We prioritize finding leaks through high-tech acoustic and thermal locating rather than destructive exploratory jackhammering.",
        highlight: "Preserves luxury flooring",
      },
      {
        title: "Upfront, Transparent Estimates",
        description:
          "Receive clear explanations of diagnostic findings and fixed pricing before any repair work commences.",
        highlight: "Zero hidden surcharges",
      },
    ],
  },

  coverage: {
    heading: "Serving All Neighborhoods Across Turtle Rock",
    description:
      "Connecting homeowners with professional plumbing providers across all tracts and enclaves of Turtle Rock, Irvine.",
    subAreas: [
      "Turtle Rock Crest",
      "Turtle Rock Glen",
      "Turtle Rock Hills",
      "Turtle Rock Meadows",
      "Broadmoor Campus",
      "Shady Canyon Enclave",
      "Concordia University Area",
      "Highland Light",
    ],
    landmarkBoundaries:
      "Bounded by Culver Drive, Campus Drive, Ridgeline Drive, and the San Joaquin Hills.",
    zipCodesServed: ["92603", "92612"],
  },

  nearbyLocationSlugs: ["woodbridge", "university-park", "westpark", "quail-hill"],
  relatedArticleSlugs: ["signs-of-a-slab-leak", "why-drains-keep-clogging", "irvine-hard-water-plumbing"],

  faqs: [
    {
      id: "tr-faq-1",
      question: "Why is water pressure so high in Turtle Rock?",
      answer:
        "Turtle Rock's elevated hillside topography requires municipal water utilities to pump water at elevated pressure to reach higher ridgelines. When that water feeds downhill homes, static water pressure often exceeds 95 to 110 PSI unless regulated by a functioning household Pressure Reducing Valve (PRV). Standard residential plumbing codes specify safe pressure between 65 and 75 PSI.",
    },
    {
      id: "tr-faq-2",
      question: "How do plumbers locate slab leaks in Turtle Rock homes without breaking floors?",
      answer:
        "Experienced leak detection specialists use non-destructive diagnostic tools including electronic acoustic ground microphones, high-resolution thermal imaging cameras, and nitrogen pressure decay testing. These instruments pinpoint the exact sound and thermal footprint of escaping water beneath concrete slabs without exploratory concrete demolition.",
    },
    {
      id: "tr-faq-3",
      question: "Are PEX pipe reroutes permitted under Turtle Rock HOA guidelines?",
      answer:
        "Yes. Overhead PEX reroutes routed through interior walls and ceiling joists are the preferred, non-invasive method for bypassing failed under-slab copper lines in Turtle Rock. Because PEX is installed entirely within the home's interior, it does not alter exterior architecture and complies with City of Irvine building permits and HOA rules.",
    },
    {
      id: "tr-faq-4",
      question: "What should I do if my downstairs toilet and shower gurgle at the same time?",
      answer:
        "If multiple fixtures gurgle or drain slowly simultaneously, you have an obstruction in your main sewer lateral, often caused by tree root intrusion from mature landscaping. Stop using all water immediately and call our Irvine dispatch line to schedule a video camera inspection before sewage backs up onto your flooring.",
    },
    {
      id: "tr-faq-5",
      question: "How quickly can a plumber arrive at my Turtle Rock home?",
      answer:
        "For urgent situations such as active slab leaks or main line backups, local technicians can typically be dispatched promptly. When you call (949) 539-8503, our representative immediately triages the emergency and gives you an accurate arrival window.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE TURTLE ROCK PLUMBING HELP",
    heading: "Connect With a Trusted Turtle Rock Plumber Today",
    highlightText: "Direct Phone Line • Honest Pricing • Expert Triage",
    description:
      "Don't let a plumbing leak or high water pressure damage your Turtle Rock home. Call our Irvine team right now to speak directly with an experienced professional.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
