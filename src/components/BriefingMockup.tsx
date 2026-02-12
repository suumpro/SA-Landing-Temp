'use client';

import { memo, useState, useEffect } from 'react';
import { getTimeSlot, getBriefingTitle, getBriefingTime, getToday } from '@/lib/timeUtils';
import type { TimeSlot } from '@/lib/timeUtils';
import type { AreaType, BriefingScenario } from '@/data/briefingData';

interface BriefingMockupProps {
  area: AreaType;
  scenario: BriefingScenario;
  dateOverride?: string;
  timeOverride?: string;
}

export const BriefingMockup = memo(function BriefingMockup({ area, scenario, dateOverride, timeOverride }: BriefingMockupProps) {
  const [timeSlot, setTimeSlot] = useState<TimeSlot>('morning');
  const [today, setToday] = useState(dateOverride ?? '');
  const [time, setTime] = useState(timeOverride ?? '오전 6:00');

  useEffect(() => {
    const ts = getTimeSlot();
    setTimeSlot(ts);
    if (!dateOverride) setToday(getToday());
    if (!timeOverride) setTime(getBriefingTime(ts));
  }, [dateOverride, timeOverride]);

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 w-full max-w-sm mx-auto">
      {/* Status Bar */}
      <div className="bg-gray-900 px-6 pt-3 pb-2 flex items-center justify-between">
        <span className="text-white text-xs font-medium">{time}</span>
        <div className="w-20 h-5 bg-gray-800 rounded-full" aria-hidden="true" />
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
          </svg>
        </div>
      </div>

      {/* App Header */}
      <div className="bg-primary px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-white font-bold text-lg">{dateOverride ? 'SA 오늘의 브리핑' : getBriefingTitle(timeSlot)}</h4>
            <p className="text-white/80 text-sm">{today} {time}</p>
            <p className="text-white/60 text-xs mt-0.5">{area.location}</p>
          </div>
          <span className="text-3xl" role="img" aria-label="날씨">{scenario.weather.icon}</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="p-4 space-y-3 bg-gray-50 max-h-[400px] overflow-y-auto mockup-scroll">
        {/* Weather Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" aria-hidden="true">{scenario.weather.icon}</span>
            <span className="font-semibold text-gray-800 text-sm">오늘 날씨</span>
          </div>
          <p className="text-gray-600 text-sm">{scenario.weather.temp}</p>
          <div className="mt-2 flex items-start gap-1.5 bg-orange-50 text-orange-700 text-xs font-medium px-2.5 py-1.5 rounded-lg">
            <span aria-hidden="true" className="shrink-0 mt-0.5">&#9888;&#65039;</span>
            <span>{scenario.weather.warning}</span>
          </div>
        </div>

        {/* Tips Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">&#128161;</span>
            <span className="font-semibold text-gray-800 text-sm">오늘의 준비 팁</span>
          </div>
          <div className="space-y-3">
            {scenario.tips.map((tip, idx) => (
              <div key={`tip-${idx}`}>
                <p className="text-gray-700 text-sm">{tip.text}</p>
                <p className="text-primary text-sm font-medium mt-0.5">&rarr; {tip.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Events Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">&#128205;</span>
            <span className="font-semibold text-gray-800 text-sm">주변 이벤트 (반경 1km)</span>
          </div>
          <div className="space-y-3">
            {scenario.events.map((event, idx) => (
              <div key={`evt-${idx}`} className="border-l-2 border-primary/30 pl-3">
                <p className="text-gray-800 text-sm font-medium">{event.icon} {event.title}</p>
                <p className="text-gray-500 text-xs">{event.detail}</p>
                <p className="text-primary text-xs font-medium mt-0.5">&rarr; {event.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">&#9989;</span>
            <span className="font-semibold text-gray-800 text-sm">오늘 체크리스트</span>
          </div>
          <div className="space-y-2">
            {scenario.checklist.map((item, idx) => (
              <label key={`chk-${idx}`} className="flex items-start gap-2 cursor-default">
                <div className="w-4 h-4 border-2 border-gray-300 rounded mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-gray-600 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Week Preview Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl" aria-hidden="true">&#128197;</span>
            <span className="font-semibold text-gray-800 text-sm">이번 주 미리보기</span>
          </div>
          <div className="space-y-1.5">
            {scenario.weekPreview.map((item, idx) => (
              <p key={`wp-${idx}`} className="text-gray-600 text-sm flex items-start gap-1.5">
                <span className="text-gray-400 shrink-0">&bull;</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Safe Area */}
      <div className="bg-gray-50 h-5 flex items-end justify-center pb-1">
        <div className="w-28 h-1 bg-gray-300 rounded-full" aria-hidden="true" />
      </div>
    </div>
  );
});
