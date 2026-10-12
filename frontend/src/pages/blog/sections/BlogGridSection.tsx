import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";
import { API_URL } from "@/config";

export interface BlogPostItem {
  _id: string;
  title: string;
  slug: string;
  category: string[];
  readTime: string;
  date: string;
  excerpt: string;
  featureImage: string;
  status: string;
}

// Fallback high-quality curated articles for immediate rich display
const SAMPLE_ARTICLES: BlogPostItem[] = [
  {
    _id: "sample-1",
    title: "Complete Guide to Australian Solar Rebates & STC Incentives in 2026",
    slug: "australian-solar-rebates-stc-incentives-2026",
    category: ["Rebates & Policy", "Guides"],
    readTime: "6 min read",
    date: new Date().toISOString(),
    excerpt: "Understand how the Federal Small-scale Renewable Energy Scheme (SRES) works and calculate your upfront discount on rooftop solar installations.",
    featureImage: "/images/hero/residential.webp",
    status: "published",
  },
  {
    _id: "sample-2",
    title: "Solar Battery Storage: When Is It Really Worth the Investment?",
    slug: "solar-battery-storage-investment-guide",
    category: ["Battery Storage", "Solar Tech"],
    readTime: "8 min read",
    date: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(),
    excerpt: "Explore payback periods, black-out protection, and tariff arbitrage to determine whether adding battery storage to your solar system makes financial sense.",
    featureImage: "/images/products/battery.webp",
    status: "published",
  },
  {
    _id: "sample-3",
    title: "Commercial Solar for Businesses: Slashing Operational Overheads",
    slug: "commercial-solar-business-roi-guide",
    category: ["Commercial"],
    readTime: "7 min read",
    date: new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString(),
    excerpt: "How forward-thinking Australian businesses are turning idle roof space into significant annual power bill savings and ESG credentials.",
    featureImage: "/images/banners/commercial-solar.webp",
    status: "published",
  },
  {
    _id: "sample-4",
    title: "Optimising Your Home EV Charger with Rooftop Solar Generation",
    slug: "ev-charger-solar-integration-guide",
    category: ["Solar Tech", "Guides"],
    readTime: "5 min read",
    date: new Date(Date.now() - 12 * 24 * 3600 * 1000).toISOString(),
    excerpt: "Charge your electric vehicle for free with clean daytime solar energy using smart bi-directional chargers and solar diverters.",
    featureImage: "/images/banners/ev-charger.webp",
    status: "published",
  },
];

export default function BlogGridSection() {
  const [blogs, setBlogs] = useState<BlogPostItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`${API_URL}/api/blog/public?limit=50`)
      .then((res) => {
        if (!res.ok) throw new Error("API response error");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          const apiList: BlogPostItem[] = data.blogs ?? [];
          if (apiList.length > 0) {
            setBlogs(apiList);
          } else {
            // If database has 0 blogs, display rich sample articles so UI looks great
            setBlogs(SAMPLE_ARTICLES);
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setBlogs(SAMPLE_ARTICLES);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Compute available categories dynamically
  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => {
      (b.category || []).forEach((c) => {
        if (c.trim()) set.add(c.trim());
      });
    });
    return ["All", ...Array.from(set)];
  }, [blogs]);

  // Filtered blogs based on search and category
  const filteredBlogs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return blogs.filter((blog) => {
      const matchCategory =
        selectedCategory === "All" ||
        (blog.category || []).some(
          (c) => c.toLowerCase() === selectedCategory.toLowerCase()
        );
      if (!matchCategory) return false;

      if (!q) return true;
      const titleMatch = (blog.title || "").toLowerCase().includes(q);
      const excerptMatch = (blog.excerpt || "").toLowerCase().includes(q);
      const tagMatch = (blog.category || []).some((c) =>
        c.toLowerCase().includes(q)
      );
      return titleMatch || excerptMatch || tagMatch;
    });
  }, [blogs, searchQuery, selectedCategory]);

  const featuredPost = filteredBlogs[0];
  const remainingPosts = filteredBlogs.slice(1);

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-3xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-[#14488C] text-white shadow-md shadow-[#14488C]/20"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search solar articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 pl-10 pr-4 py-2 rounded-3xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F38335] focus:ring-2 focus:ring-[#F38335]/20 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs animate-pulse space-y-4"
              >
                <div className="w-full h-48 bg-slate-200 rounded-2xl" />
                <div className="h-4 bg-slate-200 rounded-md w-1/3" />
                <div className="h-6 bg-slate-200 rounded-md w-4/5" />
                <div className="h-4 bg-slate-200 rounded-md w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredBlogs.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-lg mx-auto shadow-xs">
            <div className="w-14 h-14 bg-[#F38335]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#F38335]">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-500 text-sm mb-6">
              We couldn't find any articles matching your search query. Try clearing your filters or exploring another topic.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2.5 bg-[#14488C] text-white text-sm font-bold rounded-xl hover:bg-[#103B74] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Content: Featured + Grid */}
        {!loading && filteredBlogs.length > 0 && (
          <div className="space-y-12">
            
            {/* Featured Article Hero Card */}
            {featuredPost && (
              <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-lg shadow-slate-900/5 group hover:border-[#14488C]/30 transition-all duration-300">
                <Link to={`/blog/${featuredPost.slug}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Featured Image */}
                    <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden relative">
                      <img
                        src={featuredPost.featureImage || "/images/banners/residential-solar.webp"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/banners/residential-solar.webp";
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#F38335] text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                          Featured Article
                        </span>
                      </div>
                    </div>

                    {/* Featured Details */}
                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold mb-3">
                        {featuredPost.category && featuredPost.category[0] && (
                          <span className="inline-flex items-center gap-1 text-[#14488C] font-bold bg-[#14488C]/10 px-2.5 py-1 rounded-2xl">
                            <Tag className="w-3 h-3" />
                            {featuredPost.category[0]}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(featuredPost.date).toLocaleDateString("en-AU", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        {featuredPost.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {featuredPost.readTime}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 group-hover:text-[#14488C] transition-colors leading-tight mb-4">
                        {featuredPost.title}
                      </h2>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      <div className="mt-auto pt-4 flex items-center text-[#F38335] font-bold text-sm group-hover:translate-x-1 transition-transform">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Remaining Articles Grid */}
            {remainingPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 hover:border-[#14488C]/30 transition-all duration-300 flex flex-col group"
                  >
                    <Link to={`/blog/${post.slug}`} className="flex flex-col flex-1">
                      {/* Image container */}
                      <div className="w-full h-52 overflow-hidden relative bg-slate-100">
                        <img
                          src={post.featureImage || "/images/banners/battery-storage.webp"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/banners/battery-storage.webp";
                          }}
                        />
                        {post.category && post.category[0] && (
                          <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#14488C] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                            {post.category[0]}
                          </span>
                        )}
                      </div>

                      {/* Content Body */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString("en-AU", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          {post.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-heading font-black text-slate-900 group-hover:text-[#14488C] transition-colors line-clamp-2 leading-snug mb-3">
                          {post.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-[#F38335] font-bold text-xs uppercase tracking-wider">
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
