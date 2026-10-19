# Spectrum Plumbing Irvine

A modern, high-conversion web platform and comprehensive educational directory for residential and commercial plumbing services in **Irvine, California**.

Built with the **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS**, Spectrum Plumbing Irvine is engineered for speed, technical SEO supremacy, accessible UX, and phone-first customer conversion.

---

## 📋 Table of Contents

- [Overview & Conversion Philosophy](#-overview--conversion-philosophy)
- [Primary Business Details](#-primary-business-details)
- [Technology Stack](#-technology-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Complete Route & Page Inventory](#-complete-route--page-inventory)
- [Plumbing Services Directory (15 Capabilities)](#-plumbing-services-directory-15-capabilities)
- [Irvine Village Coverage (10 Communities)](#-irvine-village-coverage-10-communities)
- [Key Features & Architectural Systems](#-key-features--architectural-systems)
  - [Phone-First Conversion Architecture](#1-phone-first-conversion-architecture)
  - [Contact Form Security & Anti-Spam](#2-contact-form-security--anti-spam)
  - [Interactive Site Search & Diagnostics](#3-interactive-site-search--diagnostics)
  - [E-E-A-T Content & Transparency](#4-e-e-a-t-content--transparency)
  - [Technical SEO & Structured Data](#5-technical-seo--structured-data)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Production Build & Verification](#-production-build--verification)
- [Compliance & Disclosures](#-compliance--disclosures)

---

## 🎯 Overview & Conversion Philosophy

Spectrum Plumbing Irvine operates as a transparent local referral and educational platform connecting Orange County homeowners with experienced, independent plumbing trade contractors.

### Key Tenets:
1. **Phone-First Inbound Triage:** Plumbing emergencies (slab leaks, pipe bursts, mainline sewage backups) require real-time telephone conversation. Every primary call-to-action is bound to direct phone triage.
2. **Strict Form Restrictions:** In accordance with CRO best practices, online submission forms are prohibited across all content pages. Only the dedicated [Contact page](/contact/) features an optional inquiry form.
3. **Honest Referral Disclosures:** Clear, compliant language across all marketing, about, and legal pages stating that Spectrum Plumbing Irvine connects callers with independent licensed trade professionals.
4. **Rich Architectural Aesthetic:** Dark obsidian navy surfaces (`#030C17`, `#051426`, `#09223D`), electric blue specular glows (`#168DFF`, `#38BDF8`), 3D card tilt perspectives, and glassmorphism panels.

---

## 📞 Primary Business Details

| Property | Detail |
| :--- | :--- |
| **Brand Name** | Spectrum Plumbing Irvine |
| **Target Market** | Irvine, Orange County, California |
| **Primary Conversion Phone** | `(949) 539-8503` |
| **Direct Call Link** | `tel:+19495398503` |
| **Canonical Domain** | `https://spectrumplumbingirvine.com` |
| **Business Model** | Local Plumbing Referral & Educational Platform |

---

## 💻 Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components & Partial Prerendering)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom CSS 3D & glassmorphism variables
- **Icons:** [Lucide React](https://lucide.dev/)
- **Visuals:** [Three.js](https://threejs.org/) & React Three Fiber accents for interactive manifolds
- **Font Optimization:** Next.js Font (`Geist`, `Geist_Mono`, modern system fallbacks)

---

## 📁 Project Architecture & Directory Structure

```
d:\Spectrum-Plumbing-Irvine\
├── public/
│   ├── images/                   # High-resolution optimized plumbing photography
│   └── favicon.ico
├── src/
│   ├── app/                      # Next.js App Router routes & API endpoints
│   │   ├── about/                # About Us brand story & referral model
│   │   ├── accessibility/        # WCAG 2.1 AA accessibility statement
│   │   ├── api/contact/          # Secure contact form submission handler
│   │   ├── authors/[slug]/       # Dynamic author & editorial team profiles
│   │   ├── blog/                 # Educational resources & diagnostic hub
│   │   │   └── [slug]/           # In-depth individual guide articles
│   │   ├── contact/              # Contact Us page (only page with form)
│   │   ├── disclaimer/           # Safety, flood/gas warnings & advisory
│   │   ├── editorial-policy/     # Fact-checking & UPC review standards
│   │   ├── editorial-standards/  # Canonical alias to editorial-policy
│   │   ├── faq/                  # Filterable FAQ hub with search & categories
│   │   ├── how-it-works/         # 4-step process & contractor questions
│   │   ├── not-found.tsx         # Custom 404 error page with leak recovery UI
│   │   ├── privacy-policy/       # Call tracking & California CCPA/CPRA notice
│   │   ├── robots.ts             # Search engine crawler directives
│   │   ├── search/               # Client-side instant keyword search
│   │   ├── service-areas/        # Irvine community & village coverage hub
│   │   │   └── [slug]/           # Individual neighborhood guides (e.g., Woodbridge)
│   │   ├── services/             # Categorized directory of all 15 services
│   │   │   └── [slug]/           # Individual specialized service pages
│   │   ├── sitemap.ts            # Dynamic XML sitemap generator
│   │   ├── sitemap/              # User-facing HTML sitemap directory
│   │   ├── terms-of-use/         # Terms, conditions & contractor relationships
│   │   ├── globals.css           # 3D tokens, glassmorphism, animations & Tailwind v4
│   │   ├── layout.tsx            # Root layout with font definitions & metadata
│   │   └── page.tsx              # High-impact conversion homepage
│   ├── components/               # Modular UI component system
│   │   ├── blog/                 # Article headers, callouts, and author boxes
│   │   ├── contact/              # ContactForm component with validation & states
│   │   ├── faq/                  # FAQHubClient accordion & category pills
│   │   ├── home/                 # Hero, Bento, TrustStrip, ProblemExplorer, etc.
│   │   ├── layout/               # Header, Footer, MobileNavigation, MobileCallBar
│   │   ├── locations/            # Coverage maps, neighborhood overview cards
│   │   ├── services/             # Diagnostic checklists, symptoms, pricing factors
│   │   ├── shared/               # PhoneCTA, SectionHeading, AreaCard, ServiceCard
│   │   └── three/                # 3D Canvas visual accents
│   ├── config/                   # Centralized configuration
│   │   ├── business.ts           # Business info, phone constants, disclosures
│   │   ├── designTokens.ts       # Color codes and animation timings
│   │   ├── navigation.ts         # Global desktop and mobile menu links
│   │   └── seo.ts                # Metadata and OpenGraph defaults
│   ├── data/                     # Local data models & content registries
│   │   ├── authors.ts            # Trade team credentials and bios
│   │   ├── blog/                 # Educational articles data
│   │   ├── faqs.ts               # Categorized FAQ questions and answers
│   │   ├── locations/            # Irvine neighborhood data profiles
│   │   ├── problems.ts           # Interactive diagnostic symptoms matrix
│   │   ├── serviceAreas.ts       # Irvine village definitions & zip codes
│   │   └── services/             # 15 complete service data specifications
│   ├── lib/                      # Utilities & analytics helpers
│   │   ├── analytics.ts          # Phone click & conversion event tracking
│   │   ├── structuredData.ts     # Schema.org JSON-LD generators
│   │   └── utils.ts              # ClassName merging and string helpers
│   └── types/                    # TypeScript interfaces
│       ├── blog.ts
│       ├── location.ts
│       └── service.ts
├── package.json
└── tsconfig.json
```

---

## 🌐 Complete Route & Page Inventory

| URL Path | Purpose & Key Features | Status |
| :--- | :--- | :--- |
| `/` | **Homepage:** Hero 3D visual, TrustStrip, Services grid, Diagnostic selector, Customer proof. | ✅ Live |
| `/about/` | **About Us:** Brand identity, referral model disclosure, core purpose, verified differentiators. | ✅ Live |
| `/contact/` | **Contact Us:** Dominant phone card, optional validated form, anti-spam honeypot, contact FAQs. | ✅ Live |
| `/services/` | **Services Hub:** 15 services organized into 5 problem categories + Problem Explorer. | ✅ Live |
| `/services/[slug]/` | **Individual Services:** Symptoms, diagnostic procedures, pricing factors, local Irvine advice. | ✅ Live |
| `/service-areas/` | **Service Areas Hub:** Irvine village breakdown, vector perimeter map, neighborhood bento. | ✅ Live |
| `/service-areas/[slug]/` | **Neighborhood Guides:** Specific village insights (e.g., Woodbridge lakeside piping, slab leaks). | ✅ Live |
| `/blog/` | **Guides & Resources:** Topic category filters, featured guide, service links, editorial trust. | ✅ Live |
| `/blog/[slug]/` | **Educational Articles:** Uniform Plumbing Code analysis, diagnostic checklists, reading progress. | ✅ Live |
| `/how-it-works/` | **How It Works:** 4-step workflow, call expectations, smart questions to ask contractors. | ✅ Live |
| `/faq/` | **FAQ Hub:** Live keyword search, 8 category filter tabs, accessible accordions. | ✅ Live |
| `/editorial-policy/` | **Editorial Standards:** Verification policy, IRWD sources, UPC code research, AI disclosure. | ✅ Live |
| `/authors/[slug]/` | **Author Profiles:** Spectrum Editorial Trade Team credentials, expertise, Organization schema. | ✅ Live |
| `/privacy-policy/` | **Privacy Policy:** Telephony call tracking disclosures, contractor lead sharing, CCPA/CPRA rights. | ✅ Live |
| `/terms-of-use/` | **Terms of Use:** Permitted use, independent contractor agreements, liability disclaimers. | ✅ Live |
| `/disclaimer/` | **Website Disclaimer:** Emergency gas/flood safety, educational limits, contractor warranties. | ✅ Live |
| `/accessibility/` | **Accessibility Statement:** WCAG 2.1 AA target standards, keyboard focus, feedback contact. | ✅ Live |
| `/search/` | **Instant Site Search:** Instant filtering across services, villages, guides, and FAQs (`noindex`). | ✅ Live |
| `/sitemap/` | **HTML Sitemap:** Categorized user-friendly directory linking to all 47 published pages. | ✅ Live |
| `/sitemap.xml` | **XML Sitemap:** Dynamic Next.js metadata route indexing all 47 canonical routes. | ✅ Live |
| `/robots.txt` | **Robots Directives:** Crawling permissions allowing public pages, disallowing `/api/` & `/search/`. | ✅ Live |
| `/_not-found` | **Custom 404:** "Looks Like This Page Has a Leak", service links, and call CTA. | ✅ Live |

---

## 🔧 Plumbing Services Directory (15 Capabilities)

Organized into 5 logical categories:

### 1. Emergency & Leak Repair
- **Emergency Plumbing** (`/services/emergency-plumbing-irvine-ca/`): Immediate phone triage for pipe bursts, major overflows, and urgent shutoff guidance.
- **Electronic Leak Detection** (`/services/leak-detection-irvine-ca/`): Non-invasive acoustic listening, thermal imaging, and tracer gas locating.
- **Slab Leak Repair** (`/services/slab-leak-repair-irvine-ca/`): Foundation pipe reroutes and direct repairs for under-slab copper lines.
- **Pipe Repair & Repiping** (`/services/pipe-repair-and-repiping-irvine-ca/`): PEX conversions, copper pinhole patching, and whole-house repiping.

### 2. Drain & Sewer Solutions
- **Drain Cleaning** (`/services/drain-cleaning-irvine-ca/`): Motorized snaking for stubborn kitchen grease, bathroom hair, and branch lines.
- **Hydro Jetting** (`/services/hydro-jetting-irvine-ca/`): 4,000 PSI high-pressure water scrubbing for heavy sludge, scale, and grease.
- **Sewer Line Repair** (`/services/sewer-line-repair-irvine-ca/`): High-definition video camera inspections and trenchless sewer rehabilitation.

### 3. Water Heater Systems
- **Water Heater Repair** (`/services/water-heater-repair-irvine-ca/`): Diagnosis for rumbling tanks, pilot outages, and element replacements.
- **Tankless Water Heaters** (`/services/tankless-water-heaters-irvine-ca/`): On-demand high-efficiency systems, annual descaling, and venting updates.

### 4. Fixtures & Appliances
- **Toilet Repair** (`/services/toilet-repair-irvine-ca/`): Resolving constant running, weak flushes, phantom fills, and base leaks.
- **Faucet & Sink Repair** (`/services/faucet-and-sink-repair-irvine-ca/`): Cartridge replacement, aerator cleaning, and fixture upgrades.
- **Garbage Disposal Repair** (`/services/garbage-disposal-repair-irvine-ca/`): Jam clearing, flywheel resets, and high-torque installations.

### 5. Piping & Commercial Infrastructure
- **Water Line Repair** (`/services/water-line-repair-irvine-ca/`): Underground yard supply line diagnosis, meter leaks, and pressure regulators.
- **Gas Line Services** (`/services/gas-line-services-irvine-ca/`): Appliance hookups, seismic shutoff valves, and certified pressure testing.
- **Commercial Plumbing** (`/services/commercial-plumbing-irvine-ca/`): Backflow prevention testing, multi-stall restrooms, and facility drainage.

---

## 📍 Irvine Village Coverage (10 Communities)

Spectrum Plumbing Irvine provides localized architectural and plumbing insights across all master-planned villages in Irvine:

| Village | ZIP Codes | Key Infrastructure Characteristics |
| :--- | :--- | :--- |
| **Woodbridge** | 92604, 92614 | 1970s/80s single-family homes, copper under-slab lines, mature tree roots. |
| **Turtle Rock** | 92603, 92612 | Hillside custom estates, elevation pressure variations, complex slab foundations. |
| **Northwood** | 92620 | Established family homes, clay/cast-iron sewer laterals, hard water scaling. |
| **Westpark** | 92606, 92614 | Late 1980s Mediterranean courtyard tracts, pressure regulator updates. |
| **University Park** | 92612 | Original 1960s/70s master-plan atrium homes, aging galvanized & copper pipes. |
| **Portola Springs** | 92618 | Modern 2000s+ construction, PEX piping, high-efficiency tankless water heaters. |
| **Great Park** | 92618 | Contemporary master-planned residences, smart leak shutoff valves, HOA guidelines. |
| **Orchard Hills** | 92602 | Hillside foothills estates, high incoming municipal water pressure, hard water. |
| **Quail Hill** | 92603 | Early 2000s Spanish/Tuscan architecture, recirculation hot water loops. |
| **Cypress Village** | 92618 | Modern multi-level townhomes, compact tankless installations, water filtration. |

---

## 🚀 Key Features & Architectural Systems

### 1. Phone-First Conversion Architecture
Every commercial page features multiple conversion touchpoints bound to `(949) 539-8503`:
- **Sticky Desktop & Mobile Header Call Buttons**
- **Cinematic Hero Call CTAs** with interactive 3D sheen effects
- **Contextual In-Content Banners** with symptom-specific subtexts
- **Persistent Mobile Sticky Call Bar** fixed to the viewport base with safe-area padding
- **Zero Click Delay:** Phone links invoke `tel:+19495398503` instantly while dispatching anonymous analytical telemetry.

### 2. Contact Form Security & Anti-Spam
The single form on `/contact/` includes multi-layered server and client protections:
- **Honeypot Trap:** Hidden inputs that automatically drop bot submissions without alerting scrapers.
- **In-Memory IP Rate Limiting:** Restricts abusive rapid submissions.
- **Server-Side Sanitization:** Input slicing and character cleaning to prevent script injection.
- **Accessible State Handling:** Live regions for assistive screen readers, visual loading spinners, and clear confirmation messaging.

### 3. Interactive Site Search & Diagnostics
- **Client-Side Fuzzy Filter:** Users can query across services, neighborhoods, educational guides, and FAQs without page reloads.
- **Zero Empty-State Dead Ends:** If a search produces zero results, the page provides suggested popular terms, quick category links, and a direct call button.
- **Robots Directives:** Configured with `robots: { index: false, follow: true }` to prevent search engine indexing of thin internal query permutations.

### 4. E-E-A-T Content & Transparency
- **Scientific References:** Articles cite the Uniform Plumbing Code (UPC), Copper Development Association (CDA), and Irvine Ranch Water District (IRWD) water quality reports.
- **Clear Author Attribution:** Transparently attributed to the *Spectrum Editorial Trade Team* with JSON-LD schema describing research credentials and methodology.

### 5. Technical SEO & Structured Data
- **Canonical URLs:** Strict self-referential canonical tags on all public routes.
- **OpenGraph & Twitter Card Metadata:** Complete social preview images, descriptions, and site names.
- **XML Sitemap:** Generated dynamically via Next.js metadata API at `/sitemap.xml`.
- **Clean Semantic Heading Hierarchy:** Strict single `<h1>` per page with logical descending `<h2>` and `<h3>` tags.

---

## 🛠️ Getting Started & Local Development

### Prerequisites
- **Node.js:** v18.17.0 or higher
- **npm** or **pnpm** / **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/aquavoplumbing/spectrum-plumbing-irvine.git
cd spectrum-plumbing-irvine
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build & Verification

To run a full production build and type check:

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Generate optimized production bundle
npm run build

# Start production server locally
npm start
```

### Build Verification Results:
- **TypeScript:** 0 errors
- **Static Generation:** 47/47 routes generated successfully
- **Turbopack Build Time:** ~5.4 seconds

---

## ⚖️ Compliance & Disclosures

> **Important Disclosure:**  
> Spectrum Plumbing Irvine is an independent consumer information directory and referral connection platform. Spectrum Plumbing Irvine does not directly employ plumbing technicians or perform physical plumbing repairs. All plumbing repairs, estimates, contracts, and warranties are executed directly between the property owner and the independent licensed plumbing contractor servicing the property.

---

## 📄 License

Proprietary — All rights reserved © 2026 Spectrum Plumbing Irvine.
