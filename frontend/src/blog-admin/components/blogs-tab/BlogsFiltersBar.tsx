import React from "react";
import { Search, X, Tag, Globe, ChevronDown, RotateCcw } from "lucide-react";
import type { BlogsFiltersBarProps } from "./types";

export const BlogsFiltersBar: React.FC<BlogsFiltersBarProps> = ({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  countryFilter,
  setCountryFilter,
  allCategories,
  allCountries,
  hasActiveFilters,
  onClearFilters,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2.5 items-stretch md:items-center justify-between">
      {/* Search Bar */}
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search by blog title or excerpt..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-9 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC]/20 outline-none transition-all shadow-2xs"
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

      {/* Filter Dropdowns & Reset */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Category Filter */}
        <div className="relative min-w-[140px] sm:min-w-[160px] flex-1 sm:flex-initial">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full appearance-none pl-8 pr-7 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC]/20 outline-none transition-all cursor-pointer shadow-2xs hover:bg-slate-50"
            title="Filter by category"
          >
            <option value="All">All Categories</option>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Reader Territory Filter */}
        <div className="relative min-w-[140px] sm:min-w-[160px] flex-1 sm:flex-initial">
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="w-full appearance-none pl-8 pr-7 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:border-[#155DFC] focus:ring-1 focus:ring-[#155DFC]/20 outline-none transition-all cursor-pointer shadow-2xs hover:bg-slate-50"
            title="Filter by reader territory"
          >
            <option value="All">All Territories</option>
            {allCountries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.country} ({c.code})
              </option>
            ))}
          </select>
          <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors cursor-pointer shrink-0"
            title="Reset all search and filter fields"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
};
