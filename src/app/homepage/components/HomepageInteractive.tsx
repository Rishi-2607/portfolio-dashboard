'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import ClientLogos from './ClientLogos';
import SkillsShowcase from './SkillsShowcase';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from './Footer';

const HomepageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection isHydrated={isHydrated} />
        <ClientLogos isHydrated={isHydrated} />
        <SkillsShowcase />
        <TestimonialsSection isHydrated={isHydrated} />
        <CTASection />
      </main>
      <Footer isHydrated={isHydrated} />
    </>
  );
};

export default HomepageInteractive;