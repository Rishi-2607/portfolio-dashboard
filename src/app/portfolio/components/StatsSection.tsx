'use client';

import Icon from '@/components/ui/AppIcon';

interface StatsSectionProps {
  totalProjects: number;
  featuredProjects: number;
  technologies: number;
  successRate: string;
}

export default function StatsSection({
  totalProjects,
  featuredProjects,
  technologies,
  successRate,
}: StatsSectionProps) {
  const stats = [
    {
      icon: 'RocketLaunchIcon',
      value: totalProjects.toString(),
      label: 'Projects Completed',
      color: 'text-[#C1FF72]',
    },
    {
      icon: 'StarIcon',
      value: featuredProjects.toString(),
      label: 'Featured Projects',
      color: 'text-[#20c997]',
    },
    {
      icon: 'CodeBracketIcon',
      value: technologies.toString(),
      label: 'Technologies Used',
      color: 'text-[#C1FF72]',
    },
    {
      icon: 'CheckBadgeIcon',
      value: successRate,
      label: 'Success Rate',
      color: 'text-[#20c997]',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            relative rounded-2xl p-6
            bg-[#111a1e]
            border border-white/10
            shadow-[0_0_25px_rgba(0,0,0,0.4)]
            transition-all duration-300 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)]
            hover:-translate-y-1
          "
        >
          <div className={`${stat.color} mb-3`}>
            <Icon name={stat.icon as any} size={32} />
          </div>
          <div className="text-3xl font-bold text-gray-100 mb-1">{stat.value}</div>
          <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
