from rest_framework import serializers
from api.models.validate_file import ValidateFile


class ValidateFileSerializer(serializers.ModelSerializer):
    file = serializers.FileField(required=True)

    class Meta:
        model = ValidateFile
        fields = ['file']