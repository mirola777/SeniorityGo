from rest_framework import serializers
from api.models.organization import Organization


class OrganizationListSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    name = serializers.CharField(required=True) 
    
      
    def validate(self, attrs):
        
        name = attrs.get('name', None)
        if Organization.objects.filter(name=name).exclude(pk=self.instance.pk if self.instance else None).exists():            
            raise serializers.ValidationError('organization_unique_name')
        
        return super().validate(attrs)


    class Meta:
        model = Organization
        fields = ['id', 'name', 'image']