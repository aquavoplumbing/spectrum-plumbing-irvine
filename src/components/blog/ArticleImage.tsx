import React from "react";
import Image from "next/image";
import { BlogImageData } from "@/types/blog";
import { cn } from "@/lib/utils";

interface ArticleImageProps {
  image: BlogImageData;
  className?: string;
}

export function ArticleImage({ image, className }: ArticleImageProps) {
  const { src, alt, caption } = image;

  return (
    <figure className={cn("my-8 w-full", className)}>
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-sm">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs text-[#64748B] text-center italic leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
