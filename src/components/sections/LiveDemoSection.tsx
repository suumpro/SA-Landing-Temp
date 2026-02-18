'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMounted } from '@/hooks/useIsMounted';
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
          <div key={prop.metric} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-xs font-bold text-gray-400 mt-0.5 shrink-0 uppercase tracking-wider">Before</span>
              <p className="text-gray-400 text-sm line-through">{prop.before}</p>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-xs font-bold text-primary mt-0.5 shrink-0 uppercase tracking-wider">After</span>
              <p className="text-gray-800 text-sm font-medium">{prop.after}</p>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg w-fit">
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

  const mounted = useIsMounted();
  const timeSlot: TimeSlot = mounted ? getTimeSlot() : 'morning';
  const activeArea = areaTypes[activeIndex];
  const activeScenario = useMemo(
    () => getSeasonalScenario(activeArea.id, timeSlot),
    [activeArea.id, timeSlot],
  );

  const timeLabels = { morning: '오전', afternoon: '오후', evening: '저녁' };

  return (
    <section id="demo" ref={ref} className="section bg-bg-cool">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Live Demo</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            우리 매장에선 이런 브리핑을 받습니다
          </h2>
          <p className="text-gray-500">
            상권을 선택하고, 실제 브리핑을 확인해 보세요
          </p>
        </div>

        {/* Area Type Tabs */}
        <div
          role="tablist"
          aria-label="상권 유형 선택"
          className={`flex justify-center gap-2 sm:gap-3 mb-10 ${
            isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          {areaTypes.map((area, index) => (
            <button
              key={area.id}
              role="tab"
              aria-selected={activeIndex === index}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  const next = (index + 1) % areaTypes.length;
                  setActiveIndex(next);
                  (e.currentTarget.parentElement?.children[next] as HTMLElement)?.focus();
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  const prev = (index - 1 + areaTypes.length) % areaTypes.length;
                  setActiveIndex(prev);
                  (e.currentTarget.parentElement?.children[prev] as HTMLElement)?.focus();
                }
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeIndex === index
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
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
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-500 rounded-full text-xs border border-gray-100">
            지금 {timeLabels[timeSlot]} 시각 기준 브리핑입니다 &middot; 시간대마다 내용이 달라져요
          </p>
          <div className="mt-3">
            <Link
              href="/sample"
              className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
            >
              7일간의 브리핑을 미리 확인해 보세요 &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
