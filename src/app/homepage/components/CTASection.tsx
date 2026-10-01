'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-[#090e11] border-t border-white/[0.08] overflow-hidden">
      {/* Background radial glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#C1FF72] via-[#20c997] to-transparent rounded-full filter blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-3xl p-8 sm:p-14 border border-white/[0.1] hover:border-[#C1FF72]/30 shadow-2xl text-center relative overflow-hidden transition-all duration-300"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111a1e] border border-[#C1FF72]/30 mb-6 shadow-sm">
            <Icon name="SparklesIcon" size={16} className="text-[#C1FF72]" />
            <span className="text-xs font-mono font-medium text-[#C1FF72]">Ready to Collaborate?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 max-w-3xl mx-auto">
            Let&apos;s Build Modern, High-Performance Web Applications
          </h2>
          
          <p className="text-base sm:text-lg text-[#94a3a8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a scalable MERN application, custom Next.js web platform, or polished React UI components, I&apos;m ready to contribute to your engineering goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#090e11] rounded-xl bg-[#C1FF72] hover:bg-[#b0f558] transition-all duration-300 shadow-[0_0_20px_rgba(193,255,114,0.35)] hover:shadow-[0_0_30px_rgba(193,255,114,0.55)]"
              >
                <span>Start Conversation</span>
                <Icon name="ArrowRightIcon" size={16} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#f4f8fa] hover:text-[#C1FF72] rounded-xl bg-[#111a1e] hover:bg-[#182428] border border-white/10 hover:border-[#C1FF72]/30 transition-all duration-200"
              >
                <span>Browse All Projects</span>
                <Icon name="EyeIcon" size={16} className="ml-2 text-[#797f82]" />
              </Link>
            </motion.div>
          </div>

          {/* Feature Highlights */}
          <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
            {[
              { title: 'Clean Architecture', icon: 'CodeBracketIcon', desc: 'Maintainable, modular React & Node.js components' },
              { title: 'REST API & Third-Party', icon: 'CloudIcon', desc: 'Proven integrations including Google Search Console APIs' },
              { title: 'User-Centric Design', icon: 'DevicePhoneMobileIcon', desc: 'Accessible, responsive, mobile-first interfaces' },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="text-left p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#C1FF72]/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C1FF72]/10 border border-[#C1FF72]/20 flex items-center justify-center mb-3">
                  <Icon name={feature.icon as any} size={16} className="text-[#C1FF72]" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-xs text-[#94a3a8] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
