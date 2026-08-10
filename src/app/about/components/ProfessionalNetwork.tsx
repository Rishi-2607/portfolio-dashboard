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
            className="bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 hover:shadow-[0_0_25px_rgba(128,90,250,0.6)] transition-all duration-300"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-500/20">
                  <AppImage
                    src={connection.image}
                    alt={connection.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-bold text-white truncate">{connection.name}</h4>
                <p className="text-purple-400 text-sm font-semibold">{connection.position}</p>
                <p className="text-gray-300 text-sm">{connection.company}</p>
              </div>
              <a
                href={connection.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 hover:bg-purple-500/10 rounded-lg transition-colors duration-200"
                aria-label={`View ${connection.name}'s LinkedIn profile`}
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} className="text-purple-400" />
              </a>
            </div>

            <div className="relative">
              <Icon
                name="ChatBubbleLeftIcon"
                size={24}
                className="absolute -top-2 -left-2 text-purple-400/20"
              />
              <p className="text-gray-300 leading-relaxed pl-6 italic">
                "{connection.recommendation}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Network Stats */}
      <div className="mt-12 grid md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-purple-500/5 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="UserGroupIcon" size={24} className="text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">50+</p>
          <p className="text-sm text-gray-300 font-medium">Professional Connections</p>
        </div>

        <div className="text-center p-6 bg-purple-400/5 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="StarIcon" size={24} className="text-purple-300" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">25+</p>
          <p className="text-sm text-gray-300 font-medium">LinkedIn Recommendations</p>
        </div>

        <div className="text-center p-6 bg-purple-600/5 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="BuildingOfficeIcon" size={24} className="text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">15+</p>
          <p className="text-sm text-gray-300 font-medium">Companies Worked With</p>
        </div>

        <div className="text-center p-6 bg-green-500/5 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="HandThumbUpIcon" size={24} className="text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white mb-1">100%</p>
          <p className="text-sm text-gray-300 font-medium">Client Satisfaction</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl text-center shadow-[0_0_25px_rgba(128,90,250,0.6)]">
        <h4 className="text-xl font-bold text-white mb-2">Want to Add Your Recommendation?</h4>
        <p className="text-white/90 mb-4">
          If we've worked together, I'd love to hear your feedback and add your testimonial to my network.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-white font-semibold rounded-2xl shadow-[0_0_15px_rgba(128,90,250,0.6)] hover:shadow-[0_0_25px_rgba(128,90,250,0.8)] hover:-translate-y-0.5 transition-all duration-200"
        >
          <Icon name="PencilSquareIcon" size={20} />
          <span>Share Your Experience</span>
        </a>
      </div>
    </div>
  );
}
