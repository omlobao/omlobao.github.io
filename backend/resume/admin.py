from django.contrib import admin
from .models import Education, Experience, Skill, Certification


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'institution', 'start_year', 'end_year', 'is_current', 'order']
    list_editable = ['order', 'is_current']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['role', 'company', 'start_date', 'end_date', 'is_current', 'order']
    list_editable = ['order', 'is_current']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'level', 'order']
    list_editable = ['level', 'order']
    list_filter = ['category', 'level']


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ['name', 'issuer', 'year', 'order']
    list_editable = ['order']
