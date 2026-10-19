import React from "react";
import Image from "next/image";

interface FeaturedImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function FeaturedImage({
  src,
  alt,
  caption,
  priority = true,
}: FeaturedImageProps) {
  return (
    <figure className="mb-10 lg:mb-12">
      <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.12)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-cover"
        />
        {/* Subtle bottom vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </div>
      {caption && (
        <figcaption className="mt-3.5 text-xs text-[#64748B] text-center italic max-w-2xl mx-auto leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
