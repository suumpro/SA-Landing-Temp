export type AreaId = 'office' | 'residential' | 'university' | 'entertainment';

export interface SalesTrendItem {
  category: string;
  amount: number;
  change: number;
  barPercent: number;
}

export interface SalesTrendData {
  totalSales: string;
  totalChange: number;
  items: SalesTrendItem[];
}

export interface ForecastDay {
  day: string;
  predicted: number;
  barPercent: number;
  isToday?: boolean;
  isPeak?: boolean;
}

export interface SalesForecastData {
  weekTotal: string;
  weekChange: number;
  peakDay: string;
  peakReason: string;
  days: ForecastDay[];
}

export interface OrderRecommendation {
  product: string;
  currentStock: number;
  recommended: number;
  reason: string;
  urgency: 'high' | 'medium' | 'low';
}

export interface OrderRecommendData {
  totalItems: number;
  estimatedSaving: string;
  items: OrderRecommendation[];
}

export interface CompetitorMetric {
  label: string;
  myValue: number;
  avgValue: number;
  unit: string;
  isHigherBetter: boolean;
}

export interface CompetitorData {
  radius: string;
  competitorCount: number;
  myRank: number;
  totalStores: number;
  metrics: CompetitorMetric[];
}

export interface POSAnalysis {
  salesTrend: SalesTrendData;
  salesForecast: SalesForecastData;
  orderRecommend: OrderRecommendData;
  competitor: CompetitorData;
}

export type POSAnalysisMap = Record<AreaId, POSAnalysis>;

export const posAnalysisData: POSAnalysisMap = {
  // ━━━ 오피스 상권 (강남 테헤란로) ━━━
  office: {
    salesTrend: {
      totalSales: '1,250만원',
      totalChange: 8.5,
      items: [
        { category: '도시락/삼각김밥', amount: 380, change: 12, barPercent: 100 },
        { category: '커피/음료', amount: 310, change: 5, barPercent: 82 },
        { category: '과자/간식', amount: 210, change: -3, barPercent: 55 },
        { category: '생활용품', amount: 180, change: 2, barPercent: 47 },
        { category: '유제품', amount: 170, change: 15, barPercent: 45 },
      ],
    },
    salesForecast: {
      weekTotal: '1,320만원',
      weekChange: 5.6,
      peakDay: '수요일',
      peakReason: '삼성동 IT 세미나 (500명)',
      days: [
        { day: '월', predicted: 175, barPercent: 70 },
        { day: '화', predicted: 190, barPercent: 76, isToday: true },
        { day: '수', predicted: 230, barPercent: 92, isPeak: true },
        { day: '목', predicted: 185, barPercent: 74 },
        { day: '금', predicted: 250, barPercent: 100 },
        { day: '토', predicted: 160, barPercent: 64 },
        { day: '일', predicted: 130, barPercent: 52 },
      ],
    },
    orderRecommend: {
      totalItems: 12,
      estimatedSaving: '18만원',
      items: [
        { product: '삼각김밥 (참치마요)', currentStock: 8, recommended: 25, reason: '수요일 세미나 도시락 수요 +40%', urgency: 'high' },
        { product: '캔커피 (레쓰비)', currentStock: 12, recommended: 36, reason: '오전 회의 시즌 커피 수요 증가', urgency: 'high' },
        { product: '핫팩 (손난로)', currentStock: 5, recommended: 20, reason: '저녁 기온 급락 예보', urgency: 'medium' },
        { product: '컵라면 (신라면)', currentStock: 15, recommended: 30, reason: '야근 수요 대비', urgency: 'low' },
      ],
    },
    competitor: {
      radius: '500m',
      competitorCount: 4,
      myRank: 2,
      totalStores: 5,
      metrics: [
        { label: '일평균 매출', myValue: 178, avgValue: 155, unit: '만원', isHigherBetter: true },
        { label: '객단가', myValue: 4800, avgValue: 4200, unit: '원', isHigherBetter: true },
        { label: '일 방문객', myValue: 371, avgValue: 342, unit: '명', isHigherBetter: true },
        { label: '폐기율', myValue: 2.1, avgValue: 3.8, unit: '%', isHigherBetter: false },
      ],
    },
  },

  // ━━━ 주택 상권 (송파 잠실동) ━━━
  residential: {
    salesTrend: {
      totalSales: '890만원',
      totalChange: 3.2,
      items: [
        { category: '유제품/빵', amount: 250, change: 18, barPercent: 100 },
        { category: '생활용품/세제', amount: 220, change: 5, barPercent: 88 },
        { category: '즉석식품/반찬', amount: 180, change: -2, barPercent: 72 },
        { category: '과자/음료', amount: 140, change: 8, barPercent: 56 },
        { category: '아이스크림', amount: 100, change: -15, barPercent: 40 },
      ],
    },
    salesForecast: {
      weekTotal: '950만원',
      weekChange: 3.4,
      peakDay: '토요일',
      peakReason: '잠실 한강공원 벚꽃축제',
      days: [
        { day: '월', predicted: 115, barPercent: 58 },
        { day: '화', predicted: 110, barPercent: 55, isToday: true },
        { day: '수', predicted: 120, barPercent: 60 },
        { day: '목', predicted: 125, barPercent: 63 },
        { day: '금', predicted: 135, barPercent: 68 },
        { day: '토', predicted: 200, barPercent: 100, isPeak: true },
        { day: '일', predicted: 145, barPercent: 73 },
      ],
    },
    orderRecommend: {
      totalItems: 9,
      estimatedSaving: '12만원',
      items: [
        { product: '우유 (서울우유 1L)', currentStock: 5, recommended: 20, reason: '롯데마트 휴무 대체 장보기 수요', urgency: 'high' },
        { product: '비닐우산', currentStock: 3, recommended: 15, reason: '오후 2시 비 시작 예보', urgency: 'high' },
        { product: '식빵 (삼립)', currentStock: 8, recommended: 18, reason: '아침 출근 수요 + 마트 휴무', urgency: 'medium' },
        { product: '요거트 (비요뜨)', currentStock: 10, recommended: 15, reason: '등교 시간 아이 간식', urgency: 'low' },
      ],
    },
    competitor: {
      radius: '500m',
      competitorCount: 2,
      myRank: 1,
      totalStores: 3,
      metrics: [
        { label: '일평균 매출', myValue: 127, avgValue: 108, unit: '만원', isHigherBetter: true },
        { label: '객단가', myValue: 5200, avgValue: 4800, unit: '원', isHigherBetter: true },
        { label: '일 방문객', myValue: 244, avgValue: 225, unit: '명', isHigherBetter: true },
        { label: '폐기율', myValue: 3.5, avgValue: 4.2, unit: '%', isHigherBetter: false },
      ],
    },
  },

  // ━━━ 대학가 상권 (관악 신림동) ━━━
  university: {
    salesTrend: {
      totalSales: '1,280만원',
      totalChange: 18.5,
      items: [
        { category: '에너지드링크', amount: 350, change: 85, barPercent: 100 },
        { category: '커피/음료', amount: 300, change: 30, barPercent: 86 },
        { category: '라면/즉석식품', amount: 280, change: 22, barPercent: 80 },
        { category: '과자/초콜릿', amount: 200, change: 35, barPercent: 57 },
        { category: '도시락/삼각김밥', amount: 150, change: 12, barPercent: 43 },
      ],
    },
    salesForecast: {
      weekTotal: '1,330만원',
      weekChange: 10.1,
      peakDay: '목요일',
      peakReason: '기말고사 D-1, 벼락치기 피크',
      days: [
        { day: '월', predicted: 160, barPercent: 65 },
        { day: '화', predicted: 180, barPercent: 73, isToday: true },
        { day: '수', predicted: 200, barPercent: 82 },
        { day: '목', predicted: 245, barPercent: 100, isPeak: true },
        { day: '금', predicted: 225, barPercent: 92 },
        { day: '토', predicted: 185, barPercent: 76 },
        { day: '일', predicted: 135, barPercent: 55 },
      ],
    },
    orderRecommend: {
      totalItems: 15,
      estimatedSaving: '20만원',
      items: [
        { product: '레드불 250ml', currentStock: 8, recommended: 45, reason: '기말고사 D-3, 에너지드링크 +85%', urgency: 'high' },
        { product: '핫초코 (스위스미스)', currentStock: 5, recommended: 25, reason: '한파 주의보, 체감 -10°C', urgency: 'high' },
        { product: '컵라면 (진라면)', currentStock: 20, recommended: 40, reason: '야식 타임 수요 +80%', urgency: 'medium' },
        { product: '초콜릿 (가나)', currentStock: 12, recommended: 25, reason: '시험 스트레스 단맛 수요', urgency: 'low' },
      ],
    },
    competitor: {
      radius: '500m',
      competitorCount: 5,
      myRank: 1,
      totalStores: 6,
      metrics: [
        { label: '일평균 매출', myValue: 183, avgValue: 155, unit: '만원', isHigherBetter: true },
        { label: '객단가', myValue: 3800, avgValue: 3200, unit: '원', isHigherBetter: true },
        { label: '일 방문객', myValue: 485, avgValue: 380, unit: '명', isHigherBetter: true },
        { label: '폐기율', myValue: 4.2, avgValue: 5.1, unit: '%', isHigherBetter: false },
      ],
    },
  },

  // ━━━ 유흥가 상권 (마포 홍대) ━━━
  entertainment: {
    salesTrend: {
      totalSales: '1,750만원',
      totalChange: 18.0,
      items: [
        { category: '맥주/소주', amount: 540, change: 30, barPercent: 100 },
        { category: '안주/마른안주', amount: 370, change: 25, barPercent: 69 },
        { category: '음료/에너지', amount: 320, change: 12, barPercent: 59 },
        { category: '라면/즉석식품', amount: 290, change: 35, barPercent: 54 },
        { category: '껌/사탕/기타', amount: 230, change: 8, barPercent: 43 },
      ],
    },
    salesForecast: {
      weekTotal: '1,700만원',
      weekChange: 7.7,
      peakDay: '토요일',
      peakReason: '홍대 K-POP 콘서트 (5,000명)',
      days: [
        { day: '월', predicted: 160, barPercent: 47 },
        { day: '화', predicted: 155, barPercent: 46, isToday: true },
        { day: '수', predicted: 180, barPercent: 53 },
        { day: '목', predicted: 225, barPercent: 66 },
        { day: '금', predicted: 305, barPercent: 90 },
        { day: '토', predicted: 340, barPercent: 100, isPeak: true },
        { day: '일', predicted: 335, barPercent: 99 },
      ],
    },
    orderRecommend: {
      totalItems: 18,
      estimatedSaving: '28만원',
      items: [
        { product: '카스 500ml (6캔)', currentStock: 10, recommended: 42, reason: '금요 콘서트 + 불금 주류 +150%', urgency: 'high' },
        { product: '마른안주 (오징어)', currentStock: 8, recommended: 25, reason: '2차 수요 안주 +120%', urgency: 'high' },
        { product: '얼음 (2kg)', currentStock: 5, recommended: 18, reason: '금요일 얼음 수요 2배', urgency: 'medium' },
        { product: '에너지드링크', currentStock: 15, recommended: 30, reason: '클럽 입장 전 사전 수요', urgency: 'low' },
      ],
    },
    competitor: {
      radius: '500m',
      competitorCount: 7,
      myRank: 3,
      totalStores: 8,
      metrics: [
        { label: '일평균 매출', myValue: 250, avgValue: 220, unit: '만원', isHigherBetter: true },
        { label: '객단가', myValue: 5500, avgValue: 4900, unit: '원', isHigherBetter: true },
        { label: '일 방문객', myValue: 490, avgValue: 430, unit: '명', isHigherBetter: true },
        { label: '폐기율', myValue: 3.0, avgValue: 3.5, unit: '%', isHigherBetter: false },
      ],
    },
  },
};
