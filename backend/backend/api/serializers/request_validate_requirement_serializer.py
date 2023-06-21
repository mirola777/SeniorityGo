from api.serializers.request_serializer import BaseRequestSerializer
from api.models.request_validate_requirement import RequestValidateRequirement
from api.serializers.validate_file_serializer import ValidateFileSerializer
from api.serializers.requirement_serializer import RequirementSerializer


class RequestValidateRequirementSerializer(BaseRequestSerializer):
    requirement = RequirementSerializer(read_only=True)
    files = ValidateFileSerializer(source='validatefile_set', many=True, read_only=True)
    
    class Meta(BaseRequestSerializer.Meta):
        model = RequestValidateRequirement
        fields = ['id', 'requirement', 'files', 'developer', 'created_at', 'organization']