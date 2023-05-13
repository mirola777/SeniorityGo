from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from api.models.profile import Profile
from api.serializers.profile_serializer import ProfileSerializer
from api.serializers.profile_list_serializer import ProfileListSerializer
from rest_framework.permissions import IsAuthenticated
from api.models.developer import Developer
from api.models.admin import Admin
from api.models.developerprofile import DeveloperProfile
from api.models.developerrequirement import DeveloperRequirement
from api.models.requirement import Requirement
from api.models.profileseniority import ProfileSeniority
from django.db import transaction


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAll(request):
    profiles = Profile.objects.all()
    serializer = ProfileListSerializer(profiles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrganizationProfiles(request):
    
    if Developer.objects.filter(user=request.user.id).exists():
        user = Developer.objects.get(user=request.user.id)
        
    if Admin.objects.filter(user=request.user.id).exists():
        user = Admin.objects.get(user=request.user.id)
    
    profiles = Profile.objects.filter(organization=user.organization)
    serializer = ProfileListSerializer(profiles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrganizationProfilesDetailed(request):
    
    if Developer.objects.filter(user=request.user.id).exists():
        user = Developer.objects.get(user=request.user.id)
        
    if Admin.objects.filter(user=request.user.id).exists():
        user = Admin.objects.get(user=request.user.id)
    
    profiles = Profile.objects.filter(organization=user.organization)
    serializer = ProfileSerializer(profiles, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create(request):
    serializer = ProfileSerializer(data=request.data)

    try:
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        error = {'error': str(e)}
        return Response(error, status=status.HTTP_400_BAD_REQUEST)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addDeveloperToProfile(request):
    print(request.data)
    if Developer.objects.filter(user=request.user.id).exists() and Profile.objects.filter(pk=request.data['profile_id']).exists():
        with transaction.atomic():
            try:
                developer = Developer.objects.get(user=request.user.id)
                profile = Profile.objects.get(pk=request.data['profile_id'])
                seniority = ProfileSeniority.objects.filter(profile=profile).order_by('seniority__level').first().seniority
                
                # Creating the developer profile relation
                DeveloperProfile.objects.create(developer=developer, profile=profile, seniority=seniority)
                
                #  Creating the developer requirements relation
                profileseniorities = ProfileSeniority.objects.filter(profile=profile)
                requirements = Requirement.objects.filter(profileseniorityrequirement__profile_seniority__in=profileseniorities).distinct()
                for requirement in requirements:
                    DeveloperRequirement.objects.get_or_create(developer=developer, requirement=requirement)
                
                return Response({}, status=status.HTTP_200_OK)
            except Exception as e:
                pass

    return Response({}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete(request, pk):
    try:
        profile = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    profile.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get(request, pk):
    try:
        profile = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ProfileSerializer(profile)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update(request, pk):
    try:
        profile = Profile.objects.get(pk=pk)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        error = {'error': str(e)}
        return Response(error, status=status.HTTP_400_BAD_REQUEST)
