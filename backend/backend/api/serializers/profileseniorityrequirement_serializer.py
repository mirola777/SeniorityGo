from rest_framework import serializers
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement
from api.models.requirement import Requirement
from api.serializers.requirement_serializer import RequirementSerializer

class CustomRequirementPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):
        requirement = Requirement.objects.get(pk=value.pk)
        serializer = RequirementSerializer(requirement)
        return serializer.data

class ProfileSeniorityRequirementSerializer(serializers.ModelSerializer):
    requirement = CustomRequirementPrimaryKeyRelatedField(queryset=Requirement.objects.all())
    class Meta:
        model = ProfileSeniorityRequirement
        fields = ['id', 'requirement', 'profile_seniority' ]
        extra_kwargs = {
            'profile_seniority': {'required': False}
        }