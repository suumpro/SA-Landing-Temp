'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: '☀️',
    title: '오늘 확인할 것들 정리',
    description: '매일 아침 6시, 오늘의 핵심만 정리해서 알려드립니다',
  },
  {
    icon: '🌧️',
    title: '날씨 변화에 미리 대비',
    description: '내일 갑자기 추워지면? 비 오면? 미리 준비하세요',
  },
  {
    icon: '📍',
    title: '주변 행사 미리 알기',
    description: '반경 1km 내 콘서트, 축제, 시험기간 등',
  },
  {
    icon: '📊',
    title: '매출 데이터로 발주 최적화',
    description: 'POS 매출 데이터 연동으로 판매 트렌드 분석, 재고 최적화 제안까지',
  },
];

export default function FeatureSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="features" ref={ref} className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            매일 아침, 이렇게 도움 드립니다
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              <div className="text-4xl mb-4" role="img" aria-label={feature.title}>
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Message */}
        <div className={`text-center space-y-2 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-primary-lighter text-primary rounded-full text-sm font-medium">
            <span role="img" aria-hidden="true">🔒</span>
            본사 연동 없이, 개인 이메일만으로 시작
          </p>
          <p className="text-xs text-gray-400">
            설치할 것도, 공유할 것도 없습니다
          </p>
        </div>
      </div>
    </section>
  );
}
