from rest_framework import serializers
from api.models.profile import Profile
from api.models.organization import Organization
from api.serializers.profile_serializer import ProfileSerializer
from api.serializers.seniority_serializer import SenioritySerializer


class OrganizationSerializer(serializers.ModelSerializer):
    profiles = ProfileSerializer(read_only=True, many=True)
    seniorities = SenioritySerializer(read_only=True, many=True)
    
    class Meta:
        model = Organization
        fields = ['id', 'name', 'image', 'profiles', 'seniorities']