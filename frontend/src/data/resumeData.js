export const personalData = {
  name: 'Matheus de Oliveira Lobão Vieira',
  shortName: 'Matheus Lobão',
  handle: 'omlobao',
  role: 'Desenvolvedor Back-End Python • Pós-graduando em Arquitetura de Software',
  subRole: 'Django • REST APIs • PostgreSQL/MySQL • C# .NET',
  location: 'Taguatinga — Distrito Federal, Brasil',
  email: 'omlobao@gmail.com',
  phone1: '(71) 99117-5273',
  phone2: '(61) 9327-0062',
  whatsappUrl: 'https://wa.me/5571991175273?text=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar!',
  githubUrl: 'https://github.com/omlobao',
  linkedinUrl: 'https://linkedin.com/in/omlobao',
  cvPdfUrl: '/curriculo-matheus.pdf',
  manifesto: 'Meu passatempo é analisar problemas e pensar em soluções técnicas para resolvê-los. — visão que deu origem ao Krosmox SGR.',
  about: 'Desenvolvedor Back-End Python com conhecimentos em bancos de dados relacionais e infraestrutura, graduado em Análise e Desenvolvimento de Sistemas e Pós-graduando em Engenharia de Software.'
};

export const experiences = [
  {
    role: 'Técnico em Informática e Dispositivos Móveis',
    company: 'Atuação Autônoma / Consultoria Técnica',
    location: 'Taguatinga — DF',
    period: 'Atual',
    current: true,
    description: 'Diagnóstico e reparo avançado de placas, computadores, notebooks e smartphones; manutenção preventiva e corretiva.',
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
    current: false,
    description: 'Instrutor de Informática no projeto social comunitário "Saber Digital", ministrando capacitação prática em informática básica e manutenção de hardware.',
    bullets: [
      'Capacitação direta de cerca de 70 alunos da comunidade local ao longo de 6 meses de projeto.',
      'Organização de turmas, planejamento pedagógico e elaboração de material didático técnico.',
      'Manutenção preventiva dos equipamentos dos laboratórios de informática utilizados nas aulas.'
    ]
  },
  {
    role: 'Estagiário em Análise de Sistemas',
    company: '7Virtual Sistemas',
    location: 'Serrinha — BA',
    period: '2018',
    current: false,
    description: 'Análise de integridade de dados e investigação de incidentes em softwares de gestão empresarial fornecidos pela empresa.',
    bullets: [
      'Investigação e diagnóstico de erros e inconsistências em bancos de dados relacionais das aplicações clientes.',
      'Abertura, triagem e documentação de relatórios técnicos de bugs para a equipe de desenvolvimento.',
      'Suporte operacional de segundo nível ao cliente final em rotinas de fechamento e emissão.'
    ]
  }
];

export const education = [
  {
    degree: 'Pós-graduação em Arquitetura de Software',
    institution: 'Faculdade Anhanguera (Especialização Lato Sensu)',
    location: 'EAD',
    period: 'Atual',
    status: 'Pós-Graduação'
  },
  {
    degree: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade Estácio',
    location: 'Serrinha / DF',
    period: '2023 – 2026',
    status: 'Graduação'
  },
  {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'UNINASSAU',
    location: 'Salvador — BA',
    period: '2020 – 2022',
    status: 'Graduação'
  },
  {
    degree: 'Ensino Médio e Técnico em Informática',
    institution: 'CETEP SISAL',
    location: 'Serrinha — BA',
    period: '2016 – 2019',
    status: 'Curso Técnico'
  }
];

export const certifications = [
  {
    title: 'Administrador de Banco de Dados',
    issuer: 'SENAI Taguatinga - DF',
    year: '2026',
    status: 'Curso Complementar',
    highlight: 'Modelagem conceitual, lógica, criação e administração de banco de dados MySQL (200H).'
  },
  {
    title: 'Desenvolvedor Python',
    issuer: 'SENAI Taguatinga - DF',
    year: '2026',
    status: 'Curso Complementar',
    highlight: 'Desenvolvimento de aplicações desktop e APIs com Python (200H).'
  },
  {
    title: 'Desenvolvedor Django',
    issuer: 'SENAI Taguatinga - DF',
    year: '2026',
    status: 'Curso Complementar',
    highlight: 'Desenvolvimento FullStack com framework Django (60H).'
  },
  {
    title: 'Desenvolvimento Rápido em Python para Cloud, IoT e Big Data',
    issuer: 'Faculdade Estácio',
    year: '2025',
    status: 'Certificação',
    highlight: 'Arquiteturas para microsserviços e processamento distribuído.'
  },
  {
    title: 'Programação de Algoritmos Escaláveis',
    issuer: 'Faculdade Estácio',
    year: '2025',
    status: 'Certificação',
    highlight: 'Complexidade de tempo/espaço (Big-O) e estruturas avançadas.'
  },
  {
    title: 'Programação de Sistemas de Informação e Internet',
    issuer: 'Faculdade Estácio',
    year: '2025',
    status: 'Certificação',
    highlight: 'Padrões de projeto, MVC/MVT, segurança HTTP e APIs REST.'
  },
  {
    title: 'Programação para Dispositivos Móveis',
    issuer: 'Faculdade Estácio',
    year: '2024',
    status: 'Certificação',
    highlight: 'Conceitos de ciclo de vida mobile e desenvolvimento de apps.'
  }
];

export const skillCategories = [
  {
    category: 'Back-End e APIs',
    skills: [
      { name: 'Python', level: 'Avançado' },
      { name: 'Django / DRF', level: 'Avançado' },
      { name: 'C# / .NET', level: 'Intermediário' },
      { name: 'RESTful Architecture', level: 'Avançado' },
      { name: 'Autenticação JWT / Session', level: 'Avançado' },
      { name: 'WebSockets em Tempo Real', level: 'Intermediário' }
    ]
  },
  {
    category: 'Bancos de Dados',
    skills: [
      { name: 'PostgreSQL', level: 'Avançado' },
      { name: 'MySQL', level: 'Avançado' },
      { name: 'SQL Server', level: 'Intermediário' },
      { name: 'Modelagem Relacional', level: 'Avançado' },
      { name: 'Migrações e Integridade', level: 'Avançado' }
    ]
  },
  {
    category: 'Mobile e Front-End',
    skills: [
      { name: 'Flutter', level: 'Prático / Aplicado' },
      { name: '.NET MAUI', level: 'Intermediário' },
      { name: 'React / JavaScript', level: 'Intermediário' },
      { name: 'HTML5 e CSS3', level: 'Avançado' }
    ]
  },
  {
    category: 'Sistemas e Infraestrutura',
    skills: [
      { name: 'Redes Estruturadas e Wi-Fi', level: 'Avançado' },
      { name: 'Diagnóstico de Hardware e Placas', level: 'Avançado' },
      { name: 'Linux / Shell / Git', level: 'Avançado' },
    ]
  }
];
