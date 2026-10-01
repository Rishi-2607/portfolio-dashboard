'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingOption {
  id: string;
  name: string;
  basePrice: number;
}

interface AddonOption {
  id: string;
  name: string;
  price: number;
}

interface PricingCalculatorProps {
  className?: string;
}

export default function PricingCalculator({ className = '' }: PricingCalculatorProps = {}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('web-app');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [projectComplexity, setProjectComplexity] = useState<'basic' | 'standard' | 'advanced'>('standard');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services: PricingOption[] = [
    { id: 'web-app', name: 'Custom Web Application', basePrice: 5000 },
    { id: 'ui-redesign', name: 'UI/UX Redesign', basePrice: 3000 },
    { id: 'react-migration', name: 'React Migration', basePrice: 4000 },
    { id: 'maintenance', name: 'Maintenance & Support', basePrice: 1500 },
  ];

  const addons: AddonOption[] = [
    { id: 'responsive', name: 'Advanced Responsive Design', price: 800 },
    { id: 'animations', name: 'Custom Animations & Interactions', price: 1200 },
    { id: 'api', name: 'API Integration', price: 1500 },
    { id: 'testing', name: 'Comprehensive Testing Suite', price: 1000 },
    { id: 'seo', name: 'SEO Optimization', price: 600 },
    { id: 'analytics', name: 'Analytics Integration', price: 400 },
  ];

  const complexityMultipliers = {
    basic: 1,
    standard: 1.5,
    advanced: 2.2,
  };

  const calculateTotal = () => {
    if (!isHydrated) return 0;

    const baseService = services.find((s) => s.id === selectedService);
    if (!baseService) return 0;

    const basePrice = baseService.basePrice * complexityMultipliers[projectComplexity];
    const addonsTotal = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);

    return basePrice + addonsTotal;
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  if (!isHydrated) {
    return (
      <div className="bg-gray-900/70 rounded-2xl shadow-soft p-6 sm:p-8 border border-gray-800 animate-pulse">
        <div className="space-y-4">
          <div className="h-8 bg-gray-800 rounded w-3/4"></div>
          <div className="h-32 bg-gray-800 rounded"></div>
          <div className="h-24 bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/70 rounded-2xl shadow-soft p-6 sm:p-8 border border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#C1FF72]/15 border border-[#C1FF72]/30 rounded-lg flex items-center justify-center">
          <Icon name="CalculatorIcon" size={24} className="text-[#C1FF72]" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Pricing Calculator</h3>
          <p className="text-gray-400 text-sm">Estimate your project cost</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Services */}
        <div>
          <label className="block text-sm font-semibold text-white/90 mb-3">Select Service</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedService === service.id
                    ? 'border-[#C1FF72] bg-[#C1FF72]/10 shadow-lg shadow-[#C1FF72]/15'
                    : 'border-white/10 bg-[#182428] hover:border-[#C1FF72]/40'
                }`}
              >
                <div className="font-bold text-white text-sm sm:text-base">{service.name}</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">
                  Starting at ${service.basePrice.toLocaleString()}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Complexity */}
        <div>
          <label className="block text-sm font-semibold text-white/90 mb-3">Project Complexity</label>
          <div className="grid grid-cols-3 gap-3">
            {(['basic', 'standard', 'advanced'] as const).map((complexity) => (
              <button
                key={complexity}
                onClick={() => setProjectComplexity(complexity)}
                className={`p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                  projectComplexity === complexity
                    ? 'border-[#20c997] bg-[#20c997]/15 shadow-md shadow-[#20c997]/20'
                    : 'border-white/10 bg-[#182428] hover:border-[#20c997]/40'
                }`}
              >
                <div className="font-bold text-white text-sm capitalize">{complexity}</div>
                <div className="text-gray-400 text-xs mt-1">{complexityMultipliers[complexity]}x</div>
              </button>
            ))}
          </div>
        </div>

        {/* Addons */}
        <div>
          <label className="block text-sm font-semibold text-white/90 mb-3">Add-ons (Optional)</label>
          <div className="space-y-2">
            {addons.map((addon) => (
              <button
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedAddons.includes(addon.id)
                    ? 'border-[#C1FF72] bg-[#C1FF72]/10 shadow-md shadow-[#C1FF72]/15'
                    : 'border-white/10 bg-[#182428] hover:border-[#C1FF72]/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                        selectedAddons.includes(addon.id)
                          ? 'border-[#C1FF72] bg-[#C1FF72]'
                          : 'border-white/20'
                      }`}
                    >
                      {selectedAddons.includes(addon.id) && (
                        <Icon name="CheckIcon" size={14} className="text-[#090e11]" />
                      )}
                    </div>
                    <span className="font-semibold text-white text-sm sm:text-base">{addon.name}</span>
                  </div>
                  <span className="text-[#C1FF72] font-bold text-sm sm:text-base">
                    +${addon.price.toLocaleString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="bg-[#182428] rounded-xl p-6 border-2 border-[#C1FF72] shadow-[0_0_25px_rgba(193,255,114,0.15)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300 font-semibold">Estimated Total</span>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-[#C1FF72]">
                ${calculateTotal().toLocaleString()}
              </div>
              <div className="text-xs text-gray-400 mt-1">USD (approximate)</div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            * Final pricing may vary based on specific requirements and project scope. Contact for detailed quote.
          </p>
        </div>
      </div>
    </div>
  );
}
