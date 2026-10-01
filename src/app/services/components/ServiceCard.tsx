'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  pricing: string;
  process: string[];
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  features,
  deliverables,
  timeline,
  pricing,
  process,
  className = '',
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] =
    useState<'features' | 'deliverables' | 'process'>('features');

  return (
    <div className={`bg-gray-900/70 border border-gray-800 rounded-2xl shadow-soft p-6 sm:p-8 transition-all duration-300 hover:shadow-xl ${className}`}>
      {/* Top Section */}
      <div className="flex items-start gap-5 mb-6">
        <div className="w-16 h-16 rounded-xl bg-[#C1FF72] text-[#090e11] flex items-center justify-center shadow-lg shadow-[#C1FF72]/20">
          <Icon name={icon as any} size={30} className="text-[#090e11]" />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-white/70 text-sm sm:text-base mt-1">{description}</p>
        </div>
      </div>

      {/* Timeline + Pricing */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#182428] border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="ClockIcon" size={18} className="text-[#C1FF72]" />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">
              Timeline
            </span>
          </div>
          <p className="text-white font-bold">{timeline}</p>
        </div>

        <div className="bg-[#182428] border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="CurrencyDollarIcon" size={18} className="text-[#20c997]" />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">
              Pricing
            </span>
          </div>
          <p className="text-white font-bold">{pricing}</p>
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl 
          bg-[#182428] hover:bg-[#C1FF72]/15 border border-[#C1FF72]/30 
          transition-all text-[#C1FF72] font-semibold"
      >
        <span>View Details</span>
        <Icon
          name="ChevronDownIcon"
          size={20}
          className={`transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-6 border-t border-white/10 mt-6">

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {['features', 'deliverables', 'process'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition 
                  ${
                    activeTab === tab
                      ? 'bg-[#C1FF72] text-[#090e11] shadow'
                      : 'bg-[#182428] text-white/70 hover:bg-[#182428]/80 hover:text-white'
                  }
                `}
              >
                {tab === 'features' && 'Key Features'}
                {tab === 'deliverables' && 'Deliverables'}
                {tab === 'process' && 'Process'}
              </button>
            ))}
          </div>

          {/* Features List */}
          {activeTab === 'features' && (
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    className="text-[#C1FF72] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/90 text-sm sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Deliverables */}
          {activeTab === 'deliverables' && (
            <ul className="space-y-3">
              {deliverables.map((deliverable, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="DocumentCheckIcon"
                    size={20}
                    className="text-[#20c997] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-white/90 text-sm sm:text-base">
                    {deliverable}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Process */}
          {activeTab === 'process' && (
            <div className="space-y-4">
              {process.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C1FF72]/15 border border-[#C1FF72]/40 flex items-center justify-center">
                    <span className="text-[#C1FF72] font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-white/90 text-sm sm:text-base pt-1">{step}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
