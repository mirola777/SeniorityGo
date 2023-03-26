from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.serializers.seniority_serializer import SenioritySerializer
from drf_writable_nested.serializers import WritableNestedModelSerializer

from api.models.seniority import Seniority
from api.models.pokemon import Pokemon
from api.serializers.pokemon_serializer import PokemonSerializer

class ProfileSenioritySerializer(serializers.ModelSerializer):
    seniority = SenioritySerializer()
    pokemon = PokemonSerializer()

    class Meta:
        model = ProfileSeniority
        fields = ['id', 'seniority', 'pokemon', 'profile']