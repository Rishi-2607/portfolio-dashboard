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
      color: 'text-purple-400',
    },
    {
      icon: 'StarIcon',
      value: featuredProjects.toString(),
      label: 'Featured Projects',
      color: 'text-pink-500',
    },
    {
      icon: 'CodeBracketIcon',
      value: technologies.toString(),
      label: 'Technologies Used',
      color: 'text-blue-400',
    },
    {
      icon: 'CheckBadgeIcon',
      value: successRate,
      label: 'Success Rate',
      color: 'text-green-400',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            relative rounded-2xl p-6
            bg-gradient-to-b from-gray-900 via-gray-950 to-black
            border border-white/10
            shadow-[0_0_25px_rgba(0,0,0,0.4)]
            transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,0,0,0.6)]
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
