import type { Article } from '../types';

export const article: Article = {
  slug: 'part-timer-management',
  title: '아르바이트 관리 노하우: 이직률 낮추는 5가지 방법',
  excerpt: '아르바이트 채용·교육·동기부여 전략. 이직률과 매출의 상관관계를 데이터로 분석.',
  category: 'tip',
  date: '2026-02-20',
  readTime: 4,
  tags: ['인력관리', '매출', '야간'],
  icon: 'UserCheck',
  content: [
    {
      type: 'paragraph',
      text: '편의점 아르바이트 평균 근속 기간은 4.2개월입니다. 잦은 이직은 교육 비용 증가, 서비스 품질 저하, 점주 피로 증가로 이어집니다. 반대로, 이직률이 낮은 매장은 매출도 높습니다.',
    },
    {
      type: 'stat',
      label: '평균 근속 기간',
      value: '4.2개월',
      change: '업계 평균',
    },
    {
      type: 'stat',
      label: '이직률 하위 20% 매장 매출',
      value: '+12%',
      change: '상위 대비',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '1. 첫 3일이 결정적',
    },
    {
      type: 'paragraph',
      text: '아르바이트 이직의 40%가 첫 1주 내에 발생합니다. 첫 3일간 체계적인 교육과 환영 분위기가 핵심입니다. 업무 매뉴얼을 준비하고, 첫 날은 옆에서 함께 일하세요.',
    },
    {
      type: 'tip',
      title: '첫 3일 체크리스트',
      text: 'Day 1: POS 결제 + 인사법. Day 2: 진열 보충 + 유통기한 체크. Day 3: 혼자 해보기 + 피드백. 이 3일이 6개월 근속을 결정합니다.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '2. 명확한 업무 매뉴얼',
    },
    {
      type: 'paragraph',
      text: '"알아서 해"가 아니라 "이렇게 해"를 알려주세요. A4 1장짜리 시간대별 체크리스트만 있어도 신입 교육 시간이 절반으로 줄어듭니다.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '3. 공정한 스케줄 관리',
    },
    {
      type: 'paragraph',
      text: '이직 사유 1위는 "불공정한 스케줄"입니다. 최소 2주 전에 스케줄을 확정하고, 급한 변경 시에는 반드시 동의를 구하세요.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '4. 소소한 인정과 보상',
    },
    {
      type: 'paragraph',
      text: '"잘했어"라는 한마디가 시급 500원 인상보다 효과가 큽니다. 매출 목표 달성 시 음료 1개, 생일에 간식 — 작은 인정이 충성도를 만듭니다.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      text: '5. 소통 채널 유지',
    },
    {
      type: 'paragraph',
      text: '단체 카카오톡방을 만들어 공지사항, 칭찬, 일정 변경을 공유하세요. 일방적 지시가 아닌 "소통"이 느껴지면 이직률이 크게 줄어듭니다.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'STOREAGENT 브리핑을 아르바이트 직원과 공유하면, 매일 해야 할 일이 명확해져 업무 효율과 만족도가 모두 올라갑니다.',
    },
  ],
};
