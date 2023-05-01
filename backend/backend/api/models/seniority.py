from django.db import models


class Seniority(models.Model):
    name = models.CharField(max_length=255)
    level = models.IntegerField()
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='seniorities')
