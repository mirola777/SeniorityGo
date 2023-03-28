from pkg_resources import Requirement
from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.models.seniority import Seniority
from api.models.pokemon import Pokemon
from api.models.requirement import Requirement
from api.serializers.requirement_serializer import RequirementSerializer
from api.serializers.pokemon_serializer import PokemonSerializer
from api.serializers.seniority_serializer import SenioritySerializer
from api.serializers.profileseniorityrequirement_serializer import ProfileSeniorityRequirementSerializer
from    api.models.profileseniorityrequirement import ProfileSeniorityRequirement



class CustomSeniorityPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):
        # Fetch the actual Seniority instance
        seniority = Seniority.objects.get(pk=value.pk)
        serializer = SenioritySerializer(seniority)
        return serializer.data

class CustomPokemonPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):
        # Fetch the actual Pokemon instance
        pokemon = Pokemon.objects.get(pk=value.pk)
        serializer = PokemonSerializer(pokemon)
        return serializer.data

class CustomRequirementPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def to_representation(self, value):

        requirement = Requirement.objects.get(pk=value.pk)
        serializer = RequirementSerializer(requirement)
        return serializer.data
    
class ProfileSenioritySerializer(serializers.ModelSerializer):

    seniority = CustomSeniorityPrimaryKeyRelatedField(queryset=Seniority.objects.all())
    pokemon = CustomPokemonPrimaryKeyRelatedField(queryset=Pokemon.objects.all())
    profileseniority_requirements = ProfileSeniorityRequirementSerializer(many=True, read_only=True)
    profileseniority_requirements_write = serializers.ListField(child=serializers.IntegerField(), write_only=True)
 
    def create(self, validated_data):
        profileseniority_requirements_data = validated_data.pop('profileseniority_requirements_write', [])
        profile_seniority = ProfileSeniority.objects.create(**validated_data)

        for requirement_id in profileseniority_requirements_data:
            ProfileSeniorityRequirement.objects.create(profile_seniority=profile_seniority, requirement_id=requirement_id)

        return profile_seniority

    class Meta:
        model = ProfileSeniority
        fields = ['id', 'seniority', 'pokemon', 'profile', 'profileseniority_requirements', 'profileseniority_requirements_write']

        
