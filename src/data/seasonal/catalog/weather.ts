import type { WeatherBlock } from '../types';

// ===== 겨울 (12~2월) =====

export const coldWave: WeatherBlock = {
  temp: '-3°C → 2°C', warning: '한파 주의보, 체감온도 -8°C', icon: '❄️',
};
export const coldWaveSevere: WeatherBlock = {
  temp: '-6°C → 0°C', warning: '올겨울 최저 기온, 수도 동파 주의', icon: '❄️',
};
export const snowExpected: WeatherBlock = {
  temp: '-2°C → 3°C', warning: '오후 2시부터 눈, 예상 적설량 3cm', icon: '🌨️',
};
export const winterMild: WeatherBlock = {
  temp: '-1°C → 4°C', warning: '오후 눈 예보 30%, 저녁 기온 급락', icon: '🌤️',
};
export const winterWeekendCold: WeatherBlock = {
  temp: '-4°C → 2°C', warning: '주말 한파 지속, 외출 최소화', icon: '❄️',
};
export const winterSunny: WeatherBlock = {
  temp: '0°C → 5°C', warning: '맑지만 쌀쌀, 체감온도 -3°C', icon: '☀️',
};

// ===== 봄 (3~5월) =====

export const fineDustBad: WeatherBlock = {
  temp: '10°C → 18°C', warning: '미세먼지 나쁨 (PM2.5 81μg/m³)', icon: '😷',
};
export const springRain: WeatherBlock = {
  temp: '12°C → 16°C', warning: '오후 봄비 70%, 우산 필수', icon: '🌧️',
};
export const cherryBlossomPerfect: WeatherBlock = {
  temp: '15°C → 23°C', warning: '완벽한 봄 날씨, 벚꽃 만개', icon: '🌸',
};
export const springMild: WeatherBlock = {
  temp: '11°C → 19°C', warning: '맑고 화창, 나들이 좋은 날', icon: '☀️',
};
export const springWindy: WeatherBlock = {
  temp: '8°C → 16°C', warning: '강풍 주의, 미세먼지 보통', icon: '💨',
};

// ===== 여름 (6~8월) =====

export const heatwave: WeatherBlock = {
  temp: '28°C → 35°C', warning: '폭염주의보, 체감온도 38°C', icon: '🔥',
};
export const tropicalNight: WeatherBlock = {
  temp: '27°C → 34°C', warning: '열대야 (밤 최저 27°C)', icon: '🌙',
};
export const monsoon: WeatherBlock = {
  temp: '25°C → 29°C', warning: '장마전선 북상, 습도 85%, 우산 필수', icon: '🌧️',
};
export const summerEvening: WeatherBlock = {
  temp: '26°C → 33°C', warning: '오후 소나기 가능, 저녁 선선', icon: '⛅',
};
export const summerHot: WeatherBlock = {
  temp: '27°C → 33°C', warning: '무더위 계속, 자외선 지수 매우 높음', icon: '☀️',
};

// ===== 가을 (9~11월) =====

export const autumnCrisp: WeatherBlock = {
  temp: '14°C → 21°C', warning: '아침 쌀쌀, 낮 포근 (일교차 7°C)', icon: '🍂',
};
export const autumnRain: WeatherBlock = {
  temp: '13°C → 17°C', warning: '하루종일 비, 강수량 20mm', icon: '🌧️',
};
export const autumnClear: WeatherBlock = {
  temp: '12°C → 20°C', warning: '맑고 쾌청, 외출하기 좋은 날', icon: '☀️',
};
export const autumnCool: WeatherBlock = {
  temp: '10°C → 16°C', warning: '쌀쌀, 따뜻한 옷 필요', icon: '🍂',
};
export const halloweenClear: WeatherBlock = {
  temp: '12°C → 18°C', warning: '맑음, 할로윈 축제 최적', icon: '🎃',
};
