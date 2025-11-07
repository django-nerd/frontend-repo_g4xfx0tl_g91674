import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DevCursor from './components/DevCursor';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      {/* Developer glow cursor across the app (auto-hides on touch) */}
      <DevCursor />

      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
