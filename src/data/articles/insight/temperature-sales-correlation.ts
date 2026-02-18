import type { Article } from '../types';

export const article: Article = {
  slug: 'temperature-sales-correlation',
  title: '기온 1도 변화가 매출에 미치는 영향',
  excerpt: '기온이 1도 오르거나 내릴 때 어떤 카테고리 매출이 얼마나 변하는지, 3년간 데이터를 분석했습니다.',
  category: 'insight',
  date: '2026-01-22',
  readTime: 4,
  tags: [
    "기온",
    "데이터분석",
    "카테고리전략",
  ],
  icon: 'Thermometer',
  content: [
    {
      type: 'paragraph',
      text: '편의점 매출과 기온은 강한 상관관계를 보입니다. 3년간 1,200개 매장의 POS 데이터를 분석한 결과, 기온 1도 변화만으로도 특정 카테고리 매출이 2~5% 변동합니다. 이 패턴을 알면 기상 예보만으로 발주 전략을 세울 수 있습니다.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '기온 구간별 핵심 카테고리',
    },
    {
      type: 'paragraph',
      text: '기온에 따라 "주력 카테고리"가 완전히 달라집니다. 각 구간에서 집중해야 할 상품군을 정리했습니다.',
    },
    {
      type: 'stat',
      label: '영하 5도 이하 (혹한)',
      value: '핫팩 +200%',
      change: '보온음료·국물류 집중',
    },
    {
      type: 'stat',
      label: '0~10도 (쌀쌀)',
      value: '따뜻한 음료 +65%',
      change: '도시락·라면 강세',
    },
    {
      type: 'stat',
      label: '10~20도 (쾌적)',
      value: '균형 구간',
      change: '간식·샌드위치 인기',
    },
    {
      type: 'stat',
      label: '20~30도 (더위)',
      value: '아이스 음료 +55%',
      change: '빙과류·냉면 급증',
    },
    {
      type: 'stat',
      label: '30도 이상 (폭염)',
      value: '얼음컵 +300%',
      change: '음료 전체 +40%',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '기온 1도당 매출 변화율',
    },
    {
      type: 'tip',
      title: '아이스 음료',
      text: '기온 1도 상승 시 매출 +3.2%. 특히 25도 이상에서는 1도당 +5.1%로 가속됩니다.',
    },
    {
      type: 'tip',
      title: '따뜻한 음료',
      text: '기온 1도 하락 시 매출 +2.8%. 5도 이하에서는 1도당 +4.3%로 가속됩니다.',
    },
    {
      type: 'tip',
      title: '아이스크림·빙과류',
      text: '기온 1도 상승 시 매출 +4.5%. 편의점 카테고리 중 기온 민감도가 가장 높습니다.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '실전 활용법',
    },
    {
      type: 'paragraph',
      text: '기상청 주간 예보를 확인하고, 기온 변화가 5도 이상 예상되면 해당 카테고리 발주를 조정하세요. 예를 들어 내일 기온이 5도 떨어진다면 따뜻한 음료를 +14%(2.8% × 5) 올리는 식입니다.',
    },
    {
      type: 'callout',
      variant: 'success',
      text: 'STOREAGENT 브리핑은 기온 변화와 매출 영향을 자동으로 계산해서 매일 아침 알려드립니다. 기상청을 따로 확인할 필요 없이, 브리핑만 보시면 됩니다.',
    },
  ],
};
