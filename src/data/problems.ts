export interface ProblemItem {
  id: string;
  title: string;
  iconName: "Droplet" | "Clock" | "Flame" | "Gauge" | "RotateCcw" | "AlertTriangle" | "ShieldAlert" | "Wrench";
  urgency: "High" | "Medium" | "Urgent";
  shortExplanation: string;
  warningSigns: string[];
  possibleCauses: string[];
  relevantService: string;
  serviceAnchor: string;
  recommendedNextStep: string;
  safetyAdvice?: string;
  image: string;
}

export const COMMON_PROBLEMS_DATA: ProblemItem[] = [
  {
    id: "leaking-pipes",
    title: "Leaking Pipes",
    iconName: "Droplet",
    urgency: "Urgent",
    shortExplanation:
      "Visible drips or water accumulation near exposed plumbing, under sinks, or behind walls. Prompt action is critical to prevent water damage to baseboards, cabinetry, and flooring.",
    warningSigns: [
      "Water pooling beneath sinks or along baseboards",
      "Damp drywall with faint yellow water rings",
      "Sudden spike in municipal water utility charges",
      "Persistent musty odor in enclosed utility closets",
    ],
    possibleCauses: [
      "Loose compression fittings or joint degradation",
      "Pinhole corrosion in copper supply lines",
      "Excessive household water pressure weakening pipe joints",
      "Worn O-rings or deteriorated valve cartridges",
    ],
    relevantService: "Leak Detection & Pipe Repair",
    serviceAnchor: "#services-leak",
    recommendedNextStep:
      "Place a bucket or towels beneath the active leak. Call to discuss the exact location and flow rate with a local plumbing specialist.",
    safetyAdvice:
      "If water is spraying or pooling rapidly, immediately turn off the fixture angle stop valve or your home's main water shutoff valve.",
    image: "/images/copper-pipe-repair.jpg",
  },
  {
    id: "clogged-drains",
    title: "Clogged Drains",
    iconName: "Clock",
    urgency: "Medium",
    shortExplanation:
      "Sinks, tubs, or showers where water stands for minutes or fails to drain altogether, often accompanied by unpleasant odors or bubbling sounds.",
    warningSigns: [
      "Water rising into shower pan when running bathroom sink",
      "Foul odors rising from kitchen sink disposal",
      "Slow swirling vortex when emptying a full basin",
      "Gurgling sounds heard in drainage vent pipes",
    ],
    possibleCauses: [
      "Accumulated hair and soap scum in shower traps",
      "Hardened cooking fats, oils, and grease in kitchen lines",
      "Foreign objects or non-flushable wipes lodged in bends",
      "Downstream mainline sewer lateral accumulation",
    ],
    relevantService: "Professional Drain Cleaning",
    serviceAnchor: "#services-drain",
    recommendedNextStep:
      "Avoid pouring caustic chemical drain cleaners that can corrode your plumbing. Call (949) 539-8503 to discuss mechanical drain clearing.",
    image: "/images/drain-cleaning-equipment.jpg",
  },
  {
    id: "no-hot-water",
    title: "No Hot Water",
    iconName: "Flame",
    urgency: "High",
    shortExplanation:
      "Water runs completely cold or runs out within a few minutes of use. Commonly indicates heating element failure, heavy sediment buildup, or burner malfunctions.",
    warningSigns: [
      "Water turns lukewarm halfway through a single shower",
      "Popping, rumbling, or knocking noises from the tank",
      "Rust-colored water flowing only from hot taps",
      "Moisture pooling around the base of the heater",
    ],
    possibleCauses: [
      "Heavy mineral scale insulating tank heating element",
      "Failed electric upper or lower heating element",
      "Pilot assembly or thermocouple malfunction on gas units",
      "Degraded dip tube allowing cold water to bypass heating chamber",
    ],
    relevantService: "Water Heater Repair & Diagnostics",
    serviceAnchor: "#services-water-heater",
    recommendedNextStep:
      "Check your circuit breaker panel or verify the gas supply valve is open. Call to review your water heater brand, age, and symptoms.",
    safetyAdvice:
      "If you smell natural gas or suspect a gas leak around the water heater, vacate the property immediately and contact your gas utility.",
    image: "/images/water-heater-diagnostic.jpg",
  },
  {
    id: "low-water-pressure",
    title: "Low Water Pressure",
    iconName: "Gauge",
    urgency: "Medium",
    shortExplanation:
      "Weak flow restricted to a single fixture or throughout the entire home. May indicate municipal supply issues, clogged aerators, or hidden leaks.",
    warningSigns: [
      "Shower spray turns to a weak trickle when laundry runs",
      "Kitchen sprayer lacks pressure to rinse dishes",
      "Pressure drops noticeably when multiple taps open",
      "High-pitched whistling sound when water is running",
    ],
    possibleCauses: [
      "Failing pressure reducing valve (PRV) at main line",
      "Mineral scale accumulation in faucet aerators and cartridges",
      "Active hidden pipe leak diverting water supply",
      "Municipal water utility line maintenance or regulator failure",
    ],
    relevantService: "Pressure Regulator & Leak Assessment",
    serviceAnchor: "#services-leak",
    recommendedNextStep:
      "Test both hot and cold taps across different rooms. If pressure is low everywhere, call to consult on pressure regulator diagnostics.",
    image: "/images/hero-pipes-3d.jpg",
  },
  {
    id: "running-toilet",
    title: "Running Toilet",
    iconName: "RotateCcw",
    urgency: "Urgent",
    shortExplanation:
      "Toilets that continuously run water into the bowl, fail to fill properly, or rise toward the rim upon flushing, wasting hundreds of gallons of water.",
    warningSigns: [
      "Toilet makes phantom filling sounds every 20 minutes",
      "Water ripples continuously in the toilet bowl",
      "Handle feels loose or has to be jiggled to stop running",
      "Water level in tank constantly overflows into overflow tube",
    ],
    possibleCauses: [
      "Worn or warped flapper valve allowing tank water to seep into bowl",
      "Improperly adjusted fill valve float mechanism",
      "Mineral buildup on flapper seat preventing a tight seal",
      "Partial blockage in toilet trapway or venting stack",
    ],
    relevantService: "Toilet Repair & Snaking Services",
    serviceAnchor: "#services-drain",
    recommendedNextStep:
      "If the bowl is rising, take off the tank lid and push down the flapper valve immediately to stop the flow of water into the bowl.",
    safetyAdvice:
      "Locate the angle stop valve behind the toilet near the floor and turn it clockwise until it stops to cut the water supply.",
    image: "/images/kitchen-sink-repair.jpg",
  },
  {
    id: "sewer-backup",
    title: "Sewer Backup",
    iconName: "AlertTriangle",
    urgency: "Urgent",
    shortExplanation:
      "Foul sewage smells coming from drains or water backing up into ground-floor shower pans when washing machines drain or toilets flush.",
    warningSigns: [
      "Multiple drains backing up simultaneously at lowest levels",
      "Toilets gurgling or bubbling when washing machine drains",
      "Sewage odors outside near the sewer cleanout",
      "Unexplained lush green or soft patches on the lawn",
    ],
    possibleCauses: [
      "Mainline sewer lateral obstruction or tree root intrusion",
      "Cracked, shifted, or collapsed sewer pipe underground",
      "Heavy accumulation of non-dispersible wipes or grease",
      "Sagging or bellied pipe section holding standing waste",
    ],
    relevantService: "Sewer Line Camera Inspection",
    serviceAnchor: "#services-sewer",
    recommendedNextStep:
      "Cease running washing machines, dishwashers, and showers immediately. Call (949) 539-8503 for priority mainline sewer guidance.",
    safetyAdvice:
      "Avoid direct contact with wastewater. Keep pets and family members away from affected bathroom areas.",
    image: "/images/sewer-camera-inspection.jpg",
  },
  {
    id: "slab-leak-warning-signs",
    title: "Slab Leak Warning Signs",
    iconName: "ShieldAlert",
    urgency: "Urgent",
    shortExplanation:
      "Warm floor patches, unexpected spikes on your water utility bill, or the sound of rushing water when all fixtures are turned completely off.",
    warningSigns: [
      "Hot spots under tile, hardwood, or carpeted floors",
      "Sound of water flowing behind walls or under subfloors",
      "Water meter test indicator spins while all faucets are closed",
      "Damp baseboards or hairline cracks forming in flooring",
    ],
    possibleCauses: [
      "Copper pipe degradation in high-salinity soil beneath concrete",
      "Friction between hot water copper pipes and foundation gravel",
      "Excessive household water pressure accelerating pinhole leaks",
      "Seismic ground shifting settling beneath concrete foundations",
    ],
    relevantService: "Electronic Slab Leak Detection",
    serviceAnchor: "#services-slab",
    recommendedNextStep:
      "Check your water meter test dial. If the small triangle or wheel spins while no water is in use, call immediately to discuss non-invasive detection.",
    image: "/images/leak-detection-acoustic.jpg",
  },
  {
    id: "faucet-or-sink-problems",
    title: "Faucet or Sink Problems",
    iconName: "Wrench",
    urgency: "Medium",
    shortExplanation:
      "Persistent faucet drips, seized shutoff valves, corroded angle stops, or cracked porcelain sink fixtures wasting water and causing cabinet dampness.",
    warningSigns: [
      "Steady drip from faucet spout when handle is shut",
      "Moisture or mineral crusting under sink trap assemblies",
      "Hard-to-turn or frozen shutoff angle stop valves",
      "Water leaking around base of faucet onto countertop",
    ],
    possibleCauses: [
      "Hard water mineral buildup degrading internal O-rings and seats",
      "Aged shutoff valves freezing in place from calcium deposits",
      "Excessive wear on ceramic disc cartridges",
      "Corrosion on braided stainless supply lines",
    ],
    relevantService: "Fixture Repair & Replacement",
    serviceAnchor: "#services-drain",
    recommendedNextStep:
      "Take note of the fixture make and model if visible. Call to explore professional repair versus modern fixture replacement options.",
    image: "/images/kitchen-sink-repair.jpg",
  },
];
