from rest_framework import serializers
from api.models.developerprofile import DeveloperProfile
from api.serializers.profile_list_serializer import ProfileListSerializer
from api.serializers.seniority_serializer import SenioritySerializer


class DeveloperProfileListSerializer(serializers.ModelSerializer):
    profile = ProfileListSerializer(read_only=True)
    seniority = SenioritySerializer(read_only=True)


    class Meta:
        model = DeveloperProfile
        fields = ['profile', 'seniority', 'is_accepted', 'entrance_date']
