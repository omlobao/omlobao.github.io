from django.db import models


class Project(models.Model):
    CATEGORY_CHOICES = [
        ('backend', 'Backend'),
        ('fullstack', 'Full Stack'),
        ('api', 'API REST'),
        ('automation', 'Automação'),
        ('saas', 'SaaS'),
        ('other', 'Outro'),
    ]

    title = models.CharField('Título', max_length=120)
    slug = models.SlugField(unique=True)
    description = models.TextField('Descrição')
    short_description = models.CharField('Descrição curta', max_length=200, blank=True)
    category = models.CharField('Categoria', max_length=30, choices=CATEGORY_CHOICES, default='backend')
    tech_stack = models.JSONField('Tecnologias', default=list, help_text='Ex: ["Python", "Django", "PostgreSQL"]')
    github_url = models.URLField('URL do GitHub', blank=True)
    live_url = models.URLField('URL do Sistema (demo)', blank=True)
    live_login = models.CharField('Login demo', max_length=100, blank=True)
    live_password = models.CharField('Senha demo', max_length=100, blank=True)
    live_note = models.TextField('Nota sobre o demo', blank=True, help_text='Ex: "O backend está no Render e pode demorar ~1min para acordar"')
    thumbnail = models.ImageField('Thumbnail', upload_to='projects/', blank=True, null=True)
    screenshots = models.JSONField('Screenshots (URLs)', default=list, blank=True)
    is_featured = models.BooleanField('Destaque', default=False)
    is_active = models.BooleanField('Ativo', default=True)
    order = models.PositiveIntegerField('Ordem', default=0)
    github_stars = models.IntegerField('Stars GitHub', default=0)
    github_language = models.CharField('Linguagem principal', max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Projeto'
        verbose_name_plural = 'Projetos'
        ordering = ['-is_featured', 'order', '-created_at']

    def __str__(self):
        return self.title
