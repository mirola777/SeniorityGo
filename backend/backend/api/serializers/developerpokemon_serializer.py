from rest_framework import serializers
from api.models.developerpokemon import DeveloperPokemon
from api.models.pokemon import Pokemon
from api.serializers.fields.pokemon_field import PokemonField


class DeveloperPokemonSerializer(serializers.ModelSerializer):
    pokemon = PokemonField(queryset=Pokemon.objects.all())
    
    class Meta:
        model = DeveloperPokemon
        fields = ['pokemon']
