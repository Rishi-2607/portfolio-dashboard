'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
      title: "Full-Stack Blog Platform",
      category: "Next.js + MongoDB",
      description: "Production-ready blog platform featuring SSR for SEO, email subscriptions, admin dashboard controls, and modular REST APIs.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1ff8274-1764410572200.png",
      alt: "Full-stack blog platform interface with rich markdown articles and admin dashboard",
      tech: ["Next.js", "MongoDB Atlas", "Axios", "Tailwind CSS"],
      link: "/portfolio",
      period: "Jul 2025"
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      category: "React + Socket.io",
      description: "End-to-end real-time bidirectional communication with instant messaging, JWT authentication, and active user presence tracking.",
      image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
      alt: "Real-time chat interface showing instant messaging conversation channels and status",
      tech: ["React.js", "Socket.io", "Express.js", "MongoDB"],
      link: "/portfolio",
      period: "Apr 2025"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "MERN Stack",
      description: "Health data management application with role-based access control, secure user authentication, and mobile-first analytics dashboards.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_170c14c6c-1764410568533.png",
      alt: "Healthcare management platform with patient charts and doctor schedule",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
      link: "/portfolio",
      period: "Jul 2024"
    }
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, featuredProjects.length]);

  const handleProjectChange = (index: number) => {
    setCurrentProjectIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#090e11] overflow-hidden pt-6 pb-20">
      {/* Background patterns and radial glows */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C1FF72] rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-[#20c997] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-7 text-left"
            >
              {/* Status pill badge */}
              <motion.div variants={itemVariants} className="inline-flex">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111a1e]/90 border border-[#C1FF72]/30 backdrop-blur-md shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C1FF72] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C1FF72]"></span>
                  </span>
                  <span className="text-xs font-mono font-medium text-[#f4f8fa]">
                    Available for Opportunities & Projects
                  </span>
                </div>
              </motion.div>
              
              {/* Heading */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Scalable Web Apps with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1FF72] via-[#daffaa] to-[#20c997]">
                    MERN & Next.js
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-[#94a3a8] max-w-2xl leading-relaxed">
                  Hi, I&apos;m <span className="text-white font-medium">Rishikant Yadav</span> — a Full-Stack Developer with 1+ year of professional experience architecting production-ready features, integrating robust REST APIs, and crafting high-performance, user-centric interfaces.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#090e11] rounded-xl bg-[#C1FF72] hover:bg-[#b0f558] transition-all duration-300 shadow-[0_0_20px_rgba(193,255,114,0.35)] hover:shadow-[0_0_30px_rgba(193,255,114,0.55)] group"
                  >
                    <span>Explore Projects</span>
                    <Icon name="ArrowRightIcon" size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#f4f8fa] hover:text-[#C1FF72] rounded-xl bg-[#111a1e] hover:bg-[#182428] border border-white/10 hover:border-[#C1FF72]/30 transition-all duration-200"
                  >
                    <span>Let&apos;s Connect</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://github.com/Rishi-2607"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium text-[#94a3a8] hover:text-[#f4f8fa] rounded-xl bg-[#111a1e]/60 hover:bg-[#111a1e] border border-white/[0.08] hover:border-[#C1FF72]/30 transition-all duration-200"
                    aria-label="GitHub Profile"
                  >
                    <Icon name="CodeBracketIcon" size={18} className="mr-1.5 text-[#C1FF72]" />
                    <span className="font-mono text-xs">github/Rishi-2607</span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Verified Metrics from Resume */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] max-w-lg"
              >
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight group-hover:text-[#C1FF72] transition-colors">1+ Yr</div>
                  <div className="text-xs text-[#797f82] mt-0.5">Professional Exp</div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#C1FF72] tracking-tight">3+</div>
                  <div className="text-xs text-[#797f82] mt-0.5">Full-Stack Apps</div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-[#20c997] tracking-tight">17%</div>
                  <div className="text-xs text-[#797f82] mt-0.5">Error Reduction</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Interactive Featured Project Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#111a1e] border border-white/[0.1] hover:border-[#C1FF72]/40 shadow-2xl shadow-black/60 transition-all duration-300 group">
                
                {/* Header bar of preview card */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#182428]/80 border-b border-white/[0.08]">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono text-[#797f82]">
                      {featuredProjects[currentProjectIndex].period}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#C1FF72]/15 text-[#C1FF72] border border-[#C1FF72]/30">
                      {featuredProjects[currentProjectIndex].category}
                    </span>
                  </div>
                </div>

                {/* Animated project preview container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProjectIndex}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    {/* Preview Image */}
                    <div className="relative aspect-[16/10] bg-[#090e11] overflow-hidden">
                      {isHydrated && (
                        <AppImage
                          src={featuredProjects[currentProjectIndex].image}
                          alt={featuredProjects[currentProjectIndex].alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111a1e] via-[#111a1e]/40 to-transparent" />
                    </div>

                    {/* Project Details Footer */}
                    <div className="p-5 bg-[#111a1e] space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#C1FF72] transition-colors duration-200">
                          {featuredProjects[currentProjectIndex].title}
                        </h3>
                        <Link
                          href="/portfolio"
                          className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-[#C1FF72]/20 text-[#797f82] hover:text-[#C1FF72] transition-colors"
                          aria-label="View Project"
                        >
                          <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                        </Link>
                      </div>
                      
                      <p className="text-xs text-[#94a3a8] line-clamp-2 leading-relaxed">
                        {featuredProjects[currentProjectIndex].description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {featuredProjects[currentProjectIndex].tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-[11px] font-mono text-[#f4f8fa]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider indicators */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectChange(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex
                        ? 'w-7 bg-[#C1FF72]'
                        : 'w-2 bg-[#182428] hover:bg-[#797f82]'
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <Icon name="ChevronDownIcon" size={20} className="text-zinc-500" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
