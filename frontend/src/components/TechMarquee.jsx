import React from 'react';
import pythonIcon from '../assets/tech/python.svg';
import djangoIcon from '../assets/tech/django.svg';
import postgresqlIcon from '../assets/tech/postgresql.svg';
import mysqlIcon from '../assets/tech/mysql.svg';
import flutterIcon from '../assets/tech/flutter.svg';
import csharpIcon from '../assets/tech/csharp.svg';
import dotnetIcon from '../assets/tech/dotnet.svg';
import dockerIcon from '../assets/tech/docker.svg';
import linuxIcon from '../assets/tech/linux.svg';
import gitIcon from '../assets/tech/git.svg';
import redisIcon from '../assets/tech/redis.svg';

const techs = [
  { name: 'Python', icon: pythonIcon },
  { name: 'Django / DRF', icon: djangoIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Flutter', icon: flutterIcon },
  { name: 'C#', icon: csharpIcon },
  { name: '.NET', icon: dotnetIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Linux', icon: linuxIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Redis', icon: redisIcon }
];

export default function TechMarquee() {
  const duplicatedTechs = [...techs, ...techs, ...techs];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {duplicatedTechs.map((tech, idx) => (
          <div key={idx} className="marquee-pill">
            <img
              src={tech.icon}
              alt={tech.name}
              className="marquee-tech-icon"
              width={18}
              height={18}
              loading="lazy"
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
