import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border",
            isDark
              ? "bg-[#087BDB]/20 text-[#35C7F4] border-[#35C7F4]/30"
              : "bg-[#EAF6FF] text-[#087BDB] border-[#087BDB]/20"
          )}
        >
          <span
            className={cn(
              "w-2 h-2 rounded-full animate-pulse",
              isDark ? "bg-[#35C7F4]" : "bg-[#087BDB]"
            )}
          />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-[#071D35]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            isDark ? "text-[#EAF6FF]/80" : "text-[#61738A]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
