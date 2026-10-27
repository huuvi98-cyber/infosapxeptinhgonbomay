export interface BreakdownItem {
  label: string;
  value: number;
  unit: string;
  color?: string;
  percentage?: number;
}

export interface InfographicItem {
  id: string;
  title: string;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  description: string;
  subText?: string;
  iconType: 'personnel' | 'savings' | 'portal' | 'clock' | 'cost' | 'education' | 'tech' | 'energy' | 'chart';
  trend?: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'emerald' | 'amber' | 'indigo' | 'purple' | 'rose';
  decimals?: number;
  isFullWidth?: boolean;
  breakdownTitle?: string;
  breakdownData?: BreakdownItem[];
  detailNote?: string;
}

export interface InfographicSection {
  id: string;
  title: string;
  subtitle?: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
  borderColor?: string;
  items: InfographicItem[];
}

export interface InfographicData {
  id: string;
  title: string;
  subtitle: string;
  sourceNotes: string;
  updatedAt: string;
  sections: InfographicSection[];
}
