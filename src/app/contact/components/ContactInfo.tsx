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
    value: 'rishikant.dev@example.com',
    href: 'mailto:rishikant.dev@example.com',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: 'MapPinIcon',
    label: 'Location',
    value: 'San Francisco, CA',
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
    href: 'https://www.linkedin.com/in/rishikant-yadav-010648283 ',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    label: 'Replit',
    href: 'https://replit.com/@rishi7king',
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
            className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors duration-200 group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-800/20 flex items-center justify-center group-hover:bg-purple-800/40 transition-colors duration-200">
              <Icon
                name={method.icon as any}
                size={24}
                className="text-purple-400"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-400 mb-1">{method.label}</p>
              <p className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
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
              className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-gray-900 hover:bg-purple-400 hover:text-white transition-all duration-200 group"
              aria-label={social.label}
            >
              <Icon
                name={social.icon as any}
                size={20}
                className="text-purple-400 group-hover:text-white transition-colors duration-200"
              />
              <span className="text-sm font-medium text-white group-hover:text-white transition-colors duration-200">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-800/20">
        <div className="flex items-start space-x-3">
          <Icon
            name="ClockIcon"
            size={24}
            className="text-purple-400 flex-shrink-0 mt-1"
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
