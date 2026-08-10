'use client';

import { useState, useEffect } from 'react';
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
  title: "E-Commerce Platform Redesign",
  category: "E-Commerce",
  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Redux"],
  description: "Complete redesign and development of a modern e-commerce platform with enhanced user experience and performance optimization.",
  fullDescription: "Led the complete redesign and development of a high-traffic e-commerce platform serving over 50,000 monthly active users. The project involved migrating from a legacy PHP system to a modern React-based architecture, implementing advanced features like real-time inventory management, personalized product recommendations, and seamless checkout experience.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14f3713c3-1764410570343.png",
  alt: "Modern e-commerce website interface showing product grid with shopping cart and checkout flow on desktop screen",
  additionalImages: [
  {
    url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    alt: "Dashboard analytics showing sales graphs and user metrics on laptop screen"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_11cc99a9b-1764410571204.png",
    alt: "Mobile responsive e-commerce app showing product details and add to cart button"
  }],

  challenge: "The client's existing platform suffered from slow load times (8+ seconds), poor mobile experience, and a 68% cart abandonment rate. The legacy codebase made it difficult to implement new features and maintain consistency across the user journey.",
  solution: "Implemented a modern React-based architecture with Next.js for server-side rendering and optimal performance. Created a component-based design system ensuring consistency, integrated Stripe for secure payments, and implemented advanced caching strategies. Added real-time inventory updates and personalized product recommendations using machine learning algorithms.",
  results: [
  "Reduced page load time from 8.2 seconds to 1.4 seconds (83% improvement)",
  "Decreased cart abandonment rate from 68% to 32% (53% reduction)",
  "Increased mobile conversion rate by 145% through responsive design optimization",
  "Improved SEO rankings resulting in 220% increase in organic traffic",
  "Enhanced user engagement with 4.2x increase in average session duration"],

  metrics: [
  { label: "Load Time", value: "1.4s" },
  { label: "Conversion", value: "+145%" },
  { label: "Traffic", value: "+220%" },
  { label: "Revenue", value: "+180%" }],

  testimonial: {
    text: "Rishikant transformed our outdated platform into a modern, high-performing e-commerce solution. The results exceeded our expectations, and our customers love the new experience. Sales have increased by 180% since launch.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechStyle Fashion"
  },
  demoUrl: "https://example.com/demo",
  githubUrl: "https://github.com/example/project",
  featured: true,
  duration: "4 months",
  team: "Solo Developer"
},
{
  id: 2,
  title: "Healthcare Patient Portal",
  category: "Healthcare",
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Chart.js"],
  description: "Secure patient portal with real-time appointment scheduling, medical records access, and telemedicine integration.",
  fullDescription: "Developed a comprehensive healthcare patient portal that enables patients to manage their healthcare journey digitally. The platform includes secure medical record access, real-time appointment scheduling, prescription management, and integrated telemedicine capabilities with video consultations.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_173156139-1764410573133.png",
  alt: "Healthcare dashboard interface showing patient medical records and appointment calendar on tablet device",
  additionalImages: [
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba32894d-1764410578543.png",
    alt: "Doctor using telemedicine video call interface on laptop with patient consultation screen"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1038a1d36-1764410569013.png",
    alt: "Mobile app showing prescription refill interface with medication list and pharmacy selection"
  }],

  challenge: "Healthcare providers needed a HIPAA-compliant solution that would reduce administrative burden while improving patient engagement. The existing system had no mobile access, required phone calls for appointments, and lacked integration with electronic health records.",
  solution: "Built a secure, HIPAA-compliant patient portal with end-to-end encryption and multi-factor authentication. Implemented real-time appointment scheduling with automated reminders, integrated EHR systems for seamless medical record access, and developed a telemedicine module with HD video consultations. Created an intuitive mobile-first interface ensuring accessibility for all age groups.",
  results: [
  "Reduced appointment no-shows by 67% through automated SMS and email reminders",
  "Decreased administrative phone calls by 82% with self-service features",
  "Achieved 94% patient satisfaction score in post-implementation survey",
  "Enabled 15,000+ successful telemedicine consultations in first 6 months",
  "Improved prescription refill efficiency by 78% with digital workflow"],

  metrics: [
  { label: "No-Shows", value: "-67%" },
  { label: "Admin Calls", value: "-82%" },
  { label: "Satisfaction", value: "94%" },
  { label: "Consultations", value: "15K+" }],

  testimonial: {
    text: "This portal has revolutionized how we interact with our patients. The telemedicine integration has been particularly valuable, and our staff can now focus on patient care instead of administrative tasks.",
    author: "Dr. Michael Chen",
    role: "Medical Director",
    company: "HealthFirst Medical Group"
  },
  demoUrl: "https://example.com/demo",
  featured: true,
  duration: "6 months",
  team: "Lead Developer in team of 3"
},
{
  id: 3,
  title: "Real Estate Listing Platform",
  category: "Real Estate",
  technologies: ["React", "Next.js", "Mapbox", "Firebase", "Algolia", "Framer Motion"],
  description: "Interactive real estate platform with advanced search, virtual tours, and real-time property availability.",
  fullDescription: "Created a modern real estate listing platform that revolutionizes property search and discovery. Features include interactive map-based search, 360° virtual tours, advanced filtering with 20+ criteria, real-time availability updates, and AI-powered property recommendations based on user preferences and behavior.",
  image: "https://images.unsplash.com/photo-1620086385485-d0bd6daa815c",
  alt: "Luxury modern living room interior with floor-to-ceiling windows showing city skyline view",
  additionalImages: [
  {
    url: "https://images.unsplash.com/photo-1722604817803-4c88edef9bc0",
    alt: "Contemporary kitchen with white cabinets, marble countertops and stainless steel appliances"
  },
  {
    url: "https://images.unsplash.com/photo-1613013115889-d6350ec296e5",
    alt: "Spacious bedroom with king-size bed, wooden flooring and large windows with natural lighting"
  }],

  challenge: "Real estate agents struggled with outdated listing platforms that provided poor user experience and limited search capabilities. Buyers found it difficult to discover properties matching their specific needs, and the lack of virtual tour options meant unnecessary physical visits.",
  solution: "Developed an intuitive platform with Mapbox integration for interactive map-based property search. Implemented Algolia for lightning-fast search with 20+ filter criteria including price range, property type, amenities, and neighborhood features. Created immersive 360° virtual tour functionality and integrated AI-powered recommendations that learn from user behavior to suggest relevant properties.",
  results: [
  "Increased property inquiries by 340% through improved search and discovery",
  "Reduced unnecessary property visits by 58% with virtual tour feature",
  "Achieved 2.3 million page views in first 3 months after launch",
  "Improved agent productivity by 125% with automated lead qualification",
  "Generated 4.8/5 average user rating with 12,000+ reviews"],

  metrics: [
  { label: "Inquiries", value: "+340%" },
  { label: "Page Views", value: "2.3M" },
  { label: "User Rating", value: "4.8/5" },
  { label: "Efficiency", value: "+125%" }],

  testimonial: {
    text: "The platform has completely transformed our business. The virtual tours and AI recommendations have made property discovery so much easier for our clients, and we're closing deals faster than ever.",
    author: "Jennifer Rodriguez",
    role: "Senior Real Estate Broker",
    company: "Premier Properties Group"
  },
  demoUrl: "https://example.com/demo",
  githubUrl: "https://github.com/example/project",
  featured: true,
  duration: "5 months",
  team: "Solo Developer"
},
{
  id: 4,
  title: "SaaS Analytics Dashboard",
  category: "SaaS",
  technologies: ["React", "TypeScript", "D3.js", "Recharts", "WebSocket", "Redis"],
  description: "Real-time analytics dashboard for SaaS businesses with customizable widgets and advanced data visualization.",
  fullDescription: "Built a comprehensive analytics dashboard for SaaS companies to track key metrics, user behavior, and business performance in real-time. Features include customizable widget layouts, interactive data visualizations, automated report generation, and predictive analytics powered by machine learning algorithms.",
  image: "https://images.unsplash.com/photo-1724833256463-26b199dc1b69",
  alt: "Business analytics dashboard displaying colorful charts, graphs and KPI metrics on large monitor",
  additionalImages: [
  {
    url: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0",
    alt: "Data visualization showing revenue growth trends and user engagement metrics on laptop screen"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1bbc6948a-1764410568885.png",
    alt: "Real-time dashboard with multiple widgets showing sales funnel and conversion rates"
  }],

  challenge: "SaaS companies were using multiple disconnected tools to track different metrics, resulting in fragmented insights and delayed decision-making. Existing solutions lacked real-time capabilities and couldn't handle the volume of data generated by growing user bases.",
  solution: "Created a unified analytics platform with WebSocket integration for real-time data updates. Implemented a flexible widget system allowing users to customize their dashboard layout and metrics. Built advanced visualizations using D3.js and Recharts for complex data representation. Integrated Redis for high-performance caching and implemented predictive analytics to forecast trends and identify potential issues before they impact business.",
  results: [
  "Reduced data analysis time by 75% with unified dashboard approach",
  "Enabled real-time monitoring of 50+ key performance indicators",
  "Improved decision-making speed by 60% with instant insights",
  "Processed 10 million+ data points daily with sub-second latency",
  "Achieved 99.9% uptime with robust error handling and monitoring"],

  metrics: [
  { label: "Analysis Time", value: "-75%" },
  { label: "KPIs Tracked", value: "50+" },
  { label: "Data Points", value: "10M+" },
  { label: "Uptime", value: "99.9%" }],

  demoUrl: "https://example.com/demo",
  featured: false,
  duration: "4 months",
  team: "Lead Developer in team of 2"
},
{
  id: 5,
  title: "Educational Learning Platform",
  category: "Education",
  technologies: ["React", "Next.js", "MongoDB", "AWS", "WebRTC", "TensorFlow.js"],
  description: "Interactive online learning platform with live classes, progress tracking, and AI-powered personalized learning paths.",
  fullDescription: "Developed a comprehensive educational platform that combines live interactive classes with self-paced learning. Features include HD video streaming, real-time collaboration tools, AI-powered content recommendations, progress tracking with detailed analytics, and gamification elements to boost student engagement and retention.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1645a52-1764410570480.png",
  alt: "Student using laptop for online learning with video lecture and digital notes on screen",
  additionalImages: [
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_182d0974f-1764410572260.png",
    alt: "Interactive whiteboard showing math equations during live online class session"
  },
  {
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_10d8ddd4c-1764410568869.png",
    alt: "Progress dashboard displaying course completion percentage and achievement badges"
  }],

  challenge: "Educational institutions needed a reliable platform for remote learning that could replicate the engagement of in-person classes. Existing solutions had poor video quality, lacked interactive features, and couldn't adapt to individual student learning paces.",
  solution: "Built a robust platform using WebRTC for high-quality video streaming with minimal latency. Implemented interactive whiteboard functionality for real-time collaboration. Created an AI-powered recommendation engine using TensorFlow.js that analyzes student performance and suggests personalized learning paths. Added gamification elements including achievement badges, leaderboards, and progress milestones to maintain student motivation.",
  results: [
  "Supported 25,000+ concurrent users during peak hours without performance degradation",
  "Increased student engagement by 185% through interactive features and gamification",
  "Improved course completion rates from 42% to 78% with personalized learning paths",
  "Reduced instructor workload by 45% with automated grading and progress tracking",
  "Achieved 4.7/5 average satisfaction rating from 50,000+ students"],

  metrics: [
  { label: "Concurrent Users", value: "25K+" },
  { label: "Engagement", value: "+185%" },
  { label: "Completion", value: "78%" },
  { label: "Rating", value: "4.7/5" }],

  testimonial: {
    text: "This platform has made online education truly effective. Our students are more engaged than ever, and the AI-powered personalization ensures everyone learns at their optimal pace.",
    author: "Prof. David Thompson",
    role: "Dean of Online Education",
    company: "Global Learning Institute"
  },
  demoUrl: "https://example.com/demo",
  featured: false,
  duration: "7 months",
  team: "Lead Developer in team of 4"
},
{
  id: 6,
  title: "Restaurant Management System",
  category: "Food & Beverage",
  technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Stripe"],
  description: "Complete restaurant management solution with online ordering, table reservations, and kitchen display system.",
  fullDescription: "Created an all-in-one restaurant management system that streamlines operations from customer ordering to kitchen preparation. Includes online ordering with real-time menu updates, table reservation system with automated confirmations, integrated POS system, kitchen display for order management, and comprehensive analytics for business insights.",
  image: "https://images.unsplash.com/photo-1552342294-b6cac11f3cec",
  alt: "Modern restaurant interior with wooden tables, ambient lighting and open kitchen visible in background",
  additionalImages: [
  {
    url: "https://images.unsplash.com/photo-1666479258732-5ea17469b610",
    alt: "Chef preparing gourmet dish in professional kitchen with stainless steel equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1656387683249-7df95066ac34",
    alt: "Digital menu tablet showing food items with prices and order customization options"
  }],

  challenge: "Restaurant owners struggled with coordinating multiple systems for ordering, reservations, and kitchen management. This led to order errors, inefficient kitchen workflows, and poor customer experience during peak hours.",
  solution: "Developed an integrated system connecting front-of-house and back-of-house operations. Implemented real-time order synchronization using Socket.io ensuring kitchen staff receive orders instantly. Created an intuitive table management system with visual floor plans and automated reservation confirmations. Built a comprehensive analytics dashboard tracking sales, popular items, peak hours, and customer preferences to optimize operations.",
  results: [
  "Reduced order errors by 89% with digital order management",
  "Increased table turnover rate by 35% through efficient reservation system",
  "Improved kitchen efficiency by 52% with real-time order display",
  "Boosted online orders by 240% with user-friendly ordering interface",
  "Enhanced customer satisfaction with 4.6/5 average rating"],

  metrics: [
  { label: "Order Errors", value: "-89%" },
  { label: "Turnover", value: "+35%" },
  { label: "Online Orders", value: "+240%" },
  { label: "Rating", value: "4.6/5" }],

  demoUrl: "https://example.com/demo",
  githubUrl: "https://github.com/example/project",
  featured: false,
  duration: "3 months",
  team: "Solo Developer"
}];


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
      </div>);

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
        successRate="98%" />


      <FilterBar
        categories={categories}
        technologies={technologies}
        selectedCategory={selectedCategory}
        selectedTechnology={selectedTechnology}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onTechnologyChange={setSelectedTechnology}
        onSearchChange={setSearchQuery}
        onClearFilters={handleClearFilters} />


      {filteredProjects.length === 0 ?
      <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
            <Icon name="FolderOpenIcon" size={32} className="text-text-secondary" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">No Projects Found</h3>
          <p className="text-text-secondary mb-6">
            Try adjusting your filters or search query to find what you&apos;re looking for.
          </p>
          <button
          onClick={handleClearFilters}
          className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">

            Clear All Filters
          </button>
        </div> :

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) =>
        <ProjectCard
          key={project.id}
          project={project}
          onViewDetails={handleViewDetails} />

        )}
        </div>
      }

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal} />

    </>);

}