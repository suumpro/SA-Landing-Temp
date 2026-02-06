import type { Metadata } from 'next';
import Link from 'next/link';
import MockupImage from '@/components/MockupImage';

export const metadata: Metadata = {
  title: '서비스 소개 | STOREAGENT',
  description:
    '이메일과 매장 위치만 입력하면 끝. 본사 연동 없이 바로 시작하세요.',
};

const steps = [
  {
    number: '01',
    title: '간단한 가입',
    description: '이메일과 매장 위치만 입력하면 끝!',
    detail: '본사 연동 없이 바로 시작할 수 있습니다.',
    icon: '📧',
  },
  {
    number: '02',
    title: '매일 아침 브리핑',
    description: '오전 6시, 오늘 확인할 것들을 정리해서 보내드립니다.',
    detail: '날씨, 주변 이벤트, 체크리스트까지 한눈에.',
    icon: '☀️',
  },
  {
    number: '03',
    title: '스마트한 영업',
    description: '날씨 변화 대비, 이벤트 수요 예측으로',
    detail: '더 효율적인 매장 운영이 가능합니다.',
    icon: '📈',
  },
];

const features = [
  {
    icon: '🌤️',
    title: '날씨 정보',
    description: '기온 변화, 비/눈 예보를 미리 알려드려요',
  },
  {
    icon: '📍',
    title: '주변 이벤트',
    description: '반경 1km 내 콘서트, 행사, 경기 일정',
  },
  {
    icon: '✅',
    title: '체크리스트',
    description: '유통기한, 청소, 발주 등 매일 점검 항목',
  },
  {
    icon: '📅',
    title: '시즌 캘린더',
    description: '다가오는 명절, 시험, 행사 미리보기',
  },
];

export default function HowItWorksPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="text-center mb-20 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          어떻게 작동하나요?
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          가입부터 매일 브리핑까지, 딱 3단계면 됩니다.
        </p>
      </section>

      {/* Steps Section */}
      <section className="max-w-5xl mx-auto px-4 mb-24">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-4xl">{step.icon}</span>
                  <span className="text-sm font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">
                    STEP {step.number}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-700 mb-2">{step.description}</p>
                <p className="text-gray-500">{step.detail}</p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-sm">
                {index === 1 ? (
                  <div className="scale-90">
                    <MockupImage />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl aspect-square flex items-center justify-center">
                    <span className="text-8xl">{step.icon}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20 px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
            브리핑에 포함되는 것들
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            매일 아침, 오늘 필요한 정보만 쏙쏙 골라서 보내드립니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            왜 STOREAGENT인가요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                본사 연동 불필요
              </h3>
              <p className="text-sm text-gray-600">
                개인 이메일로 구독하며, 본사 시스템과 연동되지 않습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                매일 아침 6시
              </h3>
              <p className="text-sm text-gray-600">
                출근 전에 확인하고, 준비된 상태로 영업을 시작하세요.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">모든 브랜드 OK</h3>
              <p className="text-sm text-gray-600">
                CU, GS25, 세븐일레븐, 이마트24 등 모든 편의점에서 사용 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-gray-600 mb-8">
          무료 뉴스레터로 먼저 경험해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#cta-section"
            className="btn-primary px-8 py-4 text-center"
          >
            무료 시작하기
          </Link>
          <Link
            href="/pricing"
            className="btn-secondary px-8 py-4 text-center"
          >
            플랜 비교하기
          </Link>
        </div>
      </section>
    </main>
  );
}
