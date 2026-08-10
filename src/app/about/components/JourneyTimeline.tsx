'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Milestone {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface JourneyTimelineProps {
  milestones: Milestone[];
}

export default function JourneyTimeline({ milestones }: JourneyTimelineProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">My Professional Journey</h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          From junior developer to strategic technology partner - a journey of continuous growth, learning, and delivering exceptional results.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500/20" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`relative flex flex-col lg:flex-row gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10" />

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:shadow-[0_0_25px_rgba(128,90,250,0.6)] transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-bold rounded-full mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-purple-400 font-semibold">{milestone.company}</p>
                    </div>
                    <button
                      onClick={() => toggleExpand(milestone.id)}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                      aria-label={expandedId === milestone.id ? 'Collapse details' : 'Expand details'}
                    >
                      <Icon
                        name={expandedId === milestone.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                        size={20}
                        className="text-gray-300"
                      />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-4">{milestone.description}</p>

                  {expandedId === milestone.id && (
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div>
                        <h5 className="text-sm font-bold text-white mb-2 flex items-center">
                          <Icon name="CheckCircleIcon" size={16} className="text-purple-400 mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-300">
                              <Icon
                                name="ArrowRightIcon"
                                size={16}
                                className="text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-bold text-white mb-2 flex items-center">
                          <Icon name="CodeBracketIcon" size={16} className="text-purple-400 mr-2" />
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {milestone.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
