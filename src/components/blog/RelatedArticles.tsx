import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface RelatedArticlesProps {
  articles: BlogPost[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Educational Resource Hub"
          title={
            <>
              Continue Learning About{" "}
              <span className="gradient-text-accent">Residential Plumbing</span>
            </>
          }
          subtitle="Explore in-depth technical guides written to help Irvine homeowners recognize warning signs early and protect property investments."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post) => (
            <article
              key={post.slug}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-[#168DFF]/60 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden card-sheen bento-card-3d"
            >
              {/* Card Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <Image
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#030C17]/90 text-[#38BDF8] border border-cyan-400/30 backdrop-blur-md shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#64748B] mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#168DFF]" />
                      <span>{post.readingTime} min read</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-3 leading-snug">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087BDB] group-hover:text-[#168DFF] transition-colors"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
