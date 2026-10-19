export interface AuthorData {
  slug: string;
  name: string;
  role: string;
  type: "Organization" | "Person";
  bio: string;
  fullBio: string;
  avatar: string;
  credentials: string[];
  expertise: string[];
  methodology: string;
  contactUrl: string;
}

export const AUTHORS_DATA: Record<string, AuthorData> = {
  "spectrum-editorial-team": {
    slug: "spectrum-editorial-team",
    name: "Spectrum Editorial Trade Team",
    role: "Senior Plumbing Content & Technical Research Group",
    type: "Organization",
    bio: "Our technical editorial team consults licensed California plumbing contractors, municipal utility reports, and standard code manuals to publish accurate, transparent diagnostic guides for Orange County property owners.",
    fullBio:
      "The Spectrum Editorial Trade Team is composed of technical researchers, trade content specialists, and code analysts dedicated to providing factual, non-commercial plumbing educational resources for Irvine and Orange County residents. We specialize in synthesizing complex California plumbing codes (UPC), local municipal water utility parameters from the Irvine Ranch Water District (IRWD), and practical diagnostic methodologies into clear, actionable advice.",
    avatar: "/images/hero-pipes-3d.jpg",
    credentials: [
      "Uniform Plumbing Code (UPC) Research & Citation",
      "Irvine Ranch Water District (IRWD) Water Quality Analysis",
      "California Title 24 Building Energy Efficiency Guidelines",
      "CSLB Licensing Compliance Standards for Plumbing Trades",
    ],
    expertise: [
      "Under-slab leak acoustic & thermal diagnostic techniques",
      "Orange County hard water chemistry & scaling mitigation",
      "High-pressure motorized drain cleaning vs. hydro jetting",
      "Tankless gas water heater sizing & ventilation guidelines",
      "Mainline sewer lateral root intrusion inspection",
    ],
    methodology:
      "All published guides are cross-referenced against official trade codes and reviewed for structural and safety accuracy. We prioritize honest consumer education, zero high-pressure sales claims, and transparent phone-first assistance.",
    contactUrl: "/contact/",
  },
};

export function getAuthorBySlug(slug: string): AuthorData | undefined {
  return AUTHORS_DATA[slug];
}

export function getAllAuthorSlugs(): string[] {
  return Object.keys(AUTHORS_DATA);
}
