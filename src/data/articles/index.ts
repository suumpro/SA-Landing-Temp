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
import { article as w11 } from './weekly/2026-w11';
import { article as w12 } from './weekly/2026-w12';
import { article as w13 } from './weekly/2026-w13';
import { article as w14 } from './weekly/2026-w14';
import { article as w15 } from './weekly/2026-w15';
import { article as w16 } from './weekly/2026-w16';
import { article as w17 } from './weekly/2026-w17';
import { article as w18 } from './weekly/2026-w18';
import { article as w19 } from './weekly/2026-w19';

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
import { article as cherryBlossom } from './season/cherry-blossom-guide';
import { article as childrensDay } from './season/childrens-day-prep';
import { article as examSeason } from './season/exam-season-strategy';
import { article as sportsEvent } from './season/sports-event-guide';
import { article as valentinesDay } from './season/valentines-day-guide';
import { article as summerPeak } from './season/summer-peak-operation';
import { article as newYearRes } from './season/new-year-resolution-sales';
import { article as monsoonAutumn } from './season/monsoon-to-autumn';
import { article as winterHeating } from './season/winter-peak-heating';

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
import { article as impulseBuying } from './insight/impulse-buying-data';
import { article as paymentTrends } from './insight/payment-method-trends';
import { article as beverageDeep } from './insight/beverage-sales-deep-dive';
import { article as lateNight } from './insight/late-night-customer-profile';
import { article as seasonalWaste } from './insight/seasonal-waste-pattern';
import { article as basketSize } from './insight/basket-size-analysis';
import { article as promoRoi } from './insight/promotion-roi-analysis';
import { article as footTraffic } from './insight/foot-traffic-pattern';
import { article as repeatCustomer } from './insight/repeat-customer-value';

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
import { article as cctvLoss } from './tip/cctv-loss-prevention';
import { article as deliveryPlatform } from './tip/delivery-platform-tips';
import { article as seasonalMenu } from './tip/seasonal-menu-planning';
import { article as multiStore } from './tip/multi-store-management';
import { article as franchiseNego } from './tip/franchise-negotiation';
import { article as snsMarketing } from './tip/sns-marketing-basics';
import { article as rainyDayOp } from './tip/rainy-day-operation';
import { article as summerSafety } from './tip/summer-food-safety';
import { article as openingMonth } from './tip/opening-first-month';

// ── Articles ──────────────────────────────────

export const articles: Article[] = [
  // Weekly
  w02, w03, w04, w05, w06, w07, w08, w09, w10,
  w11, w12, w13, w14, w15, w16, w17, w18, w19,
  // Season
  winterSales, springPrep, summerPrep, holidayGuide, autumnReady, backToSchool,
  rainySeason, yearEndParty, chuseokPrep,
  cherryBlossom, childrensDay, examSeason, sportsEvent, valentinesDay, summerPeak,
  newYearRes, monsoonAutumn, winterHeating,
  // Insight
  rainyDay, weekdayPattern, eventImpact, tempCorrelation, lunchRush, newProduct,
  ageGroup, weekendWeekday, locationType,
  impulseBuying, paymentTrends, beverageDeep, lateNight, seasonalWaste, basketSize,
  promoRoi, footTraffic, repeatCustomer,
  // Tip
  posWaste, nightShift, displayBasics, complaint, inventory, cleanliness,
  partTimer, promo, energyCost,
  cctvLoss, deliveryPlatform, seasonalMenu, multiStore, franchiseNego, snsMarketing,
  rainyDayOp, summerSafety, openingMonth,
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
  // 1. 명시적 relatedSlugs 우선
  const explicit = (article.relatedSlugs ?? [])
    .map(getArticleBySlug)
    .filter((a): a is Article => !!a);

  // 2. 태그 겹침 기반 스코어링 (크로스 카테고리)
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

export type { Article, ArticleCategory, ArticleBlock } from './types';
