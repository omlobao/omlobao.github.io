import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import NetworkBackground from './components/NetworkBackground';
import FloatingDock from './components/FloatingDock';
import HeaderProfile from './components/HeaderProfile';
import WhatIBuild from './components/WhatIBuild';
import KrosmoxSection from './components/KrosmoxSection';
import AlsoBuilt from './components/AlsoBuilt';
import TechMarquee from './components/TechMarquee';
import Certifications from './components/Certifications';
import Trajectory from './components/Trajectory';
import HowICanHelp from './components/HowICanHelp';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <LanguageProvider>
      <NetworkBackground />
      <FloatingDock />
      <div className="page-container">
        <main>
          <HeaderProfile />
          <WhatIBuild />
          <KrosmoxSection />
          <AlsoBuilt />
          <TechMarquee />
          <Certifications />
          <Trajectory />
          <HowICanHelp />
        </main>
        <FooterSection />
      </div>
    </LanguageProvider>
  );
}
