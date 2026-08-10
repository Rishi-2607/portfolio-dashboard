'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  isHydrated: boolean;
}

const HeroSection = ({ isHydrated }: HeroSectionProps) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description: "Transformed user experience with 40% increase in conversion rates",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1ff8274-1764410572200.png",
      alt: "Modern e-commerce dashboard with product cards and shopping cart interface on laptop screen",
      tech: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "SaaS Dashboard Application",
      description: "Built scalable analytics platform serving 10,000+ daily users",
      image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
      alt: "Analytics dashboard showing colorful charts and graphs on multiple monitors",
      tech: ["Next.js", "React", "Chart.js"]
    },
    {
      id: 3,
      title: "Healthcare Appointment System",
      description: "Streamlined patient scheduling reducing wait times by 60%",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_170c14c6c-1764410568533.png",
      alt: "Medical appointment booking interface with calendar and patient information forms",
      tech: ["React", "Redux", "Material-UI"]
    }
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, featuredProjects.length]);

  const handleProjectChange = (index: number) => {
    setCurrentProjectIndex(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge translate-x-1/4 translate-y-1/3"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-purple-700/20 rounded-full">
                  <Icon name="SparklesIcon" size={20} className="text-purple-400 mr-2" />
                  <span className="text-sm font-semibold text-purple-300">Available for New Projects</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  React Expertise That Drives{' '}
                  <span className="text-purple-500">Business Results</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                  UI-focused development that users love. Transforming digital experiences from ordinary to extraordinary with measurable outcomes and superior interfaces.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  Start Your Project
                  <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                </Link>
                
               <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            View Portfolio
            <Icon name="EyeIcon" size={20} className="ml-2" />
          </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">50+</div>
                  <div className="text-sm text-white/70">Projects Delivered</div>
                </div>
                <div className="h-12 w-px bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">98%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                </div>
                <div className="h-12 w-px bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">5+</div>
                  <div className="text-sm text-white/70">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-900/80 border border-purple-700">
                {isHydrated && (
                  <AppImage
                    src={featuredProjects[currentProjectIndex].image}
                    alt={featuredProjects[currentProjectIndex].alt}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {featuredProjects[currentProjectIndex].title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {featuredProjects[currentProjectIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[currentProjectIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleProjectChange(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex
                        ? 'w-8 bg-purple-500'
                        : 'w-2 bg-gray-700 hover:bg-purple-400/50'
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
