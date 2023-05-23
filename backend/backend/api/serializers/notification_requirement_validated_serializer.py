from api.serializers.notification_serializer import BaseNotificationSerializer
from api.models.notification_requirement_validated import NotificationRequirementValidated
from api.serializers.requirement_serializer import RequirementSerializer


class NotificationRequirementValidatedSerializer(BaseNotificationSerializer):
    requirement = RequirementSerializer(read_only=True)
    
    
    class Meta(BaseNotificationSerializer.Meta):
        model = NotificationRequirementValidated
        fields = '__all__'