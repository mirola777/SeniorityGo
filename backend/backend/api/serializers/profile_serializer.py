
from api.models.profile import Profile
from api.models.profileseniority import ProfileSeniority
from api.serializers.profileseniority_serializer import ProfileSenioritySerializer

class ProfileSerializer(serializers.ModelSerializer):
    seniorities = ProfileSenioritySerializer(many=True, source='profileseniority_set')
    
    class Meta:
        model = Profile
        fields = ['id', 'name', 'description', 'organization', 'seniorities']
        
    def create(self, validated_data):
        seniorities_data = validated_data.pop('profileseniority_set')
        profile = Profile.objects.create(**validated_data)
        
        for seniority_data in seniorities_data:
            pokemon = seniority_data.pop('pokemon')
            seniority = seniority_data.pop('seniority')  
            ProfileSeniority.objects.create(seniority=seniority, pokemon=pokemon, profile=profile)
        
        return profile
    