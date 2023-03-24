from rest_framework import serializers
from models.seniority import Seniority

class SenioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Seniority
        fields = ['id', 'name', 'level']