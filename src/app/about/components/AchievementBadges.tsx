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
        <h3 className="text-3xl font-bold text-white mb-4">Certifications & Achievements</h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Professional certifications and achievements that validate my expertise and commitment to continuous learning in the React ecosystem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:shadow-[0_0_25px_rgba(128,90,250,0.6)] hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={achievement.icon as any} size={32} className="text-white" />
              </div>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full">
                {achievement.date}
              </span>
            </div>

            <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
            <p className="text-gray-300 text-sm mb-4">{achievement.issuer}</p>

            <a
              href={achievement.verificationUrl}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              <Icon name="CheckBadgeIcon" size={16} />
              <span>Verify Credential</span>
              <Icon name="ArrowTopRightOnSquareIcon" size={16} />
            </a>
          </div>
        ))}
      </div>

      {/* Achievement Summary */}
      <div className="mt-12 p-8 bg-gradient-to-br from-purple-500/5 via-purple-400/5 to-pink-500/5 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="AcademicCapIcon" size={24} className="text-purple-400 mr-2" />
              Continuous Learning
            </h4>
            <p className="text-gray-300 leading-relaxed">
              I believe in staying at the forefront of React development through continuous education and certification. These achievements represent my commitment to mastering the latest technologies and best practices.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="ShieldCheckIcon" size={24} className="text-purple-400 mr-2" />
              Verified Expertise
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Each certification is backed by rigorous training and examination from industry-leading organizations. Click any credential to verify its authenticity and view detailed information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
