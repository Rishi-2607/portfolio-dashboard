'use client';

import { useState, useEffect } from 'react';
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
    year: '2018',
    title: 'Junior React Developer',
    company: 'TechCorp Solutions',
    description: 'Started my journey in web development, focusing on building responsive user interfaces and learning React fundamentals.',
    achievements: [
    'Developed 15+ responsive web components',
    'Improved page load time by 40%',
    'Contributed to 3 major product releases'],

    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5']
  },
  {
    id: 2,
    year: '2019',
    title: 'React Developer',
    company: 'Digital Innovations Inc',
    description: 'Advanced to building complex single-page applications and implementing state management solutions.',
    achievements: [
    'Led frontend development for 2 enterprise projects',
    'Mentored 3 junior developers',
    'Implemented Redux for state management across 5 applications'],

    technologies: ['React', 'Redux', 'TypeScript', 'REST APIs']
  },
  {
    id: 3,
    year: '2020',
    title: 'Senior React Developer',
    company: 'CloudTech Systems',
    description: 'Specialized in performance optimization and architecting scalable React applications for high-traffic platforms.',
    achievements: [
    'Architected frontend for platform serving 100K+ users',
    'Reduced bundle size by 60% through code splitting',
    'Established component library used across 8 projects'],

    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL']
  },
  {
    id: 4,
    year: '2021',
    title: 'Lead Frontend Engineer',
    company: 'Enterprise Solutions Group',
    description: 'Led frontend team and established best practices for React development across the organization.',
    achievements: [
    'Managed team of 6 frontend developers',
    'Implemented CI/CD pipeline reducing deployment time by 70%',
    'Delivered 4 major client projects ahead of schedule'],

    technologies: ['React', 'Next.js', 'TypeScript', 'AWS', 'Docker']
  },
  {
    id: 5,
    year: '2022',
    title: 'Freelance React Specialist',
    company: 'Independent Consultant',
    description: 'Transitioned to freelancing to work directly with diverse clients, delivering custom React solutions.',
    achievements: [
    'Successfully completed 20+ client projects',
    'Achieved 100% client satisfaction rate',
    'Built long-term partnerships with 8 recurring clients'],

    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    id: 6,
    year: '2023-Present',
    title: 'Senior Freelance React Developer',
    company: 'Strategic Technology Partner',
    description: 'Established as a trusted React expert, focusing on high-value projects that transform businesses through exceptional user experiences.',
    achievements: [
    'Delivered 30+ production-ready applications',
    'Generated $500K+ in measurable client value',
    'Maintained 98% project success rate'],

    technologies: ['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Server Components']
  }];


  const skills: Skill[] = [
  { id: 1, name: 'React', category: 'Frontend Framework', level: 95, yearsOfExperience: 6 },
  { id: 2, name: 'Next.js', category: 'React Framework', level: 92, yearsOfExperience: 4 },
  { id: 3, name: 'TypeScript', category: 'Programming Language', level: 90, yearsOfExperience: 5 },
  { id: 4, name: 'JavaScript', category: 'Programming Language', level: 95, yearsOfExperience: 6 },
  { id: 5, name: 'Tailwind CSS', category: 'CSS Framework', level: 88, yearsOfExperience: 3 },
  { id: 6, name: 'Redux', category: 'State Management', level: 85, yearsOfExperience: 4 },
  { id: 7, name: 'GraphQL', category: 'API Technology', level: 80, yearsOfExperience: 3 },
  { id: 8, name: 'REST APIs', category: 'API Technology', level: 90, yearsOfExperience: 6 },
  { id: 9, name: 'Node.js', category: 'Backend', level: 75, yearsOfExperience: 4 },
  { id: 10, name: 'Git', category: 'Version Control', level: 92, yearsOfExperience: 6 },
  { id: 11, name: 'Responsive Design', category: 'UI/UX', level: 93, yearsOfExperience: 6 },
  { id: 12, name: 'Performance Optimization', category: 'Optimization', level: 88, yearsOfExperience: 5 }];


  const achievements: Achievement[] = [
  {
    id: 1,
    title: 'React Advanced Certification',
    issuer: 'Meta (Facebook)',
    date: '2022',
    verificationUrl: '#',
    icon: 'AcademicCapIcon'
  },
  {
    id: 2,
    title: 'Next.js Expert Certification',
    issuer: 'Vercel',
    date: '2023',
    verificationUrl: '#',
    icon: 'CheckBadgeIcon'
  },
  {
    id: 3,
    title: 'TypeScript Professional',
    issuer: 'Microsoft',
    date: '2021',
    verificationUrl: '#',
    icon: 'CodeBracketIcon'
  },
  {
    id: 4,
    title: 'Web Performance Specialist',
    issuer: 'Google',
    date: '2022',
    verificationUrl: '#',
    icon: 'BoltIcon'
  },
  {
    id: 5,
    title: 'UI/UX Design Principles',
    issuer: 'Nielsen Norman Group',
    date: '2021',
    verificationUrl: '#',
    icon: 'SparklesIcon'
  },
  {
    id: 6,
    title: 'Accessibility Specialist',
    issuer: 'W3C',
    date: '2023',
    verificationUrl: '#',
    icon: 'UserGroupIcon'
  }];


  const networkConnections: NetworkConnection[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    position: 'CTO',
    company: 'TechVision Inc',
    recommendation: 'Rishikant transformed our entire frontend architecture. His expertise in React and attention to user experience resulted in a 45% increase in user engagement. He\'s not just a developer - he\'s a strategic partner who understands business goals.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d07eb19-1763299289544.png",
    alt: 'Professional woman with blonde hair in navy blazer smiling confidently in modern office',
    linkedinUrl: '#'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Manager',
    company: 'CloudTech Systems',
    recommendation: 'Working with Rishikant was exceptional. He delivered a complex dashboard application 2 weeks ahead of schedule with zero bugs. His code quality and documentation set the standard for our entire engineering team.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5717f50-1763295673826.png",
    alt: 'Asian man in glasses and gray suit smiling professionally in corporate setting',
    linkedinUrl: '#'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Founder & CEO',
    company: 'StartupHub',
    recommendation: 'Rishikant built our MVP in record time without compromising quality. His ability to translate our vision into a beautiful, functional product was remarkable. He\'s now our go-to developer for all React projects.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16fcf9a6b-1763299446201.png",
    alt: 'Hispanic woman with long dark hair in white blouse smiling warmly in bright office',
    linkedinUrl: '#'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Engineering Director',
    company: 'Enterprise Solutions Group',
    recommendation: 'Rishikant led our frontend team through a critical migration to Next.js. His technical leadership and mentoring elevated the entire team\'s capabilities. The performance improvements he achieved were game-changing.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19ce72cc2-1763296345433.png",
    alt: 'Caucasian man with beard in dark suit smiling confidently in executive office',
    linkedinUrl: '#'
  }];


  const valuePropositions = [
  {
    icon: 'SparklesIcon',
    title: 'User-Centric Development',
    description: 'Every line of code serves the end user. I build interfaces that people love to use, combining technical excellence with intuitive design principles.'
  },
  {
    icon: 'RocketLaunchIcon',
    title: 'Performance Obsessed',
    description: 'Fast applications drive business results. I optimize every aspect - from bundle size to render performance - ensuring your users get lightning-fast experiences.'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Production-Ready Quality',
    description: 'No shortcuts, no technical debt. I deliver clean, maintainable code with comprehensive testing and documentation that your team can build upon.'
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Strategic Partnership',
    description: 'I\'m not just executing tasks - I\'m solving business problems. I bring strategic thinking to every project, ensuring technology serves your goals.'
  }];


  if (!isHydrated) {
    return (
      <main className="min-h-screen bg-background pt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="h-96 bg-muted animate-pulse rounded-lg" />
          </div>
        </div>
      </main>);

  }

return (
  <main className="min-h-screen bg-gray-900 pt-16 text-white">
    {/* Hero Section */}
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge translate-x-1/4 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-700/20 rounded-full">
            <Icon name="UserCircleIcon" size={20} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-300">About Me</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Crafting Digital Experiences Through{' '}
            <span className="text-purple-500">Technical Mastery</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            I'm Rishikant, a React developer who believes great code must serve great user experiences. With 6+ years of expertise, I transform business challenges into elegant digital solutions that users love and stakeholders value.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/Rishikant_Resume.pdf"
              download
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <Icon name="ArrowDownTrayIcon" size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200">
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-soft">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1597d7b50-1763296280545.png"
              alt="Professional portrait of Rishikant"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gray-900/80 rounded-xl shadow-medium p-6 max-w-xs border border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={24} className="text-purple-500" />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-sm text-white/70">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Value Propositions */}
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Work With Me</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            I'm not just a developer - I'm a strategic partner who understands that great code must serve great user experiences and business goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions.map((prop, index) => (
            <div
              key={index}
              className="bg-gray-900/70 rounded-2xl p-6 border border-gray-800 shadow-soft hover:border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={prop.icon as any} size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
              <p className="text-white/70 leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Interactive Tabs Section */}
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {(['journey', 'skills', 'achievements', 'network'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-900 text-white/70 hover:bg-gray-800'
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
                  size={20}
                />
                <span>
                  {tab === 'journey'
                    ? 'My Journey'
                    : tab === 'skills'
                    ? 'Skills Progression'
                    : tab === 'achievements'
                    ? 'Achievements'
                    : 'Network'}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="bg-gray-900/70 rounded-2xl shadow-soft p-8 lg:p-12 border border-gray-800">
          {activeTab === 'journey' && <JourneyTimeline milestones={milestones} />}
          {activeTab === 'skills' && <SkillsProgression skills={skills} />}
          {activeTab === 'achievements' && <AchievementBadges achievements={achievements} />}
          {activeTab === 'network' && <ProfessionalNetwork connections={networkConnections} />}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how my React expertise can help you build exceptional user experiences that drive real business results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-500 font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon name="RocketLaunchIcon" size={24} />
              <span>Start Your Project</span>
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-200"
            >
              <Icon name="EyeIcon" size={24} />
              <span>View My Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-950 text-white/80">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} Rishikant. All rights reserved. Built with React & Next.js
        </p>
      </div>
    </footer>
  </main>
);

}