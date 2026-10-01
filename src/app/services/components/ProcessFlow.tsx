import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessFlow({ steps, className = '' }: ProcessFlowProps) {
  return (
    <div className={`bg-gray-900/70 rounded-2xl shadow-soft p-6 sm:p-8 border border-gray-800 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Development Process</h3>
        <p className="text-white/70">A transparent, collaborative approach to building your project</p>
      </div>

      <div className="space-y-6 relative">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#C1FF72] rounded-xl flex items-center justify-center shadow-lg shadow-[#C1FF72]/20">
                  <Icon name={step.icon as any} size={28} className="text-[#090e11]" />
                </div>
              </div>

              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-[#C1FF72] bg-[#C1FF72]/15 border border-[#C1FF72]/30 px-3 py-1 rounded-full">
                    STEP {step.number}
                  </span>
                  <span className="text-xs text-white/70 font-medium">{step.duration}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#C1FF72]/50 to-transparent -translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-[#182428] rounded-xl border border-[#C1FF72]/30">
        <div className="flex items-start gap-3">
          <Icon name="CheckBadgeIcon" size={24} className="text-[#C1FF72] flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-semibold text-white mb-1">Quality Assurance</h5>
            <p className="text-gray-300 text-sm">
              Every step includes thorough testing, code reviews, and client feedback integration to ensure the highest quality deliverables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
