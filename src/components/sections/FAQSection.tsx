'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { faqData } from '@/lib/faq-data';
import Accordion from '@/components/ui/Accordion';
import NewsletterForm from '@/components/ui/NewsletterForm';
import InlineContactForm from '@/components/ui/InlineContactForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const mainFaqItems = faqData.flatMap((cat) => cat.items).slice(0, 8);

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <>
      {/* FAQ */}
      <section id="faq" ref={ref} className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">FAQ</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-gray-500">
              궁금한 점이 있으신가요? 가장 많이 묻는 질문들을 모았습니다.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className={`bg-white rounded-2xl border border-gray-100 px-6 mb-6 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <Accordion items={mainFaqItems} />
          </div>

          {/* View All FAQ Link */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <Link
              href="/faq"
              className="arrow-link text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 transition-colors text-sm"
            >
              전체 FAQ 보기
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            지금 무료로 시작하세요
          </h2>
          <p className="text-gray-400 mb-8">
            뉴스레터로 먼저 경험하고, 필요할 때 업그레이드하세요.
          </p>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 mb-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 mb-5 text-sm text-gray-300">
              {['매주 편의점 운영 인사이트', '시즌별 매출 전략 가이드', '언제든 구독 해지 가능'].map((benefit) => (
                <span key={benefit} className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-success" />
                  {benefit}
                </span>
              ))}
            </div>
            <NewsletterForm />
            <p className="text-center text-xs text-gray-500 mt-3">
              30초면 구독 완료 · <strong className="text-gray-400">1,500+</strong> 점주님이 구독 중
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-sm text-gray-500">또는</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Inline Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
            <InlineContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
