import type {
  SalesTrendData,
  SalesForecastData,
  OrderRecommendData,
  CompetitorData,
} from '@/data/posAnalysisData';

export function SalesTrendCard({ data }: { data: SalesTrendData }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">📈</span>
          <h3 className="font-bold text-gray-900">매출 트렌드</h3>
        </div>
        <span className="text-xs text-gray-400">지난주 기준</span>
      </div>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-2xl font-bold text-gray-900">{data.totalSales}</span>
        <span className={`text-sm font-semibold ${data.totalChange >= 0 ? 'text-success' : 'text-error'}`}>
          {data.totalChange >= 0 ? '▲' : '▼'} {Math.abs(data.totalChange)}%
        </span>
      </div>

      <div className="space-y-3">
        {data.items.map((item) => (
          <div key={item.category}>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-700">{item.category}</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{item.amount}만</span>
                <span className={`text-xs font-medium ${item.change >= 0 ? 'text-success' : 'text-error'}`}>
                  {item.change >= 0 ? '+' : ''}{item.change}%
                </span>
              </div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-700"
                style={{ width: `${item.barPercent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SalesForecastCard({ data }: { data: SalesForecastData }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">🔮</span>
          <h3 className="font-bold text-gray-900">매출 예측</h3>
        </div>
        <span className="text-xs text-gray-400">이번 주</span>
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-2xl font-bold text-gray-900">{data.weekTotal}</span>
        <span className={`text-sm font-semibold ${data.weekChange >= 0 ? 'text-success' : 'text-error'}`}>
          {data.weekChange >= 0 ? '▲' : '▼'} {Math.abs(data.weekChange)}%
        </span>
      </div>
      <p className="text-xs text-primary font-medium mb-4">
        📍 피크 예상: {data.peakDay} — {data.peakReason}
      </p>

      <div className="flex items-end justify-between gap-1.5 h-36 pt-2">
        {data.days.map((day) => (
          <div key={day.day} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex flex-col justify-end" style={{ height: '96px' }}>
              <div
                className={`w-full rounded-t transition-all duration-700 ${
                  day.isPeak
                    ? 'bg-primary'
                    : day.isToday
                    ? 'bg-primary/40'
                    : 'bg-gray-200'
                }`}
                style={{ height: `${day.barPercent}%` }}
              />
            </div>
            <span className="text-[11px] sm:text-xs text-gray-400">{day.predicted}</span>
            <span className={`text-xs font-medium ${
              day.isToday ? 'text-primary font-bold' : day.isPeak ? 'text-primary' : 'text-gray-500'
            }`}>
              {day.day}
            </span>
            {day.isToday && <span className="text-[8px] text-primary -mt-1">오늘</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrderRecommendCard({ data }: { data: OrderRecommendData }) {
  const urgencyStyles = {
    high: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', label: '긴급' },
    medium: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', label: '권장' },
    low: { bg: 'bg-gray-50', text: 'text-gray-500', border: 'border-gray-200', label: '참고' },
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">📦</span>
          <h3 className="font-bold text-gray-900">AI 발주 추천</h3>
        </div>
        <span className="text-xs bg-primary-lighter text-primary px-2 py-0.5 rounded-full font-medium">
          {data.totalItems}개 품목
        </span>
      </div>

      <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg mb-4">
        <span aria-hidden="true">💰</span>
        <span className="text-sm font-medium">예상 절감: {data.estimatedSaving}/주</span>
      </div>

      <div className="space-y-3">
        {data.items.map((item) => {
          const style = urgencyStyles[item.urgency];
          return (
            <div key={item.product} className={`${style.bg} border ${style.border} rounded-lg p-3`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">{item.product}</span>
                <span className={`text-[11px] sm:text-xs font-bold px-1.5 py-0.5 rounded ${style.text} ${style.bg}`}>
                  {style.label}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-1">
                <span>현재 {item.currentStock}개</span>
                <span aria-hidden="true">→</span>
                <span className="font-semibold text-primary">{item.recommended}개 추천</span>
              </div>
              <p className="text-xs text-gray-500">{item.reason}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CompetitorCard({ data }: { data: CompetitorData }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">🏪</span>
          <h3 className="font-bold text-gray-900">경쟁점 비교</h3>
        </div>
        <span className="text-xs text-gray-400">반경 {data.radius}</span>
      </div>

      <div className="flex items-center gap-4 mb-5 p-3 bg-primary-lighter rounded-lg">
        <div className="text-center">
          <span className="text-2xl font-bold text-primary">{data.myRank}위</span>
          <p className="text-[11px] sm:text-xs text-gray-500">/ {data.totalStores}개 매장</p>
        </div>
        <div className="h-8 w-px bg-primary/20" aria-hidden="true" />
        <p className="text-sm text-gray-700">
          반경 {data.radius} 내 <span className="font-bold text-primary">{data.competitorCount}개</span> 경쟁점 대비
        </p>
      </div>

      <div className="space-y-4">
        {data.metrics.map((metric) => {
          const maxVal = Math.max(metric.myValue, metric.avgValue);
          const myPercent = (metric.myValue / maxVal) * 100;
          const avgPercent = (metric.avgValue / maxVal) * 100;
          const isWinning = metric.isHigherBetter
            ? metric.myValue >= metric.avgValue
            : metric.myValue <= metric.avgValue;

          return (
            <div key={metric.label}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="text-gray-700">{metric.label}</span>
                <span className={`text-xs font-bold ${isWinning ? 'text-success' : 'text-warning'}`}>
                  {isWinning ? '우위' : '개선 필요'}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-gray-500 w-10 sm:w-12 shrink-0">내 매장</span>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${myPercent}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-900 w-16 text-right">
                  {metric.myValue.toLocaleString()}{metric.unit}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] sm:text-xs text-gray-400 w-10 sm:w-12 shrink-0">경쟁 평균</span>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-300 rounded-full transition-all duration-700"
                    style={{ width: `${avgPercent}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-16 text-right">
                  {metric.avgValue.toLocaleString()}{metric.unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
