from rest_framework import serializers
from api.models.admin import Admin
from api.serializers.user_serializer import UserSerializer


class AdminSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = Admin
        fields = ['id', 'user',  'role', 'organization', 'avatar']