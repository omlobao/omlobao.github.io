import React from 'react';
import LightRays from './spell/LightRays';
import Galaxy from './reactbits/Galaxy';

export default function UniverseBackground() {
  return (
    <div className="universe-background-wrapper" aria-hidden="true">
      <LightRays
        intensity={12}
        rays={24}
        reach={20}
        position={50}
        animation={{ animate: true, speed: 4 }}
        raysColor={{
          color1: '#FF4433',
          color2: '#7C3AED',
        }}
      />
      <Galaxy
        starColors={['#FF4433', '#FFA89E', '#FFFFFF', '#A78BFA']}
        starSpeed={0.35}
        density={1.1}
        twinkleIntensity={0.25}
        glowIntensity={0.35}
        speed={0.8}
        mouseInteraction={true}
        mouseRepulsion={true}
        repulsionStrength={2.2}
        clickWarp={true}
        transparent={true}
        opacity={0.85}
        className="reactbits-galaxy-bg"
      />
    </div>
  );
}
