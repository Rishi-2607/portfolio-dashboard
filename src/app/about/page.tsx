import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutContent from './components/AboutContent';

export const metadata: Metadata = {
  title: 'About - Rishikant Portfolio',
  description: 'Discover Rishikant\'s journey from corporate React developer to freelance expert, crafting exceptional user experiences through technical mastery and design sensibility.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutContent />
    </>
  );
}