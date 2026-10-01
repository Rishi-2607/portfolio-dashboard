import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInfo from './components/ContactInfo';
import ContactFormClient from './components/ContactFormClient';
import QuickActions from './components/QuickActions';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Contact - Rishikant Yadav | Full-Stack & Next.js Developer',
  description:
    'Get in touch with Rishikant Yadav to discuss full-stack web applications, React component engineering, REST API integrations, or collaboration opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090e11] pt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#111a1e] border border-[#C1FF72]/30 rounded-full shadow-sm mb-4">
                <span className="text-xs font-mono font-medium text-[#C1FF72]">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1FF72] via-[#daffaa] to-[#20c997]">Together</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Ready to build scalable web applications with MERN and Next.js?
                Reach out directly via the form or email to start the conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <ContactFormClient />
              </div>
              <div className="space-y-8">
                <ContactInfo />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <QuickActions />
              <FAQSection />
            </div>

            <div className="bg-[#182428] rounded-2xl p-8 md:p-12 text-center border border-[#C1FF72]/30 shadow-[0_0_35px_rgba(193,255,114,0.15)]">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how clean code, responsive design, and production-tested full-stack engineering can elevate your web platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact-form"
                  className="px-8 py-4 bg-[#C1FF72] hover:bg-[#d4ff8f] text-[#090e11] font-bold rounded-xl shadow-lg shadow-[#C1FF72]/20 hover:-translate-y-0.5 transition-all duration-200 ease-out"
                >
                  Submit Project Inquiry
                </a>
                <a
                  href="mailto:rishikyadav2607@gmail.com"
                  className="px-8 py-4 bg-white/5 border border-white/15 hover:border-[#C1FF72]/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-[#111a1e] border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Rishikant Yadav. All rights
                  reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="/homepage"
                  className="text-sm text-gray-400 hover:text-[#C1FF72] transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-sm text-gray-400 hover:text-[#C1FF72] transition-colors duration-200"
                >
                  About
                </a>
                <a
                  href="/portfolio"
                  className="text-sm text-gray-400 hover:text-[#C1FF72] transition-colors duration-200"
                >
                  Portfolio
                </a>
                <a
                  href="/skills"
                  className="text-sm text-gray-400 hover:text-[#C1FF72] transition-colors duration-200"
                >
                  Skills
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
