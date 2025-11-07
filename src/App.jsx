import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
