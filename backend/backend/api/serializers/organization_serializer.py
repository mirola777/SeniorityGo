from rest_framework import serializers
from api.models.organization import Organization
from api.serializers.profile_list_serializer import ProfileListSerializer
from api.serializers.seniority_serializer import SenioritySerializer
from api.serializers.requirement_serializer import RequirementSerializer
        

class OrganizationSerializer(serializers.ModelSerializer):
    profiles = ProfileListSerializer(read_only=True, many=True)
    seniorities = SenioritySerializer(read_only=True, many=True)
    requirements = RequirementSerializer(read_only=True, many=True)
    image = serializers.ImageField(required=False)
    name = serializers.CharField(required=True) 
    
      
    def validate(self, attrs):
        
        name = attrs.get('name', None)
        if Organization.objects.filter(name=name).exclude(pk=self.instance.pk if self.instance else None).exists():            
            raise serializers.ValidationError('organization_unique_name')
        
        return super().validate(attrs)


    class Meta:
        model = Organization
        fields = ['id', 'name', 'image', 'profiles', 'seniorities', 'requirements']
       
