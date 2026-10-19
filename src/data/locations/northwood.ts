import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const northwoodLocationData: LocationPageData = {
  slug: "northwood",
  name: "Northwood",
  fullName: "Northwood, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92620"],
  published: true,

  seo: {
    title: "Plumbing Services in Northwood, Irvine | Spectrum Plumbing",
    description:
      "Reliable plumbing services in Northwood, Irvine. Tree root sewer clearing, slab leak detection, water heater repair, and repiping. Call (949) 539-8503 for fast phone triage.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/northwood/`,
    primaryKeyword: "plumber Northwood Irvine",
    secondaryKeywords: [
      "plumbing services Northwood Irvine CA",
      "Northwood Irvine drain cleaning",
      "slab leak detection Northwood 92620",
      "water heater repair Northwood Irvine",
      "sewer camera inspection Northwood",
    ],
    ogImage: "/images/woodbridge-homes-street.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN NORTHWOOD, IRVINE",
    heading: "Plumbing Services in Northwood, Irvine, CA",
    description:
      "Looking for trusted plumbing solutions in Northwood? Get expert assistance for sewer line root intrusions, slab leak detection, water heater failures, and drain clogs. Call our local Irvine team directly at (949) 539-8503 to discuss your issue and get prompt service.",
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Quiet tree-lined residential street with mature landscaping in Northwood, Irvine",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Northwood Village",
        subtitle: "ZIP Code 92620",
      },
      {
        icon: "Trees",
        title: "Root & Sewer Focus",
        subtitle: "Mature Trees & 1970s Pipes",
      },
      {
        icon: "PhoneCall",
        title: "Direct Phone Dispatch",
        subtitle: "Speak With Plumbers Directly",
      },
    ],
  },

  highlights: [
    {
      icon: "MapPin",
      title: "Northwood Village Specialists",
      metric: "ZIP 92620",
      description:
        "Comprehensive plumbing support tailored for classic 1970s and 1980s single-family homes across Northwood.",
    },
    {
      icon: "ShieldAlert",
      title: "Sewer Root Clearing",
      metric: "Hydro Jet & Video",
      description:
        "HD camera diagnostics and motorized root clearing for residential sewer laterals invaded by mature tree roots.",
    },
    {
      icon: "Activity",
      title: "Slab Leak Pinpointing",
      metric: "Acoustic Locating",
      description:
        "Non-destructive electronic detection for aging subterranean copper water lines running below concrete slabs.",
    },
    {
      icon: "PhoneCall",
      title: "Instant Phone Triage",
      metric: "No Forms",
      description:
        "Call our direct phone line anytime to describe symptoms and receive immediate diagnostic guidance.",
    },
  ],

  overview: {
    heading: "Complete Plumbing Care for Northwood Homeowners",
    paragraphs: [
      "Northwood is celebrated as one of Irvine's most enduring and cherished family communities. Developed largely throughout the late 1970s and 1980s, Northwood features wide streets, spacious single-family residences with private backyards, and magnificent canopies of mature eucalyptus, sycamore, and pine trees. While these leafy surroundings give Northwood its distinctive character, they also create specific challenges for subterranean plumbing infrastructure.",
      "Most Northwood homes were built with concrete slab foundations and copper domestic water lines buried beneath the floor. As these original copper pipes surpass 35 to 45 years of continuous service, the cumulative effects of Irvine's mineral-rich municipal water and thermal expansion against concrete can create pinhole leaks. Left undetected, beneath-slab water flow can erode soil compaction and damage hardwood, tile, and carpets.",
      "In addition, aggressive root systems from Northwood's large yard trees frequently infiltrate the joints of older vitrified clay or ABS sewer laterals. Spectrum Plumbing Irvine connects Northwood homeowners directly with skilled, licensed plumbing contractors equipped with sewer cameras, acoustic listening devices, and trenchless repair equipment to keep your household plumbing flowing smoothly.",
    ],
    image: "/images/sewer-camera-inspection.jpg",
    imageAlt: "High-definition sewer camera inspection monitor diagnosing root intrusion in Northwood",
    residentialContext: {
      constructionEra: "1975 – 1988 Master-Planned Development",
      foundationType: "Monolithic Concrete Slab-on-Grade",
      pipeInfrastructure: "Original Type M Copper Supply Lines & Vitrified Clay/ABS Sewer Laterals",
      waterCharacteristics: "IRWD Municipal Hard Water (13–18 GPG) Requiring Regular Descaling",
      hoaGuidelines: "City Permitting & Northwood Homeowners Association Compliance",
    },
    localHighlights: [
      "Sewer lateral root cutting and high-pressure hydro jetting for mature yards",
      "Precision electronic acoustic slab leak locating without destructive floor trenching",
      "Tank and tankless water heater replacements meeting current California Title 24 codes",
      "Whole-home PEX repiping for homes with multiple historic slab leaks",
    ],
  },

  services: {
    heading: "Core Plumbing Services for Northwood Residents",
    subtitle: "Dependable, code-compliant plumbing solutions for common residential needs in Northwood.",
    items: [
      {
        slug: "sewer-line-repair-irvine-ca",
        name: "Sewer Line Camera Inspection & Repair",
        badge: "Essential Northwood Service",
        image: "/images/sewer-camera-inspection.jpg",
        shortExplanation:
          "Mature tree roots along Northwood's parkways and backyards frequently invade aging sewer pipe joints. We provide color video camera diagnostics and motorized root clearing to restore mainline flow.",
        commonSymptoms: [
          "Multiple sinks, tubs, and toilets backing up at once",
          "Gurgling sounds when the washing machine empties",
          "Persistent sewer odors in bathrooms or the front yard",
          "Slow drainage that basic plunging cannot resolve",
        ],
        serviceLink: "/services/sewer-line-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "slab-leak-repair-irvine-ca",
        name: "Slab Leak Locating & Repair",
        badge: "Under-Slab Specialist",
        image: "/images/slab-leak-inspection.jpg",
        shortExplanation:
          "Original 1970s and 1980s copper lines below Northwood slabs are susceptible to pinhole corrosion. Our partners locate leaks acoustically and offer non-invasive overhead PEX reroutes.",
        commonSymptoms: [
          "Unexplained warm spots on carpet or tile",
          "Water meter spinning while all faucets are turned off",
          "Faint hissing sound of running water in walls or floors",
          "Damp baseboards or unexplained mildew along floorboards",
        ],
        serviceLink: "/services/slab-leak-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-heater-repair-irvine-ca",
        name: "Water Heater Repair & Installation",
        image: "/images/water-heater-diagnostic.jpg",
        shortExplanation:
          "Whether your conventional gas water heater is leaking from the tank base or you are ready to upgrade to an energy-efficient tankless system, get prompt service and upfront estimates.",
        commonSymptoms: [
          "Rusty or discolored hot water coming from taps",
          "Rumbling, popping, or banging sounds inside the tank",
          "Water pooling around the base of the water heater in the garage",
          "Pilot light refusing to stay lit",
        ],
        serviceLink: "/services/water-heater-repair-irvine-ca/",
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Clogged Drain Snaking & Hydro Jetting",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "From kitchen grease buildup to heavy bathroom hair clogs, professional motorized snakes and hydro jetters scrub pipe walls clean without corrosive chemical cleaners.",
        commonSymptoms: [
          "Standing water in shower pans and bathtubs",
          "Kitchen sink draining slowly with foul disposal odors",
          "Frequent backups requiring repeated chemical treatments",
          "Fruit flies or sewer gnats around drain openings",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "pipe-repair-and-repiping-irvine-ca",
        name: "Whole-House PEX Repiping",
        image: "/images/pipe-repiping-copper.jpg",
        shortExplanation:
          "Replace aging, failing underground copper pipes with durable, scale-resistant Uponor PEX-A piping routed overhead through attics and interior walls.",
        commonSymptoms: [
          "History of two or more previous slab leaks",
          "Noticeable drop in household water pressure",
          "Pipes with visible white or green oxidation crust",
          "Flakes of rust or sediment clogging faucet aerators",
        ],
        serviceLink: "/services/pipe-repair-and-repiping-irvine-ca/",
      },
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Response",
        badge: "24/7 Phone Triage",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "Burst water lines, overflowing toilets, and sewer backups require immediate action. Call our phone line directly to speak with an expert and dispatch local help.",
        commonSymptoms: [
          "Water actively leaking through ceilings or baseboards",
          "Sewage backing up into tubs and showers",
          "Failed main water shutoff valve during an active leak",
          "Sudden loss of all household water pressure",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Problems in Northwood",
    subtitle:
      "Recognize the warning signs of tree root blockages and under-slab plumbing leaks in your Northwood residence.",
  },

  midPageCTA: {
    eyebrow: "FAST NORTHWOOD PLUMBING ASSISTANCE",
    heading: "Dealing With a Clogged Main Drain or Mystery Leak?",
    highlightText: "Call Our Irvine Phone Line Directly.",
    description:
      "Skip the online forms and get immediate telephone triage from an experienced plumbing professional who knows Northwood's plumbing infrastructure.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing specialist",
      "Same-day emergency response for severe leaks",
      "Licensed, bonded, and insured Irvine contractors",
      "Non-destructive acoustic leak detection tools",
    ],
    image: "/images/copper-pipe-repair.jpg",
    imageAlt: "Technician soldering copper piping in a Northwood Irvine home",
  },

  localConcerns: {
    heading: "Plumbing Concerns Specific to Northwood Homes",
    subtitle:
      "Why home construction age and mature neighborhood landscaping affect plumbing performance in Northwood.",
    items: [
      {
        title: "Tree Root Intrusion in 1970s & 1980s Sewer Laterals",
        description:
          "Northwood's towering mature trees have extensive subterranean root networks that seek out moisture vapors escaping through aged sewer pipe joints.",
        causes: "Vitrified clay and older ABS sewer laterals developing joint hairline fractures over 40+ years.",
        warningSigns: [
          "Multiple fixtures backing up simultaneously",
          "Bubbling or gurgling sounds from downstairs toilets",
          "Slow drainage in both tubs and sinks at once",
        ],
        consequences:
          "Raw sewage overflowing into ground-floor bathrooms, health hazards, and expensive structural flooring damage.",
        whenToCall: "As soon as more than one fixture begins draining slowly or gurgling.",
        relatedServiceSlug: "sewer-line-repair-irvine-ca",
        relatedServiceName: "Sewer Video Inspection",
      },
      {
        title: "Aging Copper Pinhole Leaks Below Slabs",
        description:
          "Homes built in Northwood's initial development tracts feature original copper pipes buried beneath concrete foundation slabs that are now reaching the end of their design life.",
        causes: "External soil friction, hard water mineral reactions, and decades of thermal movement.",
        warningSigns: [
          "Warm spots on tile, laminate, or carpeted floors",
          "Unexplained increases on your monthly IRWD water bill",
          "Water meter flow dial spinning when all faucets are shut off",
        ],
        consequences:
          "Foundation soil erosion, moisture intrusion into drywall, mold growth, and damaged flooring.",
        whenToCall: "Immediately when your water meter dial moves continuously with all taps off.",
        relatedServiceSlug: "slab-leak-repair-irvine-ca",
        relatedServiceName: "Slab Leak Locating",
      },
      {
        title: "Water Heater Sediment Accumulation & Tank Corrosion",
        description:
          "Irvine Ranch Water District water carries 13–18 grains of dissolved calcium and magnesium per gallon, causing dense mineral scale to settle in water heater tanks.",
        causes: "High municipal mineral hardness baking onto electric elements or gas burner bottoms.",
        warningSigns: [
          "Popping, cracking, or kettle sounds from the water heater",
          "Hot water running out significantly faster than before",
          "Rusty, cloudy, or metallic-smelling hot water",
        ],
        consequences:
          "Catastrophic tank bottom rupture flooding garage or utility spaces, and premature heating failure.",
        whenToCall: "If your water heater is over 8 years old and making rumbling or popping sounds.",
        relatedServiceSlug: "water-heater-repair-irvine-ca",
        relatedServiceName: "Water Heater Flush & Replacement",
      },
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Assist Northwood Homeowners",
    subtitle: "A streamlined, four-step approach focused on rapid triage, honest pricing, and quality craftsmanship.",
    steps: [
      {
        step: "01",
        title: "Call Our Direct Line",
        description:
          "Call (949) 539-8503 to speak immediately with a knowledgeable representative who understands Irvine plumbing systems.",
        highlight: "Zero waiting queues",
      },
      {
        step: "02",
        title: "Phone Assessment & Shutoff Guidance",
        description:
          "We evaluate your symptoms, guide you through emergency water shutoff if needed, and dispatch a qualified technician.",
        highlight: "Immediate damage control",
      },
      {
        step: "03",
        title: "On-Site Diagnostic Evaluation",
        description:
          "Your plumber arrives with advanced diagnostic tools—including sewer cameras and acoustic detectors—to inspect the issue.",
        highlight: "Accurate problem locating",
      },
      {
        step: "04",
        title: "Upfront Estimate & Quality Repair",
        description:
          "You receive a clear, itemized repair plan with fixed pricing and code compliance details before any work begins.",
        highlight: "No surprise charges",
      },
    ],
  },

  emergencyGuidance: {
    heading: "Northwood Plumbing Emergency Action Guide",
    subtitle: "Essential steps to take immediately during a plumbing crisis in your Northwood home.",
    urgentSituations: [
      {
        title: "Burst Pipe Under Foundation or Inside Walls",
        description: "Water actively flooding under your slab or through baseboards can ruin flooring in minutes.",
        protocol: "Shut off your main water valve immediately near the front hose bib or garage entrance.",
        severity: "critical",
      },
      {
        title: "Main Sewer Line Backup Flooding Bathtubs",
        description: "Dangerous wastewater rising in downstairs fixtures poses immediate biohazard risks.",
        protocol: "Cease all indoor water usage immediately and call our emergency line.",
        severity: "critical",
      },
      {
        title: "Water Heater Tank Rupture Flooding Garage",
        description: "A split water heater tank can release 40 to 75 gallons of scalding water continuously.",
        protocol: "Turn off the cold water supply valve directly above the water heater tank and shut off the gas valve.",
        severity: "urgent",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In most Northwood single-family homes, the main domestic water shutoff valve is located outside near the front garden hose bib or in the garage adjacent to the water heater.",
      steps: [
        "Locate the brass gate wheel or lever-action ball valve on the main vertical pipe entering your home.",
        "Turn a ball valve lever 90 degrees perpendicular to the pipe, or turn a gate valve wheel clockwise until tight.",
        "Open a garden hose faucet to drain remaining water pressure from the household lines.",
        "Check an indoor faucet to confirm water flow has completely stopped.",
      ],
      gasWarning:
        "If you smell gas or sulfur near your water heater, evacuate all occupants immediately and call SoCalGas / 911.",
    },
  },

  pricingFactors: {
    heading: "Northwood Plumbing Pricing Factors",
    subtitle: "Clear variables that influence the cost of residential plumbing repairs in Northwood.",
    factors: [
      {
        title: "Diagnostic Equipment Required",
        description:
          "Simple drain snaking uses mechanical cables, while deep sewer camera inspections and acoustic slab leak detection require specialized diagnostic gear.",
        impact: "Precision locating avoids costly exploratory demolition of walls or concrete floors.",
      },
      {
        title: "Sewer Pipe Condition & Depth",
        description:
          "The depth of your sewer lateral and whether roots have caused pipe fractures determine whether hydro jetting or trenchless pipe relining is required.",
        impact: "Affects labor hours and equipment needed for permanent pipe restoration.",
      },
      {
        title: "Piping Material & Accessibility",
        description:
          "Slab leak repairs can be performed via spot repair or overhead PEX reroute. Overhead reroutes through attics eliminate the need to break finished floors.",
        impact: "PEX reroutes save money on expensive floor and tile restoration.",
      },
    ],
    pricingNote:
      "All technicians provide detailed written estimates before starting repairs, ensuring you make fully informed decisions.",
  },

  whyChooseUs: {
    heading: "Why Northwood Homeowners Rely on Spectrum Plumbing",
    subtitle: "A trusted local network committed to honest assessments and fast phone-first assistance.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description: "Speak directly with an experienced plumbing specialist without navigating impersonal web forms.",
        highlight: "Immediate phone dispatch",
      },
      {
        title: "Northwood Infrastructure Knowledge",
        description: "Our network knows the construction eras, piping types, and root challenges common across Northwood.",
        highlight: "Deep Irvine expertise",
      },
      {
        title: "Non-Destructive Technology",
        description: "We use acoustic sensors, thermal cameras, and sewer video equipment to protect your home from unnecessary demolition.",
        highlight: "Preserves your home",
      },
      {
        title: "Transparent, Upfront Pricing",
        description: "No hidden fees, surprise hourly rates, or high-pressure sales pitches—just clear, honest plumbing help.",
        highlight: "Written estimates upfront",
      },
    ],
  },

  coverage: {
    heading: "Serving All Neighborhoods in Northwood",
    description: "Providing residential plumbing coverage across all sectors and tracts of Northwood, Irvine.",
    subAreas: [
      "Northwood Park",
      "Northwood Pointe",
      "Canyon Edge",
      "Woodmont",
      "Park Place",
      "Meadowood",
      "Northwood Horizon",
      "Silvertree",
    ],
    landmarkBoundaries:
      "Bounded by Culver Drive, Irvine Boulevard, Jeffrey Road, and Bryan Avenue.",
    zipCodesServed: ["92620"],
  },

  nearbyLocationSlugs: ["woodbridge", "portola-springs", "great-park", "westpark"],
  relatedArticleSlugs: ["why-drains-keep-clogging", "signs-of-a-slab-leak", "water-heater-not-heating"],

  faqs: [
    {
      id: "nw-faq-1",
      question: "Why do sewer lines in Northwood frequently get blocked by tree roots?",
      answer:
        "Northwood's neighborhoods feature mature eucalyptus, sycamore, and pine trees whose extensive root systems search for moisture. Original vitrified clay and older ABS sewer laterals from the 1970s and 1980s have pipe joints that can develop microscopic separations over time, allowing root hair to enter and form dense blockages.",
    },
    {
      id: "nw-faq-2",
      question: "How can I tell if a leak is under my Northwood home's concrete slab?",
      answer:
        "The primary indicators of an under-slab leak include warm spots on flooring, the sound of water running behind walls or under floors when all taps are off, an unexplained increase in your IRWD water bill, or a continuously spinning water meter dial.",
    },
    {
      id: "nw-faq-3",
      question: "Is it better to repair a slab leak or repipe with PEX in Northwood?",
      answer:
        "If a home has experienced only one isolated slab leak, a direct spot repair or single overhead line reroute may suffice. However, if your home is over 35 years old and has experienced multiple leaks, a complete overhead PEX-A repipe through the attic is typically more cost-effective and permanently eliminates future under-slab leak risks.",
    },
    {
      id: "nw-faq-4",
      question: "How does Irvine hard water affect water heaters in Northwood?",
      answer:
        "Irvine water contains 13 to 18 grains per gallon of dissolved minerals. In Northwood water heaters, this mineral content precipitates out as calcium scale, coating heating elements and tank bottoms. This reduces energy efficiency, causes popping sounds, and can lead to premature tank failure if not flushed annually.",
    },
    {
      id: "nw-faq-5",
      question: "How do I get emergency plumbing service in Northwood?",
      answer:
        "Call our direct Irvine line at (949) 539-8503. A representative will immediately evaluate your situation, guide you through shutting off water to prevent damage, and dispatch a qualified plumbing contractor to your Northwood home.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE NORTHWOOD PLUMBING HELP",
    heading: "Speak Directly With a Northwood Plumber Now",
    highlightText: "Direct Phone Line • Upfront Estimates • Local Expertise",
    description:
      "Whether you are dealing with a sewer backup, slab leak, or water heater issue, call our Irvine team directly to get prompt, professional assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
