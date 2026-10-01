'use client';

import { useEffect, useState } from 'react';

interface ClientLogosProps {
  isHydrated: boolean;
}

const ClientLogos = ({ isHydrated }: ClientLogosProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const ecosystem = [
    { id: 1, name: "Girl Power Talk", role: "React Developer", type: "Company" },
    { id: 2, name: "Next.js", role: "App Router & SSR", type: "Framework" },
    { id: 3, name: "React.js", role: "Component Architecture", type: "Library" },
    { id: 4, name: "CodSoft", role: "Software Dev Intern", type: "Company" },
    { id: 5, name: "Node.js & Express", role: "RESTful APIs", type: "Backend" },
    { id: 6, name: "MongoDB Atlas", role: "Cloud Database", type: "Database" },
    { id: 7, name: "Socket.io", role: "WebSockets & Real-Time", type: "Protocol" },
    { id: 8, name: "Tailwind CSS", role: "Modern UI Engineering", type: "Styling" },
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (ecosystem.length * 220));
    }, 30);

    return () => clearInterval(interval);
  }, [isHydrated, ecosystem.length]);

  return (
    <section className="py-14 bg-[#090e11] border-y border-white/[0.08] relative overflow-hidden">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#090e11] via-[#090e11]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#090e11] via-[#090e11]/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <p className="text-xs font-mono font-medium text-[#C1FF72] uppercase tracking-widest mb-1.5">
            Experience & Core Ecosystem
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Organizations & Primary Production Technologies
          </h2>
        </div>

        {/* Ticker stream */}
        <div className="relative overflow-hidden py-2">
          <div className="flex gap-4 items-center">
            {[...ecosystem, ...ecosystem, ...ecosystem].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 min-w-[210px] px-4 py-3.5 rounded-xl bg-[#111a1e] border border-white/[0.08] hover:border-[#C1FF72]/40 hover:bg-[#182428] transition-all duration-200 flex items-center justify-between gap-3 group"
                style={{
                  transform: isHydrated ? `translateX(-${scrollPosition}px)` : 'translateX(0)',
                  transition: 'transform 0.03s linear',
                }}
              >
                <div>
                  <div className="text-sm font-semibold text-[#f4f8fa] group-hover:text-[#C1FF72] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#797f82]">
                    {item.role}
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C1FF72]/10 text-[#C1FF72] border border-[#C1FF72]/20">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Realistic Verified Highlights */}
        <div className="text-center mt-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 sm:gap-14 px-6 py-3 rounded-2xl bg-[#111a1e]/80 border border-white/[0.08]">
            <div className="text-center">
              <div className="text-lg font-bold font-mono text-white">Full-Stack</div>
              <div className="text-[11px] text-[#797f82]">MERN & Next.js Focus</div>
            </div>
            <div className="h-6 w-px bg-white/[0.08] hidden sm:block" />
            <div className="text-center">
              <div className="text-lg font-bold font-mono text-[#C1FF72]">Girl Power Talk</div>
              <div className="text-[11px] text-[#797f82]">Active Full-Time Role</div>
            </div>
            <div className="h-6 w-px bg-white/[0.08] hidden sm:block" />
            <div className="text-center">
              <div className="text-lg font-bold font-mono text-[#20c997]">BBDITM 2024</div>
              <div className="text-[11px] text-[#797f82]">B.Tech Computer Science</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
