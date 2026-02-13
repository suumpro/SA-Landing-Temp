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
    <section id="faq" ref={ref} className="section bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-gray-600">
            궁금한 점이 있으신가요? 가장 많이 묻는 질문들을 모았습니다.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`bg-white rounded-2xl border border-gray-200 px-6 mb-6 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <Accordion items={mainFaqItems} />
        </div>

        {/* View All FAQ Link */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <Link
            href="/faq"
            className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 transition-colors"
          >
            전체 FAQ 보기
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Newsletter Form */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">무료 뉴스레터 구독</h3>
            <p className="text-sm text-gray-500">주 1-2회 업계 트렌드와 시즌 팁을 받아보세요. 매일 브리핑은 스탠다드 플랜부터.</p>
          </div>
          <NewsletterForm />
        </div>

        {/* Inline Contact Form */}
        <div className={`${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <InlineContactForm />
        </div>
      </div>
    </section>
  );
}
