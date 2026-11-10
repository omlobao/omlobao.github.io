export const translations = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'SGR',
      krosmox: 'Krosmox e ERP',
      credentials: 'Formação',
      trajectory: 'Trajetória',
      services: 'Serviços',
      contact: 'Contatar',
      top: 'Topo'
    },
    profile: {
      role: 'Desenvolvedor Back-End Python • Pós-graduando em Arquitetura de Software',
      locationLabel: 'Onde vivo',
      locationVal: 'Taguatinga-DF, Brasil',
      timeLabel: 'Hora Local',
      focusLabel: 'Foco Técnico',
      focusVal: 'Python • PostgreSQL • Django',
      bio: 'Desenvolvedor Back-End Python com conhecimentos em bancos de dados relacionais e infraestrutura, graduado em Análise e Desenvolvimento de Sistemas e Pós-graduando em Engenharia de Software.',
      quote: 'Meu passatempo é analisar problemas e pensar em soluções técnicas para resolvê-los.',
      copyEmail: 'Copiar e-mail',
      emailCopied: 'E-mail copiado!',
      downloadCv: 'Baixar CV (PDF)',
      cvUrl: './curriculo-matheus.pdf',
      cvFileName: 'Curriculo_Matheus_Lobao_PT.pdf'
    },
    flagship: {
      sectionTitle: 'O que eu construo',
      badge: 'Case Study Principal',
      architecture: 'Arquitetura Multi-Tenant',
      status: '● Sistema em Produção',
      title: 'Krosmox SGR',
      tagline: 'ERP Multi-Sistema de Gestão Gastronômica e Engenharia Operacional',
      headline: 'Toda a sua operação em um único lugar, desde o estoque até a entrega do pedido.',
      subheadline: 'Mais do que um aplicativo isolado, o SGR é um ERP multi-sistema completo com acesso web via navegador e integração ao app de salão em Flutter (em desenvolvimento). Seu propósito central é descomplicar a vida dos garçons através de uma interface limpa, fluida e ergonômica, com foco absoluto em agilidade e eficiência — permitindo ainda que bar e cozinha faturem de forma 100% independente no mesmo salão.',
      demoUrl: 'https://sgr-demo.vercel.app/login',
      testDemoBtn: 'Testar Demo do SGR',
      demoLogin: 'lobao',
      demoPassword: '19051999',
      demoUserLabel: 'Usuário demo',
      demoPassLabel: 'Senha demo',
      demoAlert: 'Nota: O back-end desta versão de demonstração está hospedado na camada gratuita do Render. Caso esteja em repouso, a primeira requisição pode levar cerca de 1 minuto para acordar o servidor.',
      stats: [
        { value: '-15 min', label: 'Giro de Mesa', desc: 'Chega de garçom indo até a cozinha entregar comanda.' },
        { value: '4% a 7%', label: 'Economia Fiscal', desc: 'Segregação de monofásicos no Simples' },
        { value: 'Multi-CNPJ', label: 'Split de Pagamento', desc: 'Bar e cozinha faturam de forma independente em uma única transação.' },
        { value: '< 10 min', label: 'Treinamento', desc: 'Curva de aprendizado simples e descomplicada.' }
      ],
      pillarsTitle: 'Pilares de Engenharia Operacional',
      pillarsSubtitle: 'Clique para expandir cada pilar',
      pillars: [
        {
          number: '01',
          title: 'App do Garçom (Flutter • Em desenvolvimento)',
          subtitle: 'Interface limpa, fluida e focada em agilidade',
          description: 'Conectado diretamente ao núcleo do ERP web via API e WebSockets. Descomplica a rotina de salão com interface rápida a 60fps, alerta tátil de pedidos prontos no bolso, seletor de fatias para pizzas (4, 6, 8 e 12 fatias com cálculo automático), comandas individuais por pessoa e modo tela sempre acesa (Wake Lock).',
          tags: ['Flutter (Dev)', 'ERP Web Sync', 'Haptic Feedback', 'Comandas Individuais']
        },
        {
          number: '02',
          title: 'Split de Pagamentos Multi-CNPJ',
          subtitle: 'Fim da bitributação de Bar e Cozinha',
          description: 'Permite que Bar e Cozinha operem sob CNPJs distintos no mesmo salão. Em uma única transação no cartão ou Pix dinâmico, o valor da bebida é creditado na conta bancária do Bar e a comida na da Cozinha direto pelas adquirentes (Stone, PagBank, Mercado Pago). Zero intervenção manual.',
          tags: ['Split Payment', 'Multi-CNPJ', 'Stone SDK', 'Pix Dinâmico']
        },
        {
          number: '03',
          title: 'KDS (Monitor de Cozinha em Tempo Real)',
          subtitle: 'Eliminação de comandas de papel',
          description: 'Tema escuro de alta visibilidade projetado para iluminação industrial. Roteamento inteligente por praças de preparo (Bar, Quentes, Forno) com cronômetro integrado e alertas visuais de urgência após 20 minutos de espera.',
          tags: ['KDS Touch', 'Dark Theme Industrial', 'Roteamento de Praças', 'WebSockets']
        },
        {
          number: '04',
          title: 'Frente de Caixa (PDV) e Auditoria Financeira',
          subtitle: 'Controle auditável de numerário e fechamento seguro',
          description: 'Mecanismo de alta precisão e conformidade com calculadora automática de troco em tempo real, divisão de contas instantânea (2x, 3x, 4x, 5x pessoas), conferência cega de fechamento de caixa (o operador realiza a contagem física e o sistema faz o batimento com as transações registradas) e controle estrito de sangrias e cancelamentos.',
          tags: ['PDV Ágil', 'Auditoria de Caixa', 'Fechamento Cego', 'Divisão de Cotas']
        },
        {
          number: '05',
          title: 'Inteligência Fiscal e CMV Real',
          subtitle: 'Economia contábil comprovada',
          description: 'Segregação automática de produtos monofásicos (cervejas, refrigerantes e água) gerando relatórios diretos para contadores deduzirem PIS e COFINS no Simples Nacional, além de DRE gerencial com baixa automática de insumos por ficha técnica.',
          tags: ['Produtos Monofásicos', 'DRE Gerencial', 'CMV Real', 'Ficha Técnica']
        }
      ],
      cta: 'Conversar sobre o SGR'
    },
    krosmox: {
      sectionTitle: 'Krosmox e Ecossistema ERP',
      badge: 'Software Sob Medida • SaaS Multi-Tenant',
      siteBadge: 'Portal Oficial',
      siteTitle: 'Krosmox — Software Sob Medida',
      siteTagline: 'Software cortado à medida exata do seu negócio.',
      siteDesc: 'Desenvolvimento de software sob medida e diagnóstico de processos antes de qualquer linha de código. Conheça as soluções corporativas e produtos desenvolvidos no portal oficial.',
      siteUrl: 'https://krosmox.vercel.app/',
      visitSiteBtn: 'Conhecer krosmox.vercel.app',
      erpBadge: 'SaaS Multi-Tenant em Produção',
      erpTitle: 'KrosERP — Gestão Empresarial e Ordens de Serviço',
      erpTagline: 'Automação operacional, controle financeiro e inteligência de atendimento em Django.',
      erpDesc: 'Plataforma SaaS Multi-Tenant desenvolvida em Python e Django com isolamento estrito de dados por CompanyMiddleware e thread-local. Criado para empresas de serviços, manutenção e comércios que precisam de controle total de O.S., frente de caixa ágil e conciliação financeira.',
      featuresTitle: 'Módulos e Pilares Técnicos do KrosERP',
      features: [
        {
          title: 'Ordens de Serviço (O.S.) e Rastreabilidade',
          desc: 'Ciclo completo de atendimento (Orçamento ➔ Aprovação ➔ Execução ➔ Entrega), rastreamento por IMEI ou Número de Série, termos de garantia e impressão térmica direta (compatível com EPSON TM-T20X e HP).'
        },
        {
          title: 'Frente de Caixa (PDV) e Baixa em Tempo Real',
          desc: 'Terminal de vendas ágil com baixa automática de insumos e peças de reposição no estoque, emissão de recibos e integração nativa com o módulo financeiro.'
        },
        {
          title: 'Gestão Financeira Consolidada',
          desc: 'Controle de Contas a Pagar e a Receber, fluxo de caixa diário/mensal e DRE gerencial amarrado diretamente às receitas geradas pelo PDV e pelas O.S.'
        },
        {
          title: 'Automação via Bots (WhatsApp e Telegram)',
          desc: 'Notificações automáticas de status de O.S. e comprovantes via WhatsApp Bot (Evolution API), além de alertas operacionais para gestores via Telegram Bot.'
        },
        {
          title: 'Arquitetura e Segurança Zero Vulnerabilidades',
          desc: 'Isolamento de tenants por slug exclusivo (sem formulário público de login exposto a brute-force), sessão única global anti-compartilhamento e CAPTCHA criptográfico com Honeypot.'
        }
      ],
      techStack: [
        'Python',
        'Django',
        'PostgreSQL',
        'CompanyMiddleware',
        'Multi-Tenant SaaS',
        'Evolution API (WhatsApp)'
      ]
    },
    alsoBuilt: {
      sectionTitle: 'Também construí',
      allGithub: 'Ver todos no GitHub',
      projects: [
        {
          title: 'PDV e Gestão de Assistência Técnica',
          desc: 'Sistema backend para controle de ordens de serviço, clientes, estoque de peças e orçamentos.',
          language: 'Python',
          tech: 'Django • MySQL',
          url: 'https://github.com/omlobao/pdvassistencia'
        },
        {
          title: 'Flix API RESTful',
          desc: 'API completa em Django REST Framework para gerenciamento e catálogo de mídias, atores e avaliações com JWT.',
          language: 'Python',
          tech: 'Django REST Framework • JWT',
          url: 'https://github.com/omlobao/Flix-Api'
        },
        {
          title: 'Gestão de Veículos (Concessionária)',
          desc: 'Aplicação web elaborada no curso Django Master para controle de estoque, compradores e contratos.',
          language: 'Python',
          tech: 'Django • PostgreSQL',
          url: 'https://github.com/omlobao/Carros'
        },
        {
          title: 'Sistema de Triagem Médica (SENAI)',
          desc: 'Fluxo clínico de triagem de pacientes baseado no protocolo de gravidade Manchester e filas.',
          language: 'Python',
          tech: 'Python • Web',
          url: 'https://github.com/omlobao/Projeto-Triagem-'
        },
        {
          title: 'Gestão Hoteleira .NET',
          desc: 'Sistema em C# com regras de negócio para reservas de quartos, controle de diárias e check-in/out.',
          language: 'C#',
          tech: '.NET • SQL Server',
          url: 'https://github.com/omlobao/Hotel'
        },
        {
          title: 'Maui Mobile Auth',
          desc: 'Aplicação mobile multiplataforma (Android/iOS) em .NET MAUI demonstrando padrões MVVM e autenticação.',
          language: 'C#',
          tech: '.NET MAUI • MVVM',
          url: 'https://github.com/omlobao/MauiAppLogin'
        }
      ]
    },
    credentials: {
      sectionTitle: 'Certificações e Formação',
      badge: 'Credenciais',
      list: [
        {
          title: 'Pós-graduação em Arquitetura de Software',
          issuer: 'Faculdade Anhanguera (Especialização Lato Sensu)',
          year: 'Atual',
          status: 'Em andamento'
        },
        {
          title: 'Curso Livre: Administrador de Banco de Dados',
          issuer: 'SENAI Taguatinga - DF',
          year: '2026',
          status: 'Concluído',
          highlight: 'Modelagem conceitual, lógica, criação e administração de banco de dados MySQL (200H).'
        },
        {
          title: 'Curso Livre: Desenvolvedor Python',
          issuer: 'SENAI Taguatinga - DF',
          year: '2026',
          status: 'Concluído',
          highlight: 'Desenvolvimento de aplicações desktop e APIs com Python (200H).'
        },
        {
          title: 'Curso Livre: Desenvolvedor Django',
          issuer: 'SENAI Taguatinga - DF',
          year: '2026',
          status: 'Concluído',
          highlight: 'Desenvolvimento FullStack com framework Django (60H).'
        },
        {
          title: 'Análise e Desenvolvimento de Sistemas',
          issuer: 'Faculdade Estácio',
          year: '2023 – 2026',
          status: 'Concluído'
        },
        {
          title: 'Bacharelado em Sistemas de Informação',
          issuer: 'UNINASSAU (Cursado até o 5º semestre)',
          year: '2020 – 2022',
          status: 'Trancado',
          highlight: 'Sólida base em POO, Algoritmos e Estrutura de Dados.'
        },
        {
          title: 'Ensino Médio e Técnico em Informática',
          issuer: 'CETEP SISAL',
          year: '2016 – 2019',
          status: 'Formação Técnica'
        },
        {
          title: 'Certificação: Desenvolvimento Rápido em Python para Cloud, IoT e Big Data',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Concluído',
          highlight: 'Arquiteturas para microsserviços e processamento distribuído.'
        },
        {
          title: 'Certificação: Programação de Algoritmos Escaláveis',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Concluído',
          highlight: 'Complexidade de tempo/espaço (Big-O) e estruturas avançadas.'
        },
        {
          title: 'Certificação: Programação de Sistemas de Informação e Internet',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Concluído',
          highlight: 'Padrões de projeto, MVC/MVT, segurança HTTP e APIs REST.'
        },
        {
          title: 'Certificação: Programação para Dispositivos Móveis',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Concluído',
          highlight: 'Conceitos de ciclo de vida mobile e desenvolvimento de apps.'
        }
      ]
    },
    trajectory: {
      sectionTitle: 'Trajetória',
      badge: 'Experiência',
      list: [
        {
          role: 'Técnico em Informática e Dispositivos Móveis',
          company: 'Atuação Autônoma / Consultoria Técnica',
          location: 'Taguatinga — DF',
          period: 'Atual',
          bullets: [
            'Atendimento e consultoria direta a clientes e empresas, prestando suporte técnico especializado.',
            'Dimensionamento e montagem de computadores personalizados e estações de trabalho de acordo com carga de trabalho.',
            'Manutenção de Dispositivos Móveis (telas, baterias, conectores, placas, etc).'
          ]
        },
        {
          role: 'Instrutor e Técnico em Informática (Estágio)',
          company: '16º Batalhão da Polícia Militar — Projeto "Saber Digital"',
          location: 'Serrinha — BA',
          period: '2019',
          bullets: [
            'Instrutor no projeto social comunitário "Saber Digital", ministrando aulas de informática e manutenção de hardware.',
            'Capacitação direta de cerca de 70 alunos da comunidade ao longo de 6 meses de projeto.',
            'Organização pedagógica de turmas e manutenção preventiva dos equipamentos do laboratório.'
          ]
        },
        {
          role: 'Estagiário em Análise de Sistemas',
          company: '7Virtual Sistemas',
          location: 'Serrinha — BA',
          period: '2018',
          bullets: [
            'Investigação e diagnóstico de inconsistências em bancos de dados relacionais das aplicações de clientes da empresa.',
            'Triagem, análise de causas-raiz e documentação de relatórios técnicos de erros para os desenvolvedores.',
            'Suporte de segundo nível a rotinas fiscais e emissão de notas em clientes finais.'
          ]
        }
      ]
    },
    services: {
      sectionTitle: 'Como eu posso ajudar',
      cta: 'Solicitar proposta',
      list: [
        {
          number: '01',
          title: 'Desenvolvimento Back-End e APIs REST',
          desc: 'Construção de APIs robustas, documentadas e performáticas com Python (Django / DRF) ou C# .NET. Foco em arquitetura limpa, segurança, autenticação e regras de negócio complexas.',
          deliverables: ['APIs RESTful e GraphQL', 'Autenticação JWT / OAuth2', 'Documentação OpenAPI/Swagger']
        },
        {
          number: '02',
          title: 'Modelagem e Administração de Bancos de Dados',
          desc: 'Estruturação de bancos de dados relacionais (PostgreSQL, MySQL, SQL Server) com garantia de integridade referencial, consultas otimizadas e arquiteturas multi-tenant seguras.',
          deliverables: ['Modelagem Relacional (DER)', 'Otimização de Queries e Índices', 'Estratégias de Multi-Tenancy']
        },
        {
          number: '03',
          title: 'Sistemas Comerciais e Split de Pagamento',
          desc: 'Implementação de sistemas para salões, cozinhas, oficinas e comércios com fluxos de split de pagamento (Stone, PagBank, Pix), emissão e regras de conciliação financeira.',
          deliverables: ['Split de Pagamentos Multi-CNPJ', 'Integração de PDV e Smart POS', 'Fechamento Cego de Caixa']
        },
        {
          number: '04',
          title: 'Análise de Requisitos e Consultoria Técnica',
          desc: 'Mapeamento de gargalos em processos operacionais analógicos ou sistemas legados lentos, transformando dores reais de negócio em arquiteturas de software precisas e enxutas.',
          deliverables: ['Levantamento e Especificação Técnica', 'Auditoria de Gargalos de Hardware e Rede', 'Diagnóstico de Sistemas']
        }
      ]
    },
    footer: {
      title: 'Vamos construir algo sólido juntos?',
      desc: 'Aberto a novas oportunidades como Desenvolvedor Back-End, projetos sob demanda ou consultorias de arquitetura de banco de dados e sistemas fiscais.',
      whatsappBtn: 'Conversar no WhatsApp',
      emailBtn: 'Enviar E-mail',
      downloadCvBtn: 'Baixar CV (PDF)'
    }
  },

  en: {
    nav: {
      home: 'Home',
      projects: 'SGR',
      krosmox: 'Krosmox and ERP',
      credentials: 'Education',
      trajectory: 'Experience',
      services: 'Services',
      contact: 'Get in Touch',
      top: 'Top'
    },
    profile: {
      role: 'Back-End Python Developer • Postgraduate Student in Software Architecture',
      locationLabel: 'Location',
      locationVal: 'Taguatinga-DF, Brazil',
      timeLabel: 'Local Time',
      focusLabel: 'Core Stack',
      focusVal: 'Python • PostgreSQL • Django',
      bio: 'Back-End Python Developer with expertise in relational databases and infrastructure, graduated in Systems Analysis and Development, and postgraduate student in Software Engineering.',
      quote: 'My hobby is analyzing problems and engineering technical solutions to solve them.',
      quoteOrigin: '— the mindset that gave birth to Krosmox SGR.',
      copyEmail: 'Copy e-mail',
      emailCopied: 'E-mail copied!',
      downloadCv: 'Download Resume (PDF)',
      cvUrl: './matheus-english-cv.pdf',
      cvFileName: 'Matheus_Lobao_Resume_EN.pdf'
    },
    flagship: {
      sectionTitle: 'What I Build',
      badge: 'Flagship Case Study',
      architecture: 'Multi-Tenant Architecture',
      status: '● Live in Production',
      title: 'Krosmox SGR',
      tagline: 'Multi-System Gastronomy ERP and Operational Engineering',
      headline: 'Your entire operation in one place, from inventory to order delivery.',
      subheadline: 'Far beyond a standalone mobile app, SGR is a complete multi-system ERP accessed via web browser and integrated with a dedicated floor waiter app in Flutter (in active development). Its core mission is to streamline floor operations for waitstaff through a clean, ultra-fluid, and ergonomic interface with total focus on speed and efficiency — while empowering bar and kitchen to bill 100% independently on the same dining floor via multi-company payment split.',
      demoUrl: 'https://sgr-demo.vercel.app/login',
      testDemoBtn: 'Test SGR Live Demo',
      demoLogin: 'lobao',
      demoPassword: '19051999',
      demoUserLabel: 'Demo User',
      demoPassLabel: 'Demo Pass',
      demoAlert: 'Note: The back-end for this demo is hosted on Render free tier. If the instance is sleeping, the initial request may take around 1 minute to wake up the server.',
      stats: [
        { value: '-15 min', label: 'Table Turnaround', desc: 'No more waitstaff walking to the kitchen to deliver orders.' },
        { value: '4% to 7%', label: 'Tax Savings', desc: 'Automatic single-phase tax segregation' },
        { value: 'Multi-CNPJ', label: 'Payment Split', desc: 'Bar and kitchen billed independently in a single guest transaction.' },
        { value: '< 10 min', label: 'Onboarding', desc: 'Simple, frictionless learning curve.' }
      ],
      pillarsTitle: 'Operational Engineering Pillars',
      pillarsSubtitle: 'Click any pillar to expand details',
      pillars: [
        {
          number: '01',
          title: 'Waiter Mobile App (Flutter • In Development)',
          subtitle: 'Clean, fluid interface built for floor speed',
          description: 'Directly synchronized with the web ERP core via REST APIs and WebSockets. Built to eliminate operational friction with a rapid 60fps interface, in-pocket haptic vibration alerts for ready orders, proportional pizza slice selector (4, 6, 8, 12 slices), individual guest tabs, and screen Wake-Lock mode.',
          tags: ['Flutter (Dev)', 'ERP Web Sync', 'Haptic Feedback', 'Guest Tabs']
        },
        {
          number: '02',
          title: 'Multi-Company Payment Split Engine',
          subtitle: 'Ending bar and kitchen double taxation',
          description: 'Allows venue owners to legally operate Food and Drinks under separate corporate entities on the same floor. In a single card swipe or dynamic Pix QR, food revenue routes to the Kitchen bank account and drinks route directly to the Bar bank account via gateway APIs (Stone, PagBank, Mercado Pago). Zero manual accounting.',
          tags: ['Payment Split', 'Multi-Company', 'Stone SDK', 'Dynamic Pix']
        },
        {
          number: '03',
          title: 'Real-Time KDS (Kitchen Display System)',
          subtitle: 'Eliminating paper tickets',
          description: 'High-contrast ergonomic dark theme engineered for industrial kitchen lighting. Station-based smart routing (Bar, Grill, Pizza Oven) with live cook timers and visual alert escalation after 20 minutes of queue time.',
          tags: ['KDS Touch', 'Industrial Dark Theme', 'Station Routing', 'WebSockets']
        },
        {
          number: '04',
          title: 'Point of Sale (POS) and Financial Audit',
          subtitle: 'Audited cash management and secure register reconciliation',
          description: 'High-precision, compliance-focused POS engine featuring real-time change calculation, instant bill splitting (2x, 3x, 4x, 5x guest quotas), blind register closing (cashiers enter physical counts before expected balances are verified), and strict audit trails for cash pulls and cancellations.',
          tags: ['Fast POS', 'Cash Audit', 'Blind Register Close', 'Bill Split']
        },
        {
          number: '05',
          title: 'Fiscal Intelligence and Real COGS',
          subtitle: 'Software that pays for itself in tax savings',
          description: 'Automatic classification of single-phase tax beverage items (beers, sodas, water) delivering ready-made deduction reports to accountants for Simples Nacional, paired with real Cost of Goods Sold (COGS) inventory depletion per recipe.',
          tags: ['Tax Deductions', 'Financial Reports', 'Recipe Costing', 'COGS']
        }
      ],
      cta: 'Discuss SGR Architecture'
    },
    krosmox: {
      sectionTitle: 'Krosmox and ERP Ecosystem',
      badge: 'Custom Software • Multi-Tenant SaaS',
      siteBadge: 'Official Portal',
      siteTitle: 'Krosmox — Tailor-Made Software',
      siteTagline: 'Software cut to the exact operational measure of your business.',
      siteDesc: 'Custom software engineering and operational bottleneck diagnosis before writing a single line of code. Explore production-ready software solutions on the official portal.',
      siteUrl: 'https://krosmox.vercel.app/',
      visitSiteBtn: 'Visit krosmox.vercel.app',
      erpBadge: 'Production Multi-Tenant SaaS',
      erpTitle: 'KrosERP — Enterprise Management and Work Orders',
      erpTagline: 'Operational automation, financial control, and bot messaging powered by Django.',
      erpDesc: 'A robust single-database / multi-tenant SaaS platform built in Python and Django, featuring strict data isolation via CompanyMiddleware and thread-local scoping. Engineered for service companies, maintenance repair shops, and commercial venues requiring comprehensive work order lifecycles, fast POS checkout, and financial auditing.',
      featuresTitle: 'KrosERP Modules and Technical Architecture',
      features: [
        {
          title: 'Work Orders (O.S.) and Asset Traceability',
          desc: 'Complete service lifecycle (Quote ➔ Approval ➔ In Progress ➔ Completed ➔ Delivered), IMEI/serial number tracking, custom warranty contracts, and direct thermal receipt printing (EPSON TM-T20X, HP LaserJet).'
        },
        {
          title: 'Point of Sale (POS) and Real-Time Inventory Depletion',
          desc: 'Responsive sales terminal with instant real-time inventory deduction for spare parts and merchandise, paired with receipt generation linked to financial ledgers.'
        },
        {
          title: 'Consolidated Financial Management',
          desc: 'Audited accounts payable and receivable, daily/monthly cash flows, and executive P&L financial reports tied directly to POS transactions and closed work orders.'
        },
        {
          title: 'Bot Automation (WhatsApp and Telegram)',
          desc: 'Automated customer status updates and receipts delivered via WhatsApp Bot (Evolution API), along with instant managerial incident alerts via Telegram Bot.'
        },
        {
          title: 'Zero-Vulnerability Security Architecture',
          desc: 'Company-specific slug routing with no public login forms exposed to brute-force attacks, global single-session anti-account sharing, and cryptographic icon CAPTCHAs with honeypot traps.'
        }
      ],
      techStack: [
        'Python',
        'Django',
        'PostgreSQL',
        'CompanyMiddleware',
        'Multi-Tenant SaaS',
        'Evolution API (WhatsApp)'
      ]
    },
    alsoBuilt: {
      sectionTitle: 'Also Built',
      allGithub: 'View all on GitHub',
      projects: [
        {
          title: 'Repair Shop POS and Work Orders',
          desc: 'Backend management system for repair tickets, technical diagnostic records, replacement parts inventory, and budget estimates.',
          language: 'Python',
          tech: 'Django • MySQL',
          url: 'https://github.com/omlobao/pdvassistencia'
        },
        {
          title: 'Flix RESTful API',
          desc: 'Production-ready REST API built with Django REST Framework for media cataloging, actor relations, pagination, and JWT authentication.',
          language: 'Python',
          tech: 'Django REST Framework • JWT',
          url: 'https://github.com/omlobao/Flix-Api'
        },
        {
          title: 'Car Dealership Management',
          desc: 'Full-featured web application engineered during the Django Master program for vehicle stock, buyer tracking, and sales agreements.',
          language: 'Python',
          tech: 'Django • PostgreSQL',
          url: 'https://github.com/omlobao/Carros'
        },
        {
          title: 'Medical Triage Protocol (SENAI)',
          desc: 'Clinical triage system categorizing emergency patient severity based on the Manchester Protocol and dynamic queues.',
          language: 'Python',
          tech: 'Python • Web',
          url: 'https://github.com/omlobao/Projeto-Triagem-'
        },
        {
          title: 'Hotel Management .NET',
          desc: 'C# desktop application managing room inventory, reservation lifecycles, guest billing, and check-in/out workflows.',
          language: 'C#',
          tech: '.NET • SQL Server',
          url: 'https://github.com/omlobao/Hotel'
        },
        {
          title: 'Maui Mobile Auth',
          desc: 'Cross-platform mobile application (Android/iOS) in .NET MAUI implementing MVVM architecture and secure native authentication.',
          language: 'C#',
          tech: '.NET MAUI • MVVM',
          url: 'https://github.com/omlobao/MauiAppLogin'
        }
      ]
    },
    credentials: {
      sectionTitle: 'Credentials and Education',
      badge: 'Academic and Certifications',
      list: [
        {
          title: 'Postgraduate in Software Architecture',
          issuer: 'Anhanguera University (Postgraduate Specialization)',
          year: 'Present',
          status: 'In progress'
        },
        {
          title: 'Database Administrator (DBA)',
          issuer: 'SENAI Taguatinga - DF',
          year: '2026',
          status: 'Completed',
          highlight: 'Conceptual and logical modeling, creation and administration of MySQL databases (200H).'
        },
        {
          title: 'Python Developer Course',
          issuer: 'SENAI Taguatinga - DF',
          year: '2026',
          status: 'Completed',
          highlight: 'Desktop application development and RESTful APIs with Python (200H).'
        },
        {
          title: 'Django Developer Course',
          issuer: 'SENAI Taguatinga - DF',
          year: '2026',
          status: 'Completed',
          highlight: 'Full-stack web development with the Django framework (60H).'
        },
        {
          title: 'Systems Analysis and Development',
          issuer: 'Faculdade Estácio',
          year: '2023 – 2026',
          status: 'Completed'
        },
        {
          title: 'Bachelor in Information Systems',
          issuer: 'UNINASSAU (Completed up to 5th semester)',
          year: '2020 – 2022',
          status: 'Deferred',
          highlight: 'Strong foundation in OOP, Algorithms, and Data Structures.'
        },
        {
          title: 'High School and Technical Degree in IT',
          issuer: 'CETEP SISAL',
          year: '2016 – 2019',
          status: 'Technical Degree'
        },
        {
          title: 'Certification: Python for Cloud, IoT and Big Data',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Completed',
          highlight: 'Architectures for microservices and distributed processing.'
        },
        {
          title: 'Certification: Scalable Algorithm Programming',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Completed',
          highlight: 'Time and space complexity (Big-O notation) and advanced data structures.'
        },
        {
          title: 'Certification: Information Systems and Internet Programming',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Completed',
          highlight: 'Design patterns, MVC/MVT architecture, HTTP security, and RESTful APIs.'
        },
        {
          title: 'Certification: Mobile Application Programming',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Completed',
          highlight: 'Mobile lifecycle architecture and app development concepts.'
        }
      ]
    },
    trajectory: {
      sectionTitle: 'Trajectory',
      badge: 'Experience',
      list: [
        {
          role: 'Computer and Mobile Hardware Technician',
          company: 'Independent Consulting / Freelancer',
          location: 'Taguatinga — DF, Brazil',
          period: 'Present',
          bullets: [
            'Direct technical consulting and specialized support for individual clients and commercial businesses.',
            'Custom PC sizing, hardware assembly, and dedicated workstation engineering tailored to specific workloads.',
            'Mobile hardware maintenance and component-level repairs (screens, batteries, charging ports, circuit boards, etc.).'
          ]
        },
        {
          role: 'IT Instructor and Systems Intern',
          company: '16th Military Police Battalion — "Saber Digital" Project',
          location: 'Serrinha — BA, Brazil',
          period: '2019',
          bullets: [
            'Lead instructor for the community social program "Saber Digital", teaching computer maintenance and hardware basics.',
            'Trained approximately 70 students from the local community over a 6-month period.',
            'Curriculum development, lab hardware maintenance, and direct technical workshop support.'
          ]
        },
        {
          role: 'Systems Analysis Intern',
          company: '7Virtual Sistemas',
          location: 'Serrinha — BA, Brazil',
          period: '2018',
          bullets: [
            'Investigated and diagnosed data integrity issues and SQL errors in enterprise ERP applications.',
            'Documented bug reports and root-cause analyses for senior development teams.',
            'Tier-2 customer support for tax calculation and invoice closing workflows.'
          ]
        }
      ]
    },
    services: {
      sectionTitle: 'How I Can Help',
      cta: 'Get a proposal',
      list: [
        {
          number: '01',
          title: 'Back-End Development and REST APIs',
          desc: 'High-performance, well-documented APIs built with Python (Django / DRF) or C# .NET. Clean architecture, JWT/OAuth2 security, and complex business logic.',
          deliverables: ['RESTful and GraphQL APIs', 'JWT / OAuth2 Authentication', 'OpenAPI / Swagger Specs']
        },
        {
          number: '02',
          title: 'Database Modeling and Administration',
          desc: 'Relational database architecture (PostgreSQL, MySQL, SQL Server) with referential integrity, optimized query execution plans, and multi-tenant isolation.',
          deliverables: ['ERD Schema Architecture', 'Query Tuning and Indexing', 'Multi-Tenant Strategies']
        },
        {
          number: '03',
          title: 'Commercial Systems and Payment Splitting',
          desc: 'End-to-end payment integrations for restaurants, retail, and service shops with real-time multi-account splits (Stone, PagBank, Pix) and blind register closing.',
          deliverables: ['Multi-Company Split Engine', 'Smart POS and Counter Integration', 'Blind Register Balancing']
        },
        {
          number: '04',
          title: 'Requirements Engineering and Tech Consulting',
          desc: 'Diagnosing bottlenecks in manual processes or legacy architectures, transforming real business pain points into lean, reliable software designs.',
          deliverables: ['Technical Specification Specs', 'Hardware and Network Auditing', 'Architecture Modernization']
        }
      ]
    },
    footer: {
      title: 'Ready to build something solid together?',
      desc: 'Open to new opportunities as a Back-End Developer, specialized contract work, or technical consulting in database and fiscal systems.',
      whatsappBtn: 'Message on WhatsApp',
      emailBtn: 'Send E-mail',
      downloadCvBtn: 'Download Resume (PDF)'
    }
  }
};
