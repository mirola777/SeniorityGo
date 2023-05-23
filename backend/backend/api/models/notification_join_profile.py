from api.models.notification import BaseNotification
from django.db import models


class NotificationJoinProfile(BaseNotification):
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)