import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '뉴스레터 예시 | STOREAGENT',
  description: '상권별 실제 브리핑 샘플을 확인해 보세요. 날씨, 이벤트, 준비 팁까지 한눈에.',
  alternates: { canonical: '/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
