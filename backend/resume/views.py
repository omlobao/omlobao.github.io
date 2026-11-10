from rest_framework.generics import ListAPIView
from .models import Education, Experience, Skill, Certification
from .serializers import EducationSerializer, ExperienceSerializer, SkillSerializer, CertificationSerializer
from rest_framework.response import Response
from rest_framework.views import APIView


class ResumeView(APIView):
    """Single endpoint returning all resume data."""
    def get(self, request):
        return Response({
            'education': EducationSerializer(Education.objects.all(), many=True).data,
            'experience': ExperienceSerializer(Experience.objects.all(), many=True).data,
            'skills': SkillSerializer(Skill.objects.all(), many=True).data,
            'certifications': CertificationSerializer(Certification.objects.all(), many=True).data,
        })
