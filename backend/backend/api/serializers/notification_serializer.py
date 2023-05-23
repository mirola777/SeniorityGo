from rest_framework import serializers
from api.models.notification import BaseNotification
from api.models.notification_requirement_validated import NotificationRequirementValidated
from api.serializers.requirement_serializer import RequirementSerializer


class BaseNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseNotification
        fields = ['id', 'user', 'message', 'created_at', 'seen']
        abstract = True