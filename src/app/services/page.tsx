import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Development Services - Rishikant Yadav | Full-Stack & Next.js',
  description: 'Full-stack development services by Rishikant Yadav including Next.js web applications, accessible React UI component libraries, real-time Socket.io integrations, and frontend optimization.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServicesInteractive />
      </main>
    </>
  );
}