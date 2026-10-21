import React from "react";
import { Trash2, AlertTriangle } from "lucide-react";

interface BlogDeleteModalProps {
  isOpen: boolean;
  isDeleting: boolean;
  isPermanent?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const BlogDeleteModal: React.FC<BlogDeleteModalProps> = ({
  isOpen,
  isDeleting,
  isPermanent = false,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      data-lenis-prevent
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        <div className="p-6 text-center">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isPermanent ? "bg-rose-100 text-rose-600" : "bg-amber-100 text-amber-600"
            }`}
          >
            {isPermanent ? (
              <Trash2 className="w-7 h-7" />
            ) : (
              <AlertTriangle className="w-7 h-7" />
            )}
          </div>
          <h3 className="text-lg font-black text-slate-900 mb-2 font-heading">
            {isPermanent ? "Permanently Delete Post?" : "Move to Trash?"}
          </h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">
            {isPermanent
              ? "This post will be permanently wiped from the database. This action CANNOT be undone."
              : "This post will be moved to the Trash bin. It will no longer appear on the live site, but you can restore it anytime."}
          </p>
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 px-4 py-2.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className={`flex-1 px-4 py-2.5 text-white text-xs font-bold rounded-lg shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 ${
              isPermanent
                ? "bg-rose-600 hover:bg-rose-700 shadow-rose-600/20"
                : "bg-amber-600 hover:bg-amber-700 shadow-amber-600/20"
            }`}
          >
            {isDeleting
              ? "Processing..."
              : isPermanent
              ? "Delete Permanently"
              : "Move to Trash"}
          </button>
        </div>
      </div>
    </div>
  );
};
