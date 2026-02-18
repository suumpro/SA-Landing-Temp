export type ArticleCategory = 'weekly' | 'season' | 'insight' | 'tip';

export type ArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'tip'; title: string; text: string }
  | { type: 'stat'; label: string; value: string; change?: string }
  | { type: 'checklist'; items: string[] }
  | { type: 'quote'; text: string; author: string }
  | { type: 'callout'; variant: 'info' | 'warning' | 'success'; text: string }
  | { type: 'divider' };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string;
  readTime: number;
  tags: string[];
  icon: string; // Lucide icon name
  content: ArticleBlock[];
}

export const categoryMeta: Record<ArticleCategory, { label: string; color: string; bgColor: string }> = {
  weekly: { label: '주간 브리핑', color: 'text-blue-700', bgColor: 'bg-blue-50' },
  season: { label: '시즌 가이드', color: 'text-emerald-700', bgColor: 'bg-emerald-50' },
  insight: { label: '데이터 인사이트', color: 'text-violet-700', bgColor: 'bg-violet-50' },
  tip: { label: '점주 노하우', color: 'text-amber-700', bgColor: 'bg-amber-50' },
};
