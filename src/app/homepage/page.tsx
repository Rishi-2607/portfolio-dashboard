import type { Metadata } from 'next';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Rishikant - React Developer | UI-Focused Web Engineering Solutions',
  description: 'Premium developer portfolio showcasing React expertise and UI-focused web engineering. Transform your digital presence with measurable business results through superior user interfaces and modern web applications.',
};

export default function Homepage() {
  return <HomepageInteractive />;
}