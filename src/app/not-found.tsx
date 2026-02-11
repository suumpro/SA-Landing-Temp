import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다 | STOREAGENT',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href="/" className="btn-primary px-6 py-3 text-center">
            메인으로 돌아가기
          </Link>
          <Link href="/faq" className="btn-secondary px-6 py-3 text-center">
            자주 묻는 질문
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Link
            href="/pricing"
            className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700">가격</span>
          </Link>
          <Link
            href="/how-it-works"
            className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700">서비스 소개</span>
          </Link>
          <Link
            href="/contact"
            className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700">상담 신청</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
