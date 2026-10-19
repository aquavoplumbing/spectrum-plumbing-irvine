import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const portolaSpringsLocationData: LocationPageData = {
  slug: "portola-springs",
  name: "Portola Springs",
  fullName: "Portola Springs, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92618"],
  published: true,

  seo: {
    title: "Plumbing Services in Portola Springs, Irvine | Spectrum Plumbing",
    description:
      "Expert plumbing in Portola Springs, Irvine. Tankless water heater flushing, PEX piping repair, water softener loops, and drain cleaning. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/portola-springs/`,
    primaryKeyword: "plumber Portola Springs Irvine",
    secondaryKeywords: [
      "plumbing services Portola Springs Irvine CA",
      "tankless water heater repair Portola Springs",
      "PEX plumbing Portola Springs 92618",
      "water softener installation Portola Springs",
      "emergency plumber Portola Springs",
    ],
    ogImage: "/images/tankless-water-heater.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN PORTOLA SPRINGS, IRVINE",
    heading: "Plumbing Services in Portola Springs, Irvine, CA",
    description:
      "Looking for professional plumbing care in Portola Springs? Get specialized assistance for tankless water heater maintenance, PEX piping systems, water filtration, and drain cleaning. Call our direct Irvine line at (949) 539-8503 for fast telephone triage.",
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "High-efficiency tankless water heater and PEX manifold in a Portola Springs home",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Portola Springs Focus",
        subtitle: "ZIP Code 92618",
      },
      {
        icon: "Flame",
        title: "Tankless Systems",
        subtitle: "Descaling & Recirculation",
      },
      {
        icon: "PhoneCall",
        title: "Direct Phone Line",
        subtitle: "Fast Telephone Triage",
      },
    ],
  },

  highlights: [
    {
      icon: "MapPin",
      title: "Portola Springs Specialists",
      metric: "ZIP 92618",
      description:
        "Modern plumbing maintenance and diagnostics for contemporary single-family residences, courtyard flats, and townhomes across Portola Springs.",
    },
    {
      icon: "Flame",
      title: "Tankless Water Heater Care",
      metric: "Annual Descaling",
      description:
        "Specialized flushing, descaling, and error code troubleshooting for high-efficiency on-demand water heaters.",
    },
    {
      icon: "Activity",
      title: "PEX Piping & Manifold Diagnostics",
      metric: "Modern Systems",
      description:
        "Inspecting and balancing multi-port PEX distribution manifolds and dedicated hot water recirculation loops.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Connection",
      metric: "No Online Forms",
      description:
        "Connect directly with experienced local plumbing contractors who understand modern Portola Springs construction.",
    },
  ],

  overview: {
    heading: "Modern Plumbing Solutions for Portola Springs Residences",
    paragraphs: [
      "Portola Springs is a premier modern foothill village situated in northern Irvine along the slopes of the Loma Ridge. Developed primarily from the mid-2000s through the 2020s, the community features energy-efficient single-family homes, luxury courtyard villas, and townhomes designed to meet California's stringent Title 24 environmental and building standards.",
      "Unlike older Irvine villages with 40-year-old underground copper lines, Portola Springs homes are equipped with modern cross-linked polyethylene (PEX) piping, central distribution manifolds, and high-efficiency tankless gas water heaters with dedicated recirculation loops. While PEX is impervious to pinhole corrosion from soil chemistry, modern systems present their own specialized maintenance needs.",
      "Because Irvine Ranch Water District (IRWD) tap water carries high mineral hardness (12–18 grains per gallon), tankless water heaters in Portola Springs require annual descaling to prevent calcium deposits from clogging compact heat exchangers and triggering error shutdowns. Spectrum Plumbing Irvine connects Portola Springs homeowners directly with licensed, independent plumbing specialists experienced in modern residential plumbing technology.",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Contemporary hillside neighborhood street in Portola Springs, Irvine",
    residentialContext: {
      constructionEra: "2006 – Present Contemporary Foothill Development",
      foundationType: "Post-Tensioned Concrete Slab Foundations",
      pipeInfrastructure: "PEX-A / PEX-B Supply Tubing with Multi-Port Manifolds & PVC/ABS Drainage",
      waterCharacteristics: "IRWD Hard Municipal Water (12–18 GPG) Requiring Annual Descaling",
      hoaGuidelines: "Portola Springs Master Community Association Guidelines",
    },
    localHighlights: [
      "Annual tankless water heater flushing, descaling, and error code diagnostics",
      "PEX manifold pressure balancing and recirculation pump maintenance",
      "Whole-home water softener loop installations and filtration systems",
      "Smart automatic water shutoff valve integration (Flo by Moen / Phyn)",
    ],
  },

  services: {
    heading: "Core Plumbing Services for Portola Springs Homes",
    subtitle: "Specialized plumbing maintenance and diagnostics for modern Portola Springs residences.",
    items: [
      {
        slug: "tankless-water-heaters-irvine-ca",
        name: "Tankless Water Heater Maintenance",
        badge: "Essential Modern Service",
        image: "/images/tankless-water-heater.jpg",
        shortExplanation:
          "Hard water scale accumulates rapidly on compact tankless heat exchangers. We connect you with factory-trained technicians who perform annual acid descaling, clean flame sensors, and clear error codes.",
        commonSymptoms: [
          "Tankless unit shutting off during mid-shower",
          "Error codes appearing on the digital wall controller",
          "Water temperature fluctuating between hot and cold",
          "Unit has not been descaled in over 12 months",
        ],
        serviceLink: "/services/tankless-water-heaters-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "pipe-repair-and-repiping-irvine-ca",
        name: "PEX Piping & Manifold Service",
        badge: "PEX Specialist",
        image: "/images/pipe-repiping-copper.jpg",
        shortExplanation:
          "Diagnose and repair leaks in modern PEX tubing, crimp connections, multi-port manifold valves, and hot water recirculation loops without unnecessary drywall demolition.",
        commonSymptoms: [
          "Dampness around the central manifold access panel",
          "Loss of water pressure in a specific bathroom branch line",
          "Recirculation pump running continuously or making noise",
          "Clicking or vibrating sounds in walls during water usage",
        ],
        serviceLink: "/services/pipe-repair-and-repiping-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Kitchen & Bath Drain Cleaning",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Modern multi-story Portola Springs homes require careful drain clearing. We use safe motorized snaking and eco-friendly methods that protect modern ABS and PVC drainage systems.",
        commonSymptoms: [
          "Slow drainage in master bathroom double sinks",
          "Garbage disposal draining slowly with foul odor",
          "Standing water in curbless shower pans",
          "Gurgling sounds from upstairs laundry standpipes",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "garbage-disposal-repair-irvine-ca",
        name: "Garbage Disposal Repair & Upgrades",
        image: "/images/garbage-disposal-unit.jpg",
        shortExplanation:
          "Clear tough jams, replace worn impellers, or upgrade to high-horsepower sound-insulated disposals designed for modern gourmet kitchens in Portola Springs.",
        commonSymptoms: [
          "Disposal humming without spinning when turned on",
          "Water leaking from the bottom motor housing under the sink",
          "Frequent circuit breaker trips during disposal use",
          "Slow grinding performance and persistent food odors",
        ],
        serviceLink: "/services/garbage-disposal-repair-irvine-ca/",
      },
      {
        slug: "faucet-and-sink-repair-irvine-ca",
        name: "Luxury Faucet & Fixture Plumbing",
        image: "/images/kitchen-sink-repair.jpg",
        shortExplanation:
          "Repair and install modern pull-down kitchen faucets, touchless sensors, multi-head shower valves, and wall-mounted lavatory fixtures common in Portola Springs.",
        commonSymptoms: [
          "Touchless sensor faucet failing to activate or shut off",
          "Dripping from pulldown spray head or swivel base",
          "Low spray pressure from calcified aerators",
          "Loose or rocking bathroom faucets",
        ],
        serviceLink: "/services/faucet-and-sink-repair-irvine-ca/",
      },
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Response",
        badge: "24/7 Phone Triage",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "For sudden supply line ruptures, overflowing toilets, or failed emergency shutoff valves, call our direct line to connect with an experienced technician for immediate assistance.",
        commonSymptoms: [
          "Water spraying from appliance lines or manifold valves",
          "Active leak leaking through second-floor ceilings",
          "Failed main water shutoff valve during a leak",
          "Gas odors near tankless water heaters",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Symptoms in Portola Springs",
    subtitle:
      "Recognize the signs of tankless water heater scaling, PEX manifold pressure issues, and drain clogs.",
  },

  midPageCTA: {
    eyebrow: "DIRECT PORTOLA SPRINGS PHONE ASSISTANCE",
    heading: "Need Tankless Maintenance or PEX Plumbing Help?",
    highlightText: "Speak With an Irvine Plumbing Specialist Today.",
    description:
      "Skip the web forms and speak directly with an experienced professional who understands modern Portola Springs residential plumbing systems.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing specialist",
      "Factory-trained tankless water heater technicians",
      "Licensed and insured Orange County contractors",
      "Full PEX manifold and water softener loop experience",
    ],
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "Technician descaling tankless water heater in Portola Springs Irvine",
  },

  localConcerns: {
    heading: "Specific Plumbing Concerns in Portola Springs",
    subtitle: "Understanding how hard water and modern plumbing configurations affect Portola Springs homes.",
    items: [
      {
        title: "Hard Water Mineral Scale in Tankless Water Heaters",
        description:
          "Irvine Ranch Water District water carries 12–18 grains of dissolved calcium and magnesium per gallon. In compact tankless heat exchangers, this scale bakes onto copper coils rapidly.",
        causes: "High mineral hardness combined with intense instantaneous heat exchange.",
        warningSigns: [
          "Error codes on the digital controller (e.g., Code 11, 12, or 29)",
          "Water temperature fluctuating from hot to cold during showers",
          "Reduced hot water flow rate compared to cold water flow",
        ],
        consequences:
          "Heat exchanger overheating, permanent coil burnout, and voided manufacturer warranties.",
        whenToCall: "Every 12 months for routine descaling, or immediately upon error code display.",
        relatedServiceSlug: "tankless-water-heaters-irvine-ca",
        relatedServiceName: "Tankless Descaling Service",
      },
      {
        title: "PEX Manifold & Recirculation Loop Balancing",
        description:
          "Modern multi-story homes in Portola Springs feature dedicated hot water recirculation loops and multi-port PEX manifolds that require proper pressure calibration.",
        causes: "Recirculation check valve failure or manifold balance valve misalignment.",
        warningSigns: [
          "Waiting several minutes for hot water at upstairs bathrooms",
          "Recirculation pump humming continuously without shutting off",
          "Cold water taps running warm due to thermal cross-bleeding",
        ],
        consequences:
          "Excessive energy waste, premature pump failure, and frustration with delayed hot water delivery.",
        whenToCall: "If hot water takes noticeably longer to arrive or cold taps run lukewarm.",
        relatedServiceSlug: "pipe-repair-and-repiping-irvine-ca",
        relatedServiceName: "PEX System Balancing",
      },
      {
        title: "High Hardness Scaling on Luxury Kitchen & Bath Fixtures",
        description:
          "Modern designer faucets, rain showerheads, and glass shower doors in Portola Springs accumulate stubborn white calcium deposits.",
        causes: "Dissolved mineral salts evaporating on high-finish chrome, matte black, and brass fixtures.",
        warningSigns: [
          "White chalky residue clogging spray nozzles and aerators",
          "Stiff or squeaking faucet handles during operation",
          "Reduced flow from multifunction hand showers",
        ],
        consequences:
          "Permanent etching on luxury fixture finishes and damaged internal ceramic disc cartridges.",
        whenToCall: "When fixture flow is restricted or when considering a whole-home water softener.",
        relatedServiceSlug: "faucet-and-sink-repair-irvine-ca",
        relatedServiceName: "Water Softener & Filtration",
      },
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Serve Portola Springs Residents",
    subtitle: "A direct, phone-first approach focused on fast triage, upfront pricing, and quality workmanship.",
    steps: [
      {
        step: "01",
        title: "Call Our Direct Line",
        description:
          "Dial (949) 539-8503 to speak directly with an experienced representative who understands modern Irvine plumbing systems.",
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
          "Your plumber arrives equipped with diagnostic tools to test tankless error codes, check PEX lines, or clear drains.",
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
    heading: "Emergency Plumbing Protocols for Portola Springs",
    subtitle: "Actionable steps to take immediately during a plumbing emergency in your Portola Springs residence.",
    urgentSituations: [
      {
        title: "PEX Manifold or Supply Hose Rupture",
        description: "Pressurized water escaping from an upstairs fixture can quickly damage ceilings and walls below.",
        protocol: "Shut off the individual manifold branch valve or turn off the home's main water shutoff valve.",
        severity: "critical",
      },
      {
        title: "Tankless Water Heater Gas Error or Odor",
        description: "Gas smells or ignition failure codes pose potential safety hazards.",
        protocol: "Turn off the yellow gas cock handle directly below the tankless unit and call SoCalGas / 911 if gas is smelled.",
        severity: "critical",
      },
      {
        title: "Upstairs Toilet Overflow Penetrating Floor",
        description: "Water overflowing from a second-floor toilet can quickly seep through ceiling drywall.",
        protocol: "Turn the chrome oval shutoff valve behind the toilet clockwise until tight immediately.",
        severity: "urgent",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In Portola Springs modern homes, the main domestic water shutoff valve is typically located inside the garage near the tankless water heater or outside near the front courtyard hose bib.",
      steps: [
        "Locate the brass ball valve with a blue or yellow lever handle on the main incoming water line.",
        "Turn the lever 90 degrees until it is perpendicular to the pipe to stop water flow.",
        "Alternatively, if a leak is isolated to one fixture, locate the PEX distribution manifold in the garage or laundry room and turn off that branch.",
        "Check a bathroom faucet to verify that water flow has stopped completely.",
      ],
      gasWarning:
        "If you smell natural gas near your tankless unit, evacuate immediately and call SoCalGas / 911 from outside.",
    },
  },

  pricingFactors: {
    heading: "Portola Springs Plumbing Pricing Factors",
    subtitle: "Clear variables that influence the cost of modern residential plumbing services in Portola Springs.",
    factors: [
      {
        title: "Tankless Water Heater Scope & Parts",
        description:
          "Routine annual flushing with food-grade descaling solution is standard, while component repairs (heat exchangers, flow sensors, circuit boards) involve specialized factory parts.",
        impact: "Annual preventative maintenance prevents costly major component replacements.",
      },
      {
        title: "PEX Access & Manifold Configuration",
        description:
          "Homes with easily accessible central manifolds require minimal labor, while custom multi-zone loops or concealed attic runs require more diagnostic time.",
        impact: "Affects labor hours needed to isolate and repair piping issues.",
      },
      {
        title: "Water Filtration & Softener Integration",
        description:
          "Installing a whole-home water softener requires connecting to existing pre-plumbed loops, verifying drain access, and setting up bypass valves.",
        impact: "Pre-plumbed loops reduce installation labor compared to retrofitting.",
      },
    ],
    pricingNote:
      "All technicians provide written estimates with fixed pricing before beginning any work, giving you complete clarity.",
  },

  whyChooseUs: {
    heading: "Why Portola Springs Residents Choose Spectrum Plumbing",
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
        title: "Factory-Trained Technicians",
        description: "Certified service for major tankless brands including Noritz, Rinnai, Navien, and Rheem.",
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
    heading: "Serving All Neighborhoods in Portola Springs",
    description: "Providing residential plumbing coverage across all sectors and tracts of Portola Springs, Irvine.",
    subAreas: [
      "Portola Springs Village",
      "Silverleaf",
      "Bougainvillea",
      "Decada",
      "Las Colinas",
      "Loma Ridge Area",
      "Roundtree",
      "Agave",
    ],
    landmarkBoundaries:
      "Bounded by Portola Parkway, Irvine Boulevard, Modjeska, and the Loma Ridge foothills.",
    zipCodesServed: ["92618"],
  },

  nearbyLocationSlugs: ["northwood", "great-park", "orchard-hills", "woodbridge"],
  relatedArticleSlugs: ["water-heater-not-heating", "irvine-hard-water-plumbing", "why-drains-keep-clogging"],

  faqs: [
    {
      id: "ps-faq-1",
      question: "How often should I descale my tankless water heater in Portola Springs?",
      answer:
        "Because Irvine Ranch Water District tap water carries 12 to 18 grains per gallon of mineral hardness, tankless water heaters in Portola Springs should be descaled and flushed once every 12 months. Regular descaling removes calcium carbonate scale from the heat exchanger, maintains energy efficiency, and prevents sudden error code shutdowns.",
    },
    {
      id: "ps-faq-2",
      question: "Can PEX pipes in Portola Springs develop leaks?",
      answer:
        "While PEX piping is immune to the pinhole corrosion that plagues older copper lines, PEX systems can experience leaks at crimp fittings, multi-port manifold valves, or from mechanical damage caused by drywall screws or rodents. Professional pressure testing quickly isolates any pressure drop.",
    },
    {
      id: "ps-faq-3",
      question: "Do homes in Portola Springs have pre-plumbed water softener loops?",
      answer:
        "Many Portola Springs homes built since the late 2000s were constructed with a dedicated water softener loop in the garage. This pre-plumbed loop makes installing a whole-home water softening or filtration system straightforward and cost-effective.",
    },
    {
      id: "ps-faq-4",
      question: "Why does my hot water recirculation pump keep running in Portola Springs?",
      answer:
        "A continuously running recirculation pump usually indicates a faulty thermostatic sensor, a sticking check valve, or a misconfigured digital timer. If left unchecked, continuous recirculation wastes electricity and accelerates wear on the pump and plumbing lines.",
    },
    {
      id: "ps-faq-5",
      question: "How do I schedule plumbing service in Portola Springs?",
      answer:
        "Call our direct Irvine line at (949) 539-8503. A representative will evaluate your plumbing symptoms, provide immediate emergency guidance, and dispatch a licensed local plumbing technician to your Portola Springs home.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE PORTOLA SPRINGS PLUMBING HELP",
    heading: "Speak With a Portola Springs Plumber Today",
    highlightText: "Direct Phone Line • Upfront Pricing • Local Expertise",
    description:
      "Whether you need a tankless water heater flush, PEX manifold inspection, or emergency plumbing triage in Portola Springs, call our Irvine team directly for fast assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
