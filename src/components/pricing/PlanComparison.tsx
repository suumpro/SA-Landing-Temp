'use client';

import { comparisonFeatures } from '@/lib/pricing-data';

export default function PlanComparison() {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="text-primary">✓</span>
      ) : (
        <span className="text-gray-300">−</span>
      );
    }
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-4 px-4 font-medium text-gray-500">
              기능
            </th>
            <th className="text-center py-4 px-4 font-medium text-gray-900">
              무료
            </th>
            <th className="text-center py-4 px-4 font-medium text-primary">
              고급형
            </th>
            <th className="text-center py-4 px-4 font-medium text-gray-900">
              상세 분석
            </th>
            <th className="text-center py-4 px-4 font-medium text-gray-900">
              엔터프라이즈
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonFeatures.map((category, categoryIndex) => (
            <>
              {/* Category Header */}
              <tr key={`category-${categoryIndex}`} className="bg-gray-50">
                <td
                  colSpan={5}
                  className="py-3 px-4 font-semibold text-gray-900"
                >
                  {category.category}
                </td>
              </tr>
              {/* Features */}
              {category.features.map((feature, featureIndex) => (
                <tr
                  key={`feature-${categoryIndex}-${featureIndex}`}
                  className="border-b border-gray-100"
                >
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {feature.name}
                  </td>
                  <td className="text-center py-3 px-4">
                    {renderValue(feature.free)}
                  </td>
                  <td className="text-center py-3 px-4 bg-blue-50/50">
                    {renderValue(feature.premium)}
                  </td>
                  <td className="text-center py-3 px-4">
                    {renderValue(feature.analysis)}
                  </td>
                  <td className="text-center py-3 px-4">
                    {renderValue(feature.enterprise)}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
