from django.db import models


def upload_to(instance, filename):
    return 'images/organization/{filename}'.format(filename=filename)


def default_image():
    return 'assets/organization_default.png'


class Organization(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to=upload_to, default=default_image, blank=True, null=True)
    