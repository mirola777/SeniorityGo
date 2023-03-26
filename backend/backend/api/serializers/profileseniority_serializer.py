from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.serializers.seniority_serializer import SenioritySerializer
from drf_writable_nested.serializers import WritableNestedModelSerializer

from api.models.seniority import Seniority
from api.models.pokemon import Pokemon

class ProfileSenioritySerializer(serializers.ModelSerializer):
    seniority = serializers.PrimaryKeyRelatedField(queryset=Seniority.objects.all())
    pokemon = serializers.PrimaryKeyRelatedField(queryset=Pokemon.objects.all())

    class Meta:
        model = ProfileSeniority
        fields = ['id', 'seniority', 'pokemon', 'profile']