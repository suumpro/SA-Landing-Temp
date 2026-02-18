import Link from 'next/link';
import {
  Newspaper, Snowflake, CloudRain, BarChart3,
  TrendingDown, LayoutGrid, Flower2, Lightbulb,
  Clock, ArrowRight,
} from 'lucide-react';
import type { Article } from '@/data/articles/types';
import { categoryMeta } from '@/data/articles/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper, Snowflake, CloudRain, BarChart3,
  TrendingDown, LayoutGrid, Flower2, Lightbulb,
};

function ArticleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Newspaper;
  return <Icon className={className} />;
}

export function ArticleCard({ article }: { article: Article }) {
  const meta = categoryMeta[article.category];

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <ArticleIcon name={article.icon} className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${meta.bgColor} ${meta.color}`}>
          {meta.label}
        </span>
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {article.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-3">
          <span>{article.date.replace(/^20\d{2}-/, '').replace('-', '/')}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}분
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}

export function FeaturedArticleCard({ article }: { article: Article }) {
  const meta = categoryMeta[article.category];

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <ArticleIcon name={article.icon} className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${meta.bgColor} ${meta.color}`}>
              {meta.label}
            </span>
            <span className="text-xs text-gray-400">{article.date}</span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}분
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {article.title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-3 group-hover:gap-2 transition-all">
            읽기 <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
