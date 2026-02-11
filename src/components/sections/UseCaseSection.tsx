'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const scenarios = [
  {
    id: 'rain',
    icon: '🌧️',
    label: '비 오는 날',
    alert: '오후 2시부터 비 시작, 예상 강수량 10-20mm',
    tips: [
      '우산 진열 (입구 근처, 눈에 띄게)',
      '비닐우산 재고 확인',
      '핫초코, 따뜻한 음료 강조',
    ],
    result: '우산 준비해뒀더니 다 팔렸어요',
  },
  {
    id: 'event',
    icon: '🎵',
    label: '주변 행사',
    alert: 'K-POP 콘서트 (오후 7시) · 예상 관객 15,000명',
    tips: [
      '음료, 간식 수요 급증 대비',
      '공연 전후 2시간 집중 준비',
      '저녁 알바 배치 확인',
    ],
    result: '저녁 매출이 평소의 2배였어요',
  },
  {
    id: 'exam',
    icon: '📚',
    label: '시험 기간',
    alert: '대학 기말고사 주간 (12/15~12/21)',
    tips: [
      '에너지 드링크 진열 강화 (+150%)',
      '초콜릿, 견과류 코너 확대',
      '새벽 시간대 인력 보강',
    ],
    result: '야간 매출이 2배 이상 올랐어요',
  },
  {
    id: 'cold',
    icon: '❄️',
    label: '기온 급락',
    alert: '오후 5시 이후 기온 급락, 저녁 영하권 진입',
    tips: [
      '따뜻한 음료 진열 위치 조정',
      '핫팩/손난로 진열대 앞쪽 배치',
      '컵라면 재고 확인',
    ],
    result: '핫팩이 오후에 전부 나갔어요',
  },
];

export default function UseCaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const active = scenarios[activeIndex];

  return (
    <section ref={ref} className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            이런 날, 미리 알려드립니다
          </h2>
          <p className="text-gray-600">
            상황별로 맞춤 브리핑을 보내드려요
          </p>
        </div>

        {/* Scenario Tabs */}
        <div
          className={`flex justify-center gap-2 sm:gap-3 mb-8 ${
            isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          {scenarios.map((scenario, index) => (
            <button
              key={scenario.id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeIndex === index
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span aria-hidden="true">{scenario.icon}</span>
              <span className="hidden sm:inline">{scenario.label}</span>
            </button>
          ))}
        </div>

        {/* Active Scenario Card */}
        <div
          className={`max-w-2xl mx-auto ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
            {/* Scenario Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl" aria-hidden="true">{active.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{active.label}</h3>
                <p className="text-sm text-gray-500">SA 모닝 브리핑이 알려드려요</p>
              </div>
            </div>

            {/* Alert Box */}
            <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
              <div className="flex items-start gap-2">
                <span className="text-orange-500 text-sm font-bold mt-0.5">⚠️</span>
                <p className="text-gray-800 text-sm font-medium">{active.alert}</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
              <p className="text-sm font-semibold text-gray-800 mb-2">💡 준비 팁</p>
              <ul className="space-y-1.5">
                {active.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary mt-0.5">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result Quote */}
            <div className="bg-primary-lighter rounded-xl p-4">
              <p className="text-sm text-primary font-medium text-center">
                &ldquo;{active.result}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
