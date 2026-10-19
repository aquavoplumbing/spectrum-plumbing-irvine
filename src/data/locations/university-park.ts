import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const universityParkLocationData: LocationPageData = {
  slug: "university-park",
  name: "University Park",
  fullName: "University Park, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92612"],
  published: true,

  seo: {
    title: "Plumbing Services in University Park, Irvine | Spectrum Plumbing",
    description:
      "Expert plumbing in University Park, Irvine. Whole-home repiping, slab leak detection, cast iron sewer repair, and water heater service. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/university-park/`,
    primaryKeyword: "plumber University Park Irvine",
    secondaryKeywords: [
      "plumbing services University Park Irvine CA",
      "repiping University Park Irvine",
      "slab leak detection University Park 92612",
      "sewer repair University Park Irvine",
      "emergency plumber University Park",
    ],
    ogImage: "/images/pipe-repiping-copper.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN UNIVERSITY PARK, IRVINE",
    heading: "Plumbing Services in University Park, Irvine, CA",
    description:
      "Looking for trusted plumbing services in University Park? Get specialized assistance for 50-year-old copper piping, under-slab leaks, sewer line restoration, and water heater replacements. Call our direct Irvine line at (949) 539-8503 for fast phone triage.",
    image: "/images/pipe-repiping-copper.jpg",
    imageAlt: "Plumbing pipe restoration and repiping in an established University Park home",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "University Park Focus",
        subtitle: "ZIP Code 92612",
      },
      {
        icon: "History",
        title: "Historic Irvine Village",
        subtitle: "1960s–1970s Infrastructure",
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
      title: "University Park Specialists",
      metric: "ZIP 92612",
      description:
        "Specialized plumbing diagnostics and restoration for mid-century modern single-family and atrium homes across University Park.",
    },
    {
      icon: "Activity",
      title: "Slab Leak & Repiping Focus",
      metric: "PEX Restoration",
      description:
        "Replacing failed 50-year-old subterranean copper supply lines with durable overhead PEX piping routed through attics.",
    },
    {
      icon: "Video",
      title: "Cast Iron & Clay Sewer Care",
      metric: "HD Camera Diagnosis",
      description:
        "Evaluating and rehabilitating original sewer laterals affected by age, internal rust channeling, and root intrusion.",
    },
    {
      icon: "PhoneCall",
      title: "Instant Phone Connection",
      metric: "No Waiting",
      description:
        "Call our phone line directly to speak with an experienced specialist who understands University Park's unique plumbing age.",
    },
  ],

  overview: {
    heading: "Restoring & Maintaining Plumbing in University Park, Irvine",
    paragraphs: [
      "University Park is Irvine's foundational master-planned village, established in the late 1960s adjacent to the University of California, Irvine (UCI). Known for its groundbreaking urban design, mature greenbelts, mid-century modern residences, and distinctive atrium homes, University Park represents an architectural legacy that requires careful, respectful plumbing maintenance.",
      "Because University Park is Irvine's oldest master-planned community, many original plumbing systems have now surpassed 50 years of continuous use. Homes built in the late 1960s and early 1970s feature original copper water supply lines buried beneath concrete slab foundations, alongside cast iron or vitrified clay sewer laterals. Decades of hard water mineral exposure, soil friction, and pipe wall thinning frequently result in recurring slab leaks and sewer line channeling.",
      "Spectrum Plumbing Irvine connects University Park property owners directly with licensed, independent plumbing contractors experienced in mid-century home restoration. From non-destructive acoustic slab leak detection to whole-home PEX repiping and trenchless sewer repair, our network provides permanent, code-compliant solutions tailored for historic Irvine homes.",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Tree-lined greenbelt and classic mid-century homes in University Park, Irvine",
    residentialContext: {
      constructionEra: "1965 – 1975 Historic Master Plan",
      foundationType: "Slab-on-Grade Concrete Foundations",
      pipeInfrastructure: "Aged Type M Copper Supply Lines & Cast Iron / Clay Sewer Laterals",
      waterCharacteristics: "IRWD Municipal Hard Water (13–18 GPG) with Decades of Mineral Scale",
      hoaGuidelines: "Mid-Century HOA Guidelines & City of Irvine Building Permitting",
    },
    localHighlights: [
      "Whole-house overhead PEX repiping bypassing vulnerable 50-year-old under-slab lines",
      "Sewer lateral camera inspections identifying cast iron bottom channeling and root blockages",
      "Water heater replacements meeting modern California seismic strapping and venting codes",
      "Non-destructive acoustic leak locating preserving original mid-century atrium flooring",
    ],
  },

  services: {
    heading: "Core Plumbing Solutions for University Park Homes",
    subtitle: "Specialized plumbing services designed for the unique infrastructure of University Park.",
    items: [
      {
        slug: "pipe-repair-and-repiping-irvine-ca",
        name: "Whole-Home PEX Repiping",
        badge: "Essential for 1960s/70s Homes",
        image: "/images/pipe-repiping-copper.jpg",
        shortExplanation:
          "50-year-old copper lines beneath University Park slabs frequently fail repeatedly. We connect you with repipe specialists who install durable Uponor PEX-A piping routed cleanly overhead through attics and interior walls.",
        commonSymptoms: [
          "History of two or more previous slab leaks",
          "Low water pressure across multiple faucets",
          "Brown or discolored water from aging pipe corrosion",
          "Visible green or white oxidation on exposed pipes",
        ],
        serviceLink: "/services/pipe-repair-and-repiping-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "slab-leak-repair-irvine-ca",
        name: "Slab Leak Detection & Bypass",
        badge: "Under-Slab Specialist",
        image: "/images/slab-leak-inspection.jpg",
        shortExplanation:
          "Locate hidden foundation leaks with precision acoustic listening devices and infrared thermal imaging. We provide non-invasive overhead bypass reroutes rather than breaking through finished flooring.",
        commonSymptoms: [
          "Warm spots on flooring that persist throughout the day",
          "Water meter flow dial spinning with all faucets off",
          "Hissing sound of running water behind walls or floors",
          "Unexplained spikes in monthly municipal water bills",
        ],
        serviceLink: "/services/slab-leak-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "sewer-line-repair-irvine-ca",
        name: "Cast Iron Sewer Repair & Relining",
        badge: "Sewer Infrastructure",
        image: "/images/sewer-camera-inspection.jpg",
        shortExplanation:
          "Original cast iron sewer pipes develop internal rust ridges and bottom channeling over 50 years. HD camera inspections locate blockages, while hydro jetting and trenchless relining restore smooth flow.",
        commonSymptoms: [
          "Multiple plumbing fixtures backing up simultaneously",
          "Foul sewer gas odors inside bathrooms or near cleanouts",
          "Slow drainage across bathtubs, showers, and toilets",
          "Gurgling sounds when appliances drain",
        ],
        serviceLink: "/services/sewer-line-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-heater-repair-irvine-ca",
        name: "Water Heater Repair & Replacement",
        image: "/images/water-heater-diagnostic.jpg",
        shortExplanation:
          "Replace aging water heaters with modern, energy-efficient conventional storage tanks or high-performance tankless units compliant with California Title 24 efficiency standards.",
        commonSymptoms: [
          "Rusty or discolored water from hot water taps",
          "Rumbling, banging, or popping sounds from the tank base",
          "Water pooling around the water heater in the garage",
          "Water running cold after just a few minutes of showering",
        ],
        serviceLink: "/services/water-heater-repair-irvine-ca/",
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Drain Snaking & Hydro Jetting",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Clear decades of accumulated mineral scale, grease, and hair from household drain lines with motorized drain cleaning cables and professional hydro jetting.",
        commonSymptoms: [
          "Persistent kitchen sink clogs and disposal odors",
          "Slow drainage in shower pans and tubs",
          "Recurring blockages requiring repeat chemical treatments",
          "Backups into laundry standpipes",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
      },
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Response",
        badge: "24/7 Phone Line",
        image: "/images/hero-pipes-3d.jpg",
        shortExplanation:
          "For sudden pipe ruptures, sewer overflows, or failed main shutoffs, call our direct line to connect with an experienced technician for immediate telephone triage and dispatch.",
        commonSymptoms: [
          "Water actively leaking through ceilings or baseboards",
          "Raw sewage overflowing into ground-floor fixtures",
          "Main water shutoff valve seized or broken",
          "Gas odors near water heater or furnace connections",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
    ],
  },

  problemExplorer: {
    heading: "Common Plumbing Symptoms in University Park",
    subtitle:
      "Identify the warning signs of 50-year-old pipe deterioration and sewer line aging in University Park.",
  },

  midPageCTA: {
    eyebrow: "DIRECT UNIVERSITY PARK PHONE ASSISTANCE",
    heading: "Dealing With Old Pipe Leaks or Sewer Line Issues?",
    highlightText: "Speak With an Irvine Plumbing Specialist Today.",
    description:
      "Skip web forms and get immediate telephone guidance from a specialist who understands University Park's unique mid-century plumbing infrastructure.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "Direct phone triage with a plumbing professional",
      "Specialized in 1960s and 1970s Irvine homes",
      "Licensed and insured Orange County contractors",
      "Full whole-home PEX repiping and trenchless sewer options",
    ],
    image: "/images/pipe-repiping-copper.jpg",
    imageAlt: "Plumber repiping water lines with PEX in University Park Irvine",
  },

  localConcerns: {
    heading: "Specific Plumbing Challenges in University Park",
    subtitle:
      "Understanding how 50-year-old construction materials and mature landscaping impact plumbing in University Park.",
    items: [
      {
        title: "50-Year-Old Copper Supply Pipe Deterioration",
        description:
          "Homes in University Park feature original copper plumbing that has reached the end of its projected 40-to-50-year service life. Pinhole breaches become increasingly frequent.",
        causes: "Internal erosion-corrosion from mineral-rich water compounded by soil friction and thermal cycling.",
        warningSigns: [
          "Warm spots on flooring that stay warm for hours",
          "Repeated pinhole leaks requiring multiple spot repairs",
          "Spinning water meter dial when no water is running",
        ],
        consequences:
          "Continuous structural soil erosion under foundations, ruined hardwood and carpet, and expensive recurring repair costs.",
        whenToCall: "As soon as you suspect an under-slab leak or have had more than one leak in the past two years.",
        relatedServiceSlug: "pipe-repair-and-repiping-irvine-ca",
        relatedServiceName: "Whole-Home PEX Repipe",
      },
      {
        title: "Aging Cast Iron Sewer Line Channeling",
        description:
          "Original cast iron sewer pipes installed in the late 1960s corrode from the inside out, creating a rough internal scale and a channeled bottom groove where debris catches.",
        causes: "Five decades of exposure to acidic wastewater, household chemicals, and natural oxidation.",
        warningSigns: [
          "Chronic toilet backups and slow bathtub drains",
          "Gurgling sounds in adjacent sinks when toilets flush",
          "Persistent sewer odors in bathrooms and near cleanouts",
        ],
        consequences:
          "Total pipe collapse, sewage flooding beneath the foundation, and structural biohazards.",
        whenToCall: "When routine snaking fails to provide lasting relief from recurring clogs.",
        relatedServiceSlug: "sewer-line-repair-irvine-ca",
        relatedServiceName: "Sewer Camera & Relining",
      },
      {
        title: "Mature Tree Root Invasion in Sewer Laterals",
        description:
          "University Park's towering 50-year-old eucalyptus, pepper, and sycamore trees have immense root systems that penetrate clay and cast iron pipe joints.",
        causes: "Trees seeking moisture through hairline joint separations in aging sewer laterals.",
        warningSigns: [
          "Multiple lower-level fixtures draining sluggishly",
          "Water backing up into the lowest shower or bathtub",
          "Lush, wet patches of grass above the sewer line route",
        ],
        consequences:
          "Raw sewage overflowing into home interiors, causing extensive property damage.",
        whenToCall: "At the first sign of simultaneous fixture sluggishness.",
        relatedServiceSlug: "drain-cleaning-irvine-ca",
        relatedServiceName: "Hydro Jetting & Root Removal",
      },
    ],
  },

  process: {
    badge: "Direct Phone Service",
    heading: "How We Help University Park Residents",
    subtitle: "A direct, phone-first approach focused on clear communication, prompt dispatch, and lasting repairs.",
    steps: [
      {
        step: "01",
        title: "Call Our Direct Line",
        description:
          "Call (949) 539-8503 to speak directly with an experienced representative who understands University Park plumbing.",
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
          "Your plumber arrives equipped with acoustic listening discs, infrared cameras, and sewer video equipment.",
        highlight: "Non-destructive diagnostics",
      },
      {
        step: "04",
        title: "Clear Plan & Lasting Repair",
        description:
          "Receive a transparent, upfront written estimate detailing permanent repair or repiping options before work begins.",
        highlight: "Fixed, upfront pricing",
      },
    ],
  },

  emergencyGuidance: {
    heading: "Emergency Plumbing Protocols for University Park",
    subtitle: "Immediate action steps to protect your home during a plumbing emergency in University Park.",
    urgentSituations: [
      {
        title: "Active Under-Slab Copper Pipe Rupture",
        description: "Pressurized water escaping under foundation slabs can erode soil and flood flooring within hours.",
        protocol: "Turn off your main domestic water shutoff valve immediately near the front hose bib or garage.",
        severity: "critical",
      },
      {
        title: "Main Sewer Line Backup Flooding Bathrooms",
        description: "Sewage rising in ground-floor bathtubs and showers presents serious health risks.",
        protocol: "Stop all water use immediately across the entire home and call our emergency line.",
        severity: "critical",
      },
      {
        title: "Water Heater Tank Rupture in Garage",
        description: "Aging water heaters can split along the bottom seam, flooding garages or utility closets.",
        protocol: "Shut off the cold water inlet valve directly above the tank and turn the gas valve to OFF.",
        severity: "urgent",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In University Park homes, the main water shutoff valve is typically located outdoors along the front foundation wall near the hose bib, or inside the garage near the water heater.",
      steps: [
        "Locate the brass shutoff valve on the main incoming copper supply pipe.",
        "Turn a ball valve lever 90 degrees perpendicular to the pipe, or turn a gate valve wheel clockwise until completely tight.",
        "Open the front garden hose bib to release residual water pressure from the system.",
        "Check an indoor faucet to confirm that water flow has stopped completely.",
      ],
      gasWarning:
        "If you smell gas or sulfur, evacuate your home immediately and call SoCalGas / 911 from a safe distance.",
    },
  },

  pricingFactors: {
    heading: "University Park Plumbing Pricing Factors",
    subtitle: "Key factors that influence the cost of plumbing repairs and repiping in University Park.",
    factors: [
      {
        title: "Spot Repair vs. Whole-Home Repipe",
        description:
          "A single spot repair under a slab addresses one leak, while an overhead PEX repipe replaces all aging supply lines permanently.",
        impact: "Overhead PEX repiping provides long-term value and prevents recurring leak repair costs.",
      },
      {
        title: "Sewer Line Condition & Trenchless Options",
        description:
          "A simple root clog can be cleared with motorized snaking, while collapsed or channeled cast iron pipes may benefit from trenchless epoxy relining.",
        impact: "Trenchless relining eliminates the need to dig up mature landscaping or driveways.",
      },
      {
        title: "Atrium & Mid-Century Architectural Access",
        description:
          "University Park's unique atrium floor plans and post-and-beam construction may require specialized pipe routing through attic spaces.",
        impact: "Determines labor requirements and cosmetic drywall patching scope.",
      },
    ],
    pricingNote:
      "All technicians provide written estimates with fixed pricing before beginning any work, giving you complete clarity.",
  },

  whyChooseUs: {
    heading: "Why University Park Residents Choose Spectrum Plumbing",
    subtitle: "A trusted local network committed to honest assessments and expert plumbing craftsmanship.",
    benefits: [
      {
        title: "Direct Phone Connection",
        description: "Speak directly with an experienced plumbing specialist without filling out online web forms.",
        highlight: "Fast phone dispatch",
      },
      {
        title: "Mid-Century Home Experience",
        description: "Deep expertise in University Park's 50-year-old piping, atrium layouts, and foundation configurations.",
        highlight: "Local Irvine knowledge",
      },
      {
        title: "Non-Destructive Leak Detection",
        description: "Advanced acoustic and infrared locating finds hidden leaks without tearing up floors unnecessarily.",
        highlight: "Preserves your home",
      },
      {
        title: "Upfront, Transparent Estimates",
        description: "Detailed written pricing upfront with zero hidden fees or surprise hourly billing.",
        highlight: "Honest pricing",
      },
    ],
  },

  coverage: {
    heading: "Serving All Neighborhoods in University Park",
    description: "Providing residential plumbing coverage across all sectors and tracts of University Park, Irvine.",
    subAreas: [
      "University Park Village",
      "Parkside at University Park",
      "University Park Atrium Homes",
      "Racquet Club Area",
      "Parkcrest",
      "Culver & Michelson Tracts",
      "University Park Greenbelts",
    ],
    landmarkBoundaries:
      "Bounded by Culver Drive, Michelson Drive, University Drive, and Jeffrey Road / UCI.",
    zipCodesServed: ["92612"],
  },

  nearbyLocationSlugs: ["woodbridge", "turtle-rock", "westpark", "quail-hill"],
  relatedArticleSlugs: ["signs-of-a-slab-leak", "why-drains-keep-clogging", "water-heater-not-heating"],

  faqs: [
    {
      id: "up-faq-1",
      question: "Are slab leaks common in University Park homes?",
      answer:
        "Yes. Because University Park is Irvine's oldest master-planned community (built between 1965 and 1975), the original copper domestic water lines buried beneath concrete slabs are over 50 years old. Mineral content in the water and thermal movement cause pinhole leaks to develop over decades of service.",
    },
    {
      id: "up-faq-2",
      question: "Is it better to repipe my University Park home or keep doing spot repairs?",
      answer:
        "If your home is over 40 years old and has experienced more than one slab leak, a whole-home PEX repipe through the attic is usually far more cost-effective. Spot repairs only fix one isolated spot while leaving the rest of the aged copper pipe in place to fail later.",
    },
    {
      id: "up-faq-3",
      question: "What problems affect cast iron sewer pipes in University Park?",
      answer:
        "Original cast iron sewer pipes from the late 1960s corrode from the inside out, creating rough mineral ridges, rust scale, and bottom channeling where toilet paper and waste catch. Video camera inspections reveal whether the pipe can be cleaned with hydro jetting or needs trenchless epoxy relining.",
    },
    {
      id: "up-faq-4",
      question: "Can plumbers repipe University Park atrium-style homes without damaging architecture?",
      answer:
        "Yes. Experienced repipe specialists route flexible Uponor PEX-A piping overhead through attic joists and inside interior wall cavities, avoiding mid-century post-and-beam ceilings and preserving unique architectural features.",
    },
    {
      id: "up-faq-5",
      question: "How do I schedule plumbing service in University Park?",
      answer:
        "Call our direct Irvine line at (949) 539-8503. A representative will evaluate your plumbing symptoms, provide immediate emergency guidance, and dispatch a licensed local plumbing technician to your home.",
    },
  ],

  finalCTA: {
    eyebrow: "GET IMMEDIATE UNIVERSITY PARK PLUMBING HELP",
    heading: "Speak With a University Park Plumber Today",
    highlightText: "Direct Phone Line • Upfront Pricing • Local Expertise",
    description:
      "Whether you are dealing with an under-slab leak, cast iron sewer backup, or need a whole-house repiping consultation, call our Irvine team directly for fast assistance.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
  },
};
