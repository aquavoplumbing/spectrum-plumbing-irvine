import React from "react";
import { BlogTableData } from "@/types/blog";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
  table: BlogTableData;
  className?: string;
}

export function ComparisonTable({ table, className }: ComparisonTableProps) {
  const { caption, headers, rows, footnote } = table;

  return (
    <div className={cn("my-10 w-full", className)}>
      <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm bg-white">
        <table className="w-full text-left text-sm border-collapse min-w-[600px]">
          {caption && (
            <caption className="p-4 text-left font-bold text-base text-[#0F172A] bg-[#F8FAFC] border-b border-slate-200/90">
              {caption}
            </caption>
          )}
          <thead className="bg-[#F0F7FF] border-b border-slate-200/90 text-xs uppercase font-extrabold tracking-wider text-[#087BDB]">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className={cn(
                    "py-3.5 px-4 font-bold text-[#0F172A]",
                    idx === 0 && "pl-5 font-extrabold text-[#087BDB]"
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-[#334155]">
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={cn(
                  "transition-colors hover:bg-slate-50/80",
                  rowIdx % 2 === 1 ? "bg-[#F8FAFC]/60" : "bg-white"
                )}
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={cn(
                      "py-3.5 px-4 leading-relaxed",
                      cellIdx === 0 && "pl-5 font-semibold text-[#0F172A]"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p className="mt-2 text-xs text-[#64748B] italic leading-relaxed">
          {footnote}
        </p>
      )}
    </div>
  );
}
