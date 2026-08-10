'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  content: string;
  rating: number;
  project: string;
}

interface TestimonialsSectionProps {
  isHydrated: boolean;
}

const TestimonialsSection = ({ isHydrated }: TestimonialsSectionProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14da91c34-1763294780479.png",
      alt: "Professional woman with long brown hair in navy blazer smiling at camera",
      content: "Rishikant transformed our outdated platform into a modern, user-friendly application. The 40% increase in user engagement speaks for itself. His attention to detail and commitment to quality is unmatched.",
      rating: 5,
      project: "E-Commerce Platform Redesign"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Solutions",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_156b9f9b8-1763294298967.png",
      alt: "Asian man in glasses and gray suit with confident expression in office setting",
      content: "Working with Rishikant was a game-changer for our SaaS product. He delivered a scalable dashboard that handles 10,000+ daily users flawlessly. His React expertise is truly world-class.",
      rating: 5,
      project: "SaaS Dashboard Application"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "HealthCare Plus",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e33e7931-1763294360998.png",
      alt: "Hispanic woman with curly hair in white blouse smiling warmly at camera",
      content: "The appointment system Rishikant built reduced our patient wait times by 60%. His ability to understand healthcare workflows and translate them into intuitive interfaces is remarkable.",
      rating: 5,
      project: "Healthcare Appointment System"
    }
  ];

  const handlePrevious = () => {
    setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge translate-x-1/4 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-700/20 rounded-full mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-purple-400 mr-2" />
            <span className="text-sm font-semibold text-purple-300">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            What Clients Say About Working With Me
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Real feedback from real clients who have experienced the transformation of their digital products.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 sm:p-12 border border-purple-700">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-purple-500/40">
                {isHydrated && (
                  <AppImage
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].alt}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-purple-300">
                  {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                </p>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="StarIcon" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-lg text-white/90 leading-relaxed mb-6">
              &ldquo;{testimonials[activeTestimonial].content}&rdquo;
            </blockquote>

            <div className="flex items-center gap-2 text-sm text-purple-300">
              <Icon name="BriefcaseIcon" size={16} />
              <span>Project: {testimonials[activeTestimonial].project}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-purple-800/60 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:-translate-x-1"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeftIcon" size={24} className="text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-8 bg-purple-500'
                      : 'w-2 bg-gray-600 hover:bg-purple-400/50'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-purple-800/60 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:translate-x-1"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRightIcon" size={24} className="text-white" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-purple-500 mb-2">98%</div>
            <div className="text-white/70">Client Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-500 mb-2">100%</div>
            <div className="text-white/70">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-500 mb-2">85%</div>
            <div className="text-white/70">Repeat Client Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
