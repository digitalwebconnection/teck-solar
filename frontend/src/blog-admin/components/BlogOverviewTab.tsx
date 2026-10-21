import React from 'react';
import {
  FileText,
  Globe,
  BookOpen,
  Clock,
  Trash2,
  Plus,
  Eye,
  Pencil,
  TrendingUp,
  ArrowRight,
  Sparkles,
  BarChart3,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import type { Blog, BlogStats, ActivityItem } from '../types';

interface BlogOverviewTabProps {
  stats: BlogStats | null;
  activity?: ActivityItem[];
  recentUpdated?: Blog[];
  recentPublished?: Blog[];
  topViewed?: Blog[];
  onNewBlog: () => void;
  onNavigateToBlogs: (statusFilter?: string) => void;
  onPreviewBlog: (blog: Blog) => void;
  onEditBlog: (blog: Blog) => void;
}

export const BlogOverviewTab: React.FC<BlogOverviewTabProps> = ({
  stats,
  activity = [],
  recentUpdated = [],
  recentPublished = [],
  topViewed = [],
  onNewBlog,
  onNavigateToBlogs,
  onPreviewBlog,
  onEditBlog,
}) => {
  const cards = [
    {
      label: 'Total Blogs',
      value: stats?.total ?? 0,
      sub: 'All created posts',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      filter: 'All',
    },
    {
      label: 'Published',
      value: stats?.published ?? 0,
      sub: 'Live on website',
      icon: Globe,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      filter: 'published',
    },
    {
      label: 'Scheduled',
      value: stats?.scheduled ?? 0,
      sub: 'Upcoming queued posts',
      icon: Clock,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
      border: 'border-violet-100',
      filter: 'scheduled',
    },
    {
      label: 'Drafts',
      value: stats?.draft ?? 0,
      sub: 'Unpublished work',
      icon: BookOpen,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      filter: 'draft',
    },
    {
      label: 'Trash',
      value: stats?.trashed ?? 0,
      sub: 'Soft-deleted posts',
      icon: Trash2,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      filter: 'trash',
    },
  ];

  // Calculate 30-day activity metrics
  const totalCreated30Days = activity.reduce((sum, item) => sum + item.count, 0);

  // Generate SVG path for 30-day activity chart
  // Ensure 30 consecutive day slots are populated
  const chartDays = React.useMemo(() => {
    const map = new Map<string, number>();
    activity.forEach(a => map.set(a._id, a.count));

    const days: { date: string; label: string; count: number }[] = [];
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      const label = d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
      days.push({
        date: iso,
        label,
        count: map.get(iso) || 0,
      });
    }
    return days;
  }, [activity]);

  const maxCount = Math.max(1, ...chartDays.map(d => d.count));

  return (
    <div className="space-y-6">
      {/* Top Banner / Welcome & Quick Action */}
      <div className="bg-gradient-to-r from-[#14488C] via-[#155DFC] to-[#1E6FE3] rounded-xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Teck Solar CMS Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight mb-2">
            Content Overview &amp; Analytics
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Monitor real-time publications, track reader impressions, and manage your editorial
            calendar seamlessly.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onNewBlog}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F38335] hover:bg-[#DE6C1E] text-white font-bold text-sm shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Post</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigateToBlogs()}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-sm transition-all cursor-pointer"
          >
            <span>Manage All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {cards.map((c, i) => (
          <div
            key={i}
            onClick={() => onNavigateToBlogs(c.filter)}
            className={`bg-white p-4 sm:p-5 rounded-xl border ${c.border} shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group hover:-translate-y-0.5`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                {c.label}
              </span>
              <div
                className={`p-2 rounded-lg ${c.bg} ${c.color} group-hover:scale-110 transition-transform`}
              >
                <c.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                {c.value}
              </p>
              <p className="text-[11px] text-slate-400 font-medium mt-1">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 30-Day Activity Chart Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-black text-slate-900">Publishing Activity Timeline</h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Articles created or scheduled over the last 30 days
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              {totalCreated30Days} Total New Posts in 30 Days
            </span>
          </div>
        </div>

        {/* Bar histogram visualization */}
        <div className="relative pt-4">
          <div className="h-36 sm:h-44 flex items-end gap-1 sm:gap-2 border-b border-slate-200 pb-2">
            {chartDays.map((d, idx) => {
              const heightPct = d.count > 0 ? Math.max(12, (d.count / maxCount) * 100) : 4;
              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center justify-end h-full group relative"
                >
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    {d.label}: {d.count} {d.count === 1 ? 'post' : 'posts'}
                  </div>

                  <div
                    style={{ height: `${heightPct}%` }}
                    className={`w-full rounded-t-sm transition-all duration-300 group-hover:brightness-110 ${
                      d.count > 0
                        ? 'bg-gradient-to-t from-blue-600 to-indigo-500 shadow-xs'
                        : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mt-2 px-1">
            <span>{chartDays[0]?.label}</span>
            <span>{chartDays[14]?.label}</span>
            <span>Today ({chartDays[chartDays.length - 1]?.label})</span>
          </div>
        </div>
      </div>

      {/* Grid: Recently Published & Recently Updated */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recently Published */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Recently Published
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigateToBlogs('published')}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {recentPublished.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                No published posts available yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {recentPublished.map(b => (
                  <div key={b._id} className="py-3 flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {b.featureImage ? (
                        <img
                          src={b.featureImage}
                          alt={b.title}
                          className="w-10 h-10 rounded-md object-cover shrink-0 bg-slate-100 border border-slate-200"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                          <Globe className="w-5 h-5" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p
                          onClick={() => onPreviewBlog(b)}
                          className="text-xs font-bold text-slate-800 truncate hover:text-blue-600 cursor-pointer"
                          title={b.title}
                        >
                          {b.title}
                        </p>
                        <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3" />
                          {b.date
                            ? new Date(b.date).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })
                            : '—'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => onPreviewBlog(b)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                        title="Live Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onEditBlog(b)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                        title="Edit Post"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recently Updated */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-600" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Recently Updated
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigateToBlogs()}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {recentUpdated.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                No recent updates logged yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {recentUpdated.map(b => (
                  <div key={b._id} className="py-3 flex items-center justify-between gap-3 group">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {b.featureImage ? (
                        <img
                          src={b.featureImage}
                          alt={b.title}
                          className="w-10 h-10 rounded-md object-cover shrink-0 bg-slate-100 border border-slate-200"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-md bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 border border-violet-100">
                          <FileText className="w-5 h-5" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p
                          onClick={() => onEditBlog(b)}
                          className="text-xs font-bold text-slate-800 truncate hover:text-blue-600 cursor-pointer"
                          title={b.title}
                        >
                          {b.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span
                            className={`text-[9.5px] font-black uppercase px-1.5 py-0.2 rounded ${
                              b.status === 'published'
                                ? 'bg-emerald-100 text-emerald-800'
                                : b.status === 'scheduled'
                                  ? 'bg-violet-100 text-violet-800'
                                  : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {b.status}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {b.updatedAt
                              ? new Date(b.updatedAt).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })
                              : '—'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => onPreviewBlog(b)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                        title="Live Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onEditBlog(b)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                        title="Edit Post"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Most Viewed Blogs Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Most Viewed Articles
            </h3>
          </div>
          <span className="text-xs text-slate-400">Ranked by verified page impressions</span>
        </div>

        {topViewed.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-xs">
            No readership metrics recorded yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-bold text-left">
                  <th className="pb-2.5 w-10">#</th>
                  <th className="pb-2.5">Article Title</th>
                  <th className="pb-2.5">Status</th>
                  <th className="pb-2.5 text-right">View Count</th>
                  <th className="pb-2.5 text-right pr-2">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topViewed.map((b, idx) => (
                  <tr key={b._id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 font-black text-slate-400">{idx + 1}</td>
                    <td className="py-3 font-bold text-slate-800 max-w-sm truncate">{b.title}</td>
                    <td className="py-3">
                      <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                          b.status === 'published'
                            ? 'bg-emerald-100 text-emerald-800'
                            : b.status === 'scheduled'
                              ? 'bg-violet-100 text-violet-800'
                              : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3 text-right font-black text-blue-600">
                      <span className="bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {(b.viewCount || 0).toLocaleString()} views
                      </span>
                    </td>
                    <td className="py-3 text-right pr-2">
                      <button
                        type="button"
                        onClick={() => onPreviewBlog(b)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                        title="Live Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pro Editorial Guidelines */}
      <div className="bg-slate-900 rounded-xl p-6 text-white shadow-md">
        <h3 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Teck Solar Editorial Standards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-800">
            <strong className="text-white block mb-1">SEO Title &amp; Excerpt</strong>
            Ensure primary keywords (e.g. "Commercial Solar", "Inverter Rebates") appear in the
            first 60 characters of title.
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-800">
            <strong className="text-white block mb-1">Scheduling Precision</strong>
            Scheduled posts publish automatically right to the second with automated feed
            revalidation.
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-800">
            <strong className="text-white block mb-1">Trash Retention</strong>
            Deleted blogs move to Trash first to prevent accidental loss, allowing instant 1-click
            restoration anytime.
          </div>
        </div>
      </div>
    </div>
  );
};
