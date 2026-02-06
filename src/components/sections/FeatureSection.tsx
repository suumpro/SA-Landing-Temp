'use client';

import { useEffect, useRef, useState } from 'react';

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
    icon: '✅',
    title: '매일 점검 빠짐없이',
    description: '베테랑 점주님들의 노하우를 체크리스트로',
  },
];

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-white">
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
              key={index}
              className={`card text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
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
        <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-primary rounded-full text-sm font-medium">
            <span>✨</span>
            본사 연동 없이, 바로 시작할 수 있습니다
          </p>
        </div>
      </div>
    </section>
  );
}
