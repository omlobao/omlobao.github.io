# Portfolio API • Django REST Framework

API RESTful headless desenvolvida em Python e Django REST Framework para gerenciamento de dados de portfólio profissional, projetos de engenharia, histórico profissional, certificações e canal de contato direto.

---

## 🏛️ Arquitetura e Decisões de Engenharia

O projeto foi estruturado seguindo o padrão modular do Django, separando responsabilidades em aplicações isoladas com desacoplamento total entre modelo de domínio, serialização e camadas de apresentação da API:

```
backend/
├── config/             # Configurações globais do projeto (settings, urls, wsgi/asgi)
├── projects/           # Modelos e endpoints para projetos de software e cases
├── resume/             # Modelos e endpoints para experiências, formações e certificações
├── services/           # Modelos e endpoints para serviços e consultoria técnica
├── contact/            # Receptor de mensagens de contato com validação e persistência
├── manage.py
└── requirements.txt
```

### Segurança e Boas Práticas
* **Admin Obfuscado:** Rota administrativa configurada em `/oliveira/` em vez do padrão `/admin/`, reduzindo superfície para scans automatizados.
* **CORS Seguro:** Configuração granular via `django-cors-headers` com origens permitidas baseadas em variáveis de ambiente.
* **Serializers Estritos:** Validação rigorosa de payload em todas as requisições de escrita (`ContactMessage`).
* **Pronto para PostgreSQL:** Configuração padrão em SQLite para desenvolvimento local, facilmente chaveável para PostgreSQL via variáveis de ambiente (`DATABASE_URL`).

---

## 🚀 Endpoints da API

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/projects/` | Lista projetos ativos com tags, categoria e links de demo |
| `GET` | `/api/projects/<slug>/` | Detalhes aprofundados de um projeto específico |
| `GET` | `/api/resume/experiences/` | Histórico profissional em ordem cronológica |
| `GET` | `/api/resume/education/` | Formações acadêmicas e técnicas |
| `GET` | `/api/resume/certifications/` | Certificações de banco de dados e algoritmos |
| `GET` | `/api/services/` | Lista de serviços oferecidos |
| `POST` | `/api/contact/` | Recebimento e persistência de mensagens de contato |

---

## ⚙️ Instalação e Execução Local

### 1. Criar e ativar o ambiente virtual
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

### 2. Instalar dependências
```bash
pip install -r requirements.txt
```

### 3. Aplicar migrações
```bash
python manage.py migrate
```

### 4. Criar superusuário para o painel administrativo
```bash
python manage.py createsuperuser
```

### 5. Iniciar o servidor de desenvolvimento
```bash
python manage.py runserver 8000
```

Acesse o painel em: `http://localhost:8000/oliveira/`  
Acesse a API em: `http://localhost:8000/api/projects/`

---

## 🛠️ Tecnologias Utilizadas
* **Python 3.14 / 3.12**
* **Django 5.x / 6.x**
* **Django REST Framework (DRF)**
* **Django CORS Headers**
* **Pillow** (Processamento e upload de assets)

