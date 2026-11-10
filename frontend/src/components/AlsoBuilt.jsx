import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/resumeData';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function AlsoBuilt() {
  const { t } = useLanguage();

  return (
    <section className="section-wrapper">
      <div className="section-title-row">
        <h2 className="section-heading">{t.alsoBuilt.sectionTitle}</h2>
        <a
          href={personalData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="section-link-action"
        >
          {t.alsoBuilt.allGithub}
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="kc-projects-list">
        {t.alsoBuilt.projects.map((p, idx) => (
          <a
            key={idx}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="kc-project-row"
          >
            <div className="kc-project-info">
              <span className="kc-project-badge">{p.language}</span>
              <div>
                <span className="kc-project-name">{p.title}</span>
                <span className="kc-project-desc-inline">— {p.desc}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="kc-project-tech">{p.tech}</span>
              <ExternalLink size={13} style={{ opacity: 0.5 }} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
