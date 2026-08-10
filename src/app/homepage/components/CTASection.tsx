'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Decorative blur shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge translate-x-1/4 translate-y-1/3"></div>

      {/* Background grid / texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to Transform Your Digital Presence?
        </h2>
        
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-12">
          Let&apos;s discuss how I can help you build exceptional web applications that drive real business results. From concept to deployment, I&apos;m here to bring your vision to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
          
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            View Portfolio
            <Icon name="EyeIcon" size={20} className="ml-2" />
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { title: 'Quick Response', icon: 'ClockIcon', desc: 'Get a reply within 24 hours' },
            { title: 'Quality Guaranteed', icon: 'ShieldCheckIcon', desc: '100% satisfaction commitment' },
            { title: 'Free Consultation', icon: 'ChatBubbleLeftRightIcon', desc: 'Discuss your project at no cost' },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                <Icon name={feature.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
