from rest_framework.decorators import api_view, parser_classes, permission_classes
from rest_framework import status
from rest_framework.response import Response
from api.models.organization import Organization
from api.serializers.organization_list_serializer import OrganizationListSerializer
from api.serializers.organization_serializer import OrganizationSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def getAll(request):
    organizations = Organization.objects.all().order_by('name')
    serializer = OrganizationListSerializer(organizations, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getAllDetailed(request):
    organizations = Organization.objects.all().order_by('name')
    serializer = OrganizationSerializer(organizations, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
@permission_classes([IsAuthenticated])
def create(request):
    serializer = OrganizationSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    organization.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = OrganizationSerializer(organization)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def update(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = OrganizationSerializer(organization, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
