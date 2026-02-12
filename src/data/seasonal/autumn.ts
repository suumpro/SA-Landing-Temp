import type { SeasonScenarios } from './types';

export const autumnScenarios: SeasonScenarios = {
  office: [
    {
      dayIndex: 0,
      theme: '월요일 추석 연휴 복귀',
      scenario: {
        weather: { temp: '14°C → 21°C', warning: '아침 쌀쌀, 낮 포근', icon: '🍂' },
        tips: [
          { text: '추석 연휴 후 월요병, 커피 수요 증가', action: '아메리카노·캔커피 2배 준비' },
          { text: '연휴 후 도시락 수요 +35%', action: '삼각김밥·도시락 충분히 준비' },
          { text: '환절기 감기 주의, 비타민 음료', action: '비타민음료·핫팩 입구 배치' },
        ],
        events: [
          { icon: '🏢', title: '테헤란로 IT기업 복귀 출근', detail: '오전 9시~ · 유동인구 +40%', impact: '아침 도시락·커피 수요 급증' },
        ],
        checklist: [
          '도시락·삼각김밥 발주량 +35% 확인',
          '커피 음료 전면 배치',
          '환절기 비타민음료 재고 확인',
          '점심 피크 대비 계산대 정리',
        ],
        weekPreview: [
          '화요일: 업무 정상화, 점심 수요 회복',
          '목요일: 강남 스타트업 채용 행사',
          '금요일: 불금 간식 수요 증가',
        ],
      },
    },
    {
      dayIndex: 1,
      theme: '화요일 업무 본격화',
      scenario: {
        weather: { temp: '16°C → 22°C', warning: '일교차 큼, 겉옷 필수', icon: '☀️' },
        tips: [
          { text: '화요일 회의 집중, 도시락 수요 최대', action: '도시락·간편식 +25% 준비' },
          { text: '오후 회의 후 커피 수요', action: '아이스커피·핫커피 균형 배치' },
          { text: '일교차 큼, 따뜻한 음료 수요', action: '핫초코·차 음료 보충' },
        ],
        events: [
          { icon: '💼', title: '삼성동 금융권 컨퍼런스', detail: '오후 2시~ · 코엑스', impact: '오후 간식·커피 수요 증가' },
        ],
        checklist: [
          '도시락 재고 최종 확인',
          '커피 냉장고 온도 체크',
          '환절기 따뜻한 음료 진열',
          '유통기한 임박 상품 확인',
        ],
        weekPreview: [
          '수요일: 날씨 흐림, 실내 수요 증가',
          '금요일: 주말 대비 간식 강화',
        ],
      },
    },
    {
      dayIndex: 2,
      theme: '수요일 주중 피크',
      scenario: {
        weather: { temp: '15°C → 19°C', warning: '오후부터 흐림, 저녁 비 가능성', icon: '🌤️' },
        tips: [
          { text: '수요일 주중 도시락 수요 최대', action: '도시락·삼각김밥 최대 준비' },
          { text: '야근 예상 증가, 저녁 수요 대비', action: '컵라면·즉석식품 보충' },
          { text: '비 예보, 우산 수요 증가', action: '비닐우산 입구 배치' },
        ],
        events: [
          { icon: '🏢', title: '강남역 채용 설명회', detail: '오후 6시~ · 예상 500명', impact: '저녁 간식·음료 수요' },
        ],
        checklist: [
          '도시락 재고 최대 확보',
          '야근 대비 즉석식품 확인',
          '비닐우산 재고 확인',
          '저녁 알바 스케줄 확인',
        ],
        weekPreview: [
          '목요일: 비 계속, 실내 수요 지속',
          '금요일: 불금, 간식 수요 폭증',
        ],
      },
    },
    {
      dayIndex: 3,
      theme: '목요일 가을비',
      scenario: {
        weather: { temp: '13°C → 17°C', warning: '하루종일 비, 강수량 20mm', icon: '🌧️' },
        tips: [
          { text: '비로 외출 감소, 배달음식 증가', action: '간단 안주·음료 보충' },
          { text: '쌀쌀한 날씨, 따뜻한 음료 수요', action: '핫아메리카노·차 전면 배치' },
          { text: '우산 수요 지속', action: '비닐우산 추가 확보' },
        ],
        events: [
          { icon: '🌧️', title: '강남 교통 정체 예상', detail: '출퇴근 시간 혼잡', impact: '택시 대기 중 음료·간식 구매 증가' },
        ],
        checklist: [
          '따뜻한 음료 재고 확인',
          '우산 재고 최종 확인',
          '바닥 미끄럼 주의 표시',
          '배달 안주류 진열 강화',
        ],
        weekPreview: [
          '금요일: 비 그침, 불금 수요 회복',
          '주말: 맑음, 외출 수요 증가',
        ],
      },
    },
    {
      dayIndex: 4,
      theme: '금요일 불금 시작',
      scenario: {
        weather: { temp: '12°C → 20°C', warning: '맑고 쾌청, 외출하기 좋은 날', icon: '☀️' },
        tips: [
          { text: '불금 간식 수요 +45%', action: '과자·초콜릿·음료 2배 준비' },
          { text: '회식 전 안주 구매 증가', action: '마른안주·주류 보충' },
          { text: '주말 대비 생필품 수요', action: '생필품 코너 정리' },
        ],
        events: [
          { icon: '🍺', title: '강남 금요일 회식 피크', detail: '오후 6시~ · 주류 수요 증가', impact: '맥주·소주·안주 +60%' },
        ],
        checklist: [
          '간식류 재고 2배 확인',
          '주류·안주 충분히 준비',
          '주말 발주 목록 정리',
          '야간 알바 스케줄 확인',
        ],
        weekPreview: [
          '토요일: 여의도 마라톤 대회',
          '일요일: 남산 단풍축제',
        ],
      },
    },
    {
      dayIndex: 5,
      theme: '토요일 가을 나들이',
      scenario: {
        weather: { temp: '14°C → 22°C', warning: '가을 나들이 최적 날씨', icon: '🍂' },
        tips: [
          { text: '주말 아침 브런치 수요', action: '샌드위치·우유·주스 준비' },
          { text: '나들이 간식 수요 증가', action: '과자·음료 패밀리팩 진열' },
          { text: '저녁 홈파티 수요', action: '주류·안주·간편식 보충' },
        ],
        events: [
          { icon: '🏃', title: '여의도 한강 마라톤 대회', detail: '오전 7시~ · 3,000명', impact: '아침 음료·에너지바 수요' },
          { icon: '🍂', title: '남산 단풍축제 시작', detail: '오전 10시~ · 주말 내내', impact: '관광객 음료·간식 수요 증가' },
        ],
        checklist: [
          '브런치 메뉴 준비',
          '나들이 간식 대량 진열',
          '주류·안주 재고 확인',
          '일요일 발주 확인',
        ],
        weekPreview: [
          '일요일: 단풍축제 계속, 관광 수요',
          '다음 주: 기온 하락 예상',
        ],
      },
    },
    {
      dayIndex: 6,
      theme: '일요일 휴식',
      scenario: {
        weather: { temp: '13°C → 21°C', warning: '맑음, 일교차 주의', icon: '☀️' },
        tips: [
          { text: '일요일 브런치·간식 수요', action: '샌드위치·과자·음료 준비' },
          { text: '저녁 집콕 수요 증가', action: '즉석식품·라면 보충' },
          { text: '내일 월요일 준비', action: '도시락 발주 확인' },
        ],
        events: [
          { icon: '🍂', title: '남산 단풍축제 계속', detail: '오전 10시~ · 마지막 날', impact: '관광객 간식 수요' },
        ],
        checklist: [
          '브런치·간식 재고 확인',
          '주말 마감 재고 정리',
          '월요일 발주 최종 확인',
          '다음 주 알바 스케줄 확인',
        ],
        weekPreview: [
          '월요일: 기온 하락, 따뜻한 음료 준비',
          '수요일: 추석 준비 시작',
        ],
      },
    },
  ],
  residential: [
    {
      dayIndex: 0,
      theme: '월요일 추석 연휴 마무리',
      scenario: {
        weather: { temp: '15°C → 20°C', warning: '아침 쌀쌀, 낮 포근', icon: '🍂' },
        tips: [
          { text: '연휴 후 장보기 수요 증가', action: '우유·빵·생필품 +40% 준비' },
          { text: '등교 시작, 아이 간식 수요', action: '요거트·주스·과자 보충' },
          { text: '환절기 감기 주의', action: '비타민음료·꿀차 입구 배치' },
        ],
        events: [
          { icon: '🏫', title: '잠실초 등교 재개', detail: '오전 8시 등교', impact: '아침 간식·음료 수요' },
        ],
        checklist: [
          '생필품 재고 +40% 확인',
          '아이 간식 충분히 준비',
          '환절기 음료 진열',
          '유통기한 확인',
        ],
        weekPreview: [
          '화요일: 학교 정상화',
          '목요일: 운동회 준비',
          '주말: 가을 나들이 수요',
        ],
      },
    },
    {
      dayIndex: 1,
      theme: '화요일 일상 복귀',
      scenario: {
        weather: { temp: '16°C → 21°C', warning: '맑음, 일교차 크니 겉옷 챙기세요', icon: '☀️' },
        tips: [
          { text: '화요일 장보기 피크', action: '생필품·세제류 진열 강화' },
          { text: '하교 시간 간식 수요', action: '초콜릿·과자·음료 앞쪽 배치' },
          { text: '저녁 가족 식사 준비', action: '즉석밥·반찬·라면 보충' },
        ],
        events: [
          { icon: '🏫', title: '잠실초 하교', detail: '오후 3시', impact: '하교 시간 간식 수요 +30%' },
        ],
        checklist: [
          '생필품 코너 정리',
          '아이 간식 재고 확인',
          '저녁 장보기 대비',
          '유제품 유통기한 체크',
        ],
        weekPreview: [
          '목요일: 초등학교 운동회',
          '주말: 가을 나들이 간식 수요',
        ],
      },
    },
    {
      dayIndex: 2,
      theme: '수요일 주중 장보기',
      scenario: {
        weather: { temp: '14°C → 19°C', warning: '오후부터 흐림, 쌀쌀', icon: '🌤️' },
        tips: [
          { text: '수요일 주중 장보기 최대', action: '생필품·식재료 최대 준비' },
          { text: '쌀쌀한 날씨, 따뜻한 음료', action: '핫초코·차 음료 보충' },
          { text: '운동회 준비 수요 시작', action: '김밥·음료·간식 대량 확보' },
        ],
        events: [
          { icon: '🏫', title: '잠실초 운동회 준비', detail: '목요일 행사 대비', impact: '김밥·음료·간식 사전 구매 증가' },
        ],
        checklist: [
          '생필품 재고 최대 확보',
          '운동회 간식류 준비',
          '따뜻한 음료 진열',
          '김밥·도시락 발주 확인',
        ],
        weekPreview: [
          '목요일: 운동회, 간식 수요 폭증',
          '주말: 가을 소풍 시즌',
        ],
      },
    },
    {
      dayIndex: 3,
      theme: '목요일 초등학교 운동회',
      scenario: {
        weather: { temp: '15°C → 22°C', warning: '맑고 따뜻, 운동회 최적', icon: '☀️' },
        tips: [
          { text: '운동회 간식 수요 폭증', action: '김밥·주스·과자 3배 준비' },
          { text: '아침 일찍 준비물 구매', action: '물티슈·일회용컵 입구 배치' },
          { text: '학부모 음료 수요', action: '이온음료·생수 대량 진열' },
        ],
        events: [
          { icon: '🏃', title: '잠실초 가을 운동회', detail: '오전 9시~ · 학생 600명', impact: '아침부터 간식·음료 수요 +150%' },
        ],
        checklist: [
          '김밥·도시락 3배 준비',
          '음료·생수 대량 확보',
          '일회용품 재고 확인',
          '점심 피크 대비',
        ],
        weekPreview: [
          '금요일: 운동회 후 피로, 간편식 수요',
          '주말: 한강공원 나들이',
        ],
      },
    },
    {
      dayIndex: 4,
      theme: '금요일 주말 준비',
      scenario: {
        weather: { temp: '13°C → 20°C', warning: '맑음, 주말 나들이 좋은 날씨', icon: '☀️' },
        tips: [
          { text: '주말 장보기 시작', action: '생필품·식재료 충분히 준비' },
          { text: '나들이 간식 수요', action: '과자·음료 패밀리팩 진열' },
          { text: '저녁 가족 외식 감소', action: '즉석식품 보충' },
        ],
        events: [
          { icon: '🍂', title: '주말 한강공원 단풍축제', detail: '토일 오전 10시~', impact: '금요일부터 간식 사전 구매' },
        ],
        checklist: [
          '주말 생필품 재고 확인',
          '나들이 간식 대량 진열',
          '주말 발주 최종 확인',
          '토요일 알바 스케줄 확인',
        ],
        weekPreview: [
          '토요일: 한강공원 축제',
          '일요일: 가족 나들이 피크',
        ],
      },
    },
    {
      dayIndex: 5,
      theme: '토요일 가족 나들이',
      scenario: {
        weather: { temp: '14°C → 21°C', warning: '가을 나들이 최적 날씨', icon: '🍂' },
        tips: [
          { text: '아침 나들이 준비 수요', action: '김밥·샌드위치·음료 대량 준비' },
          { text: '한강공원 축제 간식', action: '과자·음료·간편식 진열 강화' },
          { text: '저녁 가족 시간', action: '주류·안주·간식 보충' },
        ],
        events: [
          { icon: '🍂', title: '잠실 한강공원 단풍축제', detail: '오전 10시~ · 예상 5,000명', impact: '나들이 간식·음료 수요 +100%' },
        ],
        checklist: [
          '나들이 간식 최대 준비',
          '음료·생수 대량 확보',
          '가족 안주류 진열',
          '일요일 발주 확인',
        ],
        weekPreview: [
          '일요일: 축제 계속, 나들이 수요',
          '다음 주: 기온 하락 예상',
        ],
      },
    },
    {
      dayIndex: 6,
      theme: '일요일 가족 휴식',
      scenario: {
        weather: { temp: '13°C → 20°C', warning: '맑음, 일교차 주의', icon: '☀️' },
        tips: [
          { text: '일요일 브런치 수요', action: '빵·우유·주스 준비' },
          { text: '오후 간식 시간', action: '과자·아이스크림 보충' },
          { text: '내일 등교 준비', action: '아이 간식 발주 확인' },
        ],
        events: [
          { icon: '🍂', title: '한강공원 축제 마지막 날', detail: '오전 10시~ · 마감 세일', impact: '오후 귀가 음료 수요' },
        ],
        checklist: [
          '브런치 메뉴 준비',
          '주말 재고 정리',
          '월요일 발주 확인',
          '다음 주 스케줄 확인',
        ],
        weekPreview: [
          '월요일: 등교 시작, 아침 간식',
          '수요일: 기온 하락, 따뜻한 음료',
        ],
      },
    },
  ],
  university: [
    {
      dayIndex: 0,
      theme: '월요일 중간고사 D-7',
      scenario: {
        weather: { temp: '13°C → 19°C', warning: '아침 쌀쌀, 낮 포근', icon: '🍂' },
        tips: [
          { text: '중간고사 1주 전, 에너지드링크 수요 시작', action: '핫식스·레드불 +50% 준비' },
          { text: '월요일 강의 집중, 커피 수요', action: '아메리카노·캔커피 보충' },
          { text: '도서관 입실 간식 구매', action: '초콜릿·견과류 앞쪽 배치' },
        ],
        events: [
          { icon: '📚', title: '서울대 중간고사 1주 전', detail: '10/15~10/19 시험', impact: '에너지드링크 +50%, 야간 수요 시작' },
        ],
        checklist: [
          '에너지드링크 재고 +50% 확인',
          '커피 음료 충분히 준비',
          '간식류 진열 강화',
          '야간 알바 스케줄 확인',
        ],
        weekPreview: [
          '수요일: 시험 D-5, 도서관 만석',
          '금요일: 시험 D-3, 야간 수요 급증',
          '다음 주: 시험 기간 진입',
        ],
      },
    },
    {
      dayIndex: 1,
      theme: '화요일 스터디 시작',
      scenario: {
        weather: { temp: '14°C → 20°C', warning: '맑음, 환절기 감기 주의', icon: '☀️' },
        tips: [
          { text: '화요일 스터디 모임 증가', action: '과자·음료 대량 구매 대비' },
          { text: '오후 도서관 피크', action: '커피·에너지드링크 보충' },
          { text: '야식 수요 시작', action: '컵라면·삼각김밥 저녁용 확보' },
        ],
        events: [
          { icon: '📚', title: '신림동 고시촌 스터디', detail: '오후 6시~ · 스터디카페 만석', impact: '야간 음료·간식 수요 +40%' },
        ],
        checklist: [
          '대량 구매 음료·과자 준비',
          '야간 즉석식품 확인',
          '에너지드링크 재고 확인',
          '환절기 비타민음료 진열',
        ],
        weekPreview: [
          '목요일: 시험 D-4, 야간 증가',
          '주말: 스터디 합숙 수요',
        ],
      },
    },
    {
      dayIndex: 2,
      theme: '수요일 중간고사 D-5',
      scenario: {
        weather: { temp: '12°C → 18°C', warning: '오후 흐림, 쌀쌀', icon: '🌤️' },
        tips: [
          { text: '시험 D-5, 도서관 만석 시작', action: '에너지드링크·커피 2배 준비' },
          { text: '야간 학습 본격화', action: '야식·간식 야간용 대량 확보' },
          { text: '환절기 체력 관리', action: '비타민음료·영양바 진열' },
        ],
        events: [
          { icon: '📚', title: '서울대 도서관 밤샘 시작', detail: '저녁 9시~ · 좌석 만석', impact: '야간 매출 +60%' },
        ],
        checklist: [
          '에너지드링크 최대 확보',
          '야식 재고 2배 준비',
          '비타민·영양 음료 진열',
          '새벽 알바 추가 배치 확인',
        ],
        weekPreview: [
          '금요일: 시험 D-3, 야간 폭증',
          '주말: 밤샘 스터디 피크',
        ],
      },
    },
    {
      dayIndex: 3,
      theme: '목요일 중간고사 D-4',
      scenario: {
        weather: { temp: '11°C → 17°C', warning: '쌀쌀, 따뜻한 옷 필요', icon: '🍂' },
        tips: [
          { text: '시험 임박, 에너지드링크 폭증', action: '핫식스·레드불 3배 준비' },
          { text: '야간 학습 증가', action: '컵라면·삼각김밥 야간용 최대 확보' },
          { text: '스트레스 간식 수요', action: '초콜릿·사탕·과자 진열 강화' },
        ],
        events: [
          { icon: '📚', title: '고시촌 야간 학습 피크', detail: '저녁 8시~ · 새벽 2시', impact: '야간 매출 +80%' },
        ],
        checklist: [
          '에너지드링크 3배 재고 확인',
          '야식 최대 준비',
          '간식류 대량 진열',
          '새벽 운영 대비',
        ],
        weekPreview: [
          '금요일: 시험 D-3, 최대 수요',
          '주말: 밤샘 계속',
        ],
      },
    },
    {
      dayIndex: 4,
      theme: '금요일 중간고사 D-3',
      scenario: {
        weather: { temp: '10°C → 16°C', warning: '쌀쌀, 밤 추움', icon: '🌙' },
        tips: [
          { text: '시험 D-3, 에너지드링크 최대 수요', action: '모든 종류 에너지드링크 최대 확보' },
          { text: '밤샘 학습 폭증', action: '야식·간식 새벽용 3배 준비' },
          { text: '체력 관리 음료', action: '비타민음료·이온음료 보충' },
        ],
        events: [
          { icon: '📚', title: '서울대 시험 전 밤샘 피크', detail: '저녁 9시~ · 새벽 5시', impact: '야간 매출 +120%' },
        ],
        checklist: [
          '에너지드링크 전 종류 최대 확보',
          '야식 3배 준비',
          '새벽 운영 인력 확인',
          '주말 발주 대량 확인',
        ],
        weekPreview: [
          '토요일: 밤샘 계속',
          '일요일: 시험 D-1, 마지막 벼락치기',
        ],
      },
    },
    {
      dayIndex: 5,
      theme: '토요일 주말 밤샘',
      scenario: {
        weather: { temp: '11°C → 18°C', warning: '맑음, 밤 추움', icon: '☀️' },
        tips: [
          { text: '주말 밤샘 스터디', action: '에너지드링크·야식 새벽용 대량 준비' },
          { text: '종일 학습, 끼니 대용 수요', action: '도시락·삼각김밥 충분히 확보' },
          { text: '체력 보충 음료', action: '영양음료·비타민 진열' },
        ],
        events: [
          { icon: '📚', title: '주말 스터디 합숙', detail: '아침 8시~ · 새벽 3시', impact: '하루종일 매출 +100%' },
        ],
        checklist: [
          '에너지드링크 대량 확보',
          '끼니 대용 식품 준비',
          '새벽 운영 준비',
          '일요일 발주 확인',
        ],
        weekPreview: [
          '일요일: 시험 D-1, 최종 정리',
          '다음 주: 시험 시작',
        ],
      },
    },
    {
      dayIndex: 6,
      theme: '일요일 중간고사 D-1',
      scenario: {
        weather: { temp: '12°C → 19°C', warning: '맑음, 시험 전날', icon: '☀️' },
        tips: [
          { text: '시험 D-1, 마지막 벼락치기', action: '에너지드링크 최종 대량 확보' },
          { text: '종일 학습, 간편식 수요', action: '도시락·삼각김밥·컵라면 최대 준비' },
          { text: '스트레스 간식', action: '초콜릿·사탕 진열 강화' },
        ],
        events: [
          { icon: '📚', title: '서울대 시험 전날 밤샘', detail: '저녁 8시~ · 새벽 6시', impact: '야간 매출 +150%' },
        ],
        checklist: [
          '에너지드링크 최종 확보',
          '간편식 최대 준비',
          '새벽 운영 최종 확인',
          '시험 주간 발주 계획',
        ],
        weekPreview: [
          '월요일: 시험 시작',
          '수요일: 시험 계속',
          '금요일: 시험 종료 회식',
        ],
      },
    },
  ],
  entertainment: [
    {
      dayIndex: 0,
      theme: '월요일 주말 정리',
      scenario: {
        weather: { temp: '14°C → 20°C', warning: '맑음, 평온한 월요일', icon: '🍂' },
        tips: [
          { text: '주말 주류 재고 소진 확인', action: '맥주·소주 보충' },
          { text: '월요일 한산, 기본 재고 유지', action: '평소 수준으로 발주' },
          { text: '저녁 소규모 모임', action: '안주·음료 기본 준비' },
        ],
        events: [
          { icon: '🎸', title: '홍대 평일 버스킹', detail: '오후 7시~ · 소규모', impact: '저녁 음료·간식 소폭 증가' },
        ],
        checklist: [
          '주말 재고 정리',
          '기본 주류 보충',
          '평일 발주 계획',
          '주중 알바 스케줄 확인',
        ],
        weekPreview: [
          '목요일: 홍대 공연 시작',
          '금요일: 할로윈 주간 시작',
          '주말: 할로윈 파티 대비',
        ],
      },
    },
    {
      dayIndex: 1,
      theme: '화요일 평일 모임',
      scenario: {
        weather: { temp: '15°C → 21°C', warning: '맑음, 야외 활동 좋음', icon: '☀️' },
        tips: [
          { text: '화요일 소규모 모임 증가', action: '안주·맥주 기본 준비' },
          { text: '버스킹 관람객', action: '음료·간식 야외용 배치' },
          { text: '야간 클럽 준비 손님', action: '물·에너지드링크 보충' },
        ],
        events: [
          { icon: '🎵', title: '홍대 클럽 화요일 이벤트', detail: '오후 10시~ · 2곳', impact: '야간 음료·간식 수요' },
        ],
        checklist: [
          '안주류 기본 진열',
          '음료 재고 확인',
          '야간 운영 준비',
          '주류 냉장 확인',
        ],
        weekPreview: [
          '금요일: 할로윈 주간 불금',
          '주말: 할로윈 파티',
        ],
      },
    },
    {
      dayIndex: 2,
      theme: '수요일 주중 피크',
      scenario: {
        weather: { temp: '13°C → 19°C', warning: '오후 흐림, 저녁 쌀쌀', icon: '🌤️' },
        tips: [
          { text: '수요일 모임 증가', action: '맥주·소주·안주 +30% 준비' },
          { text: '클럽 평일 이벤트', action: '야간 음료·간식 보충' },
          { text: '할로윈 준비 수요 시작', action: '할로윈 과자·음료 입고' },
        ],
        events: [
          { icon: '🎃', title: '홍대 할로윈 주간 시작', detail: '10/25~ · 주간 이벤트', impact: '할로윈 과자·주류 수요 증가' },
        ],
        checklist: [
          '주류·안주 +30% 확인',
          '할로윈 상품 입고',
          '야간 운영 준비',
          '주말 대비 발주 계획',
        ],
        weekPreview: [
          '금요일: 할로윈 불금',
          '주말: 할로윈 파티 피크',
        ],
      },
    },
    {
      dayIndex: 3,
      theme: '목요일 할로윈 준비',
      scenario: {
        weather: { temp: '12°C → 18°C', warning: '쌀쌀, 밤 추움', icon: '🍂' },
        tips: [
          { text: '목요일 모임 증가', action: '주류·안주 +40% 준비' },
          { text: '할로윈 파티 준비 쇼핑', action: '할로윈 과자·음료 진열 강화' },
          { text: '클럽 목요일 이벤트', action: '야간 음료·간식 대량 확보' },
        ],
        events: [
          { icon: '🎃', title: '홍대 할로윈 거리 행사', detail: '오후 6시~ · 코스튬 퍼레이드', impact: '저녁 음료·간식 +50%' },
        ],
        checklist: [
          '주류·안주 +40% 확인',
          '할로윈 상품 대량 진열',
          '야간 운영 인력 확인',
          '주말 최대 발주 준비',
        ],
        weekPreview: [
          '금요일: 할로윈 불금 폭증',
          '토요일: 할로윈 데이',
        ],
      },
    },
    {
      dayIndex: 4,
      theme: '금요일 할로윈 불금',
      scenario: {
        weather: { temp: '11°C → 17°C', warning: '맑음, 밤 추움', icon: '🌙' },
        tips: [
          { text: '할로윈 불금, 주류 폭증', action: '맥주·소주·안주 3배 준비' },
          { text: '코스튬 파티 쇼핑', action: '할로윈 과자·음료 최대 확보' },
          { text: '클럽 입장 대기줄', action: '물·에너지드링크·껌 대량 진열' },
        ],
        events: [
          { icon: '🎃', title: '홍대 할로윈 파티 5곳', detail: '오후 10시~ · 예상 10,000명', impact: '주류 +200%, 안주 +150%' },
        ],
        checklist: [
          '주류·안주 3배 최대 확보',
          '할로윈 상품 최종 진열',
          '새벽 운영 인력 확인',
          '얼음 대량 확보',
        ],
        weekPreview: [
          '토요일: 할로윈 데이',
          '일요일: 해장 수요',
        ],
      },
    },
    {
      dayIndex: 5,
      theme: '토요일 할로윈 데이',
      scenario: {
        weather: { temp: '12°C → 18°C', warning: '맑음, 할로윈 축제 최적', icon: '🎃' },
        tips: [
          { text: '할로윈 데이, 주류 최대 수요', action: '맥주·소주·칵테일 최대 확보' },
          { text: '오후부터 파티 시작', action: '안주·간식 대량 준비' },
          { text: '새벽까지 매출 지속', action: '야간 재고 3배 확보' },
        ],
        events: [
          { icon: '🎃', title: '홍대 할로윈 페스티벌', detail: '오후 6시~ · 예상 20,000명', impact: '하루종일 매출 +250%' },
        ],
        checklist: [
          '주류 최대 확보',
          '안주·간식 3배 준비',
          '새벽 운영 최종 확인',
          '일요일 해장 발주',
        ],
        weekPreview: [
          '일요일: 해장 수요 폭증',
          '다음 주: 평상시 복귀',
        ],
      },
    },
    {
      dayIndex: 6,
      theme: '일요일 할로윈 해장',
      scenario: {
        weather: { temp: '13°C → 19°C', warning: '맑음, 휴식 필요', icon: '☀️' },
        tips: [
          { text: '할로윈 다음 날, 해장 수요', action: '라면·숙취해소제·이온음료 대량 준비' },
          { text: '브런치 수요', action: '샌드위치·우유·주스 보충' },
          { text: '저녁 집콕', action: '즉석식품·간편식 진열' },
        ],
        events: [
          { icon: '🍜', title: '홍대 해장 수요 피크', detail: '오전 10시~ · 오후 2시', impact: '라면·해장음료 +100%' },
        ],
        checklist: [
          '해장 상품 대량 준비',
          '브런치 메뉴 보충',
          '주말 재고 최종 정리',
          '월요일 발주 계획',
        ],
        weekPreview: [
          '월요일: 평상시 복귀',
          '다음 주말: 가을 축제 시즌',
        ],
      },
    },
  ],
};
