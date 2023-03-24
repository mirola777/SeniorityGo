from django.db import models
from .profile import Profile


class Organization(models.Model):
    name = models.CharField(max_length=255)
    image = models.TextField()
    profiles = models.ManyToManyField(Profile)