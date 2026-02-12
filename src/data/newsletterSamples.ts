import { areaTypes } from './briefingData';
import type { BriefingScenario } from './briefingData';
import type { TimeSlot } from '@/lib/timeUtils';

export interface NewsletterSample {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  areaIndex: number;
  timeSlot: TimeSlot;
  scenario: BriefingScenario;
  highlightMetric: string;
}

const office = areaTypes[0];
const university = areaTypes[2];
const entertainment = areaTypes[3];

export const newsletterSamples: NewsletterSample[] = [
  {
    id: 'office-cold-snap',
    title: '한파 속 도시락 수요 폭증',
    subtitle: `${office.icon} ${office.label} 상권 모닝 브리핑`,
    date: '2026년 1월 15일 (수)',
    areaIndex: 0,
    timeSlot: 'morning',
    scenario: office.scenarios.morning,
    highlightMetric: '도시락 매출 +32%',
  },
  {
    id: 'university-finals',
    title: '기말고사 시즌, 에너지드링크 150% 증가',
    subtitle: `${university.icon} ${university.label} 상권 모닝 브리핑`,
    date: '2026년 1월 20일 (월)',
    areaIndex: 2,
    timeSlot: 'morning',
    scenario: university.scenarios.morning,
    highlightMetric: '에너지드링크 매출 3배',
  },
  {
    id: 'entertainment-concert',
    title: '홍대 K-POP 콘서트 15,000명',
    subtitle: `${entertainment.icon} ${entertainment.label} 상권 저녁 브리핑`,
    date: '2026년 2월 7일 (금)',
    areaIndex: 3,
    timeSlot: 'evening',
    scenario: entertainment.scenarios.evening,
    highlightMetric: '주류 매출 +200%',
  },
];
