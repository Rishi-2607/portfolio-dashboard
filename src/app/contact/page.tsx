import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInfo from './components/ContactInfo';
import ContactFormClient from './components/ContactFormClient';
import QuickActions from './components/QuickActions';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Contact - Rishikant Portfolio',
  description:
    'Get in touch to discuss your React development project. Multiple contact options including project inquiry forms, consultation booking, and direct communication for streamlined client acquisition.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 pt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ready to transform your digital presence with React expertise?
                Choose your preferred way to connect and let&apos;s start building
                something amazing.
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

            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join the growing list of satisfied clients who have transformed
                their digital presence with professional React development and
                UI-focused engineering.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact-form"
                  className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-purple-700 hover:-translate-y-0.5 transition-all duration-200 ease-out"
                >
                  Submit Project Inquiry
                </a>
                <a
                  href="mailto:rishi7king@gmail.com"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-800 border-t border-gray-700 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Rishikant. All rights
                  reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="/homepage"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  About
                </a>
                <a
                  href="/portfolio"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Portfolio
                </a>
                <a
                  href="/services"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  Services
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
