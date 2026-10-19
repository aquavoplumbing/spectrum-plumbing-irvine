import React from "react";
import { CheckCircle2, Shield } from "lucide-react";
import { BlogReviewer } from "@/types/blog";
import { cn } from "@/lib/utils";

interface EditorialReviewProps {
  reviewer: BlogReviewer;
  className?: string;
}

export function EditorialReview({ reviewer, className }: EditorialReviewProps) {
  const { name, credentials, reviewedAt, note } = reviewer;

  return (
    <div
      className={cn(
        "my-8 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-xs text-[#475569] leading-relaxed",
        className
      )}
    >
      <div className="flex items-start gap-3.5">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
          <Shield className="w-4 h-4 text-emerald-700" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-extrabold uppercase tracking-wider text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Technical Verification
            </span>
            <span className="text-[#64748B]">Reviewed {reviewedAt}</span>
          </div>
          <p className="font-semibold text-[#0F172A] mb-1">
            {name} — {credentials}
          </p>
          {note && <p className="text-[#64748B]">{note}</p>}
        </div>
      </div>
    </div>
  );
}
