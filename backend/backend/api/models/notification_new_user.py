from api.models.notification import BaseNotification
from django.db import models


class NotificationNewUser(BaseNotification):
    developer = models.ForeignKey('Developer', on_delete=models.CASCADE)