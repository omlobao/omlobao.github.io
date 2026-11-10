from django.contrib import admin
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'is_active', 'order', 'github_stars']
    list_editable = ['is_featured', 'is_active', 'order']
    list_filter = ['category', 'is_featured', 'is_active']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Informações Básicas', {
            'fields': ('title', 'slug', 'category', 'short_description', 'description', 'tech_stack', 'order', 'is_featured', 'is_active')
        }),
        ('Links', {
            'fields': ('github_url', 'github_stars', 'github_language', 'live_url', 'live_login', 'live_password', 'live_note')
        }),
        ('Mídia', {
            'fields': ('thumbnail', 'screenshots')
        }),
    )
