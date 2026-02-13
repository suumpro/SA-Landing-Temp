'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { areaTypes } from '@/data/briefingData';
import { posAnalysisData } from '@/data/posAnalysisData';
import type { AreaId } from '@/data/posAnalysisData';
import {
  SalesTrendCard,
  SalesForecastCard,
  OrderRecommendCard,
  CompetitorCard,
} from '@/components/PosAnalysisCard';

export default function POSAnalysisSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const activeArea = areaTypes[activeIndex];
  const data = posAnalysisData[activeArea.id as AreaId];

  return (
    <section id="pos-analysis" ref={ref} className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-1.5 bg-primary-lighter text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
            📊 고급형
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            POS 데이터로 매출을 읽습니다
          </h2>
          <p className="text-gray-600">
            매출 트렌드부터 경쟁점 비교까지, AI가 자동으로 분석합니다
          </p>
          <p className="text-sm text-gray-500 mt-2">
            스탠다드 브리핑에 POS 데이터 분석이 더해집니다
          </p>
        </div>

        {/* Performance Metrics */}
        <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 bg-primary-lighter text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <span aria-hidden="true">📈</span> 평균 매출 +8.5%
          </div>
          <div className="flex items-center gap-2 bg-primary-lighter text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <span aria-hidden="true">📉</span> 주간 폐기 비용 18만원 절감
          </div>
          <div className="flex items-center gap-2 bg-primary-lighter text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <span aria-hidden="true">🎯</span> 발주 적중률 94%
          </div>
        </div>

        {/* Area Type Tabs */}
        <div
          className={`flex justify-center gap-2 sm:gap-3 mb-10 ${
            isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          {areaTypes.map((area, index) => (
            <button
              key={area.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`${area.label} 상권 선택`}
              aria-pressed={activeIndex === index}
              className={`flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeIndex === index
                  ? 'bg-primary text-white shadow-md ring-2 ring-primary/30 ring-offset-2'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              <span aria-hidden="true">{area.icon}</span>
              <span className="hidden sm:inline">{area.label}</span>
            </button>
          ))}
        </div>

        {/* 2x2 Analysis Cards Grid */}
        <div
          key={activeArea.id}
          className={isVisible ? 'animate-fade-switch' : 'opacity-0'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SalesTrendCard data={data.salesTrend} />
            <SalesForecastCard data={data.salesForecast} />
            <OrderRecommendCard data={data.orderRecommend} />
            <CompetitorCard data={data.competitor} />
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <Link
            href="/contact?plan=premium"
            className="btn-primary inline-flex items-center gap-2"
          >
            고급형으로 시작하기
            <span aria-hidden="true">→</span>
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            월 9,900원 · 언제든 해지 가능
          </p>
        </div>
      </div>
    </section>
  );
}
