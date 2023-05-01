from rest_framework import serializers
from api.models.seniority import Seniority
from rest_framework.validators import UniqueTogetherValidator

class SenioritySerializer(serializers.ModelSerializer):    
    class Meta:
        model = Seniority
        validators = [
            UniqueTogetherValidator(
                queryset=Seniority.objects.all(),
                message='seniority_unique_name_level_organization',
                fields=('name', 'level', 'organization')
            ),
            UniqueTogetherValidator(
                queryset=Seniority.objects.all(),
                message='seniority_unique_level_organization',
                fields=('level', 'organization')
            ),
            UniqueTogetherValidator(
                queryset=Seniority.objects.all(),
                message='seniority_unique_name_organization',
                fields=('name', 'organization')
            )
        ]
        fields = ['id', 'name', 'level', 'organization']