import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
  name: string;
  basic: boolean | string;
  standard: boolean | string;
  premium: boolean | string;
}

interface ServiceComparisonProps {
  className?: string;
}

export default function ServiceComparison({ className = '' }: ServiceComparisonProps = {}) {
  const features: ComparisonFeature[] = [
    { name: 'Custom React Development', basic: true, standard: true, premium: true },
    { name: 'Responsive Design', basic: 'Mobile & Desktop', standard: 'All Devices', premium: 'All Devices + PWA' },
    { name: 'Component Library', basic: 'Basic', standard: 'Advanced', premium: 'Enterprise' },
    { name: 'Performance Optimization', basic: true, standard: true, premium: true },
    { name: 'SEO Implementation', basic: false, standard: 'Basic', premium: 'Advanced' },
    { name: 'Testing Coverage', basic: 'Manual', standard: 'Automated', premium: 'Comprehensive' },
    { name: 'Documentation', basic: 'Basic', standard: 'Detailed', premium: 'Complete + Training' },
    { name: 'Post-Launch Support', basic: '1 month', standard: '3 months', premium: '6 months' },
    { name: 'Revisions Included', basic: '2', standard: '5', premium: 'Unlimited' },
    { name: 'Source Code Access', basic: true, standard: true, premium: true },
    { name: 'Deployment Assistance', basic: false, standard: true, premium: true },
    { name: 'Priority Support', basic: false, standard: false, premium: true },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="CheckIcon" size={20} className="text-[#C1FF72]" />
      ) : (
        <Icon name="XMarkIcon" size={20} className="text-white/30" />
      );
    }
    return <span className="text-white text-sm font-medium">{value}</span>;
  };

  return (
    <div className="bg-[#111a1e] rounded-2xl shadow-soft overflow-hidden border border-white/10">
      <div className="bg-[#182428] border-b border-white/10 p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Service <span className="text-[#C1FF72]">Packages</span></h3>
        <p className="text-gray-300">Compare features and choose the right package for your needs</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="text-left p-4 font-semibold text-white text-sm sm:text-base min-w-[200px]">
                Features
              </th>
              <th className="text-center p-4 font-semibold text-white text-sm sm:text-base min-w-[120px]">
                <div className="mb-1">Basic</div>
                <div className="text-xs font-normal text-white/70">$3K - $5K</div>
              </th>
              <th className="text-center p-4 font-semibold text-white text-sm sm:text-base min-w-[120px]">
                <div className="mb-1">Standard</div>
                <div className="text-xs font-normal text-white/70">$5K - $10K</div>
              </th>
              <th className="text-center p-4 font-semibold text-white text-sm sm:text-base min-w-[120px]">
                <div className="mb-1 flex items-center justify-center gap-1">
                  Premium
                  <Icon name="StarIcon" size={16} className="text-warning" variant="solid" />
                </div>
                <div className="text-xs font-normal text-white/70">$10K+</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`border-t border-gray-800 ${
                  index % 2 === 0 ? 'bg-gray-900/60' : 'bg-gray-900/50'
                }`}
              >
                <td className="p-4 text-white text-sm sm:text-base">{feature.name}</td>
                <td className="p-4 text-center">{renderValue(feature.basic)}</td>
                <td className="p-4 text-center">{renderValue(feature.standard)}</td>
                <td className="p-4 text-center">{renderValue(feature.premium)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-gray-800/50 border-t border-gray-800">
        <p className="text-white/70 text-sm text-center">
          All packages include clean, maintainable code and industry best practices. Custom packages available upon request.
        </p>
      </div>
    </div>
  );
}
