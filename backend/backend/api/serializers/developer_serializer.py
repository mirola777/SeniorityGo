from rest_framework.validators import ValidationError
from rest_framework import serializers
from api.models.developer import Developer
from api.serializers.developerprofile_list_serializer import DeveloperProfileListSerializer
from api.serializers.developerrequirement_serializer import DeveloperRequirementSerializer
from api.serializers.developerpokemon_serializer import DeveloperPokemonSerializer
from api.serializers.user_serializer import UserSerializer
from django.db import transaction


class DeveloperSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    profiles = DeveloperProfileListSerializer(source='developerprofile_set', many=True, read_only=True)
    requirements = DeveloperRequirementSerializer(source='developerrequirement_set', read_only=True, many=True)
    pokemons = DeveloperPokemonSerializer(many=True, source='developerpokemon_set', read_only=True)
    avatar = serializers.ImageField(required=False)
    second_name = serializers.CharField(required=False)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
  
    
    def is_valid(self, *, raise_exception=False):
        try:
            return super().is_valid(raise_exception=True)
        except ValidationError as e:  
            if 'username already exists' in str(e.detail):
                self._errors = {'errors': ["username_already_exists"]}
                
            if 'Enter a valid email address.' in str(e.detail):
                self._errors = {'errors': ["invalid_email"]}
        
        return False


    class Meta:
        model = Developer
        fields = ['user', 'organization', 'role', 'first_name', 'second_name', 
                  'last_name', 'birthday', 'avatar', 'phone_number', 
                  'is_activated', 'profiles', 'requirements', 'score', 'pokemons']
        
        
    def create(self, validated_data):
        with transaction.atomic():
            try:
                user_data = validated_data.pop('user')
                user_serializer = UserSerializer(data=user_data)
                if user_serializer.is_valid():
                    user = user_serializer.save()
                    developer = Developer.objects.create(user=user, **validated_data)
                
            except Exception as e:
                raise e

        return developer
