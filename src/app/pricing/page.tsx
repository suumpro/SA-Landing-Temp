import type { Metadata } from 'next';
import Link from 'next/link';
import { plans } from '@/lib/pricing-data';
import PricingCard from '@/components/pricing/PricingCard';
import PlanComparison from '@/components/pricing/PlanComparison';

export const metadata: Metadata = {
  title: '요금제 | STOREAGENT',
  description:
    '무료 뉴스레터부터 엔터프라이즈까지. 매장 규모에 맞는 플랜을 선택하세요.',
  alternates: {
    canonical: '/pricing',
  },
};

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'STOREAGENT AI 브리핑',
  description: '편의점 점주를 위한 AI 모닝 브리핑 서비스',
  brand: { '@type': 'Organization', name: 'STOREAGENT' },
  offers: [
    {
      '@type': 'Offer',
      name: '무료',
      price: '0',
      priceCurrency: 'KRW',
      description: '주간 뉴스레터로 시작하기',
    },
    {
      '@type': 'Offer',
      name: '스탠다드',
      price: '1000',
      priceCurrency: 'KRW',
      priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
      description: '매일 아침 브리핑 받기',
    },
    {
      '@type': 'Offer',
      name: '고급형',
      price: '9900',
      priceCurrency: 'KRW',
      priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
      description: '데이터 기반 의사결정',
    },
  ],
};

export default function PricingPage() {
  return (
    <main className="pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      {/* Hero Section */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          플랜을 선택하세요
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          무료로 시작하고, 필요에 따라 업그레이드하세요.
          <br />
          모든 유료 플랜은 언제든 해지 가능합니다.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          상세 비교
        </h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <PlanComparison />
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          자주 묻는 질문
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              결제는 어떻게 하나요?
            </h3>
            <p className="text-gray-600 text-sm">
              현재는 상담 후 개별 안내드리고 있습니다. 카드 정기결제, 계좌이체
              등 다양한 방법을 지원합니다.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              해지는 언제든 가능한가요?
            </h3>
            <p className="text-gray-600 text-sm">
              네, 위약금 없이 언제든 해지할 수 있습니다. 남은 기간까지는 서비스를
              이용하실 수 있습니다.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              환불 정책은 어떻게 되나요?
            </h3>
            <p className="text-gray-600 text-sm">
              결제 후 7일 이내, 미사용 시 100% 환불됩니다. 사용 시에는 일할
              계산하여 환불해 드립니다.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-primary hover:text-primary-dark font-medium"
          >
            더 많은 질문 보기 →
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            어떤 플랜이 맞는지 모르겠다면?
          </h2>
          <p className="text-white/80 mb-8">
            무료 뉴스레터로 시작해 보세요. 언제든 업그레이드할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#faq"
              className="bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              무료 시작하기
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              상담 받기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
