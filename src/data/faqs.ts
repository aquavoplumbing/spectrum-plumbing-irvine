export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  serviceLink?: {
    text: string;
    href: string;
  };
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-find-plumber",
    question: "How can I find a plumber in Irvine, CA?",
    answer:
      "When facing a plumbing issue in Irvine, calling (949) 539-8503 directly connects you with local plumbing support. Simply describe the symptoms you are experiencing, such as a clogged drain, water heater failure, or leaking pipe. A representative will discuss your situation and connect you with available service options suited to your neighborhood and property type.",
    serviceLink: {
      text: "View available plumbing services",
      href: "#services",
    },
  },
  {
    id: "faq-pipe-leaking",
    question: "What should I do if a pipe starts leaking in my home?",
    answer:
      "First, prioritize personal safety and property protection. If the leak is isolated to a sink, toilet, or appliance, locate the fixture angle stop shutoff valve and turn it clockwise until water stops flowing. If the leak is inside a wall or cannot be stopped locally, shut off your home's main water supply valve (commonly situated near the front hose bib or in the garage). Once the flow is stopped, call (949) 539-8503 to arrange professional leak detection and pipe repair.",
    serviceLink: {
      text: "Learn more about leak detection",
      href: "#services-leak",
    },
  },
  {
    id: "faq-repeated-clogs",
    question: "What causes household drains to clog repeatedly?",
    answer:
      "Recurring clogs typically indicate that the obstruction is deeper within the drainage line rather than at the fixture trap. In kitchen sinks, cooking oils, hardened animal fats, and soap scum accumulate along pipe walls. In bathrooms, hair combines with grooming products. Furthermore, older cast iron or clay pipes can develop scale or root intrusions that catch passing debris. A professional motorized snake or hydro jetting service thoroughly removes built-up deposits rather than temporarily poking a hole through the obstruction.",
    serviceLink: {
      text: "Explore drain cleaning solutions",
      href: "#services-drain",
    },
  },
  {
    id: "faq-water-heater-timing",
    question: "When should I call about a water heater problem?",
    answer:
      "You should contact a plumbing professional at the first sign of irregular operation. Warning signs include water taking excessively long to heat, hot water running out much faster than usual, visible rust or mineral deposits around the tank base, or popping sounds during heating cycles. Addressing these symptoms early can often save the unit through component replacement (such as a heating element or thermocouple) before catastrophic tank rupture occurs.",
    serviceLink: {
      text: "Explore water heater repair services",
      href: "#services-water-heater",
    },
  },
  {
    id: "faq-slab-leak-signs",
    question: "What are common signs of a slab leak?",
    answer:
      "Slab leaks occur when pressurized copper pipes running underneath a concrete foundation fail. Common indicators include hot spots under flooring, the sound of rushing water when all faucets are off, damp baseboards or unexplained moisture on carpets, and an unexpected increase in your monthly water bill. Because slab leaks can compromise foundation stability if left unresolved, prompt electronic leak detection is recommended.",
    serviceLink: {
      text: "Read about slab leak diagnosis",
      href: "#services-slab",
    },
  },
  {
    id: "faq-repair-costs",
    question: "What factors affect the cost of plumbing repairs in Irvine?",
    answer:
      "Plumbing repair costs depend on several technical variables: the specific nature of the problem, accessibility of the affected piping (e.g., exposed under a vanity vs. buried beneath a concrete slab), the materials required (such as Type L copper, PEX, or ABS fittings), and the time required for comprehensive diagnosis and testing. Calling (949) 539-8503 allows you to describe your situation and discuss realistic pricing factors before scheduling service.",
  },
  {
    id: "faq-sewer-line",
    question: "How do I know if my sewer line needs attention?",
    answer:
      "A compromised mainline sewer lateral often reveals itself through multiple fixture backups. For example, if flushing your upstairs toilet causes the downstairs bathtub to gurgle or back up with water, your primary sewer line is likely blocked. Other signs include persistent sewage odors around exterior cleanouts and soggy or overly green patches on your lawn. High-definition video camera inspections allow specialists to locate tree roots, misaligned joints, or pipe belly dips accurately.",
    serviceLink: {
      text: "Learn about sewer line inspections",
      href: "#services-sewer",
    },
  },
  {
    id: "faq-info-ready",
    question: "What information should I have ready before calling?",
    answer:
      "To ensure an efficient and helpful conversation, have a few key details ready: the specific symptoms you have observed (drips, gurgling, odors, lack of hot water), which fixtures or rooms are affected, whether you have shut off the water supply, and your general neighborhood in Irvine. If you know the approximate age of your water heater or home, that context is also very useful.",
  },
  {
    id: "faq-water-damage",
    question: "Can plumbing issues cause structural or mold damage?",
    answer:
      "Yes. Even minor continuous pinhole leaks or slow drain seepages can saturate subflooring, drywall, and structural studs over time. In warm Southern California climates, damp enclosed spaces can foster mold growth within 24 to 48 hours. Quick mitigation, identifying the leak source, and shutting off water are crucial to minimizing repair expenses.",
  },
  {
    id: "faq-coverage-areas",
    question: "Which Irvine neighborhoods are covered?",
    answer:
      "Assistance is available for residential communities across Irvine, including Woodbridge, Turtle Rock, Northwood, Westpark, University Park, Portola Springs, Great Park, Orchard Hills, Quail Hill, and Cypress Village. Call (949) 539-8503 to verify current technician availability for your specific location.",
    serviceLink: {
      text: "View Irvine neighborhood coverage",
      href: "#service-areas",
    },
  },
];
