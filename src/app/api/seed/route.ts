import { NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Project } from '@/entities/Project';
import { Experience } from '@/entities/Experience';

export async function POST() {
  try {
    const ds = await getDataSource();

    const projectRepo = ds.getRepository(Project);
    const existingProjects = await projectRepo.count();

    if (existingProjects === 0) {
      const projects = projectRepo.create([
        {
          title: 'E-Commerce Platform',
          description:
            'A full-featured e-commerce platform with real-time inventory management, payment processing via Stripe, and an admin dashboard. Built with Next.js and PostgreSQL.',
          techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis'],
          thumbnailUrl: '',
          githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
          liveDemoUrl: 'https://ecommerce-demo.alexjohnson.dev',
        },
        {
          title: 'AI Chat Assistant',
          description:
            'A conversational AI assistant powered by OpenAI GPT-4, featuring persistent conversation history, custom system prompts, and a sleek real-time streaming interface.',
          techStack: ['React', 'Node.js', 'OpenAI API', 'WebSockets', 'MongoDB'],
          thumbnailUrl: '',
          githubUrl: 'https://github.com/alexjohnson/ai-chat-assistant',
          liveDemoUrl: 'https://chat.alexjohnson.dev',
        },
        {
          title: 'DevOps Dashboard',
          description:
            'A comprehensive monitoring dashboard for Kubernetes clusters, providing real-time metrics, log aggregation, alert management, and deployment pipelines visualization.',
          techStack: ['React', 'Kubernetes', 'Prometheus', 'Grafana', 'Go'],
          thumbnailUrl: '',
          githubUrl: 'https://github.com/alexjohnson/devops-dashboard',
          liveDemoUrl: '',
        },
        {
          title: 'Open Source CLI Tool',
          description:
            'A powerful command-line tool for automating repetitive development tasks including project scaffolding, code generation, database migrations, and deployment scripts.',
          techStack: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer.js'],
          thumbnailUrl: '',
          githubUrl: 'https://github.com/alexjohnson/dev-cli',
          liveDemoUrl: 'https://npmjs.com/package/dev-cli',
        },
        {
          title: 'Real-Time Collaboration App',
          description:
            'A Notion-inspired collaborative workspace with real-time document editing, block-based content, team permissions, and offline-first architecture using CRDTs.',
          techStack: ['React', 'Yjs', 'WebRTC', 'Express', 'SQLite'],
          thumbnailUrl: '',
          githubUrl: 'https://github.com/alexjohnson/collab-workspace',
          liveDemoUrl: 'https://collab.alexjohnson.dev',
        },
        {
          title: 'Fitness Tracking Mobile App',
          description:
            'A cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI-powered personalized recommendations and social features.',
          techStack: ['React Native', 'Expo', 'GraphQL', 'PostgreSQL', 'TensorFlow'],
          thumbnailUrl: '',
          githubUrl: 'https://github.com/alexjohnson/fitness-tracker',
          liveDemoUrl: 'https://apps.apple.com/fitness-tracker',
        },
      ]);
      await projectRepo.save(projects);
    }

    const experienceRepo = ds.getRepository(Experience);
    const existingExperience = await experienceRepo.count();

    if (existingExperience === 0) {
      const experiences = experienceRepo.create([
        {
          title: 'Senior Full Stack Engineer',
          company: 'TechCorp Inc.',
          description:
            'Led development of microservices architecture serving 2M+ users. Reduced API latency by 40% through Redis caching and query optimization. Mentored a team of 5 junior developers.',
          startDate: '2022-03',
          endDate: '',
          type: 'work' as const,
        },
        {
          title: 'Full Stack Developer',
          company: 'StartupXYZ',
          description:
            'Built and scaled the core product from 0 to 50,000 users in 18 months. Implemented CI/CD pipelines, automated testing suites, and migrated monolith to microservices.',
          startDate: '2020-06',
          endDate: '2022-02',
          type: 'work' as const,
        },
        {
          title: 'Frontend Developer',
          company: 'Digital Agency Co.',
          description:
            'Developed responsive web applications for 20+ enterprise clients. Specialized in React performance optimization and accessibility (WCAG 2.1 AA compliance).',
          startDate: '2018-09',
          endDate: '2020-05',
          type: 'work' as const,
        },
        {
          title: 'B.S. Computer Science',
          company: 'State University',
          description:
            'Graduated with honors (GPA 3.8/4.0). Specialized in Software Engineering and Distributed Systems. Senior thesis on distributed consensus algorithms.',
          startDate: '2014-09',
          endDate: '2018-05',
          type: 'education' as const,
        },
        {
          title: 'AWS Certified Solutions Architect',
          company: 'Amazon Web Services',
          description:
            'Achieved AWS Solutions Architect Professional certification, demonstrating expertise in designing distributed systems and cloud-native architectures on AWS.',
          startDate: '2021-04',
          endDate: '2021-04',
          type: 'education' as const,
        },
      ]);
      await experienceRepo.save(experiences);
    }

    return NextResponse.json(
      { success: true, message: 'Database seeded successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}
