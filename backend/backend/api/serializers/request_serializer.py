from rest_framework import serializers
from api.models.request import BaseRequest
from api.serializers.developer_small_serializer import DeveloperSmallSerializer


class BaseRequestSerializer(serializers.ModelSerializer):
    developer = DeveloperSmallSerializer(read_only=True)
    
    class Meta:
        model = BaseRequest
        fields = ['id', 'developer', 'organization', 'created_at']
        abstract = True