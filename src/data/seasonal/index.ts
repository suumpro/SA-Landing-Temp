import { getCurrentSeason, getWeekDates, getWeekTitle } from '@/lib/timeUtils';
import type { TimeSlot } from '@/lib/timeUtils';
import type { BriefingScenario } from '../briefingData';
import type { AreaId, SeasonScenarios } from './types';
import { winterScenarios } from './winter';
import { springScenarios } from './spring';
import { summerScenarios } from './summer';
import { autumnScenarios } from './autumn';

export interface DailyBriefing {
  day: string;
  date: string;
  theme: string;
  scenario: BriefingScenario;
}

export interface WeeklyAreaSample {
  areaId: string;
  weekTitle: string;
  days: DailyBriefing[];
}

const scenarioMap: Record<string, SeasonScenarios> = {
  winter: winterScenarios,
  spring: springScenarios,
  summer: summerScenarios,
  autumn: autumnScenarios,
};

const AREA_IDS: AreaId[] = ['office', 'residential', 'university', 'entertainment'];

const TIME_SLOT_DAY: Record<TimeSlot, number> = {
  morning: 0,
  afternoon: 2,
  evening: 4,
};

export function buildWeeklySamples(): WeeklyAreaSample[] {
  const season = getCurrentSeason();
  const weekDates = getWeekDates();
  const weekTitle = getWeekTitle();
  const scenarios = scenarioMap[season];

  return AREA_IDS.map((areaId) => {
    const templates = scenarios[areaId];
    const days: DailyBriefing[] = templates.map((t) => {
      const dateInfo = weekDates[t.dayIndex];
      return {
        day: dateInfo.day,
        date: dateInfo.date,
        theme: t.theme,
        scenario: t.scenario,
      };
    });

    return { areaId, weekTitle, days };
  });
}

export function getSeasonalScenario(areaId: string, timeSlot: TimeSlot): BriefingScenario {
  const season = getCurrentSeason();
  const scenarios = scenarioMap[season];
  const templates = scenarios[areaId as AreaId] ?? scenarios.office;
  return templates[TIME_SLOT_DAY[timeSlot]].scenario;
}
