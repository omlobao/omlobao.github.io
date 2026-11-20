import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Trajectory() {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="section-wrapper" style={{ position: 'relative' }}>
      <span id="trajetoria" style={{ position: 'absolute', top: -80, visibility: 'hidden' }}></span>
      <div className="section-title-row">
        <h2 className="section-heading">{t.trajectory.sectionTitle}</h2>
        <span className="section-link-action">{t.trajectory.badge}</span>
      </div>

      <div className="kc-trajectory-list">
        {t.trajectory.list.map((exp, idx) => (
          <div key={idx} className="kc-trajectory-card">
            <div className="kc-trajectory-top">
              <span className="kc-trajectory-role">{exp.role}</span>
              <span className="kc-trajectory-period">{exp.period}</span>
            </div>

            <div className="kc-trajectory-company">
              {exp.company} • {exp.location}
            </div>

            <ul className="kc-trajectory-bullets">
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
