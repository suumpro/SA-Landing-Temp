'use client';

import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/data/testimonials';

const tagColors: Record<string, { bg: string; quote: string; hoverBorder: string }> = {
  '☀️ 일상 운영': { bg: 'bg-amber-50 text-amber-700', quote: 'text-amber-100', hoverBorder: 'hover:border-amber-200' },
  '🌧️ 비 오는 날': { bg: 'bg-sky-50 text-sky-700', quote: 'text-sky-100', hoverBorder: 'hover:border-sky-200' },
  '📍 주변 이벤트': { bg: 'bg-rose-50 text-rose-700', quote: 'text-rose-100', hoverBorder: 'hover:border-rose-200' },
  '📊 매출 분석': { bg: 'bg-emerald-50 text-emerald-700', quote: 'text-emerald-100', hoverBorder: 'hover:border-emerald-200' },
  '🎓 시즌 대응': { bg: 'bg-violet-50 text-violet-700', quote: 'text-violet-100', hoverBorder: 'hover:border-violet-200' },
  '🎤 주말 매출': { bg: 'bg-orange-50 text-orange-700', quote: 'text-orange-100', hoverBorder: 'hover:border-orange-200' },
};
const defaultTagColor = { bg: 'bg-gray-50 text-gray-600', quote: 'text-gray-100', hoverBorder: 'hover:border-gray-200' };

export default function SocialProofSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="social-proof" ref={ref} className="section bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Reviews</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            다른 점주님들은 이렇게 말합니다
          </h2>
        </div>

        {/* Aggregate Rating */}
        <div className={`flex items-center justify-center gap-4 mb-10 bg-gradient-to-r from-primary/5 via-white to-secondary/5 rounded-2xl py-5 px-6 max-w-sm mx-auto border border-gray-100 shadow-sm ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="text-4xl font-bold text-gray-900">4.8</div>
          <div>
            <div className="flex gap-0.5 mb-1" role="img" aria-label="평점 4.8점">
              {[...Array(5)].map((_, i) => (
                <Star key={`agg-${i}`} className={`w-5 h-5 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
              ))}
            </div>
            <p className="text-sm text-gray-500">1,500+ 점주님의 평가</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const tagStyle = tagColors[testimonial.tag] || defaultTagColor;
            const initials = testimonial.author.split(' ').pop()?.charAt(0) || '?';

            return (
              <div
                key={testimonial.author}
                className={`relative bg-white rounded-2xl p-6 border border-gray-100 ${tagStyle.hoverBorder} hover:shadow-md transition-all duration-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${(index + 1) * 80}ms` : '0ms' }}
              >
                {/* Quote decoration */}
                <div className={`absolute top-4 right-5 text-5xl font-serif ${tagStyle.quote} leading-none select-none`} aria-hidden="true">
                  &ldquo;
                </div>

                <div className="relative">
                  {/* Rating + Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5" role="img" aria-label={`${testimonial.rating}점 만점`}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={`star-${i}`} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagStyle.bg}`}>
                      {testimonial.tag}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-5 leading-relaxed text-[15px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500">
                      {initials}
                    </div>
                    <cite className="text-sm text-gray-500 not-italic">
                      {testimonial.author}
                    </cite>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Logos */}
        <div className={`flex items-center justify-center gap-8 sm:gap-12 mt-14 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <p className="text-xs text-gray-400 mr-2">이용 중인 매장</p>
          {['CU', 'GS25', '이마트24', '세븐일레븐'].map((brand) => (
            <span key={brand} className="text-base sm:text-lg font-bold text-gray-300">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
