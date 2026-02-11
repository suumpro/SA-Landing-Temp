'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '1',
    icon: '📧',
    title: '이메일로 구독',
    description: '본사 연동 없이 30초면 끝',
  },
  {
    number: '2',
    icon: '🤖',
    title: 'AI가 매일 분석',
    description: '날씨·이벤트·체크리스트 자동 정리',
  },
  {
    number: '3',
    icon: '🌅',
    title: '아침 6시 브리핑',
    description: '발주 전 3분이면 오늘 할 일 파악',
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            시작은 간단합니다
          </h2>
          <p className="text-gray-600">
            복잡한 설치나 연동 없이, 이메일 하나로 시작하세요
          </p>
        </div>

        {/* Steps */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="relative text-center">
                {/* Connector line (desktop only, between steps) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-1/2 w-full translate-x-[10%] border-t-2 border-dashed border-gray-300"
                    aria-hidden="true"
                  />
                )}

                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md border-2 border-primary mb-4">
                  <span className="text-3xl" aria-hidden="true">{step.icon}</span>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>

              {/* Mobile connector arrow (between steps) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2 md:hidden" aria-hidden="true">
                  <span className="text-gray-300 text-xl">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
