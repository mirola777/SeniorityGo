from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from api.models.seniority import Seniority
from api.serializers.seniority_serializer import SenioritySerializer


def _checkLevelIsUnique(serializer, seniority_id=-1):
    """
    Verifies that the seniority level is unique within the organization, excluding the given seniority ID.

    Args:
        serializer (Serializer): The serializer containing the data to be validated.
        seniority_id (int, optional): The ID of the seniority object to exclude from the check. Defaults to -1.

    Returns:
        bool: True if the level is unique, False otherwise.
    """
    level = serializer.validated_data['level']
    organization_id = serializer.validated_data['organization']

    seniority_count = Seniority.objects.exclude(id=seniority_id).filter(
        organization=organization_id, level=level).count()

    return seniority_count == 0


def _checkNameIsUnique(serializer, seniority_id=-1):
    """
    Verifies that the seniority name is unique within the organization, excluding the given seniority ID.

    Args:
        serializer (Serializer): The serializer containing the data to be validated.
        seniority_id (int, optional): The ID of the seniority object to exclude from the check. Defaults to -1.

    Returns:
        bool: True if the name is unique, False otherwise.
    """
    name = serializer.validated_data['name']
    organization_id = serializer.validated_data['organization']

    seniority_count = Seniority.objects.exclude(id=seniority_id).filter(
        organization=organization_id, name=name).count()

    return seniority_count == 0


@api_view(['GET'])
def getAll(request):
    seniorities = Seniority.objects.all()
    serializer = SenioritySerializer(seniorities, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create(request):
    serializer = SenioritySerializer(data=request.data)

    if serializer.is_valid():
        if not _checkLevelIsUnique(serializer):
            return Response({
                'error': 'Seniority level must be unique in the organization'
            })

        if not _checkNameIsUnique(serializer):
            return Response({
                'error': 'Seniority name must be unique in the organization'
            })

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete(request, pk):
    try:
        seniority = Seniority.objects.get(pk=pk)
    except Seniority.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    seniority.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get(request, pk):
    try:
        seniority = Seniority.objects.get(pk=pk)
    except Seniority.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = SenioritySerializer(seniority)
    return Response(serializer.data)


@api_view(['PUT'])
def update(request, pk):
    try:
        seniority = Seniority.objects.get(pk=pk)
    except Seniority.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = SenioritySerializer(seniority, data=request.data)
    if serializer.is_valid():
        if not _checkLevelIsUnique(serializer, seniority.id):
            return Response({
                'error': 'Seniority level must be unique in the organization'
            })

        if not _checkNameIsUnique(serializer, seniority.id):
            return Response({
                'error': 'Seniority name must be unique in the organization'
            })

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
