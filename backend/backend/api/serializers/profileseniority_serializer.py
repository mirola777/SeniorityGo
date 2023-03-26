from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority

class ProfileSenioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileSeniority
        fields = ['id', 'seniority', 'pokemon', 'profile']  