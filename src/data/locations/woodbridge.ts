import { LocationPageData } from "@/types/location";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const woodbridgeLocationData: LocationPageData = {
  slug: "woodbridge",
  name: "Woodbridge",
  fullName: "Woodbridge, Irvine, CA",
  city: "Irvine",
  state: "California",
  stateCode: "CA",
  zipCodes: ["92604", "92614"],
  published: true,

  seo: {
    title: "Plumbing Services in Woodbridge, Irvine | Spectrum Plumbing",
    description:
      "Looking for plumbing help in Woodbridge, Irvine? Explore drain cleaning, leak detection, water heater repair, and slab leak diagnosis. Call (949) 539-8503.",
    canonical: `${BUSINESS_INFO.domain}/service-areas/woodbridge/`,
    primaryKeyword: "plumber Woodbridge Irvine",
    secondaryKeywords: [
      "plumbing services Woodbridge Irvine CA",
      "Woodbridge Irvine drain cleaning",
      "water heater repair Woodbridge",
      "slab leak detection Woodbridge Irvine",
      "emergency plumber Woodbridge 92604",
    ],
    ogImage: "/images/woodbridge-irvine-lake.jpg",
  },

  hero: {
    eyebrow: "PLUMBING SERVICES IN WOODBRIDGE, IRVINE",
    heading: "Plumbing Services in Woodbridge, Irvine, CA",
    description:
      "Looking for plumbing assistance in Woodbridge? Explore help for leaking pipes, clogged drains, water heater problems, and other residential plumbing concerns. Call our Irvine phone line directly at (949) 539-8503 to discuss your issue and available service options.",
    image: "/images/woodbridge-irvine-lake.jpg",
    imageAlt: "Peaceful residential lake and classic bridge in Woodbridge, Irvine, California",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    telemetryBadges: [
      {
        icon: "MapPin",
        title: "Woodbridge Focus",
        subtitle: "ZIP 92604 & 92614",
      },
      {
        icon: "Activity",
        title: "Slab & Copper Infrastructure",
        subtitle: "1970s–1980s Tracts",
      },
      {
        icon: "PhoneCall",
        title: "Direct Phone Connection",
        subtitle: "No Online Waiting Forms",
      },
    ],
  },

  highlights: [
    {
      icon: "MapPin",
      title: "Woodbridge Village Specialists",
      metric: "92604 / 92614",
      description:
        "Tailored assistance for established single-family homes and lakeside townhomes across Woodbridge.",
    },
    {
      icon: "Activity",
      title: "Slab & Copper Pipe Diagnostics",
      metric: "Acoustic Locating",
      description:
        "Specialized non-invasive locating for pinhole leaks running beneath reinforced concrete foundations.",
    },
    {
      icon: "Gauge",
      title: "Municipal Pressure Regulation",
      metric: "65–75 PSI Target",
      description:
        "Protecting aging copper lines and fixtures against Irvine municipal pressure surges exceeding 90 PSI.",
    },
    {
      icon: "PhoneCall",
      title: "Direct Phone Evaluation",
      metric: "Zero Queues",
      description:
        "Speak immediately with someone who understands residential plumbing systems before service scheduling.",
    },
  ],

  overview: {
    heading: "Plumbing Services for Homes in Woodbridge, Irvine",
    paragraphs: [
      "Woodbridge is one of Irvine's most distinguished master-planned communities, developed primarily between 1975 and the mid-1980s around North Lake and South Lake. Comprising charming single-family detached houses, patio homes, and waterside townhomes, properties here reflect enduring Southern California architecture. However, residential plumbing systems installed four to five decades ago naturally experience infrastructure fatigue that requires thoughtful, localized diagnostic attention.",
      "Most homes in Woodbridge are built upon concrete slab-on-grade foundations with original Type M or Type L copper supply tubing routed underneath the poured concrete. Over decades of continuous contact with local soil chemistry, subtle thermal cycling from domestic hot water lines, and natural mineral hardness, these pipes can develop microscopic pinhole breaches. Addressing such concerns requires non-destructive locating rather than guesswork.",
      "Additionally, the mature eucalyptus, pepper, and sycamore trees lining Woodbridge greenbelts and private yards frequently seek out older vitrified clay or ABS sewer laterals. When roots intrude through pipe joints, multiple drains can back up simultaneously. Spectrum Plumbing Irvine connects Woodbridge homeowners directly with experienced, independent plumbing professionals who understand these exact residential configurations.",
    ],
    image: "/images/woodbridge-homes-street.jpg",
    imageAlt: "Tree-lined residential neighborhood street in Woodbridge, Irvine, California",
    residentialContext: {
      constructionEra: "1975 – 1985 Master-Planned Development",
      foundationType: "Slab-on-Grade Concrete Foundations",
      pipeInfrastructure: "Original Copper Supply Lines & ABS/Cast Iron Drainage",
      waterCharacteristics: "Irvine Ranch Water District (IRWD) Hardness: 14–18 GPG",
      hoaGuidelines: "Woodbridge Village Association (WVA) Architectural Alignment",
    },
    localHighlights: [
      "Over 40 years of residential plumbing infrastructure in North Lake and South Lake tracts",
      "Frequent pressure regulator (PRV) replacements due to high incoming Irvine main pressure",
      "Hard water scale accumulation accelerating conventional gas water heater wear",
      "HOA-compliant repair pathways minimizing visible exterior modifications",
    ],
  },

  services: {
    heading: "Plumbing Services Available in Woodbridge",
    subtitle:
      "Explore comprehensive plumbing solutions available for residential properties throughout Woodbridge. Each service card provides key details so you can evaluate options independently before calling.",
    items: [
      {
        slug: "emergency-plumbing-irvine-ca",
        name: "Emergency Plumbing Assistance",
        badge: "Urgent Priority",
        image: "/images/copper-pipe-repair.jpg",
        shortExplanation:
          "Sudden pipe fractures, overflowing toilets, or failed water heater valves in your Woodbridge home require prompt telephone triage. Call immediately to discuss shutoff steps and connect with available independent technicians.",
        commonSymptoms: [
          "Uncontrolled water flooding floors or cabinets",
          "Sudden pipe burst or angle stop valve failure",
          "Active sewer backflow into lower-level tubs",
          "Urgent guidance needed for main water shutoff",
        ],
        serviceLink: "/services/emergency-plumbing-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "drain-cleaning-irvine-ca",
        name: "Drain Cleaning Services",
        badge: "High Demand",
        image: "/images/drain-cleaning-equipment.jpg",
        shortExplanation:
          "Slow-draining showers, kitchen sinks backed up with grease, and gurgling bathroom fixtures disrupt daily life. Professional motorized snaking and hydro clearing restore free-flowing drainage across your Woodbridge home.",
        commonSymptoms: [
          "Standing water in shower pans or bathtubs",
          "Kitchen sink backing up during disposal use",
          "Foul organic odors emanating from floor drains",
          "Multiple fixtures draining slowly at the same time",
        ],
        serviceLink: "/services/drain-cleaning-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "water-heater-repair-irvine-ca",
        name: "Water Heater Repair & Replacement",
        badge: "Heating Specialist",
        image: "/images/water-heater-diagnostic.jpg",
        shortExplanation:
          "Woodbridge's hard water creates heavy calcium buildup inside conventional water heater tanks, leading to rumbling sounds, pilot outages, and lukewarm water. Discuss repairs, element replacements, or modern efficient tank swaps.",
        commonSymptoms: [
          "Inconsistent hot water or lukewarm showers",
          "Loud popping, knocking, or boiling tank sounds",
          "Moisture or rust pooling around tank base",
          "Pilot light repeatedly blowing out or failing",
        ],
        serviceLink: "/services/water-heater-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "leak-detection-irvine-ca",
        name: "Electronic Leak Detection",
        badge: "Non-Invasive Diagnostic",
        image: "/images/leak-detection-acoustic.jpg",
        shortExplanation:
          "Unexplained water utility bill jumps or warm patches on your flooring usually indicate hidden pipe ruptures. Advanced acoustic sonar and thermal imaging locate the exact breach without destructive exploratory drywall or slab trenching.",
        commonSymptoms: [
          "Water meter needle spinning with all taps closed",
          "Warm spots radiating through tile or hardwood",
          "Hissing sounds inside walls or under cabinets",
          "Musty odors or peeling paint along baseboards",
        ],
        serviceLink: "/services/leak-detection-irvine-ca/",
      },
      {
        slug: "slab-leak-repair-irvine-ca",
        name: "Slab Leak Diagnosis & Repair",
        badge: "Foundation Focus",
        image: "/images/kitchen-sink-repair.jpg",
        shortExplanation:
          "With Woodbridge residences built on concrete slabs, below-floor copper lines are susceptible to pinhole erosion. Explore non-invasive acoustic diagnostics, overhead PEX bypass reroutes, and direct foundation repair options.",
        commonSymptoms: [
          "Noticeable warm patches on ground-floor flooring",
          "Continuous sound of rushing water beneath foundation",
          "Damp baseboards or efflorescence along walls",
          "Drop in household hot water pressure",
        ],
        serviceLink: "/services/slab-leak-repair-irvine-ca/",
        isFeatured: true,
      },
      {
        slug: "sewer-line-repair-irvine-ca",
        name: "Sewer Line Inspection & Repair",
        badge: "Mainline Pipeline",
        image: "/images/sewer-camera-inspection.jpg",
        shortExplanation:
          "Mature Woodbridge landscaping frequently causes root intrusion into mainline sewer pipes. High-definition camera inspections reveal whether your line requires hydro jetting descaling, trenchless epoxy relining, or targeted spot repairs.",
        commonSymptoms: [
          "Multiple lower-level fixtures backing up at once",
          "Gurgling sounds in toilets when laundry runs",
          "Persistent sewer odors near yard cleanouts",
          "Slow drainage persisting despite drain clearing",
        ],
        serviceLink: "/services/sewer-line-repair-irvine-ca/",
      },
      {
        slug: "tankless-water-heaters-irvine-ca",
        name: "Tankless Water Heater Services",
        badge: "High Efficiency",
        image: "/images/tankless-water-heater.jpg",
        shortExplanation:
          "On-demand tankless units provide endless hot water and compact footprints for Woodbridge townhomes. Regular vinegar descaling flushes and sensor maintenance keep high-efficiency heat exchangers operating smoothly.",
        commonSymptoms: [
          "Error codes displaying on the digital interface",
          "Water suddenly turning cold during shower use",
          "Mineral scale impeding heat exchanger flow",
          "Reduced water flow rate from hot water taps",
        ],
        serviceLink: "/services/tankless-water-heaters-irvine-ca/",
      },
      {
        slug: "hydro-jetting-irvine-ca",
        name: "Hydro Jetting Drain Cleansing",
        badge: "Heavy-Duty Clearing",
        image: "/images/hydro-jetting-equipment.jpg",
        shortExplanation:
          "When motorized snaking only punches small holes through stubborn clogs, commercial-grade 3500 PSI hydro jetting thoroughly scours away grease, mineral scale, and tree roots, restoring pipes to near-original capacity.",
        commonSymptoms: [
          "Recurring branch line blockages every few months",
          "Heavy culinary grease accumulation in kitchen lines",
          "Intrusive fibrous root masses inside sewer lines",
          "Scale encrustation constricting drainage diameter",
        ],
        serviceLink: "/services/hydro-jetting-irvine-ca/",
      },
      {
        slug: "pipe-repair-and-repiping-irvine-ca",
        name: "Pipe Repair & Whole-Home Repiping",
        badge: "Infrastructure Upgrade",
        image: "/images/pipe-repiping-copper.jpg",
        shortExplanation:
          "Multiple pinhole leaks in 1970s copper piping often signal widespread interior corrosion. Whole-home PEX or Type L copper repipes provide permanent relief, eliminating ongoing slab leak risks and boosting water quality.",
        commonSymptoms: [
          "Recurring pipe leaks across multiple rooms",
          "Rusty or discolored water flowing from taps",
          "Low water pressure across the entire household",
          "Corrosion and greenish patina on exposed copper",
        ],
        serviceLink: "/services/pipe-repair-and-repiping-irvine-ca/",
      },
      {
        slug: "toilet-repair-irvine-ca",
        name: "Toilet Repair & Replacement",
        badge: "Fixture Service",
        image: "/images/toilet-plumbing-repair.jpg",
        shortExplanation:
          "Constantly running fill valves, cracked porcelain tanks, rocking bowls, and faulty flappers waste hundreds of gallons of water each month. Get swift rebuilds or upgrades to WaterSense high-efficiency models.",
        commonSymptoms: [
          "Toilet running intermittently or continuously",
          "Weak or incomplete flushing action",
          "Water leaking around the base seal onto flooring",
          "Tank taking an unusually long time to refill",
        ],
        serviceLink: "/services/toilet-repair-irvine-ca/",
      },
      {
        slug: "faucet-and-sink-repair-irvine-ca",
        name: "Faucet & Sink Plumbing Repair",
        badge: "Precision Fixture",
        image: "/images/kitchen-sink-repair.jpg",
        shortExplanation:
          "Dripping kitchen faucets, corroded under-sink supply valves, and leaking P-traps cause quiet water damage inside vanity cabinetry. Discuss cartridge rebuilds, fixture upgrades, and secure angle stop valve replacements.",
        commonSymptoms: [
          "Persistent drip from faucet spouts wasting water",
          "Corrosion or mineral crust on angle stop valves",
          "Moisture pooling inside base kitchen cabinets",
          "Low flow caused by mineral scale in aerators",
        ],
        serviceLink: "/services/faucet-and-sink-repair-irvine-ca/",
      },
      {
        slug: "garbage-disposal-repair-irvine-ca",
        name: "Garbage Disposal Repair & Swap",
        badge: "Kitchen Appliance",
        image: "/images/garbage-disposal-unit.jpg",
        shortExplanation:
          "Humming motors, jammed flywheel blades, or water leaking from the bottom casing indicate disposal failure. Discuss jam releases, electrical reset guidance, or quiet, high-torque replacement installations.",
        commonSymptoms: [
          "Unit hums loudly but the blades do not spin",
          "Water dripping from the reset button under the sink",
          "Persistent foul food waste odors despite cleaning",
          "Water backing up into the adjacent sink basin",
        ],
        serviceLink: "/services/garbage-disposal-repair-irvine-ca/",
      },
      {
        slug: "water-line-repair-irvine-ca",
        name: "Main Water Line Repair & Replacement",
        badge: "Yard Line Service",
        image: "/images/water-line-main-repair.jpg",
        shortExplanation:
          "The main supply pipe running between your municipal water meter at the sidewalk and your Woodbridge home can fracture from shifting soil. Non-invasive trenchless methods replace leaking yard lines with minimal landscape impact.",
        commonSymptoms: [
          "Unexplained soggy or extra-green patch on the lawn",
          "Sudden drop in overall household water volume",
          "Hissing sounds near the front water shutoff valve",
          "Water meter registering usage with house shut off",
        ],
        serviceLink: "/services/water-line-repair-irvine-ca/",
      },
    ],
  },

  problemExplorer: {
    heading: "What Plumbing Problem Are You Experiencing in Woodbridge?",
    subtitle:
      "Select your observed symptom to view likely causes, urgency levels, safety shutoff advice, and recommended next steps for your Woodbridge property.",
  },

  midPageCTA: {
    eyebrow: "Woodbridge Resident Assistance • Direct Irvine Line",
    heading: "Have a Plumbing Concern in Woodbridge?",
    highlightText: "Speak With a Specialist Now.",
    description:
      "Don't let a dripping angle stop, noisy water heater, or slow-draining sewer line escalate into costly damage. Call our Irvine team at (949) 539-8503 to discuss your symptoms and connect with an independent local professional.",
    ctaText: `Call ${BUSINESS_PHONE.display}`,
    bulletPoints: [
      "No waiting for online form replies",
      "Woodbridge slab & copper expertise",
      "Direct telephone diagnostic triage",
    ],
    image: "/images/copper-pipe-repair.jpg",
    imageAlt: "Plumbing technician soldering copper pipe joint in Woodbridge Irvine home",
  },

  localConcerns: {
    heading: "Plumbing Concerns Woodbridge Homeowners May Encounter",
    subtitle:
      "Understanding the historical materials and environmental factors in Woodbridge helps homeowners spot early warning signs before major water damage occurs.",
    items: [
      {
        title: "Aging Copper Supply Lines & Under-Slab Pinhole Leaks",
        description:
          "Homes constructed in Woodbridge between 1975 and 1985 were commonly piped with copper supply lines buried directly beneath concrete slab foundations without protective sleeving. Over 40+ years, local soil acidity and water friction can cause tiny pinhole ruptures.",
        causes:
          "Soil electro-chemical interaction, domestic hot water thermal expansion, and thin-walled Type M copper degradation.",
        warningSigns: [
          "Warm spots radiating through ground-floor tile, vinyl, or carpet",
          "Faint hissing or rushing water sounds when all faucets are shut off",
          "Unexplained spikes in IRWD monthly water bills",
          "Damp baseboards or minor plaster bubbling on bottom walls",
        ],
        consequences:
          "Foundation subgrade erosion, saturated drywall, mold colonies beneath flooring, and continuous water waste.",
        whenToCall:
          "Call as soon as you notice an unexpected bill increase or floor warmth to arrange acoustic leak locating.",
        relatedServiceSlug: "slab-leak-repair-irvine-ca",
        relatedServiceName: "Slab Leak Repair",
      },
      {
        title: "Hard Water Mineral Scale in Water Heaters",
        description:
          "Water delivered by the Irvine Ranch Water District carries natural mineral hardness of 14 to 18 grains per gallon (GPG). In conventional storage water heaters, dissolved calcium and magnesium precipitate onto burner plates as rock-hard sediment.",
        causes:
          "High dissolved calcium/magnesium content reacting with high burner temperatures inside storage tanks.",
        warningSigns: [
          "Popping, rumbling, or kettle-like knocking noises during heating cycles",
          "Lukewarm showers and diminished hot water reserves",
          "Rusty or tea-colored tint in hot water taps",
          "Water dripping from the temperature and pressure relief (TPR) valve",
        ],
        consequences:
          "Premature tank rupture, burner plate overheating, efficiency loss, and sudden cold water failure.",
        whenToCall:
          "Call when rumbling begins to evaluate whether a descaling flush or sacrificial anode rod replacement can save the tank.",
        relatedServiceSlug: "water-heater-repair-irvine-ca",
        relatedServiceName: "Water Heater Repair",
      },
      {
        title: "Tree Root Intrusion in Established Greenbelt Laterals",
        description:
          "Woodbridge's lush urban forest of mature eucalyptus, sycamore, and pine trees enhances the neighborhood but poses risks to underground sewer laterals. Tree roots naturally seek out moisture escaping through older clay or ABS pipe joints.",
        causes:
          "Mature tree roots infiltrating pipe joints, ground shifting near lake channels, and age-related lateral settling.",
        warningSigns: [
          "Multiple plumbing fixtures backing up simultaneously",
          "Toilet bowls bubbling or gurgling when washing machines drain",
          "Persistent organic sewer odors near outdoor cleanouts",
          "Slow drainage that recurs within weeks of basic plunging",
        ],
        consequences:
          "Raw sewage overflowing into ground-floor shower pans and bathrooms, causing biohazard contamination.",
        whenToCall:
          "Call upon the first sign of multiple slow fixtures before an active sewer backup floods your home.",
        relatedServiceSlug: "sewer-line-repair-irvine-ca",
        relatedServiceName: "Sewer Line Repair",
      },
      {
        title: "High Municipal Water Pressure & Regulator Fatigue",
        description:
          "Incoming municipal water main pressures in Irvine frequently range from 85 to 110+ PSI to serve multi-story developments and hillside zones. Residential plumbing codes mandate that household pressure remain under 80 PSI (ideally 65–75 PSI).",
        causes:
          "Failed internal rubber diaphragms inside 10+ year-old Pressure Reducing Valves (PRVs).",
        warningSigns: [
          "Banging or vibrating 'water hammer' pipes when faucets snap shut",
          "Toilets running intermittently without being flushed",
          "Premature failures of washing machine hoses or dishwasher valves",
          "Relief valves on water heaters weeping water onto the garage floor",
        ],
        consequences:
          "Catastrophic supply line bursts, blown appliance solenoid valves, and accelerated fixture fatigue.",
        whenToCall:
          "Call to schedule an accurate gauge pressure test and PRV regulator replacement.",
        relatedServiceSlug: "leak-detection-irvine-ca",
        relatedServiceName: "Pressure Regulation & Leak Diagnostics",
      },
    ],
  },

  process: {
    badge: "Straightforward Phone Process",
    heading: "How to Get Plumbing Assistance in Woodbridge",
    subtitle:
      "Connecting with reliable plumbing help in Woodbridge is direct, transparent, and phone-first. Here is how your inquiry is handled from first contact.",
    steps: [
      {
        step: "01",
        title: "Call Our Irvine Line",
        description: `Dial ${BUSINESS_PHONE.display} and speak directly with a representative. Explain the symptoms you are noticing in your Woodbridge residence without filling out forms.`,
        highlight: "Instant Phone Connection",
      },
      {
        step: "02",
        title: "Discuss Symptoms & Triage",
        description:
          "Describe your home type (single-family detached, townhome, or condo), location within Woodbridge (North Lake, South Lake, Stonecreek), and whether immediate shutoff guidance is required.",
        highlight: "Local System Triage",
      },
      {
        step: "03",
        title: "Review Available Service Options",
        description:
          "Discuss the recommended diagnostic approach, realistic cost considerations, and connect with an independent licensed plumbing contractor available for your schedule.",
        highlight: "Transparent Next Steps",
      },
    ],
  },

  emergencyGuidance: {
    heading: "Urgent Plumbing Problems in Woodbridge",
    subtitle:
      "Plumbing emergencies demand fast, safe action to prevent costly structural damage to drywall, cabinetry, and flooring. Follow these safe protocols before professional arrival.",
    urgentSituations: [
      {
        title: "Active Burst Supply Pipe or Angle Stop Rupture",
        description:
          "Pressurized water quickly floods cabinetry, laminate, or carpet, potentially damaging subfloors and lower levels.",
        protocol:
          "Immediately locate and rotate your main water shutoff valve clockwise until tight. If safe, switch off electricity to flooded areas at the breaker box.",
        severity: "critical",
      },
      {
        title: "Main Sewer Line Wastewater Backup",
        description:
          "Raw sewage rising into lower-level bathtubs, showers, or floor drains creates severe sanitation and contamination risks.",
        protocol:
          "Stop using all household water immediately. Do not flush toilets, run dishwashers, or drain sinks. Keep children and pets away from the contaminated area.",
        severity: "critical",
      },
      {
        title: "Rapid Water Heater Tank Rupture or Leaking Valve",
        description:
          "Water pouring from the bottom seam of a water heater can flood garages or interior utility closets within minutes.",
        protocol:
          "Shut off the cold water supply valve located on top of the water heater tank. Switch the gas control knob to 'OFF' or flip the dedicated electric circuit breaker.",
        severity: "urgent",
      },
      {
        title: "Suspected Gas Odor Near Water Heater or Furnace",
        description:
          "A sulfurous or rotten-egg odor indicates a potentially hazardous natural gas leak in the vicinity of appliances.",
        protocol:
          "Evacuate the home immediately. Do not flip light switches, use phones inside, or light matches. Call SoCalGas (1-800-427-2200) or 911 from a safe distance.",
        severity: "critical",
      },
    ],
    shutoffInstructions: {
      locationDescription:
        "In most Woodbridge single-family homes and townhomes, the main residential water shutoff valve is located outside near the front hose bib or inside the garage near the water heater closet.",
      steps: [
        "Locate the brass gate valve (round wheel handle) or ball valve (lever handle) on the main riser pipe.",
        "For a lever ball valve, turn the handle 90 degrees until it is perpendicular to the pipe.",
        "For a round wheel gate valve, rotate it clockwise ('righty-tighty') until firmly closed.",
        "Open an exterior hose bib or lower faucet to relieve residual pressure from the plumbing lines.",
      ],
      gasWarning:
        "SAFETY MANDATE: For suspected natural gas leaks, leave the premises immediately before using any phone or electric device.",
    },
  },

  pricingFactors: {
    heading: "What Affects Plumbing Repair Costs in Woodbridge?",
    subtitle:
      "Plumbing repair costs vary depending on diagnostic requirements, material choices, and system accessibility. Here is an honest breakdown of the factors that determine your final investment.",
    factors: [
      {
        title: "Diagnostic Complexity & Equipment",
        description:
          "Simple drain snaking requires basic mechanical equipment, whereas locating a slab leak requires specialized acoustic microphones, thermal sensors, and pressure decay equipment.",
        impact: "Varies by diagnostic tools required",
      },
      {
        title: "System Accessibility (Slab vs. Open Wall)",
        description:
          "Woodbridge homes on concrete slab foundations often require overhead bypass reroutes rather than jackhammering through finished tile or hardwood floors, saving overall restoration costs.",
        impact: "Directly influences labor hours & disruption",
      },
      {
        title: "Materials & Piping Selection",
        description:
          "Modern repairs typically use flexible cross-linked polyethylene (PEX-a) or high-grade Type L copper tubing. PEX reduces fitting connections and resists local water chemistry.",
        impact: "Affects material costs & longevity",
      },
      {
        title: "Scope of Repair (Spot Fix vs. Comprehensive Repipe)",
        description:
          "Patching a single pinhole leak is economical in the short term, but if pipe walls are universally thin from age, a whole-house repipe provides better long-term financial security.",
        impact: "Determines immediate vs. lifetime value",
      },
      {
        title: "Permitting & HOA Compliance",
        description:
          "Major water heater replacements, sewer line relining, and repiping projects in Woodbridge may require City of Irvine permits and adherence to Woodbridge Village Association guidelines.",
        impact: "Standard municipal filing & inspection fees",
      },
    ],
    pricingNote:
      "We believe in straightforward pricing discussions. When you call (949) 539-8503, our team will discuss your symptoms and provide clear context regarding what to expect before any technician is dispatched to your Woodbridge property.",
  },

  whyChooseUs: {
    heading: "Why Woodbridge Residents Explore Plumbing Help Through Spectrum",
    subtitle:
      "When water leaks or sewer problems threaten your Woodbridge home, you need prompt, honest telephone assistance without waiting in online queues or navigating automated menus.",
    benefits: [
      {
        title: "Woodbridge Village Technical Understanding",
        description:
          "Guidance tailored specifically to Woodbridge's 1970s–1980s construction, slab foundations, HOA guidelines, and IRWD water hardness levels.",
        highlight: "Hyperlocal Expertise",
      },
      {
        title: "Clear, Engineering-Minded Explanations",
        description:
          "Understand the root cause of your plumbing issue, what safety steps to take immediately, and what repair pathways exist before spending a dollar.",
        highlight: "Honest Diagnostics",
      },
      {
        title: "Direct Master Telephone Connection",
        description:
          "No frustrating 10-step online forms or delayed email callbacks. Dial (949) 539-8503 to speak immediately with someone who understands residential plumbing.",
        highlight: "Zero Online Forms",
      },
      {
        title: "Access to Qualified Local Specialists",
        description:
          "Connect with experienced, independent plumbing professionals specializing in your exact symptom, from water heater flushes to electronic slab leak locating.",
        highlight: "Vetted Independent Pros",
      },
    ],
  },

  coverage: {
    heading: "Woodbridge Plumbing Service Coverage",
    description:
      "Providing complete plumbing information and referral coverage across all neighborhoods, tracts, and master associations within Woodbridge, Irvine.",
    subAreas: [
      "North Lake Shore & Promenade",
      "South Lake Shore & Lagoon",
      "Stonecreek Community",
      "Windjammer & Spinnaker Bay",
      "Springacres & Meadowpark",
      "Woodbridge Village Center Perimeter",
      "Alton Parkway to Irvine Center Drive Corridor",
      "Culver Drive to Jeffrey Road Corridor",
    ],
    landmarkBoundaries:
      "Bordered by Irvine Center Drive to the north, Alton Parkway to the south, Culver Drive to the west, and Jeffrey Road to the east.",
    zipCodesServed: ["92604", "92614"],
  },

  scenarios: [
    {
      village: "Woodbridge (North Lake)",
      title: "Pinhole Slab Leak Diagnostic in a 1978 Single-Family Home",
      scenario:
        "A Woodbridge homeowner noticed an unexplained warm spot on their kitchen vinyl flooring and a $140 jump in their monthly IRWD water statement.",
      resolution:
        "Connected the customer with an acoustic leak detection specialist who located an under-slab copper pinhole leak in the hot water line and executed a clean overhead PEX bypass without cutting through kitchen flooring.",
      keyTakeaway:
        "Acoustic locating isolated the exact failed line, preserving newly installed custom kitchen cabinetry and tile.",
    },
    {
      village: "Woodbridge (South Lake)",
      title: "Water Heater Scale Flush & Element Replacement",
      scenario:
        "A resident reported loud knocking and rumbling sounds coming from their 9-year-old gas water heater in the garage, accompanied by lukewarm showers.",
      resolution:
        "A plumbing specialist flushed out heavy mineral scale accumulated from Irvine's hard water, replaced a compromised thermocouple, and installed a powered anode rod.",
      keyTakeaway:
        "Timely sediment removal restored full water temperature and extended the existing tank's operational lifespan.",
    },
    {
      village: "Woodbridge (Stonecreek)",
      title: "Mainline Sewer Root Clearing Near Mature Eucalyptus",
      scenario:
        "A family experienced simultaneous gurgling in their downstairs guest toilet and slow drainage in the primary bathtub whenever laundry ran.",
      resolution:
        "HD sewer camera inspection revealed root masses penetrating clay pipe joints 40 feet from the cleanout. High-pressure hydro jetting scoured the roots clean, followed by an epoxy lining patch.",
      keyTakeaway:
        "Non-invasive hydro jetting and pipe relining eliminated the blockage without excavating the front lawn or paved driveway.",
    },
  ],

  nearbyLocationSlugs: [
    "westpark",
    "university-park",
    "northwood",
    "turtle-rock",
  ],

  relatedArticleSlugs: [
    "slab-leak-indicators",
    "drain-blockage-signs",
    "water-heater-longevity",
    "mineral-scale-plumbing",
  ],

  faqs: [
    {
      id: "woodbridge-faq-1",
      question: "What plumbing services are available in Woodbridge, Irvine?",
      answer:
        "We assist Woodbridge homeowners with emergency plumbing triage, drain cleaning, conventional and tankless water heater repair, electronic leak detection, under-slab copper pipe diagnostics, sewer camera inspections, hydro jetting, toilet repairs, and whole-home repiping. Call (949) 539-8503 to discuss your exact symptom.",
    },
    {
      id: "woodbridge-faq-2",
      question: "Why are slab leaks relatively common in Woodbridge homes?",
      answer:
        "Most Woodbridge residences were constructed between 1975 and 1985 on concrete slab foundations with copper water lines running beneath the concrete. Over several decades, soil chemistry, continuous thermal expansion from hot water lines, and water turbulence can cause pinhole breaches in older copper tubing. Advanced non-invasive acoustic detection locates these leaks without tearing up your entire floor.",
    },
    {
      id: "woodbridge-faq-3",
      question: "How does Irvine's water hardness affect Woodbridge plumbing?",
      answer:
        "The Irvine Ranch Water District (IRWD) supplies tap water with a mineral hardness averaging 14 to 18 grains per gallon (GPG). This high mineral content precipitates as solid calcium scale inside water heaters, faucet cartridges, and showerheads, causing rumbling tanks, reduced heating efficiency, and premature valve wear.",
    },
    {
      id: "woodbridge-faq-4",
      question: "Where is the main water shutoff valve in a Woodbridge home?",
      answer:
        "In most Woodbridge single-family houses, the main shutoff valve is located outside near the front garden hose bib or inside the garage near the water heater. In attached townhomes and patio homes, it is often inside an exterior utility closet or under the front entrance bushes. Rotating the valve clockwise or turning the lever perpendicular to the pipe shuts off incoming water.",
    },
    {
      id: "woodbridge-faq-5",
      question: "What should I do if a pipe bursts in my Woodbridge residence?",
      answer:
        "First, immediately shut off the main water supply valve to halt the flow of water. Second, open an outdoor hose faucet to drain remaining line pressure. Third, turn off electrical power at the main breaker box if water is near outlets or fixtures. Then call our Irvine line at (949) 539-8503 for telephone triage and emergency service connection.",
    },
    {
      id: "woodbridge-faq-6",
      question: "Do plumbing repairs in Woodbridge require HOA approval?",
      answer:
        "Standard interior repairs such as fixing leaks, clearing drains, and replacing water heaters generally do not require HOA architectural review. However, exterior modifications such as running new rooftop vent stacks, relocating exterior hose bibs, or installing outdoor cleanouts may need alignment with Woodbridge Village Association (WVA) guidelines. Independent plumbers can advise on compliant options.",
    },
    {
      id: "woodbridge-faq-7",
      question: "Can an under-slab leak in Woodbridge be fixed without jackhammering my floor?",
      answer:
        "Yes. In most cases, an overhead PEX bypass reroute is the preferred modern solution. Rather than jackhammering through finished tile, hardwood, or laminate flooring, the damaged under-slab copper line is abandoned and a new, flexible PEX line is routed through the attic or interior wall cavities, preserving your flooring completely.",
    },
    {
      id: "woodbridge-faq-8",
      question: "What information should I have ready when I call?",
      answer:
        "Helpful details include the specific symptoms you observe (such as a gurgling drain, wet baseboard, warm spot on the floor, or loss of hot water), the approximate age and property type of your Woodbridge home, and whether you have already shut off the main water valve.",
    },
    {
      id: "woodbridge-faq-9",
      question: "Which nearby Irvine neighborhoods are also covered?",
      answer:
        "In addition to Woodbridge (92604, 92614), service coverage extends to nearby Irvine communities including Westpark, University Park, Northwood, Turtle Rock, Portola Springs, Great Park, and Orchard Hills.",
    },
    {
      id: "woodbridge-faq-10",
      question: "How do I find out whether immediate emergency assistance is available?",
      answer:
        "Call our Irvine telephone line directly at (949) 539-8503. Because plumbing emergencies depend on real-time specialist availability across Irvine, calling allows you to discuss your situation immediately and confirm available dispatch options.",
    },
  ],

  finalCTA: {
    eyebrow: "Woodbridge, Irvine Support • Live Phone Connection",
    heading: "Need Plumbing Help in Woodbridge, Irvine?",
    highlightText: "Call (949) 539-8503",
    description:
      "Call Spectrum Plumbing Irvine to discuss your plumbing needs, get immediate diagnostic clarity, and connect with experienced independent plumbing specialists in Woodbridge.",
    ctaText: `Call Now — ${BUSINESS_PHONE.display}`,
  },
};
