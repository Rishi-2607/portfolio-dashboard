import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Skills & Expertise - Rishikant Portfolio',
  description: 'Explore my comprehensive React development skills, technology stack, certifications, and continuous learning journey in modern web development with interactive demonstrations and code examples.',
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main>
        <SkillsInteractive />
      </main>
    </>
  );
}