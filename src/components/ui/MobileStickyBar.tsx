'use client';

import { useState, useEffect } from 'react';

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~500px (past hero)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        isVisible
          ? 'translate-y-0'
          : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 safe-area-pb">
        <div className="max-w-lg mx-auto">
          <p className="text-center text-xs text-gray-400 mb-2">
            <strong className="text-gray-500">1,500+</strong> 점주님과 함께
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('pricing')}
              className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              플랜 보기
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="flex-1 py-3.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-colors text-center"
            >
              무료 뉴스레터 받기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
