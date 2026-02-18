import { memo } from 'react';
import Link from 'next/link';
import {
  Newspaper, Snowflake, CloudRain, BarChart3,
  TrendingDown, LayoutGrid, Flower2, Lightbulb,
  Clock, ArrowRight,
  Gift, GraduationCap, Trophy, Heart, Sun, Sparkles,
  Thermometer, Zap, CreditCard, Coffee, Moon, Trash2,
  ShoppingCart, PiggyBank, Users, UserCheck, Eye, Bike,
  ChefHat, Building2, Handshake, Share2, Umbrella,
  ShieldCheck, Rocket,
  Leaf, BookOpen, Calendar, CalendarDays, MapPin,
  PartyPopper, Sparkle, Tag, Package, MessageCircle,
} from 'lucide-react';
import type { Article } from '@/data/articles/types';
import { categoryMeta } from '@/data/articles/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper, Snowflake, CloudRain, BarChart3,
  TrendingDown, LayoutGrid, Flower2, Lightbulb, Clock,
  Gift, GraduationCap, Trophy, Heart, Sun, Sparkles,
  Thermometer, Zap, CreditCard, Coffee, Moon, Trash2,
  ShoppingCart, PiggyBank, Users, UserCheck, Eye, Bike,
  ChefHat, Building2, Handshake, Share2, Umbrella,
  ShieldCheck, Rocket,
  Leaf, BookOpen, Calendar, CalendarDays, MapPin,
  PartyPopper, Sparkle, Tag, Package, MessageCircle,
};

function ArticleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Newspaper;
  return <Icon className={className} />;
}

const categoryAccent: Record<string, { border: string; iconBg: string; bar: string }> = {
  weekly: { border: 'group-hover:border-blue-200', iconBg: 'bg-blue-50', bar: 'from-blue-400 to-blue-600' },
  season: { border: 'group-hover:border-emerald-200', iconBg: 'bg-emerald-50', bar: 'from-emerald-400 to-emerald-600' },
  insight: { border: 'group-hover:border-violet-200', iconBg: 'bg-violet-50', bar: 'from-violet-400 to-violet-600' },
  tip: { border: 'group-hover:border-amber-200', iconBg: 'bg-amber-50', bar: 'from-amber-400 to-amber-600' },
};

export const ArticleCard = memo(function ArticleCard({ article }: { article: Article }) {
  const meta = categoryMeta[article.category];
  const accent = categoryAccent[article.category];

  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-[box-shadow,border-color,transform] cursor-pointer ${accent.border}`}
    >
      {/* Category color bar */}
      <div className={`h-1 bg-gradient-to-r ${accent.bar}`} />

      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl ${accent.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <ArticleIcon name={article.icon} className={`w-5 h-5 ${meta.color}`} />
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

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span>{article.date.replace(/^20\d{2}-/, '').replace('-', '/')}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}분
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-[color,transform]" />
        </div>
      </div>
    </Link>
  );
});

export const FeaturedArticleCard = memo(function FeaturedArticleCard({ article }: { article: Article }) {
  const meta = categoryMeta[article.category];
  const accent = categoryAccent[article.category];

  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-[box-shadow,border-color] cursor-pointer ${accent.border}`}
    >
      <div className={`h-1 bg-gradient-to-r ${accent.bar}`} />

      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div className={`w-14 h-14 rounded-2xl ${accent.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
            <ArticleIcon name={article.icon} className={`w-7 h-7 ${meta.color}`} />
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
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {article.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-[gap]">
              읽기 <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
});
