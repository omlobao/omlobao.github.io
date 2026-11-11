export const translations = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'SGR',
      krosmox: 'Krosmox e ERP',
      credentials: 'Formação',
      trajectory: 'Experiência',
      services: 'Serviços',
      contact: 'Contatar',
      top: 'Topo'
    },
    profile: {
      role: 'Analista de Sistemas • Desenvolvedor Full Stack e Back-End Python • Pós-graduando em Engenharia de Software Full Stack',
      locationLabel: 'Onde vivo',
      locationVal: 'Taguatinga-DF, Brasil',
      timeLabel: 'Hora Local',
      focusLabel: 'Foco Técnico',
      focusVal: 'Python • PostgreSQL • Django',
      bio: 'Desenvolvedor Full Stack e Back-End Python com conhecimentos em bancos de dados relacionais, APIs RESTful e infraestrutura, graduado em Análise e Desenvolvimento de Sistemas e Pós-graduando em Engenharia de Software Full Stack.',
      quote: 'Meu passatempo é analisar problemas e pensar em soluções técnicas para resolvê-los.',
      quoteOrigin: '— visão que deu origem ao Krosmox SGR.',
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
      tagline: 'ERP de Gestão Gastronômica e Engenharia Operacional',
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
        { value: 'Praticidade', label: 'O Garçom não é o papa-léguas', desc: 'Chega de garçom indo até a cozinha entregar comanda.' },
        { value: 'Fiscal', label: 'Impostos e Tributos', desc: 'Compatibilidade com todos os regimes tributários.' },
        { value: 'Independência', label: 'Split de Pagamento', desc: 'Bar e cozinha faturam de forma independente em uma única transação.' },
        { value: 'Treinamento', label: 'Descomplicado', desc: 'Curva de aprendizado simples e descomplicada.' }
      ],
      pillarsTitle: 'Alguns módulos do Sistema:',
      pillarsSubtitle: 'Clique para expandir',
      pillars: [
        {
          number: '01',
          title: 'App do Garçom (Flutter • Em desenvolvimento)',
          subtitle: 'Interface limpa, fluida e focada em agilidade',
          description: 'Conectado diretamente ao núcleo do ERP web via API e WebSockets. Descomplica a rotina de salão com interface rápida, alerta tátil de pedidos prontos no bolso, seletor de fatias para pizzas (4, 6, 8 e 12 fatias com cálculo automático), comandas individuais por pessoa e modo tela sempre acesa (Wake Lock).',
          tags: ['Flutter', 'ERP Web Sync', 'Haptic Feedback', 'Comandas Individuais']
        },
        {
          number: '02',
          title: 'Split de Pagamentos E Integrações com APIs de pagamentos',
          subtitle: 'Fim do uso de várias maquininhas',
          description: 'Permite que Bar e Restaurante operem sob CNPJs distintos no mesmo salão. Em uma única transação no cartão ou Pix, o valor é dividido entre os estabelecimentos conforme a configuração.',
          tags: ['Split Payment', 'Integração com APis de Pagamento', 'Pix']
        },
        {
          number: '03',
          title: 'KDS (Monitor de Cozinha em Tempo Real)',
          subtitle: 'Eliminação de comandas de papel',
          description: 'Tema escuro de alta visibilidade projetado para ambientes iluminados. Roteamento inteligente por praças de preparo (Bar, Cozinha, Pizzaria) com cronômetro integrado e alertas visuais de urgência após 20 minutos de espera.',
          tags: ['KDS Touch', 'KANBAN', 'Roteamento de Praças', 'Comandas']
        },
        {
          number: '04',
          title: 'Frente de Caixa (PDV) e Auditoria Financeira',
          subtitle: 'Controle auditável de numerário e fechamento seguro',
          description: 'Mecanismo de alta precisão e conformidade com calculadora automática de troco em tempo real, divisão de contas instantânea (2x, 3x, 4x, 5x pessoas), conferência cega de fechamento de caixa (o operador realiza a contagem física e o sistema faz o batimento com as transações registradas) e controle estrito de sangrias e cancelamentos.',
          tags: ['PDV', 'Auditoria de Caixa', 'Divisão de Cotas']
        },
        {
          number: '05',
          title: 'Inteligência Fiscal',
          subtitle: 'O seu contador vai te agradecer por isso.',
          description: 'Segregação automática de produtos monofásicos (cervejas, refrigerantes e água) gerando relatórios diretos para contadores deduzirem PIS e COFINS no Simples Nacional, além de DRE gerencial com baixa automática de insumos por ficha técnica.',
          tags: ['Produtos Monofásicos', 'DRE Gerencial', 'CMV Real', 'Ficha Técnica']
        },
        {
          number: '06',
          title: 'Controle de Estoque e Fichas Técnicas',
          subtitle: 'Baixa fracionada de insumos e reposição preditiva',
          description: 'Desdobramento técnico de cada prato em insumos fracionados (gramas e mililitros). Cada pedido fechado no salão realiza baixa atômica no banco de dados, calculando o CMV teórico vs. realizado, alertando sobre estoque mínimo e eliminando desperdícios operacionais.',
          tags: ['Baixa Atômica', 'Ficha Técnica Viva', 'CMV Teórico vs Real', 'Curva ABC', 'Alerta de Reposição']
        },
        {
          number: '07',
          title: 'Inteligência Artificial e Relatórios Detalhados',
          subtitle: 'Grok AI e Análise Preditiva de Dados',
          description: 'Módulo de inteligência analítica com Grok AI que cruza histórico de vendas, sazonalidade e consumo de ingredientes para antecipar demandas e gerar relatórios gerenciais e sugestões de compra em tempo real.',
          tags: ['Inteligência Artificial', 'Grok AI', 'Data Analytics', 'Previsão de Demanda', 'Insights Executivos']
        }
      ],
      cta: 'Conversar sobre o SGR'
    },
    krosmox: {
      sectionTitle: 'Krosmox e Ecossistema ERP',
      badge: 'Software Sob Medida • SaaS Multi-Tenant',
      siteBadge: 'StartUp',
      siteTitle: 'Krosmox — Software Sob Medida',
      siteTagline: 'Software à medida exata do seu negócio.',
      siteDesc: 'Desenvolvimento de software sob medida e diagnóstico de processos antes de qualquer linha de código. Conheça as soluções corporativas e produtos desenvolvidos no portal oficial.',
      siteUrl: 'https://krosmox.vercel.app/',
      visitSiteBtn: 'Conhecer krosmox.vercel.app',
      erpBadge: 'ERP Assistência Técnica',
      erpTitle: 'KrosERP — Gestão Empresarial e Ordens de Serviço',
      erpTagline: 'Automação operacional, controle financeiro e inteligência de atendimento em Django.',
      erpDesc: 'Plataforma ERP desenvolvida em Python e Django com isolamento estrito de dados por CompanyMiddleware e thread-local. Criado para empresas de serviços, manutenção e comércios que precisam de controle total de O.S., frente de caixa ágil e conciliação financeira.',
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
          title: 'Arquitetura e Segurança',
          desc: 'Isolamento de tenants por slug exclusivo (sem formulário público de login exposto a brute-force), sessão única global anti-compartilhamento e CAPTCHA criptográfico com Honeypot.'
        }
      ],
      techStack: [
        'Python',
        'Django',
        'PostgreSQL',
        'Multi-Tenant',
        'Atendimento Automático (WhatsApp)'
      ]
    },
    alsoBuilt: {
      sectionTitle: 'Projetos de Estudo',
      allGithub: 'Ver todos no GitHub',
      projects: [
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
          title: 'Banco de Dados Spotify',
          desc: 'Projeto do Curso Administrador de banco de dados do SENAI-DF',
          language: 'SQL',
          tech: 'SQL Server',
          url: 'https://github.com/omlobao/Banco-de-Dados-Spotify'
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
      sectionTitle: 'Formação Acadêmica e Certificações',
      badge: 'Credenciais',
      list: [
        {
          title: 'Pós-Graduação em Engenharia de Software Full Stack',
          issuer: 'Faculdade Anhanguera',
          year: '10/2027',
          status: 'Em andamento',
          highlight: 'Arquitetura de software, microsserviços, cloud computing e engenharia full stack.'
        },
        {
          title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          issuer: 'Faculdade Estácio',
          year: '2023 – 2026',
          status: 'Graduação',
          highlight: 'Engenharia de requisitos, modelagem de sistemas, POO e ciclo de vida de software.'
        },
        {
          title: 'Bacharelado em Sistemas de Informação',
          issuer: 'UNINASSAU (Cursado até o 5º semestre)',
          year: '2020 – 2022',
          status: 'Ensino Superior',
          highlight: 'Sólida base acadêmica em algoritmos, estrutura de dados e bancos de dados.'
        },
        {
          title: 'Ensino Médio Técnico em Informática',
          issuer: 'CETEP-SISAL Serrinha - BA',
          year: '2016 – 2019',
          status: 'Formação Técnica',
          highlight: 'Fundamentos de programação, arquitetura de hardware e redes de computadores.'
        },
        {
          title: 'Certificação: Programação de Algoritmos Escaláveis',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Certificação',
          highlight: 'Complexidade de tempo/espaço (Big-O), estruturas de dados avançadas e algoritmos eficientes.'
        },
        {
          title: 'Certificação: Programação para Internet',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Certificação',
          highlight: 'Protocolos web, segurança HTTP, APIs REST e desenvolvimento web moderno.'
        },
        {
          title: 'Certificação: Desenvolvimento Rápido de Aplicações em Python para Cloud, IoT e BigData',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Certificação',
          highlight: 'Arquiteturas para microsserviços, integração em nuvem e processamento escalável em Python.'
        },
        {
          title: 'Certificação: Programação de Sistemas de Informação',
          issuer: 'Faculdade Estácio',
          year: '2024',
          status: 'Certificação',
          highlight: 'Padrões de projeto, modelagem orientada a objetos e integração de sistemas corporativos.'
        },
        {
          title: 'Curso Livre: Administrador de Banco de Dados',
          issuer: 'SENAI Taguatinga - DF',
          year: '2024',
          status: 'Curso Livre',
          highlight: 'Modelagem conceitual, lógica e física, queries complexas, triggers, views, functions e procedures (200H).'
        }
      ]
    },
    trajectory: {
      sectionTitle: 'Experiência',
      badge: 'Carreira',
      list: [
        {
          role: 'Desenvolvedor Full Stack',
          company: 'Atuação Autônoma / Projetos Independentes',
          location: 'Taguatinga — DF',
          period: '2025 — Atual',
          bullets: [
            'Desenvolvimento de aplicações multiplataforma de ponta a ponta com base em Django Rest-Framework e React / React Native.',
            'Concepção de arquiteturas escaláveis de APIs RESTful com autenticação segura JWT, Webhooks e integração de meios de pagamento.',
            'Modelagem e otimização de bancos de dados relacionais (PostgreSQL, MySQL) com foco em alta performance e integridade transacional.'
          ]
        },
        {
          role: 'Técnico em Informática e Dispositivos Móveis',
          company: 'Atuação Autônoma / Consultoria Técnica',
          location: 'Taguatinga — DF',
          period: '2015 — Atual',
          bullets: [
            'Manutenção técnica especializada, diagnóstico e suporte em notebooks, computadores e estações de trabalho.',
            'Reparo avançado de placas eletrônicas, substituição de componentes SMD/BGA e recuperação de dispositivos móveis.',
            'Dimensionamento, montagem e consultoria técnica personalizada de hardware para clientes e empresas.'
          ]
        },
        {
          role: 'Professor e Instrutor de Informática',
          company: '16º Batalhão da Polícia Militar — Projeto "Saber Digital"',
          location: 'Serrinha — BA',
          period: '2019',
          bullets: [
            'Instrutor no projeto social comunitário "Saber Digital", ministrando aulas de informática, sistemas operacionais e manutenção.',
            'Organização pedagógica de novas turmas e elaboração de conteúdos didáticos para cerca de 70 alunos da comunidade.',
            'Suporte técnico e manutenção preventiva em todas as máquinas e infraestrutura de rede do laboratório.'
          ]
        },
        {
          role: 'Estagiário em Análise de Sistemas',
          company: '7Virtual Sistemas',
          location: 'Serrinha — BA',
          period: '2018',
          bullets: [
            'Diagnóstico e reporte de falhas e inconsistências em consultas no banco de dados relacional.',
            'Triagem de bugs, análise de causas-raiz e geração de relatórios técnicos para a equipe de desenvolvimento.',
            'Suporte técnico operacional de segundo nível e atendimento direto ao usuário final.'
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
      role: 'Systems Analyst • Full Stack and Back-End Python Developer • Postgraduate Student in Full Stack Software Engineering',
      locationLabel: 'Location',
      locationVal: 'Taguatinga-DF, Brazil',
      timeLabel: 'Local Time',
      focusLabel: 'Core Stack',
      focusVal: 'Python • PostgreSQL • Django',
      bio: 'Full Stack and Back-End Python Developer with expertise in relational databases, RESTful APIs, and infrastructure, graduated in Systems Analysis and Development, and postgraduate student in Full Stack Software Engineering.',
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
      tagline: 'Gastronomy Management ERP and Operational Engineering',
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
        { value: 'Efficiency', label: 'Waitstaff is Not the Road Runner', desc: 'No more servers running back and forth to the kitchen.' },
        { value: 'Tax & Fiscal', label: 'Taxes and Compliance', desc: 'Fully compliant with all tax and fiscal regimes.' },
        { value: 'Independence', label: 'Payment Split', desc: 'Bar and kitchen billed independently in a single transaction.' },
        { value: 'Onboarding', label: 'Streamlined', desc: 'Simple, frictionless learning curve for new staff.' }
      ],
      pillarsTitle: 'Operational Engineering Pillars',
      pillarsSubtitle: 'Click any pillar to expand details',
      pillars: [
        {
          number: '01',
          title: 'Waiter Mobile App (Flutter • In Development)',
          subtitle: 'Clean, fluid interface built for floor speed',
          description: 'Directly synchronized with the web ERP core via REST APIs and WebSockets. Built to eliminate operational friction with a clean, fast interface, in-pocket haptic vibration alerts for ready orders, proportional pizza slice selector (4, 6, 8, and 12 slices with automatic calculation), individual guest tabs, and screen Wake-Lock mode.',
          tags: ['Flutter (Dev)', 'ERP Web Sync', 'Haptic Feedback', 'Guest Tabs']
        },
        {
          number: '02',
          title: 'Payment Split and Payment Gateway Integrations',
          subtitle: 'No more juggling multiple card terminals',
          description: 'Allows Bar and Restaurant to operate under distinct corporate entities on the same dining floor. In a single card swipe or Pix transaction, revenue is seamlessly divided between the establishments according to configured rules.',
          tags: ['Split Payment', 'Payment Gateway Integration', 'Pix']
        },
        {
          number: '03',
          title: 'Real-Time KDS (Kitchen Display System)',
          subtitle: 'Eliminating paper tickets',
          description: 'High-contrast ergonomic dark theme engineered for brightly lit environments. Station-based smart routing (Bar, Kitchen, Pizza Station) with live cook timers and visual alert escalation after 20 minutes of queue time.',
          tags: ['KDS Touch', 'KANBAN', 'Station Routing', 'Order Slips']
        },
        {
          number: '04',
          title: 'Point of Sale (POS) and Financial Audit',
          subtitle: 'Audited cash management and secure register reconciliation',
          description: 'High-precision, compliance-focused POS engine featuring real-time change calculation, instant bill splitting (2x, 3x, 4x, 5x guest quotas), blind register closing (cashiers enter physical counts before expected balances are verified), and strict audit trails for cash pulls and cancellations.',
          tags: ['POS', 'Cash Audit', 'Bill Split']
        },
        {
          number: '05',
          title: 'Fiscal Intelligence',
          subtitle: 'Your accountant will thank you for this.',
          description: 'Automatic classification of single-phase tax beverage items (beers, sodas, water) delivering ready-made deduction reports to accountants for Simples Nacional, paired with real Cost of Goods Sold (COGS) inventory depletion per recipe.',
          tags: ['Tax Deductions', 'Financial Reports', 'Recipe Costing', 'COGS']
        },
        {
          number: '06',
          title: 'Inventory Control and Technical Recipe Costing',
          subtitle: 'Fractional ingredient depletion and predictive reordering',
          description: 'Technical breakdown of each menu item into fractional ingredients (grams and milliliters). Every dispatched order triggers atomic stock depletion in the database, tracking theoretical vs. real COGS, signaling minimum reorder points, and preventing operational food waste.',
          tags: ['Atomic Depletion', 'Dynamic Recipe Costing', 'Theoretical vs Real COGS', 'ABC Curve', 'Reorder Alerts']
        },
        {
          number: '07',
          title: 'Artificial Intelligence and Detailed Reports',
          subtitle: 'Grok AI and Predictive Data Analytics',
          description: 'Analytical intelligence engine powered by Grok AI cross-referencing sales time-series, operational history, and ingredient consumption to forecast demand and generate comprehensive real-time executive reports.',
          tags: ['Artificial Intelligence', 'Grok AI', 'Data Analytics', 'Demand Forecasting', 'Executive Insights']
        }
      ],
      cta: 'Discuss SGR Architecture'
    },
    krosmox: {
      sectionTitle: 'Krosmox and ERP Ecosystem',
      badge: 'Custom Software • Multi-Tenant SaaS',
      siteBadge: 'StartUp',
      siteTitle: 'Krosmox — Tailor-Made Software',
      siteTagline: 'Software tailored to the exact measure of your business.',
      siteDesc: 'Custom software engineering and operational bottleneck diagnosis before writing a single line of code. Explore production-ready software solutions on the official portal.',
      siteUrl: 'https://krosmox.vercel.app/',
      visitSiteBtn: 'Visit krosmox.vercel.app',
      erpBadge: 'ERP Technical Service',
      erpTitle: 'KrosERP — Enterprise Management and Work Orders',
      erpTagline: 'Operational automation, financial control, and bot messaging powered by Django.',
      erpDesc: 'ERP platform built with Python and Django featuring strict data isolation via CompanyMiddleware and thread-local scoping. Engineered for service companies, maintenance repair shops, and retailers requiring comprehensive work order management, fast POS checkout, and financial reconciliation.',
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
          title: 'Architecture and Security',
          desc: 'Company-specific slug routing with no public login forms exposed to brute-force attacks, global single-session anti-account sharing, and cryptographic icon CAPTCHAs with honeypot traps.'
        }
      ],
      techStack: [
        'Python',
        'Django',
        'PostgreSQL',
        'Multi-Tenant',
        'Automated Customer Service (WhatsApp)'
      ]
    },
    alsoBuilt: {
      sectionTitle: 'Study Projects',
      allGithub: 'View all on GitHub',
      projects: [
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
          title: 'Spotify Database',
          desc: 'Database Administrator course project developed at SENAI-DF.',
          language: 'SQL',
          tech: 'SQL Server',
          url: 'https://github.com/omlobao/Banco-de-Dados-Spotify'
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
      sectionTitle: 'Credentials & Education',
      badge: 'Academic & Certifications',
      list: [
        {
          title: 'Postgraduate in Full Stack Software Engineering',
          issuer: 'Anhanguera University',
          year: '10/2027',
          status: 'In Progress',
          highlight: 'Software architecture, microservices, cloud computing, and full stack engineering.'
        },
        {
          title: 'Associate Degree in Systems Analysis and Development',
          issuer: 'Estácio University',
          year: '2023 – 2026',
          status: 'Degree',
          highlight: 'Requirements engineering, OOP, system modeling, and software engineering lifecycle.'
        },
        {
          title: 'Bachelor of Science in Information Systems',
          issuer: 'UNINASSAU (Attended up to 5th semester)',
          year: '2020 – 2022',
          status: 'Higher Education',
          highlight: 'Solid academic foundation in algorithms, data structures, and database systems.'
        },
        {
          title: 'Technical High School in Information Technology',
          issuer: 'CETEP-SISAL Serrinha - BA',
          year: '2016 – 2019',
          status: 'Technical Diploma',
          highlight: 'Core programming fundamentals, computer architecture, and networking.'
        },
        {
          title: 'Certification: Scalable Algorithm Programming',
          issuer: 'Estácio University',
          year: '2024',
          status: 'Certification',
          highlight: 'Time and space complexity (Big-O), advanced data structures, and algorithmic optimization.'
        },
        {
          title: 'Certification: Internet Programming and Web Systems',
          issuer: 'Estácio University',
          year: '2024',
          status: 'Certification',
          highlight: 'Web protocols, HTTP security, RESTful architecture, and modern web application development.'
        },
        {
          title: 'Certification: Rapid Python Application Development for Cloud, IoT, and Big Data',
          issuer: 'Estácio University',
          year: '2024',
          status: 'Certification',
          highlight: 'Microservices architecture, cloud integration, and distributed scalable Python computing.'
        },
        {
          title: 'Certification: Information Systems Programming',
          issuer: 'Estácio University',
          year: '2024',
          status: 'Certification',
          highlight: 'Design patterns, object-oriented system modeling, and enterprise systems integration.'
        },
        {
          title: 'Professional Course: Database Administrator (DBA)',
          issuer: 'SENAI Taguatinga - DF',
          year: '2024',
          status: 'Professional Course',
          highlight: 'Conceptual, logical, and physical modeling, complex queries, triggers, views, functions, and stored procedures (200H).'
        }
      ]
    },
    trajectory: {
      sectionTitle: 'Trajectory',
      badge: 'Experience',
      list: [
        {
          role: 'Full Stack Developer',
          company: 'Freelance / Independent Software Engineering',
          location: 'Taguatinga — DF, Brazil',
          period: '2025 — Present',
          bullets: [
            'End-to-end development of cross-platform applications powered by Django REST Framework and React / React Native.',
            'Architecture of scalable RESTful APIs with secure JWT authentication, Webhooks, and payment gateway integrations.',
            'Relational database modeling and performance tuning (PostgreSQL, MySQL) focused on high throughput and transactional integrity.'
          ]
        },
        {
          role: 'IT & Mobile Device Specialist',
          company: 'Independent Technical Consultant',
          location: 'Taguatinga — DF, Brazil',
          period: '2015 — Present',
          bullets: [
            'Specialized hardware diagnostics, technical maintenance, and performance optimization for laptops, workstations, and mobile devices.',
            'Advanced electronic circuit board repair, component-level troubleshooting, and device restoration.',
            'Custom hardware architecture sizing, workstation assembly, and IT consulting for private clients and commercial businesses.'
          ]
        },
        {
          role: 'Computer Science Instructor',
          company: '16th Military Police Battalion — "Saber Digital" Project',
          location: 'Serrinha — BA, Brazil',
          period: '2019',
          bullets: [
            'Technical instructor in the "Saber Digital" community initiative, teaching computing fundamentals, operating systems, and hardware repair.',
            'Pedagogical curriculum design, lesson planning, and direct training of approximately 70 students from the local community.',
            'Preventive maintenance and system administration of all computer lab hardware and local network infrastructure.'
          ]
        },
        {
          role: 'Systems Analysis Intern',
          company: '7Virtual Sistemas',
          location: 'Serrinha — BA, Brazil',
          period: '2018',
          bullets: [
            'Database error diagnosis and troubleshooting for transactional queries across relational database engines.',
            'Root-cause bug triage and technical error documentation delivered directly to senior software engineers.',
            'Tier-2 technical support and customer guidance for enterprise management software and business routines.'
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
