import { BlogPost } from "@/types/blog";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const earthquakeGasShutOffValvesPost: BlogPost = {
  slug: "earthquake-gas-shut-off-valves-irvine",
  title: "Do You Need an Earthquake Gas Shut-Off Valve in Irvine? California Seismic Plumbing Guide",
  description:
    "Protect your Orange County property from seismic post-earthquake fires. Learn how automatic seismic gas shut-off valves work, local building codes, and installation standards.",
  category: "Gas Line Services",
  primaryKeyword: "seismic gas shutoff valve irvine ca",
  secondaryKeywords: [
    "earthquake shut off valve installation",
    "socal gas earthquake valve requirement",
    "gas leak signs garage",
    "gas line services irvine ca",
  ],
  publishedAt: "2026-10-19T11:00:00Z",
  updatedAt: "2026-10-19T16:00:00Z",
  author: {
    name: "Spectrum Editorial Trade Team",
    role: "Senior Plumbing Content & Technical Research Group",
    bio: "Our technical editorial team consults licensed California plumbing contractors, municipal utility reports, and standard code manuals to publish accurate, transparent diagnostic guides for Orange County property owners.",
    profileUrl: "/editorial-standards/",
    avatar: "/images/hero-pipes-3d.jpg",
  },
  reviewer: {
    name: "Independent Trade Review Board",
    credentials: "Reviewed against California Plumbing Code (CPC Chapter 12: Fuel Gas Piping) & City of Irvine Building Security Guidelines",
    reviewedAt: "2026-10-19",
    note: "Verified for technical accuracy regarding CSA-certified seismic earthquake-actuated natural gas shut-off valves.",
  },
  featuredImage: {
    src: "/images/gas-line-shutoff-valve.jpg",
    alt: "Automatic seismic earthquake natural gas shutoff valve installed downstream of a residential gas meter in Irvine",
    caption:
      "A seismic gas shut-off valve automatically snaps closed during a magnitude 5.4 or higher earthquake, preventing post-tremor fires and gas line explosions.",
    width: 1200,
    height: 675,
  },
  readingTime: 9,
  quickAnswer: {
    heading: "Quick Seismic Safety Answer",
    text: "An automatic earthquake gas shut-off valve (also known as a seismic valve) is a mechanical safety device installed on your exterior gas meter riser. When seismic ground motion of magnitude 5.4 or greater strikes, an internal stainless steel ball drops onto a precision seat, instantly halting the flow of natural gas into your home. This prevents post-earthquake structural fires caused by severed water heater connectors or cracked wall pipes.",
    highlight:
      "Southern California historical records confirm that up to 50% of structural damage following major earthquakes is caused by subsequent natural gas fires, not ground shaking alone.",
  },
  relatedServiceSlugs: [
    "gas-line-services-irvine-ca",
    "emergency-plumbing-irvine-ca",
    "water-heater-repair-irvine-ca",
    "commercial-plumbing-irvine-ca",
  ],
  relatedArticleSlugs: [
    "how-to-shut-off-main-water-valve-irvine",
    "water-heater-not-heating",
    "copper-pinhole-leaks-irvine-repipe",
  ],
  references: [
    {
      title: "Earthquake Gas Safety & Automatic Shut-Off Valve Guidelines",
      publisher: "Southern California Gas Company (SoCalGas)",
      url: "https://www.socalgas.com/stay-safe/emergency-preparedness/natural-gas-safety-and-earthquakes",
      accessDate: "October 2026",
    },
    {
      title: "Standard for Earthquake-Actuated Automatic Gas Shutoff Devices (ANSI/ASCE 25-06)",
      publisher: "American Society of Civil Engineers",
      url: "https://www.asce.org",
      accessDate: "October 2026",
    },
    {
      title: "California Plumbing Code: Fuel Gas Piping Requirements (Title 24, Part 5, Chapter 12)",
      publisher: "California Building Standards Commission",
      url: "https://www.dgs.ca.gov/BSC/Codes",
      accessDate: "October 2026",
    },
  ],
  seo: {
    title: "Earthquake Gas Shut-Off Valves in Irvine, CA | Spectrum Plumbing",
    description:
      "Is an automatic earthquake gas shut-off valve required in Irvine? Learn how seismic valves protect homes from post-quake fires, installation costs, and codes.",
    canonical: `${BUSINESS_INFO.domain}/blog/earthquake-gas-shut-off-valves-irvine/`,
    ogImage: "/images/gas-line-shutoff-valve.jpg",
    keywords: [
      "earthquake gas shutoff valve irvine",
      "seismic gas valve installation orange county",
      "socal gas meter shut off valve",
      "prevent gas fire earthquake",
    ],
  },
  published: true,
  sections: [
    {
      id: "the-seismic-threat",
      title: "The Reality of Seismic Hazards in Orange County",
      badge: "Geological Risk",
      paragraphs: [
        "While Southern California homeowners are well-drilled on storing emergency water and strapping down heavy bookshelves, natural gas infrastructure represents one of the most volatile secondary hazards during a major seismic event.",
        "Orange County sits adjacent to several active tectonic fracture systems, including the Newport-Inglewood Fault, the Whittier Fault, and the San Joaquin Hills Blind Thrust Fault running directly beneath coastal and inland communities. During severe lateral shaking, ground displacement and building racking stress rigid gas piping.",
        "Water heaters can rip away from wall anchors, snapping flexible stainless steel gas connectors. Rigid black iron pipe threads inside crawlspaces or attic chaseways can shear, filling living quarters with combustible methane within minutes.",
      ],
      callout: {
        type: "safety",
        title: "The Lessons of the Northridge Earthquake",
        content:
          "Following the 1994 Northridge earthquake (magnitude 6.7), the National Fire Protection Association (NFPA) documented over 1,000 post-tremor fires across the Los Angeles and Orange County basins, with over half directly attributable to severed natural gas lines. In many neighborhoods, ruptured municipal water mains left fire hydrants dry, allowing preventable gas fires to consume entire residential blocks.",
      },
    },
    {
      id: "how-seismic-valves-work",
      title: "How an Automatic Seismic Gas Valve Operates",
      badge: "Mechanical Engineering",
      paragraphs: [
        "A seismic shut-off valve is completely mechanical and requires zero electrical power or battery backup. Because power grids inevitably black out during major tremors, passive mechanical reliability is vital.",
      ],
      subsections: [
        {
          id: "valve-internal-mechanics",
          title: "The Internal Acceleration Ball Mechanism",
          paragraphs: [
            "Inside a CSA/State Architect-certified seismic valve (such as those manufactured by Pacific Seismic Products or Little Firefighter), a calibrated stainless steel ball rests atop an inverted pedestal.",
            "Under normal ambient vibrations—such as heavy municipal buses driving down Irvine Boulevard or sonic booms—the ball remains stably centered. However, when lateral seismic waves matching a magnitude 5.4 or greater earthquake strike the foundation, the acceleration dislodges the ball from its perch. The ball drops directly onto a machined brass seat, and a spring-loaded flapper snaps shut, immediately halting all gas flow into the building.",
          ],
        },
      ],
      table: {
        caption: "Comparing Automatic Seismic Valves vs. Excess-Flow Valves",
        headers: ["Feature", "Seismic Motion Shut-Off Valve", "Excess-Flow Gas Valve (EFV)"],
        rows: [
          ["Trigger Mechanism", "Ground acceleration & shaking (mag 5.4+)", "Sudden volume surge from a catastrophic line shear"],
          ["Small Line Breach Detection", "Shuts off regardless of leak size during quake", "Will NOT trip on slow or moderate leaks"],
          ["Power Requirement", "100% mechanical (zero power needed)", "100% mechanical (zero power needed)"],
          ["Placement", "Customer side of gas meter riser", "Customer side of gas meter or branch line"],
          ["Reset Protocol", "Manual hex key or screwdriver reset", "Automatic equalization or manual push"],
        ],
      },
    },
    {
      id: "irvine-codes-and-regulations",
      title: "Are Seismic Valves Required by Law in Irvine?",
      badge: "Municipal Codes",
      paragraphs: [
        "Navigating local building mandates in Orange County requires understanding municipal ordinances versus general state codes:",
      ],
      subsections: [
        {
          id: "city-ordinance-breakdown",
          title: "Permits, Renovations & Real Estate Sales",
          paragraphs: [
            "While California State Law does not mandate retrofitting seismic gas valves on existing unaltered homes, many municipal jurisdictions (including Los Angeles, Santa Monica, and multiple Orange County city building departments) mandate seismic valve installation whenever:",
          ],
          listItems: [
            "A residential property undergoes significant remodel or renovation projects permitted in excess of $10,000 to $50,000.",
            "A new commercial property, multi-family apartment complex, or school facility is constructed.",
            "A tankless water heater or new furnace gas line permit is pulled with the City of Irvine Community Development Department.",
            "Many HOA boards throughout Irvine (including Woodbridge, Quail Hill, and Great Park associations) strongly encourage or require seismic shut-offs to protect shared-wall townhomes and condominium buildings.",
          ],
          listType: "bullet",
        },
      ],
      callout: {
        type: "important",
        title: "Installation Placement: Downstream of the SoCalGas Meter",
        content:
          "By utility regulation, licensed plumbing contractors install the seismic shutoff valve immediately downstream of the SoCalGas utility meter (on the customer-owned piping), never between the street service line and the meter. Work must adhere to CPC Chapter 12 and include proper rigid pipe bracing.",
      },
    },
    {
      id: "what-to-do-after-a-trip",
      title: "What to Do If Your Seismic Valve Triggers",
      badge: "Post-Quake Protocol",
      paragraphs: [
        "If a significant tremor occurs and your gas appliances stop working, your seismic valve successfully performed its duty.",
        "Severe tremors can also jar electrical panels, loosen service conduit, and spark internal arcing in high-amperage appliances. Certified trade partners like [Winter Haven Electrician](https://winterhavenelectrician.com/) advise inspecting main service grounding electrodes and testing dedicated 240V circuits for shorts before re-energizing gas heating controls or turning pilot lights back on.",
      ],
      subsections: [
        {
          id: "reset-safety-steps",
          title: "Safe Resetting & Inspection",
          paragraphs: [
            "Before ever resetting the valve, you must confirm that no interior gas leaks exist:",
          ],
          listItems: [
            "Sniff for Rotten Eggs: Mercaptan odorant is added to gas. If you smell gas anywhere inside or outside your house, DO NOT reset the valve. Evacuate immediately and contact SoCalGas or emergency services.",
            "Inspect Appliance Connectors: Visually inspect your water heater, stove, dryer, and furnace to verify that flexible connectors did not kink or separate.",
            "Professional Re-Lighting: Once cleared, the valve can be reset using an external flathead screwdriver or hex key slot. If you are uncomfortable re-lighting pilot lights on older water heaters or furnaces, contact a licensed plumbing technician to perform a manometer pressure test.",
          ],
          listType: "bullet",
        },
      ],
    },
  ],
  conclusion: {
    heading: "Inexpensive Protection for Your Family's Home",
    paragraphs: [
      "Installing an automatic earthquake gas shut-off valve is one of the most practical, cost-effective physical upgrades an Irvine homeowner can make.",
      "For a one-time trade investment, you eliminate the single largest cause of structure-destroying fires following California seismic events.",
    ],
    keyTakeaway:
      "Call (949) 539-8503 to discuss code-compliant seismic gas valve installation and whole-home gas line safety inspections in Irvine.",
  },
};
