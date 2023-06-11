from api.models.profile import Profile
from api.models.requirement import Requirement
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from api.models.request_join_profile import RequestJoinProfile
from api.models.request_validate_requirement import RequestValidateRequirement
from api.models.admin import Admin
from api.models.developer import Developer
from api.serializers.request_join_profile_serializer import RequestJoinProfileSerializer
from api.serializers.request_validate_requirement_serializer import RequestValidateRequirementSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getRequestsJoinProfile(request):        
    if Admin.objects.filter(user=request.user.id).exists():
        admin = Admin.objects.get(user=request.user.id)
        organization = admin.organization
        requests = RequestJoinProfile.objects.filter(organization=organization).order_by('created_at')
        serializer = RequestJoinProfileSerializer(requests, many=True)
        return Response(serializer.data)

    return Response({}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def isUserRequestingJoinProfile(request, profile_pk):     
    if Developer.objects.filter(user=request.user.id).exists():
        profile = Profile.objects.get(id=profile_pk)
        developer = Developer.objects.get(user=request.user.id)
       
        if RequestJoinProfile.objects.filter(developer=developer, profile=profile).exists():
            return Response({"is_requesting": True}, status=status.HTTP_200_OK)

    return Response({"is_requesting": False}, status=status.HTTP_200_OK)


@api_view(['GET'])
def getAllRequestsJoinProfile(request):
    requests = RequestJoinProfile.objects.all().order_by('created_at')
    serializer = RequestJoinProfileSerializer(requests, many=True)
    return Response(serializer.data)   


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getRequestsValidateRequirement(request):        
    if Admin.objects.filter(user=request.user.id).exists():
        admin = Admin.objects.get(user=request.user.id)
        organization = admin.organization
        requests = RequestValidateRequirement.objects.filter(organization=organization).order_by('created_at')
        serializer = RequestValidateRequirementSerializer(requests, many=True)
        return Response(serializer.data)

    return Response({}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def isUserRequestingValidateRequirement(request, requirement_pk):        
    if Developer.objects.filter(user=request.user.id).exists():
        requirement = Requirement.objects.get(id=requirement_pk)
        developer = Developer.objects.get(user=request.user.id)
        
        if RequestValidateRequirement.objects.filter(developer=developer, requirement=requirement).exists():
            return Response({"is_requesting": True}, status=status.HTTP_200_OK)

    return Response({"is_requesting": False}, status=status.HTTP_400_BAD_REQUEST)