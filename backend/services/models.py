from django.db import models


class Service(models.Model):
    title = models.CharField('Título', max_length=100)
    description = models.TextField('Descrição')
    highlights = models.JSONField('Destaques', default=list)
    icon = models.CharField('Ícone', max_length=60, blank=True, help_text='Nome do ícone (ex: code, server, database)')
    order = models.PositiveIntegerField('Ordem', default=0)
    is_active = models.BooleanField('Ativo', default=True)

    class Meta:
        verbose_name = 'Serviço'
        verbose_name_plural = 'Serviços'
        ordering = ['order']

    def __str__(self):
        return self.title
