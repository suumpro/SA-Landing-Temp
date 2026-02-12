export type PlanTier = 'free' | 'standard' | 'premium' | 'enterprise';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: PlanTier;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'free',
    name: '무료',
    price: '0원',
    description: '주간 뉴스레터로 시작하기',
    features: [
      { text: '주간 뉴스레터 (주 1-2회)', included: true },
      { text: '업계 트렌드 요약', included: true },
      { text: '시즌별 준비 팁', included: true },
      { text: '매일 브리핑', included: false },
      { text: 'POS 연동', included: false },
    ],
    cta: '무료 시작',
    ctaLink: '/#faq',
  },
  {
    id: 'standard',
    name: '스탠다드',
    price: '1,000원',
    priceNote: '/월',
    description: '매일 아침 브리핑 받기',
    features: [
      { text: '주간 뉴스레터', included: true },
      { text: '매일 모닝 브리핑', included: true },
      { text: '날씨/이벤트 알림', included: true },
      { text: '운영 체크리스트', included: true },
      { text: 'POS 연동', included: false },
    ],
    cta: '시작하기',
    ctaLink: '/contact?plan=standard',
    popular: true,
  },
  {
    id: 'premium',
    name: '고급형',
    price: '9,900원',
    priceNote: '/월',
    description: '데이터 기반 의사결정',
    features: [
      { text: '스탠다드 모든 기능', included: true },
      { text: 'POS 매출 연동', included: true },
      { text: '위치 기반 심화 분석', included: true },
      { text: '경쟁점 동향 분석', included: true },
      { text: '매출 예측 리포트', included: true },
    ],
    cta: '시작하기',
    ctaLink: '/contact?plan=premium',
  },
  {
    id: 'enterprise',
    name: '엔터프라이즈',
    price: '상담',
    description: '다점포 맞춤 솔루션',
    features: [
      { text: '고급형 모든 기능', included: true },
      { text: '다점포 통합 관리', included: true },
      { text: '맞춤형 대시보드', included: true },
      { text: '전담 매니저 지원', included: true },
      { text: 'API 연동 지원', included: true },
    ],
    cta: '상담 신청',
    ctaLink: '/contact?plan=enterprise',
  },
];

export const comparisonFeatures = [
  {
    category: '콘텐츠',
    features: [
      { name: '주간 뉴스레터', free: true, standard: true, premium: true, enterprise: true },
      { name: '매일 모닝 브리핑', free: false, standard: true, premium: true, enterprise: true },
      { name: '시즌 캘린더', free: '월간', standard: '주간+일간', premium: '주간+일간', enterprise: '주간+일간' },
    ],
  },
  {
    category: '알림',
    features: [
      { name: '날씨 변화 알림', free: false, standard: true, premium: true, enterprise: true },
      { name: '지역 이벤트 알림', free: false, standard: true, premium: true, enterprise: true },
      { name: '경쟁점 동향', free: false, standard: false, premium: true, enterprise: true },
    ],
  },
  {
    category: '분석',
    features: [
      { name: 'POS 매출 연동', free: false, standard: false, premium: true, enterprise: true },
      { name: '위치 기반 심화 분석', free: false, standard: false, premium: true, enterprise: true },
      { name: '매출 예측', free: false, standard: false, premium: true, enterprise: true },
    ],
  },
  {
    category: '지원',
    features: [
      { name: '이메일 지원', free: true, standard: true, premium: true, enterprise: true },
      { name: '우선 지원', free: false, standard: false, premium: true, enterprise: true },
      { name: '전담 매니저', free: false, standard: false, premium: false, enterprise: true },
    ],
  },
];
