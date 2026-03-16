'use client';

import { useEffect, useRef, useState } from 'react';

interface Experience {
  id: number;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'work' | 'education';
}

function formatDate(dateStr: string) {
  if (!dateStr) return 'Present';
  const [year, month] = dateStr.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(month) - 1]} ${year}`;
}

function TimelineItem({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const isWork = exp.type === 'work';

  return (
    <div className={`animate-on-scroll relative flex items-start gap-8 ${ isEven ? 'flex-row' : 'flex-row-reverse' } mb-12`}>
      {/* Content card - takes up half width on lg */}
      <div className={`flex-1 ${isEven ? 'text-right lg:pr-8' : 'text-left lg:pl-8'} hidden lg:block`}>
        {isEven && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow inline-block text-left w-full">
            <ExperienceCard exp={exp} isWork={isWork} />
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md z-10 ${
            isWork
              ? 'bg-primary-600 dark:bg-primary-500'
              : 'bg-indigo-600 dark:bg-indigo-500'
          }`}
        >
          {isWork ? (
            <BriefcaseIcon className="w-5 h-5 text-white" />
          ) : (
            <AcademicCapIcon className="w-5 h-5 text-white" />
          )}
        </div>
      </div>

      <div className={`flex-1 ${isEven ? 'text-left lg:pl-8' : 'text-right lg:pr-8'} hidden lg:block`}>
        {!isEven && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow inline-block text-left w-full">
            <ExperienceCard exp={exp} isWork={isWork} />
          </div>
        )}
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex gap-4 w-full">
        <div
          className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center shadow-md ${
            isWork
              ? 'bg-primary-600 dark:bg-primary-500'
              : 'bg-indigo-600 dark:bg-indigo-500'
          }`}
        >
          {isWork ? (
            <BriefcaseIcon className="w-4 h-4 text-white" />
          ) : (
            <AcademicCapIcon className="w-4 h-4 text-white" />
          )}
        </div>
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <ExperienceCard exp={exp} isWork={isWork} />
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  exp,
  isWork,
}: {
  exp: Experience;
  isWork: boolean;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
            isWork
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
              : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
          }`}
        >
          {isWork ? 'Work' : 'Education'}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
        </span>
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-0.5">
        {exp.title}
      </h3>
      <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
        {exp.company}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {exp.description}
      </p>
    </>
  );
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/experience')
      .then((r) => r.json())
      .then((data) => setExperiences(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : experiences.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">
              No experience entries yet. Seed the database at{' '}
              <code className="text-primary-600">/api/seed</code>.
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-indigo-300 to-primary-200 dark:from-primary-800 dark:via-indigo-700 dark:to-primary-800 -translate-x-1/2" />

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function AcademicCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}
