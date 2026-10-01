'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/homepage' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090e11]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/50'
          : 'bg-[#090e11]/70 backdrop-blur-md border-b border-white/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#C1FF72] p-[1px] shadow-[0_0_15px_rgba(193,255,114,0.35)] group-hover:shadow-[0_0_22px_rgba(193,255,114,0.6)] transition-all duration-300">
              <div className="w-full h-full bg-[#090e11] rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-[#C1FF72]">
                  RY
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-[#C1FF72] transition-colors duration-200">
                Rishikant Yadav
              </span>
              <span className="text-[11px] font-mono text-[#797f82]">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#111a1e]/80 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {navigationItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                    active
                      ? 'bg-[#C1FF72]/15 text-[#C1FF72] shadow-sm border border-[#C1FF72]/30 font-semibold'
                      : 'text-[#94a3a8] hover:text-[#f4f8fa] hover:bg-white/[0.05]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-[#090e11] rounded-full bg-[#C1FF72] hover:bg-[#b0f558] transition-all duration-300 shadow-[0_0_20px_rgba(193,255,114,0.35)] hover:shadow-[0_0_28px_rgba(193,255,114,0.55)] hover:-translate-y-0.5 active:scale-95"
            >
              <span>Get In Touch</span>
              <svg
                className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#111a1e] border border-white/[0.08] hover:bg-[#182428] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={20}
              className="text-[#f4f8fa]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-[#090e11]/95 backdrop-blur-2xl transition-all duration-300 border-t border-white/[0.08] ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2 max-w-md mx-auto">
          {navigationItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  active
                    ? 'bg-[#C1FF72]/15 text-[#C1FF72] border border-[#C1FF72]/30 font-semibold'
                    : 'text-[#94a3a8] hover:bg-white/[0.05] hover:text-[#f4f8fa]'
                }`}
                style={{
                  animationDelay: `${index * 40}ms`,
                  animation: isMobileMenuOpen ? 'slideDown 0.25s ease-out forwards' : 'none',
                }}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/[0.08]">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 bg-[#C1FF72] text-[#090e11] font-bold text-center rounded-xl shadow-[0_0_20px_rgba(193,255,114,0.35)] hover:bg-[#b0f558] transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
