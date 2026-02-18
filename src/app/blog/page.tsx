'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Newspaper, Sun, BarChart3, Lightbulb } from 'lucide-react';
import { getAllArticles } from '@/data/articles';
import type { ArticleCategory } from '@/data/articles/types';
import { categoryMeta } from '@/data/articles/types';
import { ArticleCard, FeaturedArticleCard } from '@/components/blog/ArticleCard';

const tabs: { key: ArticleCategory | 'all'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'all', label: '전체', icon: BarChart3 },
  { key: 'weekly', label: '주간 브리핑', icon: Newspaper },
  { key: 'season', label: '시즌 가이드', icon: Sun },
  { key: 'insight', label: '인사이트', icon: BarChart3 },
  { key: 'tip', label: '점주 노하우', icon: Lightbulb },
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<ArticleCategory | 'all'>('all');
  const allArticles = useMemo(() => getAllArticles(), []);

  const featured = allArticles.find((a) => a.category === 'weekly');
  const filtered = activeTab === 'all'
    ? allArticles.filter((a) => a.slug !== featured?.slug)
    : allArticles.filter((a) => a.category === activeTab && a.slug !== featured?.slug);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 pt-28 pb-10 text-center">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Insights</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            편의점 운영 인사이트
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            매주 업데이트되는 발주 전략, 시즌 가이드, 데이터 분석을 확인하세요.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 -mx-4 px-4 snap-x snap-mandatory">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all snap-center ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {tab.key !== 'all' && (
                    <span className={`text-xs ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                      {allArticles.filter((a) => a.category === tab.key).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Featured Article */}
        {activeTab === 'all' && featured && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">최신 주간 브리핑</p>
            <FeaturedArticleCard article={featured} />
          </div>
        )}

        {/* Article Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400">이 카테고리에는 아직 글이 없습니다.</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            매주 이런 인사이트를 이메일로 받아보세요
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            무료 뉴스레터로 시작하고, 원하면 매일 아침 브리핑까지.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#faq"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3"
            >
              무료로 구독하기
            </Link>
            <Link
              href="/sample"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              7일 브리핑 미리보기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
