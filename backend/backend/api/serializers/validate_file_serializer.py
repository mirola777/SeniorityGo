from rest_framework import serializers
from api.models.validate_file import ValidateFile


class ValidateFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ValidateFile
        fields = ['file']