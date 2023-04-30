from django.db import models
from django.contrib.auth.models import User


class Admin(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, default='admin')