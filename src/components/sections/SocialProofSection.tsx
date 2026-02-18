'use client';

import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/data/testimonials';

const tagColors: Record<string, string> = {
  '☀️ 일상 운영': 'bg-amber-50 text-amber-700',
  '🌧️ 비 오는 날': 'bg-sky-50 text-sky-700',
  '📍 주변 이벤트': 'bg-rose-50 text-rose-700',
  '📊 매출 분석': 'bg-emerald-50 text-emerald-700',
  '🎓 시즌 대응': 'bg-violet-50 text-violet-700',
  '🎤 주말 매출': 'bg-orange-50 text-orange-700',
};

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

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const colorClass = tagColors[testimonial.tag] || 'bg-gray-50 text-gray-600';
            const initials = testimonial.author.split(' ').pop()?.charAt(0) || '?';

            return (
              <div
                key={testimonial.author}
                className={`relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${(index + 1) * 80}ms` : '0ms' }}
              >
                {/* Quote decoration */}
                <div className="absolute top-4 right-5 text-5xl font-serif text-gray-100 leading-none select-none" aria-hidden="true">
                  &ldquo;
                </div>

                <div className="relative">
                  {/* Rating + Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5" role="img" aria-label="5점 만점">
                      {[...Array(5)].map((_, i) => (
                        <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colorClass}`}>
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
      </div>
    </section>
  );
}
