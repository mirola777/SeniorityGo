from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from api.models.seniority import Seniority
from api.serializers.seniority_serializer import SenioritySerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAll(request):
    seniorities = Seniority.objects.all().order_by('level')
    serializer = SenioritySerializer(seniorities, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrganizationSeniorities(request, pk): 
    seniorities = Seniority.objects.filter(organization=pk).order_by('level')
    serializer = SenioritySerializer(seniorities, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create(request):
    serializer = SenioritySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete(request, pk):
    try:
        seniority = Seniority.objects.get(pk=pk)
    except Seniority.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    seniority.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get(request, pk):
    try:
        seniority = Seniority.objects.get(pk=pk)
    except Seniority.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = SenioritySerializer(seniority)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update(request, pk):
    try:
        seniority = Seniority.objects.get(pk=pk)
    except Seniority.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = SenioritySerializer(seniority, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
