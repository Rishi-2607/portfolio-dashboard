'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import SkillCard from './SkillCard';
import TechStack from './TechStack';
import CertificationCard from './CertificationCard';
import CodeSnippet from './CodeSnippet';
import SkillTimeline from './SkillTimeline';
import PerformanceMetrics from './PerformanceMetrics';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  icon: string;
}

interface Technology {
  name: string;
  logo: string;
  alt: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo: string;
  alt: string;
  verifyUrl: string;
}

interface CodeExample {
  title: string;
  description: string;
  code: string;
  language: string;
}

interface TimelineItem {
  year: string;
  title: string;
  skills: string[];
  description: string;
}

interface Metric {
  label: string;
  value: string;
  icon: string;
  description: string;
}

export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Skills');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = [
    'All Skills',
    'Languages',
    'Frameworks & Libraries',
    'Databases & Cloud',
    'Tools & Platforms',
    'Core Competencies',
  ];

  const skills: Skill[] = [
    {
      name: 'JavaScript (ES6+)',
      level: 95,
      category: 'Languages',
      description: 'Deep understanding of modern ES6+ syntax, asynchronous programming, closures, promises, and clean patterns.',
      icon: '🟨',
    },
    {
      name: 'HTML5 & CSS3',
      level: 95,
      category: 'Languages',
      description: 'Semantic HTML5 structure, modern CSS3 layout systems (Flexbox, Grid), animations, and responsive standards.',
      icon: '🌐',
    },
    {
      name: 'React.js',
      level: 95,
      category: 'Frameworks & Libraries',
      description: 'Expert in building scalable React applications with custom hooks, reusable UI component libraries, and modular state.',
      icon: '⚛️',
    },
    {
      name: 'Next.js',
      level: 92,
      category: 'Frameworks & Libraries',
      description: 'Proficient in server-side rendering (SSR), SEO optimization, App Router, optimized images, and cloud deployments.',
      icon: '▲',
    },
    {
      name: 'Node.js & Express.js',
      level: 90,
      category: 'Frameworks & Libraries',
      description: 'Developing modular RESTful APIs, middleware architecture, request validation, and backend service integrations.',
      icon: '🟩',
    },
    {
      name: 'Socket.io',
      level: 88,
      category: 'Frameworks & Libraries',
      description: 'Engineering bidirectional real-time communication, instant message broadcasts, and active user presence tracking.',
      icon: '🔌',
    },
    {
      name: 'Tailwind CSS',
      level: 95,
      category: 'Frameworks & Libraries',
      description: 'Crafting responsive, accessible, utility-first interfaces with custom themes, glassmorphism, and micro-interactions.',
      icon: '🎨',
    },
    {
      name: 'MongoDB (Atlas)',
      level: 90,
      category: 'Databases & Cloud',
      description: 'Document database modeling, schema design, MongoDB Atlas cloud clusters, and high-performance querying.',
      icon: '🍃',
    },
    {
      name: 'MySQL',
      level: 85,
      category: 'Databases & Cloud',
      description: 'Relational database schema structuring, normalization, SQL queries, and transactional data integrity.',
      icon: '🐬',
    },
    {
      name: 'Render & Netlify',
      level: 88,
      category: 'Databases & Cloud',
      description: 'Continuous cloud deployment, environment variable configuration, build optimization, and hosting reliability.',
      icon: '☁️',
    },
    {
      name: 'Git & GitHub',
      level: 93,
      category: 'Tools & Platforms',
      description: 'Branching best practices, pull request workflows, merge conflict resolution, and collaborative version control.',
      icon: '🐙',
    },
    {
      name: 'VS Code & Postman',
      level: 94,
      category: 'Tools & Platforms',
      description: 'API endpoint testing, request simulation, debugging workflows, and efficient development environments.',
      icon: '🛠️',
    },
    {
      name: 'REST API Design & Integration',
      level: 94,
      category: 'Core Competencies',
      description: 'Architecting clean RESTful endpoints, Google Search Console API integrations, error boundaries, and payloads.',
      icon: '🔗',
    },
    {
      name: 'JWT & Security',
      level: 91,
      category: 'Core Competencies',
      description: 'Stateless token-based authentication, bcrypt credential encryption, and role-based access control (RBAC).',
      icon: '🔒',
    },
    {
      name: 'SEO & Performance',
      level: 92,
      category: 'Core Competencies',
      description: 'Server-side rendering, search engine crawlability, Core Web Vitals optimization, and bundle minimization.',
      icon: '⚡',
    },
    {
      name: 'Responsive & Mobile-First UI',
      level: 96,
      category: 'Core Competencies',
      description: 'Ensuring seamless cross-device compatibility, accessibility compliance, and fluid layouts on all screen sizes.',
      icon: '📱',
    },
  ];

  const technologies: Technology[] = [
    { name: 'React.js', logo: 'https://images.unsplash.com/photo-1733977459324-1fd22d548f68', alt: 'React.js logo' },
    { name: 'Next.js', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e79fbe04-1764410558095.png', alt: 'Next.js logo' },
    { name: 'JavaScript', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f54f5640-1764410560808.png', alt: 'JavaScript logo' },
    { name: 'Node.js', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a10e51e3-1764410558256.png', alt: 'Node.js logo' },
    { name: 'Tailwind CSS', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d1fa0875-1764410559671.png', alt: 'Tailwind CSS logo' },
    { name: 'MongoDB', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1110e6d34-1764410558231.png', alt: 'MongoDB logo' },
    { name: 'HTML5', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1110e6d34-1764410558231.png', alt: 'HTML5 logo' },
    { name: 'CSS3', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c33e927e-1764410561660.png', alt: 'CSS3 logo' },
    { name: 'Git', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a10e51e3-1764410558256.png', alt: 'Git logo' },
    { name: 'GitHub', logo: 'https://images.unsplash.com/photo-1705231513062-1451fbedb138', alt: 'GitHub logo' },
    { name: 'VS Code', logo: 'https://images.unsplash.com/photo-1637592156149-9eb51e77f26d', alt: 'VS Code editor logo' },
    { name: 'Postman', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fa922447-1764410558090.png', alt: 'Postman API tool logo' },
    { name: 'Vite', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_10ef8da53-1764410561325.png', alt: 'Vite build tool logo' },
    { name: 'Render', logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a4d7b19d-1764410561715.png', alt: 'Render cloud hosting logo' },
  ];

  const certifications: Certification[] = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      issuer: 'Babu Banarasi Das Institute of Tech & Mgmt',
      date: '2020 – 2024',
      credentialId: 'CGPA: 7.3 / 10',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      alt: 'BBDITM University engineering degree emblem',
      verifyUrl: 'https://linkedin.com/in/rishikant-yadav',
    },
    {
      title: 'Higher Secondary (Class XII CBSE)',
      issuer: 'Patanjali Rishikul',
      date: '2020',
      credentialId: 'Score: 77%',
      logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
      alt: 'Patanjali Rishikul school emblem',
      verifyUrl: 'https://linkedin.com/in/rishikant-yadav',
    },
    {
      title: 'Secondary (Class X CBSE)',
      issuer: 'Patanjali Rishikul',
      date: '2018',
      credentialId: 'Score: 76%',
      logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d',
      alt: 'Patanjali Rishikul secondary education emblem',
      verifyUrl: 'https://linkedin.com/in/rishikant-yadav',
    },
    {
      title: 'GSC Analyzer Production Release',
      issuer: 'Girl Power Talk',
      date: 'Aug 2025',
      credentialId: 'Full-Stack Architecture',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      alt: 'GSC Analyzer production release badge',
      verifyUrl: 'https://github.com/Rishi-2607',
    },
  ];

  const codeExamples: CodeExample[] = [
    {
      title: 'Socket.io Real-Time Event Hook',
      description: 'Custom React hook for bidirectional WebSocket messaging and connection lifecycle',
      language: 'javascript',
      code: `import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export function useRealtimeMessages(socketUrl, roomId) {
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const socket = io(socketUrl, { transports: ['websocket'] });

    socket.emit('join-room', { roomId });

    socket.on('message-received', (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    socket.on('presence-update', ({ count }) => {
      setActiveUsers(count);
    });

    return () => {
      socket.disconnect();
    };
  }, [socketUrl, roomId]);

  return { messages, activeUsers };
}`,
    },
    {
      title: 'Secure JWT Middleware & REST Route Guard',
      description: 'Express.js authorization middleware with token verification and error boundaries',
      language: 'javascript',
      code: `const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied: Token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid or expired token' });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;`,
    },
  ];

  const timeline: TimelineItem[] = [
    {
      year: '2025 – Present',
      title: 'React Developer (Full-Time)',
      skills: ['GSC Analyzer', 'Google REST APIs', 'HRMS Platform', 'React UI Components'],
      description: 'Girl Power Talk, Mohali — Architected and shipped GSC Analyzer with automated onboarding, improved company HRMS, and maintained reusable React UI component libraries.',
    },
    {
      year: '2024',
      title: 'B.Tech Graduation & MERN Health App',
      skills: ['BBDITM Lucknow (CGPA: 7.3/10)', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Completed B.Tech in CSE at Babu Banarasi Das Institute of Tech & Mgmt. Designed and deployed full-stack healthcare management application with role-based access control.',
    },
    {
      year: '2023',
      title: 'Software Development Intern',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Git & GitHub'],
      description: 'CodSoft — Developed and optimized front-end interfaces, achieving +10% user engagement and 17% page error reduction through mobile-first design and code reviews.',
    },
    {
      year: '2020',
      title: 'Higher Secondary (Class XII CBSE)',
      skills: ['Patanjali Rishikul (77%)', 'Computer Science Foundations', 'Mathematics'],
      description: 'Completed higher secondary education with strong foundations in computer science and problem-solving, commencing B.Tech in Computer Science & Engineering.',
    },
  ];

  const metrics: Metric[] = [
    {
      label: 'Error Reduction',
      value: '-17%',
      icon: 'BoltIcon',
      description: 'Reduced page error rates at CodSoft through robust error handling',
    },
    {
      label: 'User Engagement',
      value: '+10%',
      icon: 'CodeBracketIcon',
      description: 'Increase in user engagement via frontend performance & accessibility',
    },
    {
      label: 'Professional Experience',
      value: '1+ Yr',
      icon: 'CheckBadgeIcon',
      description: 'Experience building scalable MERN stack and Next.js applications',
    },
    {
      label: 'Production Delivery',
      value: '100%',
      icon: 'StarIcon',
      description: 'Track record of delivering production-grade features on time',
    },
  ];


  const filteredSkills = activeCategory === 'All Skills' ?
  skills :
  skills.filter((skill) => skill.category === activeCategory);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="h-12 bg-muted rounded-lg w-64 mx-auto mb-4 animate-pulse" />
              <div className="h-6 bg-muted rounded-lg w-96 mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      </div>);

  }

return (
  <div className="min-h-screen bg-[#090e11]">
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#111a1e] border border-[#C1FF72]/30 rounded-full shadow-sm mb-4">
            <span className="text-xs font-mono font-medium text-[#C1FF72]">Production Stack & Metrics</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1FF72] via-[#daffaa] to-[#20c997]">Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my React and Next.js development skills, full-stack technology stack, and continuous production engineering.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <PerformanceMetrics metrics={metrics} />
        </div>

        {/* Category Filter + Skills Grid */}
        <div className="mb-16">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <TechStack technologies={technologies} />
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
            Code Examples
          </h2>
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <CodeSnippet key={index} {...example} />
            ))}
          </div>
        </div>

        {/* Skill Timeline */}
        <div className="mb-16">
          <SkillTimeline timeline={timeline} />
        </div>

        {/* Call to Action */}
        <div className="bg-[#182428] rounded-2xl p-8 md:p-12 text-center border border-[#C1FF72]/30 shadow-[0_0_35px_rgba(193,255,114,0.15)]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-gray-300/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s leverage these skills to create exceptional, high-speed web experiences for your team.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C1FF72] hover:bg-[#d4ff8f] text-[#090e11] font-bold rounded-xl shadow-[0_0_20px_rgba(193,255,114,0.3)] hover:-translate-y-1 transition-all duration-200"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  </div>
);

}