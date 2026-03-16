'use client';

import { useEffect, useRef } from 'react';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Redux'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Python', 'Go', 'GraphQL'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Elasticsearch'] },
  { category: 'DevOps & Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'] },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate developer with 6+ years of experience building
            products that users love.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile + Bio */}
          <div className="animate-on-scroll-left">
            {/* Profile image placeholder */}
            <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 rounded-2xl bg-gradient-to-br from-primary-400 to-indigo-600 flex items-center justify-center shadow-2xl shadow-primary-500/20">
              <span className="text-6xl font-bold text-white">AJ</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Alex Johnson
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I&apos;m a full-stack developer with a deep passion for crafting
              exceptional digital experiences. With expertise spanning from
              pixel-perfect frontends to scalable backend architectures, I
              bring ideas to life with clean, maintainable code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring hiking
              trails, contributing to open-source projects, or experimenting
              with the latest web technologies. I believe great software is
              built at the intersection of technical excellence and empathy
              for the end user.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPinIcon className="w-5 h-5 text-primary-500" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <BriefcaseIcon className="w-5 h-5 text-primary-500" />
                <span>6+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <CodeIcon className="w-5 h-5 text-primary-500" />
                <span>Open to Remote</span>
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="animate-on-scroll-right">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies & Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
