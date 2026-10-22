import React from "react";
import Link from "next/link";
import { UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { BlogAuthor } from "@/types/blog";
import { cn } from "@/lib/utils";

interface AuthorBoxProps {
  author: BlogAuthor;
  className?: string;
}

export function AuthorBox({ author, className }: AuthorBoxProps) {
  return (
    <div
      className={cn(
        "my-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#087BDB] to-[#38BDF8] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#087BDB]/30 border border-white/20">
          <UserCheck className="w-7 h-7" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087BDB] bg-[#EAF6FF] px-2.5 py-0.5 rounded-full border border-[#087BDB]/20">
              Editorial Trade Attribution
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0F172A] mb-1">
            Written by {author.name}
          </h3>

          <p className="text-xs text-[#087BDB] font-semibold mb-3">
            {author.role}
          </p>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
            {author.bio}
          </p>

          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Reviewed against California Plumbing Codes</span>
            </div>

            <Link
              href="/editorial-policy/"
              className="font-bold text-[#087BDB] hover:text-[#168DFF] transition-colors inline-flex items-center gap-1"
            >
              <span>Read Editorial Standards &amp; Review Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
