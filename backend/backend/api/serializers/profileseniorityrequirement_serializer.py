from rest_framework import serializers
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement

class ProfileSeniorityRequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileSeniorityRequirement
        fields = ['id', 'requirement', 'profile_seniority' ]
        extra_kwargs = {
            'profile_seniority': {'required': False}
        }