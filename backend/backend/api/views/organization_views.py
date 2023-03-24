from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from api.models.organization import Organization
from api.serializers.organization_serializer import OrganizationSerializer


@api_view(['GET'])
def getAll(request):
    organizations = Organization.objects.all()
    serializer = OrganizationSerializer(organizations, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create(request):
    serializer = OrganizationSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
