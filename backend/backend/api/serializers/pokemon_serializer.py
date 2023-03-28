from rest_framework import serializers
from api.models.pokemon import Pokemon
from django.core.cache import cache
import requests
from api.services.poke_api_service import getPokemonData


class PokemonSerializer(serializers.ModelSerializer): 
    name = serializers.CharField(max_length=255)
    image = serializers.URLField()
    small_image = serializers.URLField()
     
    class Meta:
        model = Pokemon
        fields = ['id', 'name', 'image', 'small_image']
        
    def to_representation(self, value):     
        return getPokemonData(value.pk)
  