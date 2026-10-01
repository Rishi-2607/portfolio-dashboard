import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'rishikyadav2607@gmail.com',
    href: 'mailto:rishikyadav2607@gmail.com',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+91-6388067731',
    href: 'tel:+916388067731',
  },
  {
    icon: 'MapPinIcon',
    label: 'Location',
    value: 'Prayagraj, Uttar Pradesh, India',
    href: '#',
  },
];

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: 'CodeBracketIcon',
    label: 'GitHub',
    href: 'https://github.com/Rishi-2607',
  },
  {
    icon: 'BriefcaseIcon',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rishikant-yadav',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    label: 'Email Direct',
    href: 'mailto:rishikyadav2607@gmail.com',
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Let&apos;s Build Something Amazing
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Ready to transform your digital presence? Whether you need a complete
          web application or want to enhance your existing platform, I&apos;m
          here to help bring your vision to life with React expertise and
          UI-focused development.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Contact Methods</h3>
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            className="flex items-start space-x-4 p-4 rounded-2xl bg-[#111a1e] hover:bg-[#182428] border border-white/10 hover:border-[#C1FF72]/40 transition-all duration-200 group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C1FF72]/15 border border-[#C1FF72]/30 flex items-center justify-center group-hover:bg-[#C1FF72]/25 transition-colors duration-200">
              <Icon
                name={method.icon as any}
                size={24}
                className="text-[#C1FF72]"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-400 mb-1">{method.label}</p>
              <p className="text-base font-semibold text-white group-hover:text-[#C1FF72] transition-colors duration-200">
                {method.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Connect on Social</h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-[#111a1e] hover:bg-[#C1FF72] hover:text-[#090e11] border border-white/10 hover:border-[#C1FF72] transition-all duration-200 group"
              aria-label={social.label}
            >
              <Icon
                name={social.icon as any}
                size={20}
                className="text-[#C1FF72] group-hover:text-[#090e11] transition-colors duration-200"
              />
              <span className="text-sm font-medium text-white group-hover:text-[#090e11] transition-colors duration-200">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#182428] border border-[#C1FF72]/30">
        <div className="flex items-start space-x-3">
          <Icon
            name="ClockIcon"
            size={24}
            className="text-[#C1FF72] flex-shrink-0 mt-1"
          />
          <div>
            <h4 className="text-base font-semibold text-white mb-2">Response Time</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              I typically respond to project inquiries within 24 hours on
              business days. For urgent matters, please mention &quot;Urgent&quot; in
              your message subject.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
