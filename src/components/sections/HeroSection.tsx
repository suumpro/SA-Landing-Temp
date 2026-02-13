'use client';

import MockupImage from '@/components/MockupImage';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section bg-gradient-to-b from-primary-lighter via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              편의점 매출을 올리는<br />
              <span className="text-primary">AI 브리핑</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up delay-100">
              날씨·행사·발주 체크리스트부터 <strong className="text-primary">POS 매출 분석</strong>까지,<br className="hidden sm:block" />
              매일 아침 3분이면 충분합니다
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
              <button
                onClick={() => scrollToSection('faq')}
                className="btn-primary btn-lg"
                aria-label="무료 뉴스레터 구독하기"
              >
                무료로 시작하기
                <span className="ml-2 text-sm opacity-80">(주간 뉴스레터)</span>
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-secondary btn-lg text-center"
              >
                플랜 보기
              </button>
            </div>

            {/* Trust Badge */}
            <p className="mt-6 text-sm text-gray-500 animate-fade-in-up delay-300">
              <span className="text-success">✓</span> 본사 연동 없이 바로 시작 &nbsp;
              <span className="text-success">✓</span> 언제든 해지 가능 &nbsp;
              <span className="text-success">✓</span> POS 연동 지원
            </p>
          </div>

          {/* Mockup Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none animate-fade-in-up delay-300">
            <div className="animate-float">
              <MockupImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
