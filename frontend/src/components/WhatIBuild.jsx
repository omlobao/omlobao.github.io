import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { flagshipProject } from '../data/projectsData';
import {
  ChevronDown,
  ChevronUp,
  Layers,
  Smartphone,
  Split,
  Monitor,
  ShieldCheck,
  Calculator,
  ArrowUpRight,
  Globe,
  Copy,
  Check,
  Info,
  Key,
  UserCheck,
  Boxes,
  Sparkles
} from 'lucide-react';

const pillarIcons = [Smartphone, Split, Monitor, ShieldCheck, Calculator, Boxes, Sparkles];

export default function WhatIBuild() {
  const { t } = useLanguage();
  const [openPillar, setOpenPillar] = useState(0);
  const [copiedItem, setCopiedItem] = useState('');

  const togglePillar = (idx) => {
    setOpenPillar(openPillar === idx ? -1 : idx);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  return (
    <section id="construo" className="section-wrapper">
      <div className="section-title-row">
        <h2 className="section-heading">{t.flagship.sectionTitle}</h2>
        <span className="section-link-action">
          {t.flagship.badge}
        </span>
      </div>

      {/* Flagship Card */}
      <div className="kc-flagship-card">
        {/* Top Badges */}
        <div className="kc-flagship-badge-row">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="kc-tag kc-tag-vermilion">{t.flagship.badge}</span>
            <span className="kc-tag kc-tag-neutral">{t.flagship.architecture}</span>
          </div>

          <span className="kc-tag kc-tag-neutral" style={{ color: '#4ADE80' }}>
            {t.flagship.status}
          </span>
        </div>

        {/* Title e Tagline */}
        <h3 className="kc-flagship-title">
          <span>{t.flagship.title}</span>
        </h3>

        <div className="kc-flagship-tagline">
          {t.flagship.headline}
        </div>
        <p className="kc-flagship-desc">
          {t.flagship.subheadline}
        </p>

        {/* Live Demo Box & Credentials */}
        <div className="kc-demo-box">
          <div className="kc-demo-top-row">
            <a
              href={t.flagship.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary"
              style={{ padding: '8px 18px', fontSize: '0.8rem' }}
            >
              <Globe size={14} />
              {t.flagship.testDemoBtn}
              <ArrowUpRight size={14} />
            </a>

            {/* Quick-copy Credentials */}
            <div className="kc-credentials-group">
              <button
                type="button"
                onClick={() => copyToClipboard(t.flagship.demoLogin, 'login')}
                className="kc-credential-btn"
                title={t.flagship.copyLoginTip || (t.flagship.demoLogin ? 'Copy username' : '')}
              >
                <UserCheck size={14} color="var(--vermilion)" />
                <span>{t.flagship.demoUserLabel}: <strong>{t.flagship.demoLogin}</strong></span>
                {copiedItem === 'login' ? <Check size={13} color="#4ADE80" /> : <Copy size={12} style={{ opacity: 0.6 }} />}
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(t.flagship.demoPassword, 'pass')}
                className="kc-credential-btn"
                title={t.flagship.copyPassTip || (t.flagship.demoPassword ? 'Copy password' : '')}
              >
                <Key size={14} color="var(--vermilion)" />
                <span>{t.flagship.demoPassLabel}: <strong>{t.flagship.demoPassword}</strong></span>
                {copiedItem === 'pass' ? <Check size={13} color="#4ADE80" /> : <Copy size={12} style={{ opacity: 0.6 }} />}
              </button>
            </div>
          </div>

          {/* Cold-start delay notice */}
          <div className="kc-demo-alert">
            <Info size={15} color="var(--vermilion)" style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{t.flagship.demoAlert}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="kc-stats-grid">
          {t.flagship.stats.map((st, i) => (
            <div key={i} className="kc-stat-box">
              <div className="kc-stat-val">{st.value}</div>
              <div className="kc-stat-lbl">{st.label}</div>
              {st.desc && <div className="kc-stat-desc">{st.desc}</div>}
            </div>
          ))}
        </div>

        {/* Pillars Accordion */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.flagship.pillarsTitle} ({t.flagship.pillarsSubtitle})
          </div>

          <div className="kc-pillars-list">
            {t.flagship.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx] || Layers;
              const isOpen = openPillar === idx;

              return (
                <div
                  key={idx}
                  className={`kc-pillar-item ${isOpen ? 'active' : ''}`}
                  onClick={() => togglePillar(idx)}
                >
                  <div className="kc-pillar-top">
                    <div className="kc-pillar-title-group">
                      <span className="kc-pillar-num">{pillar.number}</span>
                      <IconComp size={16} color={isOpen ? 'var(--vermilion)' : 'var(--text-muted)'} />
                      <span className="kc-pillar-name">{pillar.title}</span>
                    </div>
                    {isOpen ? <ChevronUp size={16} color="var(--vermilion)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                  </div>

                  {isOpen && (
                    <div className="kc-pillar-desc">
                      <p style={{ marginBottom: 10 }}>{pillar.description}</p>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {pillar.tags.map((tg, tIdx) => (
                          <span key={tIdx} className="kc-tag kc-tag-neutral" style={{ fontSize: '0.65rem' }}>{tg}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Tech Badges */}
        <div className="kc-flagship-footer">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {flagshipProject.techStack.map((tech, idx) => (
              <span key={idx} className="kc-tag kc-tag-neutral">{tech}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a
              href="https://wa.me/5571991175273?text=Ol%C3%A1%20Matheus%2C%20gostaria%20de%20conversar%20sobre%20o%20Krosmox%20SGR!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary"
              style={{ padding: '6px 14px', fontSize: '0.75rem' }}
            >
              {t.flagship.cta}
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      {copiedItem && (
        <div className="kc-copy-toast">
          ✓ {copiedItem === 'login' ? (t.flagship.demoLogin + ' copiado!') : (t.flagship.demoPassword + ' copiado!')}
        </div>
      )}
    </section>
  );
}
