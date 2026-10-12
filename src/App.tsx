import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header, NavSection } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SdlcWorkflowSection } from './components/SdlcWorkflowSection';
import { ContactSection } from './components/ContactSection';
import { PROFILE_DATA } from './data/portfolioData';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<NavSection>('about');
  const isScrollingRef = useRef(false);

  // Smooth scroll to target section when clicked
  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    isScrollingRef.current = true;
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 68; // header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  // IntersectionObserver to sync active header tab as user scrolls
  useEffect(() => {
    const sectionIds: NavSection[] = ['about', 'skills', 'experience', 'projects', 'sdlc', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible && visible.target.id) {
          setActiveSection(visible.target.id as NavSection);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcf9] dark:bg-[#191919] text-[#37352f] dark:text-[#e6e5e3] transition-colors duration-150 flex flex-col font-sans selection:bg-[#faeedf] selection:text-[#37352f]">
      {/* Notion Top Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Full-Width Edge-to-Edge Notion Cover Banner (Matching Attached Image) */}
      <div
        className="w-full h-44 sm:h-52 md:h-56 bg-[#f4ecd8] dark:bg-[#25231f] border-b border-[#ece1cb] dark:border-[#2f2c26] relative"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(160, 140, 115, 0.28) 1.2px, transparent 1.2px)`,
          backgroundSize: '18px 18px',
        }}
      />

      {/* Main Single-Page Portfolio Flow */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16 sm:space-y-24">
        {/* Section 1: About (Executive Overview & Education) */}
        <section id="about" className="scroll-mt-20 space-y-12">
          <HomeSection onNavigate={handleNavigate} />
          <div className="pt-4 border-t border-[#e9e9e7] dark:border-[#2e2e2e]">
            <EducationSection />
          </div>
        </section>

        {/* Section 2: Skills */}
        <section id="skills" className="scroll-mt-20 border-t border-[#e9e9e7] dark:border-[#2e2e2e] pt-12">
          <SkillsSection />
        </section>

        {/* Section 3: Experience */}
        <section id="experience" className="scroll-mt-20 border-t border-[#e9e9e7] dark:border-[#2e2e2e] pt-12">
          <ExperienceSection />
        </section>

        {/* Section 4: Projects (Work & Personal) */}
        <section id="projects" className="scroll-mt-20 border-t border-[#e9e9e7] dark:border-[#2e2e2e] pt-12">
          <ProjectsSection />
        </section>

        {/* Section 5: AI & SDLC Workflow */}
        <section id="sdlc" className="scroll-mt-20 border-t border-[#e9e9e7] dark:border-[#2e2e2e] pt-12">
          <SdlcWorkflowSection />
        </section>

        {/* Section 6: Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-[#e9e9e7] dark:border-[#2e2e2e] pt-12">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e9e9e7] dark:border-[#2e2e2e] py-6 px-4 sm:px-8 text-xs text-[#787774] dark:text-[#9b9a97] transition-colors mt-12 bg-[#faf8f5] dark:bg-[#1c1c1c]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-medium text-[#787774] dark:text-[#9b9a97] tracking-wider">
            Portfolio
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
