# Matheus Lobão • Engenharia de Software e Portfólio

> **Desenvolvedor Back-End • Pós-graduando em Arquitetura de Software**  
> Especialista em sistemas distribuídos, processamento assíncrono, microsserviços e integração de meios de pagamento.

---

## 🏗️ Estrutura do Repositório (Arquitetura Híbrida)

Este repositório foi construído seguindo o padrão de **arquitetura desacoplada**, dividindo claramente a camada de apresentação client-side da infraestrutura de backend:

```
portfolio/
├── frontend/             # Single Page Application (React + Vite + Tailwind CSS)
│   ├── src/
│   │   ├── components/   # Componentes modulares (Hero, Flagship, Projects, Dock, Marquee)
│   │   ├── context/      # Contexto de internacionalização (PT/EN)
│   │   └── data/         # Contratos de dados estáticos para renderização instantânea (i18n)
│   ├── public/           # Assets públicos, currículos (PDF) e fotos otimizadas
│   └── package.json
│
└── backend/              # API RESTful Headless (Python + Django REST Framework)
    ├── config/           # Configurações de segurança, CORS e rotas globais
    ├── projects/         # Gestão de cases, links de demo e métricas do GitHub
    ├── resume/           # Modelagem de experiências, formação acadêmica e certificações
    ├── services/         # Catálogo de serviços técnicos
    ├── contact/          # Processamento e persistência de mensagens de contato
    └── requirements.txt
```

---

## ⚡ Estratégia de Deploy em Produção

* **Frontend (Jamstack / SSG):** O frontend é compilado para arquivos estáticos puros e servido via CDN global na **Vercel** com carregamento instantâneo (< 100ms) e 100% de disponibilidade, eliminando a latência de *cold start* de servidores gratuitos para recrutadores.
* **Backend (Django REST Framework):** Mantido no repositório como demonstração de arquitetura limpa de software back-end em Python/Django, com models relacionais, rotas autenticadas, serializers e documentação completa da API em [`backend/README.md`](backend/README.md).

---

## 💻 Como Executar Localmente

### 1. Frontend (Interface Web)

```bash
cd frontend
npm install
npm run dev
```
Acesse: `http://localhost:3000`

Para gerar o bundle otimizado de produção:
```bash
npm run build
```

---

### 2. Backend (API Django REST)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```
* **Painel Administrativo:** `http://localhost:8000/oliveira/`
* **API REST:** `http://localhost:8000/api/projects/`

---

## 🛠️ Stack Tecnológica

* **Back-End:** Python, Django, Django REST Framework, C# .NET, Go, Node.js, Express, PostgreSQL, Redis, Docker, RabbitMQ.
* **Front-End e Mobile:** React, Vite, Tailwind CSS, JavaScript (ES6+), Flutter.
* **DevOps e Cloud:** Linux, Docker, Git, CI/CD, Nginx, AWS, Vercel, Render.

---

## 🌟 Produtos e Ecossistema em Produção

* **[Krosmox (Portal Oficial)](https://krosmox.vercel.app/):** Software house especializada em desenvolvimento sob medida e diagnóstico prévio de processos operacionais.
* **Krosmox SGR:** ERP Multi-Sistema para gastronomia com aplicativo de garçom em Flutter, Split de Pagamentos Multi-CNPJ e KDS industrial em tempo real.
* **KrosERP (Sistema Web):** Plataforma SaaS Multi-Tenant (Python/Django) com isolamento estrito via `CompanyMiddleware`, Ordens de Serviço (O.S.) com rastreio de IMEI, frente de caixa (PDV) e automação via WhatsApp Bot (Evolution API).

---

## 📬 Contato

* **LinkedIn:** [linkedin.com/in/omlobao](https://www.linkedin.com/in/omlobao)
* **GitHub:** [github.com/omlobao](https://github.com/omlobao)
* **E-mail:** [omatheuslobao@gmail.com](mailto:omatheuslobao@gmail.com)
