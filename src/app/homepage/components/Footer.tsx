'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  isHydrated: boolean;
}

const Footer = ({ isHydrated }: FooterProps) => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    if (isHydrated) {
      setCurrentYear(new Date().getFullYear());
    }
  }, [isHydrated]);

  const quickLinks = [
    { name: 'Home', href: '/homepage' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Full-Stack Development', href: '/portfolio' },
    { name: 'React UI Engineering', href: '/skills' },
    { name: 'Real-Time WebSockets', href: '/portfolio' },
    { name: 'REST API Integration', href: '/skills' },
    { name: 'SEO & Performance Optimization', href: '/portfolio' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'CodeBracketIcon', href: 'https://github.com/Rishi-2607' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: 'https://linkedin.com/in/rishikant-yadav' },
    { name: 'Email', icon: 'EnvelopeIcon', href: 'mailto:rishikyadav2607@gmail.com' }
  ];

  return (
    <footer className="bg-[#090e11] text-white border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C1FF72]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/homepage" className="inline-flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-xl bg-[#C1FF72] p-[1px] shadow-[0_0_15px_rgba(193,255,114,0.35)]">
                <div className="w-full h-full bg-[#090e11] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-[#C1FF72]">
                    RY
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-white tracking-tight group-hover:text-[#C1FF72] transition-colors">
                  Rishikant Yadav
                </span>
                <span className="text-[11px] font-mono text-[#797f82]">Full-Stack Developer</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#94a3a8] max-w-sm leading-relaxed">
              Full-stack developer specializing in scalable MERN and Next.js applications, third-party API integrations, and user-centric, responsive design.
            </p>

            <div className="flex gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg bg-[#111a1e] border border-white/[0.08] hover:border-[#C1FF72]/40 hover:bg-[#182428] text-[#94a3a8] hover:text-[#C1FF72] flex items-center justify-center transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#f4f8fa] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#94a3a8] hover:text-[#C1FF72] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#f4f8fa] mb-4">
              Specializations
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-xs text-[#94a3a8] hover:text-[#C1FF72] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#f4f8fa] mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5 text-[#94a3a8]">
                <Icon name="EnvelopeIcon" size={16} className="text-[#C1FF72] flex-shrink-0" />
                <a
                  href="mailto:rishikyadav2607@gmail.com"
                  className="hover:text-[#C1FF72] transition-colors font-mono"
                >
                  rishikyadav2607@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#94a3a8]">
                <Icon name="PhoneIcon" size={16} className="text-[#C1FF72] flex-shrink-0" />
                <a
                  href="tel:+916388067731"
                  className="hover:text-[#C1FF72] transition-colors font-mono"
                >
                  +91-6388067731
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#94a3a8]">
                <Icon name="MapPinIcon" size={16} className="text-[#C1FF72] flex-shrink-0" />
                <span>Prayagraj, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#797f82] font-mono">
          <p>
            &copy; {isHydrated && currentYear ? currentYear : 2025} Rishikant Yadav. Built with MERN & Next.js.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="hover:text-[#C1FF72] transition-colors">
              Projects
            </Link>
            <span className="text-[#182428]">•</span>
            <Link href="/skills" className="hover:text-[#C1FF72] transition-colors">
              Skills
            </Link>
            <span className="text-[#182428]">•</span>
            <Link href="/contact" className="hover:text-[#C1FF72] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
