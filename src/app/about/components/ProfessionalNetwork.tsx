'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface NetworkConnection {
  id: number;
  name: string;
  position: string;
  company: string;
  recommendation: string;
  image: string;
  alt: string;
  linkedinUrl: string;
}

interface ProfessionalNetworkProps {
  connections: NetworkConnection[];
}

export default function ProfessionalNetwork({ connections }: ProfessionalNetworkProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Professional Network</h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Testimonials and recommendations from clients, colleagues, and industry leaders who have experienced my work firsthand.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {connections.map((connection) => (
          <div
            key={connection.id}
            className="bg-[#111a1e] rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)] transition-all duration-300"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#C1FF72]/30">
                  <AppImage
                    src={connection.image}
                    alt={connection.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold text-white truncate">{connection.name}</h4>
                <p className="text-[#C1FF72] text-sm font-semibold">{connection.position}</p>
                <p className="text-gray-400 text-sm">{connection.company}</p>
              </div>
              <a
                href={connection.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 hover:bg-[#182428] rounded-lg transition-colors duration-200"
                aria-label={`View ${connection.name}'s LinkedIn profile`}
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} className="text-[#C1FF72]" />
              </a>
            </div>

            <div className="relative">
              <Icon
                name="ChatBubbleLeftIcon"
                size={24}
                className="absolute -top-2 -left-2 text-[#C1FF72]/20"
              />
              <p className="text-gray-300/80 leading-relaxed pl-6 italic">
                &ldquo;{connection.recommendation}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Network Stats */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-[#111a1e] rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-[#C1FF72]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="UserGroupIcon" size={24} className="text-[#C1FF72]" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">50+</p>
          <p className="text-sm text-gray-300 font-medium">Professional Connections</p>
        </div>

        <div className="text-center p-6 bg-[#111a1e] rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-[#C1FF72]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="StarIcon" size={24} className="text-[#C1FF72]" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">25+</p>
          <p className="text-sm text-gray-300 font-medium">LinkedIn Recommendations</p>
        </div>

        <div className="text-center p-6 bg-[#111a1e] rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-[#C1FF72]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="BuildingOfficeIcon" size={24} className="text-[#C1FF72]" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">15+</p>
          <p className="text-sm text-gray-300 font-medium">Companies Worked With</p>
        </div>

        <div className="text-center p-6 bg-[#111a1e] rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-[#20c997]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="HandThumbUpIcon" size={24} className="text-[#20c997]" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">100%</p>
          <p className="text-sm text-gray-300 font-medium">Client Satisfaction</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 p-8 bg-[#182428] rounded-2xl text-center border border-[#C1FF72]/30 shadow-[0_0_35px_rgba(193,255,114,0.15)]">
        <h4 className="text-2xl font-bold text-white mb-2">Want to Add Your Recommendation?</h4>
        <p className="text-gray-300/90 max-w-xl mx-auto mb-6 text-sm">
          If we&apos;ve worked together, I&apos;d love to hear your feedback and add your testimonial to my network.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#C1FF72] hover:bg-[#d4ff8f] text-[#090e11] font-bold rounded-xl shadow-lg shadow-[#C1FF72]/20 hover:scale-[1.02] transition-all duration-200"
        >
          <Icon name="PencilSquareIcon" size={20} />
          <span>Share Your Experience</span>
        </a>
      </div>
    </div>
  );
}
