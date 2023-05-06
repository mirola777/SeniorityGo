from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.models.seniority import Seniority
from api.models.pokemon import Pokemon
from api.models.developerprofile import DeveloperProfile
from api.models.profile import Profile
from api.serializers.profile_list_serializer import ProfileListSerializer
from api.serializers.seniority_serializer import SenioritySerializer

from rest_framework.validators import UniqueTogetherValidator

#profile seniority
class DeveloperProfileSerializer(serializers.ModelSerializer):
    profile = ProfileListSerializer(read_only=True)
    seniority = SenioritySerializer(read_only=True)


    class Meta:
        model = DeveloperProfile
        fields = ['profile', 'seniority', 'is_accepted', 'entrance_date']
