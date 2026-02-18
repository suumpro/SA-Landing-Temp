'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Newspaper, Sun, BarChart3, Lightbulb,
  Search, ArrowUpDown, ChevronLeft, ChevronRight, X,
} from 'lucide-react';
import { getAllArticles } from '@/data/articles';
import type { ArticleCategory } from '@/data/articles/types';
import { ArticleCard, FeaturedArticleCard } from '@/components/blog/ArticleCard';

const PAGE_SIZE = 12;

const tabs: { key: ArticleCategory | 'all'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'all', label: '전체', icon: BarChart3 },
  { key: 'weekly', label: '주간 브리핑', icon: Newspaper },
  { key: 'season', label: '시즌 가이드', icon: Sun },
  { key: 'insight', label: '인사이트', icon: BarChart3 },
  { key: 'tip', label: '점주 노하우', icon: Lightbulb },
];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get('tag');

  const [activeTab, setActiveTab] = useState<ArticleCategory | 'all'>('all');
  const [activeTag, setActiveTag] = useState<string | null>(initialTag);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, activeTag, debouncedQuery, sortOrder]);

  const allArticles = useMemo(() => getAllArticles(), []);

  // Popular tags (top 12)
  const popularTags = useMemo(() => {
    const freq: Record<string, number> = {};
    allArticles.forEach((a) => a.tags.forEach((t) => { freq[t] = (freq[t] || 0) + 1; }));
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([tag]) => tag);
  }, [allArticles]);

  const featured = allArticles.find((a) => a.category === 'weekly');

  // Filter + Search + Sort
  const filtered = useMemo(() => {
    let result = allArticles;

    // Category filter
    if (activeTab !== 'all') {
      result = result.filter((a) => a.category === activeTab);
    }

    // Tag filter
    if (activeTag) {
      result = result.filter((a) => a.tags.includes(activeTag));
    }

    // Search
    if (debouncedQuery.trim()) {
      const q = debouncedQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Exclude featured in 'all' tab when no search/tag active
    if (activeTab === 'all' && !debouncedQuery.trim() && !activeTag && featured) {
      result = result.filter((a) => a.slug !== featured.slug);
    }

    // Sort
    if (sortOrder === 'oldest') {
      result = [...result].sort((a, b) => a.date.localeCompare(b.date));
    }

    return result;
  }, [allArticles, activeTab, activeTag, debouncedQuery, sortOrder, featured]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const showFeatured = activeTab === 'all' && !debouncedQuery.trim() && !activeTag && featured;

  const handleTabChange = useCallback((key: ArticleCategory | 'all') => {
    setActiveTab(key);
    setActiveTag(null);
    setSearchQuery('');
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 pt-28 pb-8 text-center">
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Insights</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            편의점 운영 인사이트
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto mb-6">
            매주 업데이트되는 발주 전략, 시즌 가이드, 데이터 분석을 확인하세요.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색어를 입력하세요 (제목, 태그)"
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Tabs + Sort */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex gap-1 overflow-x-auto -mx-4 px-4 snap-x snap-mandatory flex-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
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

            {/* Sort Toggle */}
            <button
              onClick={() => setSortOrder((p) => (p === 'newest' ? 'oldest' : 'newest'))}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors shrink-0 ml-2"
              title={sortOrder === 'newest' ? '최신순' : '오래된순'}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{sortOrder === 'newest' ? '최신순' : '오래된순'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                activeTag === tag
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-400">
            {debouncedQuery.trim() || activeTag
              ? `검색 결과 ${filtered.length}개`
              : `총 ${filtered.length + (showFeatured ? 1 : 0)}개의 글`}
          </p>
          {activeTag && (
            <button
              onClick={() => setActiveTag(null)}
              className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              태그 필터 해제
            </button>
          )}
        </div>

        {/* Featured Article */}
        {showFeatured && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">최신 주간 브리핑</p>
            <FeaturedArticleCard article={featured} />
          </div>
        )}

        {/* Article Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-gray-300" />
            </div>
            <p className="text-gray-500 font-medium mb-1">검색 결과가 없습니다</p>
            <p className="text-sm text-gray-400">다른 키워드나 카테고리를 선택해 보세요.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-1 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
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
