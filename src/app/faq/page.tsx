import type { Metadata } from 'next';
import Link from 'next/link';
import { faqData } from '@/lib/faq-data';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: '자주 묻는 질문 | STOREAGENT',
  description:
    '서비스, 결제, 플랜에 대한 궁금증을 해결하세요. 본사 연동 없이, 언제든 해지 가능합니다.',
};

export default function FAQPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          자주 묻는 질문
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          궁금한 점이 있으신가요? 가장 많이 묻는 질문들을 모았습니다.
        </p>
      </section>

      {/* FAQ Categories */}
      <section className="max-w-3xl mx-auto px-4 mb-20">
        {faqData.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true"></span>
              {category.category}
            </h2>
            <div className="bg-white rounded-2xl border border-gray-200 px-6">
              <Accordion items={category.items} />
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-gray-600 mb-6">
            찾으시는 답변이 없다면 언제든 문의해 주세요.
            <br />
            영업일 기준 1-2일 내 답변드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@storeagent.kr"
              className="btn-secondary px-6 py-3 text-center"
            >
              📧 이메일 문의
            </a>
            <Link href="/contact" className="btn-primary px-6 py-3 text-center">
              💬 상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/pricing"
            className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-2 block" aria-hidden="true">💰</span>
            <span className="font-medium text-gray-900">플랜 비교하기</span>
          </Link>
          <Link
            href="/how-it-works"
            className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-2 block" aria-hidden="true">❓</span>
            <span className="font-medium text-gray-900">서비스 소개</span>
          </Link>
          <Link
            href="/#cta-section"
            className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-2 block" aria-hidden="true">🚀</span>
            <span className="font-medium text-gray-900">무료 시작하기</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
