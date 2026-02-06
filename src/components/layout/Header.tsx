'use client';

import Link from 'next/link';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">STOREAGENT</span>
        </Link>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('cta-section')}
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            뉴스레터 구독
          </button>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            상담 신청
          </Link>
        </div>
      </div>
    </header>
  );
}
