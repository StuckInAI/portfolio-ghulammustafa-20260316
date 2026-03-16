import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
