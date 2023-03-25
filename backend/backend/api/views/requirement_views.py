from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from api.models.requirement import Requirement
from api.serializers.requirement_serializer import RequirementSerializer


def _checkNameIsUnique(serializer, requirement_id=-1):
    """
    Verifies that the requirement name is unique within the organization, excluding the given requirement ID.

    Args:
        serializer (Serializer): The serializer containing the data to be validated.
        requirement_id (int, optional): The ID of the requirement object to exclude from the check. Defaults to -1.

    Returns:
        bool: True if the name is unique, False otherwise.
    """
    name = serializer.validated_data['name']
    organization_id = serializer.validated_data['organization']

    requirement_count = Requirement.objects.exclude(id=requirement_id).filter(
        organization=organization_id, name=name).count()

    return requirement_count == 0


@api_view(['GET'])
def getAll(request):
    requirements = Requirement.objects.all()
    serializer = RequirementSerializer(requirements, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create(request):
    serializer = RequirementSerializer(data=request.data)

    if serializer.is_valid():
        if not _checkNameIsUnique(serializer):
            return Response({
                'error': 'Requirement name must be unique in the organization'
            })

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete(request, pk):
    try:
        requirement = Requirement.objects.get(pk=pk)
    except Requirement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    requirement.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get(request, pk):
    try:
        requirement = Requirement.objects.get(pk=pk)
    except Requirement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RequirementSerializer(requirement)
    return Response(serializer.data)


@api_view(['PUT'])
def update(request, pk):
    try:
        requirement = Requirement.objects.get(pk=pk)
    except Requirement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RequirementSerializer(requirement, data=request.data)
    if serializer.is_valid():
        if not _checkNameIsUnique(serializer, requirement.id):
            return Response({
                'error': 'Requirement name must be unique in the organization'
            })

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
