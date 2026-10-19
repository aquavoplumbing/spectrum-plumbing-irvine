export interface InsightItem {
  id: string;
  category: string;
  title: string;
  readTime: string;
  summary: string;
  keyPoints: string[];
  serviceLink: {
    text: string;
    href: string;
  };
}

export const PLUMBING_INSIGHTS_DATA: InsightItem[] = [
  {
    id: "slab-leak-indicators",
    category: "Foundation & Leaks",
    title: "Identifying Under-Slab Copper Pipe Leaks in Concrete Foundations",
    readTime: "4 min read",
    summary:
      "Because many Southern California residences are constructed on slab-on-grade foundations, water supply lines often run encased beneath reinforced concrete. Recognizing early subtle indicators prevents catastrophic foundation moisture saturation.",
    keyPoints: [
      "Unexplained warmth radiating through tile, laminate, or carpeted floors.",
      "The sound of running water behind baseboards when all taps are tightly closed.",
      "A steady or creeping increase in your municipal water utility bill.",
      "Damp baseboards or minor efflorescence along interior perimeter walls.",
    ],
    serviceLink: {
      text: "Explore Slab Leak Detection Options",
      href: "#services-slab",
    },
  },
  {
    id: "drain-blockage-signs",
    category: "Drainage Systems",
    title: "Early Warning Signals of Developing Main Sewer Line Blockages",
    readTime: "3 min read",
    summary:
      "A single slow sink is usually an isolated trap issue, but simultaneous sluggish drains across bathrooms point to a mainline sewer obstruction. Timely intervention avoids raw wastewater backups into living areas.",
    keyPoints: [
      "Toilets that bubble or gurgle when an adjacent bathtub or washing machine empties.",
      "Water surfacing in shower pans during dishwasher or laundry cycles.",
      "Persistent sulfurous or organic sewer gas odors near exterior ground cleanouts.",
      "Recurring branch line blockages despite basic plunging attempts.",
    ],
    serviceLink: {
      text: "View Drain Cleaning & Sewer Options",
      href: "#services-drain",
    },
  },
  {
    id: "water-heater-longevity",
    category: "Water Heating",
    title: "Water Heater Performance: Repair vs. Replacement Considerations",
    readTime: "4 min read",
    summary:
      "The average lifespan of a standard residential storage tank water heater in Orange County ranges between 8 and 12 years. Recognizing mechanical wear versus terminal tank failure helps homeowners make informed decisions.",
    keyPoints: [
      "Popping and rumbling sounds indicate heavy sediment insulating the burner base.",
      "Rusty or tea-colored hot water signals sacrificial anode depletion and interior oxidation.",
      "Moisture pooling around the temperature-pressure relief valve or tank seams.",
      "Tankless systems require annual descaling flushes to maintain heat exchanger efficiency.",
    ],
    serviceLink: {
      text: "Learn About Water Heater Services",
      href: "#services-water-heater",
    },
  },
  {
    id: "mineral-scale-plumbing",
    category: "Water Quality",
    title: "Managing Mineral Hardness & Water Pressure Regulation",
    readTime: "3 min read",
    summary:
      "Southern California tap water contains naturally occurring dissolved minerals including calcium and magnesium. Combined with elevated municipal supply pressures, this can accelerate valve and fixture degradation.",
    keyPoints: [
      "White crusty buildup on faucet aerators, showerheads, and dishwasher heating elements.",
      "Household water pressure exceeding 80 PSI strains supply lines and appliance solenoids.",
      "Pressure-reducing valves (PRVs) typically require inspection or replacement every 5 to 7 years.",
      "Whole-home conditioning protects high-efficiency tankless units and smart fixtures.",
    ],
    serviceLink: {
      text: "Review Pressure Regulation Guidance",
      href: "#services-leak",
    },
  },
];
