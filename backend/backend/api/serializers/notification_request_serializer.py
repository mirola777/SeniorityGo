from api.serializers.notification_serializer import BaseNotificationSerializer
from api.models.notification_request import NotificationRequest
from api.serializers.developer_small_serializer import DeveloperSmallSerializer



class NotificationRequestSerializer(BaseNotificationSerializer):
    developer = DeveloperSmallSerializer()
    
    class Meta(BaseNotificationSerializer.Meta):
        model = NotificationRequest
        fields = '__all__'