'use client';

import Icon from '@/components/ui/AppIcon';

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  yearsOfExperience: number;
}

interface SkillsProgressionProps {
  skills: Skill[];
}

export default function SkillsProgression({ skills }: SkillsProgressionProps) {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Technical Expertise</h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A comprehensive view of my technical skills, proficiency levels, and years of hands-on experience across the React ecosystem.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <div key={category} className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center">
                <Icon name="FolderIcon" size={20} className="text-purple-400 mr-2" />
                {category}
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl p-4 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:shadow-[0_0_25px_rgba(128,90,250,0.6)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-bold text-white">{skill.name}</h5>
                        <p className="text-gray-300 text-xs">
                          {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'} experience
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-purple-400">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
        <div className="text-center p-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="CodeBracketIcon" size={24} className="text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">{skills.length}</p>
          <p className="text-sm text-gray-300 font-medium">Technical Skills</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="ClockIcon" size={24} className="text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">6+</p>
          <p className="text-sm text-gray-300 font-medium">Years Experience</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="ChartBarIcon" size={24} className="text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">90%</p>
          <p className="text-sm text-gray-300 font-medium">Avg Proficiency</p>
        </div>
      </div>
    </div>
  );
}
