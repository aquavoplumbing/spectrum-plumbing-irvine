import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const greatParkLocationData: LocationPageData = {
  slug: "great-park",
  name: "Great Park Neighborhoods",
  fullName: "Great Park Neighborhoods, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92618"],
  published: true,

  seo: {
    title: "Plumbing Services in Great Park, Irvine | Spectrum Plumbing",
    description:
      "Expert plumbing in Great Park Neighborhoods, Irvine. Tankless water heater service, whole-home water filtration, smart leak detection, and drain cleaning. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/great-park/`,
    primaryKeyword: "plumber Great Park Irvine",
    secondaryKeywords: [
      "plumbing services Great Park Irvine CA",
      "tankless water heater Great Park",
      "water filtration Great Park Irvine 92618",
      "smart leak detector plumber Irvine",
      "emergency plumber Great Park",
    ],
    ogImage: "/images/tankless-water-heater.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN GREAT PARK, IRVINE",
    heading: "Plumbing Services in Great Park Neighborhoods, Irvine",
    description:
      "Looking for expert plumbing solutions in Great Park Neighborhoods? Discover specialized support for modern smart homes, tankless water heater flushing, whole-home water filtration systems, and rapid emergency triage. Call our Irvine team directly at (949) 539-8503.",
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "Modern smart plumbing systems and water filtration in Great Park Neighborhoods, Irvine",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Great Park Focus",
        subtitle: "ZIP Code 92618",
      },
      {
        icon: "Cpu",
        title: "Smart Home Plumbing",
        subtitle: "Filtration & Leak Sensors",
      },
      {
        icon: "PhoneCall",
        title: "Direct Phone Line",
        subtitle: "Immediate Phone Triage",
      },
    ],
  },

  highlights: [
    {
      icon: "MapPin",
      title: "Great Park Specialists",
      metric: "ZIP 92618",
      description:
        "Tailored plumbing maintenance and diagnostic services for contemporary smart homes, modern flats, and multi-story residences in Great Park.",
    },
    {
      icon: "Droplets",
      title: "Whole-Home Water Filtration",
      metric: "Hardness & Chlorine",
      description:
        "Installing and servicing advanced water softeners and carbon filtration systems to protect luxury appliances and fixtures.",
    },
    {
      icon: "Flame",
      title: "Tankless Water Heater Care",
      metric: "Annual Descaling",
      description:
        "Precision descaling and diagnostic service for Navien, Noritz, Rinnai, and Rheem on-demand water heating systems.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Connection",
      metric: "Zero Queues",
      description:
        "Call our direct phone line anytime to speak with an experienced specialist who understands modern Great Park plumbing.",
    },
  ],

  overview: {
    heading: "Smart, Modern Plumbing for Great Park Residences",
    paragraphs: [
      "Great Park Neighborhoods is Irvine's largest and most forward-thinking master-planned community. Developed across the former historic Marine Corps Air Station (MCAS) El Toro grounds, this visionary development features cutting-edge contemporary architecture, multi-story open-concept living, and extensive green spaces connected to the Orange County Great Park.",
      "Homes in Great Park Neighborhoods represent the newest generation of Irvine construction, featuring advanced PEX-A plumbing networks, integrated smart automatic water shutoff valves (such as Flo by Moen and Phyn Plus), solar-assisted water heating, and high-efficiency tankless units. Because these homes feature state-of-the-art systems, servicing them requires specialized technical knowledge rather than old-fashioned trial-and-error plumbing.",
      "The mineral-rich municipal water supplied by Irvine Ranch Water District (IRWD) carries 12–18 grains per gallon of dissolved hardness. Without proper filtration and regular tankless maintenance, mineral scaling can reduce water flow through luxury multi-head showers, trigger error codes on tankless heaters, and leave cloudy mineral deposits on glass enclosures. Spectrum Plumbing Irvine connects Great Park homeowners directly with licensed, tech-forward plumbing specialists.",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Modern architecture and landscaped boulevards in Great Park Neighborhoods, Irvine",
    residentialContext: {
      constructionEra: "2013 – Present Ultra-Modern Master-Planned Development",
      foundationType: "Post-Tensioned Engineered Concrete Slab Foundations",
      pipeInfrastructure: "Uponor PEX-A / PEX-B Tubing with Modern PVC/ABS Multi-Story Drainage",
      waterCharacteristics: "IRWD Municipal Hard Water (12–18 GPG) with High Mineral Content",
      hoaGuidelines: "Great Park Neighborhoods Community Association Guidelines",
    },
    localHighlights: [
      "Annual tankless water heater flushing, descaling, and recirculation loop servicing",
      "Whole-home water softener and multi-stage filtration system installations",
      "Smart leak detection sensor installation and automatic main valve integration",
      "Multi-story drain snaking and high-performance garbage disposal installations",
    ],
  },

  services: {
    heading: "Core Plumbing Solutions for Great Park Homes",
    subtitle: "Specialized plumbing services designed for modern Great Park smart homes and townhouses.",
    items: [
      {
        slug: "tankless-water-heaters-irvine-ca",
        name: "Tankless Water Heater Service & Descaling",
        badge: "Essential Great Park Care",
        image: "/images/tankless-water-heater.jpg",
        shortExplanation:
          "Irvine's hard water coats tankless heat exchangers with calcium scale. We provide annual acid descaling, clean intake filters, and calibrate digital recirculation timers for consistent hot water.",
        commonSymptoms: [
          "Tankless display showing error codes (Codes 11, 12, or 29)",
          "Shower temperature suddenly fluctuating cold",
          "Reduced hot water pressure compared to cold taps",
          "Unit has not been descaled in over 12 months",
        ],
        serviceLink: "/services/tankless-water-heaters-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-line-repair-irvine-ca",
        name: "Whole-Home Water Softeners & Filtration",
        badge: "Water Quality Protection",
        image: "/images/water-line-main-repair.jpg",
        shortExplanation:
          "Protect your luxury plumbing fixtures, appliances, and skin from Irvine's hard water with salt-based or salt-free water softening systems connected directly to your garage pre-plumbed loop.",
        commonSymptoms: [
          "White chalky mineral crust on matte black or chrome faucets",
          "Soap scum buildup on glass shower enclosures",
          "Stiff laundry and dry skin after showering",
          "Cloudy mineral spots on glassware from the dishwasher",
        ],
        serviceLink: "/services/water-line-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "leak-detection-irvine-ca",
        name: "Smart Leak Detection & Shutoff Valves",
        image: "/images/leak-detection-acoustic.jpg",
        shortExplanation:
          "Integrate smart flow monitors like Flo by Moen or Phyn Plus onto your main water supply line. Receive real-time smartphone alerts and automatic micro-leak shutoff protection.",
        commonSymptoms: [
          "Smart leak detector triggering continuous micro-leak warnings",
          "Unexplained water meter usage while on vacation",
          "Desire for automated insurance-compliant leak shutoff protection",
          "Sensor communication errors or valve calibration issues",
        ],
        serviceLink: "/services/leak-detection-irvine-ca/",
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Multi-Story Drain Cleaning",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Multi-story floor plans in Great Park feature complex vertical drain stacks. We use professional motorized snaking to clear clogs without damaging modern ABS or PVC piping.",
        commonSymptoms: [
          "Slow-draining master bath sinks and walk-in shower pans",
          "Kitchen garbage disposal backing up or smelling foul",
          "Gurgling sounds in downstairs plumbing fixtures",
          "Upstairs laundry standpipe overflowing during spin cycle",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "garbage-disposal-repair-irvine-ca",
        name: "Gourmet Garbage Disposal Service",
        image: "/images/garbage-disposal-unit.jpg",
        shortExplanation:
          "Service and install high-horsepower sound-insulated garbage disposals suited for high-use open-concept kitchens in Great Park residences.",
        commonSymptoms: [
          "Disposal humming without rotating when switched on",
          "Water dripping from the lower motor seal under the sink",
          "Frequent resetting required via the bottom red button",
          "Slow grinding performance and persistent drain odors",
        ],
        serviceLink: "/services/garbage-disposal-repair-irvine-ca/",
      },
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Response",
        badge: "24/7 Phone Line",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "For sudden supply line ruptures, overflowing toilets, or failed emergency shutoff valves, call our direct line to connect with an experienced technician for immediate assistance.",
        commonSymptoms: [
          "Water actively leaking through second-story ceilings",
          "Sewage backing up into ground-floor fixtures",
          "Smart valve alert indicating high-volume water flow",
          "Gas odors near tankless water heaters",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Symptoms in Great Park",
    subtitle:
      "Recognize the signs of hard water scaling, tankless error codes, and smart valve alerts in Great Park homes.",
  },

  midPageCTA: {
    eyebrow: "DIRECT GREAT PARK PHONE ASSISTANCE",
    heading: "Need Modern Plumbing Care or Tankless Descaling?",
    highlightText: "Speak Directly With an Irvine Plumbing Specialist.",
    description:
      "Avoid automated web forms and waiting for callbacks. Call our Irvine telephone dispatch line now to discuss your symptoms and coordinate prompt, professional service.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing professional",
      "Factory-certified tankless water heater specialists",
      "Licensed and insured Orange County contractors",
      "Full water softener and smart leak sensor experience",
    ],
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "Plumbing technician servicing tankless water heater in Great Park Irvine",
  },

  localConcerns: {
    heading: "Specific Plumbing Concerns in Great Park Neighborhoods",
    subtitle: "Understanding how hard water minerals and modern systems interact in Great Park homes.",
    items: [
      {
        title: "Rapid Mineral Scaling on Tankless Heat Exchangers",
        description:
          "Irvine Ranch Water District water carries 12–18 grains per gallon of dissolved minerals. In high-efficiency tankless water heaters, this mineral content creates hard calcium scale inside narrow heat exchanger tubes.",
        causes: "High municipal mineral hardness baking onto copper heat exchangers under intense gas burner heat.",
        warningSigns: [
          "Digital controller flashing error codes (Code 11, 12, or 29)",
          "Shower water going cold after several minutes of use",
          "Noticeable decline in hot water flow rate",
        ],
        consequences:
          "Heat exchanger burnout requiring complete unit replacement, high energy bills, and voided warranties.",
        whenToCall: "Every 12 months for routine flushing, or immediately when error codes appear.",
        relatedServiceSlug: "tankless-water-heaters-irvine-ca",
        relatedServiceName: "Tankless Descaling Service",
      },
      {
        title: "Hard Water Mineral Damage to Designer Fixtures",
        description:
          "Great Park homes feature luxury matte black, brushed brass, and polished chrome plumbing fixtures that readily show white mineral buildup and suffer internal cartridge damage.",
        causes: "Evaporation of mineral-rich IRWD water leaving calcium and magnesium carbonate crystals behind.",
        warningSigns: [
          "White crusting around faucet aerators and spray nozzles",
          "Stiff, sticking faucet handles and shower diverters",
          "Restricted flow from multi-function rain showerheads",
        ],
        consequences:
          "Permanent finish corrosion, leaking ceramic cartridges, and cloudy etched shower doors.",
        whenToCall: "When fixture flow decreases or when planning a whole-home water softening system.",
        relatedServiceSlug: "water-line-repair-irvine-ca",
        relatedServiceName: "Water Softeners & Filtration",
      },
      {
        title: "Multi-Story Stack Drainage & Venting Issues",
        description:
          "Contemporary three-story homes and urban townhouses in Great Park feature tall vertical drainage stacks that require balanced atmospheric venting to prevent trap siphoning.",
        causes: "Blocked roof vent terminations or improper fixture drainage transitions.",
        warningSigns: [
          "Gurgling sounds in lower sinks when upper showers drain",
          "Sewer gas smells in top-floor bathrooms",
          "Slow drainage in master suite double sinks",
        ],
        consequences:
          "Sewer gas entering living spaces, trap water loss, and recurring drain backups.",
        whenToCall: "Whenever gurgling or sewer odors occur in upstairs or downstairs bathrooms.",
        relatedServiceSlug: "drain-cleaning-irvine-ca",
        relatedServiceName: "Multi-Story Drain Snaking",
      },
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Assist Great Park Homeowners",
    subtitle: "A streamlined, four-step approach focused on rapid triage, upfront pricing, and quality craftsmanship.",
    steps: [
      {
        step: "01",
        title: "Call Our Direct Line",
        description:
          "Dial (949) 539-8503 to speak directly with an experienced representative who understands Great Park smart plumbing.",
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
    heading: "Emergency Plumbing Protocols for Great Park",
    subtitle: "Actionable steps to take immediately during a plumbing emergency in your Great Park residence.",
    urgentSituations: [
      {
        title: "Upstairs Water Leak Penetrating Lower Floor Ceilings",
        description: "Water leaking through multi-story ceilings can cause major drywall, insulation, and flooring damage.",
        protocol: "Shut off the local fixture angle stop or immediately turn off your main water shutoff valve.",
        severity: "critical",
      },
      {
        title: "Smart Shutoff Valve Micro-Leak Alarm",
        description: "Flo by Moen or Phyn detecting continuous water flow while no fixtures are operating.",
        protocol: "Verify all toilets and irrigation are off, inspect appliance supply lines, and call our emergency line.",
        severity: "urgent",
      },
      {
        title: "Gas Smell Near Tankless Water Heater in Garage",
        description: "Natural gas accumulation poses a serious fire and explosion hazard.",
        protocol: "Turn off the yellow gas lever on the pipe entering the tankless unit and evacuate outside immediately.",
        severity: "critical",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In Great Park homes, the main domestic water shutoff valve is located inside the garage near the tankless water heater, or outside near the front courtyard hose bib.",
      steps: [
        "Locate the brass ball valve with a blue or yellow lever handle on the main incoming water line.",
        "Turn the lever 90 degrees until it is perpendicular to the pipe to stop water flow completely.",
        "If you have a smart valve (Flo by Moen / Phyn), you can also trigger shutoff via your smartphone app.",
        "Open a garden hose bib to drain residual pressure from your home's water lines.",
      ],
      gasWarning:
        "If you smell natural gas, do not operate electrical switches. Evacuate immediately and call SoCalGas / 911.",
    },
  },

  pricingFactors: {
    heading: "Great Park Plumbing Pricing Factors",
    subtitle: "Transparent variables that shape residential plumbing service costs in Great Park.",
    factors: [
      {
        title: "Tankless Water Heater Model & Scope",
        description:
          "Routine annual flushing with food-grade descaling solution is standard, while component repairs (heat exchangers, flow sensors, circuit boards) involve specialized factory parts.",
        impact: "Annual preventative maintenance prevents costly major component replacements.",
      },
      {
        title: "Filtration System Capacity & Pre-Plumbing",
        description:
          "Most Great Park homes feature pre-plumbed garage water softener loops, making water filtration installations straightforward and cost-effective.",
        impact: "Pre-plumbed loops reduce installation labor and material requirements.",
      },
      {
        title: "Multi-Story Floor Plan Accessibility",
        description:
          "Two- and three-story homes in Great Park may require specialized access equipment or ceiling access panels for vertical drain line repairs.",
        impact: "Determines labor requirements and safety measures for multi-story plumbing work.",
      },
    ],
    pricingNote:
      "All technicians provide written estimates with fixed pricing before beginning any work, giving you complete clarity.",
  },

  whyChooseUs: {
    heading: "Why Great Park Residents Choose Spectrum Plumbing",
    subtitle: "A trusted local network committed to modern plumbing expertise and fast phone-first assistance.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description: "Speak directly with an experienced plumbing specialist without filling out online web forms.",
        highlight: "Fast phone dispatch",
      },
      {
        title: "Modern Plumbing Expertise",
        description: "Extensive experience with tankless systems, PEX manifolds, and modern building codes.",
        highlight: "Contemporary knowledge",
      },
      {
        title: "Smart System Integration",
        description: "Familiarity with smart leak detection valves (Flo by Moen, Phyn) and whole-home filtration.",
        highlight: "Smart home ready",
      },
      {
        title: "Transparent, Upfront Pricing",
        description: "Written estimates upfront with no hidden fees or surprise hourly billing.",
        highlight: "Honest pricing",
      },
    ],
  },

  coverage: {
    heading: "Serving All Neighborhoods in Great Park",
    description: "Providing residential plumbing coverage across all enclaves and districts of Great Park Neighborhoods, Irvine.",
    subAreas: [
      "Pavilion Park",
      "Beacon Park",
      "Parasol Park",
      "Cadence Park",
      "Novel Park",
      "Rise Park",
      "Solis Park",
      "Luna Park Area",
    ],
    landmarkBoundaries:
      "Bounded by Irvine Boulevard, Marine Way, Ridge Valley, and Alton Parkway.",
    zipCodesServed: ["92618"],
  },

  nearbyLocationSlugs: ["portola-springs", "northwood", "cypress-village", "woodbridge"],
  relatedArticleSlugs: ["water-heater-not-heating", "irvine-hard-water-plumbing", "why-drains-keep-clogging"],

  faqs: [
    {
      id: "gp-faq-1",
      question: "Why does my Great Park tankless water heater show error codes?",
      answer:
        "The most common cause of error codes on Great Park tankless water heaters (such as Codes 11, 12, or 29) is mineral scale buildup inside the heat exchanger coils from hard IRWD water. When scale impedes heat transfer, the unit triggers safety shutdowns. Annual descaling clears this mineral buildup and restores normal operation.",
    },
    {
      id: "gp-faq-2",
      question: "Do homes in Great Park have pre-plumbed water softener loops?",
      answer:
        "Yes. Nearly all homes constructed in Great Park Neighborhoods were built with a dedicated water softener loop and drain connection in the garage, making whole-home water softener and filtration system installation straightforward and clean.",
    },
    {
      id: "gp-faq-3",
      question: "Can plumbers integrate smart leak shutoff valves in Great Park homes?",
      answer:
        "Yes. Licensed plumbers can install automatic smart shutoff valves like Flo by Moen or Phyn Plus onto your main water supply line. These devices monitor water pressure, flow rates, and ambient temperature, alerting your smartphone and automatically shutting off water if a catastrophic leak occurs.",
    },
    {
      id: "gp-faq-4",
      question: "How do I clear a clogged shower drain in a multi-story Great Park home?",
      answer:
        "Avoid using caustic chemical drain openers, which can damage PEX or ABS pipe fittings and fail to clear heavy hair clogs. A professional motorized snake or mechanical hair clearing tool clears the obstruction safely without chemical fumes or pipe damage.",
    },
    {
      id: "gp-faq-5",
      question: "How do I get plumbing help in Great Park Neighborhoods?",
      answer:
        "Call our direct Irvine line at (949) 539-8503. A representative will immediately evaluate your plumbing symptoms, provide emergency shutoff guidance if needed, and dispatch a licensed local plumbing technician to your Great Park home.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE GREAT PARK PLUMBING HELP",
    heading: "Speak With a Great Park Plumber Today",
    highlightText: "Direct Phone Line • Upfront Pricing • Local Expertise",
    description:
      "Whether you need tankless water heater service, water softener installation, or emergency plumbing triage in Great Park, call our Irvine team directly for fast assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
