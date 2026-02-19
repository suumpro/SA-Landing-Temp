import { articles as allArticlesRaw, type Article as VeliteArticle } from '../../.velite';
import type { Article, ArticleCategory } from '@/data/articles/types';

// Compile-time check: Velite output must be assignable to our Article interface
const allArticles: Article[] = allArticlesRaw satisfies VeliteArticle[] as Article[];

export function getAllArticles(): Article[] {
  return [...allArticles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const explicit = (article.relatedSlugs ?? [])
    .map(getArticleBySlug)
    .filter((a): a is Article => !!a);

  const explicitSlugs = new Set(explicit.map((a) => a.slug));
  const scored = getAllArticles()
    .filter((a) => a.slug !== article.slug && !explicitSlugs.has(a.slug))
    .map((a) => ({
      article: a,
      score:
        a.tags.filter((t) => article.tags.includes(t)).length * 2 +
        (a.category === article.category ? 1 : 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return [...explicit, ...scored.map(({ article }) => article)].slice(0, limit);
}

export function getAdjacentArticles(article: Article): {
  prev: Article | undefined;
  next: Article | undefined;
} {
  const siblings = getArticlesByCategory(article.category)
    .sort((a, b) => a.date.localeCompare(b.date));
  const idx = siblings.findIndex((a) => a.slug === article.slug);
  return {
    prev: idx > 0 ? siblings[idx - 1] : undefined,
    next: idx < siblings.length - 1 ? siblings[idx + 1] : undefined,
  };
}

export type { Article, ArticleCategory } from '@/data/articles/types';
