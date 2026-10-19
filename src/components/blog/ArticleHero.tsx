import React from "react";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, CheckCircle2, UserCheck } from "lucide-react";
import { BlogAuthor, BlogReviewer } from "@/types/blog";

interface ArticleHeroProps {
  title: string;
  category: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  author: BlogAuthor;
  reviewer?: BlogReviewer;
}

export function ArticleHero({
  title,
  category,
  summary,
  publishedAt,
  updatedAt,
  readingTime,
  author,
  reviewer,
}: ArticleHeroProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <header className="mb-10 lg:mb-12">
      {/* Semantic Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs text-[#64748B] mb-6 flex-wrap"
      >
        <Link
          href="/"
          className="hover:text-[#087BDB] transition-colors font-medium"
        >
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link
          href="/blog/"
          className="hover:text-[#087BDB] transition-colors font-medium"
        >
          Blog
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-[#0F172A] font-semibold truncate max-w-xs sm:max-w-md">
          {category}
        </span>
      </nav>

      {/* Category Pill with Pulse Accent */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 bg-[#EAF6FF] text-[#087BDB] border border-[#087BDB]/20">
        <span className="w-2 h-2 rounded-full bg-[#168DFF] animate-pulse" />
        <span>{category}</span>
      </div>

      {/* Expressive Editorial H1 */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-[1.12] mb-6">
        {title}
      </h1>

      {/* Concise 40-70 word Summary Introduction */}
      <p className="text-lg sm:text-xl text-[#334155] leading-relaxed mb-8 font-normal max-w-3xl">
        {summary}
      </p>

      {/* Editorial Metadata Bar */}
      <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748B]">
        {/* Left: Author & Date Details */}
        <div className="flex items-center gap-3.5 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#087BDB] to-[#38BDF8] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#0F172A] leading-tight">
                {author.name}
              </span>
              <span className="text-[11px] text-[#64748B]">
                {author.role}
              </span>
            </div>
          </div>

          <span className="hidden sm:inline text-slate-300">•</span>

          <div className="flex items-center gap-1.5 text-[11px]">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Published {formatDate(publishedAt)}</span>
          </div>

          {updatedAt && (
            <>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Updated {formatDate(updatedAt)}
              </span>
            </>
          )}
        </div>

        {/* Right: Reading Time */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#087BDB] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#087BDB]/15">
          <Clock className="w-3.5 h-3.5" />
          <span>{readingTime} min read</span>
        </div>
      </div>

      {/* Reviewer Note if available */}
      {reviewer && (
        <div className="mt-4 py-2 px-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[11px] text-[#64748B] flex items-center gap-2">
          <span className="font-bold text-[#0F172A]">Technical Review:</span>
          <span>{reviewer.credentials} ({reviewer.reviewedAt})</span>
        </div>
      )}
    </header>
  );
}
