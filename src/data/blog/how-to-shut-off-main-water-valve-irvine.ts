import { BlogPost } from "@/types/blog";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const howToShutOffMainWaterValvePost: BlogPost = {
  slug: "how-to-shut-off-main-water-valve-irvine",
  title: "Emergency Water Shut-Off in Irvine: Where Is Your Main Valve Located?",
  description:
    "Learn where to locate and how to operate your main water shut-off valve in Irvine detached homes, condos, and townhomes. Step-by-step emergency flooding guide.",
  category: "Emergency Plumbing",
  primaryKeyword: "how to turn off main water valve irvine",
  secondaryKeywords: [
    "where is water shutoff valve condo irvine",
    "emergency water shut off irwd meter box",
    "prv shutoff valve curb stop",
    "emergency plumbing irvine ca",
  ],
  publishedAt: "2026-10-19T12:00:00Z",
  updatedAt: "2026-10-19T16:30:00Z",
  author: {
    name: "Spectrum Editorial Trade Team",
    role: "Senior Plumbing Content & Technical Research Group",
    bio: "Our technical editorial team consults licensed California plumbing contractors, municipal utility reports, and standard code manuals to publish accurate, transparent diagnostic guides for Orange County property owners.",
    profileUrl: "/authors/spectrum-editorial-team/",
    avatar: "/images/hero-pipes-3d.jpg",
  },
  reviewer: {
    name: "Independent Trade Review Board",
    credentials: "Reviewed against Uniform Plumbing Code (UPC Chapter 6) & Irvine Ranch Water District Service Rules",
    reviewedAt: "2026-10-19",
    note: "Verified for technical accuracy regarding residential water service entries, HOA sub-metering, and curb box shutoff protocols.",
  },
  featuredImage: {
    src: "/images/water-line-main-repair.jpg",
    alt: "Technician pointing to a residential quarter-turn brass ball valve and pressure reducing valve assembly outside an Irvine home",
    caption:
      "Knowing the exact location of your home's main water shutoff valve can prevent thousands of dollars in water damage during a sudden pipe burst or fixture failure.",
    width: 1200,
    height: 675,
  },
  readingTime: 8,
  quickAnswer: {
    heading: "Quick Emergency Instructions",
    text: "In most Irvine single-family homes, your main water shut-off valve is located outside on an exterior wall near the front hose bib or inside the garage near the water heater. It is typically a brass valve directly below your bell-shaped Pressure-Reducing Valve (PRV). For a ball valve with a lever handle, turn it 90 degrees perpendicular to the pipe. For an older round gate valve wheel, turn it clockwise ('righty-tighty') until completely seated.",
    highlight:
      "In Irvine condominiums and HOA townhomes, the shut-off may be located in an interior utility closet, behind a wall access panel near the water heater, or in a shared subterranean utility vault.",
  },
  relatedServiceSlugs: [
    "emergency-plumbing-irvine-ca",
    "water-line-repair-irvine-ca",
    "pipe-repair-and-repiping-irvine-ca",
    "leak-detection-irvine-ca",
  ],
  relatedArticleSlugs: [
    "copper-pinhole-leaks-irvine-repipe",
    "signs-of-a-slab-leak",
    "irvine-hard-water-plumbing",
  ],
  references: [
    {
      title: "Locating Your Water Meter & Main Shut-Off Valve",
      publisher: "Irvine Ranch Water District (IRWD)",
      url: "https://www.irwd.com/services/residential-water-service",
      accessDate: "October 2026",
    },
    {
      title: "Homeowner Emergency Preparedness & Water Damage Mitigation",
      publisher: "Federal Emergency Management Agency (FEMA)",
      url: "https://www.ready.gov",
      accessDate: "October 2026",
    },
    {
      title: "California Plumbing Code: Valves and Controls (Title 24, Part 5, Section 606.0)",
      publisher: "California Building Standards Commission",
      url: "https://www.dgs.ca.gov/BSC/Codes",
      accessDate: "October 2026",
    },
  ],
  seo: {
    title: "How to Shut Off Your Main Water Valve in Irvine | Spectrum Plumbing",
    description:
      "Find your Irvine main water shut-off valve quickly in an emergency. Locations for single-family homes, condos, and IRWD meter boxes explained.",
    canonical: `${BUSINESS_INFO.domain}/blog/how-to-shut-off-main-water-valve-irvine/`,
    ogImage: "/images/water-line-main-repair.jpg",
    keywords: [
      "main water shutoff valve irvine",
      "condo water shut off valve location",
      "irwd meter box shut off",
      "burst pipe turn off water irvine",
    ],
  },
  published: true,
  sections: [
    {
      id: "seconds-matter-in-floods",
      title: "Why Seconds Count During a Plumbing Emergency",
      badge: "Emergency Mitigation",
      paragraphs: [
        "A ruptured washing machine hose, a cracked second-floor toilet supply line, or a catastrophic copper pinhole burst under 70 PSI of municipal water pressure discharges between 8 and 14 gallons of water per minute.",
        "In less than 10 minutes, over 100 gallons of pressurized water can cascade through drywall ceilings, saturate insulation, warp expensive hardwood flooring, and pool across baseboards. The single most effective action any Irvine homeowner or tenant can take to stop water devastation is knowing how to kill the main water supply instantly.",
      ],
      callout: {
        type: "important",
        title: "Test Your Valve Before an Emergency Strikes",
        content:
          "Do not wait for a pipe to burst to touch your shut-off valve for the first time. Many older gate valves in Irvine tract homes have not been turned in 20 years and are seized solid with mineral scale, or their internal stems break when forced.",
      },
    },
    {
      id: "locations-by-property-type",
      title: "Where to Find Your Main Water Shut-Off Valve in Irvine",
      badge: "Location Directory",
      paragraphs: [
        "Because Irvine was developed in distinct planned village phases over six decades, valve locations vary according to property architectural style:",
      ],
      subsections: [
        {
          id: "single-family-detached",
          title: "1. Detached Single-Family Residences (Woodbridge, Northwood, Turtle Rock, Stonegate)",
          paragraphs: [
            "In most single-family tract homes, the main house shut-off valve is positioned along the exterior front or side foundation wall. Look directly below the front hose bib (outdoor garden spigot). You will usually see a vertical copper pipe rising from the ground, passing through a bell-shaped brass Pressure-Reducing Valve (PRV), with a lever or wheel handle valve right below or above it.",
            "Secondary Location: In many 1980s and 1990s floor plans (such as Westpark or Culverdale), the main domestic shut-off is situated inside the attached two-car garage, right next to the water heater or recessed inside a white metal access box on the garage drywall.",
          ],
        },
        {
          id: "condos-and-townhomes",
          title: "2. Attached Condos & Townhomes (Great Park, Woodbury, Oak Creek)",
          paragraphs: [
            "Multi-family and attached residences in Irvine often utilize manifold distribution blocks. Common locations include: (a) inside the water heater closet (frequently located on a patio or in a hallway closet), (b) behind a plastic spring-loaded access panel in the master bathroom or laundry room, or (c) near the garage ceiling where the fire sprinkler riser enters the unit.",
            "If your individual unit lacks an interior shut-off, your building may share a common riser managed by your HOA property management firm.",
          ],
        },
        {
          id: "irwd-meter-box",
          title: "3. The Outdoor IRWD Street Meter Box (Ultimate Failsafe)",
          paragraphs: [
            "If your house valve is stuck, seized, or leaking, the ultimate shutoff point is the municipal water meter box located near the street sidewalk. Look for an oval or rectangular cast iron or heavy polymer box embedded in the grass or parkway strip stamped 'IRWD' or 'WATER'.",
            "Inside sits the municipal water meter. On the street side of the meter is the city curb stop valve. This valve has an oblong brass flange with a hole through it.",
          ],
          callout: {
            type: "safety",
            title: "Operating an IRWD Meter Valve",
            content:
              "To operate the street curb stop, a specialized five-foot steel 'water meter curb key' (available at Irvine hardware stores) or a heavy crescent wrench with a screwdriver lever is required. Rotate the oblong flange 90 degrees until the padlock holes align, indicating the valve is completely closed.",
          },
        },
      ],
    },
    {
      id: "ball-valves-vs-gate-valves",
      title: "Ball Valves vs. Gate Valves: How to Turn Them Off",
      badge: "Valve Mechanics",
      paragraphs: [
        "The action required to turn off the water depends upon the valve mechanism installed on your riser:",
      ],
      subsections: [
        {
          id: "lever-ball-valve",
          title: "Modern Quarter-Turn Ball Valve (Recommended)",
          paragraphs: [
            "Modern plumbing features a straight lever handle. When the handle is parallel to the pipe (pointing in the direction of water flow), the valve is OPEN. To shut off water, pull or push the lever 90 degrees until it is PERPENDICULAR to the pipe. This rotates an internal stainless steel ball, halting flow instantly.",
          ],
        },
        {
          id: "round-gate-valve",
          title: "Aging Multi-Turn Gate Valve (Replace ASAP)",
          paragraphs: [
            "Older Irvine homes frequently feature round brass or red spigot wheels. Turn the wheel clockwise ('righty-tighty') multiple rotations until it stops firmly. Be gentle: forcing an old, corroded gate valve can snap the internal brass stem, leaving the gate stuck closed or shearing off entirely.",
          ],
        },
      ],
    },
    {
      id: "post-shutoff-protocol",
      title: "What to Do Immediately After Shutting Off the Main Valve",
      badge: "Action Protocol",
      paragraphs: [
        "Once the main water valve is secured, follow these crucial post-shutoff steps to depressurize your home safely and minimize structural water damage.",
        "Halting the flow is only step one; extracting standing water and setting up high-velocity air movers within 24 to 48 hours is essential to stop mold growth. Industry resources like [Boise Water Damage Restoration Services](https://boisewaterdamagerestorationservices.com/) emphasize that prompt moisture mapping and industrial drying can save drywall, subfloors, and structural framing after catastrophic pipe bursts.",
      ],
      subsections: [
        {
          id: "essential-steps-after-shutoff",
          title: "Immediate Depressurization & Safety Steps",
          paragraphs: [
            "Take these four actions right after turning the valve:",
          ],
          listItems: [
            "Depressurize the System: Open the lowest outdoor garden hose bib or ground-floor bathtub faucet to drain remaining water out of the pipes, relieving pressure from the leak point.",
            "Turn Off the Water Heater: If your water lines are drained dry, an operating tankless or tank water heater can overheat. Switch the gas valve to 'PILOT' or flip the dedicated 240V electric circuit breaker to OFF.",
            "Document for Insurance: Take clear smartphone photos and videos of pooled water, wet drywall baseboards, and soaked personal property before moving furniture or beginning cleanup.",
            "Call for Immediate Service: Contact an emergency plumbing specialist to locate the source of the rupture and perform professional repair.",
          ],
          listType: "bullet",
        },
      ],
    },
  ],
  conclusion: {
    heading: "Peace of Mind Starts with Preparation",
    paragraphs: [
      "Walk outside today and locate your main water shutoff valve. Ensure all family members know where it is and how to operate it.",
      "If your home still relies on an aged, corroded gate valve, having a licensed plumber retrofit a smooth quarter-turn ball valve is an inexpensive upgrade that pays for itself the first time a fixture fails.",
    ],
    keyTakeaway:
      "Call (949) 539-8503 for 24/7 emergency plumbing dispatch, burst pipe repairs, or to upgrade your main water shutoff valve in Irvine.",
  },
};
