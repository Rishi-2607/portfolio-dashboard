import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: "CodeBracketIcon",
      title: "React Development",
      description: "Custom React applications built with modern best practices and scalable architecture",
      features: ["Component Architecture", "State Management", "Performance Optimization", "Testing & QA"]
    },
    {
      id: 2,
      icon: "DevicePhoneMobileIcon",
      title: "UI/UX Implementation",
      description: "Pixel-perfect interfaces that deliver exceptional user experiences across all devices",
      features: ["Responsive Design", "Accessibility", "Animation & Interactions", "Design Systems"]
    },
    {
      id: 3,
      icon: "RocketLaunchIcon",
      title: "Web Application Development",
      description: "Full-stack web solutions using Next.js and modern JavaScript frameworks",
      features: ["Next.js Apps", "API Integration", "Database Design", "Deployment & Hosting"]
    },
    {
      id: 4,
      icon: "ArrowPathIcon",
      title: "Code Refactoring",
      description: "Transform legacy codebases into maintainable, performant modern applications",
      features: ["Code Modernization", "Performance Tuning", "Technical Debt Reduction", "Documentation"]
    },
    {
      id: 5,
      icon: "ShieldCheckIcon",
      title: "Maintenance & Support",
      description: "Ongoing support and updates to keep your applications running smoothly",
      features: ["Bug Fixes", "Security Updates", "Feature Enhancements", "Technical Consulting"]
    },
    {
      id: 6,
      icon: "AcademicCapIcon",
      title: "Technical Consulting",
      description: "Expert guidance on architecture decisions, technology stack, and best practices",
      features: ["Architecture Review", "Technology Selection", "Code Review", "Team Training"]
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge translate-x-1/4 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-700/20 rounded-full mb-4">
            <Icon name="WrenchScrewdriverIcon" size={20} className="text-purple-400 mr-2" />
            <span className="text-sm font-semibold text-purple-300">Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Development Solutions
          </h2>

          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end development services that transform your vision into reality with measurable business impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                <Icon
                  name={service.icon as any}
                  size={28}
                  className="text-purple-500 group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-500 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center text-purple-500 font-semibold hover:gap-2 transition-all duration-200"
              >
                Learn More
                <Icon name="ArrowRightIcon" size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            View All Services
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
