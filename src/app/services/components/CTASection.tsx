import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className = '' }: CTASectionProps = {}) {
  return (
    <div className={`bg-[#182428] rounded-2xl shadow-xl p-10 sm:p-16 text-center relative overflow-hidden border border-[#C1FF72]/30 shadow-[0_0_35px_rgba(193,255,114,0.15)] ${className}`}>
      {/* Floating ambient shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#C1FF72]/15 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#20c997]/15 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C1FF72]/15 border border-[#C1FF72]/30 rounded-full mb-6">
          <Icon name="RocketLaunchIcon" size={32} className="text-[#C1FF72]" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your requirements and create a scalable full-stack web solution tailored to your business goals. 
          Get a detailed roadmap within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#C1FF72] hover:bg-[#d4ff8f] text-[#090e11] font-bold rounded-xl shadow-lg shadow-[#C1FF72]/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            Schedule Consultation
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/15 hover:border-[#C1FF72]/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Icon name="EyeIcon" size={20} className="text-[#C1FF72]" />
            View Portfolio
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-[#C1FF72]" />
            <span>Fast Production Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheckIcon" size={18} variant="solid" className="text-[#C1FF72]" />
            <span>Clean Scalable Code</span>
          </div>
        </div>
      </div>
    </div>
  );
}
