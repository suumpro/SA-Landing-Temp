import type { Article } from '../types';

export const article: Article = {
  slug: 'basket-size-analysis',
  title: '장바구니 분석: 함께 사는 상품 조합 TOP 10',
  excerpt: '편의점 동반구매 패턴 데이터로 보는 최적 진열 전략.',
  category: 'insight',
  date: '2026-02-15',
  readTime: 4,
  tags: ['고객분석', '진열', '데이터분석'],
  icon: 'ShoppingCart',
  content: [
    { type: 'callout', variant: 'info', text: '이 글은 STOREAGENT가 분석한 동반구매 POS 데이터를 기반으로 작성되었습니다.' },
    { type: 'heading', text: '함께 사면 매출이 오른다' },
    { type: 'paragraph', text: '편의점 고객의 평균 구매 품목 수는 2.3개입니다. 이 숫자를 2.8개로 올리면 객단가가 22% 상승합니다. 핵심은 \"자연스러운 동반구매\"를 유도하는 진열입니다. 데이터가 보여주는 TOP 10 동반구매 조합을 소개합니다.' },
    { type: 'stat', label: '평균 구매 품목 수', value: '2.3개', change: '전체 고객 평균' },
    { type: 'stat', label: '동반구매 시 객단가', value: '+22%', change: '단품 구매 대비' },
    { type: 'divider' },
    { type: 'heading', text: '동반구매 조합 TOP 10' },
    { type: 'paragraph', text: '1. 도시락 + 음료 (동반율 58%) — 가장 강력한 조합. 냉장고와 도시락 진열대를 가까이 배치하세요.\n2. 삼각김밥 + 컵라면 (동반율 45%) — 따뜻한 물과 함께 세트 진열.\n3. 맥주 + 안주(과자·견과) (동반율 52%) — 주류 코너 옆에 안주 배치.\n4. 커피 + 빵 (동반율 38%) — 아침 출근 시간대 핵심 조합.\n5. 아이스크림 + 음료 (동반율 32%) — 여름 시즌 필수.\n6. 라면 + 음료 (동반율 41%) — 조리 대기 중 음료 구매.\n7. 담배 + 커피 (동반율 48%) — 계산대 동선 활용.\n8. 도시락 + 디저트 (동반율 25%) — 식후 디저트 심리.\n9. 주류 + 얼음컵 (동반율 44%) — 여름 하이볼 트렌드.\n10. 빵 + 우유 (동반율 35%) — 간편 아침 식사.' },
    { type: 'tip', title: '동반구매 진열 원칙', text: '자주 함께 사는 상품은 시선 동선상 가까이 배치하세요. 물리적으로 가까울수록 동반구매율이 올라갑니다. 특히 도시락-음료, 맥주-안주는 반드시 인접 배치합니다.' },
    { type: 'callout', variant: 'success', text: 'STOREAGENT는 매장별 동반구매 패턴을 분석하여 최적 진열 배치를 추천합니다.' },
  ],
};
