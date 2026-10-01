'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import ProjectModal from './ProjectModal';
import StatsSection from './StatsSection';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  fullDescription: string;
  image: string;
  alt: string;
  additionalImages: {url: string;alt: string;}[];
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
  featured: boolean;
  duration: string;
  team: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Blog Platform",
    category: "Next.js",
    technologies: ["Next.js", "Node.js", "MongoDB", "Axios", "Tailwind CSS"],
    description: "SEO-optimized blog platform with email subscriptions, admin controls, and modular RESTful APIs.",
    fullDescription: "Built a production-ready blog platform featuring server-side rendering for optimal search engine ranking, optimized image loading, and responsive design. Implemented secure email subscription flows with real-time feedback, admin dashboard controls, and modular REST API endpoints deployed on Render with MongoDB Atlas.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    alt: "Full-Stack Blog Platform interface showing article reader, admin controls and subscriber metrics",
    additionalImages: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        alt: "Admin analytics dashboard showing content readership and subscriber growth"
      },
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        alt: "Clean Next.js SSR architecture and modular REST API code"
      }
    ],
    challenge: "Building a high-performance content platform with rapid server-side rendering, instant SEO discoverability, automated email delivery for new posts, and reliable cloud database persistence.",
    solution: "Engineered SSR architecture using Next.js and Axios with MongoDB Atlas for scalable document storage. Created real-time subscription feedback loops, modular REST endpoints for CRUD operations, and deployed environment-based configurations on Render.",
    results: [
      "Achieved sub-second page rendering using Next.js server-side rendering (SSR)",
      "Implemented real-time email subscriptions with instant feedback notifications",
      "Designed responsive admin dashboard with role-controlled publishing workflows",
      "Deployed on Render with environment-based configuration and MongoDB Atlas"
    ],
    metrics: [
      { label: "Deployment", value: "Render" },
      { label: "Database", value: "Atlas" },
      { label: "Rendering", value: "SSR/SEO" },
      { label: "Stack", value: "Next.js" }
    ],
    testimonial: {
      text: "Built a production-ready blog platform with Next.js, MongoDB Atlas, and Axios, featuring server-side rendering for SEO, optimized image loading, and a fully responsive UI.",
      author: "Rishikant Yadav",
      role: "Full-Stack Developer",
      company: "Render + MongoDB Atlas"
    },
    demoUrl: "https://github.com/Rishi-2607",
    githubUrl: "https://github.com/Rishi-2607",
    featured: true,
    duration: "Jul 2025",
    team: "Solo Full-Stack Developer"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    category: "Real-Time",
    technologies: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    description: "End-to-end real-time bidirectional messaging application with JWT auth, WebSockets, and active user tracking.",
    fullDescription: "Engineered an instant messaging application using Socket.io for low-latency bidirectional communication with active presence tracking. Secured the platform with JWT-based authentication, bcrypt password hashing, and protected endpoints, backed by Express.js and MongoDB Atlas with a clean, mobile-responsive Vite + Tailwind frontend.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    alt: "Real-time chat application interface showing active chat rooms, online user statuses, and instant message feeds",
    additionalImages: [
      {
        url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624",
        alt: "Messaging threads with instant delivery receipts and active user indicators"
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        alt: "JWT authentication and bcrypt encrypted credential pipeline"
      }
    ],
    challenge: "Minimizing message latency across concurrent users while securing auth tokens, preventing unauthorized socket room access, and guaranteeing responsive mobile layouts.",
    solution: "Implemented Socket.io event-driven WebSocket channels for immediate bidirectional transmission. Paired with stateless JWT authorization guards and bcrypt hashing on Express.js to keep all socket channels and REST endpoints completely secure.",
    results: [
      "Delivered instant message delivery with zero perceptible delay using Socket.io",
      "Secured all endpoints with JWT token validation and salted bcrypt credential hashing",
      "Built mobile-first reactive chat interface utilizing React.js, Vite, and Tailwind CSS",
      "Supported real-time online/offline presence tracking and conversation channels"
    ],
    metrics: [
      { label: "Latency", value: "<50ms" },
      { label: "Auth", value: "JWT/Bcrypt" },
      { label: "Protocol", value: "WebSockets" },
      { label: "Frontend", value: "Vite+React" }
    ],
    testimonial: {
      text: "Engineered real-time bidirectional communication using Socket.io with instant message delivery and active user tracking, backed by Express.js and MongoDB Atlas.",
      author: "Rishikant Yadav",
      role: "Full-Stack Developer",
      company: "Socket.io + MERN"
    },
    demoUrl: "https://github.com/Rishi-2607",
    githubUrl: "https://github.com/Rishi-2607",
    featured: true,
    duration: "Apr 2025",
    team: "Solo Full-Stack Developer"
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "MERN Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "Full-stack healthcare management application with role-based access control, secure authentication, and data dashboards.",
    fullDescription: "Designed and deployed a full-stack healthcare application with role-based access control (RBAC), secure user authentication, patient records management, and clinical data dashboards. Implemented an accessible mobile-first UI using Tailwind CSS for streamlined healthcare provider and patient workflows.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    alt: "Healthcare management system dashboard showing patient records, clinical schedules and role-based permissions",
    additionalImages: [
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
        alt: "Health data metrics and appointment status analytics"
      },
      {
        url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c",
        alt: "Clinical records management view with role-based permissions"
      }
    ],
    challenge: "Organizing sensitive healthcare records across distinct roles (doctors, administrators, patients) while preserving strict authorization boundaries and high mobile accessibility.",
    solution: "Implemented granular role-based access control (RBAC) middleware in Node.js and Express. Structured MongoDB collections for patient history and schedules, paired with an accessible, mobile-first Tailwind CSS UI.",
    results: [
      "Implemented role-based access control ensuring doctors and patients only access authorized data",
      "Delivered clean, mobile-first responsive dashboards optimized for handheld devices",
      "Integrated secure session management and encrypted medical credential storage",
      "Significantly reduced manual paperwork overhead through centralized digital records"
    ],
    metrics: [
      { label: "Security", value: "Role RBAC" },
      { label: "UI Design", value: "Mobile-First" },
      { label: "Database", value: "MongoDB" },
      { label: "Architecture", value: "MERN" }
    ],
    testimonial: {
      text: "Designed and deployed a full-stack healthcare management application with role-based access control, secure user authentication, and data dashboards.",
      author: "Rishikant Yadav",
      role: "Full-Stack Developer",
      company: "Healthcare MERN App"
    },
    demoUrl: "https://github.com/Rishi-2607",
    githubUrl: "https://github.com/Rishi-2607",
    featured: true,
    duration: "Jul 2024",
    team: "Full-Stack Developer"
  },
  {
    id: 4,
    title: "GSC Analyzer (Google Search Console Tool)",
    category: "Enterprise",
    technologies: ["React.js", "Node.js", "REST APIs", "Google APIs", "Tailwind CSS"],
    description: "Full-stack Google Search Console management tool with automated service account user onboarding and REST API integrations.",
    fullDescription: "Architected and shipped GSC Analyzer at Girl Power Talk to automate Google Search Console property management and analytics reporting. Designed automated service account onboarding flows and integrated high-throughput REST APIs, reducing manual client setup time significantly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    alt: "GSC Analyzer interface displaying search analytics, automated property indexing and keyword performance",
    additionalImages: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        alt: "Search metrics and organic keyword growth reports"
      },
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
        alt: "Automated service account integration pipeline interface"
      }
    ],
    challenge: "Manual onboarding for Google Search Console required tedious client permissions, manual verification keys, and repetitive API configurations that delayed team onboarding.",
    solution: "Engineered automated credential handshakes using Google Service Accounts and modular REST APIs. Built an intuitive React UI where teams can connect properties and inspect indexing metrics in real time.",
    results: [
      "Reduced manual client property setup time significantly via service account automation",
      "Integrated Google Search Console REST APIs for real-time indexing and keyword monitoring",
      "Collaborated closely with cross-functional teams and clients to ship on time",
      "Built and maintained reusable, accessible React UI component libraries"
    ],
    metrics: [
      { label: "Setup Time", value: "Automated" },
      { label: "API", value: "Google REST" },
      { label: "Role", value: "Architect" },
      { label: "Status", value: "Shipped" }
    ],
    testimonial: {
      text: "Architected and shipped GSC Analyzer, a full-stack Google Search Console management tool — automated user onboarding via service account creation and REST API integrations, reducing manual setup time significantly.",
      author: "Girl Power Talk",
      role: "React Developer (Full-Time)",
      company: "Mohali, Punjab, India"
    },
    demoUrl: "https://github.com/Rishi-2607",
    githubUrl: "https://github.com/Rishi-2607",
    featured: true,
    duration: "Aug 2025 – Present",
    team: "React Developer (Full-Time)"
  },
  {
    id: 5,
    title: "Company HRMS Platform",
    category: "Enterprise",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS"],
    description: "Enterprise HRMS platform enhancements directly improving day-to-day HR workflows and administrative efficiency.",
    fullDescription: "Delivered new features and performance improvements to the company's internal HRMS platform at Girl Power Talk. Upgraded core employee records, automated leave and attendance approvals, and optimized frontend bundle execution for rapid daily access across the organization.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    alt: "Enterprise HRMS portal showing employee records, performance tracking, and workflow management",
    additionalImages: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        alt: "Team collaboration and employee workflow management"
      },
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        alt: "Analytics reporting and HR schedule approvals"
      }
    ],
    challenge: "Daily HR workflows were encumbered by legacy UI bottlenecks, slow data updates, and cumbersome permission hierarchies across departments.",
    solution: "Re-engineered frontend state and reusable React component libraries. Implemented optimized REST query flows and streamlined approval UI views, cutting response latency for team administrators.",
    results: [
      "Directly enhanced day-to-day HR workflows used by the organization",
      "Optimized React render trees and API caching, eliminating dashboard lag",
      "Ensured responsive layouts and accessible form controls across all device sizes",
      "Iterated rapidly with cross-functional feedback to ship production-grade features"
    ],
    metrics: [
      { label: "Workflows", value: "Enhanced" },
      { label: "Adoption", value: "Org-Wide" },
      { label: "Performance", value: "Optimized" },
      { label: "Role", value: "Full-Time" }
    ],
    testimonial: {
      text: "Delivered new features and performance improvements to the company's HRMS platform, directly enhancing day-to-day HR workflows used by the organization.",
      author: "Girl Power Talk",
      role: "React Developer (Full-Time)",
      company: "Mohali, Punjab, India"
    },
    demoUrl: "https://github.com/Rishi-2607",
    githubUrl: "https://github.com/Rishi-2607",
    featured: false,
    duration: "Aug 2025 – Present",
    team: "React Developer (Full-Time)"
  },
  {
    id: 6,
    title: "Front-End Interface Optimization",
    category: "UI Engineering",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Git"],
    description: "High-performance front-end interface engineering and optimization achieving a 10% increase in user engagement and 17% error reduction.",
    fullDescription: "Developed and optimized front-end interfaces during software development internship at CodSoft. Focused on mobile-first responsive architecture, web performance tuning, accessibility compliance, and full-stack feature delivery using HTML, CSS, JavaScript, and Node.js.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    alt: "Responsive web interface and accessibility audit showing cross-device rendering and performance metrics",
    additionalImages: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        alt: "Clean JavaScript code and modular CSS component architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        alt: "User engagement and performance growth analytics"
      }
    ],
    challenge: "Addressing slow client-side rendering, inconsistent mobile breakpoints, and high page error rates on legacy user interfaces.",
    solution: "Refactored legacy code into semantic HTML5, modern CSS3, and ES6+ modules. Established disciplined Git branching workflows and code review standards for clean collaborative development.",
    results: [
      "Achieved a 10% increase in user engagement through performance and mobile-first design",
      "Reduced page error rates by 17% by implementing robust error handling in full-stack features",
      "Standardized Git and GitHub team collaboration with disciplined branching best practices",
      "Ensured 100% responsive consistency across desktop, tablet, and mobile devices"
    ],
    metrics: [
      { label: "Engagement", value: "+10%" },
      { label: "Page Errors", value: "-17%" },
      { label: "Standards", value: "Git/Reviews" },
      { label: "Design", value: "Mobile-1st" }
    ],
    testimonial: {
      text: "Developed and optimized front-end interfaces, achieving a 10% increase in user engagement and reducing page error rates by 17% through enhanced performance, accessibility, and mobile-first design.",
      author: "CodSoft",
      role: "Software Development Intern",
      company: "Remote Internship"
    },
    demoUrl: "https://github.com/Rishi-2607",
    githubUrl: "https://github.com/Rishi-2607",
    featured: false,
    duration: "Jul 2023 – Aug 2023",
    team: "Software Development Intern"
  }
];

export default function PortfolioInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="h-12 bg-muted rounded-lg animate-pulse mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-muted rounded-xl animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categories = ['All', ...Array.from(new Set(mockProjects.map((p) => p.category)))];
  const allTechnologies = Array.from(new Set(mockProjects.flatMap((p) => p.technologies)));
  const technologies = ['All', ...allTechnologies];

  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTechnology = selectedTechnology === 'All' || project.technologies.includes(selectedTechnology);
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTechnology && matchesSearch;
  });

  const handleViewDetails = (id: number) => {
    const project = mockProjects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnology('All');
    setSearchQuery('');
  };

  const featuredCount = mockProjects.filter((p) => p.featured).length;

  return (
    <>
      <StatsSection
        totalProjects={mockProjects.length}
        featuredProjects={featuredCount}
        technologies={allTechnologies.length}
        successRate="100%"
      />

      <FilterBar
        categories={categories}
        technologies={technologies}
        selectedCategory={selectedCategory}
        selectedTechnology={selectedTechnology}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onTechnologyChange={setSelectedTechnology}
        onSearchChange={setSearchQuery}
        onClearFilters={handleClearFilters}
      />

      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
            <Icon name="FolderOpenIcon" size={32} className="text-text-secondary" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
          <p className="text-text-secondary mb-6">
            Try adjusting your filters or search query to find what you&apos;re looking for.
          </p>
          <button
            onClick={handleClearFilters}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            Clear All Filters
          </button>
        </motion.div>
      ) : (
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}