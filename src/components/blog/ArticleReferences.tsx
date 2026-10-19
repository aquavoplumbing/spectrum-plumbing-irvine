import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { BlogReference } from "@/types/blog";
import { cn } from "@/lib/utils";

interface ArticleReferencesProps {
  references: BlogReference[];
  className?: string;
}

export function ArticleReferences({
  references,
  className,
}: ArticleReferencesProps) {
  if (!references || references.length === 0) return null;

  return (
    <div
      className={cn(
        "my-12 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 text-xs text-[#475569]",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-4 h-4 text-[#087BDB]" />
        <h3 className="font-extrabold uppercase tracking-wider text-xs text-[#0F172A]">
          Authoritative Sources &amp; Technical References
        </h3>
      </div>

      <p className="text-[11px] text-[#64748B] mb-5 leading-relaxed">
        This plumbing educational resource cites published industry standards, municipal utility reports, and official code authorities:
      </p>

      <ol className="space-y-3.5 list-decimal list-inside">
        {references.map((ref, idx) => (
          <li key={idx} className="leading-relaxed pl-1">
            <span className="font-semibold text-[#0F172A]">{ref.title}</span> —{" "}
            <span className="text-[#64748B]">{ref.publisher}</span>.{" "}
            {ref.accessDate && (
              <span className="text-[#94A3B8]">({ref.accessDate}). </span>
            )}
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#087BDB] hover:text-[#168DFF] hover:underline"
            >
              <span>View Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            {ref.note && (
              <p className="mt-1 pl-5 text-[11px] text-[#64748B] italic">
                {ref.note}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
