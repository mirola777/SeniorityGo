from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.models.seniority import Seniority
from api.models.pokemon import Pokemon
from api.serializers.fields.seniority_field import SeniorityField
from api.serializers.fields.pokemon_field import PokemonField
from api.serializers.profileseniorityrequirement_serializer import ProfileSeniorityRequirementSerializer
from rest_framework.validators import UniqueTogetherValidator


class ProfileSenioritySerializer(serializers.ModelSerializer):
    seniority = SeniorityField(queryset=Seniority.objects.all())
    pokemon = PokemonField(queryset=Pokemon.objects.all())
    requirements = ProfileSeniorityRequirementSerializer(
        many=True, source='profileseniorityrequirement_set')

    class Meta:
        model = ProfileSeniority
        validators = [
            UniqueTogetherValidator(
                queryset=ProfileSeniority.objects.all(),
                message='profileseniority_unique_pokemon_profile_seniority',
                fields=('pokemon', 'profile', 'seniority')
            ),
            UniqueTogetherValidator(
                queryset=ProfileSeniority.objects.all(),
                message='profileseniority_unique_pokemon_profile',
                fields=('pokemon', 'profile')
            ),
            UniqueTogetherValidator(
                queryset=ProfileSeniority.objects.all(),
                message='profileseniority_unique_profile_seniority',
                fields=('profile', 'seniority')
            )
        ]
        fields = ['seniority', 'pokemon', 'requirements']
