import React from "react";
import type { BlogsStatusTabsProps, StatusTabItem } from "./types";

export const BlogsStatusTabs: React.FC<BlogsStatusTabsProps> = ({
  statusFilter,
  setStatusFilter,
  stats,
}) => {
  const statusTabs: StatusTabItem[] = [
    { id: "All", label: "All Posts", count: stats?.total },
    { id: "published", label: "Published", count: stats?.published },
    { id: "scheduled", label: "Scheduled", count: stats?.scheduled },
    { id: "draft", label: "Drafts", count: stats?.draft },
    { id: "trash", label: "Trash", count: stats?.trashed },
  ];

  return (
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
  );
};
