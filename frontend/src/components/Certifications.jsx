import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certificacoes" className="section-wrapper">
      <div className="section-title-row">
        <h2 className="section-heading">{t.credentials.sectionTitle}</h2>
        <span className="section-link-action">{t.credentials.badge}</span>
      </div>

      <div className="kc-cert-list">
        {t.credentials.list.map((item, idx) => (
          <div key={idx} className="kc-cert-row">
            <div>
              <div className="kc-cert-title">{item.title}</div>
              <div className="kc-cert-issuer">
                {item.issuer}
                {item.highlight && (
                  <span style={{ color: 'var(--text-secondary)', display: 'block', marginTop: '4px', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    {item.highlight}
                  </span>
                )}
              </div>
            </div>

            <div className="kc-cert-status">
              {item.year && <span className="kc-cert-year">{item.year}</span>}
              {item.status && <span className="kc-status-badge">{item.status}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
