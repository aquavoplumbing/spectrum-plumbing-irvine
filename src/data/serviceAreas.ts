export interface ServiceAreaItem {
  id: string;
  name: string;
  zipCodes: string;
  shortDescription: string;
  commonHomeTypes: string;
  anchor: string;
  notableFeature: string;
}

export const SERVICE_AREAS_DATA: ServiceAreaItem[] = [
  {
    id: "woodbridge",
    name: "Woodbridge",
    zipCodes: "92604, 92614",
    shortDescription:
      "Established lakeside master-planned community with mature landscaping and homes built primarily in the 1970s and 1980s, where copper pipe maintenance and water heater updates are common.",
    commonHomeTypes: "Single-family detached & lake-adjacent townhomes",
    anchor: "#area-woodbridge",
    notableFeature: "Mature residential infrastructure",
  },
  {
    id: "turtle-rock",
    name: "Turtle Rock",
    zipCodes: "92603, 92612",
    shortDescription:
      "Prestigious hillside neighborhood characterized by custom properties, hillside elevation changes, and slab-on-grade foundations requiring careful leak diagnosis.",
    commonHomeTypes: "Custom estates & multi-level hillside residences",
    anchor: "#area-turtle-rock",
    notableFeature: "Hillside elevation & custom plumbing layouts",
  },
  {
    id: "northwood",
    name: "Northwood",
    zipCodes: "92620",
    shortDescription:
      "Family-friendly central Irvine community featuring established tracts and tree-lined streets where root intrusion in sewer laterals and fixture upgrades frequently arise.",
    commonHomeTypes: "Traditional single-family homes with private yards",
    anchor: "#area-northwood",
    notableFeature: "Substantial yards & mature root structures",
  },
  {
    id: "westpark",
    name: "Westpark",
    zipCodes: "92606, 92614",
    shortDescription:
      "Mediterranean-styled community developed in the late 1980s and 1990s with modern community associations, where high water pressure regulation and water softening are top priorities.",
    commonHomeTypes: "Mediterranean villas, townhouses & courtyard homes",
    anchor: "#area-westpark",
    notableFeature: "Pressure regulator & valve service focus",
  },
  {
    id: "university-park",
    name: "University Park",
    zipCodes: "92612",
    shortDescription:
      "One of Irvine's original master-planned communities adjacent to UCI, with distinct architectural heritage and plumbing systems that benefit from periodic pipe assessments.",
    commonHomeTypes: "Mid-century modern single-family & atrium homes",
    anchor: "#area-university-park",
    notableFeature: "Original Irvine master-plan architecture",
  },
  {
    id: "portola-springs",
    name: "Portola Springs",
    zipCodes: "92618",
    shortDescription:
      "Scenic foothill master development with newer construction featuring modern PEX piping, recirculating pumps, and tankless hot water configurations.",
    commonHomeTypes: "Modern two-story homes, condos & luxury flats",
    anchor: "#area-portola-springs",
    notableFeature: "High-efficiency tankless water heaters",
  },
  {
    id: "great-park",
    name: "Great Park Neighborhoods",
    zipCodes: "92618",
    shortDescription:
      "Fast-expanding modern community built on the former MCAS El Toro grounds, featuring contemporary smart fixtures, whole-home water filtration, and high-efficiency systems.",
    commonHomeTypes: "Modern smart-homes, urban flats & single-family residences",
    anchor: "#area-great-park",
    notableFeature: "Smart leak detection & modern water filtration",
  },
  {
    id: "orchard-hills",
    name: "Orchard Hills",
    zipCodes: "92602",
    shortDescription:
      "Gated foothill enclave bordered by avocado groves, featuring sprawling luxury residences with high-demand water heating and multi-bath plumbing requirements.",
    commonHomeTypes: "Luxury gated estates & upscale single-family homes",
    anchor: "#area-orchard-hills",
    notableFeature: "High-capacity multi-fixture water delivery",
  },
  {
    id: "quail-hill",
    name: "Quail Hill",
    zipCodes: "92603",
    shortDescription:
      "Conveniently situated south Irvine enclave along Shady Canyon, known for Tuscan-inspired architecture, multi-story layouts, and community-maintained associations.",
    commonHomeTypes: "Tuscan-style single-family homes & townhouses",
    anchor: "#area-quail-hill",
    notableFeature: "Multi-level drainage & water pressure management",
  },
  {
    id: "cypress-village",
    name: "Cypress Village",
    zipCodes: "92618, 92620",
    shortDescription:
      "Centrally connected Irvine village featuring energy-efficient properties with tankless heating units, modern appliances, and community-friendly pathways.",
    commonHomeTypes: "Attached townhomes, courtyard flats & single-family",
    anchor: "#area-cypress-village",
    notableFeature: "Tankless water heater flushing & valve maintenance",
  },
];
