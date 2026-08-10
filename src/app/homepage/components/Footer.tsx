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
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'React Development', href: '/services' },
    { name: 'UI/UX Implementation', href: '/services' },
    { name: 'Web Applications', href: '/services' },
    { name: 'Code Refactoring', href: '/services' },
    { name: 'Technical Consulting', href: '/services' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftRightIcon', href: '#' },
    { name: 'Email', icon: 'EnvelopeIcon', href: 'mailto:contact@rishikant.dev' }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
      {/* Decorative gradient blur shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 28V12H16.5C18.433 12 20 13.567 20 15.5C20 16.753 19.372 17.857 18.421 18.5C19.372 19.143 20 20.247 20 21.5C20 23.433 18.433 25 16.5 25H14V28H12ZM14 17H16.5C17.328 17 18 16.328 18 15.5C18 14.672 17.328 14 16.5 14H14V17ZM14 23H16.5C17.328 23 18 22.328 18 21.5C18 20.672 17.328 20 16.5 20H14V23ZM22 28V12H28V14H24V19H27V21H24V28H22Z"
                    className="fill-white"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold tracking-wide">Rishikant</div>
                <div className="text-sm text-gray-400">React Developer</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming digital experiences through expert React development and UI-focused engineering solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-purple-600 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-500 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-pink-500 pb-2">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-pink-500 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-purple-400 pb-2">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="EnvelopeIcon" size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <a href="mailto:contact@rishikant.dev" className="text-gray-300 hover:text-purple-400 transition-colors">
                    contact@rishikant.dev
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="PhoneIcon" size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-purple-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPinIcon" size={20} className="text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Location</div>
                  <p className="text-gray-300">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700/40 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {isHydrated && currentYear ? (
                <>© {currentYear} Rishikant. All rights reserved.</>
              ) : (
                <>© Rishikant. All rights reserved.</>
              )}
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
