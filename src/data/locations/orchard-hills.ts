import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const orchardHillsLocationData: LocationPageData = {
  slug: "orchard-hills",
  name: "Orchard Hills",
  fullName: "Orchard Hills, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92602"],
  published: true,

  seo: {
    title: "Plumbing Services in Orchard Hills, Irvine | Spectrum Plumbing",
    description:
      "Luxury plumbing in Orchard Hills, Irvine. Cascading tankless water heaters, high-capacity gas lines, water filtration, and pressure regulation. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/orchard-hills/`,
    primaryKeyword: "plumber Orchard Hills Irvine",
    secondaryKeywords: [
      "plumbing services Orchard Hills Irvine CA",
      "luxury plumbing Orchard Hills",
      "tankless water heater Orchard Hills 92602",
      "gas line plumber Orchard Hills Irvine",
      "emergency plumber Orchard Hills",
    ],
    ogImage: "/images/tankless-water-heater.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN ORCHARD HILLS, IRVINE",
    heading: "Plumbing Services in Orchard Hills, Irvine, CA",
    description:
      "Seeking elite plumbing services in Orchard Hills? Connect with licensed specialists experienced in luxury gated estates, cascading tankless water heating, whole-home water filtration, and high-demand gas systems. Call our Irvine team directly at (949) 539-8503.",
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "High-capacity luxury tankless water heater installation in an Orchard Hills estate",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Orchard Hills Enclave",
        subtitle: "ZIP Code 92602",
      },
      {
        icon: "Crown",
        title: "Luxury Estate Focus",
        subtitle: "Multi-Bath & Cascading Systems",
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
      title: "Orchard Hills Specialists",
      metric: "ZIP 92602",
      description:
        "High-end plumbing maintenance and installations tailored for gated luxury residences and custom foothill estates in Orchard Hills.",
    },
    {
      icon: "Flame",
      title: "Cascading Tankless Systems",
      metric: "Multi-Unit Sizing",
      description:
        "Diagnostic servicing, descaling, and balancing for dual and triple synchronized tankless water heating configurations.",
    },
    {
      icon: "Droplets",
      title: "Estate Water Filtration",
      metric: "Whole-Home Systems",
      description:
        "Installing and maintaining high-capacity water softeners and carbon filtration to protect luxury fixtures and finishes.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Connection",
      metric: "Priority Dispatch",
      description:
        "Call directly to discuss symptoms with experienced plumbing specialists familiar with Orchard Hills estate plumbing.",
    },
  ],

  overview: {
    heading: "Estate-Grade Plumbing Care for Orchard Hills",
    paragraphs: [
      "Orchard Hills is one of Irvine's most prestigious gated communities, set against the scenic backdrop of Loma Ridge and surrounded by working avocado groves. Offering sweeping views of Orange County, the enclave features sprawling single-family estates, Mediterranean-inspired villas, and custom residences designed for luxurious, expansive living.",
      "The architectural scale of Orchard Hills properties—often featuring five or more en-suite bathrooms, gourmet kitchens with prep sinks, outdoor culinary centers, and high-flow spa showers—requires commercial-grade plumbing design. Hot water delivery relies on synchronized cascading tankless units or high-capacity recirculation loops that must be properly balanced to meet simultaneous multi-fixture demands.",
      "Additionally, the mineral hardness of Irvine municipal water (12–18 grains per gallon) poses an ongoing threat to luxury plumbing fixtures, including unlacquered brass, matte black finishes, and steam shower generators. Spectrum Plumbing Irvine connects Orchard Hills homeowners directly with certified, independent plumbing contractors experienced in high-end estate plumbing systems.",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Gated estate street with palm trees and scenic foothill views in Orchard Hills, Irvine",
    residentialContext: {
      constructionEra: "2014 – Present Gated Luxury Master Plan",
      foundationType: "Heavy-Duty Engineered Post-Tensioned Slabs",
      pipeInfrastructure: "Commercial-Grade PEX-A Manifolds & High-Capacity Gas Supply Lines",
      waterCharacteristics: "IRWD Municipal Hard Water (12–18 GPG) Requiring Whole-Home Softening",
      hoaGuidelines: "Orchard Hills Gated Community HOA Standards & Architectural Review",
    },
    localHighlights: [
      "Synchronized cascading tankless water heater flushing and recirculation loop servicing",
      "High-capacity commercial-grade water softener and multi-stage filtration systems",
      "Outdoor kitchen, gas fire pit, and pool house plumbing line maintenance",
      "Smart whole-home leak detection and automated remote shutoff valve integration",
    ],
  },

  services: {
    heading: "Core Plumbing Solutions for Orchard Hills Estates",
    subtitle: "Premium plumbing services tailored for the scale and complexity of Orchard Hills homes.",
    items: [
      {
        slug: "tankless-water-heaters-irvine-ca",
        name: "Cascading Tankless System Servicing",
        badge: "Estate Specialty",
        image: "/images/tankless-water-heater.jpg",
        shortExplanation:
          "Orchard Hills estates feature paired or triple tankless units working in tandem. We provide annual acid descaling, clean intake filters, and balance recirculation flow to ensure instant, endless hot water.",
        commonSymptoms: [
          "Temperature fluctuations during simultaneous multi-bath use",
          "Digital controllers displaying communication or ignition error codes",
          "Reduced flow rates from multi-head master shower systems",
          "Recirculation pump running continuously or making grinding noises",
        ],
        serviceLink: "/services/tankless-water-heaters-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-line-repair-irvine-ca",
        name: "High-Capacity Water Softeners & Filtration",
        badge: "Fixture Protection",
        image: "/images/water-line-main-repair.jpg",
        shortExplanation:
          "Protect luxury European fixtures, steam generators, and appliances from hard water scaling with high-grain water softening systems and whole-home catalytic carbon filtration.",
        commonSymptoms: [
          "White mineral crusting on designer faucets and showerheads",
          "Water spotting on custom glass shower enclosures",
          "Steam shower generator failing to produce adequate steam",
          "Soap scum buildup on stone and marble surfaces",
        ],
        serviceLink: "/services/water-line-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "gas-line-services-irvine-ca",
        name: "High-Demand Gas Line Plumbing",
        image: "/images/gas-line-shutoff-valve.jpg",
        shortExplanation:
          "Orchard Hills homes feature high-BTU gas appliances, outdoor pizza ovens, fire pits, and multiple tankless units. We provide gas pressure testing, leak detection, and line extensions.",
        commonSymptoms: [
          "Faint sulfur or natural gas odors near outdoor living areas",
          "Tankless water heaters locking out due to gas pressure drops",
          "Gas fire pit or BBQ burners burning with weak yellow flames",
          "Need for high-capacity gas line additions for outdoor kitchens",
        ],
        serviceLink: "/services/gas-line-services-irvine-ca/",
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Estate Drain Cleaning & Hydro Jetting",
        image: "/images/hydro-jetting-equipment.jpg",
        shortExplanation:
          "Keep long horizontal drainage runs from expansive estate floor plans clear of grease and soap buildup with professional motorized snaking and safe high-pressure hydro jetting.",
        commonSymptoms: [
          "Slow drainage across master bathroom soaking tubs and showers",
          "Kitchen prep sink and disposal draining sluggishly",
          "Gurgling sounds in downstairs powder rooms",
          "Standing water in outdoor kitchen drain basins",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "faucet-and-sink-repair-irvine-ca",
        name: "Designer Fixture & Faucet Plumbing",
        image: "/images/kitchen-sink-repair.jpg",
        shortExplanation:
          "Specialized care for high-end plumbing brands (Waterworks, Rohl, Kallista, Dornbracht). Repair thermostatic shower valves, pot fillers, and touchless luxury faucets.",
        commonSymptoms: [
          "Thermostatic shower valve failing to regulate temperature",
          "Dripping from high-arc kitchen pot fillers",
          "Low spray volume from rain showerheads due to mineral scale",
          "Sensor faucet calibration issues in guest powder rooms",
        ],
        serviceLink: "/services/faucet-and-sink-repair-irvine-ca/",
      },
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Response",
        badge: "24/7 Priority Line",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "Immediate telephone triage and rapid dispatch for estate plumbing emergencies including ruptured supply lines, gas leaks, and smart valve flood alerts.",
        commonSymptoms: [
          "High-volume water leak leaking through ceilings or floors",
          "Smart water shutoff valve alerting to active flow",
          "Gas odors near water heaters or outdoor kitchen lines",
          "Sewage backups in ground-floor luxury suites",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Symptoms in Orchard Hills",
    subtitle:
      "Identify the signs of cascading tankless scaling, gas pressure drops, and hard water damage in Orchard Hills estates.",
  },

  midPageCTA: {
    eyebrow: "DIRECT ORCHARD HILLS PHONE ASSISTANCE",
    heading: "Need High-Capacity Plumbing Care or Water Filtration?",
    highlightText: "Speak Directly With an Irvine Estate Plumbing Specialist.",
    description:
      "Avoid third-party web forms. Call our Irvine phone team directly to speak with an experienced specialist who understands Orchard Hills luxury plumbing systems.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing professional",
      "Specialized in luxury estate systems and cascading tankless units",
      "Licensed, bonded, and insured Orange County contractors",
      "Full water softener, gas line, and smart valve experience",
    ],
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "Technician inspecting plumbing system in an Orchard Hills estate",
  },

  localConcerns: {
    heading: "Specific Plumbing Concerns in Orchard Hills",
    subtitle: "Understanding how luxury home scale, high gas demands, and hard water affect Orchard Hills properties.",
    items: [
      {
        title: "Hard Water Mineral Scaling in Cascading Tankless Systems",
        description:
          "Irvine Ranch Water District water carries 12–18 grains per gallon of mineral hardness. In high-BTU cascading tankless configurations, mineral scale accumulates rapidly inside heat exchangers.",
        causes: "High continuous water heating demand combined with hard municipal water.",
        warningSigns: [
          "Water temperature fluctuating during multi-shower usage",
          "Digital controllers displaying error codes (e.g., Code 11, 12, or 29)",
          "Recirculation pump running continuously without shutting down",
        ],
        consequences:
          "Heat exchanger burnout requiring costly multi-unit replacements, energy waste, and sudden loss of hot water.",
        whenToCall: "Every 12 months for routine preventative descaling, or immediately when error codes appear.",
        relatedServiceSlug: "tankless-water-heaters-irvine-ca",
        relatedServiceName: "Tankless Descaling Service",
      },
      {
        title: "Mineral Etching & Cartridge Wear on Luxury Fixtures",
        description:
          "Orchard Hills estates feature premium unlacquered brass, matte black, and polished nickel fixtures that readily suffer finish corrosion from hard water minerals.",
        causes: "Evaporation of mineral-rich water depositing calcium and magnesium salts on delicate metal finishes.",
        warningSigns: [
          "White chalky crusting on rain heads, hand showers, and pot fillers",
          "Stiff or squeaking thermostatic valve handles",
          "Reduced flow rates from multi-function shower systems",
        ],
        consequences:
          "Permanent cosmetic etching of luxury finishes and premature failure of expensive thermostatic cartridges.",
        whenToCall: "When fixture flow decreases or when planning a whole-home water softening system.",
        relatedServiceSlug: "water-line-repair-irvine-ca",
        relatedServiceName: "Water Softeners & Filtration",
      },
      {
        title: "High-BTU Gas Line Sizing for Outdoor Living Centers",
        description:
          "Outdoor kitchens, pizza ovens, high-BTU pool heaters, and gas fire pits in Orchard Hills require properly sized gas piping to maintain adequate operating pressure.",
        causes: "Undersized gas lines or improper branch manifold design causing pressure drops during peak simultaneous use.",
        warningSigns: [
          "Tankless water heaters shutting down when pool heaters or fire pits ignite",
          "Weak or flickering yellow flames on outdoor cooking appliances",
          "Hissing sounds from gas regulators under high load",
        ],
        consequences:
          "Incomplete gas combustion, appliance lockouts, and safety shutdown hazards.",
        whenToCall: "When adding outdoor gas appliances or when appliances fail to maintain full flame.",
        relatedServiceSlug: "gas-line-services-irvine-ca",
        relatedServiceName: "Gas Line Sizing & Repair",
      },
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Assist Orchard Hills Homeowners",
    subtitle: "A streamlined, four-step approach focused on rapid triage, upfront pricing, and estate-grade craftsmanship.",
    steps: [
      {
        step: "01",
        title: "Call Our Direct Line",
        description:
          "Dial (949) 539-8503 to speak directly with an experienced representative who understands Orchard Hills luxury plumbing.",
        highlight: "Immediate telephone triage",
      },
      {
        step: "02",
        title: "Symptom Assessment & Guidance",
        description:
          "We evaluate your symptoms, explain emergency shutoff procedures if water is leaking, and dispatch an experienced technician.",
        highlight: "Damage control guidance",
      },
      {
        step: "03",
        title: "On-Site Diagnostic Testing",
        description:
          "Your plumber arrives equipped with diagnostic tools to test tankless error codes, inspect PEX lines, or clear drains.",
        highlight: "Precision diagnostics",
      },
      {
        step: "04",
        title: "Clear Estimate & Quality Repair",
        description:
          "You receive a transparent, upfront written estimate detailing repair options before any work begins.",
        highlight: "Fixed, upfront pricing",
      },
    ],
  },

  emergencyGuidance: {
    heading: "Emergency Plumbing Protocols for Orchard Hills",
    subtitle: "Actionable steps to take immediately during a plumbing emergency in your Orchard Hills estate.",
    urgentSituations: [
      {
        title: "Multi-Story Water Supply Line Rupture",
        description: "Water leaking through upper-level floors can damage luxury cabinetry, wood flooring, and ceilings below.",
        protocol: "Shut off the individual PEX manifold branch or turn off the home's main water shutoff valve immediately.",
        severity: "critical",
      },
      {
        title: "Natural Gas Smell Near Outdoor Kitchen or Pool Heater",
        description: "Natural gas accumulation poses a severe explosion and fire hazard.",
        protocol: "Turn off the gas valve on the supply line and evacuate the area immediately. Call SoCalGas / 911.",
        severity: "critical",
      },
      {
        title: "Smart Shutoff Valve High-Flow Alert",
        description: "Smart leak detector triggering an emergency shutoff alert indicating an active high-volume rupture.",
        protocol: "Confirm shutoff via your smartphone app, inspect appliance lines, and call our emergency line.",
        severity: "critical",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In Orchard Hills luxury homes, the main domestic water shutoff valve is typically located inside the garage near the water treatment loop or outside near the front courtyard gate.",
      steps: [
        "Locate the heavy-duty brass ball valve with a blue or yellow handle on the primary incoming supply line.",
        "Turn the lever 90 degrees until it is perpendicular to the pipe to shut off water to the entire estate.",
        "Alternatively, locate your garage PEX distribution manifold to shut off specific zones.",
        "Open a garden hose bib to drain residual line pressure.",
      ],
      gasWarning:
        "If you smell gas, do not operate electrical switches or phones indoors. Evacuate outside and call 911 / SoCalGas.",
    },
  },

  pricingFactors: {
    heading: "Orchard Hills Plumbing Pricing Factors",
    subtitle: "Transparent variables that shape residential plumbing service costs in Orchard Hills.",
    factors: [
      {
        title: "System Complexity & Number of Units",
        description:
          "Servicing multiple cascading tankless heaters or complex multi-loop recirculation systems requires specialized synchronization and diagnostics.",
        impact: "Multi-unit configurations require additional flush time and diagnostic calibration.",
      },
      {
        title: "High-Capacity Filtration Requirements",
        description:
          "Large estate homes require high-grain water softeners (64,000+ grains) and high-flow filtration to maintain adequate pressure across multiple simultaneous showers.",
        impact: "Commercial-grade capacity ensures continuous softened water without pressure drops.",
      },
      {
        title: "Luxury Fixture Specialization",
        description:
          "Servicing high-end European thermostatic valves, pot fillers, and custom steam generators requires brand-specific tools and factory parts.",
        impact: "Guarantees proper repair without voiding manufacturer warranties.",
      },
    ],
    pricingNote:
      "All technicians provide written estimates with fixed pricing before beginning any work, giving you complete clarity.",
  },

  whyChooseUs: {
    heading: "Why Orchard Hills Residents Choose Spectrum Plumbing",
    subtitle: "A trusted local network committed to estate-grade craftsmanship and fast phone-first assistance.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description: "Speak directly with an experienced plumbing specialist without filling out online web forms.",
        highlight: "Fast phone dispatch",
      },
      {
        title: "Estate Plumbing Experience",
        description: "Extensive experience with luxury home scale, cascading tankless systems, and designer fixtures.",
        highlight: "Luxury home expertise",
      },
      {
        title: "Factory-Certified Technicians",
        description: "Certified service for major tankless brands, high-capacity water softeners, and smart shutoff valves.",
        highlight: "Brand certified",
      },
      {
        title: "Transparent, Upfront Pricing",
        description: "Written estimates upfront with no hidden fees or surprise hourly billing.",
        highlight: "Honest pricing",
      },
    ],
  },

  coverage: {
    heading: "Serving All Enclaves in Orchard Hills",
    description: "Providing residential plumbing coverage across all gated neighborhoods of Orchard Hills, Irvine.",
    subAreas: [
      "The Groves at Orchard Hills",
      "Orchard Hills Village",
      "Bella Vista",
      "Capella",
      "Entrata",
      "Padova",
      "Vicenza",
      "Amante",
    ],
    landmarkBoundaries:
      "Bounded by Culver Drive, Portola Parkway, Orchard Hills Drive, and the Loma Ridge avocado groves.",
    zipCodesServed: ["92602"],
  },

  nearbyLocationSlugs: ["portola-springs", "northwood", "great-park", "woodbridge"],
  relatedArticleSlugs: ["water-heater-not-heating", "irvine-hard-water-plumbing", "signs-of-a-slab-leak"],

  faqs: [
    {
      id: "oh-faq-1",
      question: "How do cascading tankless water heaters work in Orchard Hills homes?",
      answer:
        "Large Orchard Hills estates feature two or three synchronized tankless water heaters connected via a communication cable. When one shower runs, one unit fires. As additional showers or appliances activate, the secondary and tertiary units ignite automatically to supply endless hot water without temperature drops.",
    },
    {
      id: "oh-faq-2",
      question: "Why is whole-home water softening essential in Orchard Hills?",
      answer:
        "Irvine Ranch Water District tap water carries 12 to 18 grains per gallon of mineral hardness. In Orchard Hills estates, this scale damages expensive thermostatic shower valves, clogs steam generators, and leaves mineral etching on luxury fixtures. A high-capacity water softener removes these minerals before they enter home plumbing lines.",
    },
    {
      id: "oh-faq-3",
      question: "Can plumbers service outdoor kitchen gas lines in Orchard Hills?",
      answer:
        "Yes. Licensed plumbing contractors perform gas pressure testing, line extensions, and shutoff valve installations for outdoor kitchens, high-BTU gas barbecues, pizza ovens, fire pits, and pool heaters compliant with California plumbing codes.",
    },
    {
      id: "oh-faq-4",
      question: "How often should luxury tankless water heaters be descaled in Orchard Hills?",
      answer:
        "Cascading tankless water heaters in Orchard Hills should be descaled and flushed once every 12 months. Regular acid descaling removes calcium scale from heat exchanger coils, preserves energy efficiency, and prevents sudden error code shutdowns.",
    },
    {
      id: "oh-faq-5",
      question: "How do I schedule priority plumbing service in Orchard Hills?",
      answer:
        "Call our direct Irvine line at (949) 539-8503. A representative will evaluate your plumbing symptoms, provide emergency shutoff guidance if needed, and dispatch a licensed local plumbing technician to your Orchard Hills estate.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE ORCHARD HILLS PLUMBING HELP",
    heading: "Speak With an Orchard Hills Plumber Today",
    highlightText: "Direct Phone Line • Upfront Pricing • Estate Expertise",
    description:
      "Whether you need cascading tankless maintenance, water softener service, or emergency plumbing triage in Orchard Hills, call our Irvine team directly for fast assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
