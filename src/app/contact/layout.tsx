import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '상담 신청 | STOREAGENT',
  description: 'STOREAGENT 도입 상담을 신청하세요. 담당자가 영업일 기준 1-2일 내로 연락드립니다.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
