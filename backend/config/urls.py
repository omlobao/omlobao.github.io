from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('oliveira/', admin.site.urls),
    path('api/projects/', include('projects.urls')),
    path('api/resume/', include('resume.urls')),
    path('api/services/', include('services.urls')),
    path('api/contact/', include('contact.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
