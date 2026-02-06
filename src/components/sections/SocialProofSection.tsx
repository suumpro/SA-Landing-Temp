const testimonials = [
  {
    quote: '아침에 브리핑 확인하고 발주하니까 마음이 편해졌어요. 예전엔 뭘 빠뜨렸나 항상 불안했는데.',
    author: 'CU 강남역점 김○○ 점주',
  },
  {
    quote: '비 오기 전에 미리 알려줘서 우산 준비해뒀더니 다 팔렸어요. 이런 게 진짜 도움되는 정보죠.',
    author: 'GS25 신촌점 박○○ 점주',
  },
];

export default function SocialProofSection() {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            다른 점주님들은 이렇게 말합니다
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
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
