import React from "react";
import {
  CheckSquare,
  Square,
  Sparkles,
  Pin,
  Clock,
  CalendarDays,
  Eye,
  BarChart3,
  Pencil,
  Trash2,
  RotateCcw,
  Image as ImageIcon,
} from "lucide-react";
import { formatNumber } from "../../countryUtils";
import type { BlogTableRowProps } from "./types";

export const BlogTableRow: React.FC<BlogTableRowProps> = ({
  blog,
  isSelected,
  isTrashView,
  onToggleSelect,
  onEdit,
  onDelete,
  onPermanentDelete,
  onRestore,
  onStatusChange,
  onAdjustSchedule,
  onTogglePin,
  onViewAnalytics,
}) => {
  const countrySum = (blog.countries || []).reduce(
    (sum: number, c) => sum + (c.count || 0),
    0
  );
  const totalViews = Math.max(blog.viewCount ?? 0, countrySum);

  return (
    <tr
      className={`hover:bg-slate-50/80 transition-colors group ${
        isSelected ? "bg-blue-50/40" : ""
      } ${blog.isPinned ? "bg-amber-50/20" : ""}`}
    >
      {/* Checkbox */}
      <td className="px-4 py-3.5 text-center">
        <button
          type="button"
          onClick={() => onToggleSelect(blog._id)}
          className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
        >
          {isSelected ? (
            <CheckSquare className="w-4 h-4 text-blue-600" />
          ) : (
            <Square className="w-4 h-4" />
          )}
        </button>
      </td>

      {/* Photo / Thumbnail */}
      <td className="px-3 py-3.5 text-center align-middle w-16">
        {blog.featureImage ? (
          <img
            src={blog.featureImage}
            alt={blog.title}
            className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200/90 shadow-2xs mx-auto group-hover:scale-105 transition-transform duration-200 cursor-pointer"
            onClick={() => onEdit(blog)}
            title="Click to edit post"
          />
        ) : (
          <div
            onClick={() => onEdit(blog)}
            className="w-10 h-10 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center mx-auto border border-slate-200/80 shadow-2xs cursor-pointer hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 transition-colors"
            title="No photo set - click to edit"
          >
            <ImageIcon className="w-4 h-4 stroke-[1.5]" />
          </div>
        )}
      </td>

      {/* Title & Info */}
      <td className="px-4 py-3.5 max-w-[340px]">
        <div className="flex items-start gap-2.5">
          {/* Pin Toggle Button */}
          {!isTrashView && onTogglePin && (
            <button
              type="button"
              onClick={() => onTogglePin(blog._id)}
              className={`p-1 rounded transition-colors cursor-pointer shrink-0 mt-0.5 ${
                blog.isPinned
                  ? "text-amber-500 hover:text-amber-600 bg-amber-100/50"
                  : "text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100"
              }`}
              title={blog.isPinned ? "Unpin post" : "Pin post to top"}
            >
              <Pin
                className={`w-3.5 h-3.5 ${
                  blog.isPinned ? "fill-amber-500" : ""
                }`}
              />
            </button>
          )}

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              {blog.isPinned && (
                <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200">
                  <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                  Featured
                </span>
              )}
              <p
                onClick={() => onEdit(blog)}
                className="font-bold text-slate-800 line-clamp-1 hover:text-blue-600 cursor-pointer"
                title={blog.title}
              >
                {blog.title}
              </p>
            </div>

            <p className="text-[11px] text-slate-400 truncate mt-0.5">
              {blog.slug ? `/blog/${blog.slug}` : "No slug set"}
            </p>
          </div>
        </div>
      </td>

      {/* Date / Time */}
      <td className="px-4 py-3.5 hidden sm:table-cell">
        {blog.status === "scheduled" ? (
          <button
            type="button"
            onClick={() => onAdjustSchedule?.(blog)}
            className="flex flex-col text-left group/sched p-1.5 -m-1.5 rounded hover:bg-violet-50 transition-colors cursor-pointer border border-transparent hover:border-violet-200"
            title="Click to adjust scheduled date & time"
          >
            <span className="flex items-center gap-1 text-xs text-violet-700 font-bold group-hover/sched:text-violet-900">
              <Clock className="w-3 h-3 text-violet-600 shrink-0 group-hover/sched:scale-110 transition-transform" />
              {blog.scheduledAt
                ? new Date(blog.scheduledAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Set Date"}
              <span className="text-[9px] uppercase tracking-wider bg-violet-100 text-violet-700 px-1 py-0.2 rounded font-black opacity-80 group-hover/sched:opacity-100 group-hover/sched:bg-violet-200 transition-colors">
                Adjust
              </span>
            </span>
            <span className="text-[10px] text-violet-600/80 font-semibold pl-4">
              {blog.scheduledAt
                ? new Date(blog.scheduledAt).toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                : "Set Time"}
            </span>
          </button>
        ) : (
          <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
            <CalendarDays className="w-3 h-3 text-slate-400" />
            {blog.date
              ? new Date(blog.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "—"}
          </span>
        )}
      </td>

      {/* Views */}
      <td className="px-4 py-3 text-center align-middle">
        <div
          className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 font-mono font-bold text-xs select-none"
          title={`${formatNumber(totalViews)} total views`}
        >
          <Eye className="w-3.5 h-3.5 text-blue-500 shrink-0" />
          <span>{formatNumber(totalViews)}</span>
        </div>
      </td>

      {/* Status Dropdown */}
      <td className="px-4 py-3.5">
        {!isTrashView ? (
          <select
            value={blog.status}
            onChange={(e) => onStatusChange(blog._id, e.target.value)}
            className={`px-3 py-1.5 rounded-sm border text-xs font-bold outline-none cursor-pointer uppercase transition-colors shadow-2xs ${
              blog.status === "published"
                ? "bg-emerald-50 text-emerald-700 border-emerald-400 hover:bg-emerald-100/80"
                : blog.status === "scheduled"
                ? "bg-violet-50 text-violet-700 border-violet-400 hover:bg-violet-100/80"
                : "bg-amber-50 text-amber-700 border-amber-400 hover:bg-amber-100/80"
            }`}
            title="Change publication status"
          >
            <option value="draft">DRAFT</option>
            <option value="published">PUBLISHED</option>
            <option value="scheduled">SCHEDULED</option>
          </select>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-black uppercase bg-rose-50 text-rose-700 border border-rose-200">
            <Trash2 className="w-3 h-3 text-rose-500" />
            Trashed
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 py-3.5">
        <div className="flex items-center justify-end gap-1">
          {!isTrashView ? (
            <>
              {/* Analytics */}
              {onViewAnalytics && (
                <button
                  type="button"
                  onClick={() => onViewAnalytics(blog)}
                  title="View Article Analytics & Countries"
                  className="p-1.5 rounded text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Edit */}
              <button
                type="button"
                onClick={() => onEdit(blog)}
                title="Edit post"
                className="p-1.5 rounded text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>

              {/* Move to trash */}
              <button
                type="button"
                onClick={() => onDelete(blog._id)}
                title="Move to trash"
                className="p-1.5 rounded text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <>
              {/* Restore from trash */}
              {onRestore && (
                <button
                  type="button"
                  onClick={() => onRestore(blog._id)}
                  title="Restore to original status"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-[11px] transition-colors cursor-pointer border border-emerald-200"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restore</span>
                </button>
              )}

              {/* Permanently delete */}
              {onPermanentDelete && (
                <button
                  type="button"
                  onClick={() => onPermanentDelete(blog._id)}
                  title="Delete forever from database"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded text-rose-600 hover:bg-rose-50 hover:text-rose-700 font-bold text-[11px] transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Purge</span>
                </button>
              )}
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
