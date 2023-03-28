from rest_framework import serializers
from api.models.pokemon import Pokemon
from api.serializers.pokemon_serializer import PokemonSerializer
from django.core.cache import cache
import requests


class PokemonField(serializers.PrimaryKeyRelatedField):

    def to_representation(self, value):
        cache_key = f'pokemon:{value.pk}'
        pokemon = cache.get(cache_key)

        pokemon_serializer = PokemonSerializer(pokemon)

        if pokemon is None:

            # y almacenar la respuesta en caché durante 1 hora
            response = requests.get(
                f'https://pokeapi.co/api/v2/pokemon/{value.pk}/')
            response.raise_for_status()
            data = response.json()
            new_data = {
                "name": data["name"],
                "image": data["sprites"]["other"]["official-artwork"]["front_default"],
                "small_image": data["sprites"]["front_default"]
            }
            


            pokemon_serializer = PokemonSerializer(data=new_data)

            pokemon_serializer.is_valid()
         
            pokemon = pokemon_serializer.data
            cache.set(cache_key, pokemon, timeout=3600)

        return pokemon_serializer.data
