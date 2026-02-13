'use client';

import { useState } from 'react';
import Link from 'next/link';
import { areaTypes } from '@/data/briefingData';
import { newsletterSamples } from '@/data/newsletterSamples';
import { BriefingMockup } from '@/components/BriefingMockup';

export default function BlogPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sample = newsletterSamples[activeIndex] ?? newsletterSamples[0];
  const area = areaTypes[sample.areaIndex] ?? areaTypes[0];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 pt-28 pb-12 text-center">
          <span className="inline-flex items-center gap-1.5 bg-primary-lighter text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
            실제 발송 예시
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            이런 브리핑이 매일 아침 도착합니다
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            상권별 실제 브리핑 샘플을 확인해 보세요. 날씨, 이벤트, 준비 팁까지 한눈에.
          </p>
        </div>
      </section>

      {/* Card Selector */}
      <section className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {newsletterSamples.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-4 rounded-xl border-2 transition-all ${
                activeIndex === idx
                  ? 'border-primary bg-white shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <p className="text-xs text-gray-400 mb-1">{s.date}</p>
              <p className={`font-bold text-sm mb-1 ${
                activeIndex === idx ? 'text-primary' : 'text-gray-900'
              }`}>
                {s.title}
              </p>
              <p className="text-xs text-gray-500">{s.subtitle}</p>
              <span className="inline-flex items-center gap-1 mt-2 text-sm font-bold text-primary bg-primary-lighter px-3 py-1 rounded-full">
                <span aria-hidden="true">📊</span>{s.highlightMetric}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Content: Mockup + Insight */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left: Briefing Mockup */}
          <div className="w-full lg:w-5/12">
            <BriefingMockup
              area={area}
              scenario={sample.scenario}
              dateOverride={sample.date}
              timeOverride={sample.timeSlot === 'morning' ? '오전 6:30' : '오후 6:00'}
            />
          </div>

          {/* Right: Insight Panel */}
          <div className="w-full lg:w-7/12 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {sample.title}
              </h2>
              <p className="text-sm text-gray-500">{sample.subtitle} &middot; {sample.date}</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-semibold text-gray-800 text-sm">이 브리핑의 핵심 인사이트</h3>

              <div className="space-y-3">
                {sample.scenario.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-primary text-sm font-bold mt-0.5 shrink-0">{idx + 1}</span>
                    <div>
                      <p className="text-sm text-gray-700">{tip.text}</p>
                      <p className="text-sm text-primary font-medium mt-0.5">{tip.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-800 text-sm mb-3">주변 이벤트 영향</h3>
              <div className="space-y-3">
                {sample.scenario.events.map((event, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-3">
                    <p className="text-sm text-gray-800 font-medium">{event.icon} {event.title}</p>
                    <p className="text-xs text-gray-500">{event.detail}</p>
                    <p className="text-xs text-primary font-medium mt-0.5">{event.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Highlight */}
            <div className="flex items-center gap-3 bg-primary-lighter rounded-xl p-5 border-2 border-primary/20">
              <span className="text-3xl">📊</span>
              <div>
                <p className="text-base font-bold text-primary">{sample.highlightMetric}</p>
                <p className="text-xs text-gray-600">이 브리핑을 받은 점주님들의 실제 성과</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            매일 아침, 이런 브리핑을 받아보세요
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            무료 뉴스레터로 시작하고, 원하면 고급 분석까지.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#faq"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3"
            >
              무료로 구독하기
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              서비스 더 알아보기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
