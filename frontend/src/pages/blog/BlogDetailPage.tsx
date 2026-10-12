import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Check, BookOpen, ArrowRight } from "lucide-react";
import { API_URL } from "@/config";
import { SharedCTA } from "@/components/shared";

interface BlogArticle {
  _id: string;
  title: string;
  slug: string;
  category: string[];
  readTime: string;
  date: string;
  excerpt: string;
  featureImage: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogArticle | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!slug) return;

    setLoading(true);
    fetch(`${API_URL}/api/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then((data) => {
        if (data.success && data.blog) {
          setBlog(data.blog);
          document.title = `${data.blog.metaTitle || data.blog.title} | Teck Solar`;
        } else {
          setBlog(null);
        }
      })
      .catch(() => {
        setBlog(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  // Fetch recent articles for the footer recommendations
  useEffect(() => {
    fetch(`${API_URL}/api/blog/public?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.blogs) {
          setRecentBlogs(data.blogs.filter((b: BlogArticle) => b.slug !== slug));
        }
      })
      .catch(() => {});
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-[#F38335] selection:text-white">
      {/* Top Breadcrumb & Navigation */}
      <div className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#14488C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
            title="Share article link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-6 animate-pulse">
          <div className="h-6 bg-slate-200 rounded-md w-1/4" />
          <div className="h-12 bg-slate-200 rounded-lg w-3/4" />
          <div className="h-80 bg-slate-200 rounded-3xl w-full" />
          <div className="space-y-3 pt-6">
            <div className="h-4 bg-slate-200 rounded-md w-full" />
            <div className="h-4 bg-slate-200 rounded-md w-5/6" />
            <div className="h-4 bg-slate-200 rounded-md w-4/6" />
          </div>
        </div>
      )}

      {/* 404 Not Found */}
      {!loading && !blog && (
        <div className="max-w-md mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 bg-[#F38335]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#F38335]">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-heading font-black text-slate-900 mb-2">
            Article Not Found
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            The article you are looking for may have been moved, updated, or does not exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#14488C] text-white text-sm font-bold rounded-xl hover:bg-[#103B74] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Blog Directory</span>
          </Link>
        </div>
      )}

      {/* Article Content */}
      {!loading && blog && (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Header Metadata */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
              {blog.category && blog.category.map((cat) => (
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
                {new Date(blog.date).toLocaleDateString("en-AU", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              {blog.readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {blog.readTime}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Author Attribution */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
              <div className="w-10 h-10 rounded-full bg-[#14488C] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                TS
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Teck Solar Editorial Team</p>
                <p className="text-xs text-slate-500">Clean Energy Council Certified Specialists</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {blog.featureImage && (
            <div className="w-full h-72 sm:h-96 lg:h-[450px] rounded-3xl overflow-hidden mb-12 shadow-md bg-slate-100">
              <img
                src={blog.featureImage}
                alt={blog.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/banners/residential-solar.webp";
                }}
              />
            </div>
          )}

          {/* Excerpt / Lead Paragraph */}
          {blog.excerpt && (
            <div className="p-6 bg-white border-l-4 border-[#F38335] rounded-r-2xl shadow-xs mb-10 text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
              {blog.excerpt}
            </div>
          )}

          {/* Main Body HTML Content */}
          <div
            className="prose prose-slate max-w-none prose-lg leading-relaxed text-slate-800 space-y-6 [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-black [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-heading [&_h3]:font-black [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-slate-700 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:my-6 [&_a]:text-[#14488C] [&_a]:font-bold [&_a]:underline hover:[&_a]:text-[#F38335] [&_blockquote]:border-l-4 [&_blockquote]:border-[#14488C] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:bg-slate-50 [&_blockquote]:py-3 [&_blockquote]:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: blog.content || "<p>Detailed guide coming soon.</p>" }}
          />

          {/* End of article author box & share */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 font-medium text-center sm:text-left">
              Published by <strong className="text-slate-800">Teck Solar</strong> • Australia-wide installations
            </div>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F38335] text-white text-xs font-bold rounded-xl hover:bg-[#DE6C1E] transition-colors cursor-pointer shadow-md shadow-[#F38335]/20"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>
        </article>
      )}

      {/* Related / More Articles Section */}
      {recentBlogs.length > 0 && (
        <section className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-heading font-black text-slate-900">
                More Solar Insights
              </h2>
              <Link
                to="/blog"
                className="text-sm font-bold text-[#14488C] hover:text-[#F38335] flex items-center gap-1 transition-colors"
              >
                <span>View all articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentBlogs.slice(0, 3).map((item) => (
                <Link
                  key={item._id}
                  to={`/blog/${item.slug}`}
                  className="bg-[#FAFAFA] rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-[#14488C]/30 transition-all flex flex-col group"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={item.featureImage || "/images/banners/residential-solar.webp"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs text-slate-400 font-semibold mb-2">
                      {new Date(item.date).toLocaleDateString("en-AU", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#14488C] transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-auto">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shared CTA */}
      <SharedCTA />
    </div>
  );
}
