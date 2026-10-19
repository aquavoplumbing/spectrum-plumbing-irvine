"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown, BookmarkCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TOCItem {
  id: string;
  title: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
  isMobileDrawer?: boolean;
}

export function TableOfContents({
  items,
  className,
  isMobileDrawer = false,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    // Set first item active initially
    setActiveId(items[0].id);

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!headingElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible headings
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by top distance to viewport top
          const topEntry = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
          setActiveId(topEntry.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 0.5, 1],
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [items]);

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  if (isMobileDrawer) {
    return (
      <div className={cn("w-full mb-8 lg:hidden", className)}>
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-[#0F172A] hover:bg-slate-100/70 transition-colors"
          >
            <span className="flex items-center gap-2 text-[#087BDB]">
              <List className="w-4 h-4 text-[#168DFF]" />
              <span className="text-[#0F172A]">Table of Contents</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EAF6FF] text-[#087BDB]">
                {items.length} sections
              </span>
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-[#64748B] transition-transform duration-200",
                isMobileOpen && "rotate-180"
              )}
            />
          </button>

          {isMobileOpen && (
            <nav
              aria-label="Mobile article table of contents"
              className="p-4 pt-1 border-t border-slate-200/80 max-h-72 overflow-y-auto space-y-1 text-xs"
            >
              {items.map((item, idx) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    className={cn(
                      "block py-1.5 px-2.5 rounded-lg transition-colors leading-snug",
                      item.level === 3 ? "pl-5 text-slate-500" : "font-semibold",
                      isActive
                        ? "bg-[#168DFF]/10 text-[#087BDB] font-bold"
                        : "text-[#475569] hover:text-[#087BDB] hover:bg-slate-100/60"
                    )}
                  >
                    {item.level === 2 ? `${idx + 1}. ` : "• "}
                    {item.title}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    );
  }

  return (
    <aside
      aria-label="Article Table of Contents"
      className={cn(
        "sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.06)] card-sheen",
        className
      )}
    >
      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
        <div className="w-8 h-8 rounded-xl bg-[#EAF6FF] text-[#087BDB] flex items-center justify-center">
          <BookmarkCheck className="w-4 h-4 text-[#168DFF]" />
        </div>
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
            In This Guide
          </h3>
          <p className="text-[11px] text-[#64748B] font-medium">
            Jump to any section
          </p>
        </div>
      </div>

      <nav
        aria-label="Table of contents navigation"
        className="space-y-1 text-xs"
      >
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(item.id, e)}
              className={cn(
                "group flex items-start gap-2 py-1.5 px-3 rounded-xl transition-all duration-200 leading-snug select-none",
                isH3 ? "ml-4 text-[11px] text-[#64748B]" : "text-xs font-semibold",
                isActive
                  ? "bg-gradient-to-r from-[#168DFF]/15 to-[#38BDF8]/10 text-[#087BDB] font-bold border-l-2 border-[#168DFF] shadow-xs"
                  : "text-[#475569] hover:text-[#087BDB] hover:bg-slate-50"
              )}
            >
              <span
                className={cn(
                  "flex-shrink-0 transition-colors mt-0.5",
                  isActive
                    ? "text-[#168DFF] font-bold"
                    : "text-slate-400 group-hover:text-[#087BDB]"
                )}
              >
                {isH3 ? "›" : `${index + 1}.`}
              </span>
              <span className="line-clamp-2">{item.title}</span>
            </a>
          );
        })}
      </nav>

      {/* Direct Phone Call Widget in TOC Sidebar */}
      <div className="mt-6 pt-5 border-t border-slate-100 text-center">
        <p className="text-[11px] text-[#64748B] mb-2 font-medium">
          Have urgent questions while reading?
        </p>
        <a
          href="tel:+19495398503"
          className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-[#087BDB] hover:bg-[#076EBE] text-white text-xs font-bold transition-all shadow-md shadow-[#087BDB]/25 hover:shadow-lg active:scale-98"
        >
          Call (949) 539-8503
        </a>
      </div>
    </aside>
  );
}
