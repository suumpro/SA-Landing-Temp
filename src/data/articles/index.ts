import type { Article, ArticleCategory } from './types';

// ── Weekly ────────────────────────────────────
import { article as w02 } from './weekly/2026-w02';
import { article as w03 } from './weekly/2026-w03';
import { article as w04 } from './weekly/2026-w04';
import { article as w05 } from './weekly/2026-w05';
import { article as w06 } from './weekly/2026-w06';
import { article as w07 } from './weekly/2026-w07';
import { article as w08 } from './weekly/2026-w08';
import { article as w09 } from './weekly/2026-w09';
import { article as w10 } from './weekly/2026-w10';

// ── Season ────────────────────────────────────
import { article as winterSales } from './season/winter-sales-strategy';
import { article as springPrep } from './season/spring-prep-checklist';
import { article as summerPrep } from './season/summer-prep-guide';
import { article as holidayGuide } from './season/holiday-guide-2026';
import { article as autumnReady } from './season/autumn-ready-guide';
import { article as backToSchool } from './season/back-to-school-guide';
import { article as rainySeason } from './season/rainy-season-guide';
import { article as yearEndParty } from './season/year-end-party-guide';
import { article as chuseokPrep } from './season/chuseok-prep-guide';

// ── Insight ───────────────────────────────────
import { article as rainyDay } from './insight/rainy-day-sales-secret';
import { article as weekdayPattern } from './insight/weekday-sales-pattern';
import { article as eventImpact } from './insight/event-sales-impact';
import { article as tempCorrelation } from './insight/temperature-sales-correlation';
import { article as lunchRush } from './insight/lunch-rush-analysis';
import { article as newProduct } from './insight/new-product-sales-impact';
import { article as ageGroup } from './insight/age-group-purchase-pattern';
import { article as weekendWeekday } from './insight/weekend-vs-weekday';
import { article as locationType } from './insight/location-type-analysis';

// ── Tip ───────────────────────────────────────
import { article as posWaste } from './tip/pos-data-waste-reduction';
import { article as nightShift } from './tip/night-shift-optimization';
import { article as displayBasics } from './tip/store-display-basics';
import { article as complaint } from './tip/customer-complaint-handling';
import { article as inventory } from './tip/inventory-management-basics';
import { article as cleanliness } from './tip/store-cleanliness-sales';
import { article as partTimer } from './tip/part-timer-management';
import { article as promo } from './tip/promo-strategy-basics';
import { article as energyCost } from './tip/energy-cost-reduction';

// ── Articles ──────────────────────────────────

export const articles: Article[] = [
  // Weekly
  w02, w03, w04, w05, w06, w07, w08, w09, w10,
  // Season
  winterSales, springPrep, summerPrep, holidayGuide, autumnReady, backToSchool,
  rainySeason, yearEndParty, chuseokPrep,
  // Insight
  rainyDay, weekdayPattern, eventImpact, tempCorrelation, lunchRush, newProduct,
  ageGroup, weekendWeekday, locationType,
  // Tip
  posWaste, nightShift, displayBasics, complaint, inventory, cleanliness,
  partTimer, promo, energyCost,
];

// ── 유틸리티 함수 ──────────────────────────────

export function getAllArticles(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, limit);
}

export type { Article, ArticleCategory, ArticleBlock } from './types';
