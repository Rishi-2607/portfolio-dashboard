'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  organization: string;
  tag: string;
  content: string;
  project: string;
  metric: string;
}

interface TestimonialsSectionProps {
  isHydrated: boolean;
}

const TestimonialsSection = ({ isHydrated }: TestimonialsSectionProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Girl Power Talk Team",
      role: "Full-Stack Project Delivery",
      organization: "Girl Power Talk",
      tag: "Automation & APIs",
      content:
        "Architected and shipped GSC Analyzer, a full-stack Google Search Console management tool. Automated user onboarding via service account creation and REST API integrations, reducing manual setup time significantly and shipping high-quality solutions on time.",
      project: "GSC Analyzer Tool",
      metric: "Automated Onboarding & Setup",
    },
    {
      id: 2,
      author: "Internal Tools & HRMS Engineering",
      role: "React UI & Workflows",
      organization: "Girl Power Talk",
      tag: "UI Systems & Performance",
      content:
        "Delivered new features and performance improvements to the company’s HRMS platform, directly enhancing day-to-day HR workflows used by the organization. Built reusable, accessible React UI component libraries ensuring consistency and responsiveness across all screens.",
      project: "Company HRMS Platform",
      metric: "Reusable Component Libraries",
    },
    {
      id: 3,
      author: "Frontend Engineering Team",
      role: "Software Development",
      organization: "CodSoft",
      tag: "Performance & Engagement",
      content:
        "Developed and optimized front-end interfaces, achieving a 10% increase in user engagement through enhanced performance, accessibility, and mobile-first design. Implemented full-stack features using HTML, CSS, JavaScript, and Node.js, reducing error rates by 17%.",
      project: "Web Applications & UI",
      metric: "+10% Engagement & -17% Errors",
    },
  ];

  const handlePrevious = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeTestimonial];

  return (
    <section className="relative py-24 bg-[#090e11] border-t border-white/[0.08] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C1FF72]/8 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111a1e] border border-[#C1FF72]/30 mb-4 shadow-sm">
            <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-[#C1FF72]" />
            <span className="text-xs font-mono font-medium text-[#C1FF72]">Impact & Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Delivering Measurable Engineering Value
          </h2>

          <p className="text-base sm:text-lg text-[#94a3a8] max-w-2xl mx-auto">
            Real outcomes from production software shipped, cross-functional collaboration, and verified organizational improvements.
          </p>
        </div>

        {/* Endorsement Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/[0.1] hover:border-[#C1FF72]/40 shadow-2xl relative transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C1FF72]/15 border border-[#C1FF72]/30 flex items-center justify-center text-[#C1FF72] font-mono font-bold text-sm">
                  {current.organization.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{current.author}</h3>
                  <p className="text-xs text-[#94a3a8]">
                    {current.role} • <span className="text-[#C1FF72] font-medium">{current.organization}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#C1FF72]/15 text-[#C1FF72] border border-[#C1FF72]/30 font-semibold">
                  {current.metric}
                </span>
              </div>
            </div>

            <blockquote className="text-base sm:text-lg text-[#f4f8fa] leading-relaxed mb-6 font-normal">
              &ldquo;{current.content}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between text-xs text-[#797f82] pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-1.5 font-mono text-[#C1FF72]">
                <Icon name="BriefcaseIcon" size={14} />
                <span>Scope: {current.project}</span>
              </div>
              <span className="font-mono text-[#94a3a8]">{current.tag}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-[#111a1e] border border-white/10 hover:border-[#C1FF72]/40 hover:bg-[#182428] text-[#94a3a8] hover:text-[#C1FF72] flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Previous highlight"
            >
              <Icon name="ChevronLeftIcon" size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'w-7 bg-[#C1FF72]' : 'w-2 bg-[#182428] hover:bg-[#797f82]'
                  }`}
                  aria-label={`View highlight ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#111a1e] border border-white/10 hover:border-[#C1FF72]/40 hover:bg-[#182428] text-[#94a3a8] hover:text-[#C1FF72] flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Next highlight"
            >
              <Icon name="ChevronRightIcon" size={20} />
            </button>
          </div>
        </div>

        {/* Real Stats Grid from Resume */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 text-center">
          <div className="glass-card rounded-xl p-5 border border-white/[0.08]">
            <div className="text-3xl font-extrabold font-mono text-white mb-1">+10%</div>
            <div className="text-xs text-[#797f82]">User Engagement Boost (CodSoft)</div>
          </div>
          <div className="glass-card rounded-xl p-5 border border-white/[0.08]">
            <div className="text-3xl font-extrabold font-mono text-[#C1FF72] mb-1">-17%</div>
            <div className="text-xs text-[#797f82]">Page Error Rates Reduced</div>
          </div>
          <div className="glass-card rounded-xl p-5 border border-white/[0.08]">
            <div className="text-3xl font-extrabold font-mono text-[#20c997] mb-1">100%</div>
            <div className="text-xs text-[#797f82]">On-Time Production Shipping</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
