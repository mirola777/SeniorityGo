from rest_framework import serializers
from api.models.developerrequirement import DeveloperRequirement
from api.serializers.requirement_serializer import RequirementSerializer


class DeveloperRequirementSerializer(serializers.ModelSerializer):
    requirement = RequirementSerializer(read_only=True)
    is_completed = serializers.BooleanField(required=True)

    class Meta:
        model = DeveloperRequirement
        fields = ['requirement', 'is_completed', 'is_requested']
