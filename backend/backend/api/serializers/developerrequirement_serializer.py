from rest_framework import serializers
from api.models.developerprofile import DeveloperProfile
from api.serializers.profile_list_serializer import ProfileListSerializer
from api.serializers.seniority_serializer import SenioritySerializer
from api.serializers.requirement_serializer import RequirementSerializer


class DeveloperRequirementSerializer(serializers.ModelSerializer):
    requirement = RequirementSerializer(read_only=True)
    is_completed = serializers.BooleanField(required=True)

    class Meta:
        model = DeveloperProfile
        fields = ['requirement', 'is_completed']
