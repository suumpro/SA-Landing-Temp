'use client';

import { useState } from 'react';

export default function MockupImage() {
  const [today] = useState(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
    return `${month}월 ${date}일 (${day})`;
  });

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 max-w-sm mx-auto">
      {/* Mobile Status Bar */}
      <div className="bg-gray-900 px-6 pt-3 pb-2 flex items-center justify-between">
        <span className="text-white text-xs font-medium">오전 6:00</span>
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
            <h3 className="text-white font-bold text-lg">SA 모닝 브리핑</h3>
            <p className="text-white/80 text-sm">{today} 오전 6:00</p>
          </div>
          <span className="text-3xl" role="img" aria-label="맑음">☀️</span>
        </div>
      </div>

      {/* Content Cards */}
      <div className="p-4 space-y-3 bg-gray-50">
        {/* Weather Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" role="img" aria-hidden="true">🌤️</span>
            <span className="font-semibold text-gray-800">오늘 날씨</span>
          </div>
          <p className="text-gray-600 text-sm">서울 5°C → 12°C, 오후 맑음</p>
          <div className="mt-2 flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-medium px-2.5 py-1 rounded-lg">
            <span aria-hidden="true">⚠️</span>
            오후 5시 이후 기온 급락, 영하권 진입
          </div>
        </div>

        {/* Tip Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" role="img" aria-hidden="true">💡</span>
            <span className="font-semibold text-gray-800">오늘의 팁</span>
          </div>
          <p className="text-gray-600 text-sm">낮 기온 상승 예상</p>
          <p className="text-primary text-sm font-medium mt-1">→ 아이스 음료 눈에 띄게 진열</p>
        </div>

        {/* Event Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" role="img" aria-hidden="true">📍</span>
            <span className="font-semibold text-gray-800">주변 이벤트</span>
          </div>
          <p className="text-gray-600 text-sm">강남역 콘서트 (오후 7시) · 예상 관객 15,000명</p>
          <p className="text-primary text-sm font-medium mt-1">→ 저녁 유동인구 증가 예상</p>
        </div>

        {/* Checklist Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" role="img" aria-hidden="true">✅</span>
            <span className="font-semibold text-gray-800">오늘 체크리스트</span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2 cursor-default">
              <div className="w-4 h-4 border-2 border-gray-300 rounded" aria-hidden="true" />
              <span>유통기한 임박 상품 확인</span>
            </label>
            <label className="flex items-center gap-2 cursor-default">
              <div className="w-4 h-4 border-2 border-gray-300 rounded" aria-hidden="true" />
              <span>도시락 재고 확인</span>
            </label>
            <label className="flex items-center gap-2 cursor-default">
              <div className="w-4 h-4 border-2 border-gray-300 rounded" aria-hidden="true" />
              <span>우유류 선입선출</span>
            </label>
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
