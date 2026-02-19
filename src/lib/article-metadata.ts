import { articles as allArticlesRaw } from '../../.velite';
import type { ArticleMeta, ArticleCategory } from '@/data/articles/types';

// Strip body field for client-side usage (body is not serializable for 'use client')
const allMeta: ArticleMeta[] = allArticlesRaw.map(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ body, ...meta }) => meta as ArticleMeta
);

export function getAllArticlesMeta(): ArticleMeta[] {
  return [...allMeta].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleMetasByCategory(category: ArticleCategory): ArticleMeta[] {
  return getAllArticlesMeta().filter((a) => a.category === category);
}

export type { ArticleMeta, ArticleCategory } from '@/data/articles/types';
