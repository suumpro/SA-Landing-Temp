'use client';

import Link from 'next/link';
import { Check, Minus, Shield } from 'lucide-react';
import { plans } from '@/lib/pricing-data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const valueAnchors: Record<string, string> = {
  standard: '하루 33원',
  premium: '커피 3잔 값',
};

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="pricing" ref={ref} className="section bg-bg-cool">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Pricing</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            매장에 맞는 플랜을 선택하세요
          </h2>
          <p className="text-gray-500">
            무료로 시작하고, 필요에 따라 업그레이드하세요.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gray-900 text-white shadow-xl shadow-gray-900/20 ring-1 ring-gray-900 scale-[1.02] lg:scale-105'
                    : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                      1,200+ 점주님이 선택
                    </span>
                  </div>
                )}

                <h3 className={`text-lg font-bold mb-1 ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>

                {plan.targetUser && (
                  <p className={`text-xs mb-4 ${isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.targetUser}
                  </p>
                )}

                <div className="mb-1">
                  <span className={`text-4xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className={`text-sm ml-1 ${isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                {valueAnchors[plan.id] && (
                  <p className={`text-xs mb-5 ${isPopular ? 'text-gray-500' : 'text-gray-400'}`}>
                    ({valueAnchors[plan.id]})
                  </p>
                )}

                <p className={`text-sm mb-6 leading-relaxed ${isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-2.5 text-sm ${
                        feature.included
                          ? isPopular ? 'text-gray-200' : 'text-gray-700'
                          : isPopular ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {feature.included ? (
                        <Check className={`w-4 h-4 flex-shrink-0 ${isPopular ? 'text-primary-light' : 'text-primary'}`} />
                      ) : (
                        <Minus className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 text-sm ${
                    isPopular
                      ? 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 hover:scale-[1.02]'
                      : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:scale-[1.02]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Guarantee Badge */}
        <div className={`flex items-center justify-center gap-2 mt-8 mb-6 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <Shield className="w-4 h-4 text-success" />
          <span className="text-sm text-gray-500">7일 무료 체험 · 만족하지 않으면 100% 환불</span>
        </div>

        {/* View Full Comparison */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
          <Link
            href="/pricing"
            className="arrow-link text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 transition-colors text-sm"
          >
            상세 비교표 보기
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
