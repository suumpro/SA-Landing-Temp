'use client';

import { Check } from 'lucide-react';
import MockupImage from '@/components/MockupImage';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF4FF] via-[#F5F9FF] to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-full text-sm text-primary font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              편의점 점주를 위한 AI 서비스
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.15] mb-6 animate-fade-in-up delay-100 tracking-tight">
              편의점 매출을 올리는<br />
              <span className="text-gradient">AI 모닝 브리핑</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed animate-fade-in-up delay-200 max-w-lg mx-auto lg:mx-0">
              날씨, 주변 행사, 발주 체크리스트부터<br className="hidden sm:block" />
              POS 매출 분석까지. 매일 아침 3분이면 충분합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up delay-300">
              <button
                onClick={() => scrollToSection('faq')}
                className="btn-primary btn-lg animate-pulse-soft"
                aria-label="무료 뉴스레터 구독하기"
              >
                무료로 시작하기
                <span className="ml-2 text-sm opacity-70">(주간 뉴스레터)</span>
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-secondary btn-lg"
              >
                플랜 보기
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 justify-center lg:justify-start animate-fade-in-up delay-400">
              {[
                '본사 연동 없이 바로 시작',
                '언제든 해지 가능',
                'POS 연동 지원',
              ].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                  <span className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-success" />
                  </span>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Mockup Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none animate-fade-in-up delay-300">
            <div className="animate-float">
              <div className="relative">
                {/* Glow effect behind mockup */}
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl scale-90" aria-hidden="true" />
                <div className="relative">
                  <MockupImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
