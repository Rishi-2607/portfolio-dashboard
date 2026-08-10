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
    { name: 'Services', href: '/services' },
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
          ? 'bg-gradient-to-r from-gray-900 via-gray-950 to-black/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-gray-900 via-gray-950 to-black/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center space-x-2 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <rect width="40" height="40" rx="8" className="fill-purple-500" />
                <path
                  d="M12 28V12H16.5C18.433 12 20 13.567 20 15.5C20 16.753 19.372 17.857 18.421 18.5C19.372 19.143 20 20.247 20 21.5C20 23.433 18.433 25 16.5 25H14V28H12ZM14 17H16.5C17.328 17 18 16.328 18 15.5C18 14.672 17.328 14 16.5 14H14V17ZM14 23H16.5C17.328 23 18 22.328 18 21.5C18 20.672 17.328 20 16.5 20H14V23ZM22 28V12H28V14H24V19H27V21H24V28H22Z"
                  className="fill-white"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white group-hover:text-purple-500 transition-colors duration-300">
                Rishikant
              </span>
              <span className="block text-xs text-white/70 font-medium">
                React Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  isActive(item.href)
                    ? 'text-purple-500'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-purple-500 transition-all duration-300 ${
                    isActive(item.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
  href="/contact"
  className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 text-white shadow-[0_0_15px_rgba(128,90,250,0.5)] 
             hover:shadow-[0_0_25px_rgba(128,90,250,0.7)] hover:-translate-y-1 transition-all duration-300 ease-out"
>
  Start Project
</Link>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
              className="text-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black/95 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2">
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-purple-500/20 text-purple-500'
                  : 'text-white/70 hover:bg-gray-800 hover:text-white'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen
                  ? 'slideDown 0.3s ease-out forwards'
                  : 'none',
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-700">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-purple-500 text-white font-semibold text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
