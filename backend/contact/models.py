from django.db import models


class ContactMessage(models.Model):
    name = models.CharField('Nome', max_length=120)
    email = models.EmailField('E-mail')
    message = models.TextField('Mensagem')
    created_at = models.DateTimeField('Criado em', auto_now_add=True)
    read = models.BooleanField('Lida', default=False)

    class Meta:
        verbose_name = 'Mensagem de Contato'
        verbose_name_plural = 'Mensagens de Contato'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} <{self.email}>"
