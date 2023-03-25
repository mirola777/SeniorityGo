from rest_framework import serializers
from api.models.requirement import Requirement


class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requirement
        fields = ['id', 'name', 'description', 'image', 'points', 'organization']
