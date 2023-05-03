from rest_framework import serializers
from api.models.pokemon import Pokemon
from api.serializers.pokemon_serializer import PokemonSerializer


class PokemonField(serializers.PrimaryKeyRelatedField):
    def to_internal_value(self, data):
        if data > 1000:
            raise Exception('Pokemon id cannot be greater than 1000')
        
        pokemon, _ = Pokemon.objects.get_or_create(pk=data)
        return pokemon

    def to_representation(self, value):
        serializer = PokemonSerializer(value)
        return serializer.data
