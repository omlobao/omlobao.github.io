export const flagshipProject = {
  id: 'krosmox-sgr',
  title: 'Krosmox SGR',
  tagline: 'ERP Multi-Sistema de Gestão Gastronômica e Engenharia Operacional',
  badge: 'Flagship Architecture • Case Study',
  headline: 'A operação do restaurante em um único fluxo — do salão à cozinha, sem bitributação.',
  subheadline: 'Mais do que um aplicativo isolado, o SGR é um ERP multi-sistema completo com acesso web via navegador e integração ao app de salão em Flutter (em desenvolvimento). Seu propósito central é descomplicar a vida dos garçons através de uma interface limpa, fluida e ergonômica, com foco absoluto em agilidade e eficiência — permitindo ainda que bar e cozinha faturem de forma 100% independente no mesmo salão.',
  demoUrl: 'https://sgr-demo.vercel.app/login',
  demoLogin: 'lobao',
  demoPassword: '19051999',
  techStack: [
    'Python',
    'Django REST Framework',
    'PostgreSQL',
    'Flutter (Mobile)',
    'WebSockets',
    'Multi-Tenant Architecture',
    'Split Multi-CNPJ',
    'Stone / PagBank API'
  ],
  stats: [
    { label: 'Tempo de Mesa', value: '-15 min', desc: 'Agilidade média por atendimento' },
    { label: 'Economia Fiscal', value: '4% a 7%', desc: 'Segregação de monofásicos no Simples' },
    { label: 'Split de Pagamento', value: '100% Automático', desc: 'Duas contas bancárias, uma transação' },
    { label: 'Treinamento de Salão', value: '< 10 min', desc: 'Curva de aprendizado imediata' },
  ],
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
      subtitle: 'Eliminação da bitributação de Bar e Cozinha',
      description: 'Tecnologia pioneira que permite ao salão operar Bar e Cozinha sob CNPJs distintos. Em uma única transação no cartão ou Pix dinâmico, o valor da bebida é liquidado direto na conta do Bar e a comida na conta da Cozinha pelas credenciais da adquirente.',
      tags: ['Split Payment', 'Multi-CNPJ', 'Stone SDK', 'Pix Dinâmico']
    },
    {
      number: '03',
      title: 'KDS (Kitchen Display System)',
      subtitle: 'Monitor de produção em tempo real',
      description: 'Dark theme ergonômico projetado para iluminação de cozinha industrial. Roteamento automático de comandas por praças de preparo (Bar, Quentes, Forno de Pizza) com cronômetro de tempo de espera e alertas visuais de urgência após 20 minutos.',
      tags: ['KDS Touch', 'Dark Theme Industrial', 'Roteamento de Praças', 'WebSockets']
    },
    {
      number: '04',
      title: 'Frente de Caixa (PDV) e Auditoria Financeira',
      subtitle: 'Controle auditável de numerário e fechamento seguro',
      description: 'Mecanismo de alta precisão e conformidade com calculadora automática de troco, divisão de contas instantânea (2x, 3x, 4x, 5x pessoas), conferência cega de fechamento (o operador realiza a contagem física e o sistema faz o batimento com as transações registradas) e trilha de auditoria para sangrias e cancelamentos.',
      tags: ['PDV Ágil', 'Auditoria de Caixa', 'Fechamento Cego', 'Divisão de Cotas']
    },
    {
      number: '05',
      title: 'Inteligência Fiscal e CMV Real',
      subtitle: 'O sistema que se paga na contabilidade',
      description: 'Identificação e segregação automática de produtos monofásicos (cervejas, refrigerantes e água) gerando relatórios diretos para contadores deduzirem PIS/COFINS, além de DRE com baixa automática de insumos por ficha técnica.',
      tags: ['Produtos Monofásicos', 'DRE Gerencial', 'CMV Real', 'Ficha Técnica']
    }
  ],
  architectureHighlights: [
    {
      label: 'Multi-Tenant com Schemas Isolados',
      detail: 'Isolamento de dados a nível de banco no PostgreSQL, garantindo segurança corporativa e escalabilidade para franquias e múltiplos restaurantes.'
    },
    {
      label: 'Sincronização em Tempo Real via WebSockets',
      detail: 'Comunicação bidirecional com latência inferior a 100ms entre terminais do salão, KDS na cozinha e PDV no caixa.'
    },
    {
      label: 'Resiliência e Tolerância a Falhas de Rede',
      detail: 'Armazenamento em fila local e suporte imediato a transbordo por 4G/5G caso a conexão de banda larga local sofra instabilidade.'
    }
  ]
};

export const githubProjects = [
  {
    id: 'pdvassistencia',
    title: 'PDV e Gestão de Assistência Técnica',
    description: 'Sistema backend robusto para controle de ordens de serviço, clientes, estoque de peças de reposição e orçamentos técnicos com regras de validação completas.',
    category: 'Backend e Gestão Comercial',
    language: 'Python',
    techStack: ['Python', 'Django', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/omlobao/pdvassistencia',
    stars: 0,
    featured: true
  },
  {
    id: 'flix-api',
    title: 'Flix API RESTful',
    description: 'API desenvolvida em Django REST Framework para gerenciamento e catálogo de mídias, atores, gêneros e avaliações com paginação, filtros e autenticação JWT.',
    category: 'API REST',
    language: 'Python',
    techStack: ['Python', 'Django REST Framework', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/omlobao/Flix-Api',
    stars: 0,
    featured: true
  },
  {
    id: 'carros',
    title: 'Sistema de Gestão de Concessionária',
    description: 'Aplicação web completa desenvolvida com Django para controle de estoque de veículos, marcas, compradores e contratos comerciais.',
    category: 'Web App Full Stack',
    language: 'Python',
    techStack: ['Python', 'Django', 'Bootstrap', 'PostgreSQL'],
    githubUrl: 'https://github.com/omlobao/Carros',
    stars: 0,
    featured: false
  },
  {
    id: 'projeto-triagem',
    title: 'Sistema de Triagem Médica (SENAI)',
    description: 'Aplicação desenvolvida para fluxo de triagem de pacientes com classificação por protocolo de gravidade (Manchester) e acompanhamento de filas.',
    category: 'Sistemas Críticos',
    language: 'Python / Web',
    techStack: ['Python', 'HTML5', 'CSS3', 'Regras Clínicas'],
    githubUrl: 'https://github.com/omlobao/Projeto-Triagem-',
    stars: 0,
    featured: false
  },
  {
    id: 'hotel',
    title: 'Gestão Hoteleira .NET',
    description: 'Aplicação em C# focada em regras de negócio para reservas de quartos, controle de diárias, check-in e check-out de hóspedes.',
    category: 'Desktop e Backend',
    language: 'C#',
    techStack: ['C#', '.NET', 'SQL Server', 'POO'],
    githubUrl: 'https://github.com/omlobao/Hotel',
    stars: 0,
    featured: false
  },
  {
    id: 'maui-app-login',
    title: 'Maui Mobile Auth',
    description: 'Aplicação mobile multiplataforma (Android/iOS) em .NET MAUI demonstrando padrões MVVM, autenticação e navegação nativa segura.',
    category: 'Mobile .NET',
    language: 'C#',
    techStack: ['C#', '.NET MAUI', 'XAML', 'MVVM'],
    githubUrl: 'https://github.com/omlobao/MauiAppLogin',
    stars: 0,
    featured: false
  }
];
