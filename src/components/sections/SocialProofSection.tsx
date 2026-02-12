'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    quote: '아침에 브리핑 확인하고 발주하니까 마음이 편해졌어요. 예전엔 뭘 빠뜨렸나 항상 불안했는데.',
    author: 'CU 강남역점 김○○ 점주',
    tag: '☀️ 일상 운영',
  },
  {
    quote: '비 오기 전에 미리 알려줘서 우산 준비해뒀더니 다 팔렸어요. 이런 게 진짜 도움되는 정보죠.',
    author: 'GS25 신촌점 박○○ 점주',
    tag: '🌧️ 비 오는 날',
  },
];

export default function SocialProofSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="social-proof" ref={ref} className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            다른 점주님들은 이렇게 말합니다
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1" role="img" aria-label="5점 만점">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400" aria-hidden="true">⭐</span>
                  ))}
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {testimonial.tag}
                </span>
              </div>
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <cite className="text-sm text-gray-500 not-italic">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
