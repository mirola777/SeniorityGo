from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.models.seniority import Seniority
from api.models.pokemon import Pokemon
from api.serializers.pokemon_serializer import PokemonSerializer
from api.serializers.seniority_serializer import SenioritySerializer

class CustomSeniorityPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):
        # Fetch the actual Seniority instance
        seniority = Seniority.objects.get(pk=value.pk)
        serializer = SenioritySerializer(seniority)
        return serializer.data

class CustomPokemonPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):
        # Fetch the actual Pokemon instance
        pokemon = Pokemon.objects.get(pk=value.pk)
        serializer = PokemonSerializer(pokemon)
        return serializer.data
    
class ProfileSenioritySerializer(serializers.ModelSerializer):
    #seniority = serializers.PrimaryKeyRelatedField(queryset=Seniority.objects.all())
    #pokemon = serializers.PrimaryKeyRelatedField(queryset=Pokemon.objects.all())
    seniority = CustomSeniorityPrimaryKeyRelatedField(queryset=Seniority.objects.all())
    pokemon = CustomPokemonPrimaryKeyRelatedField(queryset=Pokemon.objects.all())

    class Meta:
        model = ProfileSeniority
        fields = ['id', 'seniority', 'pokemon', 'profile']