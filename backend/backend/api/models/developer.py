from django.db import models


class Developer(models.Model):
    #user = models.OneToOneField(User, on_delete=models.CASCADE)
    birthday = models.DateField()
    avatar = models.TextField()
    phone_number = models.CharField(max_length=20)
    is_activated = models.BooleanField()
    profiles = models.ManyToManyField('Profile', through='DeveloperProfile')
    requirements = models.ManyToManyField('Requirement', through='DeveloperRequirement')