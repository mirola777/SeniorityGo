from django.db import models


def upload_to(instance, filename):
    return 'images/requirements/{filename}'.format(filename=filename)


def default():
    return 'assets/requirement_default.png'


class Requirement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to=upload_to, default=default, blank=True, null=True)
    points = models.IntegerField()
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='requirements')
