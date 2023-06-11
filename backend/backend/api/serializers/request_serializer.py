from rest_framework import serializers
from api.models.request import BaseRequest
from api.serializers.developer_list_serializer import DeveloperListSerializer


class BaseRequestSerializer(serializers.ModelSerializer):
    developer = DeveloperListSerializer(read_only=True)
    
    class Meta:
        model = BaseRequest
        fields = ['id', 'developer', 'organization', 'created_at']
        abstract = True