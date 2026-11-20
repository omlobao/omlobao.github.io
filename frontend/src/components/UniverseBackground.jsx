import React from 'react';
import LightRays from './spell/LightRays';
import Galaxy from './reactbits/Galaxy';

export default function UniverseBackground() {
  return (
    <div className="universe-background-wrapper" aria-hidden="true">
      <LightRays
        intensity={7}
        rays={24}
        reach={20}
        position={50}
        animation={{ animate: true, speed: 0.9 }}
        raysColor={{
          color1: '#38BDF8',
          color2: '#6366F1',
        }}
      />
      <Galaxy
        starColors={['#38BDF8', '#818CF8', '#BAE6FD', '#FFFFFF']}
        starSpeed={0.05}
        density={0.9}
        twinkleIntensity={0.12}
        glowIntensity={0.25}
        speed={0.18}
        mouseInteraction={true}
        mouseRepulsion={true}
        repulsionStrength={1.5}
        clickWarp={true}
        transparent={true}
        opacity={0.85}
        className="reactbits-galaxy-bg"
      />
    </div>
  );
}
