from rest_framework import serializers
from api.models.notification import BaseNotification


class BaseNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseNotification
        fields = ['id', 'user', 'message', 'created_at', 'seen']
        abstract = True