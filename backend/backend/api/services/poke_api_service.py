import requests
from django.core.cache import cache


# This method returns a pokemon from the pokeapi
# by its id
def getPokemon(pk):
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


# This method returns all the pokemons of the 
# first pokemon generation from the pokeapi
def getAllPokemons():
    cache_key = 'pokemons'
    pokemons = cache.get(cache_key)
    
    if pokemons is None:
        try:
            response = requests.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            response.raise_for_status()
            data = response.json()['results']
            
            pokemons = []
            for pokemon in data:
                pokemon_id = pokemon['url'].split('/')[-2]
                pokemon = {
                    "id" : pokemon_id,
                    "name" : pokemon['name'],
                    "image" : f'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokemon_id}.png',
                    "small_image" : f'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon_id}.png'
                }
                pokemons.append(pokemon)
            
            cache.set(cache_key, pokemons, timeout=360000)
        except Exception as e:
            return []
        
    return pokemons    