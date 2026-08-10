'use client';

import { useState, useEffect } from 'react';
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
  'Frontend',
  'React Ecosystem',
  'UI/UX',
  'Tools & Workflow'];


  const skills: Skill[] = [
  {
    name: 'React.js',
    level: 95,
    category: 'React Ecosystem',
    description: 'Expert in building scalable, performant React applications with hooks, context, and modern patterns.',
    icon: '⚛️'
  },
  {
    name: 'Next.js',
    level: 92,
    category: 'React Ecosystem',
    description: 'Proficient in server-side rendering, static generation, API routes, and App Router architecture.',
    icon: '▲'
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'Frontend',
    description: 'Strong typing, interface design, generics, and type-safe application development.',
    icon: '📘'
  },
  {
    name: 'JavaScript (ES6+)',
    level: 94,
    category: 'Frontend',
    description: 'Deep understanding of modern JavaScript, async patterns, and functional programming concepts.',
    icon: '🟨'
  },
  {
    name: 'Tailwind CSS',
    level: 93,
    category: 'UI/UX',
    description: 'Expert in utility-first CSS, responsive design, and custom configuration for brand consistency.',
    icon: '🎨'
  },
  {
    name: 'Redux & State Management',
    level: 88,
    category: 'React Ecosystem',
    description: 'Experience with Redux Toolkit, Context API, Zustand, and complex state architecture.',
    icon: '🔄'
  },
  {
    name: 'Responsive Design',
    level: 96,
    category: 'UI/UX',
    description: 'Mobile-first approach, cross-browser compatibility, and pixel-perfect implementations.',
    icon: '📱'
  },
  {
    name: 'Git & Version Control',
    level: 91,
    category: 'Tools & Workflow',
    description: 'Branching strategies, code reviews, merge conflict resolution, and collaborative workflows.',
    icon: '🔀'
  },
  {
    name: 'Performance Optimization',
    level: 89,
    category: 'Frontend',
    description: 'Code splitting, lazy loading, bundle optimization, and Core Web Vitals improvement.',
    icon: '⚡'
  },
  {
    name: 'REST APIs & GraphQL',
    level: 87,
    category: 'Frontend',
    description: 'API integration, data fetching strategies, error handling, and caching mechanisms.',
    icon: '🔌'
  },
  {
    name: 'Figma to Code',
    level: 94,
    category: 'UI/UX',
    description: 'Translating design mockups into pixel-perfect, responsive, and accessible interfaces.',
    icon: '🎯'
  },
  {
    name: 'Webpack & Build Tools',
    level: 85,
    category: 'Tools & Workflow',
    description: 'Module bundling, optimization, custom configurations, and build pipeline setup.',
    icon: '📦'
  }];


  const technologies: Technology[] = [
  { name: 'React', logo: "https://images.unsplash.com/photo-1733977459324-1fd22d548f68", alt: 'React logo with blue atom symbol' },
  { name: 'Next.js', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e79fbe04-1764410558095.png", alt: 'Next.js black triangle logo' },
  { name: 'TypeScript', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_148be4d93-1764410557989.png", alt: 'TypeScript blue TS logo' },
  { name: 'JavaScript', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f54f5640-1764410560808.png", alt: 'JavaScript yellow JS logo' },
  { name: 'Tailwind', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1fa0875-1764410559671.png", alt: 'Tailwind CSS teal wave logo' },
  { name: 'Redux', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18bfea66d-1764410557000.png", alt: 'Redux purple atom logo' },
  { name: 'HTML5', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1110e6d34-1764410558231.png", alt: 'HTML5 orange shield logo' },
  { name: 'CSS3', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c33e927e-1764410561660.png", alt: 'CSS3 blue shield logo' },
  { name: 'Git', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a10e51e3-1764410558256.png", alt: 'Git orange branching logo' },
  { name: 'GitHub', logo: "https://images.unsplash.com/photo-1705231513062-1451fbedb138", alt: 'GitHub black octocat logo' },
  { name: 'Figma', logo: "https://images.unsplash.com/photo-1730817403381-fd88fd35d4a4", alt: 'Figma colorful F logo' },
  { name: 'Webpack', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12b660b79-1764410560334.png", alt: 'Webpack blue cube logo' },
  { name: 'npm', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa922447-1764410558090.png", alt: 'npm red package manager logo' },
  { name: 'Vite', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10ef8da53-1764410561325.png", alt: 'Vite purple lightning logo' },
  { name: 'Jest', logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d52eb655-1764410562695.png", alt: 'Jest red testing framework logo' },
  { name: 'VS Code', logo: "https://images.unsplash.com/photo-1637592156149-9eb51e77f26d", alt: 'Visual Studio Code blue editor logo' }];


  const certifications: Certification[] = [
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'March 2023',
    credentialId: 'UC-a1b2c3d4e5f6',
    logo: "https://images.unsplash.com/photo-1654277041028-ffa014fb301b",
    alt: 'Udemy online learning platform logo with purple U',
    verifyUrl: 'https://www.udemy.com/certificate/UC-a1b2c3d4e5f6'
  },
  {
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: 'July 2023',
    credentialId: 'FM-987654321',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_181365a29-1764410558423.png",
    alt: 'Frontend Masters red FM logo for web development courses',
    verifyUrl: 'https://frontendmasters.com/certificates/FM-987654321'
  },
  {
    title: 'TypeScript Fundamentals',
    issuer: 'Pluralsight',
    date: 'January 2024',
    credentialId: 'PS-ts-2024-001',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_146fdaccf-1764410560336.png",
    alt: 'Pluralsight pink PS logo for technology skills platform',
    verifyUrl: 'https://www.pluralsight.com/certificates/PS-ts-2024-001'
  },
  {
    title: 'Next.js 14 Mastery',
    issuer: 'Vercel',
    date: 'September 2024',
    credentialId: 'VRC-next14-456',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4d7b19d-1764410561715.png",
    alt: 'Vercel black triangle logo for web deployment platform',
    verifyUrl: 'https://vercel.com/certificates/VRC-next14-456'
  }];


  const codeExamples: CodeExample[] = [
  {
    title: 'Custom React Hook',
    description: 'Reusable hook for data fetching with loading and error states',
    language: 'typescript',
    code: `import { useState, useEffect } from 'react'
;\n\ninterface FetchState<T> {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n}\n\nfunction useFetch<T>(url: string): FetchState<T> {\n  const [state, setState] = useState<FetchState<T>>({\n    data: null,\n    loading: true,\n    error: null,\n  });\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const response = await fetch(url);\n        const data = await response.json();\n        setState({ data, loading: false, error: null });\n      } catch (error) {\n        setState({ data: null, loading: false, error: error as Error });\n      }\n    };\n\n    fetchData();\n  }, [url]);\n\n  return state;\n}`
  },
  {
    title: 'Performance Optimization',
    description: 'Memoization and lazy loading for optimal React performance',
    language: 'typescript',
    code: `import { memo, lazy, Suspense } from 'react'
;\n\nconst HeavyComponent = lazy(() => import('./HeavyComponent'));\n\ninterface ItemProps {\n  id: number;\n  name: string;\n  onClick: (id: number) => void;\n}\n\nconst ListItem = memo(({ id, name, onClick }: ItemProps) => {\n  return (\n    <div onClick={() => onClick(id)}>\n      {name}\n    </div>\n  );\n});\n\nfunction OptimizedList() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <HeavyComponent />\n    </Suspense>\n  );\n}`
  }];


  const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'Advanced React Architecture',
    skills: ['Next.js 14', 'Server Components', 'Advanced TypeScript', 'Performance Optimization'],
    description: 'Mastering cutting-edge React patterns and Next.js App Router architecture for enterprise applications.'
  },
  {
    year: '2024',
    title: 'Full-Stack Integration',
    skills: ['API Development', 'Database Design', 'Authentication', 'Deployment'],
    description: 'Expanded expertise to include backend integration, API design, and production deployment strategies.'
  },
  {
    year: '2023',
    title: 'React Ecosystem Mastery',
    skills: ['React Hooks', 'Redux Toolkit', 'React Query', 'Testing'],
    description: 'Deep dive into React ecosystem tools and state management solutions for complex applications.'
  },
  {
    year: '2022',
    title: 'Modern Frontend Foundation',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    description: 'Built strong foundation in modern frontend development with focus on component architecture.'
  }];


  const metrics: Metric[] = [
  {
    label: 'Lighthouse Score',
    value: '98',
    icon: 'BoltIcon',
    description: 'Average performance score across production projects'
  },
  {
    label: 'Code Quality',
    value: 'A+',
    icon: 'CodeBracketIcon',
    description: 'Consistent high-quality code with comprehensive testing'
  },
  {
    label: 'Projects Delivered',
    value: '50+',
    icon: 'CheckBadgeIcon',
    description: 'Successfully completed React projects for diverse clients'
  },
  {
    label: 'Client Satisfaction',
    value: '100%',
    icon: 'StarIcon',
    description: 'Perfect track record of client satisfaction and repeat business'
  }];


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
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            Technical Expertise
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my React development skills, technology stack, and continuous learning journey in modern web development.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <PerformanceMetrics metrics={metrics} className="rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] p-6" />
        </div>

        {/* Category Filter + Skills Grid */}
        <div className="mb-16">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] p-6 mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} className="rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_rgba(0,0,0,0.6)] transition-all" />
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <TechStack technologies={technologies} className="rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] p-6" />
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} className="rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_rgba(0,0,0,0.6)] transition-all" />
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
              <CodeSnippet key={index} {...example} className="rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] p-6" />
            ))}
          </div>
        </div>

        {/* Skill Timeline */}
        <div className="mb-16">
          <SkillTimeline timeline={timeline} className="rounded-2xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] p-6" />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 md:p-12 text-center shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's leverage these skills to create exceptional web experiences for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-purple-500 font-semibold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-200"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  </div>
);

}