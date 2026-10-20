import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  priority?: boolean;
  href?: string;
  subtext?: string;
}

const sizeConfig = {
  sm: {
    iconSize: "w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9",
    pixels: 36,
    titleSize: "text-sm xs:text-base sm:text-lg",
    subtextSize: "text-[9px] sm:text-[10px]",
    gap: "gap-1.5 xs:gap-2 sm:gap-2.5",
  },
  md: {
    iconSize: "w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11",
    pixels: 44,
    titleSize: "text-[14px] xs:text-base sm:text-xl",
    subtextSize: "text-[9px] xs:text-[10px] sm:text-xs",
    gap: "gap-2 xs:gap-2.5 sm:gap-3",
  },
  lg: {
    iconSize: "w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14",
    pixels: 56,
    titleSize: "text-lg xs:text-xl sm:text-2xl",
    subtextSize: "text-[11px] xs:text-xs sm:text-sm",
    gap: "gap-2.5 sm:gap-3 sm:gap-3.5",
  },
};

export function Logo({
  className,
  size = "md",
  showText = true,
  priority = false,
  href = "/",
  subtext = "Irvine, CA",
}: LogoProps) {
  const currentSize = sizeConfig[size];

  const content = (
    <div className={cn("flex items-center group min-w-0", currentSize.gap, className)}>
      <div className="relative flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="Spectrum Plumbing Irvine Logo"
          width={currentSize.pixels}
          height={currentSize.pixels}
          priority={priority}
          className={cn(
            currentSize.iconSize,
            "object-contain filter drop-shadow-[0_4px_14px_rgba(22,141,255,0.4)]"
          )}
        />
      </div>

      {showText && (
        <div className="flex flex-col min-w-0">
          <span
            className={cn(
              "font-heading font-extrabold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors leading-tight whitespace-nowrap",
              currentSize.titleSize
            )}
          >
            Spectrum Plumbing
          </span>
          {subtext && (
            <span
              className={cn(
                "font-extrabold text-[#38BDF8] tracking-widest uppercase flex items-center gap-1.5 mt-0.5",
                currentSize.subtextSize
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>{subtext}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-xl inline-flex"
        aria-label="Spectrum Plumbing Irvine Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
