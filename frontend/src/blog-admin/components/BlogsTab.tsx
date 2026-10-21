import React, { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Trash2,
  Pencil,
  Globe,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Clock,
  X,
  Download,
  Loader2,
  Copy,
  Pin,
  Eye,
  RotateCcw,
  AlertTriangle,
  CheckSquare,
  Square,
  MinusSquare,
  Sparkles,
} from "lucide-react";
import type { Blog, BlogStats } from "../types";
import { blogFetch } from "../blogApiClient";

interface BlogsTabProps {
  blogs: Blog[];
  loading: boolean;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  setCurrentPage: (p: number) => void;
  onNew: () => void;
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
  onPermanentDelete?: (id: string) => void;
  onRestore?: (id: string) => void;
  onStatusChange: (id: string, newStatus: string) => void;
  onAdjustSchedule?: (blog: Blog) => void;
  onDuplicate?: (id: string) => void;
  onTogglePin?: (id: string) => void;
  onPreview?: (blog: Blog) => void;
  onBulkAction?: (action: string, ids: string[]) => void;
  dateSort: "asc" | "desc";
  onToggleDateSort: () => void;
  stats?: BlogStats | null;
}

export const BlogsTab: React.FC<BlogsTabProps> = ({
  blogs,
  loading,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  currentPage,
  totalPages,
  totalBlogs,
  setCurrentPage,
  onNew,
  onEdit,
  onDelete,
  onPermanentDelete,
  onRestore,
  onStatusChange,
  onAdjustSchedule,
  onDuplicate,
  onTogglePin,
  onPreview,
  onBulkAction,
  dateSort,
  onToggleDateSort,
  stats,
}) => {
  const [isDownloadingCSV, setIsDownloadingCSV] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkLoading, setBulkLoading] = useState(false);

  // Clear selections when switching filters or pages
  useEffect(() => {
    setSelectedIds([]);
  }, [statusFilter, currentPage]);

  const handleDownloadCSV = async () => {
    setIsDownloadingCSV(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.append("search", searchQuery);
      if (statusFilter && statusFilter !== "All") params.append("status", statusFilter);

      const response = await blogFetch(`/api/blog/export-csv?${params.toString()}`);
      if (!response.ok) throw new Error("Blog export failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `blogs_export_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("CSV download failed:", err);
    } finally {
      setIsDownloadingCSV(false);
    }
  };

  // Selection toggles
  const isAllSelected = blogs.length > 0 && selectedIds.length === blogs.length;
  const isPartiallySelected = selectedIds.length > 0 && selectedIds.length < blogs.length;

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(blogs.map((b) => b._id));
    }
  };

  const handleToggleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRunBulk = async (action: string) => {
    if (!onBulkAction || selectedIds.length === 0) return;
    setBulkLoading(true);
    try {
      await onBulkAction(action, selectedIds);
      setSelectedIds([]);
    } finally {
      setBulkLoading(false);
    }
  };

  // Client-side sort for immediate responsiveness
  const sortedBlogs = React.useMemo(() => {
    if (!blogs || blogs.length === 0) return [];
    return [...blogs].sort((a, b) => {
      // Pinned posts always rise to the top
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;

      const timeA = a.date ? new Date(a.date).getTime() : 0;
      const timeB = b.date ? new Date(b.date).getTime() : 0;
      return dateSort === "asc" ? timeA - timeB : timeB - timeA;
    });
  }, [blogs, dateSort]);

  // Floating status menu state with viewport coordinates
  const [statusMenu, setStatusMenu] = useState<{
    id: string;
    currentStatus: string;
    top: number;
    left: number;
    openUpward: boolean;
  } | null>(null);

  // Close floating menu on scroll or resize so it doesn't detach
  useEffect(() => {
    const handleClose = () => setStatusMenu(null);
    window.addEventListener("scroll", handleClose, true);
    window.addEventListener("resize", handleClose);
    return () => {
      window.removeEventListener("scroll", handleClose, true);
      window.removeEventListener("resize", handleClose);
    };
  }, []);

  const safeTotal = typeof totalBlogs === "number" && !isNaN(totalBlogs) ? totalBlogs : (blogs?.length ?? 0);
  const safeTotalPages = Math.max(1, totalPages || 1);

  const handleOpenStatusMenu = (blog: Blog, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (statusMenu?.id === blog._id) {
      setStatusMenu(null);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const menuHeight = 124;
    const spaceBelow = window.innerHeight - rect.bottom;
    const openUpward = spaceBelow < menuHeight + 20;

    setStatusMenu({
      id: blog._id,
      currentStatus: blog.status,
      top: openUpward ? rect.top - menuHeight - 4 : rect.bottom + 4,
      left: rect.left,
      openUpward,
    });
  };

  const statusTabs = [
    { id: "All", label: "All Posts", count: stats?.total },
    { id: "published", label: "Published", count: stats?.published },
    { id: "scheduled", label: "Scheduled", count: stats?.scheduled },
    { id: "draft", label: "Drafts", count: stats?.draft },
    { id: "trash", label: "Trash", count: stats?.trashed },
  ];

  const isTrashView = statusFilter === "trash";

  return (
    <div className="space-y-5">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-slate-800">Blog Posts</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage your articles, adjust publication schedules, and organize content.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleDownloadCSV}
            disabled={isDownloadingCSV}
            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-md shadow-emerald-600/20 transition-all cursor-pointer shrink-0 disabled:opacity-50"
            title="Export blogs as CSV"
          >
            {isDownloadingCSV ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>{isDownloadingCSV ? "Exporting..." : "Download CSV"}</span>
          </button>
          <button
            type="button"
            onClick={onNew}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#155DFC] hover:bg-[#1048c7] text-white text-xs font-bold rounded-lg shadow-md shadow-[#155DFC]/25 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>New Blog Post</span>
          </button>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 border-b border-slate-200">
        {statusTabs.map((t) => {
          const isActive = statusFilter === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setStatusFilter(t.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                isActive
                  ? t.id === "trash"
                    ? "bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs"
                    : "bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span>{t.label}</span>
              {t.count != null && (
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                    isActive
                      ? t.id === "trash"
                        ? "bg-rose-200 text-rose-800"
                        : "bg-blue-200 text-blue-800"
                      : "bg-slate-200/70 text-slate-600"
                  }`}
                >
                  {t.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Filters & Search Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by blog title or excerpt..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC]/20 outline-none transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Floating Bulk Action Bar */}
      {selectedIds.length > 0 && (
        <div className="bg-slate-900 text-white rounded-xl px-4 py-3 shadow-xl flex flex-wrap items-center justify-between gap-3 animate-in slide-in-from-top-2 duration-200 border border-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold text-slate-200">
              <strong className="text-white">{selectedIds.length}</strong> {selectedIds.length === 1 ? "article" : "articles"} selected
            </span>
            <button
              type="button"
              onClick={() => setSelectedIds([])}
              className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer ml-1"
            >
              Clear selection
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {!isTrashView ? (
              <>
                <button
                  type="button"
                  disabled={bulkLoading}
                  onClick={() => handleRunBulk("publish")}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Publish</span>
                </button>
                <button
                  type="button"
                  disabled={bulkLoading}
                  onClick={() => handleRunBulk("draft")}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Set as Draft</span>
                </button>
                <button
                  type="button"
                  disabled={bulkLoading}
                  onClick={() => handleRunBulk("trash")}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Move to Trash</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  disabled={bulkLoading}
                  onClick={() => handleRunBulk("restore")}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restore Selected</span>
                </button>
                <button
                  type="button"
                  disabled={bulkLoading}
                  onClick={() => handleRunBulk("delete")}
                  className="px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Permanently Delete</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
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
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500">
                  {/* Select All Checkbox */}
                  <th className="px-4 py-3.5 w-10 text-center">
                    <button
                      type="button"
                      onClick={handleToggleSelectAll}
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

                  <th className="px-4 py-3.5 text-left text-[11px] font-black uppercase tracking-wider">
                    Title &amp; Info
                  </th>
                  <th className="px-4 py-3.5 text-left text-[11px] font-black uppercase tracking-wider hidden sm:table-cell">
                    <button
                      type="button"
                      onClick={onToggleDateSort}
                      className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors cursor-pointer select-none group"
                      title={`Sort by date (${dateSort === "desc" ? "currently newest first" : "currently oldest first"})`}
                    >
                      <span>DATE</span>
                      <span className="inline-flex flex-col -space-y-1">
                        <ChevronUp
                          className={`w-2.5 h-2.5 transition-colors ${
                            dateSort === "asc"
                              ? "text-blue-600 stroke-[3]"
                              : "text-slate-300 group-hover:text-slate-400"
                          }`}
                        />
                        <ChevronDown
                          className={`w-2.5 h-2.5 transition-colors ${
                            dateSort === "desc"
                              ? "text-blue-600 stroke-[3]"
                              : "text-slate-300 group-hover:text-slate-400"
                          }`}
                        />
                      </span>
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-left text-[11px] font-black uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3.5 text-right text-[11px] font-black uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sortedBlogs.map((blog) => {
                  const isSelected = selectedIds.includes(blog._id);
                  return (
                    <tr
                      key={blog._id}
                      className={`hover:bg-slate-50/80 transition-colors group ${
                        isSelected ? "bg-blue-50/40" : ""
                      } ${blog.isPinned ? "bg-amber-50/20" : ""}`}
                    >
                      {/* Checkbox */}
                      <td className="px-4 py-3.5 text-center">
                        <button
                          type="button"
                          onClick={() => handleToggleSelectRow(blog._id)}
                          className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          {isSelected ? (
                            <CheckSquare className="w-4 h-4 text-blue-600" />
                          ) : (
                            <Square className="w-4 h-4" />
                          )}
                        </button>
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
                                onClick={() => onPreview?.(blog)}
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

                      {/* Status Dropdown Trigger */}
                      <td className="px-4 py-3.5">
                        {!isTrashView ? (
                          <button
                            type="button"
                            onClick={(e) => handleOpenStatusMenu(blog, e)}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold border transition-all duration-200 cursor-pointer select-none ${
                              blog.status === "published"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100/80 shadow-2xs"
                                : blog.status === "scheduled"
                                ? "bg-violet-50 text-violet-700 border-violet-300 hover:bg-violet-100/80 shadow-2xs"
                                : "bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100/80 shadow-2xs"
                            }`}
                          >
                            {blog.status === "published" ? (
                              <Globe className="w-3 h-3 text-emerald-600 shrink-0" />
                            ) : blog.status === "scheduled" ? (
                              <Clock className="w-3 h-3 text-violet-600 shrink-0" />
                            ) : (
                              <FileText className="w-3 h-3 text-amber-600 shrink-0" />
                            )}
                            <span className="tracking-wide uppercase">
                              {blog.status}
                            </span>
                            <ChevronDown
                              className={`w-3 h-3 transition-transform duration-200 opacity-60 ml-0.5 ${
                                statusMenu?.id === blog._id ? "rotate-180" : ""
                              }`}
                            />
                          </button>
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
                              {/* Preview */}
                              {onPreview && (
                                <button
                                  type="button"
                                  onClick={() => onPreview(blog)}
                                  title="Live preview"
                                  className="p-1.5 rounded text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                              )}

                              {/* Duplicate */}
                              {onDuplicate && (
                                <button
                                  type="button"
                                  onClick={() => onDuplicate(blog._id)}
                                  title="Duplicate as new draft"
                                  className="p-1.5 rounded text-slate-400 hover:bg-purple-50 hover:text-purple-600 transition-colors cursor-pointer"
                                >
                                  <Copy className="w-3.5 h-3.5" />
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

                              {/* Soft delete to trash */}
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
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Bar */}
        {blogs.length > 0 && (
          <div className="bg-slate-50/80 px-4 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
            <div>
              Showing <strong className="text-slate-800">{blogs.length}</strong> of{" "}
              <strong className="text-slate-800">{safeTotal}</strong> posts
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
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
                onClick={() => setCurrentPage(Math.min(safeTotalPages, currentPage + 1))}
                disabled={currentPage >= safeTotalPages}
                className="p-1.5 rounded border border-slate-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                title="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating Status Menu Dropdown */}
      {statusMenu && (
        <div
          style={{
            position: "fixed",
            top: `${statusMenu.top}px`,
            left: `${statusMenu.left}px`,
          }}
          className="z-[90] w-36 bg-white rounded-lg shadow-xl border border-slate-200 py-1 text-xs animate-in fade-in zoom-in-95 duration-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3 py-1 text-[10px] font-black uppercase text-slate-400 tracking-wider">
            Change Status
          </div>
          {(["published", "scheduled", "draft"] as const).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => {
                onStatusChange(statusMenu.id, st);
                setStatusMenu(null);
              }}
              className={`w-full px-3 py-1.5 text-left font-bold flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                statusMenu.currentStatus === st ? "text-blue-600 bg-blue-50/50" : "text-slate-700"
              }`}
            >
              <span className="capitalize">{st}</span>
              {statusMenu.currentStatus === st && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
