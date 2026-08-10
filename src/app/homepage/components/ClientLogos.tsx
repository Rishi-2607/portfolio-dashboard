'use client';

import { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface ClientLogosProps {
  isHydrated: boolean;
}

const ClientLogos = ({ isHydrated }: ClientLogosProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c159f196-1764410558084.png",
      alt: "TechCorp Solutions logo with blue geometric design on white background"
    },
    {
      id: 2,
      name: "Digital Innovations",
      logo: "https://images.unsplash.com/photo-1659395813191-50f40d98598a",
      alt: "Digital Innovations logo featuring modern typography and orange accent"
    },
    {
      id: 3,
      name: "CloudScale Systems",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1edd897e6-1764410559742.png",
      alt: "CloudScale Systems logo with cloud icon and gradient blue colors"
    },
    {
      id: 4,
      name: "StartupHub",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10d6c08cf-1764410559670.png",
      alt: "StartupHub logo with rocket icon and bold red lettering"
    },
    {
      id: 5,
      name: "Enterprise Solutions",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13bf4188a-1764410557921.png",
      alt: "Enterprise Solutions logo with shield emblem and corporate blue"
    },
    {
      id: 6,
      name: "FinTech Pro",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c420a326-1764410559371.png",
      alt: "FinTech Pro logo with currency symbol and green gradient"
    }
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (clients.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, [isHydrated, clients.length]);

  return (
    <section className="py-16 bg-gray-900 border-y border-gray-800 relative overflow-hidden">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-2xl font-bold text-white">
            Delivering Excellence for Top Brands
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 items-center">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-44 h-24 bg-gray-800 rounded-xl p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 shadow-lg"
                style={{
                  transform: isHydrated ? `translateX(-${scrollPosition}px)` : 'translateX(0)',
                  transition: 'transform 0.03s linear'
                }}
              >
                {isHydrated && (
                  <AppImage
                    src={client.logo}
                    alt={client.alt}
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">25+</div>
              <div className="text-sm text-white/70">Happy Clients</div>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">15+</div>
              <div className="text-sm text-white/70">Industries Served</div>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">100%</div>
              <div className="text-sm text-white/70">Project Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
