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
    buttonHref: 'mailto:rishikant.dev@example.com',
    variant: 'accent',
  },
];

const QuickActions = () => {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-gray-800/30 border-purple-500/30 hover:border-purple-500/50';
      case 'secondary':
        return 'bg-gray-800/30 border-pink-500/30 hover:border-pink-500/50';
      case 'accent':
        return 'bg-gray-800/30 border-green-500/30 hover:border-green-500/50';
      default:
        return 'bg-gray-800 border-gray-700 hover:border-purple-500/40';
    }
  };

  const getButtonStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-purple-600 text-white hover:bg-purple-700';
      case 'secondary':
        return 'bg-pink-600 text-white hover:bg-pink-700';
      case 'accent':
        return 'bg-green-500 text-white hover:bg-green-600';
      default:
        return 'bg-purple-600 text-white hover:bg-purple-700';
    }
  };

  const getIconColor = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'text-purple-400';
      case 'secondary':
        return 'text-pink-400';
      case 'accent':
        return 'text-green-400';
      default:
        return 'text-purple-400';
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
            className={`p-6 rounded-xl border transition-all duration-200 ${getVariantStyles(
              action.variant
            )} bg-gray-900`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
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
