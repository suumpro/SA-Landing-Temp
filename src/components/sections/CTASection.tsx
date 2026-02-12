'use client';

import Link from 'next/link';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const planPreviews = [
  {
    name: '스탠다드',
    price: '1,000원',
    priceNote: '/월',
    description: '매일 아침 브리핑',
    valueAnchor: '하루 33원',
    features: ['매일 모닝 브리핑', '날씨/이벤트 알림', '운영 체크리스트'],
    popular: true,
  },
  {
    name: '고급형',
    price: '9,900원',
    priceNote: '/월',
    description: 'POS 연동 분석',
    valueAnchor: '커피 3잔 값',
    features: ['스탠다드 모든 기능', 'POS 매출 연동', '위치 심화 분석'],
    popular: false,
  },
];

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="cta-section" ref={ref} className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            무료로 시작해 보세요
          </h2>
          <p className="text-gray-600">
            뉴스레터로 먼저 경험하고, 필요할 때 업그레이드하세요.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Newsletter Card */}
          <div
            className={`bg-white border-2 border-primary rounded-2xl p-6 lg:p-8 md:col-span-2 lg:col-span-1 ${
              isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
            }`}
          >
            <div className="text-center mb-6">
              <span className="text-3xl mb-3 block" role="img" aria-label="이메일">📧</span>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                무료 뉴스레터
              </h3>
              <p className="text-sm text-gray-600">
                주간 운영 인사이트
              </p>
            </div>

            <NewsletterForm />

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="text-success">✓</span> 주 1-2회
              </span>
              <span className="flex items-center gap-1">
                <span className="text-success">✓</span> 언제든 해지
              </span>
            </div>
          </div>

          {/* Plan Preview Cards */}
          {planPreviews.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 lg:p-8 ${
                plan.popular
                  ? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
                  : 'bg-gray-50 border border-gray-200'
              } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="text-center mb-2">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    추천
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-2xl font-bold ${
                      plan.popular ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? 'text-white/80' : 'text-gray-500'
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    plan.popular ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  ({plan.valueAnchor})
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${
                      plan.popular ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    <span
                      className={plan.popular ? 'text-yellow-300' : 'text-primary'}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={`/contact?plan=${plan.name === '스탠다드' ? 'standard' : 'premium'}`}
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-gray-100 hover:shadow-md'
                    : 'bg-primary text-white hover:bg-primary-dark hover:shadow-md'
                }`}
              >
                시작하기
              </Link>
              <p
                className={`text-xs text-center mt-2 ${
                  plan.popular ? 'text-white/60' : 'text-gray-400'
                }`}
              >
                7일 무료 체험 · 언제든 해지
              </p>
            </div>
          ))}
        </div>

        {/* View All Plans Link */}
        <div className={`text-center mt-8 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <Link
            href="/pricing"
            className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 transition-colors"
          >
            전체 플랜 비교하기
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
