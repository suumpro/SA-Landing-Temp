'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const anchorLinks = [
  { href: '/#how-it-works', label: '서비스 소개', anchor: 'how-it-works' },
  { href: '/#pricing', label: '가격', anchor: 'pricing' },
  { href: '/#faq', label: 'FAQ', anchor: 'faq' },
];

const contentLinks = [
  { href: '/sample', label: '브리핑 샘플', highlight: true },
  { href: '/blog', label: '인사이트' },
];

export default function Header() {
  // Store the pathname when menu was opened; menu is "open" only while pathname matches
  const [menuOpenPathname, setMenuOpenPathname] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isMenuOpen = menuOpenPathname !== null && menuOpenPathname === pathname;
  const setIsMenuOpen = (open: boolean) => setMenuOpenPathname(open ? pathname : null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpenPathname(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-100/80'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">SA</span>
          </div>
          <span className="text-lg font-bold text-gray-900">STOREAGENT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="메인 내비게이션">
          {anchorLinks.map((link) => {
            const isHome = pathname === '/';

            if (isHome) {
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.anchor)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            );
          })}
          <span className="w-px h-4 bg-gray-200 mx-1" aria-hidden="true" />
          {contentLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                pathname === link.href
                  ? 'text-primary bg-primary-lighter'
                  : link.highlight
                  ? 'text-primary hover:bg-primary-lighter/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollToSection('faq')}
            className="px-4 py-2 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded-lg transition-all"
          >
            무료 구독
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-5 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all"
          >
            플랜 보기
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="bg-white/95 backdrop-blur-xl border-t border-gray-100 max-w-6xl mx-auto px-4 py-3 space-y-1"
          aria-label="모바일 내비게이션"
        >
          {anchorLinks.map((link) => {
            const isHome = pathname === '/';

            if (isHome) {
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.anchor)}
                  className="block w-full text-left px-3 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            );
          })}
          <hr className="border-gray-100 my-1" />
          {contentLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-3 rounded-lg transition-all ${
                pathname === link.href
                  ? 'text-primary bg-primary-lighter font-medium'
                  : link.highlight
                  ? 'text-primary font-semibold'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-100 my-1" />
          <div className="flex gap-2 pt-1 pb-2">
            <button
              onClick={() => scrollToSection('faq')}
              className="flex-1 py-3 text-sm font-medium text-primary border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
            >
              무료 구독
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="flex-1 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all"
            >
              플랜 보기
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
