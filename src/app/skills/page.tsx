import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Technical Skills & Stack - Rishikant Yadav | MERN & Next.js',
  description: 'Explore the full technical skill stack of Rishikant Yadav, spanning JavaScript (ES6+), React.js, Next.js, Node.js, Express, MongoDB Atlas, Socket.io, Tailwind CSS, and cloud platforms.',
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