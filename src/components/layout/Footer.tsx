import Link from 'next/link';

const footerLinks = [
  { href: '/how-it-works', label: '서비스 소개' },
  { href: '/pricing', label: '가격' },
  { href: '/blog', label: '인사이트' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: '상담 신청' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">SA</span>
              </div>
              <span className="text-base font-bold text-white">STOREAGENT</span>
            </Link>
            <p className="text-sm text-gray-500">
              편의점 점주를 위한 AI 모닝 브리핑
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="푸터 내비게이션">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-10 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} STOREAGENT. All rights reserved.
          </p>
          <a
            href="mailto:support@storeagent.kr"
            className="text-sm text-gray-600 hover:text-white transition-colors"
          >
            support@storeagent.kr
          </a>
        </div>
      </div>
    </footer>
  );
}
