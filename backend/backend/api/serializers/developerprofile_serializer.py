from rest_framework import serializers
from api.models.developerprofile import DeveloperProfile
from api.serializers.seniority_serializer import SenioritySerializer
from api.serializers.profile_serializer import ProfileSerializer


class DeveloperProfileSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    seniority = SenioritySerializer(read_only=True)


    class Meta:
        model = DeveloperProfile
        fields = ['profile', 'seniority', 'is_accepted', 'entrance_date']
