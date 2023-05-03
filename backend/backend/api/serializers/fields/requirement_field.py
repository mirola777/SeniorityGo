from rest_framework import serializers
from api.models.requirement import Requirement
from api.serializers.requirement_serializer import RequirementSerializer


class RequirementField(serializers.PrimaryKeyRelatedField):
    def to_internal_value(self, data):
        if isinstance(data, dict):
            serializer = RequirementSerializer(data=data)
            serializer.is_valid(raise_exception=True)
            return serializer.save()
        else:
            try:
                requirement = Requirement.objects.get(pk=data)
                return requirement
            except Requirement.DoesNotExist:
                raise serializers.ValidationError('Requirement does not exist')

    def to_representation(self, value):
        requirement = Requirement.objects.get(pk=value.pk)
        serializer = RequirementSerializer(requirement)
        return serializer.data
