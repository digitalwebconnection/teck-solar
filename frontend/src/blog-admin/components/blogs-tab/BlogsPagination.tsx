import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogsPaginationProps } from "./types";

export const BlogsPagination: React.FC<BlogsPaginationProps> = ({
  showingCount,
  totalCount,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (showingCount === 0) return null;

  const safeTotal = typeof totalCount === "number" && !isNaN(totalCount) ? totalCount : showingCount;
  const safeTotalPages = Math.max(1, totalPages || 1);

  return (
    <div className="bg-slate-50/80 px-4 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
      <div>
        Showing <strong className="text-slate-800">{showingCount}</strong> of{" "}
        <strong className="text-slate-800">{safeTotal}</strong> posts
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage <= 1}
          className="p-1.5 rounded border border-slate-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          title="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="text-xs font-bold text-slate-700">
          Page {currentPage} of {safeTotalPages}
        </span>

        <button
          type="button"
          onClick={() => onPageChange(Math.min(safeTotalPages, currentPage + 1))}
          disabled={currentPage >= safeTotalPages}
          className="p-1.5 rounded border border-slate-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          title="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
