import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Portfolio - Rishikant',
  description:
    'Explore my portfolio of React development projects featuring e-commerce platforms, healthcare solutions, SaaS dashboards, and more. View detailed case studies with technical implementations and measurable business results.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              Project Portfolio
            </h1>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore my collection of full-stack and front-end React projects, 
              showcasing UI craftsmanship, technical depth, and measurable business impact.
            </p>

            {/* Accent divider */}
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Interactive Portfolio */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/40 backdrop-blur-md">
            <PortfolioInteractive />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 py-10 px-4 sm:px-6 lg:px-8 backdrop-blur">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Rishikant • All Rights Reserved
          </p>

          {/* Footer glow line */}
          <div className="mt-4 h-[2px] w-32 mx-auto bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-70"></div>
        </div>
      </footer>
    </div>
  );
}
