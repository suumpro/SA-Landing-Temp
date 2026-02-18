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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DBEAFE] via-[#EFF6FF] to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" aria-hidden="true" />

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
                무료 뉴스레터 받기
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-secondary btn-lg"
              >
                플랜 보기
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start animate-fade-in-up delay-400">
              <div className="flex -space-x-2">
                {['김', '박', '이'].map((initial, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                <strong className="text-gray-700">1,500+</strong> 점주님이 구독 중
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 justify-center lg:justify-start animate-fade-in-up delay-500">
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
                <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-3xl scale-90" aria-hidden="true" />
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
