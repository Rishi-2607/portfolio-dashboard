'use client';

import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
  description: string;
}

const SkillsShowcase = () => {
  const coreSkills: Skill[] = [
    { id: 1, name: "React.js", icon: "CodeBracketIcon", category: "Frontend", description: "Component libraries, hooks, state management, and accessible UI" },
    { id: 2, name: "Next.js", icon: "RocketLaunchIcon", category: "Framework", description: "SSR, SEO optimization, App Router, and server actions" },
    { id: 3, name: "JavaScript (ES6+)", icon: "BoltIcon", category: "Language", description: "Modern ES6+ syntax, asynchronous programming, and clean architecture" },
    { id: 4, name: "Node.js & Express.js", icon: "CommandLineIcon", category: "Backend", description: "RESTful API design, modular routing, and JWT authentication" },
    { id: 5, name: "MongoDB Atlas", icon: "CircleStackIcon", category: "Database", description: "Document modeling, indexing, aggregation, and cloud scalability" },
    { id: 6, name: "Socket.io", icon: "ChatBubbleLeftRightIcon", category: "Real-Time", description: "Bidirectional WebSockets, active user tracking, and messaging" },
    { id: 7, name: "Tailwind CSS", icon: "PaintBrushIcon", category: "Styling", description: "Mobile-first responsive design and utility-driven UI systems" },
    { id: 8, name: "Git & GitHub", icon: "CodeBracketSquareIcon", category: "Version Control", description: "Feature branching, pull requests, and collaborative code reviews" }
  ];

  const credentials = [
    {
      id: 1,
      title: "B.Tech in Computer Science & Engineering",
      institution: "Babu Banarasi Das Institute of Technology and Management",
      period: "2020 – 2024",
      score: "CGPA: 7.3 / 10",
      location: "Lucknow, Uttar Pradesh",
      icon: "AcademicCapIcon"
    },
    {
      id: 2,
      title: "Higher Secondary (Class XII) – CBSE",
      institution: "Patanjali Rishikul",
      period: "2020",
      score: "77%",
      location: "Uttar Pradesh",
      icon: "ShieldCheckIcon"
    },
    {
      id: 3,
      title: "Secondary (Class X) – CBSE",
      institution: "Patanjali Rishikul",
      period: "2018",
      score: "76%",
      location: "Uttar Pradesh",
      icon: "CheckBadgeIcon"
    }
  ];

  const coreCompetencies = [
    "REST API Design & Integration",
    "Responsive Web Design",
    "JWT Authentication & Security",
    "SEO & Performance Optimization",
    "Cross-functional Collaboration",
    "Problem-Solving & Clean Code"
  ];

  return (
    <section className="relative py-24 bg-[#090e11] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C1FF72]/8 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111a1e] border border-[#C1FF72]/30 mb-4 shadow-sm">
            <Icon name="CpuChipIcon" size={16} className="text-[#C1FF72]" />
            <span className="text-xs font-mono font-medium text-[#C1FF72]">Technical Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proven Stack & Academic Foundation
          </h2>

          <p className="text-base sm:text-lg text-[#94a3a8] max-w-2xl mx-auto">
            Practical full-stack proficiency backed by rigorous Computer Science engineering fundamentals and production delivery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          {/* Core Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white tracking-tight">Core Production Stack</h3>
              <span className="text-xs font-mono text-[#797f82]">8 Primary Technologies</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3.5">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="glass-card glass-card-hover rounded-xl p-4 flex items-start gap-3.5 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C1FF72]/10 border border-[#C1FF72]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C1FF72]/20 transition-colors">
                    <Icon
                      name={skill.icon as any}
                      size={18}
                      className="text-[#C1FF72]"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-white group-hover:text-[#C1FF72] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#94a3a8] px-1.5 py-0.5 rounded bg-white/[0.04]">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#94a3a8] mt-1 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Core Competencies Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">Education Credentials</h3>
                <span className="text-xs font-mono text-[#C1FF72]">Verified</span>
              </div>
              <div className="space-y-3">
                {credentials.map((cred, idx) => (
                  <motion.div
                    key={cred.id}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                    className="glass-card rounded-xl p-4 border border-white/[0.08] hover:border-[#C1FF72]/40 transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#C1FF72]/10 border border-[#C1FF72]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={cred.icon as any} size={18} className="text-[#C1FF72]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-white leading-snug">{cred.title}</h4>
                        <p className="text-xs text-[#94a3a8] mt-0.5">{cred.institution}</p>
                        <div className="flex items-center gap-2.5 mt-2 text-[11px] font-mono">
                          <span className="text-[#C1FF72] font-semibold px-2 py-0.5 rounded bg-[#C1FF72]/15 border border-[#C1FF72]/30">
                            {cred.score}
                          </span>
                          <span className="text-[#797f82]">{cred.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Competencies Box */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="glass-card rounded-xl p-5 border border-[#C1FF72]/20 bg-gradient-to-br from-[#111a1e] to-[#182428]"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon name="CheckBadgeIcon" size={18} className="text-[#C1FF72]" />
                <h4 className="font-bold text-sm text-white tracking-tight">Core Competencies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-[#f4f8fa] hover:text-[#C1FF72] hover:border-[#C1FF72]/40 transition-colors"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center pt-2"
        >
          <Link
            href="/skills"
            className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white rounded-xl bg-[#111a1e] hover:bg-[#182428] border border-white/10 hover:border-[#C1FF72]/40 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>View Detailed Skills & Tech Stack</span>
            <Icon name="ArrowRightIcon" size={16} className="ml-2 text-[#C1FF72]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
