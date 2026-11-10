import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/resumeData';
import { MessageSquare, Mail, Download, ArrowUp, ArrowUpRight } from 'lucide-react';

export default function FooterSection() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="kc-footer">
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 8 }}>
          {t.footer.title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: 540 }}>
          {t.footer.desc}
        </p>
      </div>

      <div className="kc-footer-actions">
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a
            href={personalData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary"
          >
            <MessageSquare size={15} />
            {t.footer.whatsappBtn}
            <ArrowUpRight size={14} />
          </a>

          <a
            href={`mailto:${personalData.email}`}
            className="btn-pill-secondary"
          >
            <Mail size={15} />
            {t.footer.emailBtn}
          </a>

          <a
            href={t.profile.cvUrl}
            download={t.profile.cvFileName}
            className="btn-pill-secondary"
          >
            <Download size={15} />
            {t.footer.downloadCvBtn}
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="dock-link"
          style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
        >
          {t.nav.top}
          <ArrowUp size={13} />
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', paddingTop: 16, borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: 8 }}>
        <div>
          © {new Date().getFullYear()} {personalData.name} • {personalData.location}
        </div>
      </div>
    </footer>
  );
}
