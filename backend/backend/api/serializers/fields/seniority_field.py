from rest_framework import serializers
from api.models.seniority import Seniority
from api.serializers.seniority_serializer import SenioritySerializer


class SeniorityField(serializers.PrimaryKeyRelatedField):
    def to_internal_value(self, data):
        if isinstance(data, dict):
            seniority_serializer = SenioritySerializer(data=data)
            seniority_serializer.is_valid(raise_exception=True)
            return seniority_serializer.save()
        else:
            try:
                seniority = Seniority.objects.get(pk=data)
                return seniority
            except Seniority.DoesNotExist:
                raise serializers.ValidationError('Seniority does not exist')
    
    def to_representation(self, value):
        seniority = Seniority.objects.get(pk=value.pk)
        serializer = SenioritySerializer(seniority)
        return serializer.data