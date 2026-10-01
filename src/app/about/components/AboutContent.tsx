'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import JourneyTimeline from './JourneyTimeline';
import SkillsProgression from './SkillsProgression';
import AchievementBadges from './AchievementBadges';
import ProfessionalNetwork from './ProfessionalNetwork';

interface Milestone {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  yearsOfExperience: number;
}

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  icon: string;
}

interface NetworkConnection {
  id: number;
  name: string;
  position: string;
  company: string;
  recommendation: string;
  image: string;
  alt: string;
  linkedinUrl: string;
}

export default function AboutContent() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<'journey' | 'skills' | 'achievements' | 'network'>('journey');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const milestones: Milestone[] = [
    {
      id: 1,
      year: 'Aug 2025 – Present',
      title: 'React Developer (Full-Time)',
      company: 'Girl Power Talk — Mohali, Punjab, India',
      description: 'Architecting and shipping full-stack enterprise web solutions, automating third-party workflows, and building core internal UI component libraries.',
      achievements: [
        'Architected and shipped GSC Analyzer, a full-stack Google Search Console management tool — automated user onboarding via service account creation and REST API integrations, reducing manual setup time significantly.',
        'Delivered new features and performance improvements to the company’s HRMS platform, directly enhancing day-to-day HR workflows used across the organization.',
        'Collaborated closely with cross-functional teams and clients to gather requirements, iterate on feedback, and ship high-quality, production-ready solutions on time.',
        'Built and maintained reusable, accessible React UI component libraries for internal projects, ensuring design consistency and responsiveness across all screen sizes.'
      ],
      technologies: ['React.js', 'Next.js', 'REST APIs', 'Node.js', 'Tailwind CSS', 'Git']
    },
    {
      id: 2,
      year: 'Jul 2023 – Aug 2023',
      title: 'Software Development Intern',
      company: 'CodSoft — Remote',
      description: 'Developed and optimized front-end interfaces, improving user experience, accessibility, and system reliability.',
      achievements: [
        'Developed and optimized front-end interfaces, achieving a 10% increase in user engagement through enhanced performance, accessibility, and mobile-first design.',
        'Implemented full-stack features using HTML, CSS, JavaScript, and Node.js, reducing page error rates by 17%.',
        'Managed source code and collaborated on team projects using Git and GitHub, following branching and code review best practices.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Git', 'GitHub']
    },
    {
      id: 3,
      year: '2020 – 2024',
      title: 'B.Tech in Computer Science and Engineering',
      company: 'Babu Banarasi Das Institute of Technology and Management — Lucknow, UP',
      description: 'Completed Bachelor of Technology in CSE with a strong focus on data structures, web architecture, and full-stack software development.',
      achievements: [
        'Graduated with CGPA: 7.3 / 10.',
        'Developed production-grade MERN stack applications including Healthcare Management and Real-Time Chat applications.',
        'Mastered foundational Computer Science principles: Database Management, Object-Oriented Programming, and Computer Networks.'
      ],
      technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL']
    },
    {
      id: 4,
      year: '2018 – 2020',
      title: 'High School & Intermediate Studies',
      company: 'Patanjali Rishikul — Prayagraj, Uttar Pradesh',
      description: 'Completed secondary and senior secondary education under the CBSE board with focus on mathematics and science.',
      achievements: [
        'Higher Secondary (Class XII) – CBSE (2020): 77%',
        'Secondary (Class X) – CBSE (2018): 76%'
      ],
      technologies: ['Mathematics', 'Physics', 'Computer Science Fundamentals']
    }
  ];

  const skills: Skill[] = [
    { id: 1, name: 'React.js', category: 'Frontend', level: 95, yearsOfExperience: 1.5 },
    { id: 2, name: 'Next.js', category: 'Frontend', level: 90, yearsOfExperience: 1.5 },
    { id: 3, name: 'JavaScript (ES6+)', category: 'Languages', level: 94, yearsOfExperience: 2 },
    { id: 4, name: 'HTML5 & CSS3', category: 'Languages', level: 96, yearsOfExperience: 2 },
    { id: 5, name: 'Tailwind CSS', category: 'Frontend', level: 95, yearsOfExperience: 1.5 },
    { id: 6, name: 'Node.js', category: 'Backend', level: 88, yearsOfExperience: 1.5 },
    { id: 7, name: 'Express.js', category: 'Backend', level: 88, yearsOfExperience: 1.5 },
    { id: 8, name: 'Socket.io', category: 'Backend', level: 85, yearsOfExperience: 1 },
    { id: 9, name: 'MongoDB (Atlas)', category: 'Database & Cloud', level: 88, yearsOfExperience: 1.5 },
    { id: 10, name: 'MySQL', category: 'Database & Cloud', level: 80, yearsOfExperience: 1 },
    { id: 11, name: 'Git & GitHub', category: 'Tools', level: 92, yearsOfExperience: 2 },
    { id: 12, name: 'Postman & REST APIs', category: 'Tools', level: 90, yearsOfExperience: 1.5 }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'GSC Analyzer Production Release',
      issuer: 'Girl Power Talk',
      date: '2025',
      verificationUrl: 'https://github.com/Rishi-2607',
      icon: 'RocketLaunchIcon'
    },
    {
      id: 2,
      title: 'HRMS Workflow Optimization',
      issuer: 'Girl Power Talk',
      date: '2025',
      verificationUrl: 'https://github.com/Rishi-2607',
      icon: 'CheckBadgeIcon'
    },
    {
      id: 3,
      title: '+10% Engagement & -17% Errors',
      issuer: 'CodSoft Internship',
      date: '2023',
      verificationUrl: 'https://github.com/Rishi-2607',
      icon: 'BoltIcon'
    },
    {
      id: 4,
      title: 'B.Tech in Computer Science (CGPA: 7.3/10)',
      issuer: 'BBDITM, Lucknow',
      date: '2024',
      verificationUrl: 'https://linkedin.com/in/rishikant-yadav',
      icon: 'AcademicCapIcon'
    },
    {
      id: 5,
      title: 'Class XII CBSE Merit (77%)',
      issuer: 'Patanjali Rishikul',
      date: '2020',
      verificationUrl: 'https://linkedin.com/in/rishikant-yadav',
      icon: 'ShieldCheckIcon'
    },
    {
      id: 6,
      title: 'Class X CBSE Merit (76%)',
      issuer: 'Patanjali Rishikul',
      date: '2018',
      verificationUrl: 'https://linkedin.com/in/rishikant-yadav',
      icon: 'SparklesIcon'
    }
  ];

  const networkConnections: NetworkConnection[] = [
    {
      id: 1,
      name: 'Girl Power Talk Engineering',
      position: 'Full-Stack Development Team',
      company: 'Girl Power Talk (Mohali)',
      recommendation: 'Collaborated on shipping GSC Analyzer and building responsive React UI component libraries that enhanced organizational HRMS workflows.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      alt: 'Cross-functional engineering team collaborating in modern office',
      linkedinUrl: 'https://linkedin.com/in/rishikant-yadav'
    },
    {
      id: 2,
      name: 'CodSoft Development Cohort',
      position: 'Frontend & Full-Stack Team',
      company: 'CodSoft (Remote)',
      recommendation: 'Partnered on delivering accessible front-end interfaces, optimizing web performance by 10% and reducing page error rates by 17%.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      alt: 'Developers collaborating on software development code',
      linkedinUrl: 'https://linkedin.com/in/rishikant-yadav'
    },
    {
      id: 3,
      name: 'BBDITM Computer Science Dept',
      position: 'Academic & Project Peer Group',
      company: 'Babu Banarasi Das ITM',
      recommendation: 'Engineered MERN full-stack projects including Healthcare Management Systems and Real-Time Chat applications using Socket.io and MongoDB.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
      alt: 'Computer science students collaborating on engineering projects',
      linkedinUrl: 'https://linkedin.com/in/rishikant-yadav'
    }
  ];

  const valuePropositions = [
    {
      icon: 'CodeBracketIcon',
      title: 'Clean Code & MERN Mastery',
      description: 'Strong architectural patterns across MongoDB, Express, React, and Node.js with attention to maintainability and readability.'
    },
    {
      icon: 'RocketLaunchIcon',
      title: 'Performance & SEO First',
      description: 'Next.js server-side rendering, optimized image pipelines, and fast load times ensuring seamless user experience.'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Production-Grade Quality',
      description: 'Tested REST API integrations, JWT authentication, error handling, and robust third-party API automation.'
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Ownership & Collaboration',
      description: 'Clear client communication, active team collaboration, and a track record of on-time delivery across projects.'
    }
  ];

  if (!isHydrated) {
    return (
      <main className="min-h-screen bg-[#090e11] pt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="h-96 bg-[#111a1e] animate-pulse rounded-2xl" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090e11] pt-16 text-white">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-[#090e11] relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C1FF72]/10 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#20c997]/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#111a1e] border border-[#C1FF72]/30 rounded-full shadow-sm">
              <Icon name="UserCircleIcon" size={16} className="text-[#C1FF72]" />
              <span className="text-xs font-mono font-medium text-[#C1FF72]">About Rishikant Yadav</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Full-Stack Developer Driven by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1FF72] via-[#daffaa] to-[#20c997]">
                Precision & Quality
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              I&apos;m Rishikant Yadav, a full-stack developer with 1+ year of professional experience building scalable web applications using the MERN stack and Next.js. With a proven record of delivering production-grade features, integrating third-party APIs (like Google Search Console), and optimizing frontend performance, I bridge clean code with high-impact user experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#C1FF72] hover:bg-[#d4ff8f] text-[#090e11] text-sm font-bold rounded-xl shadow-lg shadow-[#C1FF72]/20 hover:shadow-[#C1FF72]/30 transition-all duration-200"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
                <span>Get in Touch</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/Rishi-2607"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 bg-[#111a1e] hover:bg-[#182428] border border-white/10 text-white text-sm font-semibold rounded-xl transition-all duration-200"
              >
                <Icon name="CodeBracketIcon" size={18} className="text-[#C1FF72]" />
                <span>GitHub Profile</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://linkedin.com/in/rishikant-yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 bg-[#111a1e] hover:bg-[#182428] border border-white/10 text-white text-sm font-semibold rounded-xl transition-all duration-200"
              >
                <Icon name="BriefcaseIcon" size={18} className="text-[#C1FF72]" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/[0.1] shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1597d7b50-1763296280545.png"
                alt="Portrait of Rishikant Yadav"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e11] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#111a1e]/95 backdrop-blur-md rounded-xl border border-white/[0.08] flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Rishikant Yadav</p>
                  <p className="text-xs text-[#C1FF72] font-mono">React Developer @ Girl Power Talk</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C1FF72]/15 text-[#C1FF72] border border-[#C1FF72]/30 font-semibold">
                    B.Tech CSE &apos;24
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#090e11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Core Engineering Philosophy
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
              Focused on scalable web architecture, clean code, responsive design, and user-centric development.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#C1FF72]/10 border border-[#C1FF72]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={prop.icon as any} size={20} className="text-[#C1FF72]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{prop.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{prop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#090e11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {(['journey', 'skills', 'achievements', 'network'] as const).map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#C1FF72] text-[#090e11] font-bold shadow-lg shadow-[#C1FF72]/20 border border-[#C1FF72]'
                    : 'bg-[#111a1e] text-zinc-400 hover:text-white hover:bg-[#182428] border border-white/[0.06]'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon
                    name={
                      tab === 'journey'
                        ? 'MapIcon'
                        : tab === 'skills'
                        ? 'ChartBarIcon'
                        : tab === 'achievements'
                        ? 'TrophyIcon'
                        : 'UserGroupIcon'
                    }
                    size={16}
                  />
                  <span>
                    {tab === 'journey'
                      ? 'Experience & Journey'
                      : tab === 'skills'
                      ? 'Skills Breakdown'
                      : tab === 'achievements'
                      ? 'Verified Milestones'
                      : 'Professional Collaborations'}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/[0.08] min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeTab === 'journey' && <JourneyTimeline milestones={milestones} />}
                {activeTab === 'skills' && <SkillsProgression skills={skills} />}
                {activeTab === 'achievements' && <AchievementBadges achievements={achievements} />}
                {activeTab === 'network' && <ProfessionalNetwork connections={networkConnections} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}