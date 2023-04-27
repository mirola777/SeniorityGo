from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from rest_framework.response import Response
from api.models.requirement import Requirement
from api.serializers.requirement_serializer import RequirementSerializer


@api_view(['GET'])
def getAll(request):
    requirements = Requirement.objects.all()
    serializer = RequirementSerializer(requirements, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def create(request):
    serializer = RequirementSerializer(data=request.data)
 
    if serializer.is_valid():
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
@parser_classes([MultiPartParser, FormParser])
def update(request, pk):
    try:
        requirement = Requirement.objects.get(pk=pk)
    except Requirement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    print(request.data)

    serializer = RequirementSerializer(requirement, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
