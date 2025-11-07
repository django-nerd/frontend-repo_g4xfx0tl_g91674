import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default App;
