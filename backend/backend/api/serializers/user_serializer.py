from rest_framework import serializers
from api.models.user import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'second_name', 'last_name', 'email', 'password', 'creation_date']