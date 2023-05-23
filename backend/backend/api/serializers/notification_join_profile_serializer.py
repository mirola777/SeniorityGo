from api.serializers.notification_serializer import BaseNotificationSerializer
from api.models.notification_join_profile import NotificationJoinProfile
from api.serializers.profile_list_serializer import ProfileListSerializer


class NotificationProfileJoinSerializer(BaseNotificationSerializer):
    profile = ProfileListSerializer(read_only=True)
    
    
    class Meta(BaseNotificationSerializer.Meta):
        model = NotificationJoinProfile
        fields = '__all__'