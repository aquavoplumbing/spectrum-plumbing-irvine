export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services/",
    children: [
      {
        title: "All Plumbing Services",
        href: "/services/",
        description: "Explore all 15 specialized residential and commercial plumbing capabilities.",
      },
      {
        title: "Emergency Plumbing",
        href: "/services/emergency-plumbing-irvine-ca/",
        description: "Prompt phone connection for urgent residential plumbing issues in Irvine.",
      },
      {
        title: "Drain Cleaning",
        href: "/services/drain-cleaning-irvine-ca/",
        description: "Solutions for stubborn clogs, slow drains, and recurring blockages.",
      },
      {
        title: "Water Heater Repair",
        href: "/services/water-heater-repair-irvine-ca/",
        description: "Diagnosis and service for conventional tank water heater issues.",
      },
      {
        title: "Tankless Water Heaters",
        href: "/services/tankless-water-heaters-irvine-ca/",
        description: "Maintenance, flushing, and repair for on-demand hot water systems.",
      },
      {
        title: "Leak Detection",
        href: "/services/leak-detection-irvine-ca/",
        description: "Non-destructive acoustic and thermal leak locating techniques.",
      },
      {
        title: "Slab Leak Repair",
        href: "/services/slab-leak-repair-irvine-ca/",
        description: "Specialized assistance for foundation and under-slab copper pipe leaks.",
      },
      {
        title: "Sewer Line Repair",
        href: "/services/sewer-line-repair-irvine-ca/",
        description: "Camera inspection and rehabilitation for mainline sewer concerns.",
      },
      {
        title: "Hydro Jetting",
        href: "/services/hydro-jetting-irvine-ca/",
        description: "High-pressure water jetting to clear heavy grease and buildup.",
      },
      {
        title: "Commercial Plumbing",
        href: "/services/commercial-plumbing-irvine-ca/",
        description: "Facility plumbing, backflow testing, and commercial drain maintenance.",
      },
    ],
  },
  {
    title: "Service Areas",
    href: "/service-areas/",
    children: [
      { title: "All Irvine Service Areas", href: "/service-areas/" },
      { title: "Woodbridge", href: "/service-areas/woodbridge/" },
      { title: "Turtle Rock", href: "/service-areas/#area-turtle-rock" },
      { title: "Northwood", href: "/service-areas/#area-northwood" },
      { title: "Westpark", href: "/service-areas/#area-westpark" },
      { title: "University Park", href: "/service-areas/#area-university-park" },
      { title: "Portola Springs", href: "/service-areas/#area-portola-springs" },
      { title: "Great Park", href: "/service-areas/#area-great-park" },
      { title: "Orchard Hills", href: "/service-areas/#area-orchard-hills" },
      { title: "Quail Hill", href: "/service-areas/#area-quail-hill" },
      { title: "Cypress Village", href: "/service-areas/#area-cypress-village" },
    ],
  },
  {
    title: "How It Works",
    href: "/how-it-works/",
  },
  {
    title: "About",
    href: "/about/",
  },
  {
    title: "Guides",
    href: "/blog/",
  },
  {
    title: "FAQ",
    href: "/faq/",
  },
  {
    title: "Contact",
    href: "/contact/",
  },
];
