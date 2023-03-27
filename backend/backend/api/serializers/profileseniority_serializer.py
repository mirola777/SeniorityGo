from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.serializers.seniority_serializer import SenioritySerializer


class ProfileSenioritySerializer(serializers.ModelSerializer):
    seniority = SenioritySerializer()

    class Meta:
        model = ProfileSeniority
        fields = ['seniority', 'pokemon']