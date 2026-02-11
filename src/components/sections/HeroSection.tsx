'use client';

import Link from 'next/link';
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              발주 전 3분,<br />
              <span className="text-primary">확인하고 가세요</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up delay-100">
              날씨, 이벤트, 오늘 체크할 것들을<br className="hidden sm:block" />
              매일 아침 정리해 드립니다
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
              <button
                onClick={() => scrollToSection('cta-section')}
                className="btn-primary text-base px-8 py-4"
                aria-label="무료 뉴스레터 구독하기"
              >
                뉴스레터 구독하기
                <span className="ml-2 text-sm opacity-80">(무료)</span>
              </button>
              <Link
                href="/pricing"
                className="btn-secondary text-base px-8 py-4 text-center"
              >
                플랜 보기
              </Link>
            </div>

            {/* Trust Badge */}
            <p className="mt-6 text-sm text-gray-500 animate-fade-in-up delay-300">
              <span className="text-success">✓</span> 본사 연동 없이 바로 시작 &nbsp;
              <span className="text-success">✓</span> 언제든 해지 가능
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
