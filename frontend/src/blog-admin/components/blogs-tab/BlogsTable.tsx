import React from "react";
import {
  CheckSquare,
  Square,
  MinusSquare,
  ChevronUp,
  ChevronDown,
  Trash2,
  FileText,
} from "lucide-react";
import { BlogTableRow } from "./BlogTableRow";
import type { BlogsTableProps } from "./types";

export const BlogsTable: React.FC<BlogsTableProps> = ({
  loading,
  blogs,
  selectedIds,
  isTrashView,
  sortBy,
  sortOrder,
  onToggleSort,
  onToggleSelectAll,
  onToggleSelectRow,
  onEdit,
  onDelete,
  onPermanentDelete,
  onRestore,
  onStatusChange,
  onAdjustSchedule,
  onTogglePin,
  onViewAnalytics,
}) => {
  const isAllSelected = blogs.length > 0 && selectedIds.length === blogs.length;
  const isPartiallySelected = selectedIds.length > 0 && selectedIds.length < blogs.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-slate-400">
        {isTrashView ? (
          <>
            <Trash2 className="w-12 h-12 mb-3 opacity-30 text-rose-500" />
            <p className="font-bold text-sm text-slate-700">Trash is Empty</p>
            <p className="text-xs mt-1">No deleted blog posts in the trash bin.</p>
          </>
        ) : (
          <>
            <FileText className="w-12 h-12 mb-3 opacity-30 text-blue-500" />
            <p className="font-bold text-sm text-slate-700">No blog posts found</p>
            <p className="text-xs mt-1">Create your first post using the button above.</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500">
            {/* Select All Checkbox */}
            <th className="px-4 py-3.5 w-10 text-center">
              <button
                type="button"
                onClick={onToggleSelectAll}
                className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                title={isAllSelected ? "Deselect all" : "Select all"}
              >
                {isAllSelected ? (
                  <CheckSquare className="w-4 h-4 text-blue-600" />
                ) : isPartiallySelected ? (
                  <MinusSquare className="w-4 h-4 text-blue-600" />
                ) : (
                  <Square className="w-4 h-4" />
                )}
              </button>
            </th>

            {/* Photo Column Header */}
            <th className="w-16 px-3 py-3.5 text-center text-[11px] font-black uppercase tracking-wider">
              Photo
            </th>

            {/* Title & Info */}
            <th className="px-4 py-3.5 text-left text-[11px] font-black uppercase tracking-wider">
              Title &amp; Info
            </th>

            {/* Sortable Date Column */}
            <th className="px-4 py-3.5 text-left text-[11px] font-black uppercase tracking-wider hidden sm:table-cell">
              <button
                type="button"
                onClick={() => onToggleSort("date")}
                className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors cursor-pointer select-none group"
                title={`Sort by date (${
                  sortBy === "date"
                    ? sortOrder === "desc"
                      ? "currently newest first"
                      : "currently oldest first"
                    : "click to sort by publication date"
                })`}
              >
                <span className={sortBy === "date" ? "text-blue-600 font-extrabold" : ""}>
                  DATE
                </span>
                <span className="inline-flex flex-col -space-y-1">
                  <ChevronUp
                    className={`w-2.5 h-2.5 transition-colors ${
                      sortBy === "date" && sortOrder === "asc"
                        ? "text-blue-600 stroke-[3]"
                        : "text-slate-300 group-hover:text-slate-400"
                    }`}
                  />
                  <ChevronDown
                    className={`w-2.5 h-2.5 transition-colors ${
                      sortBy === "date" && sortOrder === "desc"
                        ? "text-blue-600 stroke-[3]"
                        : "text-slate-300 group-hover:text-slate-400"
                    }`}
                  />
                </span>
              </button>
            </th>

            {/* Sortable Views Column */}
            <th className="px-4 py-3.5 text-center text-[11px] font-black uppercase tracking-wider">
              <button
                type="button"
                onClick={() => onToggleSort("views")}
                className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors cursor-pointer select-none group mx-auto"
                title={`Sort by total views (${
                  sortBy === "views"
                    ? sortOrder === "desc"
                      ? "currently highest first"
                      : "currently lowest first"
                    : "click to sort by total views"
                })`}
              >
                <span className={sortBy === "views" ? "text-blue-600 font-extrabold" : ""}>
                  Views
                </span>
                <span className="inline-flex flex-col -space-y-1">
                  <ChevronUp
                    className={`w-2.5 h-2.5 transition-colors ${
                      sortBy === "views" && sortOrder === "asc"
                        ? "text-blue-600 stroke-[3]"
                        : "text-slate-300 group-hover:text-slate-400"
                    }`}
                  />
                  <ChevronDown
                    className={`w-2.5 h-2.5 transition-colors ${
                      sortBy === "views" && sortOrder === "desc"
                        ? "text-blue-600 stroke-[3]"
                        : "text-slate-300 group-hover:text-slate-400"
                    }`}
                  />
                </span>
              </button>
            </th>

            {/* Status Header */}
            <th className="px-4 py-3.5 text-left text-[11px] font-black uppercase tracking-wider">
              Status
            </th>

            {/* Actions Header */}
            <th className="px-4 py-3.5 text-right text-[11px] font-black uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {blogs.map((blog) => (
            <BlogTableRow
              key={blog._id}
              blog={blog}
              isSelected={selectedIds.includes(blog._id)}
              isTrashView={isTrashView}
              onToggleSelect={onToggleSelectRow}
              onEdit={onEdit}
              onDelete={onDelete}
              onPermanentDelete={onPermanentDelete}
              onRestore={onRestore}
              onStatusChange={onStatusChange}
              onAdjustSchedule={onAdjustSchedule}
              onTogglePin={onTogglePin}
              onViewAnalytics={onViewAnalytics}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
