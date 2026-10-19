import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ServicePageData } from "@/types/service";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";
import { SERVICES_BY_SLUG } from "@/data/services";
import { BUSINESS_PHONE } from "@/config/business";

interface RelatedServicesProps {
  relatedSlugs: string[];
  currentServiceSlug: string;
}

export function RelatedServices({ relatedSlugs, currentServiceSlug }: RelatedServicesProps) {
  const relatedServices: ServicePageData[] = relatedSlugs
    .map((slug) => SERVICES_BY_SLUG[slug])
    .filter((s): s is ServicePageData => Boolean(s) && s.slug !== currentServiceSlug)
    .slice(0, 4);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Complete Service Range"
          title={<>Related Plumbing Services <span className="gradient-text-accent">in Irvine, CA</span></>}
          subtitle="Explore interconnected plumbing solutions for Irvine residences and commercial facilities. We provide comprehensive phone assistance for all related plumbing concerns."
          centered={true}
        />

        <div className={`grid grid-cols-1 ${relatedServices.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : relatedServices.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"} gap-6 sm:gap-8 items-stretch`}>
          {relatedServices.map((service) => (
            <article
              key={service.slug}
              className="group relative flex flex-col justify-between h-full rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.06)] hover:border-[#168DFF]/60 hover:shadow-[0_20px_45px_-10px_rgba(22,141,255,0.2)] transition-all duration-300 card-sheen bento-card-3d"
            >
              {/* Image Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={service.hero.image}
                  alt={service.hero.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030C17] via-[#030C17]/40 to-transparent" />

                {/* Floating Badge */}
                {service.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wide bg-[#030C17]/90 text-[#38BDF8] border border-cyan-400/30 backdrop-blur-xl shadow-lg">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-extrabold text-white uppercase tracking-wider drop-shadow-md">
                    Irvine, CA Support
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-2.5 leading-snug">
                    <Link href={`/services/${service.slug}/`} className="focus:outline-none">
                      {service.name}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3 mb-4">
                    {service.hero.description}
                  </p>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <PhoneCTA
                    placement={`related_${service.slug}`}
                    label="Call"
                    variant="compact"
                    className="font-bold shadow-sm"
                    showIcon={true}
                  />

                  <Link
                    href={`/services/${service.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors group/link py-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
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
