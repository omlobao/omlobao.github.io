from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'description', 'short_description',
            'category', 'tech_stack', 'github_url', 'live_url',
            'live_login', 'live_password', 'live_note',
            'thumbnail', 'screenshots', 'is_featured',
            'order', 'github_stars', 'github_language', 'updated_at',
        ]
