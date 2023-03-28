import requests
from django.core.cache import cache

def getPokemonData(pk):
    cache_key = f'pokemon:{pk}'
    pokemon = cache.get(cache_key)
    if pokemon is None:
        try: 
            response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{pk}/')
            response.raise_for_status()
            data = response.json()
            pokemon = {
                "id" : data["id"],
                "name": data["name"],
                "image": data["sprites"]["other"]["official-artwork"]["front_default"],
                "small_image": data["sprites"]["front_default"]
            }
            
            cache.set(cache_key, pokemon, timeout=360000)
        except Exception as e:
            return {}

    return pokemon
