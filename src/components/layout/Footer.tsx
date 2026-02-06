import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-gray-700">
            STOREAGENT
          </Link>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} STOREAGENT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
