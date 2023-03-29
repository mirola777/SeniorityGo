from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.models.seniority import Seniority
from api.models.pokemon import Pokemon
from api.serializers.fields.seniority_field import SeniorityField
from api.serializers.fields.pokemon_field import PokemonField
from api.serializers.profileseniorityrequirement_serializer import ProfileSeniorityRequirementSerializer


class ProfileSenioritySerializer(serializers.ModelSerializer):
    seniority = SeniorityField(queryset=Seniority.objects.all())
    pokemon = PokemonField(queryset=Pokemon.objects.all())
    requirements = ProfileSeniorityRequirementSerializer(
        many=True, source='profileseniorityrequirement_set')

    class Meta:
        model = ProfileSeniority
        fields = ['seniority', 'pokemon', 'requirements']
