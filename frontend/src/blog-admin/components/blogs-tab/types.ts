import type { Blog, BlogStats } from "../../types";

export interface BlogsTabProps {
  blogs: Blog[];
  loading: boolean;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  categoryFilter: string;
  setCategoryFilter: (v: string) => void;
  countryFilter: string;
  setCountryFilter: (v: string) => void;
  currentPage: number;
  totalPages: number;
  totalBlogs: number;
  setCurrentPage: (p: number) => void;
  onNew: () => void;
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
  onPermanentDelete?: (id: string) => void;
  onRestore?: (id: string) => void;
  onStatusChange: (id: string, newStatus: string) => void;
  onAdjustSchedule?: (blog: Blog) => void;
  onTogglePin?: (id: string) => void;
  onBulkAction?: (action: string, ids: string[]) => void;
  onViewAnalytics?: (blog: Blog) => void;
  sortBy: "date" | "views";
  sortOrder: "asc" | "desc";
  onToggleSort: (field: "date" | "views") => void;
  stats?: BlogStats | null;
}

export interface BlogsHeaderProps {
  onNew: () => void;
  searchQuery: string;
  statusFilter: string;
  categoryFilter: string;
  countryFilter: string;
}

export interface StatusTabItem {
  id: string;
  label: string;
  count?: number;
}

export interface BlogsStatusTabsProps {
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  stats?: BlogStats | null;
}

export interface BlogsFiltersBarProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  categoryFilter: string;
  setCategoryFilter: (v: string) => void;
  countryFilter: string;
  setCountryFilter: (v: string) => void;
  allCategories: string[];
  allCountries: { code: string; country: string }[];
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export interface BlogsBulkActionsProps {
  selectedCount: number;
  isTrashView: boolean;
  bulkLoading: boolean;
  onClearSelection: () => void;
  onRunBulk: (action: string) => void;
}

export interface BlogsTableProps {
  loading: boolean;
  blogs: Blog[];
  selectedIds: string[];
  isTrashView: boolean;
  sortBy: "date" | "views";
  sortOrder: "asc" | "desc";
  onToggleSort: (field: "date" | "views") => void;
  onToggleSelectAll: () => void;
  onToggleSelectRow: (id: string) => void;
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
  onPermanentDelete?: (id: string) => void;
  onRestore?: (id: string) => void;
  onStatusChange: (id: string, newStatus: string) => void;
  onAdjustSchedule?: (blog: Blog) => void;
  onTogglePin?: (id: string) => void;
  onViewAnalytics?: (blog: Blog) => void;
}

export interface BlogTableRowProps {
  blog: Blog;
  isSelected: boolean;
  isTrashView: boolean;
  onToggleSelect: (id: string) => void;
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
  onPermanentDelete?: (id: string) => void;
  onRestore?: (id: string) => void;
  onStatusChange: (id: string, newStatus: string) => void;
  onAdjustSchedule?: (blog: Blog) => void;
  onTogglePin?: (id: string) => void;
  onViewAnalytics?: (blog: Blog) => void;
}

export interface BlogsPaginationProps {
  showingCount: number;
  totalCount: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
