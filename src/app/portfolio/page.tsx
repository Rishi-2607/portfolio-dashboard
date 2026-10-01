import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Portfolio - Rishikant Yadav | Full-Stack & Next.js Developer',
  description:
    'Explore production projects built by Rishikant Yadav, including full-stack Next.js platforms, real-time Socket.io applications, healthcare systems, and enterprise tools.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#090e11] text-white">
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
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#C1FF72] to-[#20c997] mx-auto rounded-full shadow-[0_0_12px_rgba(193,255,114,0.4)]"></div>
          </div>

          {/* Interactive Portfolio */}
          <div className="bg-[#111a1e]/80 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/40 backdrop-blur-md">
            <PortfolioInteractive />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111a1e]/90 border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8 backdrop-blur">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Rishikant • All Rights Reserved
          </p>

          {/* Footer glow line */}
          <div className="mt-4 h-[2px] w-32 mx-auto bg-gradient-to-r from-[#C1FF72] to-[#20c997] rounded-full opacity-70 shadow-[0_0_8px_rgba(193,255,114,0.4)]"></div>
        </div>
      </footer>
    </div>
  );
}
