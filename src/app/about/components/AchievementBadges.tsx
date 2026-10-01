'use client';

import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  icon: string;
}

interface AchievementBadgesProps {
  achievements: Achievement[];
}

export default function AchievementBadges({ achievements }: AchievementBadgesProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Verified Milestones & Credentials</h3>
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
          Key production releases, organizational impact metrics, and academic milestones from my educational foundation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-[#111a1e] rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#C1FF72]/15 border border-[#C1FF72]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={achievement.icon as any} size={24} className="text-[#C1FF72]" />
              </div>
              <span className="px-3 py-1 bg-[#C1FF72]/15 text-[#C1FF72] border border-[#C1FF72]/30 text-xs font-mono font-bold rounded-full">
                {achievement.date}
              </span>
            </div>

            <h4 className="text-base font-bold text-white mb-1.5">{achievement.title}</h4>
            <p className="text-zinc-400 text-xs mb-4">{achievement.issuer}</p>

            <a
              href={achievement.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#C1FF72] hover:text-[#daffaa] transition-colors duration-200"
            >
              <Icon name="CheckBadgeIcon" size={14} />
              <span>Verify / View Details</span>
              <Icon name="ArrowTopRightOnSquareIcon" size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* Achievement Summary */}
      <div className="mt-12 p-8 bg-[#111a1e] rounded-2xl border border-white/10 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center">
              <Icon name="RocketLaunchIcon" size={20} className="text-[#C1FF72] mr-2" />
              Production Delivery Impact
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Every production release is built with clean architecture, tested REST API endpoints, and optimized user flows that yield measurable workflow efficiency.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center">
              <Icon name="AcademicCapIcon" size={20} className="text-[#C1FF72] mr-2" />
              Computer Science Foundation
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              B.Tech degree in Computer Science and Engineering from Babu Banarasi Das ITM provides strong grounding in algorithms, databases, and system scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
