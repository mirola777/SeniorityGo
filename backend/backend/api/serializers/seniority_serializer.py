from rest_framework import serializers
from api.models.seniority import Seniority

class SenioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Seniority
        fields = ['id', 'seniority', 'level', 'organization']