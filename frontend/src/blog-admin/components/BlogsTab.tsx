import React, { useState, useEffect, useMemo } from "react";
import type { Blog } from "../types";
import { getCountryName } from "../countryUtils";
import {
  BlogsHeader,
  BlogsStatusTabs,
  BlogsFiltersBar,
  BlogsBulkActions,
  BlogsTable,
  BlogsPagination,
  type BlogsTabProps,
} from "./blogs-tab";

export type { BlogsTabProps };

/**
 * BlogsTab - Main Blog Management Section
 *
 * Structured modularly:
 * - BlogsHeader: Title, CSV export, and New Blog button
 * - BlogsStatusTabs: Status tabs (All, Published, Scheduled, Drafts, Trash) with badges
 * - BlogsFiltersBar: Search input, Category selector, Territory selector, Reset button
 * - BlogsBulkActions: Floating action bar for batch operations
 * - BlogsTable: Table card containing headers, states, and BlogTableRow items
 * - BlogsPagination: Footer with post counts and pagination controls
 */
export const BlogsTab: React.FC<BlogsTabProps> = ({
  blogs,
  loading,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  countryFilter,
  setCountryFilter,
  currentPage,
  totalPages,
  totalBlogs,
  setCurrentPage,
  onNew,
  onEdit,
  onDelete,
  onPermanentDelete,
  onRestore,
  onStatusChange,
  onAdjustSchedule,
  onTogglePin,
  onBulkAction,
  onViewAnalytics,
  sortBy,
  sortOrder,
  onToggleSort,
  stats,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkLoading, setBulkLoading] = useState(false);

  // Clear selections when switching filters or pages
  useEffect(() => {
    setSelectedIds([]);
  }, [statusFilter, currentPage]);

  // Selection toggle handlers
  const isAllSelected = blogs.length > 0 && selectedIds.length === blogs.length;

  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(blogs.map((b) => b._id));
    }
  };

  const handleToggleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRunBulk = async (action: string) => {
    if (!onBulkAction || selectedIds.length === 0) return;
    setBulkLoading(true);
    try {
      await onBulkAction(action, selectedIds);
      setSelectedIds([]);
    } finally {
      setBulkLoading(false);
    }
  };

  // Client-side sort for immediate UI responsiveness
  const sortedBlogs = useMemo(() => {
    if (!blogs || blogs.length === 0) return [];
    return [...blogs].sort((a, b) => {
      // Pinned posts always rise to the top
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;

      if (sortBy === "views") {
        const aViews = Math.max(
          a.viewCount ?? 0,
          (a.countries || []).reduce((s: number, c) => s + (c.count || 0), 0)
        );
        const bViews = Math.max(
          b.viewCount ?? 0,
          (b.countries || []).reduce((s: number, c) => s + (c.count || 0), 0)
        );
        return sortOrder === "asc" ? aViews - bViews : bViews - aViews;
      }

      const timeA = a.date ? new Date(a.date).getTime() : 0;
      const timeB = b.date ? new Date(b.date).getTime() : 0;
      return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
    });
  }, [blogs, sortBy, sortOrder]);

  // Unique categories list
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    (stats?.categories || []).forEach((c: string) => c && set.add(c));
    blogs.forEach((b: Blog) => (b.category || []).forEach((c: string) => c && set.add(c)));
    return Array.from(set).sort();
  }, [stats?.categories, blogs]);

  // Unique countries list
  const allCountries = useMemo(() => {
    const map = new Map<string, string>();
    (stats?.topCountries || []).forEach((c) => {
      if (c.code) map.set(c.code.toUpperCase(), c.country || getCountryName(c.code));
    });
    blogs.forEach((b: Blog) => {
      (b.countries || []).forEach((c) => {
        if (c.code) map.set(c.code.toUpperCase(), c.country || getCountryName(c.code));
      });
    });
    return Array.from(map.entries())
      .map(([code, country]) => ({ code, country }))
      .sort((a, b) => a.country.localeCompare(b.country));
  }, [stats?.topCountries, blogs]);

  const hasActiveFilters =
    Boolean(searchQuery) ||
    categoryFilter !== "All" ||
    countryFilter !== "All";

  const handleClearAllFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setCountryFilter("All");
  };

  const safeTotal =
    typeof totalBlogs === "number" && !isNaN(totalBlogs)
      ? totalBlogs
      : blogs?.length ?? 0;
  const safeTotalPages = Math.max(1, totalPages || 1);
  const isTrashView = statusFilter === "trash";

  return (
    <div className="space-y-5">
      {/* 1. Header Section */}
      <BlogsHeader
        onNew={onNew}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        countryFilter={countryFilter}
      />

      {/* 2. Status Filter Tabs */}
      <BlogsStatusTabs
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        stats={stats}
      />

      {/* 3. Search & Filters Bar */}
      <BlogsFiltersBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
        allCategories={allCategories}
        allCountries={allCountries}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={handleClearAllFilters}
      />

      {/* 4. Floating Bulk Action Bar */}
      <BlogsBulkActions
        selectedCount={selectedIds.length}
        isTrashView={isTrashView}
        bulkLoading={bulkLoading}
        onClearSelection={() => setSelectedIds([])}
        onRunBulk={handleRunBulk}
      />

      {/* 5. Table Card & Pagination */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <BlogsTable
          loading={loading}
          blogs={sortedBlogs}
          selectedIds={selectedIds}
          isTrashView={isTrashView}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onToggleSort={onToggleSort}
          onToggleSelectAll={handleToggleSelectAll}
          onToggleSelectRow={handleToggleSelectRow}
          onEdit={onEdit}
          onDelete={onDelete}
          onPermanentDelete={onPermanentDelete}
          onRestore={onRestore}
          onStatusChange={onStatusChange}
          onAdjustSchedule={onAdjustSchedule}
          onTogglePin={onTogglePin}
          onViewAnalytics={onViewAnalytics}
        />

        <BlogsPagination
          showingCount={blogs.length}
          totalCount={safeTotal}
          currentPage={currentPage}
          totalPages={safeTotalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
