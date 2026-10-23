import React, { useState } from "react";
import { Plus, Download, Loader2 } from "lucide-react";
import { blogFetch } from "../../blogApiClient";
import type { BlogsHeaderProps } from "./types";

export const BlogsHeader: React.FC<BlogsHeaderProps> = ({
  onNew,
  searchQuery,
  statusFilter,
  categoryFilter,
  countryFilter,
}) => {
  const [isDownloadingCSV, setIsDownloadingCSV] = useState(false);

  const handleDownloadCSV = async () => {
    setIsDownloadingCSV(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.append("search", searchQuery);
      if (statusFilter && statusFilter !== "All") params.append("status", statusFilter);
      if (categoryFilter && categoryFilter !== "All") params.append("category", categoryFilter);
      if (countryFilter && countryFilter !== "All") params.append("country", countryFilter);

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

  return (
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
  );
};
