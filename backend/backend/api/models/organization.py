from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=255)
    image = models.TextField()
    