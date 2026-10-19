export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  shortDescription: string;
  typicalProblems: string[];
  features: string[];
  anchor: string;
  image: string;
  iconName: "Flame" | "Droplets" | "Zap" | "Activity" | "ShieldAlert" | "GitBranch" | "Search" | "Wrench";
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "emergency-plumbing-irvine-ca",
    title: "Emergency Plumbing in Irvine",
    badge: "Immediate Phone Priority",
    shortDescription:
      "Sudden pipe bursts, severe water overflow, and unexpected plumbing failures require immediate phone assistance. Connect quickly with available Irvine plumbing specialists.",
    typicalProblems: [
      "Active water leaks threatening flooring & drywall",
      "Burst pipe or sudden loss of water control",
      "Major sewer backflow into home fixtures",
      "Complete water shutoff emergency guidance",
    ],
    features: ["Fast phone connection", "Damage mitigation advice", "Residential priority"],
    anchor: "#services-emergency",
    image: "/images/copper-pipe-repair.jpg",
    iconName: "ShieldAlert",
  },
  {
    id: "drain-cleaning-irvine-ca",
    title: "Drain Cleaning Services",
    badge: "Most Requested",
    shortDescription:
      "Slow drains, recurring kitchen clogs, and backed-up bathroom fixtures disrupt your daily routine. Explore professional motorized clearing solutions for persistent household blockages.",
    typicalProblems: [
      "Standing water in shower pans or bathtubs",
      "Kitchen sinks backing up with foul odors",
      "Recurring branch line blockages",
      "Slow drainage across multiple household fixtures",
    ],
    features: ["Motorized snaking", "Branch line clearing", "Debris removal"],
    anchor: "#services-drain",
    image: "/images/drain-cleaning-equipment.jpg",
    iconName: "Droplets",
  },
  {
    id: "water-heater-repair-irvine-ca",
    title: "Water Heater Repair & Installation",
    badge: "Heating Specialist",
    shortDescription:
      "Lukewarm water, noisy tanks, and pilot light malfunctions leave your household without essential comfort. Get prompt diagnostic support for conventional and tankless units.",
    typicalProblems: [
      "No hot water or inconsistent water temperature",
      "Popping, rumbling, or knocking noises from the tank",
      "Moisture or rust pooling around heater base",
      "Pilot light repeatedly blowing out or failing to spark",
    ],
    features: ["Diagnostic evaluation", "Thermostat & element repair", "Tank replacement options"],
    anchor: "#services-water-heater",
    image: "/images/water-heater-diagnostic.jpg",
    iconName: "Flame",
  },
  {
    id: "leak-detection-irvine-ca",
    title: "Electronic Leak Detection",
    badge: "Non-Invasive Diagnostic",
    shortDescription:
      "Unexplained water bill spikes, warm floor patches, and damp baseboards often signal hidden pipe leaks. Discuss advanced acoustic and thermal locating techniques.",
    typicalProblems: [
      "Water meter spinning while no fixtures are running",
      "Unexplained dampness or peeling wall paint",
      "Moldy odors behind drywall or under cabinetry",
      "Hissing sounds inside walls or beneath floors",
    ],
    features: ["Acoustic sensors", "Thermal imaging guidance", "Minimal drywall disruption"],
    anchor: "#services-leak",
    image: "/images/leak-detection-acoustic.jpg",
    iconName: "Search",
  },
  {
    id: "slab-leak-repair-irvine-ca",
    title: "Slab Leak Diagnosis & Repair",
    badge: "Foundation Expertise",
    shortDescription:
      "Many Irvine single-family homes and townhomes are built on concrete slab foundations. Learn about under-slab copper pipe failures and available repair pathways.",
    typicalProblems: [
      "Warm spots under hardwood, tile, or carpet",
      "Sound of running water with all faucets closed",
      "Foundation perimeter dampness or cracks",
      "Drop in overall household hot water pressure",
    ],
    features: ["Direct slab repair", "Overhead pipe reroutes", "Epoxy lining alternatives"],
    anchor: "#services-slab",
    image: "/images/kitchen-sink-repair.jpg",
    iconName: "Activity",
  },
  {
    id: "sewer-line-repair-irvine-ca",
    title: "Sewer Line Inspection & Repair",
    badge: "Mainline Pipeline",
    shortDescription:
      "Tree root intrusion, ground shifting, and aged sewer lines can cause multiple drains to back up simultaneously. Access video camera inspections and trenchless repair options.",
    typicalProblems: [
      "Multiple drains backing up at the lowest point",
      "Gurgling sounds from toilets when sink drains",
      "Sewer gas odors in the yard or near cleanouts",
      "Lush or sunken patches of lawn along pipe lines",
    ],
    features: ["HD camera pipeline inspections", "Hydro jetting descaling", "Trenchless pipe options"],
    anchor: "#services-sewer",
    image: "/images/sewer-camera-inspection.jpg",
    iconName: "GitBranch",
  },
];

export * from "./services/index";

