'use client';

import { ClipboardCheck, CloudRain, MapPin, BarChart3, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: ClipboardCheck,
    title: '오늘 확인할 것들 정리',
    description: '매일 아침 6시, 오늘의 핵심만 정리해서 알려드립니다',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'group-hover:border-primary/20',
  },
  {
    icon: CloudRain,
    title: '날씨 변화에 미리 대비',
    description: '내일 갑자기 추워지면? 비 오면? 미리 준비하세요',
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
    borderColor: 'group-hover:border-sky-200',
  },
  {
    icon: MapPin,
    title: '주변 행사 미리 알기',
    description: '반경 1km 내 콘서트, 축제, 시험기간 등',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'group-hover:border-rose-200',
  },
  {
    icon: BarChart3,
    title: '매출 데이터로 발주 최적화',
    description: 'POS 매출 데이터 연동으로 판매 트렌드 분석, 재고 최적화 제안까지',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'group-hover:border-secondary/20',
  },
];

export default function FeatureSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="features" ref={ref} className="section bg-bg-cool">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Features</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            매일 아침, 이렇게 도움 드립니다
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group card cursor-default ${feature.borderColor} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Message */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 text-gray-600 rounded-full text-sm font-medium shadow-sm">
            <Shield className="w-4 h-4 text-primary" />
            본사 연동 없이, 개인 이메일만으로 시작
          </span>
        </div>
      </div>
    </section>
  );
}
