'use client';

import Link from 'next/link';
import NewsletterForm from '@/components/ui/NewsletterForm';

export default function CTASection() {
  return (
    <section id="cta-section" className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            무료로 시작해 보세요
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Newsletter Card */}
          <div className="bg-white border-2 border-primary rounded-2xl p-8">
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block">📧</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                무료 뉴스레터
              </h3>
              <p className="text-gray-600">
                주간 운영 인사이트를 이메일로
              </p>
            </div>

            <NewsletterForm />

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 주 1-2회 발송
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 언제든 해지
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 스팸 없음
              </span>
            </div>
          </div>

          {/* Lite Plan Card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <span className="text-4xl mb-4 block">⚡</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                매일 브리핑이 필요하다면
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold text-primary">9,900</span>
                <span className="text-gray-600">원/월</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                (커피 3잔 값으로 매일 브리핑)
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-primary">✓</span>
                매일 아침 모닝 브리핑
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-primary">✓</span>
                날씨 기반 준비 팁
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-primary">✓</span>
                지역 이벤트 알림
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-primary">✓</span>
                운영 체크리스트
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="block w-full text-center btn-primary py-4"
            >
              상담 신청하기
            </Link>

            <p className="text-center text-sm text-gray-500 mt-4">
              영업일 기준 1-2일 내 연락드립니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
