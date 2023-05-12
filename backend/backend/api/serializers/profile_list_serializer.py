from rest_framework import serializers
from api.models.profile import Profile


class ProfileListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['id', 'name', 'description', 'organization']