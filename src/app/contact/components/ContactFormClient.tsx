'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const projectTypes = [
  'New Web Application',
  'Website Redesign',
  'UI/UX Enhancement',
  'React Migration',
  'Performance Optimization',
  'Ongoing Maintenance',
  'Consultation',
  'Other',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not Sure Yet',
];

const timelines = [
  'ASAP (1-2 weeks)',
  '1 Month',
  '2-3 Months',
  '3-6 Months',
  '6+ Months',
  'Flexible',
];

const ContactFormClient = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl p-8 shadow-soft">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="space-y-4">
            <div className="h-12 bg-muted rounded"></div>
            <div className="h-12 bg-muted rounded"></div>
            <div className="h-32 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

 return (
  <div className="bg-[#111a1e] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10">

    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-2">
        Start Your Project
      </h2>
      <p className="text-gray-400">
        Fill out the form below and I&apos;ll get back to you within 24 hours
      </p>
    </div>

    {submitStatus === 'success' && (
      <div className="mb-6 p-4 rounded-lg bg-green-600/10 border border-green-600/20 flex items-start space-x-3">
        <Icon
          name="CheckCircleIcon"
          size={24}
          className="text-green-500 flex-shrink-0 mt-0.5"
        />
        <div>
          <h3 className="text-base font-semibold text-green-500 mb-1">
            Message Sent Successfully!
          </h3>
          <p className="text-sm text-gray-400">
            Thank you for reaching out. I&apos;ll review your project details and
            respond within 24 hours.
          </p>
        </div>
      </div>
    )}

    {submitStatus === 'error' && (
      <div className="mb-6 p-4 rounded-lg bg-red-600/10 border border-red-600/20 flex items-start space-x-3">
        <Icon
          name="ExclamationCircleIcon"
          size={24}
          className="text-red-500 flex-shrink-0 mt-0.5"
        />
        <div>
          <h3 className="text-base font-semibold text-red-500 mb-1">
            Submission Failed
          </h3>
          <p className="text-sm text-gray-400">
            There was an error sending your message. Please try again or
            contact me directly via email.
          </p>
        </div>
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-white/10 focus:ring-[#C1FF72]'
            } bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-white/10 focus:ring-[#C1FF72]'
            } bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-white/10 focus:ring-[#C1FF72]'
            } bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-white mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:ring-[#C1FF72] bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-white mb-2"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:ring-[#C1FF72] bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200"
          >
            <option value="" className="bg-[#111a1e]">Select type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-[#111a1e]">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-white mb-2"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:ring-[#C1FF72] bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200"
          >
            <option value="" className="bg-[#111a1e]">Select budget</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-[#111a1e]">
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="block text-sm font-medium text-white mb-2"
          >
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:ring-[#C1FF72] bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200"
          >
            <option value="" className="bg-[#111a1e]">Select timeline</option>
            {timelines.map((time) => (
              <option key={time} value={time} className="bg-[#111a1e]">
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-2"
        >
          Project Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-white/10 focus:ring-[#C1FF72]'
          } bg-[#182428] text-white focus:outline-none focus:ring-2 transition-all duration-200 resize-none`}
          placeholder="Tell me about your project, goals, and any specific requirements..."
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
        <p className="mt-2 text-xs text-gray-400">
          Minimum 20 characters. Be as detailed as possible to help me
          understand your needs.
        </p>
      </div>

      <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#182428] border border-white/10">
        <Icon
          name="InformationCircleIcon"
          size={20}
          className="text-[#C1FF72] flex-shrink-0 mt-0.5"
        />
        <p className="text-sm text-gray-300">
          By submitting this form, you agree to be contacted regarding your
          project inquiry. Your information will be kept confidential and
          never shared with third parties.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#C1FF72] hover:bg-[#d4ff8f] text-[#090e11] font-bold rounded-xl shadow-lg shadow-[#C1FF72]/20 hover:-translate-y-0.5 transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Icon name="ArrowPathIcon" size={20} className="animate-spin text-[#090e11]" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Icon name="PaperAirplaneIcon" size={20} />
            <span>Send Project Inquiry</span>
          </>
        )}
      </button>
    </form>
  </div>
);

};

export default ContactFormClient;