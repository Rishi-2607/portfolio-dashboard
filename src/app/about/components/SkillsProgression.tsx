'use client';

import { motion } from 'framer-motion';
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
                <Icon name="FolderIcon" size={20} className="text-[#C1FF72] mr-2" />
                {category}
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-[#111a1e] rounded-2xl p-4 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)] transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-bold text-white">{skill.name}</h5>
                        <p className="text-gray-400 text-xs">
                          {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'} experience
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-[#C1FF72]">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-0 left-0 h-full bg-[#C1FF72] rounded-full shadow-[0_0_8px_rgba(193,255,114,0.5)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
        <div className="text-center p-6 bg-[#111a1e] rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-[#C1FF72]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="CodeBracketIcon" size={24} className="text-[#C1FF72]" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">{skills.length}</p>
          <p className="text-sm text-gray-300 font-medium">Technical Skills</p>
        </div>
        
        <div className="text-center p-6 bg-[#111a1e] rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-[#C1FF72]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="ClockIcon" size={24} className="text-[#C1FF72]" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">1+</p>
          <p className="text-sm text-gray-300 font-medium">Years Experience</p>
        </div>
        
        <div className="text-center p-6 bg-[#111a1e] rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-[#C1FF72]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="ChartBarIcon" size={24} className="text-[#C1FF72]" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">90%</p>
          <p className="text-sm text-gray-300 font-medium">Avg Proficiency</p>
        </div>
      </div>
    </div>
  );
}
