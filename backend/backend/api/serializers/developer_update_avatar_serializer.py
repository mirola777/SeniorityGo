from rest_framework.validators import ValidationError
from rest_framework import serializers
from api.models.developer import Developer
from api.serializers.developerprofile_serializer import DeveloperProfileSerializer
from api.serializers.developerrequirement_serializer import DeveloperRequirementSerializer
from api.serializers.user_serializer import UserSerializer
from django.db import transaction


class DeveloperUpdateAvatarSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=True)

    class Meta:
        model = Developer
        fields = ['avatar']
