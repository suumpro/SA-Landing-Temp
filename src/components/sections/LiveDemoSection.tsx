'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getTimeSlot } from '@/lib/timeUtils';
import type { TimeSlot } from '@/lib/timeUtils';
import { areaTypes } from '@/data/briefingData';
import type { AreaType } from '@/data/briefingData';
import { getSeasonalScenario } from '@/data/seasonal';
import { BriefingMockup } from '@/components/BriefingMockup';

function ValuePanel({ area }: { area: AreaType }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          이 브리핑을 받으면...
        </h3>
        <p className="text-sm text-gray-500">
          {area.icon} {area.label} 상권 점주님에게 이런 변화가 생깁니다
        </p>
      </div>

      <div className="space-y-4">
        {area.valueProps.map((prop) => (
          <div key={prop.metric} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-red-400 text-sm font-bold mt-0.5 shrink-0">Before</span>
              <p className="text-gray-500 text-sm line-through">{prop.before}</p>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-primary text-sm font-bold mt-0.5 shrink-0">After</span>
              <p className="text-gray-800 text-sm font-medium">{prop.after}</p>
            </div>
            <div className="flex items-center gap-2 bg-primary-lighter text-primary px-3 py-1.5 rounded-lg w-fit">
              <span className="text-xs font-bold">&#128200;</span>
              <span className="text-sm font-semibold">{prop.metric}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LiveDemoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const [timeSlot, setTimeSlot] = useState<TimeSlot>('morning');
  useEffect(() => { setTimeSlot(getTimeSlot()); }, []);
  const activeArea = areaTypes[activeIndex];
  const activeScenario = useMemo(
    () => getSeasonalScenario(activeArea.id, timeSlot),
    [activeArea.id, timeSlot],
  );

  const timeLabels = { morning: '오전', afternoon: '오후', evening: '저녁' };

  return (
    <section id="demo" ref={ref} className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            우리 매장에선 이런 브리핑을 받습니다
          </h2>
          <p className="text-gray-600">
            상권을 선택하고, 실제 브리핑을 확인해 보세요
          </p>
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
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span aria-hidden="true">{area.icon}</span>
              <span className="hidden sm:inline">{area.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content: Mockup + Value Panel */}
        <div
          key={activeArea.id}
          className={isVisible ? 'animate-fade-switch' : 'opacity-0'}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left: Full Briefing Mockup */}
            <div className="w-full lg:w-5/12">
              <BriefingMockup area={activeArea} scenario={activeScenario} />
            </div>

            {/* Right: Value Proposition Panel */}
            <div className="w-full lg:w-7/12 lg:pt-4">
              <ValuePanel area={activeArea} />
            </div>
          </div>
        </div>

        {/* Time Indicator + Sample Link */}
        <div className={`text-center mt-8 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-500 rounded-full text-xs border border-gray-100">
            <span aria-hidden="true">&#9200;</span>
            지금 {timeLabels[timeSlot]} 시각 기준 브리핑입니다 &middot; 시간대마다 내용이 달라져요
          </p>
          <div className="mt-3">
            <Link
              href="/sample"
              className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
            >
              7일간의 브리핑을 미리 확인해 보세요 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
