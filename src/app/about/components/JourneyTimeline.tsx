'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
          From Computer Science engineering fundamentals to architecting and shipping production-grade full-stack features and React UI libraries.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#C1FF72]/25" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col lg:flex-row gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#C1FF72] rounded-full border-4 border-[#090e11] shadow-[0_0_12px_rgba(193,255,114,0.6)] z-10" />

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="bg-[#111a1e] rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)] transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#C1FF72]/15 text-[#C1FF72] border border-[#C1FF72]/30 text-sm font-bold rounded-full mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-[#C1FF72] font-semibold">{milestone.company}</p>
                    </div>
                    <button
                      onClick={() => toggleExpand(milestone.id)}
                      className="p-2 hover:bg-[#182428] rounded-lg transition-colors duration-200"
                      aria-label={expandedId === milestone.id ? 'Collapse details' : 'Expand details'}
                    >
                      <Icon
                        name={expandedId === milestone.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                        size={20}
                        className="text-gray-300"
                      />
                    </button>
                  </div>

                  <p className="text-gray-300/80 mb-4">{milestone.description}</p>

                  <AnimatePresence>
                    {expandedId === milestone.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 pt-4 border-t border-white/10">
                          <div>
                            <h5 className="text-sm font-bold text-white mb-2 flex items-center">
                              <Icon name="CheckCircleIcon" size={16} className="text-[#C1FF72] mr-2" />
                              Key Achievements
                            </h5>
                            <ul className="space-y-2">
                              {milestone.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-300">
                                  <Icon
                                    name="ArrowRightIcon"
                                    size={16}
                                    className="text-[#C1FF72] mr-2 mt-0.5 flex-shrink-0"
                                  />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-bold text-white mb-2 flex items-center">
                              <Icon name="CodeBracketIcon" size={16} className="text-[#C1FF72] mr-2" />
                              Technologies Used
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {milestone.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-[#C1FF72]/10 text-[#C1FF72] border border-[#C1FF72]/20 text-xs font-semibold rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
