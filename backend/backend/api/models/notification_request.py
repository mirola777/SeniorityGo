from api.models.notification import BaseNotification
from django.db import models


class NotificationRequest(BaseNotification):
    developer = models.ForeignKey('Developer', on_delete=models.CASCADE)