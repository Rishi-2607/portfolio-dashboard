'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  description: string;
  icon: string;
  className?: string;
}

export default function SkillCard({ name, level, category, description, icon, className = '' }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-[#111a1e] rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 group transition-colors duration-300 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)] ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#C1FF72]/15 transition-colors duration-300">
            <span className="text-2xl text-[#C1FF72]">{icon}</span>
          </div>

          {/* Name & Category */}
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-[#C1FF72] transition-colors duration-200">
              {name}
            </h3>
            <span className="text-xs text-gray-400 font-medium">{category}</span>
          </div>
        </div>

        {/* Level */}
        <div className="text-right">
          <div className="text-2xl font-bold text-[#C1FF72]">
            {level}%
          </div>
          <div className="text-xs text-gray-400">Proficiency</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300/80 mb-4 leading-relaxed">{description}</p>

      {/* Progress Bar */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 h-full bg-[#C1FF72] rounded-full shadow-[0_0_8px_rgba(193,255,114,0.5)]"
        />
      </div>
    </motion.div>
  );
}

