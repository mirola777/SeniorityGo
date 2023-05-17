from rest_framework.decorators import api_view, parser_classes, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from api.models.requirement import Requirement
from api.serializers.requirement_serializer import RequirementSerializer
from api.models.developer import Developer
from api.models.admin import Admin
from api.models.developerrequirement import DeveloperRequirement
from api.models.developerprofile import DeveloperProfile
from api.models.profileseniority import ProfileSeniority
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement
from django.db import transaction


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAll(request):
    requirements = Requirement.objects.all()
    serializer = RequirementSerializer(requirements, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrganizationRequirements(request): 
    
    if Developer.objects.filter(user=request.user.id).exists():
        user = Developer.objects.get(user=request.user.id)
        
    if Admin.objects.filter(user=request.user.id).exists():
        user = Admin.objects.get(user=request.user.id)
    
    requirements = Requirement.objects.filter(organization=user.organization).order_by('points')
    serializer = RequirementSerializer(requirements, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def create(request):
    serializer = RequirementSerializer(data=request.data)
 
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete(request, pk):
    try:
        requirement = Requirement.objects.get(pk=pk)
    except Requirement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    requirement.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get(request, pk):
    try:
        requirement = Requirement.objects.get(pk=pk)
    except Requirement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RequirementSerializer(requirement)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def update(request, pk):
    try:
        requirement = Requirement.objects.get(pk=pk)
    except Requirement.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RequirementSerializer(requirement, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def validateRequirement(request):
    if Developer.objects.filter(user=request.user.id).exists() and Requirement.objects.filter(pk=request.data['requirement_id']).exists():
        with transaction.atomic():
            try:
                developer = Developer.objects.get(user=request.user.id)
                requirement = Requirement.objects.get(pk=request.data['requirement_id'])
                # Here is missing the uploading of the documents
                developerrequirement = DeveloperRequirement.objects.get(developer_id=developer, requirement=requirement)
                developerrequirement.is_completed = True
                developerrequirement.save()
                
                # Add points to the developer
                developer.score = developer.score + requirement.points
                developer.save()
                
                # Let's check if all the requirements are completed
                developerprofiles = DeveloperProfile.objects.filter(developer=developer)
                for developerprofile in developerprofiles:
                    profile = developerprofile.profile
                    
                    profileseniorities = ProfileSeniority.objects.filter(profile=profile).order_by('seniority__level')
                    for indexprofileseniority, profileseniority  in enumerate(profileseniorities):
                        profileseniorityrequirements = ProfileSeniorityRequirement.objects.filter(profile_seniority=profileseniority)
    
                        is_completed = True
                        for profileseniorityrequirement in profileseniorityrequirements:
                            if DeveloperRequirement.objects.filter(developer=developer, requirement=profileseniorityrequirement.requirement).exists():  
                                developerrequirement = DeveloperRequirement.objects.get(developer=developer, requirement=profileseniorityrequirement.requirement)
                                if not developerrequirement.is_completed:
                                    is_completed = False
                                    break
                            else:
                                is_completed = False        
                                break
                        
                        if is_completed and developerprofile.seniority.level <= profileseniority.seniority.level:
                            if indexprofileseniority + 1 < len(profileseniorities):
                                developerprofile.seniority = profileseniorities[indexprofileseniority + 1].seniority
                                # UNLOCK NEW REQUIREMENTS
                                profileseniorityrequirements = ProfileSeniorityRequirement.objects.filter(profile_seniority=profileseniorities[indexprofileseniority + 1])
                                for profileseniorityrequirement in profileseniorityrequirements:
                                    DeveloperRequirement.objects.get_or_create(developer=developer, requirement=profileseniorityrequirement.requirement)
                    developerprofile.save()
                
                return Response({}, status=status.HTTP_200_OK)
            except Exception as e:
                print(e)
                error = {'errors': [str(e)]}
                return Response(error, status=status.HTTP_400_BAD_REQUEST)

    return Response({}, status=status.HTTP_400_BAD_REQUEST)
