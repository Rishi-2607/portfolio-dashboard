'use client';

import AppImage from '@/components/ui/AppImage';

interface Technology {
  name: string;
  logo: string;
  alt: string;
}

interface TechStackProps {
  technologies: Technology[];
  className?: string;
}

export default function TechStack({ technologies, className = '' }: TechStackProps) {
  return (
    <div className={`bg-[#111a1e] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 ${className}`}>
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Technology Stack
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-[#C1FF72]/60 group-hover:shadow-[0_0_15px_rgba(193,255,114,0.35)] overflow-hidden">
              <AppImage
                src={tech.logo}
                alt={tech.alt}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-xs text-gray-300 group-hover:text-[#C1FF72] transition-colors duration-200 text-center font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
