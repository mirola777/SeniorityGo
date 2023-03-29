from rest_framework import serializers
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement
from api.models.requirement import Requirement
from api.serializers.fields.requirement_field import RequirementField


class ProfileSeniorityRequirementSerializer(serializers.ModelSerializer):
    requirement = RequirementField(queryset=Requirement.objects.all())

    class Meta:
        model = ProfileSeniorityRequirement
        fields = ['requirement']
