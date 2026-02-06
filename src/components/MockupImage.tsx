'use client';

import { useEffect, useState } from 'react';

export default function MockupImage() {
  const [today, setToday] = useState('');

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
    setToday(`${month}월 ${date}일 (${day})`);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 max-w-sm mx-auto">
      {/* Phone Frame Header */}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-white text-xs opacity-60">오전 6:00</span>
      </div>

      {/* App Header */}
      <div className="bg-primary px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">SA 모닝 브리핑</h3>
            <p className="text-white/80 text-sm">{today || '2월 6일 (목)'} 오전 6:00</p>
          </div>
          <span className="text-3xl">☀️</span>
        </div>
      </div>

      {/* Content Cards */}
      <div className="p-4 space-y-3 bg-gray-50">
        {/* Weather Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🌤️</span>
            <span className="font-semibold text-gray-800">오늘 날씨</span>
          </div>
          <p className="text-gray-600 text-sm">서울 5°C → 12°C, 오후 맑음</p>
        </div>

        {/* Tip Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">💡</span>
            <span className="font-semibold text-gray-800">오늘의 팁</span>
          </div>
          <p className="text-gray-600 text-sm">낮 기온 상승 예상</p>
          <p className="text-primary text-sm font-medium mt-1">→ 아이스 음료 눈에 띄게 진열</p>
        </div>

        {/* Event Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">📍</span>
            <span className="font-semibold text-gray-800">주변 이벤트</span>
          </div>
          <p className="text-gray-600 text-sm">강남역 콘서트 (오후 7시)</p>
          <p className="text-primary text-sm font-medium mt-1">→ 저녁 유동인구 증가 예상</p>
        </div>

        {/* Checklist Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">✅</span>
            <span className="font-semibold text-gray-800">오늘 체크리스트</span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded" />
              <span>유통기한 임박 상품 확인</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded" />
              <span>도시락 재고 확인</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded" />
              <span>우유류 선입선출</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
