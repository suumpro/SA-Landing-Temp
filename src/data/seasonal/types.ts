import type { BriefingScenario } from '../briefingData';

export type AreaId = 'office' | 'residential' | 'university' | 'entertainment';

export interface DailyBriefingTemplate {
  dayIndex: number; // 0=월 ~ 6=일
  theme: string;
  scenario: BriefingScenario;
}

export type SeasonScenarios = Record<AreaId, DailyBriefingTemplate[]>;
