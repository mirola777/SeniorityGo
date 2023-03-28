from rest_framework import serializers
from api.models.profileseniority import ProfileSeniority
from api.models.seniority import Seniority
from api.models.pokemon import Pokemon
from api.serializers.fields.seniority_field import SeniorityField
from api.serializers.fields.pokemon_field import PokemonField


class ProfileSenioritySerializer(serializers.ModelSerializer):
    seniority = SeniorityField(queryset=Seniority.objects.all())
    pokemon = PokemonField(queryset=Pokemon.objects.all())

    class Meta:
        model = ProfileSeniority
        fields = ['seniority', 'pokemon']