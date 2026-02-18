'use client';

import { Users, TrendingUp, Target, Minus } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  {
    icon: Users,
    value: 1500,
    suffix: '+',
    label: '구독 점주님',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: TrendingUp,
    value: 8.5,
    suffix: '%',
    prefix: '+',
    label: '평균 매출 증가',
    color: 'text-success',
    bgColor: 'bg-success/10',
    decimal: true,
  },
  {
    icon: Target,
    value: 94,
    suffix: '%',
    label: '발주 적중률',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: Minus,
    value: 18,
    suffix: '만원',
    label: '주간 폐기 절감',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
  },
];

function StatItem({ stat }: { stat: typeof stats[number] }) {
  const target = stat.decimal ? Math.round(stat.value * 10) : stat.value;
  const { count, ref } = useCountUp(target);
  const displayValue = stat.decimal ? (count / 10).toFixed(1) : count;
  const Icon = stat.icon;

  return (
    <div ref={ref} className="text-center">
      <div className={`w-12 h-12 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
        <Icon className={`w-6 h-6 ${stat.color}`} />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 tabular-nums">
        {stat.prefix}{displayValue}{stat.suffix}
      </div>
      <div className="text-sm text-gray-500">{stat.label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
