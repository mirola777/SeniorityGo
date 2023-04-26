from django.db import models


def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class Organization(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    