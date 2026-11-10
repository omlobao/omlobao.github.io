from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Project
from .serializers import ProjectSerializer


class ProjectListView(ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        qs = Project.objects.filter(is_active=True)
        featured = self.request.query_params.get('featured')
        category = self.request.query_params.get('category')
        if featured:
            qs = qs.filter(is_featured=True)
        if category:
            qs = qs.filter(category=category)
        return qs


class ProjectDetailView(RetrieveAPIView):
    queryset = Project.objects.filter(is_active=True)
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
