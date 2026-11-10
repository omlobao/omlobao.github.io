import React from 'react';
import { personalData } from '../data/resumeData';
import { ArrowUpRight, Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-brand">
          <div className="navbar-logo-symbol">M</div>
          <span className="navbar-brand-name">{personalData.shortName}</span>
          <span className="badge badge-vermilion" style={{ marginLeft: 8 }}>
            <span className="pulse-dot"></span>
            Disponível
          </span>
        </a>

        <nav className="navbar-links">
          <a href="#sgr" className="navbar-link">01 // SGR</a>
          <a href="#projetos" className="navbar-link">02 // Projetos</a>
          <a href="#cv" className="navbar-link">03 // Carreira</a>
          <a href="#servicos" className="navbar-link">04 // Serviços</a>
          <a href="#contato" className="navbar-link">05 // Contato</a>
        </nav>

        <div>
          <a
            href={personalData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.75rem' }}
          >
            Falar no WhatsApp
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

