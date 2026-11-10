import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/resumeData';
import { ArrowUpRight } from 'lucide-react';

export default function HowICanHelp() {
  const { t, lang } = useLanguage();

  return (
    <section id="servicos" className="section-wrapper">
      <div className="section-title-row">
        <h2 className="section-heading">{t.services.sectionTitle}</h2>
        <a
          href={personalData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="section-link-action"
        >
          {t.services.cta}
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="kc-services-grid">
        {t.services.list.map((srv, idx) => (
          <div key={idx} className="kc-service-card">
            <div>
              <div className="kc-service-num">{srv.number}</div>
              <h3 className="kc-service-title">{srv.title}</h3>
              <p className="kc-service-desc">{srv.desc}</p>
            </div>

            <div style={{ marginTop: 16 }}>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--vermilion)', textTransform: 'uppercase' }}>
                {srv.deliverables ? (lang === 'pt' ? 'Entregáveis Principais:' : 'Core Deliverables:') : ''}
              </span>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {srv.deliverables?.map((item, dIdx) => (
                  <li key={dIdx} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
