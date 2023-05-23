from api.models.notification import BaseNotification
from django.db import models


class NotificationRequirementValidated(BaseNotification):
    requirement = models.ForeignKey('Requirement', on_delete=models.CASCADE)