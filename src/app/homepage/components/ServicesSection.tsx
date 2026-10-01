import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Service {
  id: number;
  icon: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: "CodeBracketIcon",
      title: "Full-Stack Web Development",
      tag: "MERN + Next.js",
      description: "End-to-end production web applications with server-side rendering, robust RESTful APIs, and scalable MongoDB schemas.",
      features: ["Next.js & React Architecture", "Express & Node.js Backend", "MongoDB Atlas Integration", "Production Cloud Deployment"]
    },
    {
      id: 2,
      icon: "DevicePhoneMobileIcon",
      title: "React UI & Component Libraries",
      tag: "Frontend",
      description: "Reusable, accessible React UI component libraries built for design consistency, high responsiveness, and cross-device performance.",
      features: ["Component Systems & Design Tokens", "Tailwind CSS & Mobile-First", "Accessibility & Semantic HTML", "Smooth Micro-Interactions"]
    },
    {
      id: 3,
      icon: "BoltIcon",
      title: "Real-Time & WebSocket Apps",
      tag: "Live Data",
      description: "Bidirectional real-time communication systems featuring instant message delivery, live alerts, and active user presence tracking.",
      features: ["Socket.io Architecture", "Instant Message Synchronization", "Active User Status Tracking", "Optimistic State Updates"]
    },
    {
      id: 4,
      icon: "CloudIcon",
      title: "REST API Integration & Automation",
      tag: "APIs & Tools",
      description: "Custom REST APIs and automated third-party integrations (like Google Search Console automation and HRMS platforms).",
      features: ["Third-Party API Integrations", "Automated Service Account Flows", "Clean Modular REST Endpoints", "Postman Verified Endpoints"]
    },
    {
      id: 5,
      icon: "ShieldCheckIcon",
      title: "Authentication & Security",
      tag: "Security",
      description: "Robust security practices including JWT-based token authorization, bcrypt credential hashing, and role-based access control.",
      features: ["JWT Token Flow Management", "Bcrypt Password Encryption", "Role-Based Route Protection", "Environment Secret Isolation"]
    },
    {
      id: 6,
      icon: "ArrowPathIcon",
      title: "Performance & SEO Optimization",
      tag: "Optimization",
      description: "SSR-driven SEO architecture, optimized image delivery, code-splitting, and rigorous testing for high user engagement and low error rates.",
      features: ["SSR & Metadata Generation", "Core Web Vitals Optimization", "Frontend Performance Audits", "Error Reduction & Clean Code"]
    }
  ];

  return (
    <section className="relative py-24 bg-[#090e11] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C1FF72]/8 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#20c997]/8 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111a1e] border border-[#C1FF72]/30 mb-4 shadow-sm">
            <Icon name="WrenchScrewdriverIcon" size={16} className="text-[#C1FF72]" />
            <span className="text-xs font-mono font-medium text-[#C1FF72]">Engineering Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Production-Grade Full-Stack Capabilities
          </h2>

          <p className="text-base sm:text-lg text-[#94a3a8] max-w-2xl mx-auto">
            From modern React interfaces to reliable REST APIs and real-time WebSockets, I deliver scalable, production-ready web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#C1FF72]/10 border border-[#C1FF72]/20 flex items-center justify-center group-hover:bg-[#C1FF72]/20 group-hover:scale-105 transition-all duration-300">
                    <Icon
                      name={service.icon as any}
                      size={22}
                      className="text-[#C1FF72] transition-colors duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-[#94a3a8] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#C1FF72] transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-xs text-[#94a3a8] mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs text-[#f4f8fa]">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-[#C1FF72] mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center text-xs font-semibold text-[#C1FF72] hover:text-[#daffaa] transition-all duration-200 group-hover:translate-x-1"
              >
                <span>View service details</span>
                <Icon name="ArrowRightIcon" size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 text-xs font-semibold text-white rounded-xl bg-[#111a1e] hover:bg-[#182428] border border-white/10 hover:border-[#C1FF72]/40 shadow-sm transition-all duration-200"
          >
            <span>Explore Complete Services & Workflow</span>
            <Icon name="ArrowRightIcon" size={16} className="ml-2 text-[#C1FF72]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
