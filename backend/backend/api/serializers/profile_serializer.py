from rest_framework import serializers
from api.models.profile import Profile
from api.models.seniority import Seniority
from api.models.profileseniority import ProfileSeniority
from api.serializers.profileseniority_serializer import ProfileSenioritySerializer

class ProfileSerializer(serializers.ModelSerializer):
    seniorities = ProfileSenioritySerializer(many=True, source='profileseniority_set')
    
    class Meta:
        model = Profile
        fields = ['id', 'name', 'description', 'organization', 'seniorities']
        
    def create(self, validated_data):
        print(validated_data)
        seniorities_data = validated_data.pop('profileseniority_set')
        profile = Profile.objects.create(**validated_data)
        
        for seniority_data in seniorities_data:
            seniority_dict = seniority_data.pop('seniority')
            seniority, _ = Seniority.objects.get_or_create(**seniority_dict)

       
            pokemon = seniority_data.pop('pokemon')
            ProfileSeniority.objects.create(seniority=seniority, pokemon=pokemon, profile=profile)
        
        return profile
    
    
    """
    {
"name" :"a",
"description" : "n",
"organization" : 1,
"seniorities":[
  {
     "seniority" :{
        "name" : "ooo",
"level" : 1,
"organization" : 1
 },
     "pokemon" : 1
  }
]
}"""