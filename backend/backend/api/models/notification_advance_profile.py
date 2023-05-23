from api.models.notification import BaseNotification
from django.db import models


class NotificationAdvanceProfile(BaseNotification):
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)
    seniority = models.ForeignKey('Seniority', on_delete=models.CASCADE)