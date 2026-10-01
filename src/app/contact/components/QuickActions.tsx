import Icon from '@/components/ui/AppIcon';

interface QuickAction {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant: 'primary' | 'secondary' | 'accent';
}

const quickActions: QuickAction[] = [
  {
    icon: 'CalendarDaysIcon',
    title: 'Schedule Consultation',
    description: 'Book a 30-minute call to discuss your project requirements and get expert advice.',
    buttonText: 'Book Meeting',
    buttonHref: '#',
    variant: 'primary',
  },
  {
    icon: 'DocumentTextIcon',
    title: 'Download Portfolio',
    description: 'Get a comprehensive PDF showcasing my projects, skills, and client testimonials.',
    buttonText: 'Download PDF',
    buttonHref: '#',
    variant: 'secondary',
  },
  {
    icon: 'ChatBubbleLeftEllipsisIcon',
    title: 'Quick Question?',
    description: 'Have a quick question? Send me a direct message for faster response times.',
    buttonText: 'Send Message',
    buttonHref: 'mailto:rishikyadav2607@gmail.com',
    variant: 'accent',
  },
];

const QuickActions = () => {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-[#111a1e] border-white/10 hover:border-[#C1FF72]/40 shadow-sm';
      case 'secondary':
        return 'bg-[#111a1e] border-white/10 hover:border-[#20c997]/40 shadow-sm';
      case 'accent':
        return 'bg-[#111a1e] border-white/10 hover:border-[#C1FF72]/40 shadow-sm';
      default:
        return 'bg-[#111a1e] border-white/10 hover:border-[#C1FF72]/40 shadow-sm';
    }
  };

  const getButtonStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-[#C1FF72] text-[#090e11] font-bold hover:bg-[#d4ff8f] shadow-md shadow-[#C1FF72]/20';
      case 'secondary':
        return 'bg-[#20c997] text-[#090e11] font-bold hover:bg-[#34d399] shadow-md shadow-[#20c997]/20';
      case 'accent':
        return 'bg-[#182428] text-white hover:text-[#090e11] hover:bg-[#C1FF72] border border-white/10 font-bold';
      default:
        return 'bg-[#C1FF72] text-[#090e11] font-bold hover:bg-[#d4ff8f] shadow-md shadow-[#C1FF72]/20';
    }
  };

  const getIconColor = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'text-[#C1FF72]';
      case 'secondary':
        return 'text-[#20c997]';
      case 'accent':
        return 'text-[#C1FF72]';
      default:
        return 'text-[#C1FF72]';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Quick Actions
        </h2>
        <p className="text-gray-300">
          Choose the best way to connect based on your needs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {quickActions.map((action) => (
          <div
            key={action.title}
            className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${getVariantStyles(
              action.variant
            )} bg-[#111a1e]`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon
                    name={action.icon as any}
                    size={24}
                    className={getIconColor(action.variant)}
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {action.description}
                </p>
                <a
                  href={action.buttonHref}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${getButtonStyles(
                    action.variant
                  )}`}
                >
                  <span>{action.buttonText}</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
