'use client';

import { useState, useEffect } from 'react';
import { getTimeSlot, getBriefingTitle, getBriefingTime, getWeatherIcon, getToday } from '@/lib/timeUtils';
import type { TimeSlot } from '@/lib/timeUtils';

const contentByTime = {
  morning: {
    weather: { temp: '서울 5°C → 12°C', warning: '오후 5시 이후 기온 급락, 영하권 진입' },
    tip: { text: '오늘 화요일, 도시락 수요 증가', action: '삼각김밥·도시락 진열 강화' },
    event: { text: '강남역 채용박람회 (오전 10시~)', impact: '점심 도시락·음료 수요 급증' },
    checklist: ['유통기한 임박 상품 확인', '도시락·삼각김밥 재고 확인', '우유류 선입선출'],
  },
  afternoon: {
    weather: { temp: '현재 11°C · 최고 도달', warning: '3시 이후 기온 하락, 저녁 영하' },
    tip: { text: '오후 간식 타임, 회의 후 수요', action: '초콜릿·과자류 눈에 띄게 배치' },
    event: { text: '삼성동 컨퍼런스 진행 중', impact: '퇴근 시간 음료·간식 수요' },
    checklist: ['간식류 진열 보충', '야근 대비 즉석식품 확인', '냉장고 온도 체크'],
  },
  evening: {
    weather: { temp: '현재 4°C · 최저 -2°C', warning: '내일 아침 영하 3°C, 출근길 체감 -8°C' },
    tip: { text: '야근 수요 피크 (7시~10시)', action: '컵라면·커피 전면 배치' },
    event: { text: '강남 야근 밀집 시간대', impact: '즉석식품·커피 수요 +60%' },
    checklist: ['내일 발주 목록 확인', '야근용 즉석식품 재고', '내일 알바 스케줄 확인'],
  },
} as const;

export default function MockupImage() {
  const [timeSlot, setTimeSlot] = useState<TimeSlot>('morning');
  const [today, setToday] = useState('');

  useEffect(() => {
    setTimeSlot(getTimeSlot());
    setToday(getToday());
  }, []);
  const content = contentByTime[timeSlot];

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 max-w-sm mx-auto">
      {/* Mobile Status Bar */}
      <div className="bg-gray-900 px-6 pt-3 pb-2 flex items-center justify-between">
        <span className="text-white text-xs font-medium">{getBriefingTime(timeSlot)}</span>
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
            <h3 className="text-white font-bold text-lg">{getBriefingTitle(timeSlot)}</h3>
            <p className="text-white/80 text-sm">{today} {getBriefingTime(timeSlot)}</p>
          </div>
          <span className="text-3xl" role="img" aria-label="날씨">{getWeatherIcon(timeSlot)}</span>
        </div>
      </div>

      {/* Content Cards */}
      <div className="p-4 space-y-3 bg-gray-50">
        {/* Weather Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" aria-hidden="true">{getWeatherIcon(timeSlot)}</span>
            <span className="font-semibold text-gray-800">오늘 날씨</span>
          </div>
          <p className="text-gray-600 text-sm">{content.weather.temp}</p>
          <div className="mt-2 flex items-start gap-1.5 bg-orange-50 text-orange-700 text-xs font-medium px-2.5 py-1.5 rounded-lg">
            <span aria-hidden="true" className="shrink-0">&#9888;&#65039;</span>
            <span>{content.weather.warning}</span>
          </div>
        </div>

        {/* Tip Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" aria-hidden="true">&#128161;</span>
            <span className="font-semibold text-gray-800">오늘의 팁</span>
          </div>
          <p className="text-gray-600 text-sm">{content.tip.text}</p>
          <p className="text-primary text-sm font-medium mt-1">&rarr; {content.tip.action}</p>
        </div>

        {/* Event Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" aria-hidden="true">&#128205;</span>
            <span className="font-semibold text-gray-800">주변 이벤트</span>
          </div>
          <p className="text-gray-600 text-sm">{content.event.text}</p>
          <p className="text-primary text-sm font-medium mt-1">&rarr; {content.event.impact}</p>
        </div>

        {/* Checklist Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" aria-hidden="true">&#9989;</span>
            <span className="font-semibold text-gray-800">오늘 체크리스트</span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            {content.checklist.map((item) => (
              <label key={item} className="flex items-center gap-2 cursor-default">
                <div className="w-4 h-4 border-2 border-gray-300 rounded" aria-hidden="true" />
                <span>{item}</span>
              </label>
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
}
