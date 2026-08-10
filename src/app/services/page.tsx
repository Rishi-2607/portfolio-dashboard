import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Services - Rishikant Portfolio',
  description: 'Premium React development services including custom web applications, UI/UX redesign, performance optimization, and ongoing maintenance. Transparent pricing and proven process.',
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