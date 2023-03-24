from django.db import models


class Requirement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField()
    points = models.IntegerField()
