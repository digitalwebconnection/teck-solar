import React from "react";
import { Globe, FileText, Trash2, RotateCcw, AlertTriangle } from "lucide-react";
import type { BlogsBulkActionsProps } from "./types";

export const BlogsBulkActions: React.FC<BlogsBulkActionsProps> = ({
  selectedCount,
  isTrashView,
  bulkLoading,
  onClearSelection,
  onRunBulk,
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className="bg-slate-900 text-white rounded-xl px-4 py-3 shadow-xl flex flex-wrap items-center justify-between gap-3 animate-in slide-in-from-top-2 duration-200 border border-slate-800">
      <div className="flex items-center gap-3">
        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-xs font-bold text-slate-200">
          <strong className="text-white">{selectedCount}</strong>{" "}
          {selectedCount === 1 ? "article" : "articles"} selected
        </span>
        <button
          type="button"
          onClick={onClearSelection}
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
              onClick={() => onRunBulk("publish")}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Publish</span>
            </button>
            <button
              type="button"
              disabled={bulkLoading}
              onClick={() => onRunBulk("draft")}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Set as Draft</span>
            </button>
            <button
              type="button"
              disabled={bulkLoading}
              onClick={() => onRunBulk("trash")}
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
              onClick={() => onRunBulk("restore")}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restore Selected</span>
            </button>
            <button
              type="button"
              disabled={bulkLoading}
              onClick={() => onRunBulk("delete")}
              className="px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Permanently Delete</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
