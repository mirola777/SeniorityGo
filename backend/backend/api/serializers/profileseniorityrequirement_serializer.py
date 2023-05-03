from rest_framework import serializers
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement
from api.models.requirement import Requirement
from api.serializers.fields.requirement_field import RequirementField
from rest_framework.validators import UniqueTogetherValidator


class ProfileSeniorityRequirementSerializer(serializers.ModelSerializer):
    requirement = RequirementField(queryset=Requirement.objects.all())

    class Meta:
        model = ProfileSeniorityRequirement
        validators = [
            UniqueTogetherValidator(
                queryset=ProfileSeniorityRequirement.objects.all(),
                message='profileseniorityrequirement_unique_profileseniority_requirement',
                fields=('profile_seniority', 'requirement')
            )
        ]
        fields = ['requirement']
