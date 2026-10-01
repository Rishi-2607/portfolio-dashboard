'use client';

interface TimelineItem {
  year: string;
  title: string;
  skills: string[];
  description: string;
}

interface SkillTimelineProps {
  timeline: TimelineItem[];
  className?: string;
}

export default function SkillTimeline({ timeline, className = '' }: SkillTimelineProps) {
  return (
    <div className={`bg-[#111a1e] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 ${className}`}>
      <h3 className="text-3xl font-bold text-white mb-12 text-center">
        Skill Development <span className="text-[#C1FF72]">Journey</span>
      </h3>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-[#C1FF72]/20" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-24">
              {/* Year badge */}
              <div className="absolute left-0 w-20 h-20 rounded-full bg-[#C1FF72] text-[#090e11] flex items-center justify-center shadow-[0_0_20px_rgba(193,255,114,0.35)]">
                <span className="font-extrabold text-sm">{item.year}</span>
              </div>

              {/* Timeline item */}
              <div className="bg-[#182428] rounded-2xl p-6 border border-white/10 hover:border-[#C1FF72]/50 transition-colors duration-300 shadow-sm">
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300/80 text-sm mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[#C1FF72]/15 text-[#C1FF72] border border-[#C1FF72]/30 text-xs font-semibold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
