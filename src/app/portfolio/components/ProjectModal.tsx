'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    technologies: string[];
    description: string;
    fullDescription: string;
    image: string;
    alt: string;
    additionalImages: { url: string; alt: string }[];
    challenge: string;
    solution: string;
    results: string[];
    metrics: {
      label: string;
      value: string;
    }[];
    testimonial?: {
      text: string;
      author: string;
      role: string;
      company: string;
    };
    demoUrl?: string;
    githubUrl?: string;
    duration: string;
    team: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden border border-border/50">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-card/80 backdrop-blur-sm rounded-full 
                     hover:bg-card transition-all duration-200 shadow-lg border border-border"
        >
          <Icon name="XMarkIcon" size={22} className="text-text-primary" />
        </button>

        {/* MAIN SCROLL AREA */}
        <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">

          {/* HEADER IMAGE */}
          <div className="relative h-80 bg-muted overflow-hidden">
            <AppImage
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t 
                            from-background/95 via-background/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-card/40 text-text-primary text-sm font-semibold rounded-full mb-3 border border-border/40">
                {project.category}
              </span>

              <h2 className="text-4xl font-extrabold text-text-primary drop-shadow mb-3">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-card/40 border border-border/40 
                               text-text-primary text-sm rounded-full font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8">

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-accent text-accent-foreground 
                             px-6 py-3 rounded-lg font-semibold 
                             hover:shadow-medium transition-all duration-200"
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={20} />
                  <span>View Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-primary-foreground 
                             px-6 py-3 rounded-lg font-semibold hover:bg-primary/90"
                >
                  <Icon name="CodeBracketIcon" size={20} />
                  <span>View Code</span>
                </a>
              )}
            </div>

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="ClockIcon" size={20} className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">Duration</span>
                </div>
                <p className="text-text-secondary">{project.duration}</p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="UserGroupIcon" size={20} className="text-brand-primary" />
                  <span className="font-semibold text-text-primary">Team</span>
                </div>
                <p className="text-text-secondary">{project.team}</p>
              </div>
            </div>

            {/* FULL DESCRIPTION */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Project Overview</h3>
              <p className="text-text-secondary leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* METRICS */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {project.metrics.map((metric, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-text-secondary text-sm">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CHALLENGE */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">The Challenge</h3>
              <div className="bg-warning/10 border-l-4 border-warning/60 p-6 rounded-lg">
                <p className="text-text-secondary">{project.challenge}</p>
              </div>
            </div>

            {/* SOLUTION */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">The Solution</h3>
              <div className="bg-success/10 border-l-4 border-success/60 p-6 rounded-lg">
                <p className="text-text-secondary">{project.solution}</p>
              </div>
            </div>

            {/* GALLERY */}
            {project.additionalImages.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-4">Project Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.additionalImages.map((img, index) => (
                    <div key={index} className="relative h-64 rounded-xl overflow-hidden bg-muted border border-border">
                      <AppImage
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RESULTS */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Key Results</h3>
              <div className="space-y-3">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                      <Icon name="CheckIcon" size={16} className="text-white" />
                    </div>
                    <p className="text-text-secondary">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TESTIMONIAL */}
            {project.testimonial && (
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 p-8 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-brand-primary" />
                  <h3 className="text-xl font-bold text-text-primary">Client Testimonial</h3>
                </div>
                <p className="text-text-primary text-lg italic mb-4">
                  &quot;{project.testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {project.testimonial.author}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {project.testimonial.role} at {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
