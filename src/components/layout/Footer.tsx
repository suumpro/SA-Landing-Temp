import Link from 'next/link';

const footerLinks = [
  { href: '/how-it-works', label: '서비스 소개' },
  { href: '/pricing', label: '가격' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: '상담 신청' },
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-lg font-bold text-gray-800">
              STOREAGENT
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              편의점 점주를 위한 AI 모닝 브리핑
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="푸터 내비게이션">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} STOREAGENT. All rights reserved.
          </p>
          <a
            href="mailto:support@storeagent.kr"
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            support@storeagent.kr
          </a>
        </div>
      </div>
    </footer>
  );
}
