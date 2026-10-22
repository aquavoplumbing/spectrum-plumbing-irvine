import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  FolderTree,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Wrench,
  BookOpen,
  FileText,
  PhoneCall,
  Home,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { ALL_SERVICES_DATA } from "@/data/services";
import { SERVICE_AREAS_DATA } from "@/data/serviceAreas";
import { getAllBlogPosts } from "@/data/blog";
import { getAllLocationSlugs } from "@/data/locations";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "HTML Sitemap & Complete Directory | Spectrum Plumbing Irvine",
  description:
    "Explore the complete index of plumbing services, Irvine neighborhood guides, educational troubleshooting articles, company information, and legal policies.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/sitemap/`,
  },
  openGraph: {
    title: "HTML Sitemap & Complete Directory | Spectrum Plumbing Irvine",
    description:
      "Explore the complete index of plumbing services, Irvine neighborhood guides, educational troubleshooting articles, and policies.",
    url: `${BUSINESS_INFO.domain}/sitemap/`,
    siteName: BUSINESS_INFO.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spectrum Plumbing Irvine - Sitemap & Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Sitemap & Complete Directory | Spectrum Plumbing Irvine",
    description:
      "Explore the complete index of plumbing services, Irvine neighborhood guides, educational troubleshooting articles, and policies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HTMLSitemapPage() {
  const services = ALL_SERVICES_DATA;
  const publishedLocationSlugs = getAllLocationSlugs();
  const blogPosts = getAllBlogPosts();

  const mainPages = [
    { title: "Homepage", href: "/", desc: "Direct phone triage and Irvine plumbing overview." },
    { title: "About Us", href: "/about/", desc: "Our transparent referral model, purpose, and values." },
    { title: "Contact Us", href: "/contact/", desc: "Primary phone line, optional contact form, and triage details." },
    { title: "How It Works", href: "/how-it-works/", desc: "Step-by-step phone inquiry process and questions to ask." },
    { title: "Plumbing FAQs", href: "/faq/", desc: "Frequently asked questions organized by category." },
    { title: "All Plumbing Services", href: "/services/", desc: "Categorized directory of all 15 plumbing capabilities." },
    { title: "Service Areas Hub", href: "/service-areas/", desc: "Irvine villages and community plumbing infrastructure." },
    { title: "Blog & Educational Guides", href: "/blog/", desc: "Homeowner diagnostic articles and maintenance guides." },
    { title: "Search Results", href: "/search/", desc: "Interactive keyword search across the entire website." },
  ];

  const legalPages = [
    { title: "Privacy Policy", href: "/privacy-policy/", desc: "Data collection, call tracking, and California CCPA/CPRA rights." },
    { title: "Terms of Use", href: "/terms-of-use/", desc: "Rules of website use, independent contractor terms, and limitations." },
    { title: "Website Disclaimer", href: "/disclaimer/", desc: "Educational content limits, emergency gas/flood warnings, and advisory." },
    { title: "Accessibility Statement", href: "/accessibility/", desc: "WCAG 2.1 AA conformance targets and feedback channels." },
  ];

  const editorialPages = [
    { title: "Editorial Standards & Policy", href: "/editorial-policy/", desc: "Research standards, fact-checking, and AI disclosure." },
    { title: "Author Profile: Spectrum Editorial Team", href: "/authors/spectrum-editorial-team/", desc: "Trade team credentials, expertise, and published works." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header />

      <main id="main-content" className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#64748B] mb-6">
            <Link href="/" className="hover:text-[#087BDB]">
              Home
            </Link>{" "}
            / <span className="text-[#0F172A] font-semibold">HTML Sitemap</span>
          </nav>

          <SectionHeading
            badge="Directory &amp; Navigation"
            title={
              <>
                Website <span className="gradient-text-accent">HTML Sitemap</span>
              </>
            }
            subtitle="A clean, user-friendly directory linking to every published page, service guide, and community profile on Spectrum Plumbing Irvine."
            centered={false}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {/* Group 1: Main Pages */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                      Main Website Pages
                    </h2>
                    <span className="text-xs text-[#64748B]">Core navigation &amp; discovery hubs</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {mainPages.map((page) => (
                    <li key={page.href} className="group">
                      <Link
                        href={page.href}
                        className="text-sm font-bold text-[#0F172A] group-hover:text-[#087BDB] transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-4 h-4 text-[#168DFF]" />
                        <span>{page.title}</span>
                      </Link>
                      <p className="text-xs text-[#64748B] pl-5.5 mt-0.5">{page.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Group 2: All 15 Plumbing Services */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                      Plumbing Services Directory
                    </h2>
                    <span className="text-xs text-[#64748B]">All 15 specialized capabilities in Irvine</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {services.map((svc) => (
                    <li key={svc.slug} className="group">
                      <Link
                        href={`/services/${svc.slug}/`}
                        className="text-sm font-bold text-[#0F172A] group-hover:text-[#087BDB] transition-colors flex items-center justify-between"
                      >
                        <span className="flex items-center gap-1.5">
                          <ChevronRight className="w-4 h-4 text-[#168DFF]" />
                          <span>{svc.name}</span>
                        </span>
                        {svc.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#475569]">
                            {svc.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Group 3: Irvine Service Areas */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                      Irvine Service Areas
                    </h2>
                    <span className="text-xs text-[#64748B]">Village profiles &amp; community coverage</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {SERVICE_AREAS_DATA.map((area) => {
                    const isPublished = publishedLocationSlugs.includes(area.id);
                    const href = isPublished ? `/service-areas/${area.id}/` : `/service-areas/${area.anchor}`;

                    return (
                      <li key={area.id} className="group">
                        <Link
                          href={href}
                          className="text-sm font-bold text-[#0F172A] group-hover:text-[#087BDB] transition-colors flex items-center justify-between"
                        >
                          <span className="flex items-center gap-1.5">
                            <ChevronRight className="w-4 h-4 text-[#168DFF]" />
                            <span>{area.name}, Irvine</span>
                          </span>
                          <span className="text-[11px] font-mono text-[#64748B]">
                            ZIP {area.zipCodes}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>

            {/* Group 4: Educational Guides & Blog Posts */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-heading text-[#0F172A]">
                      Plumbing Educational Guides
                    </h2>
                    <span className="text-xs text-[#64748B]">In-depth diagnostic &amp; repair articles</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {blogPosts.map((post) => (
                    <li key={post.slug} className="group">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="text-sm font-bold text-[#0F172A] group-hover:text-[#087BDB] transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-4 h-4 text-[#168DFF]" />
                        <span>{post.title}</span>
                      </Link>
                      <p className="text-xs text-[#64748B] pl-5.5 mt-0.5 line-clamp-1">{post.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Group 5: Company, Editorial & Legal Pages */}
            <section className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#0F172A]">
                        Company &amp; Editorial Standards
                      </h3>
                      <span className="text-xs text-[#64748B]">Transparency and governance policies</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {editorialPages.map((page) => (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          className="text-sm font-bold text-[#0F172A] hover:text-[#087BDB] transition-colors flex items-center gap-1.5"
                        >
                          <ChevronRight className="w-4 h-4 text-[#168DFF]" />
                          <span>{page.title}</span>
                        </Link>
                        <p className="text-xs text-[#64748B] pl-5.5 mt-0.5">{page.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#0F172A]">
                        Legal Policies &amp; Disclosures
                      </h3>
                      <span className="text-xs text-[#64748B]">Compliance and terms</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {legalPages.map((page) => (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          className="text-sm font-bold text-[#0F172A] hover:text-[#087BDB] transition-colors flex items-center gap-1.5"
                        >
                          <ChevronRight className="w-4 h-4 text-[#168DFF]" />
                          <span>{page.title}</span>
                        </Link>
                        <p className="text-xs text-[#64748B] pl-5.5 mt-0.5">{page.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Assistance Call Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 card-sheen">
            <div>
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
                Direct Telephone Assistance
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                Looking for a Specific Plumbing Solution in Irvine?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
                Speak directly with an experienced plumbing professional. Call (949) 539-8503 for direct telephone triage and contractor connection.
              </p>
            </div>
            <PhoneCTA
              placement="html_sitemap_banner"
              label={`Call ${BUSINESS_PHONE.display}`}
              variant="hero"
              className="w-full md:w-auto text-xs py-3.5 px-8 whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
              showIcon={true}
            />
          </div>
        </div>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
