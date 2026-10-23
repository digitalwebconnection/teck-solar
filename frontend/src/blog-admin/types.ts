export interface BlogCountry {
  country: string;
  code: string;
  count: number;
}

export interface CountryStat {
  country: string;
  code: string;
  count: number;
  percentage: number;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string[];
  readTime: string;
  date: string;
  excerpt: string;
  featureImage: string;
  content: string;
  metaTitle: string;
  canonicalUrl: string;
  keywords: string[];
  metaDescription: string;
  schema: string;
  longContent: string;
  status: 'draft' | 'published' | 'scheduled';
  scheduledAt?: string | null;
  isPinned?: boolean;
  isDeleted?: boolean;
  deletedAt?: string | null;
  viewCount?: number;
  uniqueViewCount?: number;
  countries?: BlogCountry[];
  createdAt: string;
  updatedAt: string;
}

export interface BlogStats {
  total: number;
  published: number;
  draft: number;
  scheduled: number;
  trashed?: number;
  totalViews?: number;
  totalUniqueViews?: number;
  topCountries?: CountryStat[];
  categories?: string[];
}

export interface ActivityItem {
  _id: string;
  count: number;
}

export interface DashboardData {
  stats: BlogStats;
  activity: ActivityItem[];
  recentUpdated: Blog[];
  recentPublished: Blog[];
  topViewed: Blog[];
}

export interface BlogFormData {
  title: string;
  slug: string;
  category: string;       // comma-separated input → split on save
  readTime: string;
  date: string;
  excerpt: string;
  featureImage: string;
  content: string;
  metaTitle: string;
  canonicalUrl: string;
  keywords: string;       // comma-separated input → split on save
  metaDescription: string;
  schema: string;
  longContent: string;
  status: 'draft' | 'published' | 'scheduled';
  scheduledAt: string;
}

export const EMPTY_FORM: BlogFormData = {
  title: '',
  slug: '',
  category: '',
  readTime: '',
  date: new Date().toISOString().slice(0, 10),
  excerpt: '',
  featureImage: '',
  content: '',
  metaTitle: '',
  canonicalUrl: '',
  keywords: '',
  metaDescription: '',
  schema: '',
  longContent: '',
  status: 'draft',
  scheduledAt: '',
};
