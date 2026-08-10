'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on scope and complexity. A simple website redesign typically takes 2-4 weeks, while a full web application can take 2-6 months. During our initial consultation, I provide a detailed timeline based on your specific requirements.',
  },
  {
    question: 'Do you work with clients remotely?',
    answer:
      'Yes! I work with clients worldwide through video calls, project management tools, and regular communication. I have successfully delivered projects for clients across different time zones with seamless collaboration.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in React, Next.js, TypeScript, and modern JavaScript frameworks. I also have expertise in Tailwind CSS, responsive design, performance optimization, and creating accessible user interfaces that work flawlessly across all devices.',
  },
  {
    question: 'How do you handle project payments?',
    answer:
      'I typically work with a 50% upfront deposit and 50% upon project completion for smaller projects. For larger projects, I offer milestone-based payment plans. All payment terms are clearly outlined in the project agreement before work begins.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes! I offer various maintenance and support packages to ensure your application continues to run smoothly. This includes bug fixes, updates, performance monitoring, and feature enhancements as your business grows.',
  },
  {
    question: 'Can you work with my existing development team?',
    answer:
      'Absolutely! I frequently collaborate with design agencies, marketing teams, and in-house developers. I can integrate seamlessly into your workflow, whether you need additional development capacity or specialized React expertise.',
  },
];

const FAQSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <div className="space-y-4">
        <div className="h-8 bg-gray-700 rounded w-1/3 animate-pulse"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-gray-800 rounded-lg animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300">
          Quick answers to common questions about working together
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden transition-all duration-200 hover:border-purple-500/40"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-800/50"
              aria-expanded={openIndex === index}
            >
              <span className="text-base font-semibold text-white pr-4">
                {faq.question}
              </span>
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-purple-400 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4 pt-2">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20">
        <div className="flex items-start space-x-3">
          <Icon
            name="QuestionMarkCircleIcon"
            size={24}
            className="text-purple-400 flex-shrink-0 mt-1"
          />
          <div>
            <h4 className="text-base font-semibold text-white mb-2">
              Still Have Questions?
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Don&apos;t see your question here? Feel free to reach out directly
              and I&apos;ll be happy to provide more information about how we can
              work together.
            </p>
            <a
              href="mailto:rishikant.dev@example.com"
              className="inline-flex items-center space-x-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              <span>Ask Your Question</span>
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
