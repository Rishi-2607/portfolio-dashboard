import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Skill {
  id: number;
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

const SkillsShowcase = () => {
  const skills: Skill[] = [
    { id: 1, name: "React", icon: "CodeBracketIcon", proficiency: 95, category: "Frontend" },
    { id: 2, name: "TypeScript", icon: "CommandLineIcon", proficiency: 90, category: "Language" },
    { id: 3, name: "Next.js", icon: "RocketLaunchIcon", proficiency: 92, category: "Framework" },
    { id: 4, name: "Tailwind CSS", icon: "PaintBrushIcon", proficiency: 95, category: "Styling" },
    { id: 5, name: "JavaScript", icon: "BoltIcon", proficiency: 93, category: "Language" },
    { id: 6, name: "Redux", icon: "CircleStackIcon", proficiency: 88, category: "State Management" },
    { id: 7, name: "Git", icon: "CodeBracketSquareIcon", proficiency: 90, category: "Version Control" },
    { id: 8, name: "REST APIs", icon: "CloudIcon", proficiency: 87, category: "Backend" }
  ];

  const certifications = [
    { id: 1, title: "React Advanced Certification", issuer: "Meta", year: "2024", icon: "AcademicCapIcon" },
    { id: 2, title: "TypeScript Professional", issuer: "Microsoft", year: "2023", icon: "ShieldCheckIcon" },
    { id: 3, title: "Web Performance Expert", issuer: "Google", year: "2024", icon: "BoltIcon" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge -translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 mix-blend-color-dodge translate-x-1/4 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-700/20 rounded-full mb-4">
            <Icon name="CpuChipIcon" size={20} className="text-purple-400 mr-2" />
            <span className="text-sm font-semibold text-purple-300">Technical Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mastery in Modern Technologies
          </h2>

          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Continuously evolving skill set focused on delivering cutting-edge solutions with proven technologies and industry best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Core Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.id} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                        <Icon
                          name={skill.icon as any}
                          size={20}
                          className="text-purple-500 group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-xs text-white/70 ml-2">({skill.category})</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-purple-500">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Certifications & Credentials</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gray-900/70 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={cert.icon as any} size={24} className="text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-white/70">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                    <Icon name="CheckBadgeIcon" size={24} className="text-purple-500 flex-shrink-0" />
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="TrophyIcon" size={28} className="text-purple-500" />
                  <h4 className="font-bold text-white">GitHub Contributions</h4>
                </div>
                <p className="text-white/70 mb-4">
                  Active open-source contributor with 500+ contributions in the past year
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500">15+</div>
                    <div className="text-xs text-white/70">Repositories</div>
                  </div>
                  <div className="h-8 w-px bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500">200+</div>
                    <div className="text-xs text-white/70">Stars</div>
                  </div>
                  <div className="h-8 w-px bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500">50+</div>
                    <div className="text-xs text-white/70">Forks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center px-8 py-4 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            Explore All Skills
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
