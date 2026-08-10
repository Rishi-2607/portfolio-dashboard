import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className = '' }: CTASectionProps = {}) {
  return (
    <div className={`bg-gradient-to-br from-purple-800 via-purple-700 to-pink-700 rounded-2xl shadow-lg p-10 sm:p-16 text-center relative overflow-hidden ${className}`}>
      {/* Floating shapes for theme consistency */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <Icon name="RocketLaunchIcon" size={32} className="text-white" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss your requirements and create a custom solution that exceeds your expectations. 
          Get a detailed proposal within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-400/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            Schedule Consultation
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Icon name="EyeIcon" size={20} />
            View Portfolio
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircleIcon" size={18} variant="solid" />
            <span>No Upfront Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheckIcon" size={18} variant="solid" />
            <span>100% Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}
