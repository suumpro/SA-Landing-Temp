import type { Article } from '../types';

export const article: Article = {
  slug: '2026-w15-weekly',
  title: '4월 2주차: 선거일 공휴일 특수',
  excerpt: '4월 8일 선거일 공휴일 효과, 주중 레저 수요, 간식·음료 준비 포인트.',
  category: 'weekly',
  date: '2026-04-06',
  readTime: 3,
  tags: ['공휴일', '선거', '레저'],
  icon: 'Newspaper',
  content: [
    { type: 'callout', variant: 'info', text: '이 글은 STOREAGENT가 매주 발행하는 주간 브리핑 하이라이트입니다.' },
    { type: 'heading', text: '수요일 공휴일 — 주중 레저 특수' },
    { type: 'paragraph', text: '이번 주 수요일(4/8)이 선거일 공휴일입니다. 주중 공휴일은 나들이·쇼핑 수요를 만들어 편의점에도 영향을 줍니다. 특히 주거지역 매장은 "집 근처 편의점" 수요가 증가합니다.' },
    { type: 'stat', label: '주중 공휴일 매출', value: '+18%', change: '일반 평일 대비' },
    { type: 'stat', label: '간식·음료 카테고리', value: '+25%', change: '레저 수요' },
    { type: 'tip', title: '공휴일 대응', text: '화요일에 간식·음료 발주를 +20% 올리고, 도시락은 주말 수준으로 조정하세요. 공휴일 다음 날 목요일은 복귀 수요로 커피·간편식이 올라갑니다.' },
    { type: 'divider' },
    { type: 'heading', text: '이번 주 체크리스트' },
    { type: 'checklist', items: [
      '화요일: 수요일 공휴일 대비 간식·음료 +20%',
      '도시락 발주 주말 수준으로 조정',
      '목요일: 복귀 수요 대비 커피·간편식 보충',
      '벚꽃 시즌 마무리 — 나들이 용품 재고 소진',
      '중간고사 시즌 사전 준비 시작',
    ]},
  ],
};
