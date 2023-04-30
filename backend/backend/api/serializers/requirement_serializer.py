from rest_framework import serializers
from api.models.requirement import Requirement


class RequirementSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    
    class Meta:
        model = Requirement
        fields = ['id', 'name', 'description', 'image', 'points', 'organization']
