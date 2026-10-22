import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Clock,
  Mail,
  Award,
  Layers,
  FileCheck,
  PhoneCall,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getAuthorBySlug, getAllAuthorSlugs } from "@/data/authors";
import { getAllBlogPosts } from "@/data/blog";
import { BUSINESS_INFO, BUSINESS_PHONE } from "@/config/business";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAuthorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { title: "Author Not Found" };
  }

  return {
    title: `${author.name} | Author Profile | Spectrum Plumbing Irvine`,
    description: author.bio,
    alternates: {
      canonical: `${BUSINESS_INFO.domain}/authors/${author.slug}/`,
    },
    openGraph: {
      title: `${author.name} | Spectrum Plumbing Irvine`,
      description: author.bio,
      url: `${BUSINESS_INFO.domain}/authors/${author.slug}/`,
      siteName: BUSINESS_INFO.name,
      locale: "en_US",
      type: "profile",
      images: [
        {
          url: author.avatar || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${author.name} - Author Profile`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} | Spectrum Plumbing Irvine`,
      description: author.bio,
      images: [author.avatar || "/og-image.jpg"],
    },
  };
}

export default async function AuthorProfilePage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const allPosts = getAllBlogPosts();

  // Structured Data Schema for Organization / Editorial Team
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": author.type === "Person" ? "Person" : "Organization",
    name: author.name,
    description: author.bio,
    url: `${BUSINESS_INFO.domain}/authors/${author.slug}/`,
    image: `${BUSINESS_INFO.domain}${author.avatar}`,
    knowsAbout: author.expertise,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content" className="flex-1 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#64748B] mb-8">
            <Link href="/" className="hover:text-[#087BDB]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog/" className="hover:text-[#087BDB]">
              Resources
            </Link>{" "}
            / <span className="text-[#0F172A] font-semibold">{author.name}</span>
          </nav>

          {/* Author Header Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md flex-shrink-0 bg-slate-950">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              {/* Identity */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#087BDB] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Editorial Contributor</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0F172A] mb-2">
                  {author.name}
                </h1>

                <p className="text-sm font-semibold text-[#087BDB] mb-4">
                  {author.role}
                </p>

                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {author.fullBio}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <Link
                    href="/editorial-policy/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] underline underline-offset-4"
                  >
                    <span>Read Our Editorial Standards</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <Link
                    href={author.contactUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#475569] hover:text-[#0F172A]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact Editorial Desk</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials & Expertise Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold font-heading text-[#0F172A]">
                  Research &amp; Code Standards
                </h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
                {author.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#087BDB] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold font-heading text-[#0F172A]">
                  Primary Diagnostic Expertise
                </h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
                {author.expertise.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087BDB] flex-shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Methodology Callout */}
          <div className="p-8 rounded-3xl bg-[#F0F7FF] border border-[#168DFF]/20 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#087BDB] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading">
                  Research &amp; Review Methodology
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {author.methodology}
                </p>
              </div>
            </div>
          </div>

          {/* Published Articles */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-heading text-[#0F172A]">
                Published Guides &amp; Resources
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Articles authored and technically verified by {author.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#168DFF]/60 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between bento-card-3d"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <Image
                      src={post.featuredImage.src}
                      alt={post.featuredImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
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

                      <h3 className="text-lg font-bold font-heading text-[#0F172A] hover:text-[#087BDB] transition-colors mb-3 leading-snug">
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
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20">
          <FinalCTA
            heading={<>Have Questions for Our <span className="gradient-text-electric">Plumbing Team?</span></>}
            description="Discuss your plumbing symptoms with an experienced professional. Call (949) 539-8503 for direct telephone triage."
            placement="author_profile_final"
          />
        </div>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
