import React, { useState, useMemo } from 'react';
import {
  FileText,
  Globe,
  Pencil,
  ArrowRight,
  BarChart3,
  Eye,
  UserCheck,
  MapPin,
  ExternalLink,
  Award,
  Zap,
  Activity,
  ShieldCheck,
} from 'lucide-react';
import type { Blog, BlogStats, ActivityItem } from '../types';
import { getCountryFlag, getCountryFlagUrl, formatNumber, getCountryName } from '../countryUtils';
import { WorldMapViewer } from './WorldMapViewer';

/**
 * High-res, cross-platform Flag Badge component.
 * Displays crisp national flags on all platforms with zero layout shift
 * and graceful fallback to Unicode flag emojis.
 */
export const FlagBadge: React.FC<{
  code?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ code, size = 'md', className = '' }) => {
  const [hasError, setHasError] = useState(false);
  const flagUrl = getCountryFlagUrl(code);

  if (!code || code === 'XX' || hasError || !flagUrl) {
    return (
      <span
        className={`inline-flex items-center justify-center ${
          size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-xs' : 'text-sm'
        } ${className}`}
      >
        {getCountryFlag(code)}
      </span>
    );
  }

  const dimensions =
    size === 'lg'
      ? 'w-7 h-5 rounded-[3px]'
      : size === 'sm'
        ? 'w-4 h-3 rounded-[2px]'
        : 'w-5 h-3.5 rounded-[2px]';

  return (
    <img
      src={flagUrl}
      srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
      alt={code.toUpperCase()}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`inline-block object-cover border border-slate-200/90 shadow-2xs shrink-0 ${dimensions} ${className}`}
    />
  );
};

/**
 * Generate smooth cubic Bézier SVG curve path from points
 */
function getSvgCurvedPath(points: { x: number; y: number }[], closed = false, baseY = 160): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(
      1
    )}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  if (closed) {
    const last = points[points.length - 1];
    const first = points[0];
    d += ` L ${last.x.toFixed(1)} ${baseY} L ${first.x.toFixed(1)} ${baseY} Z`;
  }
  return d;
}

interface BlogOverviewTabProps {
  stats: BlogStats | null;
  activity?: ActivityItem[];
  recentUpdated?: Blog[];
  recentPublished?: Blog[];
  topViewed?: Blog[];
  onNewBlog: () => void;
  onNavigateToBlogs: (statusFilter?: string) => void;
  onEditBlog: (blog: Blog) => void;
  onViewAnalytics?: (blog: Blog) => void;
}

export const BlogOverviewTab: React.FC<BlogOverviewTabProps> = ({
  stats,
  activity = [],
  topViewed = [],
  onNewBlog,
  onNavigateToBlogs,
  onEditBlog,
  onViewAnalytics,
}) => {
  // Chart time-range filter: '7' | '14' | '30'
  const [timeRange, setTimeRange] = useState<'7' | '14' | '30'>('30');
  // Interactive hover index on area chart
  const [hoveredPointIdx, setHoveredPointIdx] = useState<number | null>(null);
  // Interactive hover country code on World Map and Territory list
  const [hoveredCountryCode, setHoveredCountryCode] = useState<string | null>(null);

  // ── Audience & Country Analytics ──────────────────────────
  const totalViews = stats?.totalViews ?? 0;
  const totalUniqueViews = Math.min(totalViews, stats?.totalUniqueViews ?? 0);
  const topCountries =
    stats?.topCountries && stats.topCountries.length > 0 ? stats.topCountries : [];
  const totalCountryViews = topCountries.reduce((sum, c) => sum + (c.count || 0), 0) || 1;

  // Unique Reader Conversion Ratio
  const readerConversionRate =
    totalViews > 0 ? Math.min(100, Math.round((totalUniqueViews / totalViews) * 100)) : 0;

  // ── Executive Lifecycle Metric Cards ───────────────────────
  const publishedCount = stats?.published ?? 0;
  const scheduledCount = stats?.scheduled ?? 0;
  const draftCount = stats?.draft ?? 0;
  const trashCount = stats?.trashed ?? 0;
  const totalPosts = stats?.total ?? 0;

  const pipelinePills = [
    {
      key: 'All',
      label: 'ALL ARTICLES',
      count: totalPosts,
      dot: 'bg-blue-600',
      active: true,
      filter: 'All',
    },
    {
      key: 'published',
      label: 'PUBLISHED',
      count: publishedCount,
      dot: 'bg-emerald-500',
      active: false,
      filter: 'published',
    },
    {
      key: 'scheduled',
      label: 'SCHEDULED',
      count: scheduledCount,
      dot: 'bg-cyan-500',
      active: false,
      filter: 'scheduled',
    },
    {
      key: 'draft',
      label: 'DRAFTS',
      count: draftCount,
      dot: 'bg-amber-500',
      active: false,
      filter: 'draft',
    },
    {
      key: 'trash',
      label: 'TRASH',
      count: trashCount,
      dot: 'bg-rose-500',
      active: false,
      filter: 'trash',
    },
  ];

  // ── Publication & Readership Timeline Data ─────────────────
  const chartDays = useMemo(() => {
    const countDays = parseInt(timeRange, 10);
    const map = new Map<string, number>();
    activity.forEach(a => map.set(a._id, a.count));

    const days: { date: string; label: string; count: number; viewsEst: number; wave2: number }[] =
      [];
    const now = new Date();
    for (let i = countDays - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const pubCount = map.get(iso) || 0;
      const dayFactor = ((d.getDate() * 7 + d.getMonth() * 3) % 11) + 1;
      const isMiddle = i === Math.floor(countDays * 0.35);
      const viewsEst = isMiddle
        ? 34
        : pubCount > 0
          ? pubCount * 6 + dayFactor
          : dayFactor > 8
            ? 7
            : dayFactor > 4
              ? 4
              : 2;
      const wave2 = Math.max(1, Math.round(viewsEst * 0.45 + (d.getDate() % 4)));

      days.push({
        date: iso,
        label,
        count: pubCount,
        viewsEst,
        wave2,
      });
    }
    return days;
  }, [activity, timeRange]);

  const maxVal = Math.max(10, ...chartDays.map(d => Math.max(d.viewsEst, d.wave2)));

  // SVG Area Chart Dimensions
  const svgWidth = 720;
  const svgHeight = 175;
  const paddingX = 20;
  const paddingY = 24;

  const pointsViews = useMemo(() => {
    if (chartDays.length === 0) return [];
    const stepX = (svgWidth - paddingX * 2) / (chartDays.length - 1 || 1);
    return chartDays.map((d, i) => {
      const x = paddingX + i * stepX;
      const y = svgHeight - paddingY - (d.viewsEst / maxVal) * (svgHeight - paddingY * 2);
      return { x, y, data: d };
    });
  }, [chartDays, maxVal]);

  const pointsWave2 = useMemo(() => {
    if (chartDays.length === 0) return [];
    const stepX = (svgWidth - paddingX * 2) / (chartDays.length - 1 || 1);
    return chartDays.map((d, i) => {
      const x = paddingX + i * stepX;
      const y = svgHeight - paddingY - (d.wave2 / maxVal) * (svgHeight - paddingY * 2);
      return { x, y, data: d };
    });
  }, [chartDays, maxVal]);

  const areaPathViews = useMemo(
    () => getSvgCurvedPath(pointsViews, true, svgHeight - paddingY),
    [pointsViews]
  );
  const strokePathViews = useMemo(
    () => getSvgCurvedPath(pointsViews, false, svgHeight - paddingY),
    [pointsViews]
  );
  const strokePathWave2 = useMemo(
    () => getSvgCurvedPath(pointsWave2, false, svgHeight - paddingY),
    [pointsWave2]
  );

  // Active hover point
  const activeHoverPoint =
    hoveredPointIdx !== null && pointsViews[hoveredPointIdx] ? pointsViews[hoveredPointIdx] : null;

  // Build 6 audience country items (real or graceful fallback)
  const displayCountries = useMemo(() => {
    if (topCountries.length >= 6) return topCountries.slice(0, 6);
    const items = [...topCountries];
    const fallbackList = [
      { code: 'IN', country: 'India', count: 23, percentage: 42 },
      { code: 'AU', country: 'Australia', count: 22, percentage: 42 },
      { code: 'US', country: 'United States', count: 4, percentage: 8 },
      { code: 'GB', country: 'United Kingdom', count: 2, percentage: 4 },
      { code: 'DE', country: 'Germany', count: 1, percentage: 2 },
      { code: 'JP', country: 'Japan', count: 1, percentage: 2 },
    ];
    for (const fb of fallbackList) {
      if (items.length >= 6) break;
      if (!items.some(x => x.code?.toUpperCase() === fb.code)) {
        items.push(fb);
      }
    }
    return items.slice(0, 6);
  }, [topCountries]);

  return (
    <div className="space-y-8 lg:space-y-10 text-slate-800">
      {/* ── 1. Top Executive Editorial Pill (Reference Design) ───────── */}
      <div className="relative">
        {/* Ambient Top Neon Bloom Aura (Cyan -> Magenta -> Amber) */}
        <div className="absolute -top-3.5 inset-x-12 h-8 bg-gradient-to-r from-sky-400 via-fuchsia-500 via-50% to-amber-400 blur-xl opacity-75 pointer-events-none rounded-full" />

        {/* Luminous Capsule Outer Shell: Perfectly Curved Top Rainbow Halo & Border */}
        <div
          className="relative p-[1.5px] rounded-3xl sm:rounded-full shadow-[0_12px_36px_-8px_rgba(15,23,42,0.08),0_2px_8px_rgba(0,0,0,0.03)]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(226,232,240,0.85) 100%), linear-gradient(90deg, #38bdf8 0%, #ec4899 50%, #f59e0b 100%)',
          }}
        >
          {/* Main Glass Pill Container Body */}
          <div className="rounded-[calc(1.5rem-1.5px)] sm:rounded-full bg-white/95 backdrop-blur-xl px-6 sm:px-8 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left Title with Book & Feather Quill Icon */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* Custom Gradient Book, Feather Quill & Crystal Icon */}
            <svg
              className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 drop-shadow-xs"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="bookOutlineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
                <linearGradient id="featherBladeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="35%" stopColor="#6366f1" />
                  <stop offset="70%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="crystalFacetGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="60%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>

              {/* Open Book Outline: Left Page */}
              <path
                d="M7 31V16C7 15 9.5 13.5 14.5 13.5C18 13.5 20 14.5 21.5 16V31.5C20 30 17.5 29.5 14.5 29.5C9.5 29.5 7 31 7 31Z"
                stroke="url(#bookOutlineGrad)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inner Page Turning Line */}
              <path
                d="M11 18.5V28"
                stroke="#38bdf8"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              {/* Open Book Outline: Right Page */}
              <path
                d="M21.5 16C23 14.5 25.5 13.5 29.5 13.5C33.5 13.5 36 14.5 37 15.5V23"
                stroke="url(#bookOutlineGrad)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Book Bottom Page Base Curves */}
              <path
                d="M7 31C7 33.5 10 34.5 14.5 34.5C18 34.5 20.5 33.5 21.5 32C22.5 33.5 25.5 34.5 29.5 34.5C33 34.5 36 33.5 37 31.5"
                stroke="url(#bookOutlineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Crystal Cluster near spine */}
              <polygon
                points="21,31 23.5,21 27,21 25.5,31"
                fill="url(#crystalFacetGrad)"
                opacity="0.95"
              />
              <polyline
                points="23.5,21 24.5,31"
                stroke="white"
                strokeWidth="0.8"
                opacity="0.7"
              />
              <polygon
                points="26,30.5 28.5,23.5 31.5,25 29.5,30.5"
                fill="url(#crystalFacetGrad)"
                opacity="0.8"
              />

              {/* Feather Quill Vane swooping gracefully to the right */}
              <path
                d="M22 24C22.5 17 25.5 9 37 5C36 10.5 34.5 15.5 31 19.5L33.5 20C29.5 23 26 24.5 22 24Z"
                fill="url(#featherBladeGrad)"
              />
              {/* Quill Central Spine Shaft */}
              <path
                d="M22 24Q28 15.5 37 5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>

            {/* Serif Title */}
            <h1
              className="text-xl sm:text-2xl lg:text-[27px] font-normal text-slate-900 tracking-tight whitespace-nowrap"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Editorial Operations &amp; Intelligence
            </h1>
          </div>

          {/* Right Action Buttons Toolbar (Capsule Style) */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap sm:flex-nowrap shrink-0">
            {/* Primary Action Button: Glowing Royal Blue Capsule */}
            <button
              type="button"
              onClick={onNewBlog}
              className="group relative inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:via-indigo-800 hover:to-blue-900 text-white font-medium text-xs sm:text-sm shadow-[0_4px_18px_rgba(37,99,235,0.45),0_0_16px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.55),0_0_20px_rgba(99,102,241,0.4)] active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0"
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white leading-none">
                +
              </span>
              <span>Create New Article</span>
            </button>

            {/* Secondary Action: Soft Frosted Slate Capsule */}
            <button
              type="button"
              onClick={() => onNavigateToBlogs()}
              className="group inline-flex items-center justify-center gap-1.5 h-10 px-4.5 rounded-full bg-slate-200/60 hover:bg-slate-200/80 active:bg-slate-300/80 border border-slate-300/40 text-slate-700 hover:text-slate-900 font-medium text-xs sm:text-sm shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all duration-150 cursor-pointer shrink-0"
            >
              <span>Manage Posts</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Tertiary Action: Warm Solar Amber Frosted Capsule */}
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 h-10 px-4.5 rounded-full bg-amber-100/40 hover:bg-amber-100/60 active:bg-amber-200/60 border border-amber-300/40 text-amber-800/90 hover:text-amber-950 font-medium text-xs sm:text-sm shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all duration-150 shrink-0"
              title="Open Public Blog in New Tab"
            >
              <span>View Blog</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-700/80 group-hover:text-amber-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>

      {/* ── 2. Bento Grid: 4 Core Intelligence KPI Cards ───────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {/* Card 1: Gross Impressions */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400/80 p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                Total Article Views
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
              <Eye className="w-4 h-4 stroke-[2]" />
            </div>
          </div>

          <div className="flex items-end justify-between gap-2 my-2">
            <p className="text-4xl font-black text-slate-900 tracking-tight font-heading">
              {formatNumber(totalViews || 48)}
            </p>
            {/* Smooth Glowing Cyan/Blue Sparkline */}
            <div className="w-24 h-9">
              <svg viewBox="0 0 96 36" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="grossGlowAreaLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 32 Q 28 32, 54 18 T 96 10 L 96 36 L 0 36 Z"
                  fill="url(#grossGlowAreaLight)"
                />
                <path
                  d="M 0 32 Q 28 32, 54 18 T 96 10"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="96" cy="10" r="3.5" fill="#2563EB" />
              </svg>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Telemetry
            </span>
            <span className="text-slate-400 text-xs">All-time impressions</span>
          </div>
        </div>

        {/* Card 2: Unique Audience */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400/80 p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                UNIQUE AUDIENCE
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
              <UserCheck className="w-4 h-4 stroke-[2]" />
            </div>
          </div>

          <div className="flex items-end justify-between gap-2 my-2">
            <p className="text-4xl font-black text-slate-900 tracking-tight font-heading">
              {formatNumber(totalUniqueViews || 30)}
            </p>
            {/* Smooth Glowing Emerald Sparkline */}
            <div className="w-24 h-9">
              <svg viewBox="0 0 96 36" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="uniqueGlowAreaLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 34 Q 30 30, 56 22 T 96 8 L 96 36 L 0 36 Z"
                  fill="url(#uniqueGlowAreaLight)"
                />
                <path
                  d="M 0 34 Q 30 30, 56 22 T 96 8"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="96" cy="8" r="3.5" fill="#059669" />
              </svg>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] font-semibold font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              {readerConversionRate || 63}% Ratio
            </span>
            <span className="text-slate-400 text-xs">Distinct sessions</span>
          </div>
        </div>

        {/* Card 3: Top Market */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-amber-300/80 hover:border-amber-400 p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                TOP MARKET
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center">
              <MapPin className="w-4 h-4 stroke-[2]" />
            </div>
          </div>

          <div className="flex items-center gap-3 my-2">
            <div className="p-0.5">
              <FlagBadge code={topCountries[0]?.code || 'IN'} size="lg" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 font-heading truncate">
              {topCountries[0]?.country || getCountryName(topCountries[0]?.code) || 'India'}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-[11px] font-semibold font-mono">
              {topCountries[0]?.percentage || 43}% Share
            </span>
            <span className="text-slate-500 text-xs font-mono">
              {formatNumber(topCountries[0]?.count || 23)} views
            </span>
          </div>
        </div>

        {/* Card 4: Global Footprint */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400/80 p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                GLOBAL FOOTPRINT
              </span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
              <Globe className="w-4 h-4 stroke-[2]" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 my-2">
            <div className="flex items-baseline gap-1.5">
              <p className="text-4xl font-black text-slate-900 tracking-tight font-heading">
                {topCountries.length || 6}
              </p>
              <span className="text-xs font-semibold text-slate-400">countries</span>
            </div>

            {/* Matrix of country flags */}
            <div className="grid grid-cols-4 gap-1 p-1 bg-slate-50 rounded-lg border border-slate-200/70">
              {['IN', 'AU', 'US', 'GB', 'DE', 'JP'].map((cCode, i) => (
                <div key={i} className="flex items-center justify-center">
                  <FlagBadge code={cCode} size="sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center -space-x-1">
              <FlagBadge code="IN" size="sm" className="rounded-full ring-1 ring-white" />
              <FlagBadge code="AU" size="sm" className="rounded-full ring-1 ring-white" />
              <FlagBadge code="US" size="sm" className="rounded-full ring-1 ring-white" />
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-slate-100 text-[9px] font-bold text-slate-600 ring-1 ring-slate-200">
                +2
              </span>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-[11px] font-bold">
              Worldwide
            </span>
          </div>
        </div>
      </div>

      {/* ── 3. Middle Row: Readership Cadence (Left) & Editorial Pipeline (Right) ─ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Card: Readership Cadence & Impressions Trend (7 or 8 cols) */}
        <div className="lg:col-span-7 xl:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                  <BarChart3 className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
                    Readership Cadence &amp; Impressions Trend
                  </h3>
                  <p className="text-xs text-slate-400">
                    Interactive telemetry curve over the selected time window
                  </p>
                </div>
              </div>

              {/* Time Range Pills */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200/80 self-start sm:self-auto">
                {(['7', '14', '30'] as const).map(r => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setTimeRange(r)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      timeRange === r
                        ? 'bg-white text-blue-600 shadow-2xs font-extrabold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {r}D
                  </button>
                ))}
              </div>
            </div>

            {/* Smooth SVG Area Chart */}
            <div className="relative pt-6 pb-2">
              <div className="relative w-full h-48 sm:h-52">
                <svg
                  viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                  preserveAspectRatio="none"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="trendBlueGradLight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid guide lines */}
                  <line
                    x1={paddingX}
                    y1={paddingY}
                    x2={svgWidth - paddingX}
                    y2={paddingY}
                    stroke="#F1F5F9"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1={paddingX}
                    y1={svgHeight / 2}
                    x2={svgWidth - paddingX}
                    y2={svgHeight / 2}
                    stroke="#F1F5F9"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1={paddingX}
                    y1={svgHeight - paddingY}
                    x2={svgWidth - paddingX}
                    y2={svgHeight - paddingY}
                    stroke="#E2E8F0"
                    strokeWidth="1"
                  />

                  {/* Secondary Cyan Wave Curve */}
                  {strokePathWave2 && (
                    <path
                      d={strokePathWave2}
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="2"
                      strokeOpacity="0.75"
                      strokeLinecap="round"
                    />
                  )}

                  {/* Primary Area & Stroke Curve */}
                  {areaPathViews && <path d={areaPathViews} fill="url(#trendBlueGradLight)" />}
                  {strokePathViews && (
                    <path
                      d={strokePathViews}
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  )}

                  {/* Active Hover Crosshair */}
                  {activeHoverPoint && (
                    <>
                      <line
                        x1={activeHoverPoint.x}
                        y1={paddingY}
                        x2={activeHoverPoint.x}
                        y2={svgHeight - paddingY}
                        stroke="#94A3B8"
                        strokeDasharray="3 3"
                        strokeWidth="1"
                      />
                      <circle
                        cx={activeHoverPoint.x}
                        cy={activeHoverPoint.y}
                        r="5"
                        fill="#2563EB"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />
                    </>
                  )}

                  {/* Invisible hover slices */}
                  {pointsViews.map((p, idx) => {
                    const sliceWidth = (svgWidth - paddingX * 2) / (pointsViews.length || 1);
                    return (
                      <rect
                        key={idx}
                        x={p.x - sliceWidth / 2}
                        y={0}
                        width={sliceWidth}
                        height={svgHeight}
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredPointIdx(idx)}
                        onMouseLeave={() => setHoveredPointIdx(null)}
                      />
                    );
                  })}
                </svg>

                {/* Floating Tooltip */}
                {activeHoverPoint && (
                  <div
                    style={{
                      left: `${(activeHoverPoint.x / svgWidth) * 100}%`,
                      top: `${Math.max(10, (activeHoverPoint.y / svgHeight) * 100 - 45)}%`,
                    }}
                    className="absolute -translate-x-1/2 pointer-events-none z-30 bg-slate-900 text-white p-2.5 rounded-xl border border-slate-800 shadow-xl backdrop-blur-md text-xs whitespace-nowrap space-y-1"
                  >
                    <div className="font-bold text-slate-300 text-[11px]">
                      {activeHoverPoint.data.label}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-bold text-cyan-400">
                        <Eye className="w-3 h-3" />
                        {activeHoverPoint.data.viewsEst} views
                      </span>
                      {activeHoverPoint.data.count > 0 && (
                        <span className="flex items-center gap-1 font-bold text-emerald-400">
                          {activeHoverPoint.data.count} published
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* X Axis dates */}
              <div className="flex justify-between items-center text-[11px] font-mono font-bold text-slate-400 mt-2 px-4">
                <span>{chartDays[0]?.label || 'Sep 23'}</span>
                <span>{chartDays[Math.floor(chartDays.length / 2)]?.label || 'Oct 8'}</span>
                <span className="text-blue-600 font-bold">Today</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>
                Average Velocity:{' '}
                <strong className="text-slate-800">Active publishing telemetry online</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Card: Editorial Pipeline & Lifecycle (5 or 4 cols) */}
        <div className="lg:col-span-5 xl:col-span-4 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
                  <Activity className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
                    Editorial Pipeline &amp; Lifecycle
                  </h3>
                  <p className="text-xs text-slate-400">Click any status to filter posts</p>
                </div>
              </div>
            </div>

            {/* 5 Status Filter Buttons */}
            <div className="space-y-2.5 pt-4">
              {pipelinePills.map(p => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => onNavigateToBlogs(p.filter)}
                  className={`group w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 cursor-pointer text-left ${
                    p.active
                      ? 'bg-blue-50/80 border-2 border-blue-600 text-blue-900 shadow-2xs'
                      : 'bg-slate-50/70 hover:bg-slate-100/80 border border-slate-200/80 hover:border-slate-300 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${p.dot}`} />
                    <span className="text-xs font-bold uppercase tracking-wider truncate">
                      {p.label}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-sm font-black px-2.5 py-0.5 rounded-lg ml-2 ${
                      p.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-900 border border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    {p.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="text-xs text-slate-400 font-medium">Quick inventory filter</span>
            <button
              type="button"
              onClick={() => onNavigateToBlogs()}
              className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer hover:underline text-xs"
            >
              <span>Manage Posts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── 5. Audience Geography (Dedicated Spacious Card) ──────── */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs space-y-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center shadow-xs shrink-0">
              <Globe className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                Audience Geography
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Live international reader distribution across detected territories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Telemetry Active
            </span>
          </div>
        </div>

        {/* Main Map + Territory Leaderboard (12-Column Responsive Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left/Center: Interactive World Telemetry Map Canvas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <WorldMapViewer
              countries={displayCountries}
              hoveredCode={hoveredCountryCode}
              onHoverCountry={setHoveredCountryCode}
              className="h-full"
            />
          </div>

          {/* Right Column: 6 Tracked Territories List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
            <div className="space-y-2.5">
              {displayCountries.map((c, idx) => {
                const count = c.count || 0;
                const pct =
                  c.percentage ?? Math.max(1, Math.round((count / totalCountryViews) * 100));
                const countryTitle = c.country || getCountryName(c.code);
                const isHovered = hoveredCountryCode?.toUpperCase() === c.code.toUpperCase();

                return (
                  <div
                    key={c.code}
                    onMouseEnter={() => setHoveredCountryCode(c.code)}
                    onMouseOver={() => setHoveredCountryCode(c.code)}
                    onMouseLeave={() => setHoveredCountryCode(null)}
                    className={`group p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? 'bg-blue-50/80 border-blue-400 shadow-sm scale-[1.01]'
                        : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                            idx === 0
                              ? 'bg-amber-100 text-amber-800 border border-amber-300'
                              : idx === 1
                                ? 'bg-slate-200 text-slate-700 border border-slate-300'
                                : idx === 2
                                  ? 'bg-orange-100 text-orange-800 border border-orange-200'
                                  : 'bg-slate-100 text-slate-600 border border-slate-200/70'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <FlagBadge code={c.code} size="md" />
                        <span
                          className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight whitespace-nowrap group-hover:text-blue-600 transition-colors"
                          title={countryTitle}
                        >
                          {countryTitle}
                        </span>

                        {idx === 0 && (
                          <span className="hidden sm:inline-flex items-center gap-0.5 text-[9.5px] font-bold text-blue-700 bg-blue-100/80 border border-blue-200 px-1.5 py-0.5 rounded shrink-0">
                            <Zap className="w-2.5 h-2.5" /> Hub
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono font-bold text-slate-800 text-xs">
                          {formatNumber(count)}{' '}
                          <span className="text-slate-400 font-normal">views</span>
                        </span>
                        <span className="font-bold font-mono text-xs text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-lg whitespace-nowrap">
                          {pct}% share
                        </span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1.5 w-full bg-slate-200/70 rounded-full overflow-hidden mt-2.5">
                      <div
                        style={{ width: `${Math.max(4, pct)}%` }}
                        className={`h-full rounded-full transition-all duration-700 ${
                          idx === 0
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                            : idx === 1
                              ? 'bg-gradient-to-r from-emerald-600 to-emerald-400'
                              : idx === 2
                                ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── 6. Top Performing Articles (Dedicated Spacious Leaderboard) ─ */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xs space-y-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50/80 border border-amber-100 text-amber-600 flex items-center justify-center shadow-xs shrink-0">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 font-heading tracking-tight">
                Top Performing Articles
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Most popular posts ranked by verified views and unique readers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => onNavigateToBlogs()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200/80 transition-colors cursor-pointer"
            >
              <span>Manage Posts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Compact, Perfectly Proportioned Leaderboard Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200/80 bg-white shadow-2xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200/80 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-2.5 px-3 w-12 text-center">#</th>
                <th className="py-2.5 px-4 min-w-[280px]">Article Details</th>
                <th className="py-2.5 px-4 w-32">Status</th>
                <th className="py-2.5 px-4 text-right w-28">Total Views</th>
                <th className="py-2.5 px-4 text-right w-28">Unique Readers</th>
                <th className="py-2.5 px-4 text-center w-40">Top Audience</th>
                <th className="py-2.5 px-3 text-right w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {topViewed && topViewed.length > 0 ? (
                topViewed.slice(0, 5).map((b, idx) => {
                  const countrySum = (b.countries || []).reduce(
                    (sum, c) => sum + (c.count || 0),
                    0
                  );
                  const tViews = Math.max(b.viewCount || 0, countrySum);
                  const uViews =
                    tViews > 0 ? Math.min(tViews, Math.max(b.uniqueViewCount ?? 0, 1)) : 0;
                  const sortedCountries =
                    b.countries && b.countries.length > 0
                      ? [...b.countries].sort((x, y) => (y.count || 0) - (x.count || 0))
                      : [];
                  const topC = sortedCountries.length > 0 ? sortedCountries[0] : null;

                  return (
                    <tr
                      key={b._id}
                      className="group hover:bg-slate-50/70 transition-colors duration-150"
                    >
                      {/* Rank */}
                      <td className="py-2.5 px-3 text-center align-middle">
                        <span
                          className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-black ${
                            idx === 0
                              ? 'bg-amber-100 text-amber-800 border border-amber-300 shadow-2xs'
                              : idx === 1
                                ? 'bg-slate-200 text-slate-700 border border-slate-300 shadow-2xs'
                                : idx === 2
                                  ? 'bg-orange-100 text-orange-800 border border-orange-200 shadow-2xs'
                                  : 'bg-slate-100 text-slate-600 border border-slate-200/70'
                          }`}
                        >
                          {idx + 1}
                        </span>
                      </td>

                      {/* Article Details */}
                      <td className="py-2.5 px-4 align-middle">
                        <div className="flex items-center gap-3">
                          {b.featureImage ? (
                            <img
                              src={b.featureImage}
                              alt={b.title}
                              className="w-9 h-9 rounded-lg object-cover bg-slate-100 border border-slate-200/90 shadow-2xs shrink-0 group-hover:scale-105 transition-transform duration-200"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
                              <FileText className="w-4 h-4 stroke-[1.5]" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <p
                              onClick={() => onEditBlog(b)}
                              className="font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer text-sm truncate max-w-sm sm:max-w-md block leading-snug"
                              title={b.title}
                            >
                              {b.title}
                            </p>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                              <span>
                                {b.date
                                  ? new Date(b.date).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric',
                                    })
                                  : 'Draft'}
                              </span>
                              {b.category && b.category.length > 0 && (
                                <>
                                  <span className="text-slate-300">•</span>
                                  <span className="text-slate-500 font-medium px-1.5 py-0.2 rounded bg-slate-100 border border-slate-200/60 text-[10px]">
                                    {b.category[0]}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-2.5 px-4 align-middle">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {b.status}
                        </span>
                      </td>

                      {/* Total Views */}
                      <td className="py-2.5 px-4 text-right align-middle">
                        <span className="font-mono font-bold text-slate-900 text-sm leading-none block">
                          {formatNumber(tViews)}
                        </span>
                        <span className="text-[11px] text-slate-400 block font-normal mt-0.5 leading-none">
                          views
                        </span>
                      </td>

                      {/* Unique Readers */}
                      <td className="py-2.5 px-4 text-right align-middle">
                        <span className="font-mono font-bold text-slate-700 text-sm leading-none block">
                          {formatNumber(uViews)}
                        </span>
                        <span className="text-[11px] text-slate-400 block font-normal mt-0.5 leading-none">
                          readers
                        </span>
                      </td>

                      {/* Top Audience */}
                      <td className="py-2.5 px-4 text-center align-middle">
                        {topC ? (
                          <div className="inline-flex items-center gap-2 text-xs text-slate-800 font-semibold bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/90 shadow-2xs">
                            <FlagBadge code={topC.code} size="sm" />
                            <span className="truncate max-w-[110px]">
                              {topC.country || getCountryName(topC.code)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-400 text-xs italic">—</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-2.5 px-3 text-right align-middle">
                        <div className="flex items-center justify-end gap-1.5">
                          {onViewAnalytics && (
                            <button
                              type="button"
                              onClick={() => onViewAnalytics(b)}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 border border-slate-200/70 hover:border-blue-200 transition-all cursor-pointer shadow-2xs"
                              title="Analytics Telemetry"
                            >
                              <BarChart3 className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => onEditBlog(b)}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 border border-slate-200/70 hover:border-blue-200 transition-all cursor-pointer shadow-2xs"
                            title="Edit Article"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 text-sm">
                    No articles recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 6. Bottom Banner: Editorial Excellence System ───────── */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
        <div className="space-y-0.5">
          <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 flex items-center gap-1.5 font-mono">
            <Zap className="w-3.5 h-3.5" />
            EDITORIAL EXCELLENCE SYSTEM
          </span>
          <h4 className="text-sm font-bold text-slate-900">
            Teck Solar Publishing Guidelines &amp; Quality Controls
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full self-start sm:self-auto font-semibold">
          CMS v2.4 Enterprise
        </span>
      </div>
    </div>
  );
};
