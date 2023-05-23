from api.models.notification import BaseNotification
from django.db import models


class NotificationAdminAdvanceProfile(BaseNotification):
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)
    seniority = models.ForeignKey('Seniority', on_delete=models.CASCADE)
    developer = models.ForeignKey('Developer', on_delete=models.CASCADE)