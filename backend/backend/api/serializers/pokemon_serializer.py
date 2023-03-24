from rest_framework import serializers
from api.models.pokemon import Pokemon

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['id', 'name', 'image', 'small_image']