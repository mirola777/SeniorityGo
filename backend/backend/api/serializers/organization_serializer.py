from rest_framework import serializers
from api.models.organization import Organization
from api.serializers.profile_serializer import ProfileSerializer
from api.serializers.seniority_serializer import SenioritySerializer
from api.serializers.requirement_serializer import RequirementSerializer


class OrganizationSerializer(serializers.ModelSerializer):
    profiles = ProfileSerializer(read_only=True, many=True)
    seniorities = SenioritySerializer(read_only=True, many=True)
    requirements = RequirementSerializer(read_only=True, many=True)
    image = serializers.ImageField(required=False)

    class Meta:
        model = Organization
        fields = ['id', 'name', 'image', 'profiles',
                  'seniorities', 'requirements']
