from rest_framework import serializers
from api.models.requirement import Requirement
from rest_framework.validators import UniqueTogetherValidator


class RequirementSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    
    class Meta:
        model = Requirement
        validators = [
            UniqueTogetherValidator(
                queryset=Requirement.objects.all(),
                message='requirement_unique_name_organization',
                fields=('name', 'organization')
            )
        ]
        fields = ['id', 'name', 'description', 'image', 'points', 'organization']
