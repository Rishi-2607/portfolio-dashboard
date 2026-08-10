'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    technologies: string[];
    description: string;
    image: string;
    alt: string;
    metrics: { label: string; value: string }[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
  };
  onViewDetails: (id: number) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden 
        bg-gradient-to-b from-gray-900 via-gray-950 to-black
        border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]
        transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
        hover:-translate-y-1
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* FEATURED BADGE */}
      {project.featured && (
        <div className="
          absolute top-4 right-4 z-20 
          bg-gradient-to-r from-purple-600 to-pink-500
          text-white px-3 py-1 rounded-full
          text-xs font-semibold shadow-lg
        ">
          Featured
        </div>
      )}

      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* GRADIENT OVERLAY */}
        <div
          className={`
            absolute inset-0 transition-opacity duration-300
            bg-gradient-to-t from-black via-black/40 to-transparent
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        >
          {/* OVERLAY BUTTONS */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  flex-1 flex items-center justify-center gap-2
                  bg-gradient-to-r from-purple-600 to-pink-500 
                  text-white px-4 py-2 rounded-lg font-semibold
                  shadow-lg hover:scale-[1.02]
                  transition-all duration-200
                "
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  flex items-center justify-center 
                  bg-white/10 backdrop-blur-md 
                  border border-white/10
                  text-white px-4 py-2 rounded-lg 
                  hover:bg-white/20
                  transition-all duration-200 shadow-lg
                "
              >
                <Icon name="CodeBracketIcon" size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <span className="
              inline-block px-3 py-1 rounded-full mb-2
              bg-purple-600/20 text-purple-400 
              border border-purple-500/30
              text-xs font-semibold tracking-wide
            ">
              {project.category}
            </span>

            <h3 className="
              text-xl font-bold text-white 
              group-hover:text-purple-400
              transition-colors duration-200
            ">
              {project.title}
            </h3>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="
                px-2 py-1 text-xs
                bg-white/5 border border-white/10 
                text-gray-300 rounded-md font-medium
              "
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="text-gray-400 text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* METRICS */}
        <div className="
          grid grid-cols-3 gap-3 mb-4 pt-4 
          border-t border-white/10
        ">
          {project.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-purple-400 font-bold text-lg">
                {metric.value}
              </div>
              <div className="text-gray-400 text-xs">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* CASE STUDY BUTTON */}
        <button
          onClick={() => onViewDetails(project.id)}
          className="
            w-full flex items-center justify-center gap-2
            bg-gradient-to-r from-purple-600 to-pink-500
            text-white px-4 py-2.5 rounded-lg font-semibold
            shadow-lg hover:scale-[1.02]
            transition-all duration-200
          "
        >
          <span>View Case Study</span>
          <Icon name="ArrowRightIcon" size={18} />
        </button>
      </div>
    </div>
  );
}
