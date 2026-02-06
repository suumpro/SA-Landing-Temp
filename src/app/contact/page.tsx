'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

const schema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  contact: z.string().min(1, '연락처를 입력해주세요'),
  storeCount: z.string().min(1, '매장 수를 선택해주세요'),
});

type FormData = z.infer<typeof schema>;

const storeCountOptions = [
  { value: '1', label: '1개' },
  { value: '2-3', label: '2-3개' },
  { value: '4-5', label: '4-5개' },
  { value: '6+', label: '6개 이상' },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('상담 신청에 실패했습니다. 다시 시도해주세요.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success State
  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            상담 신청이 완료되었습니다!
          </h1>
          <p className="text-gray-600 mb-8">
            영업일 기준 1-2일 내로 연락드리겠습니다.
          </p>
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

  // Form State
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Lite 플랜 상담 신청
          </h1>
          <p className="text-gray-600">
            담당자가 연락드려 자세히 안내해 드립니다.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="이름"
              {...register('name')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-500"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              연락처 <span className="text-red-500">*</span>
            </label>
            <input
              id="contact"
              type="text"
              placeholder="전화번호 또는 이메일"
              {...register('contact')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-500"
              disabled={isSubmitting}
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-500">{errors.contact.message}</p>
            )}
          </div>

          {/* Store Count */}
          <div>
            <label htmlFor="storeCount" className="block text-sm font-medium text-gray-700 mb-1">
              운영 중인 매장 수 <span className="text-red-500">*</span>
            </label>
            <select
              id="storeCount"
              {...register('storeCount')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 bg-white"
              disabled={isSubmitting}
            >
              <option value="">선택해주세요</option>
              {storeCountOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.storeCount && (
              <p className="mt-1 text-sm text-red-500">{errors.storeCount.message}</p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '신청 중...' : '상담 신청하기'}
          </button>

          {/* Notice */}
          <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="text-green-500">✓</span>
            영업일 기준 1-2일 내 연락드립니다
          </p>
        </form>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← 메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
