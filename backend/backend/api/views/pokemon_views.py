from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from api.models.pokemon import Pokemon
from api.serializers.pokemon_serializer import PokemonSerializer


@api_view(['GET'])
def getAll(request):
    pokemons = Pokemon.objects.all()
    serializer = PokemonSerializer(pokemons, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create(request):
    serializer = PokemonSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
