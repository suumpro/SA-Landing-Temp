import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '구독 완료 | STOREAGENT',
  description: '뉴스레터 구독이 완료되었습니다.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="text-6xl mb-6">🎉</div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          구독해 주셔서 감사합니다!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          첫 번째 뉴스레터가 이번 주 내로 발송됩니다.<br />
          매주 유용한 운영 인사이트를 보내드릴게요.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Spam Notice */}
        <div className="bg-blue-50 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📬</span>
            <div className="text-left">
              <p className="font-medium text-gray-900">이메일함을 확인해 주세요</p>
              <p className="text-sm text-gray-600">
                스팸함에 들어갔을 수 있으니 확인 부탁드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-primary font-medium hover:text-primary-dark transition-colors"
        >
          ← 메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
