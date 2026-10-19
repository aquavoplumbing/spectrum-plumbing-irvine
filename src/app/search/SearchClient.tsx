"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  ArrowRight,
  Droplets,
  MapPin,
  BookOpen,
  HelpCircle,
  PhoneCall,
  Sparkles,
  Layers,
} from "lucide-react";
import { BUSINESS_PHONE } from "@/config/business";
import { ALL_SERVICES_DATA } from "@/data/services";
import { SERVICE_AREAS_DATA } from "@/data/serviceAreas";
import { getAllBlogPosts } from "@/data/blog";
import { FAQS_DATA } from "@/data/faqs";

interface SearchResultItem {
  id: string;
  type: "Service" | "Neighborhood" | "Guide" | "FAQ";
  title: string;
  snippet: string;
  url: string;
  badge?: string;
}

export function SearchClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  // Aggregate searchable items
  const allSearchableItems: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // 1. Services
    ALL_SERVICES_DATA.forEach((s) => {
      list.push({
        id: `svc-${s.slug}`,
        type: "Service",
        title: s.name,
        snippet: s.hero.description,
        url: `/services/${s.slug}/`,
        badge: s.badge || "Specialized Service",
      });
    });

    // 2. Locations
    SERVICE_AREAS_DATA.forEach((loc) => {
      list.push({
        id: `loc-${loc.id}`,
        type: "Neighborhood",
        title: `${loc.name}, Irvine`,
        snippet: `${loc.shortDescription} Common home types: ${loc.commonHomeTypes}.`,
        url: loc.id === "woodbridge" ? `/service-areas/woodbridge/` : `/service-areas/${loc.anchor}`,
        badge: `ZIP ${loc.zipCodes}`,
      });
    });

    // 3. Blog articles
    const posts = getAllBlogPosts();
    posts.forEach((p) => {
      list.push({
        id: `post-${p.slug}`,
        type: "Guide",
        title: p.title,
        snippet: p.description,
        url: `/blog/${p.slug}/`,
        badge: p.category,
      });
    });

    // 4. FAQs
    FAQS_DATA.forEach((f) => {
      list.push({
        id: `faq-${f.id}`,
        type: "FAQ",
        title: f.question,
        snippet: f.answer,
        url: f.serviceLink ? f.serviceLink.href : "/faq/",
        badge: "Frequently Asked Question",
      });
    });

    return list;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return allSearchableItems.filter((item) => {
      const matchesType = activeFilter === "all" || item.type.toLowerCase() === activeFilter.toLowerCase();
      if (!matchesType) return false;

      return (
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
      );
    });
  }, [allSearchableItems, query, activeFilter]);

  return (
    <div className="space-y-10">
      {/* Search Input Bar */}
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, neighborhoods, guides, FAQs (e.g., slab leak, Woodbridge, water heater)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168DFF]/40 focus:border-[#168DFF] shadow-sm transition-all"
            autoFocus
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pt-4">
          {["all", "Service", "Neighborhood", "Guide", "FAQ"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveFilter(type)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === type
                  ? "bg-[#09223D] text-white shadow-xs"
                  : "bg-white text-[#475569] hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {type === "all" ? "All Results" : `${type}s`}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      {query.trim() && (
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-[#64748B]">
          <span>
            Found <strong>{results.length}</strong> matching {results.length === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
          </span>
          {results.length > 0 && <span>Click any result to explore</span>}
        </div>
      )}

      {/* Results List */}
      {!query.trim() ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-white border border-slate-200">
          <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold font-heading text-[#0F172A] mb-1">
            Search Spectrum Plumbing Irvine
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto mb-6">
            Enter keywords such as &ldquo;slab leak&rdquo;, &ldquo;drain cleaning&rdquo;, &ldquo;water heater&rdquo;, or &ldquo;Woodbridge&rdquo; to locate relevant guides and services.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {["Slab Leak", "Water Heater", "Drain Cleaning", "Woodbridge", "Hydro Jetting"].map((kw) => (
              <button
                key={kw}
                onClick={() => setQuery(kw)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 text-[#087BDB] font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
          <Droplets className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-2">
            No Matching Results Found
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto mb-8">
            We couldn&apos;t find anything matching &ldquo;{query}&rdquo;. You can try a different search term, browse our full services directory, or call our direct line for assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#087BDB] text-white font-bold text-xs hover:bg-[#076EBE] transition-colors"
            >
              Browse All Services
            </Link>
            <Link
              href="/blog/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-[#0F172A] font-bold text-xs hover:bg-slate-200 transition-colors"
            >
              Explore Educational Blog
            </Link>
            <a
              href={BUSINESS_PHONE.href}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#09223D] text-[#38BDF8] font-bold text-xs hover:bg-[#051426] transition-colors inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call {BUSINESS_PHONE.display}</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="block p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#168DFF]/60 hover:shadow-lg transition-all duration-200 card-sheen group"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[11px] font-bold text-[#087BDB] uppercase tracking-wider">
                  {item.type} {item.badge && `• ${item.badge}`}
                </span>
                <span className="text-xs text-[#087BDB] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] group-hover:text-[#087BDB] transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2">
                {item.snippet}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
