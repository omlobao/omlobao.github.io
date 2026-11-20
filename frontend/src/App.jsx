import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import UniverseBackground from './components/UniverseBackground';
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
import { ClickSpark } from './components/reactbits';

export default function App() {
  return (
    <LanguageProvider>
      <UniverseBackground />
      <FloatingDock />
      <ClickSpark
        sparkColor={['#FF4433', '#FFA89E', '#FFFFFF', '#A78BFA']}
        sparkSize={10}
        sparkRadius={24}
        sparkCount={6}
        duration={400}
      >
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
      </ClickSpark>
    </LanguageProvider>
  );
}
