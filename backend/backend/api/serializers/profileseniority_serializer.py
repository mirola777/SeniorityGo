from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.serializers.seniority_serializer import SenioritySerializer
from api.serializers.pokemon_serializer import PokemonSerializer

class ProfileSenioritySerializer(serializers.ModelSerializer):
    seniority = SenioritySerializer()
    #pokemon = PokemonSerializer()

    class Meta:
        model = ProfileSeniority
        fields = ['seniority', 'pokemon']