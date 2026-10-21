import React, { useState } from "react";
import {
  X,
  ExternalLink,
  Calendar,
  Clock,
  Tag,
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  Pencil,
  Check,
  Share2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import type { Blog } from "../types";

interface BlogPreviewModalProps {
  isOpen: boolean;
  blog: Blog | null;
  onClose: () => void;
  onEdit?: (blog: Blog) => void;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export const BlogPreviewModal: React.FC<BlogPreviewModalProps> = ({
  isOpen,
  blog,
  onClose,
  onEdit,
}) => {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"article" | "seo">("article");

  if (!isOpen || !blog) return null;

  const handleCopyLink = () => {
    const origin = window.location.origin;
    const url = `${origin}/blog/${blog.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getContainerWidth = () => {
    switch (device) {
      case "mobile":
        return "max-w-[400px]";
      case "tablet":
        return "max-w-[768px]";
      default:
        return "max-w-[960px]";
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200"
      data-lenis-prevent
    >
      {/* Top Bar */}
      <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0 shadow-lg">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
              <Eye className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Live Preview
            </span>
          </div>

          <span className="text-slate-700">|</span>

          {/* Status badge */}
          <span
            className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
              blog.status === "published"
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : blog.status === "scheduled"
                ? "bg-violet-500/10 text-violet-400 border-violet-500/30"
                : "bg-amber-500/10 text-amber-400 border-amber-500/30"
            }`}
          >
            {blog.status}
          </span>

          <span className="text-xs text-slate-300 font-semibold truncate hidden md:inline max-w-[300px]">
            {blog.title}
          </span>
        </div>

        {/* Center: Device Viewport Switches & View Mode */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
          <button
            type="button"
            onClick={() => setActiveTab("article")}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
              activeTab === "article"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Reader View
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("seo")}
            className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
              activeTab === "seo"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            SEO Preview
          </button>

          <span className="w-px h-4 bg-slate-700 mx-1 hidden sm:block" />

          {/* Device Toggles */}
          <div className="hidden sm:flex items-center gap-1">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                device === "desktop"
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Desktop preview"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setDevice("tablet")}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                device === "tablet"
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Tablet preview (768px)"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                device === "mobile"
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Mobile preview (400px)"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {blog.status === "published" && (
            <a
              href={`/blog/${blog.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 cursor-pointer"
            >
              <span>View Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {onEdit && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onEdit(blog);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/30 cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5" />
              <span>Edit</span>
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
            title="Close Preview (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Preview Scroll Area */}
      <div
        className="flex-1 overflow-y-auto overscroll-contain min-h-0 bg-slate-950 p-3 sm:p-6 flex justify-center"
        data-lenis-prevent
      >
        {activeTab === "article" ? (
          <div
            className={`w-full ${getContainerWidth()} bg-white rounded-xl shadow-2xl transition-all duration-300 overflow-hidden flex flex-col my-auto min-h-[90vh]`}
          >
            {/* Simulation Header */}
            <div className="border-b border-slate-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10 px-4 sm:px-6 py-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Preview Mode
              </span>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Article Container */}
            <article className="p-6 sm:p-10 lg:p-12 flex-1">
              {/* Category, Date, Read Time */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-500 mb-4">
                {(blog.category || []).map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1 text-[#14488C] font-bold bg-[#14488C]/10 px-2.5 py-1 rounded-md"
                  >
                    <Tag className="w-3 h-3" />
                    {cat}
                  </span>
                ))}

                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {blog.date
                    ? new Date(blog.date).toLocaleDateString("en-AU", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Unscheduled"}
                </span>

                {blog.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-heading">
                {blog.title}
              </h1>

              {/* Author attribution */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-200 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#14488C] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  TS
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Teck Solar Editorial Team
                  </p>
                  <p className="text-xs text-slate-500">
                    Clean Energy Council Certified Specialists
                  </p>
                </div>
              </div>

              {/* Hero Image */}
              {blog.featureImage ? (
                <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 shadow-md bg-slate-100">
                  <img
                    src={blog.featureImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/banners/residential-solar.webp";
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-40 rounded-2xl bg-slate-100 border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 mb-8">
                  <AlertCircle className="w-6 h-6 mb-1" />
                  <span className="text-xs font-bold">No Featured Image Set</span>
                </div>
              )}

              {/* Excerpt */}
              {blog.excerpt && (
                <div className="p-5 sm:p-6 bg-slate-50 border-l-4 border-[#F38335] rounded-r-xl shadow-xs mb-8 text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                  {blog.excerpt}
                </div>
              )}

              {/* Main Content */}
              <div
                className="prose prose-slate max-w-none prose-base sm:prose-lg leading-relaxed text-slate-800 space-y-5 [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-black [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-heading [&_h3]:font-black [&_h3]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-slate-700 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_img]:rounded-xl [&_img]:shadow-md [&_img]:my-5 [&_a]:text-[#14488C] [&_a]:font-bold [&_a]:underline hover:[&_a]:text-[#F38335] [&_blockquote]:border-l-4 [&_blockquote]:border-[#14488C] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:bg-slate-50 [&_blockquote]:py-3 [&_blockquote]:rounded-r-lg"
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content ||
                    "<p class='italic text-slate-400'>No article body provided yet.</p>",
                }}
              />
            </article>

            {/* Simulated footer */}
            <div className="bg-slate-50 p-6 border-t border-slate-200 text-center text-xs text-slate-500 font-semibold">
              Published by <strong className="text-slate-700">Teck Solar</strong> • Australia-Wide Solar Installations
            </div>
          </div>
        ) : (
          /* SEO Preview Card */
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 space-y-6 my-auto">
            <div>
              <h3 className="text-lg font-black text-slate-800 mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                Search Engine Listing Preview
              </h3>
              <p className="text-xs text-slate-500">
                This simulates how Google will index and display this blog post in search results.
              </p>
            </div>

            {/* Google SERP Snippet Preview */}
            <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">
                  TS
                </div>
                <div className="truncate">
                  <span className="text-slate-900 font-medium">Teck Solar</span>
                  <span className="text-slate-400 mx-1">›</span>
                  <span className="text-slate-500 text-[11px]">
                    blog › {blog.slug || "your-post-slug"}
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer truncate pt-1">
                {blog.metaTitle || blog.title || "Untitled Blog Post"} | Teck Solar
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {blog.metaDescription ||
                  blog.excerpt ||
                  "No meta description provided. Search engines will automatically extract a snippet from your content."}
              </p>
            </div>

            {/* Meta tags summary table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <div className="bg-slate-50 px-4 py-2.5 font-bold text-slate-700 border-b border-slate-200">
                SEO Metadata Attributes
              </div>
              <div className="divide-y divide-slate-100">
                <div className="px-4 py-3 grid grid-cols-3 gap-2">
                  <span className="font-bold text-slate-500">Meta Title</span>
                  <span className="col-span-2 text-slate-800 font-medium break-words">
                    {blog.metaTitle || <span className="text-amber-500 italic">Defaulting to post title</span>}
                  </span>
                </div>

                <div className="px-4 py-3 grid grid-cols-3 gap-2">
                  <span className="font-bold text-slate-500">Canonical URL</span>
                  <span className="col-span-2 text-slate-800 font-mono text-[11px] break-all">
                    {blog.canonicalUrl || (
                      <span className="text-slate-400">
                        {typeof window !== "undefined" ? window.location.origin : ""}/blog/{blog.slug}
                      </span>
                    )}
                  </span>
                </div>

                <div className="px-4 py-3 grid grid-cols-3 gap-2">
                  <span className="font-bold text-slate-500">Meta Keywords</span>
                  <div className="col-span-2 flex flex-wrap gap-1">
                    {(blog.keywords || []).length > 0 ? (
                      blog.keywords?.map((k, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium"
                        >
                          {k}
                        </span>
                      ))
                    ) : (
                      <span className="text-slate-400 italic">None specified</span>
                    )}
                  </div>
                </div>

                <div className="px-4 py-3 grid grid-cols-3 gap-2">
                  <span className="font-bold text-slate-500">Schema (JSON-LD)</span>
                  <span className="col-span-2 font-mono text-[10px] text-slate-600 bg-slate-50 p-2 rounded max-h-24 overflow-y-auto">
                    {blog.schema || (blog as any).schemaMarkup || (
                      <span className="text-slate-400 font-sans italic">Default Article Schema applied automatically</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
