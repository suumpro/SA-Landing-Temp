import type { TimeSlot } from '@/lib/timeUtils';

export interface BriefingTip {
  text: string;
  action: string;
}

export interface BriefingEvent {
  icon: string;
  title: string;
  detail: string;
  impact: string;
}

export interface BriefingScenario {
  weather: { temp: string; warning: string; icon: string };
  tips: BriefingTip[];
  events: BriefingEvent[];
  checklist: string[];
  weekPreview: string[];
}

export interface ValueProp {
  before: string;
  after: string;
  metric: string;
}

export interface AreaType {
  id: string;
  icon: string;
  label: string;
  location: string;
  scenarios: Record<TimeSlot, BriefingScenario>;
  valueProps: ValueProp[];
}

export const areaTypes: AreaType[] = [
  // ─────────────────────────────────────
  // 🏢 오피스 상권
  // ─────────────────────────────────────
  {
    id: 'office',
    icon: '🏢',
    label: '오피스',
    location: '서울 강남구 테헤란로',
    scenarios: {
      morning: {
        weather: {
          temp: '3°C → 11°C',
          warning: '오후 5시 이후 기온 급락, 영하권 진입',
          icon: '🌤️',
        },
        tips: [
          { text: '오늘 화요일, 도시락 수요 +20%', action: '삼각김밥·도시락 평소보다 +20% 준비 추천' },
          { text: '오전 회의 시즌, 커피 수요 증가', action: '원두커피·캔커피 전면 배치' },
          { text: '저녁 기온 급락 예상', action: '핫팩·따뜻한 음료 저녁용 준비' },
        ],
        events: [
          { icon: '🏢', title: '강남역 채용박람회', detail: '오전 10시~ · 예상 3,000명', impact: '점심시간 도시락·음료 수요 급증' },
          { icon: '💼', title: '삼성동 컨퍼런스', detail: '오후 2시~ · 코엑스', impact: '오후 간식·커피 수요 증가' },
        ],
        checklist: [
          '도시락·삼각김밥 발주량 확인 (화요일 +20%)',
          '커피 음료 냉장고 앞쪽 배치',
          '유통기한 임박 상품 확인 (D-3 이내)',
          '점심 피크 대비 계산대 정리',
        ],
        weekPreview: [
          '수요일: 삼성동 IT 세미나 (500명)',
          '목요일: 비 예보 60% - 우산 준비',
          '금요일: 불금 수요 대비 간식 강화',
        ],
      },
      afternoon: {
        weather: {
          temp: '현재 11°C · 최고 도달',
          warning: '3시 이후 기온 하락 시작, 저녁 영하',
          icon: '🌤️',
        },
        tips: [
          { text: '점심 피크 지남, 오후 간식 타임', action: '초콜릿·과자류 눈에 띄는 곳으로' },
          { text: '회의 후 커피 수요 증가 중', action: '아이스커피 재고 확인' },
          { text: '야근 예상 인원 多', action: '컵라면·삼각김밥 저녁용 확보' },
        ],
        events: [
          { icon: '💼', title: '삼성동 컨퍼런스 진행 중', detail: '오후 2시~6시 · 코엑스', impact: '퇴근 시간 음료·간식 수요' },
        ],
        checklist: [
          '오후 간식류 진열 상태 확인',
          '저녁 야근 수요 대비 즉석식품 확인',
          '냉장고 온도 체크 (기준: 5°C 이하)',
          '퇴근 시간 계산대 혼잡 대비',
        ],
        weekPreview: [
          '내일 수요일: IT 세미나 점심 수요',
          '금요일: 불금 + 기온 회복, 음료 수요 UP',
        ],
      },
      evening: {
        weather: {
          temp: '현재 4°C · 최저 -2°C 예상',
          warning: '내일 아침 영하 3°C, 출근길 체감 -8°C',
          icon: '🌙',
        },
        tips: [
          { text: '야근 수요 피크 (7시~10시)', action: '컵라면·커피 전면 배치' },
          { text: '내일 수요일, 주중 피크', action: '도시락 넉넉히 준비 추천 (주중 최대 수요일)' },
          { text: '내일 아침 영하, 출근길 수요', action: '따뜻한 음료·핫팩 입구 배치 준비' },
        ],
        events: [
          { icon: '🌃', title: '강남 야근 밀집 시간대', detail: '오후 7시~10시', impact: '즉석식품·커피 수요 +60%' },
        ],
        checklist: [
          '내일 도시락·삼각김밥 발주 목록 확인하기',
          '야근 수요 즉석식품 재고 확인',
          '따뜻한 음료 재고 확인',
          '내일 알바 스케줄 확인',
        ],
        weekPreview: [
          '내일 수요일: 주중 도시락 수요 최대',
          '목요일: 비 60% → 우산 발주 검토',
        ],
      },
    },
    valueProps: [
      {
        before: '월요일 아침 도시락 10개 부족',
        after: '요일별 수요 예측으로 정확한 준비',
        metric: '발주 실수 -40%',
      },
      {
        before: '야근 수요 놓쳐서 저녁 매출 손실',
        after: '저녁 피크 사전 준비로 매출 확보',
        metric: '저녁 매출 +25%',
      },
      {
        before: '주변 행사 몰라서 재고 부족',
        after: '행사 사전 알림으로 놓치지 않는 준비',
        metric: '기회 매출 +15%',
      },
    ],
  },

  // ─────────────────────────────────────
  // 🏘️ 주택 상권
  // ─────────────────────────────────────
  {
    id: 'residential',
    icon: '🏘️',
    label: '주택',
    location: '서울 송파구 잠실동',
    scenarios: {
      morning: {
        weather: {
          temp: '5°C → 9°C',
          warning: '오후 2시부터 비 시작, 예상 강수량 15mm',
          icon: '🌂',
        },
        tips: [
          { text: '비 예보, 외출 감소 예상', action: '우유·빵·생필품 재고 +30% 권장' },
          { text: '등교 시간 아이 간식 수요', action: '요거트·주스 앞쪽 배치' },
          { text: '비 대비 우산 수요 급증', action: '비닐우산 입구 진열' },
        ],
        events: [
          { icon: '🏫', title: '잠실초 운동회 취소 가능', detail: '비 예보로 실내 수업 전환', impact: '하교 시간 간식 수요 분산' },
          { icon: '🛒', title: '잠실 롯데마트 휴무일', detail: '오늘 정기 휴무', impact: '대체 장보기 수요 증가 예상' },
        ],
        checklist: [
          '우유·빵 재고 확인 (평소보다 +30% 추천)',
          '비닐우산 재고 확인 및 입구 배치',
          '바닥 미끄럼 주의 표시판 준비',
          '유통기한 임박 유제품 확인',
        ],
        weekPreview: [
          '내일 맑음, 외출 수요 회복 예상',
          '토요일: 잠실 한강공원 벚꽃축제',
          '일요일: 가족 나들이 간식 수요 UP',
        ],
      },
      afternoon: {
        weather: {
          temp: '현재 8°C · 비 진행 중',
          warning: '저녁까지 비 계속, 기온 더 떨어짐',
          icon: '🌧️',
        },
        tips: [
          { text: '하교 시간 (3시~5시) 간식 피크', action: '아이 간식·음료 눈에 띄게 배치' },
          { text: '비 오는 오후, 실내 체류 증가', action: '즉석식품·간편식 보충' },
          { text: '주부 장보기 시간대', action: '생필품·세제류 진열 확인' },
        ],
        events: [
          { icon: '🏫', title: '잠실초 하교 시간', detail: '오후 3시 하교', impact: '간식·문구류 수요 증가' },
        ],
        checklist: [
          '아이 간식류 진열 상태 확인',
          '우산 재고 확인 (오후 수요 계속)',
          '생필품 코너 정리',
          '저녁 장보기 대비 즉석식품 확인',
        ],
        weekPreview: [
          '내일: 맑음, 산책·외출 수요 회복',
          '주말: 가족 나들이 간식 수요',
        ],
      },
      evening: {
        weather: {
          temp: '현재 6°C · 비 그침',
          warning: '내일 맑음, 기온 12°C까지 상승 예상',
          icon: '🌙',
        },
        tips: [
          { text: '저녁 장보기 피크 (6시~9시)', action: '즉석밥·반찬·라면 전면 배치' },
          { text: '내일 맑음, 외출 수요 증가 예상', action: '음료·간식 넉넉히 준비 추천' },
          { text: '주말 대비 가족 간식 확보', action: '과자·음료 패밀리팩 진열' },
        ],
        events: [
          { icon: '🌳', title: '내일 잠실 한강공원 행사', detail: '토요일 오전 10시~', impact: '도시락·음료·돗자리 수요' },
        ],
        checklist: [
          '내일 발주 목록 최종 확인',
          '즉석식품 재고 확인 (저녁 수요)',
          '생필품 부족분 체크',
          '주말 알바 스케줄 확인',
        ],
        weekPreview: [
          '토요일: 한강공원 행사 → 간식 수요 UP',
          '일요일: 가족 외출 피크',
        ],
      },
    },
    valueProps: [
      {
        before: '비 오는 날 우유·빵 재고 부족',
        after: '날씨 기반 자동 재고 조절 추천',
        metric: '폐기 손실 -30%',
      },
      {
        before: '하교 시간 아이 간식 품절',
        after: '시간대별 수요 패턴으로 사전 준비',
        metric: '오후 매출 +20%',
      },
      {
        before: '마트 휴무일 대체 수요 놓침',
        after: '주변 매장 휴무 정보로 기회 포착',
        metric: '기회 매출 +15%',
      },
    ],
  },

  // ─────────────────────────────────────
  // 🎓 대학가 상권
  // ─────────────────────────────────────
  {
    id: 'university',
    icon: '🎓',
    label: '대학가',
    location: '서울 관악구 신림동',
    scenarios: {
      morning: {
        weather: {
          temp: '-3°C → 2°C',
          warning: '한파 주의보 발령 중, 체감온도 -10°C',
          icon: '❄️',
        },
        tips: [
          { text: '기말고사 D-3, 에너지드링크 폭증', action: '에너지드링크 재고 +150% 확보' },
          { text: '한파 주의보, 따뜻한 음료 수요', action: '핫초코·커피 전면 배치' },
          { text: '새벽 공부 학생 도시락 수요', action: '삼각김밥·도시락 아침 보충' },
        ],
        events: [
          { icon: '📚', title: '서울대 기말고사 기간', detail: '12/15~12/21 (1주일)', impact: '에너지드링크 +150%, 커피 +80%, 간식 +60%' },
          { icon: '🏛️', title: '신림역 고시촌 시험 시즌', detail: '연말 자격증 시험 집중', impact: '야간 즉석식품 수요 +80%' },
        ],
        checklist: [
          '에너지드링크 재고 확인 (부족 시 즉시 보충 추천)',
          '핫팩·손난로 입구 대량 진열',
          '커피 음료 (캔·병·컵) 전 종류 확인',
          '야간 알바 스케줄 확인 (새벽 2시까지)',
        ],
        weekPreview: [
          '시험 기간 전체 (D-3 ~ D+4): 야간 매출 +100%',
          '금요일: 시험 종료 후 회식 수요 급증',
          '토요일: 종강 파티 → 주류 수요',
        ],
      },
      afternoon: {
        weather: {
          temp: '현재 1°C · 바람 강함',
          warning: '체감온도 -8°C, 외출 최소화 권장',
          icon: '❄️',
        },
        tips: [
          { text: '도서관 피크타임 (2시~6시)', action: '간식·커피 수요 급증 대비' },
          { text: '시험 스트레스 → 단 것 수요', action: '초콜릿·사탕·젤리 코너 확대' },
          { text: 'MT 시즌 준비 시작', action: '대량 구매 수요 대비 (과자·음료)' },
        ],
        events: [
          { icon: '📚', title: '서울대 도서관 만석', detail: '오후 피크타임', impact: '편의점 간식 구매 빈도 증가' },
        ],
        checklist: [
          '간식류 보충 (초콜릿·견과류·젤리)',
          '커피 음료 냉장고 재보충',
          '에너지드링크 진열대 정리',
          '난방기 작동 상태 점검',
        ],
        weekPreview: [
          '시험 기간 남은 기간: 야간 수요 지속',
          '금요일 시험 종료: 회식 수요 전환',
        ],
      },
      evening: {
        weather: {
          temp: '현재 -2°C · 최저 -7°C',
          warning: '내일 아침 -5°C, 한파 지속',
          icon: '🌙',
        },
        tips: [
          { text: '야식 타임 진입 (9시~새벽 2시)', action: '라면·삼각김밥·도시락 전면 배치' },
          { text: '새벽 공부 학생 매출 +100%', action: '야간 인력 보강 검토' },
          { text: '내일도 시험, 에너지드링크 지속', action: '내일 아침 입고 분량 확인' },
        ],
        events: [
          { icon: '📚', title: '시험 기간 야간 학습', detail: '도서관·스터디카페 새벽까지', impact: '새벽 2시까지 매출 +100%' },
        ],
        checklist: [
          '야간 즉석식품 재고 최종 확인',
          '내일 에너지드링크 발주 목록 확인하기',
          '새벽 알바 인수인계 사항 정리',
          '난방비 절약 위해 자동문 점검',
        ],
        weekPreview: [
          '시험 D-2: 내일도 야간 매출 최대',
          '금요일: 시험 종료 → 주류 수요 폭증',
        ],
      },
    },
    valueProps: [
      {
        before: '시험 기간 에너지드링크 품절 반복',
        after: '학사 일정 기반 수요 예측으로 미리 준비',
        metric: '품절 손실 -60%',
      },
      {
        before: '방학 때 재고 과잉으로 폐기',
        after: '시즌별 수요 예측으로 재고 최적화',
        metric: '폐기 손실 -35%',
      },
      {
        before: '야간 인력 부족으로 매출 기회 놓침',
        after: '수요 예측 기반 인력 스케줄 추천',
        metric: '야간 매출 +40%',
      },
    ],
  },

  // ─────────────────────────────────────
  // 🎤 유흥가 상권
  // ─────────────────────────────────────
  {
    id: 'entertainment',
    icon: '🎤',
    label: '유흥가',
    location: '서울 마포구 홍대입구',
    scenarios: {
      morning: {
        weather: {
          temp: '8°C → 15°C',
          warning: '오후부터 맑고 포근, 야외 활동 증가',
          icon: '☀️',
        },
        tips: [
          { text: '어젯밤 주류 재고 소진 확인', action: '맥주·소주 재고 체크 후 보충 추천' },
          { text: '금요일, 저녁부터 유동인구 +80%', action: '주류·안주 평소보다 2배 넉넉히 준비 추천' },
          { text: '오후 맑음, 버스킹 이벤트 예상', action: '음료·간식 야외 수요 대비' },
        ],
        events: [
          { icon: '🎵', title: '홍대 K-POP 콘서트', detail: '오후 7시 · 예상 관객 15,000명', impact: '저녁 음료·간식 수요 폭증' },
          { icon: '🎸', title: '홍대 거리 버스킹 페스티벌', detail: '오후 3시~ · 걷고싶은거리', impact: '오후부터 유동인구 증가' },
        ],
        checklist: [
          '맥주·소주 재고 확인 (부족 시 즉시 보충 추천)',
          '안주류 (마른안주·견과류) 대량 준비',
          '얼음 재고 확인 (금요일 2배)',
          '야간 알바 추가 배치 확인 (새벽 3시까지)',
        ],
        weekPreview: [
          '토요일: 홍대 플리마켓 + 클럽 이벤트 3건',
          '일요일: 브런치 수요 → 샌드위치·주스',
          '다음 주 금: 대형 페스티벌 (3일간)',
        ],
      },
      afternoon: {
        weather: {
          temp: '현재 14°C · 맑음',
          warning: '야외 활동 최적, 유동인구 증가 중',
          icon: '☀️',
        },
        tips: [
          { text: '버스킹 시작, 유동인구 증가 중', action: '음료·간식 앞쪽 진열' },
          { text: '콘서트 전 대기줄 형성 예상 (5시~)', action: '간편식·음료 대량 준비' },
          { text: '금요일 저녁 주류 수요 폭증 예상', action: '냉장 맥주 풀가동 확인' },
        ],
        events: [
          { icon: '🎸', title: '버스킹 페스티벌 진행 중', detail: '오후 3시~ · 유동인구 증가', impact: '음료·간식 구매 빈도 UP' },
          { icon: '🎵', title: '콘서트 대기줄 형성 예상', detail: '오후 5시부터 줄서기 시작', impact: '대기 중 간편식·음료 수요' },
        ],
        checklist: [
          '냉장 맥주 풀가동 상태 확인',
          '음료 냉장고 재보충',
          '야간 대비 안주류 진열 확대',
          '일회용컵·빨대 재고 확인',
        ],
        weekPreview: [
          '오늘 밤: 콘서트 + 불금 = 최대 매출 예상',
          '내일: 플리마켓 + 클럽 이벤트',
        ],
      },
      evening: {
        weather: {
          temp: '현재 12°C · 맑음',
          warning: '새벽 기온 6°C, 야외 체류 시 겉옷 필요',
          icon: '🌙',
        },
        tips: [
          { text: '콘서트 끝남 (9시), 2차 수요 폭발', action: '맥주·소주·안주 전면 배치' },
          { text: '클럽 입장 시간대 (11시~)', action: '물·에너지드링크·껌 준비' },
          { text: '새벽 3시까지 매출 피크 지속', action: '즉석식품·라면 야식 수요 대비' },
        ],
        events: [
          { icon: '🎵', title: '콘서트 종료 후 2차', detail: '오후 9시 이후 유동인구 최대', impact: '주류 +200%, 안주 +150%' },
          { icon: '🎤', title: '클럽 이벤트 3건 동시', detail: '오후 11시~ · 새벽 4시', impact: '새벽 매출 +120%' },
        ],
        checklist: [
          '주류 재고 최종 확인 (부족 시 즉시 보충)',
          '안주류·얼음 재고 확인',
          '새벽 알바 인수인계 완료',
          '내일 오전 보충 필요 목록 정리하기',
        ],
        weekPreview: [
          '내일 토요일: 플리마켓 + 클럽 3건 = 불토',
          '일요일: 해장 수요 → 라면·음료·숙취해소제',
        ],
      },
    },
    valueProps: [
      {
        before: '금요일 밤 맥주 품절, 매출 기회 손실',
        after: '요일+이벤트 기반 주류 수요 예측으로 미리 준비',
        metric: '주말 매출 +35%',
      },
      {
        before: '콘서트 있는 줄 모르고 평소대로 발주',
        after: '주변 이벤트 사전 알림으로 선제 대응',
        metric: '이벤트 매출 +50%',
      },
      {
        before: '새벽 인력 부족으로 서비스 저하',
        after: '피크타임 예측으로 최적 인력 배치',
        metric: '고객 불만 -40%',
      },
    ],
  },
];
