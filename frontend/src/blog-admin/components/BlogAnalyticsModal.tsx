import React from "react";
import {
  X,
  Eye,
  UserCheck,
  Clock,
  TrendingUp,
  ExternalLink,
  Copy,
  Check,
  Pencil,
  Calendar,
} from "lucide-react";
import type { Blog } from "../types";
import { formatNumber, getCountryName } from "../countryUtils";
import { FlagBadge } from "./BlogOverviewTab";

interface BlogAnalyticsModalProps {
  isOpen: boolean;
  blog: Blog | null;
  onClose: () => void;
  onEdit?: (blog: Blog) => void;
}

export const BlogAnalyticsModal: React.FC<BlogAnalyticsModalProps> = ({
  isOpen,
  blog,
  onClose,
  onEdit,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !blog) return null;

  // 1. Sort recorded countries by views descending
  const countries =
    blog.countries && blog.countries.length > 0
      ? [...blog.countries].sort((a, b) => (b.count || 0) - (a.count || 0))
      : [];

  // Total recorded country views sum
  const totalCountryViews = countries.reduce((sum, c) => sum + (c.count || 0), 0);

  // 2. Mathematically reconcile Total Views:
  // If individual country hits sum to more than blog.viewCount (due to historical or async desync),
  // totalViews must equal at least totalCountryViews so all percentages and sums match 100%!
  const totalViews = Math.max(blog.viewCount ?? 0, totalCountryViews);

  // Unique Views (capped at totalViews, minimum 1 if totalViews > 0)
  const rawUnique = blog.uniqueViewCount ?? 0;
  const uniqueViews = totalViews > 0 ? Math.min(totalViews, Math.max(rawUnique, 1)) : 0;

  // Unique Ratio (percentage of unique readers)
  const uniqueRatio =
    totalViews > 0 ? Math.min(100, Math.round((uniqueViews / totalViews) * 100)) : 0;

  const handleCopyLink = () => {
    const origin = window.location.origin;
    const url = `${origin}/blog/${blog.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white shrink-0">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900 truncate">
                {blog.title}
              </h3>
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full capitalize shrink-0 ${
                  blog.status === "published"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                    : blog.status === "scheduled"
                    ? "bg-sky-50 text-sky-700 border border-sky-200/80"
                    : "bg-amber-50 text-amber-700 border border-amber-200/80"
                }`}
              >
                {blog.status}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
              /blog/{blog.slug}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Total Views */}
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[11px] font-medium uppercase tracking-wider">
                  Total Views
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
                {formatNumber(totalViews)}
              </p>
            </div>

            {/* Unique Readers */}
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] font-medium uppercase tracking-wider">
                  Unique
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
                {formatNumber(uniqueViews)}
              </p>
            </div>

            {/* Unique Ratio */}
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-[11px] font-medium uppercase tracking-wider">
                  Ratio
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
                {uniqueRatio}%
              </p>
            </div>

            {/* Read Time */}
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[11px] font-medium uppercase tracking-wider">
                  Read Time
                </span>
              </div>
              <p className="text-xl font-bold text-slate-900 tracking-tight truncate mt-0.5">
                {blog.readTime || "1 min"}
              </p>
            </div>
          </div>

          {/* Reader Countries / Geographic Breakdown */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Audience by Country
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                {countries.length} {countries.length === 1 ? "country" : "countries"} recorded
              </span>
            </div>

            {countries.length === 0 ? (
              <div className="py-8 text-center text-slate-400 text-xs bg-slate-50/70 rounded-xl border border-dashed border-slate-200">
                No country breakdown recorded yet for this post.
              </div>
            ) : (
              <div className="space-y-3">
                {countries.map((c) => {
                  const count = c.count || 0;
                  const pct =
                    totalViews > 0
                      ? Math.max(1, Math.round((count / totalViews) * 100))
                      : 0;
                  const countryTitle = c.country || getCountryName(c.code);

                  return (
                    <div key={c.code} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FlagBadge code={c.code} size="sm" />
                          <span
                            className="font-medium text-slate-800 truncate"
                            title={countryTitle}
                          >
                            {countryTitle}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-semibold">
                            {c.code?.toUpperCase()}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-semibold text-slate-900 font-mono text-xs sm:text-sm">
                            {formatNumber(count)}
                            <span className="text-slate-400 font-normal ml-1 text-xs">
                              views
                            </span>
                          </span>
                          <span className="text-slate-500 font-mono text-xs w-9 text-right font-medium">
                            {pct}%
                          </span>
                        </div>
                      </div>

                      {/* Clean slim progress bar */}
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${pct}%` }}
                          className="h-full bg-blue-600 rounded-full transition-all duration-300"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Metadata & Quick Info Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  {blog.date
                    ? new Date(blog.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "Draft"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <a
                href={`/blog/${blog.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Live</span>
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
          {onEdit && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onEdit(blog);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5" />
              <span>Edit Post</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
