from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from api.models.developer import Developer
from api.serializers.developer_serializer import DeveloperSerializer
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAll(request):
    developers = Developer.objects.all()
    serializer = DeveloperSerializer(developers, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create(request):
    print(request.data)
    serializer = DeveloperSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    
    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete(request, pk):
    try:
        developer = Developer.objects.get(pk=pk)
    except Developer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    developer.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get(request, pk):
    try:
        developer = Developer.objects.get(pk=pk)
    except Developer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = DeveloperSerializer(developer)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update(request, pk):
    try:
        developer = Developer.objects.get(pk=pk)
    except Developer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = DeveloperSerializer(developer, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)