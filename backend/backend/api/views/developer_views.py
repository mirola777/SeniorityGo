from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from rest_framework.response import Response
from api.models.developer import Developer
from api.models.admin import Admin
from api.serializers.developer_serializer import DeveloperSerializer
from api.serializers.developer_list_serializer import DeveloperListSerializer
from api.serializers.developer_update_avatar_serializer import DeveloperUpdateAvatarSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User



@api_view(['GET'])
def getAll(request):
    developers = Developer.objects.all()
    serializer = DeveloperListSerializer(developers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrganizationDevelopers(request):
    if Developer.objects.filter(user=request.user.id).exists():
        user = Developer.objects.get(user=request.user.id)
        
    if Admin.objects.filter(user=request.user.id).exists():
        user = Admin.objects.get(user=request.user.id)
    
    
    developers = Developer.objects.filter(organization=user.organization)
    
    serializer = DeveloperListSerializer(developers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrganizationDevelopersDetailed(request):
    if Developer.objects.filter(user=request.user.id).exists():
        user = Developer.objects.get(user=request.user.id)
        
    if Admin.objects.filter(user=request.user.id).exists():
        user = Admin.objects.get(user=request.user.id)
    
    
    developers = Developer.objects.filter(organization=user.organization)
    
    serializer = DeveloperSerializer(developers, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create(request):
    serializer = DeveloperSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def updateAvatar(request):
    try:
        developer = Developer.objects.get(user=request.user.id)
    except Developer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = DeveloperUpdateAvatarSerializer(developer, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)
    
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