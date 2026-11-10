import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  ShoppingCart,
  DollarSign,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Printer
} from 'lucide-react';

const featureIcons = [Wrench, ShoppingCart, DollarSign, MessageCircle, ShieldCheck];

export default function KrosmoxSection() {
  const { t } = useLanguage();
  const [openFeature, setOpenFeature] = useState(0);

  if (!t.krosmox) return null;

  const toggleFeature = (idx) => {
    setOpenFeature(openFeature === idx ? -1 : idx);
  };

  return (
    <section id="krosmox" className="section-wrapper">
      <div className="section-title-row">
        <h2 className="section-heading">{t.krosmox.sectionTitle}</h2>
        <span className="section-link-action">{t.krosmox.badge}</span>
      </div>

      {/* Card 1: Portal Oficial Krosmox Studio */}
      <div className="kc-flagship-card" style={{ marginBottom: 20 }}>
        <div className="kc-flagship-badge-row">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="kc-tag kc-tag-vermilion">{t.krosmox.siteBadge}</span>
            <span className="kc-tag kc-tag-neutral">Software House • Venture</span>
          </div>
          <span className="kc-tag kc-tag-neutral" style={{ color: '#4ADE80' }}>
            ● No Ar
          </span>
        </div>

        <h3 className="kc-flagship-title" style={{ marginTop: 12 }}>
          <span>{t.krosmox.siteTitle}</span>
        </h3>

        <div className="kc-flagship-tagline">
          {t.krosmox.siteTagline}
        </div>

        <p className="kc-flagship-desc">
          {t.krosmox.siteDesc}
        </p>

        <div style={{ marginTop: 16 }}>
          <a
            href={t.krosmox.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', fontSize: '0.85rem' }}
          >
            <Globe size={15} />
            <span>{t.krosmox.visitSiteBtn}</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* Card 2: KrosERP (Sistema Web SaaS) */}
      <div className="kc-flagship-card">
        <div className="kc-flagship-badge-row">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="kc-tag kc-tag-vermilion">{t.krosmox.erpBadge}</span>
            <span className="kc-tag kc-tag-neutral">Single-DB Multi-Tenant</span>
          </div>
          <span className="kc-tag kc-tag-neutral" style={{ color: '#60A5FA' }}>
            Django • CompanyMiddleware
          </span>
        </div>

        <h3 className="kc-flagship-title" style={{ marginTop: 12 }}>
          <span>{t.krosmox.erpTitle}</span>
        </h3>

        <div className="kc-flagship-tagline">
          {t.krosmox.erpTagline}
        </div>

        <p className="kc-flagship-desc">
          {t.krosmox.erpDesc}
        </p>

        {/* Features / Modules Accordion */}
        <div style={{ marginTop: 24, marginBottom: 16 }}>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.krosmox.featuresTitle}
          </div>

          <div className="kc-pillars-list">
            {t.krosmox.features.map((feat, idx) => {
              const IconComp = featureIcons[idx] || Layers;
              const isOpen = openFeature === idx;

              return (
                <div
                  key={idx}
                  className={`kc-pillar-item ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFeature(idx)}
                >
                  <div className="kc-pillar-top">
                    <div className="kc-pillar-title-group">
                      <span className="kc-pillar-num">0{idx + 1}</span>
                      <IconComp size={16} color={isOpen ? 'var(--vermilion)' : 'var(--text-muted)'} />
                      <span className="kc-pillar-name">{feat.title}</span>
                    </div>
                    {isOpen ? <ChevronUp size={16} color="var(--vermilion)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                  </div>

                  {isOpen && (
                    <div className="kc-pillar-desc">
                      <p style={{ margin: 0, lineHeight: 1.6 }}>{feat.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Tech Badges */}
        <div className="kc-flagship-footer" style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {t.krosmox.techStack.map((tech, idx) => (
              <span key={idx} className="kc-tag kc-tag-neutral">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

