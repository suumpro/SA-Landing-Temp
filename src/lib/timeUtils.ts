export type TimeSlot = 'morning' | 'afternoon' | 'evening';

export function getTimeSlot(): TimeSlot {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  return 'evening';
}

export function getTimeLabel(slot: TimeSlot): string {
  const labels: Record<TimeSlot, string> = {
    morning: '오전',
    afternoon: '오후',
    evening: '저녁',
  };
  return labels[slot];
}

export function getBriefingTitle(slot: TimeSlot): string {
  const titles: Record<TimeSlot, string> = {
    morning: 'SA 모닝 브리핑',
    afternoon: 'SA 오후 체크',
    evening: 'SA 내일 준비',
  };
  return titles[slot];
}

export function getBriefingTime(slot: TimeSlot): string {
  const times: Record<TimeSlot, string> = {
    morning: '오전 6:00',
    afternoon: '오후 12:30',
    evening: '오후 6:00',
  };
  return times[slot];
}

export function getWeatherIcon(slot: TimeSlot): string {
  const icons: Record<TimeSlot, string> = {
    morning: '☀️',
    afternoon: '🌤️',
    evening: '🌙',
  };
  return icons[slot];
}

export function getToday(): string {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
  return `${month}월 ${date}일 (${day})`;
}
