'use client';

import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import PricingCalculator from './PricingCalculator';
import ProcessFlow from './ProcessFlow';
import ServiceComparison from './ServiceComparison';
import CTASection from './CTASection';
import Icon from '@/components/ui/AppIcon';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  pricing: string;
  process: string[];
  category: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export default function ServicesInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services: Service[] = [
    {
      title: 'Custom Web Application Development',
      description: 'Build scalable, performant web applications with modern React architecture and best practices.',
      icon: 'CodeBracketIcon',
      category: 'development',
      features: [
        'Modern React 18+ with hooks and functional components',
        'TypeScript for type-safe, maintainable code',
        'Responsive design optimized for all devices',
        'Performance optimization and code splitting',
        'State management with Context API or Redux',
        'RESTful API integration and data fetching',
      ],
      deliverables: [
        'Production-ready React application',
        'Clean, documented source code',
        'Component library and style guide',
        'Deployment configuration and CI/CD setup',
        'Technical documentation',
        'Training session for your team',
      ],
      timeline: '6-12 weeks',
      pricing: '$5,000 - $15,000',
      process: [
        'Requirements gathering and technical planning',
        'UI/UX design and component architecture',
        'Iterative development with weekly demos',
        'Quality assurance and performance testing',
        'Deployment and post-launch support',
      ],
    },
    {
      title: 'UI/UX Redesign & Modernization',
      description: 'Transform outdated interfaces into modern, user-friendly experiences that drive engagement.',
      icon: 'PaintBrushIcon',
      category: 'design',
      features: [
        'Comprehensive UI/UX audit and analysis',
        'Modern design system implementation',
        'Accessibility compliance (WCAG 2.1)',
        'Mobile-first responsive design',
        'Interactive prototypes and animations',
        'User testing and feedback integration',
      ],
      deliverables: [
        'Complete design system and component library',
        'High-fidelity mockups and prototypes',
        'Redesigned React components',
        'Style guide and design documentation',
        'Accessibility audit report',
        'Performance improvement metrics',
      ],
      timeline: '4-8 weeks',
      pricing: '$3,000 - $8,000',
      process: [
        'Current state analysis and user research',
        'Design concept development and approval',
        'Component redesign and implementation',
        'User testing and refinement',
        'Final delivery and handoff',
      ],
    },
    {
      title: 'React Migration & Optimization',
      description: 'Migrate legacy applications to modern React or optimize existing React codebases for better performance.',
      icon: 'ArrowPathIcon',
      category: 'optimization',
      features: [
        'Legacy code assessment and migration strategy',
        'Incremental migration approach for minimal disruption',
        'Performance profiling and optimization',
        'Bundle size reduction and code splitting',
        'Modern React patterns and hooks implementation',
        'Testing coverage improvement',
      ],
      deliverables: [
        'Migrated React application',
        'Performance improvement report',
        'Optimized build configuration',
        'Updated documentation',
        'Migration guide and best practices',
        'Team training on new architecture',
      ],
      timeline: '4-10 weeks',
      pricing: '$4,000 - $12,000',
      process: [
        'Codebase audit and migration planning',
        'Phased migration with continuous testing',
        'Performance optimization and refactoring',
        'Quality assurance and regression testing',
        'Knowledge transfer and documentation',
      ],
    },
    {
      title: 'Ongoing Maintenance & Support',
      description: 'Keep your React application running smoothly with regular updates, bug fixes, and feature enhancements.',
      icon: 'WrenchScrewdriverIcon',
      category: 'support',
      features: [
        'Regular dependency updates and security patches',
        'Bug fixes and issue resolution',
        'Performance monitoring and optimization',
        'Feature enhancements and improvements',
        'Technical support and consultation',
        'Monthly progress reports',
      ],
      deliverables: [
        'Monthly maintenance updates',
        'Bug fix releases as needed',
        'Performance monitoring reports',
        'Security audit and updates',
        'Feature implementation',
        'Technical support documentation',
      ],
      timeline: 'Ongoing',
      pricing: '$1,500 - $3,000/month',
      process: [
        'Initial application audit and baseline',
        'Regular monitoring and proactive maintenance',
        'Priority-based issue resolution',
        'Monthly review and planning',
        'Continuous improvement implementation',
      ],
    },
    {
      title: 'Component Library Development',
      description: 'Create reusable, well-documented component libraries to accelerate development and ensure consistency.',
      icon: 'CubeIcon',
      category: 'development',
      features: [
        'Custom React component development',
        'Storybook documentation and demos',
        'TypeScript definitions and prop validation',
        'Accessibility built-in (ARIA labels, keyboard nav)',
        'Theming and customization support',
        'Unit and integration testing',
      ],
      deliverables: [
        'Production-ready component library',
        'Interactive Storybook documentation',
        'NPM package (if needed)',
        'Usage examples and guidelines',
        'Testing suite',
        'Maintenance documentation',
      ],
      timeline: '3-6 weeks',
      pricing: '$3,000 - $7,000',
      process: [
        'Component requirements and design system review',
        'Component development and testing',
        'Documentation and Storybook setup',
        'Integration testing with existing projects',
        'Final delivery and training',
      ],
    },
    {
      title: 'Performance Audit & Optimization',
      description: 'Comprehensive analysis and optimization of your React application for maximum speed and efficiency.',
      icon: 'BoltIcon',
      category: 'optimization',
      features: [
        'Lighthouse and Core Web Vitals analysis',
        'Bundle size analysis and optimization',
        'Render performance profiling',
        'Code splitting and lazy loading implementation',
        'Image and asset optimization',
        'Caching strategy implementation',
      ],
      deliverables: [
        'Detailed performance audit report',
        'Optimized application code',
        'Performance improvement metrics',
        'Optimization recommendations document',
        'Before/after comparison',
        'Ongoing monitoring setup',
      ],
      timeline: '2-4 weeks',
      pricing: '$2,000 - $5,000',
      process: [
        'Initial performance baseline measurement',
        'Bottleneck identification and analysis',
        'Optimization implementation',
        'Testing and validation',
        'Final report and recommendations',
      ],
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements.',
      icon: 'MagnifyingGlassIcon',
      duration: '1-2 weeks',
    },
    {
      number: 2,
      title: 'Design & Architecture',
      description: 'Create detailed wireframes, mockups, and technical architecture.',
      icon: 'PencilSquareIcon',
      duration: '1-3 weeks',
    },
    {
      number: 3,
      title: 'Development & Testing',
      description: 'Iterative development with weekly demos and feedback sessions.',
      icon: 'CommandLineIcon',
      duration: '4-8 weeks',
    },
    {
      number: 4,
      title: 'Quality Assurance',
      description: 'Comprehensive testing including functionality, performance, accessibility, and more.',
      icon: 'CheckBadgeIcon',
      duration: '1-2 weeks',
    },
    {
      number: 5,
      title: 'Deployment & Launch',
      description: 'Production deployment with monitoring setup and final checks.',
      icon: 'RocketLaunchIcon',
      duration: '1 week',
    },
    {
      number: 6,
      title: 'Support & Maintenance',
      description: 'Post-launch support, improvements, and ongoing monitoring.',
      icon: 'LifebuoyIcon',
      duration: 'Ongoing',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: 'Squares2X2Icon' },
    { id: 'development', name: 'Development', icon: 'CodeBracketIcon' },
    { id: 'design', name: 'Design', icon: 'PaintBrushIcon' },
    { id: 'optimization', name: 'Optimization', icon: 'BoltIcon' },
    { id: 'support', name: 'Support', icon: 'WrenchScrewdriverIcon' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-32 bg-gray-800/70 rounded-2xl"></div>
            <div className="h-64 bg-gray-800/70 rounded-2xl"></div>
            <div className="h-96 bg-gray-800/70 rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090e11] text-white">
      <div className="bg-[#090e11] py-16 sm:py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#C1FF72]/15 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#20c997]/15 rounded-full filter blur-3xl pointer-events-none translate-x-1/4 translate-y-1/3"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C1FF72]/15 border border-[#C1FF72]/30 rounded-full mb-6">
            <Icon name="BriefcaseIcon" size={32} className="text-[#C1FF72]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Full-Stack & React <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1FF72] via-[#daffaa] to-[#20c997]">Services</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Engineering robust web applications using Next.js and the MERN stack, combining responsive design, REST/WebSocket APIs, and reliable cloud deployments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-[#111a1e] px-4 py-2 rounded-full border border-[#C1FF72]/30 shadow-sm">
              <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-[#C1FF72]" />
              <span className="text-gray-200">1+ Year Professional Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-[#111a1e] px-4 py-2 rounded-full border border-[#C1FF72]/30 shadow-sm">
              <Icon name="StarIcon" size={18} variant="solid" className="text-[#C1FF72]" />
              <span className="text-gray-200">Production-Grade Features</span>
            </div>
            <div className="flex items-center gap-2 bg-[#111a1e] px-4 py-2 rounded-full border border-[#C1FF72]/30 shadow-sm">
              <Icon name="UserGroupIcon" size={18} variant="solid" className="text-[#C1FF72]" />
              <span className="text-gray-200">Collaborative Problem Solver</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-[#C1FF72] text-[#090e11] shadow-lg shadow-[#C1FF72]/20 border border-[#C1FF72]'
                  : 'bg-[#111a1e] text-gray-300 hover:text-white hover:bg-[#182428] border border-white/10'
              }`}
            >
              <Icon
                name={category.icon as any}
                size={20}
                className={
                  selectedCategory === category.id
                    ? 'text-[#090e11]'
                    : 'text-gray-400'
                }
              />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              className="bg-[#111a1e] border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:border-[#C1FF72]/40 hover:shadow-[0_0_30px_rgba(193,255,114,0.15)] hover:-translate-y-1 transition-all duration-300"
            />
          ))}
        </div>

        <div className="mb-16">
          <ProcessFlow
            steps={processSteps}
            className="bg-[#111a1e] border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] p-8 hover:border-[#C1FF72]/40 transition-all duration-300"
          />
        </div>

        <div className="mb-16">
          <ServiceComparison className="bg-[#111a1e] border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] p-8 hover:border-[#C1FF72]/40 transition-all duration-300" />
        </div>

        <div className="mb-16">
          <PricingCalculator className="bg-[#111a1e] border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.4)] p-8 hover:border-[#C1FF72]/40 transition-all duration-300" />
        </div>

        <CTASection />
      </div>
    </div>
  );
}
