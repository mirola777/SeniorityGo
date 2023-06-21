from rest_framework import serializers
from api.models.profile import Profile
from api.models.profileseniority import ProfileSeniority
from api.models.profileseniorityrequirement import ProfileSeniorityRequirement
from api.serializers.profileseniority_serializer import ProfileSenioritySerializer
from django.db import transaction
from rest_framework.validators import UniqueTogetherValidator


class ProfileSerializer(serializers.ModelSerializer):
    seniorities = ProfileSenioritySerializer(
        many=True, source='profileseniority_set')

    class Meta:
        model = Profile
        validators = [
            UniqueTogetherValidator(
                queryset=Profile.objects.all(),
                message='profile_unique_name_organization',
                fields=('name', 'organization')
            )
        ]
        fields = ['id', 'name', 'description', 'organization', 'seniorities']

    def create(self, validated_data):
        print(validated_data, "UEUWUWUWUWWUWUWUWUWWU")
        with transaction.atomic():
            try:
                # It's to check if a requirement is repeated in another profileseniority of the same profile
                all_requirements = []

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

                        # Checking if requirement already exists
                        if requirement in all_requirements:
                            raise serializers.ValidationError('profile_unique_requirement')

                        all_requirements.append(requirement)

                        ProfileSeniorityRequirement.objects.create(
                            profile_seniority=profileseniority, requirement=requirement)
            except Exception as e:
                raise e

        return profile
