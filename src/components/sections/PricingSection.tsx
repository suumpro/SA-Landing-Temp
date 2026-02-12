'use client';

import Link from 'next/link';
import { plans } from '@/lib/pricing-data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const valueAnchors: Record<string, string> = {
  standard: '하루 33원',
  premium: '커피 3잔 값',
};

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="pricing" ref={ref} className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            매장에 맞는 플랜을 선택하세요
          </h2>
          <p className="text-gray-600">
            무료로 시작하고, 필요에 따라 업그레이드하세요.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  isPopular
                    ? 'bg-primary text-white border-2 border-primary shadow-xl lg:scale-105'
                    : 'bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full shadow-sm">
                      추천
                    </span>
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>

                <div className="mb-1">
                  <span className={`text-3xl font-bold ${isPopular ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-gray-500'}`}>
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                {valueAnchors[plan.id] && (
                  <p className={`text-xs mb-4 ${isPopular ? 'text-white/70' : 'text-gray-400'}`}>
                    ({valueAnchors[plan.id]})
                  </p>
                )}

                <p className={`text-sm mb-6 ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-2 text-sm ${
                        feature.included
                          ? isPopular ? 'text-white' : 'text-gray-700'
                          : isPopular ? 'text-white/40' : 'text-gray-400'
                      }`}
                    >
                      <span
                        className={feature.included ? (isPopular ? 'text-yellow-300' : 'text-primary') : ''}
                        aria-hidden="true"
                      >
                        {feature.included ? '✓' : '−'}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                    isPopular
                      ? 'bg-white text-primary hover:bg-gray-100 hover:shadow-md'
                      : 'bg-primary text-white hover:bg-primary-dark hover:shadow-md'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* View Full Comparison */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <Link
            href="/pricing"
            className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 transition-colors"
          >
            상세 비교표 보기
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
