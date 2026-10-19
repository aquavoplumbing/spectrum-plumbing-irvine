import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const cypressVillageLocationData: LocationPageData = {
  slug: "cypress-village",
  name: "Cypress Village",
  fullName: "Cypress Village, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92618", "92620"],
  published: true,

  seo: {
    title: "Plumbing Services in Cypress Village, Irvine | Spectrum Plumbing",
    description:
      "Expert plumbing in Cypress Village, Irvine. Tankless water heater flushing, garbage disposal repair, townhome plumbing, and drain cleaning. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/cypress-village/`,
    primaryKeyword: "plumber Cypress Village Irvine",
    secondaryKeywords: [
      "plumbing services Cypress Village Irvine CA",
      "tankless water heater Cypress Village",
      "townhome plumber Cypress Village 92618",
      "drain cleaning Cypress Village Irvine",
      "emergency plumber Cypress Village",
    ],
    ogImage: "/images/tankless-water-heater.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN CYPRESS VILLAGE, IRVINE",
    heading: "Plumbing Services in Cypress Village, Irvine, CA",
    description:
      "Looking for trusted plumbing services in Cypress Village? Discover expert help for tankless water heaters, townhome drainage, garbage disposals, and water filtration. Call our direct Irvine line at (949) 539-8503 for fast telephone triage.",
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "Modern townhome plumbing and tankless water heater in Cypress Village, Irvine",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Cypress Village Focus",
        subtitle: "ZIP 92618 & 92620",
      },
      {
        icon: "Building",
        title: "Townhome Specialists",
        subtitle: "Courtyard & Attached Homes",
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
      title: "Cypress Village Specialists",
      metric: "92618 / 92620",
      description:
        "Modern plumbing maintenance and diagnostics for contemporary attached townhomes, courtyard flats, and detached residences.",
    },
    {
      icon: "Flame",
      title: "Tankless Water Heater Care",
      metric: "Annual Descaling",
      description:
        "Specialized flushing, descaling, and error code troubleshooting for energy-efficient on-demand water heating systems.",
    },
    {
      icon: "Home",
      title: "Townhome & Multi-Unit Plumbing",
      metric: "HOA Compliant",
      description:
        "Specialized drain clearing and leak mitigation protocols tailored for high-density multi-unit residential living.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Connection",
      metric: "No Online Forms",
      description:
        "Connect directly with experienced local plumbing contractors who know Cypress Village's modern construction.",
    },
  ],

  overview: {
    heading: "Modern Plumbing Care for Cypress Village Homes",
    paragraphs: [
      "Cypress Village is a beautifully designed, centrally connected master-planned community in eastern Irvine, bordered by the Jeffrey Open Space Trail and Great Park. Developed primarily throughout the 2010s, Cypress Village offers a diverse mix of energy-efficient attached townhomes, courtyard flats, and detached residences designed around walkable neighborhood parks and community pools.",
      "Homes in Cypress Village feature contemporary plumbing infrastructure, including PEX water supply lines, centralized garage manifolds, and space-saving tankless water heaters. Because the community features higher-density residential layouts with shared party walls in many townhome tracts, plumbing leaks or drainage backups require prompt, careful attention to prevent multi-unit property damage.",
      "The hard municipal water supplied by Irvine Ranch Water District (IRWD) carries 12–18 grains per gallon of mineral content. In Cypress Village homes, this mineral hardness accumulates rapidly inside compact tankless heat exchangers, causing temperature drops and error shutdowns. Spectrum Plumbing Irvine connects Cypress Village homeowners directly with certified, independent plumbing specialists experienced in modern residential plumbing technology.",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Modern residential street and landscaping in Cypress Village, Irvine",
    residentialContext: {
      constructionEra: "2012 – 2019 Modern Master-Planned Community",
      foundationType: "Post-Tensioned Concrete Slab Foundations",
      pipeInfrastructure: "PEX Supply Tubing & ABS Drainage with Central Manifolds",
      waterCharacteristics: "IRWD Municipal Hard Water (12–18 GPG) Requiring Annual Descaling",
      hoaGuidelines: "Cypress Village Community Association Architectural Rules",
    },
    localHighlights: [
      "Annual tankless water heater flushing, descaling, and recirculation loop servicing",
      "Specialized townhome multi-story drainage snaking and odor elimination",
      "High-horsepower sound-insulated garbage disposal installations",
      "Whole-home water softener and multi-stage filtration loop connections",
    ],
  },

  services: {
    heading: "Core Plumbing Solutions for Cypress Village Homes",
    subtitle: "Specialized plumbing services designed for modern Cypress Village townhomes and courtyard residences.",
    items: [
      {
        slug: "tankless-water-heaters-irvine-ca",
        name: "Tankless Water Heater Descaling & Service",
        badge: "Essential Modern Care",
        image: "/images/tankless-water-heater.jpg",
        shortExplanation:
          "Hard water scale builds up rapidly inside compact tankless heat exchangers in Cypress Village. We provide annual acid descaling, clean water intake filters, and clear diagnostic error codes.",
        commonSymptoms: [
          "Tankless display showing error codes (Codes 11, 12, or 29)",
          "Shower water going cold after several minutes of use",
          "Reduced hot water pressure compared to cold taps",
          "Unit has not been descaled in over 12 months",
        ],
        serviceLink: "/services/tankless-water-heaters-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Townhome Drain Cleaning & Clog Removal",
        badge: "Townhome Specialty",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Clear kitchen grease, hair, and soap scum obstructions from vertical multi-story drain stacks with motorized snaking and safe, eco-friendly drain clearing techniques.",
        commonSymptoms: [
          "Slow drainage in master bathroom double sinks",
          "Garbage disposal backing up with foul odor",
          "Standing water in curbless shower pans",
          "Gurgling sounds in downstairs fixtures when upstairs sinks drain",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "garbage-disposal-repair-irvine-ca",
        name: "Garbage Disposal Repair & Upgrades",
        image: "/images/garbage-disposal-unit.jpg",
        shortExplanation:
          "Service jammed disposals, replace worn internal impellers, or upgrade to high-horsepower sound-insulated models designed for modern gourmet kitchens in Cypress Village.",
        commonSymptoms: [
          "Disposal humming without spinning when switched on",
          "Water dripping from the lower motor seal under the sink",
          "Frequent resetting required via the bottom red button",
          "Slow grinding performance and persistent drain odors",
        ],
        serviceLink: "/services/garbage-disposal-repair-irvine-ca/",
      },
      {
        slug: "water-line-repair-irvine-ca",
        name: "Water Softeners & Filtration Systems",
        image: "/images/water-line-main-repair.jpg",
        shortExplanation:
          "Protect your luxury fixtures, appliances, and skin from Irvine's hard water with salt-based or salt-free water softening systems connected directly to your garage pre-plumbed loop.",
        commonSymptoms: [
          "White chalky mineral crust on matte black or chrome faucets",
          "Soap scum buildup on glass shower enclosures",
          "Stiff laundry and dry skin after showering",
          "Cloudy mineral spots on glassware from the dishwasher",
        ],
        serviceLink: "/services/water-line-repair-irvine-ca/",
      },
      {
        slug: "faucet-and-sink-repair-irvine-ca",
        name: "Luxury Faucet & Fixture Plumbing",
        image: "/images/kitchen-sink-repair.jpg",
        shortExplanation:
          "Repair and install modern pull-down kitchen faucets, touchless sensors, multi-head shower valves, and wall-mounted lavatory fixtures common in Cypress Village.",
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
        badge: "24/7 Phone Line",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "For sudden supply line ruptures, overflowing toilets, or failed emergency shutoff valves in attached townhomes, call our direct line to connect with an experienced technician immediately.",
        commonSymptoms: [
          "Water actively leaking through second-story ceilings",
          "Sewage backing up into ground-floor fixtures",
          "Water spraying from appliance flex lines",
          "Gas odors near tankless water heaters",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Symptoms in Cypress Village",
    subtitle:
      "Recognize the signs of tankless water heater scaling, multi-story drain clogs, and disposal jams in Cypress Village.",
  },

  midPageCTA: {
    eyebrow: "DIRECT CYPRESS VILLAGE PHONE ASSISTANCE",
    heading: "Need Modern Plumbing Care or Tankless Descaling?",
    highlightText: "Speak Directly With an Irvine Plumbing Specialist.",
    description:
      "Avoid automated web forms and waiting for callbacks. Call our Irvine telephone dispatch line now to discuss your symptoms and coordinate prompt, professional service.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing professional",
      "Factory-certified tankless water heater specialists",
      "Licensed and insured Orange County contractors",
      "Full townhome and courtyard plumbing experience",
    ],
    image: "/images/tankless-water-heater.jpg",
    imageAlt: "Technician servicing plumbing in Cypress Village Irvine",
  },

  localConcerns: {
    heading: "Specific Plumbing Concerns in Cypress Village",
    subtitle: "Understanding how hard water minerals and townhome layouts affect Cypress Village properties.",
    items: [
      {
        title: "Hard Water Mineral Scaling in Tankless Units",
        description:
          "Irvine Ranch Water District water carries 12–18 grains per gallon of dissolved minerals. In compact tankless water heaters, this mineral content creates hard calcium scale inside narrow heat exchanger tubes.",
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
        title: "Attached Townhome Shared Drainage & Leak Risks",
        description:
          "In Cypress Village's attached townhomes and courtyard flats, plumbing lines run through shared party walls and vertical utility chases where leaks can quickly affect neighboring units.",
        causes: "High-density multi-story layouts where unaddressed leaks migrate across floor levels.",
        warningSigns: [
          "Gurgling sounds in ground-floor fixtures when upstairs sinks drain",
          "Slow drainage in master bathroom shower pans",
          "Damp baseboards along shared party walls",
        ],
        consequences:
          "Water damage spreading into adjoining units, insurance complications, and costly drywall restoration.",
        whenToCall: "At the first sign of an active leak or multi-fixture drainage sluggishness.",
        relatedServiceSlug: "drain-cleaning-irvine-ca",
        relatedServiceName: "Townhome Drain Clearing",
      },
      {
        title: "Gourmet Kitchen Disposal Jams & Grease Accumulation",
        description:
          "Modern open-concept kitchens in Cypress Village feature high-use sinks where fibrous food waste, cooking grease, and soap scum accumulate in horizontal branch lines.",
        causes: "Disposing of fibrous vegetable peelings, coffee grounds, and grease down disposal units.",
        warningSigns: [
          "Disposal humming without spinning",
          "Water backing up into the adjacent sink basin",
          "Persistent sour food odors rising from the drain opening",
        ],
        consequences:
          "Motor burnout, complete sink backups, and water damage to under-sink cabinetry.",
        whenToCall: "When your disposal hums without turning or when sinks drain sluggishly.",
        relatedServiceSlug: "garbage-disposal-repair-irvine-ca",
        relatedServiceName: "Disposal Repair & Replacement",
      },
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Assist Cypress Village Homeowners",
    subtitle: "A streamlined, four-step approach focused on rapid triage, upfront pricing, and quality craftsmanship.",
    steps: [
      {
        step: "01",
        title: "Call Our Direct Line",
        description:
          "Dial (949) 539-8503 to speak directly with an experienced representative who understands Cypress Village plumbing.",
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
    heading: "Emergency Plumbing Protocols for Cypress Village",
    subtitle: "Actionable steps to take immediately during a plumbing emergency in your Cypress Village residence.",
    urgentSituations: [
      {
        title: "Upstairs Water Leak Penetrating Lower Floor Ceilings",
        description: "Water leaking through multi-story ceilings can cause major drywall, insulation, and flooring damage.",
        protocol: "Shut off the local fixture angle stop or immediately turn off your main water shutoff valve.",
        severity: "critical",
      },
      {
        title: "Tankless Water Heater Error Shutdown or Gas Odor",
        description: "Gas smells or ignition failure codes pose potential safety hazards.",
        protocol: "Turn off the yellow gas cock handle directly below the tankless unit and call SoCalGas / 911 if gas is smelled.",
        severity: "critical",
      },
      {
        title: "Townhome Shared Wall Leak",
        description: "Water leaking along shared party walls can damage neighboring townhome units.",
        protocol: "Shut off the main domestic water valve immediately and call our emergency line for rapid dispatch.",
        severity: "critical",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In Cypress Village homes, the main domestic water shutoff valve is located inside the garage near the tankless water heater, or outside near the front courtyard hose bib.",
      steps: [
        "Locate the brass ball valve with a blue or yellow lever handle on the main incoming water line.",
        "Turn the lever 90 degrees until it is perpendicular to the pipe to stop water flow completely.",
        "If you have a PEX manifold in your garage, you can also turn off individual branch valves.",
        "Open an exterior garden hose bib to drain residual pressure from your home's water lines.",
      ],
      gasWarning:
        "If you smell natural gas, do not operate electrical switches. Evacuate immediately and call SoCalGas / 911.",
    },
  },

  pricingFactors: {
    heading: "Cypress Village Plumbing Pricing Factors",
    subtitle: "Transparent variables that shape residential plumbing service costs in Cypress Village.",
    factors: [
      {
        title: "Tankless Water Heater Scope & Parts",
        description:
          "Routine annual flushing with food-grade descaling solution is standard, while component repairs (heat exchangers, flow sensors, circuit boards) involve specialized factory parts.",
        impact: "Annual preventative maintenance prevents costly major component replacements.",
      },
      {
        title: "Townhome & Multi-Story Access",
        description:
          "Multi-story townhomes may require specialized drain clearing equipment or access through specific cleanouts to clear vertical stack obstructions.",
        impact: "Determines labor requirements and safety measures for multi-story plumbing work.",
      },
      {
        title: "Pre-Plumbed Water Softener Loops",
        description:
          "Most Cypress Village homes feature pre-plumbed garage water softener loops, making water filtration installations straightforward and cost-effective.",
        impact: "Pre-plumbed loops reduce installation labor and material requirements.",
      },
    ],
    pricingNote:
      "All technicians provide written estimates with fixed pricing before beginning any work, giving you complete clarity.",
  },

  whyChooseUs: {
    heading: "Why Cypress Village Residents Choose Spectrum Plumbing",
    subtitle: "A trusted local network committed to modern plumbing expertise and fast phone-first assistance.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description: "Speak directly with an experienced plumbing specialist without filling out online web forms.",
        highlight: "Fast phone dispatch",
      },
      {
        title: "Modern Plumbing Expertise",
        description: "Extensive experience with tankless systems, PEX manifolds, and modern townhome layouts.",
        highlight: "Contemporary knowledge",
      },
      {
        title: "HOA-Compliant Craftsmanship",
        description: "Familiarity with Cypress Village Community Association rules and City of Irvine building codes.",
        highlight: "Association compliant",
      },
      {
        title: "Transparent, Upfront Pricing",
        description: "Written estimates upfront with no hidden fees or surprise hourly billing.",
        highlight: "Honest pricing",
      },
    ],
  },

  coverage: {
    heading: "Serving All Neighborhoods in Cypress Village",
    description: "Providing residential plumbing coverage across all enclaves and tracts of Cypress Village, Irvine.",
    subAreas: [
      "Maricopa",
      "Mulberry",
      "Flora",
      "Jade Court",
      "Caserton",
      "Trellis Court",
      "Siena",
      "Cypress Village East",
    ],
    landmarkBoundaries:
      "Bounded by Sand Canyon Avenue, Irvine Boulevard, Jeffrey Road, and Trabuco Road.",
    zipCodesServed: ["92618", "92620"],
  },

  nearbyLocationSlugs: ["great-park", "northwood", "woodbridge", "portola-springs"],
  relatedArticleSlugs: ["water-heater-not-heating", "irvine-hard-water-plumbing", "why-drains-keep-clogging"],

  faqs: [
    {
      id: "cv-faq-1",
      question: "Why does my Cypress Village tankless water heater need annual descaling?",
      answer:
        "Irvine Ranch Water District water carries 12 to 18 grains per gallon of mineral hardness. In compact tankless water heaters, this scale coats internal heat exchanger coils rapidly. Annual acid descaling removes this calcium buildup, preserves energy efficiency, and prevents sudden error code shutdowns.",
    },
    {
      id: "cv-faq-2",
      question: "Can plumbers service plumbing in Cypress Village attached townhomes?",
      answer:
        "Yes. Our network specializes in attached townhomes and courtyard residences, understanding shared vertical drain stacks, acoustic sound isolation, and Cypress Village Community Association guidelines.",
    },
    {
      id: "cv-faq-3",
      question: "Do homes in Cypress Village have pre-plumbed water softener loops?",
      answer:
        "Yes. Nearly all homes in Cypress Village built during the 2010s were constructed with a dedicated water softener loop and drain line in the garage, making whole-home water softening or filtration system installation straightforward and clean.",
    },
    {
      id: "cv-faq-4",
      question: "What should I do if my garbage disposal is humming in Cypress Village?",
      answer:
        "A humming disposal indicates the motor is receiving electricity but the grinding impellers are jammed by a foreign object or fibrous food waste. Turn off the disposal switch immediately to prevent motor burnout, and call our Irvine dispatch line for safe mechanical clearing or replacement.",
    },
    {
      id: "cv-faq-5",
      question: "How do I schedule plumbing service in Cypress Village?",
      answer:
        "Call our direct Irvine line at (949) 539-8503. A representative will evaluate your plumbing symptoms, provide emergency shutoff guidance if needed, and dispatch a licensed local plumbing technician to your Cypress Village home.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE CYPRESS VILLAGE PLUMBING HELP",
    heading: "Speak With a Cypress Village Plumber Today",
    highlightText: "Direct Phone Line • Upfront Pricing • Local Expertise",
    description:
      "Whether you need a tankless water heater flush, garbage disposal repair, or emergency plumbing triage in Cypress Village, call our Irvine team directly for fast assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
