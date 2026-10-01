'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  logo: string;
  alt: string;
  verifyUrl: string;
  className?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  credentialId,
  logo,
  alt,
  verifyUrl,
  className = '',
}: CertificationCardProps) {
  return (
    <div className={`bg-[#111a1e] rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 group transition-all duration-300 hover:border-[#C1FF72]/40 hover:shadow-[0_0_25px_rgba(193,255,114,0.15)] ${className}`}>
      
      <div className="flex items-start space-x-4 mb-4">
        {/* Logo */}
        <div className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden backdrop-blur-sm">
          <AppImage
            src={logo}
            alt={alt}
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        {/* Title & Issuer */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#C1FF72] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-gray-400 font-medium">{issuer}</p>
        </div>
      </div>

      {/* Date & Credential ID */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Icon name="CalendarIcon" size={16} className="text-[#C1FF72] flex-shrink-0" />
          <span>Issued: {date}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Icon name="IdentificationIcon" size={16} className="text-[#C1FF72] flex-shrink-0" />
          <span className="truncate">ID: {credentialId}</span>
        </div>
      </div>

      {/* Verify button */}
      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-sm font-semibold text-[#C1FF72] hover:text-[#daffaa] transition-colors duration-200"
      >
        <span>Verify Credential</span>
        <Icon name="ArrowTopRightOnSquareIcon" size={16} />
      </a>
    </div>
  );
}
