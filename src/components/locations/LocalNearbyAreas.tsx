import React from "react";
import Link from "next/link";
import { MapPin, Home, CheckCircle2, ArrowRight } from "lucide-react";
import { getNearbyServiceAreas, getAllLocationSlugs } from "@/data/locations";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PhoneCTA } from "@/components/shared/PhoneCTA";

interface LocalNearbyAreasProps {
  currentSlug: string;
  locationName: string;
  nearbySlugs: string[];
}

export function LocalNearbyAreas({
  currentSlug,
  locationName,
  nearbySlugs,
}: LocalNearbyAreasProps) {
  const nearbyAreas = getNearbyServiceAreas(nearbySlugs);
  const publishedSlugs = getAllLocationSlugs();

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Adjacent Irvine Communities"
          title={<>Explore Plumbing Services in <span className="gradient-text-accent">Nearby Irvine Neighborhoods</span></>}
          subtitle={`We serve homeowners across Irvine. Explore plumbing characteristics and service availability in communities adjacent to ${locationName}.`}
          centered={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {nearbyAreas.map((area) => {
            const isPublished = publishedSlugs.includes(area.id);
            const destinationHref = isPublished ? `/service-areas/${area.id}/` : `/service-areas/#area-${area.id}`;

            return (
              <article
                key={area.id}
                className="relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-[#168DFF]/60 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group bento-card-3d card-sheen"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#168DFF] to-[#38BDF8] text-white flex items-center justify-center shadow-md shadow-[#168DFF]/25 group-hover:scale-105 transition-transform">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors leading-tight">
                        {area.name}
                      </h3>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#F0F7FF] border border-[#168DFF]/20 text-[#087BDB] font-extrabold font-mono">
                      {area.zipCodes.split(",")[0]}
                    </span>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {area.shortDescription}
                  </p>

                  <div className="space-y-2 pt-3.5 border-t border-slate-100 text-xs">
                    <div className="flex items-start gap-2 text-[#0F172A]">
                      <Home className="w-3.5 h-3.5 text-[#168DFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#475569] font-medium">{area.commonHomeTypes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#087BDB] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs">{area.notableFeature}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={destinationHref}
                    className="text-xs font-bold text-[#087BDB] group-hover:text-[#168DFF] inline-flex items-center gap-1"
                  >
                    <span>View {area.name} Services</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <PhoneCTA
                    placement={`nearby_area_${area.id}`}
                    label="Call"
                    variant="outline"
                    className="text-[11px] py-1.5 px-3 font-bold"
                    showIcon={false}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
