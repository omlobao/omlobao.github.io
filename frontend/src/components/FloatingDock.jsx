import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/resumeData';
import { ArrowUpRight, Globe } from 'lucide-react';
import { Magnet } from './reactbits';

export default function FloatingDock() {
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { href: '#inicio', label: t.nav.home },
    { href: '#construo', label: t.nav.projects },
    { href: '#krosmox', label: t.nav.krosmox },
    { href: '#certificacoes', label: t.nav.credentials },
    { href: '#experiencia', label: t.nav.trajectory },
    { href: '#servicos', label: t.nav.services },
  ];

  return (
    <div className="floating-dock-wrapper">
      <nav className="floating-dock">
        {/* Scrollable Navigation Links */}
        <div className="dock-nav-links">
          {navLinks.map((item, idx) => (
            <Magnet key={idx} padding={20} style={{ flexShrink: 0 }}>
              <a href={item.href} className="dock-link">
                {item.label}
              </a>
            </Magnet>
          ))}
        </div>

        {/* Pinned Action Group (Language Toggle & CTA) - Always Visible */}
        <div className="dock-actions">
          {/* Language Toggle Pill */}
          <Magnet padding={20} style={{ flexShrink: 0 }}>
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

          <Magnet padding={20} style={{ flexShrink: 0 }}>
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
