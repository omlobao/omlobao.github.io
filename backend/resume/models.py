from django.db import models


class Education(models.Model):
    institution = models.CharField('Instituição', max_length=120)
    degree = models.CharField('Grau / Curso', max_length=120)
    field = models.CharField('Área', max_length=120, blank=True)
    start_year = models.IntegerField('Início')
    end_year = models.IntegerField('Término', null=True, blank=True)
    is_current = models.BooleanField('Em andamento', default=False)
    location = models.CharField('Local', max_length=120, blank=True)
    description = models.TextField('Descrição', blank=True)
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Formação'
        verbose_name_plural = 'Formações'
        ordering = ['-start_year', 'order']

    def __str__(self):
        return f'{self.degree} — {self.institution}'


class Experience(models.Model):
    company = models.CharField('Empresa', max_length=120)
    role = models.CharField('Cargo', max_length=120)
    start_date = models.CharField('Início', max_length=20)
    end_date = models.CharField('Término', max_length=20, blank=True)
    is_current = models.BooleanField('Atual', default=False)
    location = models.CharField('Local', max_length=120, blank=True)
    description = models.TextField('Descrição')
    highlights = models.JSONField('Destaques', default=list, help_text='Lista de conquistas/responsabilidades em bullet points')
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Experiência'
        verbose_name_plural = 'Experiências'
        ordering = ['order']

    def __str__(self):
        return f'{self.role} @ {self.company}'


class Skill(models.Model):
    LEVEL_CHOICES = [
        ('expert', 'Expert'),
        ('advanced', 'Avançado'),
        ('intermediate', 'Intermediário'),
        ('learning', 'Aprendendo'),
    ]
    CATEGORY_CHOICES = [
        ('backend', 'Backend'),
        ('frontend', 'Frontend'),
        ('database', 'Banco de Dados'),
        ('devops', 'DevOps'),
        ('tools', 'Ferramentas'),
        ('languages', 'Idiomas'),
    ]

    name = models.CharField('Nome', max_length=60)
    category = models.CharField('Categoria', max_length=30, choices=CATEGORY_CHOICES)
    level = models.CharField('Nível', max_length=20, choices=LEVEL_CHOICES, default='intermediate')
    icon = models.CharField('Ícone (devicon class)', max_length=80, blank=True)
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Habilidade'
        verbose_name_plural = 'Habilidades'
        ordering = ['category', 'order']

    def __str__(self):
        return f'{self.name} ({self.get_level_display()})'


class Certification(models.Model):
    name = models.CharField('Nome', max_length=120)
    issuer = models.CharField('Emissor', max_length=120)
    year = models.IntegerField('Ano')
    credential_url = models.URLField('URL', blank=True)
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Certificação'
        verbose_name_plural = 'Certificações'
        ordering = ['-year', 'order']

    def __str__(self):
        return f'{self.name} — {self.issuer}'
