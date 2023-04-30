from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from api.services.poke_api_service import getAllPokemons, getPokemon


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAll(request):
    pokemons = getAllPokemons()
    if pokemons is []:
        return Response([], status=status.HTTP_404_NOT_FOUND)
    
    return Response(pokemons, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get(request, pk):
    pokemon = getPokemon(pk)
    if pokemon is {}:
        return Response({}, status=status.HTTP_404_NOT_FOUND)
    
    return Response(pokemon, status=status.HTTP_201_CREATED)
