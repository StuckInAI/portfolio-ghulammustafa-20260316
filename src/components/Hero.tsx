'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 border border-primary-200 dark:border-primary-800">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Available for new opportunities
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer & Cloud Architect
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications and elegant user experiences.
            Passionate about clean code, performance, and turning complex
            problems into simple solutions.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-500 flex flex-col sm:flex-row gap-4 justify-center ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl shadow-lg hover:shadow-primary-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDownIcon className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        <div
          className={`transition-all duration-700 delay-700 mt-16 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
