import React from "react";
import { BlogPost } from "@/types/blog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { FeaturedImage } from "@/components/blog/FeaturedImage";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { TableOfContents, TOCItem } from "@/components/blog/TableOfContents";
import { ArticleCallout } from "@/components/blog/ArticleCallout";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { InlinePhoneCTA } from "@/components/blog/InlinePhoneCTA";
import { ArticleImage } from "@/components/blog/ArticleImage";
import { LocalIrvineSection } from "@/components/blog/LocalIrvineSection";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { EditorialReview } from "@/components/blog/EditorialReview";
import { ArticleReferences } from "@/components/blog/ArticleReferences";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { FAQSection } from "@/components/home/FAQSection";
import { RelatedServices } from "@/components/services/RelatedServices";
import { FinalCTA } from "@/components/home/FinalCTA";
import { generateBlogPostStructuredData } from "@/lib/structuredData";
import { getRelatedBlogPosts } from "@/data/blog";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface BlogPostTemplateProps {
  post: BlogPost;
}

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const structuredData = generateBlogPostStructuredData(post);
  const relatedArticles = getRelatedBlogPosts(post.relatedArticleSlugs);

  // Automatically build Table of Contents items from H2 and H3 headings
  const tocItems: TOCItem[] = [];
  post.sections.forEach((section) => {
    tocItems.push({
      id: section.id,
      title: section.title,
      level: 2,
    });
    if (section.subsections && section.subsections.length > 0) {
      section.subsections.forEach((sub) => {
        tocItems.push({
          id: sub.id,
          title: sub.title,
          level: 3,
        });
      });
    }
  });

  // Append conclusion to TOC
  if (post.conclusion) {
    tocItems.push({
      id: "conclusion",
      title: post.conclusion.heading,
      level: 2,
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Subtle Dynamic Reading Progress Bar */}
      <ReadingProgress />

      {/* Global Sticky Header */}
      <Header />

      <main id="main-content" className="flex-1">
        {/* Article Container */}
        <article className="pt-8 sm:pt-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Editorial Hero Header */}
            <div className="max-w-4xl mx-auto lg:mx-0">
              <ArticleHero
                title={post.title}
                category={post.category}
                summary={post.description}
                publishedAt={post.publishedAt}
                updatedAt={post.updatedAt}
                readingTime={post.readingTime}
                author={post.author}
                reviewer={post.reviewer}
              />
            </div>

            {/* Featured Hero Visual */}
            <div className="max-w-5xl mx-auto lg:mx-0 mb-10">
              <FeaturedImage
                src={post.featuredImage.src}
                alt={post.featuredImage.alt}
                caption={post.featuredImage.caption}
                priority={true}
              />
            </div>

            {/* Two-Column Editorial Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left / Main Reading Column (Target: 680-760px wide) */}
              <div
                id="article-content"
                className="lg:col-span-8 max-w-[760px] w-full mx-auto lg:mx-0"
              >
                {/* Mobile Collapsible TOC */}
                <TableOfContents items={tocItems} isMobileDrawer={true} />

                {/* Immediate Search Intent Satisfaction: Quick Answer */}
                {post.quickAnswer && (
                  <QuickAnswer
                    heading={post.quickAnswer.heading}
                    text={post.quickAnswer.text}
                    highlight={post.quickAnswer.highlight}
                  />
                )}

                {/* Main Article Rich Content Sections */}
                <div className="article-body space-y-12">
                  {post.sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28"
                    >
                      {/* Section Badge */}
                      {section.badge && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#EAF6FF] text-[#087BDB] mb-3 border border-[#087BDB]/15">
                          <Sparkles className="w-3 h-3 text-[#168DFF]" />
                          <span>{section.badge}</span>
                        </div>
                      )}

                      {/* Section H2 Heading */}
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0F172A] tracking-tight mb-5 leading-tight">
                        {section.title}
                      </h2>

                      {/* Section Paragraphs */}
                      <div className="space-y-5 text-base sm:text-lg leading-[1.8] text-[#334155] font-normal">
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Section Image if present */}
                      {section.image && (
                        <ArticleImage image={section.image} />
                      )}

                      {/* Section Subsections (H3) */}
                      {section.subsections && section.subsections.length > 0 && (
                        <div className="mt-8 space-y-8 pl-0 sm:pl-2">
                          {section.subsections.map((sub) => (
                            <div
                              key={sub.id}
                              id={sub.id}
                              className="scroll-mt-28"
                            >
                              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] mb-3 leading-snug">
                                {sub.title}
                              </h3>

                              <div className="space-y-4 text-base sm:text-lg leading-[1.8] text-[#334155]">
                                {sub.paragraphs.map((p, idx) => (
                                  <p key={idx}>{p}</p>
                                ))}
                              </div>

                              {sub.listItems && sub.listItems.length > 0 && (
                                <ul className="my-4 space-y-2 pl-5 list-disc text-base text-[#334155]">
                                  {sub.listItems.map((item, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {sub.callout && (
                                <ArticleCallout callout={sub.callout} />
                              )}

                              {sub.image && (
                                <ArticleImage image={sub.image} />
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section Callout if present */}
                      {section.callout && (
                        <ArticleCallout callout={section.callout} />
                      )}

                      {/* Section Comparison Table if present */}
                      {section.table && (
                        <ComparisonTable table={section.table} />
                      )}

                      {/* Inline Phone CTA if present */}
                      {section.inlineCTA && (
                        <InlinePhoneCTA
                          placement={section.inlineCTA.placement}
                          heading={section.inlineCTA.heading}
                          description={section.inlineCTA.description}
                          buttonText={section.inlineCTA.buttonText}
                        />
                      )}

                      {/* Local Irvine Neighborhood Section if present */}
                      {section.localIrvineSection && (
                        <LocalIrvineSection
                          heading={section.localIrvineSection.heading}
                          description={section.localIrvineSection.description}
                          villages={section.localIrvineSection.villages}
                          serviceLinks={section.localIrvineSection.serviceLinks}
                        />
                      )}
                    </section>
                  ))}

                  {/* Article Conclusion */}
                  {post.conclusion && (
                    <section
                      id="conclusion"
                      className="scroll-mt-28 pt-8 border-t border-slate-200"
                    >
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mb-4">
                        {post.conclusion.heading}
                      </h2>

                      <div className="space-y-4 text-base sm:text-lg leading-[1.8] text-[#334155] mb-6">
                        {post.conclusion.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {post.conclusion.keyTakeaway && (
                        <div className="p-6 rounded-2xl bg-[#F0F7FF] border border-[#168DFF]/30 flex items-start gap-3.5">
                          <CheckCircle2 className="w-5 h-5 text-[#168DFF] flex-shrink-0 mt-0.5" />
                          <div className="text-sm sm:text-base text-[#087BDB] font-semibold leading-relaxed">
                            <span className="font-bold text-[#0F172A] block mb-1">
                              Summary Takeaway:
                            </span>
                            {post.conclusion.keyTakeaway}
                          </div>
                        </div>
                      )}
                    </section>
                  )}
                </div>

                {/* E-E-A-T Author Box */}
                <AuthorBox author={post.author} />

                {/* Technical Review Statement */}
                {post.reviewer && (
                  <EditorialReview reviewer={post.reviewer} />
                )}

                {/* Citations & Authoritative References */}
                {post.references && post.references.length > 0 && (
                  <ArticleReferences references={post.references} />
                )}
              </div>

              {/* Right Column: Desktop Sticky Table of Contents (4 cols) */}
              <div className="lg:col-span-4 hidden lg:block">
                <TableOfContents items={tocItems} />
              </div>
            </div>
          </div>
        </article>

        {/* Section: Frequently Asked Questions Accordion */}
        {post.faqs && post.faqs.length > 0 && (
          <FAQSection
            badge="Expert Answers"
            title={
              <>
                Frequently Asked Questions{" "}
                <span className="gradient-text-accent">About Slab Leaks</span>
              </>
            }
            subtitle="Clear, direct answers to common questions regarding under-slab plumbing leaks, non-invasive detection, and repair decisions in Irvine, California."
            faqs={post.faqs}
            serviceName={post.title}
            sidebarTitle="Have a Question Not Listed Here?"
            sidebarText="Speak directly with an experienced plumbing representative about your symptoms and available service options in Irvine."
          />
        )}

        {/* Section: Related Plumbing Services */}
        {post.relatedServiceSlugs && post.relatedServiceSlugs.length > 0 && (
          <RelatedServices
            relatedSlugs={post.relatedServiceSlugs}
            currentServiceSlug=""
          />
        )}

        {/* Section: Related Educational Articles */}
        {relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}

        {/* Section: Final High-Impact Conversion CTA */}
        <FinalCTA
          eyebrow="Direct Irvine Phone Assistance • Fast Local Connection"
          heading={
            <>
              Suspect a Slab Leak in Your{" "}
              <span className="gradient-text-electric">Irvine Home?</span>
            </>
          }
          description="Do not wait for water to soak through your flooring or compromise your foundation. Call our Irvine line now to discuss your symptoms with a knowledgeable local trade specialist."
          ctaText="Call (949) 539-8503 for Assessment"
          placement="blog_final_cta"
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mandatory Mobile Sticky Call Bar */}
      <MobileCallBar />
    </div>
  );
}
