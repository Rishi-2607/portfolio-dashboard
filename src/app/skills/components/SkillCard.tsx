'use client';

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
    <div className={`bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-md border border-white/10 group transition-all duration-300 hover:-translate-y-1 ${className}`}>
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-800/20 transition-colors duration-300">
            <span className="text-2xl text-purple-400">{icon}</span>
          </div>

          {/* Name & Category */}
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
              {name}
            </h3>
            <span className="text-xs text-gray-300 font-medium">{category}</span>
          </div>
        </div>

        {/* Level */}
        <div className="text-right">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            {level}%
          </div>
          <div className="text-xs text-gray-300">Proficiency</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>

      {/* Progress Bar */}
      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
