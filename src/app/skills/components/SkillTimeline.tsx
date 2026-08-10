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
    <div className={`bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 ${className}`}>
      <h3 className="text-3xl font-bold text-purple-400 mb-12 text-center">
        Skill Development Journey
      </h3>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-purple-600/40" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-24">
              {/* Year badge */}
              <div className="absolute left-0 w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">{item.year}</span>
              </div>

              {/* Timeline item */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition-colors duration-300 shadow-sm">
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs font-medium rounded-full"
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
