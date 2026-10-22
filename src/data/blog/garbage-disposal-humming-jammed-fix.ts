import { BlogPost } from "@/types/blog";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const garbageDisposalHummingPost: BlogPost = {
  slug: "garbage-disposal-humming-jammed-fix",
  title: "Garbage Disposal Humming But Not Spinning? Safe Troubleshooting & Reset Guide",
  description:
    "Troubleshoot a jammed or humming garbage disposal safely. Step-by-step DIY reset button and Allen wrench instructions, drain maintenance, and when to replace.",
  category: "Kitchen Plumbing",
  primaryKeyword: "garbage disposal humming reset button",
  secondaryKeywords: [
    "garbage disposal jammed allen wrench irvine",
    "kitchen sink disposal leaking from bottom",
    "garbage disposal repair irvine ca",
    "how to unjam garbage disposal",
  ],
  publishedAt: "2026-10-19T13:00:00Z",
  updatedAt: "2026-10-19T17:00:00Z",
  author: {
    name: "Spectrum Editorial Trade Team",
    role: "Senior Plumbing Content & Technical Research Group",
    bio: "Our technical editorial team consults licensed California plumbing contractors, municipal utility reports, and standard code manuals to publish accurate, transparent diagnostic guides for Orange County property owners.",
    profileUrl: "/authors/spectrum-editorial-team/",
    avatar: "/images/hero-pipes-3d.jpg",
  },
  reviewer: {
    name: "Independent Trade Review Board",
    credentials: "Reviewed against California Electrical Code (CEC) & InSinkErator Factory Service Specifications",
    reviewedAt: "2026-10-19",
    note: "Verified for electrical overload safety protocols, breaker ratings, and mechanical flywheel clearance procedures.",
  },
  featuredImage: {
    src: "/images/garbage-disposal-unit.jpg",
    alt: "Plumbing technician installing a new continuous feed stainless steel garbage disposal unit beneath an Irvine kitchen sink",
    caption:
      "A humming garbage disposal indicates that electrical current is reaching the motor, but a mechanical obstruction is preventing the shredder plate from spinning.",
    width: 1200,
    height: 675,
  },
  readingTime: 7,
  quickAnswer: {
    heading: "Quick DIY Fix in 3 Steps",
    text: "When a garbage disposal hums but does not spin, electrical power is reaching the motor, but the internal impeller plate is mechanically wedged by bone fragments, fruit pits, or fibrous debris. Immediately turn off the wall switch to prevent motor burnout. Insert a 1/4-inch hex/Allen wrench into the center hex socket on the very bottom exterior of the unit and crank back and forth to dislodge the jam. Then press the small red thermal overload reset button on the bottom and test with cold running water.",
    highlight:
      "NEVER insert bare hands or fingers into the disposal chamber, even if the wall switch is off. Always use tongs or pliers to extract dislodged debris.",
  },
  relatedServiceSlugs: [
    "garbage-disposal-repair-irvine-ca",
    "drain-cleaning-irvine-ca",
    "faucet-and-sink-repair-irvine-ca",
    "emergency-plumbing-irvine-ca",
  ],
  relatedArticleSlugs: [
    "why-drains-keep-clogging",
    "how-to-shut-off-main-water-valve-irvine",
    "hydro-jetting-vs-snaking-sewer-cleaning",
  ],
  references: [
    {
      title: "Garbage Disposal Care, Safety and Troubleshooting Guide",
      publisher: "InSinkErator / Emerson Electric Technical Care",
      url: "https://support.insinkerator.com",
      accessDate: "October 2026",
    },
    {
      title: "Preventing Grease & Food Waste Blockages in Household Sewers",
      publisher: "Irvine Ranch Water District (IRWD)",
      url: "https://www.irwd.com/services/sewer-service",
      accessDate: "October 2026",
    },
    {
      title: "Household Electrical Safety & Appliance Motor Protection",
      publisher: "Electrical Safety Foundation (ESFI)",
      url: "https://www.esfi.org",
      accessDate: "October 2026",
    },
  ],
  seo: {
    title: "Garbage Disposal Humming? How to Unjam & Reset | Spectrum Plumbing",
    description:
      "Safe guide to fixing a humming or jammed garbage disposal in your Irvine kitchen. Learn the Allen wrench trick, reset button steps, and when to replace.",
    canonical: `${BUSINESS_INFO.domain}/blog/garbage-disposal-humming-jammed-fix/`,
    ogImage: "/images/garbage-disposal-unit.jpg",
    keywords: [
      "garbage disposal humming irvine",
      "how to unjam disposal allen wrench",
      "garbage disposal reset button red",
      "kitchen sink disposal repair orange county",
    ],
  },
  published: true,
  sections: [
    {
      id: "why-disposals-hum",
      title: "Why Is Your Disposal Humming Instead of Grinding?",
      badge: "Appliance Physics",
      paragraphs: [
        "You flip your kitchen sink wall switch and instead of the familiar grinding roar, you hear a dull, vibrating electrical buzz: 'Mmmmmmm.'",
        "This low humming sound indicates that electricity is flowing through the internal motor windings, creating an electromagnetic field attempting to spin the rotor. However, a hard object—such as an olive pit, chicken bone fragment, or dropped coin—has wedged tightly between one of the rotating shredder impellers and the stationary perimeter cutter ring.",
        "Because the rotor cannot spin, the motor draws excess current. Leaving the wall switch turned on while the motor is stalled will overheat the copper windings and trip the breaker or permanently destroy the electric motor within 15 to 30 seconds.",
      ],
      callout: {
        type: "safety",
        title: "Immediate Action: Turn the Switch OFF",
        content:
          "Turn off the wall switch immediately! If left humming, the disposal will either pop the internal thermal protector or trip your kitchen GFCI circuit breaker.",
      },
    },
    {
      id: "diy-repair-steps",
      title: "The 4-Step Trade Procedure to Safely Unjam a Disposal",
      badge: "Step-by-Step Fix",
      paragraphs: [
        "In 90% of instances, homeowners can clear a mechanical jam without purchasing new parts using standard household tools.",
      ],
      subsections: [
        {
          id: "step-1-unplug",
          title: "Step 1: Ensure Zero Electrical Power",
          paragraphs: [
            "Turn off the wall switch. For complete safety, unplug the disposal's electrical cord from the duplex outlet inside the under-sink cabinet, or flip the dedicated 15A/20A breaker in your main electrical panel.",
          ],
        },
        {
          id: "step-2-allen-wrench",
          title: "Step 2: The Under-Sink Hex Key Manual Turn",
          paragraphs: [
            "Crouch beneath the kitchen sink with a flashlight and look at the exact center of the disposal's bottom metal plate. You will see a small, recessed hexagonal hole (1/4-inch hex socket).",
            "This socket connects directly to the motor driveshaft. Insert a standard 1/4-inch Allen wrench (or the silver Jam-Buster wrench provided with the unit) into this socket. Crank the wrench back and forth clockwise and counter-clockwise with firm pressure until you feel the jam break loose and the wrench spins completely free through full 360-degree rotations.",
          ],
        },
        {
          id: "step-3-remove-debris",
          title: "Step 3: Extract the Foreign Object with Tongs",
          paragraphs: [
            "Shine a flashlight down into the sink drain opening. With the obstruction freed, look for the foreign object sitting on the grinding plate. Use kitchen tongs, needle-nose pliers, or chopsticks to extract the offending item (e.g., cherry pit, bottle cap, or fibrous knot). Never reach your fingers into the grind chamber.",
          ],
        },
        {
          id: "step-4-reset-button",
          title: "Step 4: Press the Red Thermal Overload Reset Button",
          paragraphs: [
            "Look at the bottom exterior of the unit again. Near the hex socket, you will see a small red cylindrical button. If the unit overheated during the jam, this thermal overload protector will have popped out roughly 1/8 of an inch.",
            "Firmly press the red button inward until you feel a definitive click. If it does not stay in, allow the motor to cool for 5 minutes before pressing again. Plug the unit back in, turn on cold water at full flow, and flip the wall switch. Your disposal should spin smoothly.",
          ],
        },
      ],
    },
    {
      id: "what-not-to-put-in-disposal",
      title: "What Never to Put Down an Irvine Garbage Disposal",
      badge: "Preventative Habits",
      paragraphs: [
        "To prevent chronic clogs and protect Irvine Ranch Water District municipal sewer laterals, keep high-risk items out of your disposal.",
      ],
      subsections: [
        {
          id: "high-risk-food-items",
          title: "High-Risk Kitchen Food Items",
          paragraphs: [
            "Never deposit the following items into your sink disposal:",
          ],
          listItems: [
            "Coffee Grounds: Microscopic grounds pass through shredder blades, but congeal with cooking oils in the P-trap into a dense, sediment-like sludge that blocks drainage.",
            "Fibrous Stringy Produce: Celery ribs, artichoke leaves, corn husks, and onion skins have tough cellulose strands that wrap around the rotating shredder ring like wire.",
            "Eggshells & Shrimp Tails: Eggshell membrane sticks to interior pipe bends, while the pulverized shell sand settles into low spots in the horizontal branch line.",
            "Fats, Oils, and Grease (FOG): Liquid grease hardens into waxy soapstone inside the cooler subterranean drain pipes under your floor.",
            "Starchy Foods (Rice, Pasta, Potato Peels): Expand when exposed to water, forming a thick gelatinous paste that plugs kitchen sink branch lines.",
          ],
          listType: "bullet",
        },
      ],
    },
    {
      id: "when-to-replace",
      title: "Repair or Replace? Recognizing Fatal Disposal Failures",
      badge: "Replacement Criteria",
      paragraphs: [
        "Garbage disposals typically deliver a working lifespan of 8 to 12 years in Southern California. Certain symptoms signal it is time to replace rather than repair:",
      ],
      subsections: [
        {
          id: "bottom-leaks",
          title: "Leaking from the Bottom Housing or Reset Button",
          paragraphs: [
            "If water drips from the bottom of the disposal or around the red reset switch, the internal rubber mechanical motor shaft seal has degraded. Potable water is passing directly through electrical motor components. This cannot be rebuilt; the unit must be replaced to prevent electrical shorts and under-sink cabinet rot.",
          ],
        },
        {
          id: "silent-failure",
          title: "Completely Silent with Reset Button Pressed",
          paragraphs: [
            "If flipping the switch produces zero sound, the outlet has power, and the reset button does not click, the motor windings have burned out completely.",
            "When internal motor windings short or bearings seize from sustained electrical load, kitchen appliance technicians like [Appliance Repair Orland Park](https://appliancerepairorlandpark.com/) recommend upgrading to a continuous-feed, high-torque disposal to protect connected dishwashers and prevent frequent kitchen breaker trips.",
          ],
        },
      ],
    },
  ],
  conclusion: {
    heading: "Keep Your Kitchen Drain Flowing Freely",
    paragraphs: [
      "A jammed disposal is a temporary inconvenience that can usually be resolved in 5 minutes with a standard Allen wrench and a press of the red reset button.",
      "If your disposal is leaking from the bottom, constantly tripping breakers, or failing to drain, having a professional upgrade your sink with a quiet, high-torque stainless steel model ensures years of reliable operation.",
    ],
    keyTakeaway:
      "Call (949) 539-8503 for fast, same-day kitchen sink and garbage disposal repair or replacement across Irvine.",
  },
};
