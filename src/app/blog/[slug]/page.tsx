import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Clock } from 'lucide-react';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/data/articles';
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
  const headings = getHeadings(article.content);

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
            <ArticleRenderer blocks={article.content} />

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

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">관련 글</h3>
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
