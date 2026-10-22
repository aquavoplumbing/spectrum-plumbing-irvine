import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen, Sparkles, CheckCircle2, ShieldCheck, UserCheck, HelpCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getAllBlogPosts } from "@/data/blog";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

export const metadata: Metadata = {
  title: "Plumbing Tips, Guides & Resources | Spectrum Plumbing Irvine",
  description:
    "Explore helpful information about common plumbing problems, maintenance, repair options, and when professional assistance may be appropriate in Irvine, CA.",
  alternates: {
    canonical: `${BUSINESS_INFO.domain}/blog/`,
  },
  openGraph: {
    title: "Plumbing Tips, Guides & Resources | Spectrum Plumbing Irvine",
    description:
      "Educational articles and troubleshooting guides for Irvine residential plumbing systems.",
    url: `${BUSINESS_INFO.domain}/blog/`,
    siteName: BUSINESS_INFO.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spectrum Plumbing Irvine - Plumbing Blog & Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Tips, Guides & Resources | Spectrum Plumbing Irvine",
    description:
      "Educational articles and troubleshooting guides for Irvine residential plumbing systems.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const [featuredPost, ...otherPosts] = posts;

  const categories = [
    { name: "Drain & Sewer", slug: "drain-sewer" },
    { name: "Water Heaters", slug: "water-heaters" },
    { name: "Leak Detection", slug: "leak-detection" },
    { name: "Plumbing Maintenance", slug: "maintenance" },
    { name: "Emergency Guidance", slug: "emergency" },
    { name: "Repair & Replacement", slug: "repair" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Section 1: Editorial Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#030C17] via-[#051426] to-[#071D35] text-white py-16 md:py-24 border-b border-cyan-500/20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#168DFF]/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#168DFF]/20 border border-cyan-400/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Irvine Homeowner Plumbing Education</span>
            </div>

            <h1 className="hero-title font-extrabold font-heading text-white tracking-tight mb-6 max-w-4xl mx-auto">
              Plumbing Tips, Guides &amp;{" "}
              <span className="gradient-text-electric">Resources</span>
            </h1>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore helpful information about common plumbing problems, maintenance, repair options, and when professional assistance may be appropriate.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                Uniform Plumbing Code (UPC) Standards
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                Irvine Soil &amp; Foundation Focus
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                Direct Telephone Connection
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Topic Categories Navigation */}
        <section className="bg-white border-b border-slate-200 py-4 sticky top-16 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider mr-2 hidden sm:inline">
                Topics:
              </span>
              {categories.map((cat) => (
                <span
                  key={cat.slug}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap bg-slate-100 hover:bg-[#168DFF]/10 hover:text-[#087BDB] text-[#475569] transition-colors cursor-pointer border border-slate-200/60"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Featured Guide Banner */}
        {featuredPost && (
          <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_16px_40px_-10px_rgba(15,23,42,0.08)] overflow-hidden card-sheen bento-card-3d">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Image (7 cols) */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={featuredPost.featuredImage.src}
                    alt={featuredPost.featuredImage.alt}
                    fill
                    priority={true}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#030C17]/90 text-[#38BDF8] border border-cyan-400/30 backdrop-blur-md shadow-md">
                      Featured Irvine Guide
                    </span>
                  </div>
                </div>

                {/* Content (5 cols) */}
                <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#087BDB] font-bold uppercase tracking-wider mb-3">
                      <span>{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#64748B]">
                        <Clock className="w-3.5 h-3.5 text-[#168DFF]" />
                        {featuredPost.readingTime} min read
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F172A] mb-4 leading-snug">
                      <Link
                        href={`/blog/${featuredPost.slug}/`}
                        className="hover:text-[#087BDB] transition-colors"
                      >
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#475569] leading-relaxed mb-6">
                      {featuredPost.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/blog/${featuredPost.slug}/`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#087BDB] hover:bg-[#076EBE] py-2.5 px-5 rounded-xl shadow-md shadow-[#087BDB]/25 transition-all"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={BUSINESS_PHONE.href}
                      className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A]"
                    >
                      Call to Discuss
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Grid of Other Plumbing Guides */}
        {otherPosts.length > 0 && (
          <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-heading text-[#0F172A]">
                Recent Educational Articles
              </h2>
              <p className="text-sm text-[#64748B] mt-1">
                Explore practical guidance on drainage systems, water heaters, and municipal water quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#168DFF]/60 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between card-sheen bento-card-3d"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <Image
                      src={post.featuredImage.src}
                      alt={post.featuredImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#030C17]/90 text-[#38BDF8] border border-cyan-400/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-2.5">
                        <Clock className="w-3.5 h-3.5 text-[#168DFF]" />
                        <span>{post.readingTime} min read</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] hover:text-[#087BDB] transition-colors mb-3 leading-snug">
                        <Link href={`/blog/${post.slug}/`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Helpful Service Links */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200">
            <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-4">
              Explore Related Plumbing Services
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/services/slab-leak-repair-irvine-ca/" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#168DFF] text-[#0F172A] font-semibold transition-colors">
                Slab Leak Repair
              </Link>
              <Link href="/services/leak-detection-irvine-ca/" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#168DFF] text-[#0F172A] font-semibold transition-colors">
                Electronic Leak Detection
              </Link>
              <Link href="/services/drain-cleaning-irvine-ca/" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#168DFF] text-[#0F172A] font-semibold transition-colors">
                Motorized Drain Cleaning
              </Link>
              <Link href="/services/water-heater-repair-irvine-ca/" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#168DFF] text-[#0F172A] font-semibold transition-colors">
                Water Heater Diagnostic
              </Link>
              <Link href="/services/hydro-jetting-irvine-ca/" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#168DFF] text-[#0F172A] font-semibold transition-colors">
                Hydro Jetting Sewer Lines
              </Link>
              <Link href="/services/" className="px-4 py-2 rounded-xl bg-[#087BDB]/10 border border-[#087BDB]/30 text-[#087BDB] font-bold hover:bg-[#087BDB]/20 transition-colors">
                View All 15 Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6 & 7: Editorial Trust Strip */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#087BDB]/10 text-[#087BDB] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-heading text-[#0F172A]">
                  Committed to Editorial Integrity &amp; Transparency
                </h4>
                <p className="text-xs text-[#64748B]">
                  Our educational articles are researched against Uniform Plumbing Code and verified local municipal data.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link
                href="/editorial-policy/"
                className="font-bold text-[#087BDB] hover:text-[#168DFF] underline underline-offset-4"
              >
                Editorial Standards
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/authors/spectrum-editorial-team/"
                className="font-bold text-[#087BDB] hover:text-[#168DFF] underline underline-offset-4"
              >
                Author Profiles
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/about/"
                className="font-bold text-[#087BDB] hover:text-[#168DFF] underline underline-offset-4"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Subtle Editorial CTA */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 card-sheen">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8] block mb-1">
                Direct Irvine Plumbing Connection
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Have a Plumbing Issue Not Covered in Our Guides?
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
                Speak directly with an experienced plumbing representative about water leaks, drain blockages, or water heater repairs in Irvine, CA.
              </p>
            </div>
            <PhoneCTA
              placement="blog_index_banner"
              label={`Call ${BUSINESS_PHONE.display}`}
              variant="hero"
              className="w-full md:w-auto text-xs py-3.5 px-8 whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
              showIcon={true}
            />
          </div>
        </section>

        {/* Section 8: Final CTA */}
        <FinalCTA
          eyebrow="Serving All Irvine Villages • Live Phone Support"
          heading={
            <>
              Need Reliable Plumbing Help in{" "}
              <span className="gradient-text-electric">Irvine Today?</span>
            </>
          }
          description="We connect Irvine homeowners directly with experienced local plumbing professionals. Call now to discuss your symptoms and service options."
          placement="blog_index_final"
        />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
