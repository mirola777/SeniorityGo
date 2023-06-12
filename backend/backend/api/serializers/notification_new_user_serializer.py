from api.serializers.notification_serializer import BaseNotificationSerializer
from api.models.notification_new_user import NotificationNewUser
from api.serializers.developer_small_serializer import DeveloperSmallSerializer



class NotificationNewUserSerializer(BaseNotificationSerializer):
    developer = DeveloperSmallSerializer()
    
    class Meta(BaseNotificationSerializer.Meta):
        model = NotificationNewUser
        fields = '__all__'