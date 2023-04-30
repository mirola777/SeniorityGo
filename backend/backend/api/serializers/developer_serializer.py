from rest_framework import serializers
from api.models.developer import Developer
from api.serializers.profile_serializer import ProfileSerializer
from api.serializers.requirement_serializer import RequirementSerializer
from api.serializers.user_serializer import UserSerializer
from django.db import transaction


class DeveloperSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    profiles = ProfileSerializer(read_only=True, many=True)
    requirements = RequirementSerializer(read_only=True, many=True)
    avatar = serializers.ImageField(required=False)
    second_name = serializers.CharField(required=False)

    class Meta:
        model = Developer
        fields = ['user', 'role', 'first_name', 'second_name', 
                  'last_name', 'birthday', 'avatar', 'phone_number', 
                  'is_activated', 'profiles', 'requirements']
        
        
    def create(self, validated_data):
        print(validated_data)
        with transaction.atomic():
            try:
                
                user_data = validated_data.pop('user')
                print(user_data)
                user_serializer = UserSerializer(data=user_data)
                if user_serializer.is_valid():
                    user = user_serializer.save()
                    developer = Developer.objects.create(user=user, **validated_data)
            except Exception as e:
                raise e

        return developer
