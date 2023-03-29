from rest_framework import serializers
from api.models.profile import Profile
from api.models.profileseniority import ProfileSeniority
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement
from api.serializers.profileseniority_serializer import ProfileSenioritySerializer


class ProfileSerializer(serializers.ModelSerializer):
    seniorities = ProfileSenioritySerializer(
        many=True, source='profileseniority_set')

    class Meta:
        model = Profile
        fields = ['id', 'name', 'description', 'organization', 'seniorities']

    def create(self, validated_data):
        seniorities_data = validated_data.pop('profileseniority_set')
        profile = Profile.objects.create(**validated_data)

        for seniority_data in seniorities_data:
            pokemon = seniority_data.pop('pokemon')
            seniority = seniority_data.pop('seniority')
            profileseniority = ProfileSeniority.objects.create(
                seniority=seniority, pokemon=pokemon, profile=profile)

            requirements_data = seniority_data.pop(
                'profileseniorityrequirement_set')
            for requirement_data in requirements_data:
                requirement = requirement_data.pop('requirement')
                ProfileSeniorityRequirement.objects.create(
                    profile_seniority=profileseniority, requirement=requirement)

        return profile
