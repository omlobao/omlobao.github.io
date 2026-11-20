import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/resumeData';
import { ArrowUpRight, Globe } from 'lucide-react';
import { Magnet } from './reactbits';

export default function FloatingDock() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div className="floating-dock-wrapper">
      <nav className="floating-dock">
        {/* Scrollable Navigation Links */}
        <div className="dock-nav-links">
          <a href="#inicio" className="dock-link">{t.nav.home}</a>
          <a href="#construo" className="dock-link">{t.nav.projects}</a>
          <a href="#krosmox" className="dock-link">{t.nav.krosmox}</a>
          <a href="#certificacoes" className="dock-link">{t.nav.credentials}</a>
          <a href="#experiencia" className="dock-link">{t.nav.trajectory}</a>
          <a href="#servicos" className="dock-link">{t.nav.services}</a>
        </div>

        {/* Pinned Action Group (Language Toggle & CTA) - Always Visible */}
        <div className="dock-actions">
          {/* Language Toggle Pill */}
          <Magnet padding={20}>
            <button
              onClick={toggleLang}
              className="dock-lang-btn"
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português (PT-BR)'}
              title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português (PT-BR)'}
            >
              <span style={{ fontSize: '0.85rem' }}>{lang === 'pt' ? '🇺🇸' : '🇧🇷'}</span>
              <span style={{ fontWeight: 600, fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                {lang === 'pt' ? 'EN' : 'PT-BR'}
              </span>
            </button>
          </Magnet>

          <Magnet padding={20}>
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-cta"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight size={13} />
            </a>
          </Magnet>
        </div>
      </nav>
    </div>
  );
}
