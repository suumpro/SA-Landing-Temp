import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { getAllArticles, getArticleBySlug, getRelatedArticles, getAdjacentArticles } from '@/lib/articles';
import { categoryMeta } from '@/data/articles/types';
import ArticleRenderer, { getHeadings } from '@/components/blog/ArticleRenderer';
import { ArticleCard } from '@/components/blog/ArticleCard';
import ReadingProgress from '@/components/blog/ReadingProgress';
import TableOfContents from '@/components/blog/TableOfContents';

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: '글을 찾을 수 없습니다' };

  return {
    title: `${article.title} | STOREAGENT 인사이트`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const meta = categoryMeta[article.category];
  const related = getRelatedArticles(article, 3);
  const { prev, next } = getAdjacentArticles(article);
  const headings = getHeadings(article.body);

  return (
    <main className="min-h-screen bg-gray-50">
      <ReadingProgress />

      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 pt-24 pb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            목록으로
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${meta.bgColor} ${meta.color}`}>
                {meta.label}
              </span>
              <span className="text-sm text-gray-400">{article.date}</span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}분
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-500 mt-3 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content + TOC */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex gap-10">
          {/* Article Content */}
          <article id="article-content" className="flex-1 min-w-0 max-w-3xl">
            <ArticleRenderer body={article.body} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </article>

          {/* TOC Sidebar */}
          <TableOfContents headings={headings} />
        </div>
      </div>

      {/* Prev / Next Navigation */}
      {(prev || next) && (
        <div className="max-w-5xl mx-auto px-4 pb-6">
          <div className="flex items-stretch gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="flex-1 group flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-primary/30 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-gray-300 group-hover:text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 mb-0.5">이전 글</p>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-primary truncate">{prev.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="flex-1 group flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-primary/30 transition-colors text-right"
              >
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 mb-0.5">다음 글</p>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-primary truncate">{next.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary shrink-0" />
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      )}

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">함께 읽으면 좋은 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            매주 이런 인사이트를 받아보세요
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            무료 뉴스레터 구독으로 시작하세요.
          </p>
          <Link
            href="/#faq"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3"
          >
            무료로 구독하기
          </Link>
        </div>
      </section>
    </main>
  );
}
