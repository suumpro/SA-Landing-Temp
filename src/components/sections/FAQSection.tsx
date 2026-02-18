'use client';

import Link from 'next/link';
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
              className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 transition-colors text-sm"
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 mb-8">
            <NewsletterForm />
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
