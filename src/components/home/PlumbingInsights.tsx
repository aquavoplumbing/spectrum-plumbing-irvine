import React from "react";
import Image from "next/image";
import { CheckCircle, ChevronRight, Clock, ArrowRight } from "lucide-react";
import { PLUMBING_INSIGHTS_DATA } from "@/data/insights";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { BUSINESS_PHONE } from "@/config/business";

const ARTICLE_IMAGES = [
  "/images/leak-detection-acoustic.jpg",
  "/images/drain-cleaning-equipment.jpg",
  "/images/water-heater-diagnostic.jpg",
  "/images/copper-pipe-repair.jpg",
];

export interface PlumbingInsightsProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  articleSlugs?: string[];
}

export function PlumbingInsights({
  badge = "Educational Resource",
  title = <>Helpful Plumbing Insights for <span className="gradient-text-accent">Irvine Homeowners</span></>,
  subtitle = "Understanding your property's plumbing infrastructure helps you identify warning signs early, safeguard your foundation, and make informed repair choices.",
  articleSlugs,
}: PlumbingInsightsProps = {}) {
  const articles = articleSlugs && articleSlugs.length > 0
    ? articleSlugs
        .map((slug) => PLUMBING_INSIGHTS_DATA.find((a) => a.id === slug))
        .filter((a): a is typeof PLUMBING_INSIGHTS_DATA[0] => Boolean(a))
    : PLUMBING_INSIGHTS_DATA;

  const [featuredArticle, ...secondaryArticles] = articles.length > 0 ? articles : PLUMBING_INSIGHTS_DATA;

  return (
    <section
      id="plumbing-insights"
      className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle}
          centered={true}
        />


        {/* Magazine-style 3D Layout: 1 Featured large article on left, 3 secondary articles stacked on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Featured Large Article (7 cols) */}
          {featuredArticle && (
            <article className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/90 bento-card-3d bg-white card-sheen flex flex-col justify-between">
              <div className="relative h-72 sm:h-84 w-full overflow-hidden bg-slate-950">
                <Image
                  src={ARTICLE_IMAGES[0]}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold bg-[#030C17]/90 text-[#38BDF8] border border-cyan-400/30 backdrop-blur-md shadow-lg">
                    Featured Irvine Insight
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                    <span className="font-extrabold uppercase tracking-wider text-[#168DFF]">
                      {featuredArticle.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-base text-[#475569] leading-relaxed mb-6">
                    {featuredArticle.summary}
                  </p>

                  <div className="space-y-2.5 mb-6 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                    {featuredArticle.keyPoints.slice(0, 3).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1E293B]">
                        <CheckCircle className="w-4 h-4 text-[#168DFF] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={featuredArticle.serviceLink.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors group/link"
                  >
                    <span>{featuredArticle.serviceLink.text}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href={BUSINESS_PHONE.href}
                    className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A]"
                  >
                    Discuss by phone
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* Secondary Articles Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {secondaryArticles.map((item) => (
              <article
                key={item.id}
                className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#168DFF]/60 transition-all duration-300 shadow-sm hover:shadow-lg group flex flex-col justify-between flex-1 card-sheen"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-2">
                    <span className="font-extrabold uppercase tracking-wider text-[#168DFF]">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <a
                    href={item.serviceLink.href}
                    className="font-bold text-[#087BDB] group-hover:text-[#168DFF] inline-flex items-center gap-1"
                  >
                    <span>{item.serviceLink.text}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Section Phone Action */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#030C17] via-[#051426] to-[#09223D] text-white border border-cyan-400/25 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 card-sheen">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Have a Specific Home Plumbing Question?
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              Speak with a local plumbing representative to discuss your symptoms and service options.
            </p>
          </div>
          <PhoneCTA
            placement="insights_banner"
            label={`Call ${BUSINESS_PHONE.display}`}
            variant="hero"
            className="w-full sm:w-auto text-xs py-3.5 px-7 whitespace-nowrap shadow-xl shadow-[#168DFF]/30 btn-3d"
            showIcon={true}
          />
        </div>
      </div>
    </section>
  );
}

