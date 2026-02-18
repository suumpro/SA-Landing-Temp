import type { Article } from '../types';

export const article: Article = {
  slug: 'year-end-party-guide',
  title: '연말 시즌 공략: 11~12월 매출 극대화 전략',
  excerpt: '크리스마스·연말 모임 주류 특수부터 겨울 간식, 시즌 한정 상품까지 연말 매출 전략.',
  category: 'season',
  date: '2026-01-02',
  readTime: 5,
  tags: [
    "연말",
    "크리스마스",
    "주류특수",
  ],
  icon: 'PartyPopper',
  content: [
    {
      type: 'paragraph',
      text: '11~12월은 편의점 연간 매출의 피크입니다. 연말 모임, 크리스마스, 연말정산 보너스 등이 겹치면서 주류·안주·디저트 매출이 폭증합니다. 11월부터 단계적으로 준비하면 연말 매출을 극대화할 수 있습니다.',
    },
    {
      type: 'stat',
      label: '12월 전체 매출',
      value: '+35%',
      change: '연 평균 대비',
    },
    {
      type: 'stat',
      label: '크리스마스 주간 주류',
      value: '+180%',
      change: '평소 대비',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '11월: 사전 준비',
    },
    {
      type: 'paragraph',
      text: '빼빼로데이(11/11)가 첫 번째 이벤트입니다. 빼빼로·초콜릿 기프트 세트를 11월 첫 주부터 진열하세요. 11월 중순부터는 겨울 간식(호빵, 붕어빵, 핫초코)을 본격 입고합니다.',
    },
    {
      type: 'stat',
      label: '빼빼로데이 과자 매출',
      value: '+350%',
      change: '평소 대비',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '12월: 크리스마스 & 연말 모임',
    },
    {
      type: 'tip',
      title: '크리스마스 전략 (12/20~25)',
      text: '케이크·디저트 예약 판매를 12월 초부터 시작하세요. 와인·샴페인을 별도 코너로 구성하고, "크리스마스 파티 세트" POP를 붙이면 객단가가 +40% 올라갑니다.',
    },
    {
      type: 'tip',
      title: '연말 모임 전략 (12/26~31)',
      text: '크리스마스 이후에도 연말 모임이 이어집니다. 소주·맥주·안주류를 충분히 유지하세요. 31일 밤에는 카운트다운 특수로 주류 매출이 연중 최고점을 찍습니다.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '연말 시즌 체크리스트',
    },
    {
      type: 'checklist',
      items: [
        "11/1 빼빼로·초콜릿 기프트 세트 진열",
        "11/15 겨울 간식(호빵·핫초코) 입고 시작",
        "12/1 크리스마스 케이크 예약 오픈",
        "12/15 와인·샴페인 별도 코너 구성",
        "12/20 주류·안주 발주 +80%",
        "12/30 카운트다운 특수 대비 최종 발주",
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'STOREAGENT는 연말 시즌 2주 전부터 이벤트별 맞춤 브리핑을 제공합니다. 빼빼로데이부터 크리스마스, 새해 카운트다운까지 놓치지 마세요.',
    },
  ],
};
