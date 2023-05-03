from django.db import models


class Pokemon(models.Model):
    id = models.PositiveIntegerField(primary_key=True)