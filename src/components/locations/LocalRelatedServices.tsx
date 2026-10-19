import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Sparkles } from "lucide-react";
import { ALL_SERVICES_DATA } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

interface LocalRelatedServicesProps {
  locationName: string;
}

const FEATURED_SERVICES = [
  "drain-cleaning-irvine-ca",
  "water-heater-repair-irvine-ca",
  "leak-detection-irvine-ca",
  "slab-leak-repair-irvine-ca",
  "sewer-line-repair-irvine-ca",
  "emergency-plumbing-irvine-ca",
];

export function LocalRelatedServices({ locationName }: LocalRelatedServicesProps) {
  const services = FEATURED_SERVICES.map((slug) =>
    ALL_SERVICES_DATA.find((s) => s.slug === slug)
  ).filter((s): s is typeof ALL_SERVICES_DATA[0] => Boolean(s));

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Detailed Solutions"
          title={<>Explore Related Plumbing Services <span className="gradient-text-accent">in Irvine</span></>}
          subtitle={`Dive deeper into specialized diagnostic procedures, repair methods, and equipment used across ${locationName} and neighboring Irvine communities.`}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-[#168DFF]/60 transition-all duration-300 bento-card-3d card-sheen flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-slate-950">
                  <Image
                    src={service.hero.image}
                    alt={service.hero.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030C17]/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#030C17]/85 text-cyan-300 border border-cyan-400/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-2">
                  {service.hero.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}/`}
                  className="text-xs font-bold text-[#087BDB] group-hover:text-[#168DFF] inline-flex items-center gap-1.5"
                >
                  <span>Learn more about {service.name.toLowerCase()} in Irvine</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
