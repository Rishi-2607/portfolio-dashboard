'use client';

import Icon from '@/components/ui/AppIcon';

interface Metric {
  label: string;
  value: string;
  icon: string;
  description: string;
}

interface PerformanceMetricsProps {
  metrics: Metric[];
  className?: string;
}

export default function PerformanceMetrics({ metrics, className = '' }: PerformanceMetricsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-[#111a1e] rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 group transition-all duration-300 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)] hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#C1FF72]/15 flex items-center justify-center group-hover:bg-[#C1FF72]/25 transition-colors duration-300">
              <Icon name={metric.icon as any} size={24} className="text-[#C1FF72]" />
            </div>
            <div className="text-3xl font-extrabold text-[#C1FF72]">
              {metric.value}
            </div>
          </div>
          
          <h4 className="text-sm font-semibold text-white mb-2">{metric.label}</h4>
          <p className="text-xs text-gray-400 leading-relaxed">{metric.description}</p>
        </div>
      ))}
    </div>
  );
}
