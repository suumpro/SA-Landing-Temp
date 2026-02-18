'use client';

import { Mail, Bot, Sun } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '1',
    icon: Mail,
    title: '이메일로 구독',
    description: '본사 연동 없이 30초면 끝',
    color: 'text-primary',
    bgFrom: 'from-primary/10',
    bgTo: 'to-primary/5',
  },
  {
    number: '2',
    icon: Bot,
    title: 'AI가 매일 분석',
    description: '날씨·이벤트·체크리스트 자동 정리',
    color: 'text-secondary',
    bgFrom: 'from-secondary/10',
    bgTo: 'to-secondary/5',
  },
  {
    number: '3',
    icon: Sun,
    title: '아침 6시 브리핑',
    description: '발주 전 3분이면 오늘 할 일 파악',
    color: 'text-warning',
    bgFrom: 'from-warning/10',
    bgTo: 'to-warning/5',
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="how-it-works" ref={ref} className="section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">How it works</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            시작은 간단합니다
          </h2>
          <p className="text-gray-500">
            복잡한 설치나 연동 없이, 이메일 하나로 시작하세요
          </p>
        </div>

        {/* Steps */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number}>
                <div className="relative text-center">
                  {/* Connector line (desktop only, between steps) */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-100 translate-x-[10%]"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step circle */}
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.bgFrom} ${step.bgTo} rounded-2xl mb-5 shadow-sm`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                    <span className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>

                {/* Mobile connector arrow (between steps) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-3 md:hidden" aria-hidden="true">
                    <div className="w-0.5 h-6 bg-gray-200 rounded-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
