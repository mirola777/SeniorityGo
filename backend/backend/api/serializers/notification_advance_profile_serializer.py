from api.serializers.notification_serializer import BaseNotificationSerializer
from api.models.notification_advance_profile import NotificationAdvanceProfile
from api.serializers.profile_list_serializer import ProfileListSerializer
from api.serializers.seniority_serializer import SenioritySerializer


class NotificationAdvanceProfileSerializer(BaseNotificationSerializer):
    profile = ProfileListSerializer(read_only=True)
    seniority = SenioritySerializer(read_only=True)
    
    
    class Meta(BaseNotificationSerializer.Meta):
        model = NotificationAdvanceProfile
        fields = '__all__'