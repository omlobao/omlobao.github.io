import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalData } from '../data/resumeData';
import { Check, Download, ArrowUpRight, Copy, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function HeaderProfile() {
  const { t, lang } = useLanguage();
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inicio" className="profile-section">
      {/* Avatar Row without generic availability badge */}
      <div className="profile-avatar-row">
        <div className="profile-avatar-box">
          <img
            src="./profile.jpg"
            alt={personalData.name}
            className="profile-avatar-img"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="profile-avatar" style={{ display: 'none' }}>M</div>
        </div>
      </div>

      {/* Name and Handle */}
      <h1 className="profile-name">
        {personalData.shortName}
        <span className="profile-handle">@{personalData.handle}</span>
      </h1>

      <div className="profile-role">
        {t.profile.role}
      </div>

      {/* Social Links Pills */}
      <div className="profile-social-pills">
        <a
          href={personalData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-pill"
        >
          <GithubIcon size={14} />
          GitHub
        </a>

        <a
          href={personalData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-pill"
        >
          <LinkedinIcon size={14} />
          LinkedIn
        </a>

        <a
          href={personalData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-pill"
        >
          WhatsApp
          <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
        </a>

        <button onClick={handleCopyEmail} className="social-pill">
          {copied ? <Check size={14} color="#4ADE80" /> : <Copy size={13} />}
          {copied ? t.profile.emailCopied : t.profile.copyEmail}
        </button>

        <a
          href={t.profile.cvUrl}
          download={t.profile.cvFileName}
          className="social-pill"
        >
          <Download size={13} />
          {t.profile.downloadCv}
        </a>
      </div>

      {/* Meta Grid (Base, Hora Local, Foco) */}
      <div className="profile-meta-grid">
        <div>
          <div className="meta-item-label">{t.profile.locationLabel}</div>
          <div className="meta-item-val">{t.profile.locationVal}</div>
        </div>
        <div>
          <div className="meta-item-label">{t.profile.timeLabel}</div>
          <div className="meta-item-val clock">{time || '--:--:--'} BRT</div>
        </div>
        <div>
          <div className="meta-item-label">{t.profile.focusLabel}</div>
          <div className="meta-item-val">{t.profile.focusVal}</div>
        </div>
      </div>

      {/* Bio Paragraph */}
      <p className="profile-bio">
        {t.profile.bio} <em>"{t.profile.quote}"</em> {t.profile.quoteOrigin}
      </p>

      {copied && (
        <div className="kc-copy-toast">
          ✓ {t.profile.emailCopied}
        </div>
      )}
    </section>
  );
}
