from django.db import models
from django.contrib.auth.models import User


def upload_to(instance, filename):
    return 'images/user/{filename}'.format(filename=filename)


def default_avatar():
    return 'assets/user_default.png'


class Developer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    first_name = models.CharField(max_length=50, blank=True)
    second_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True)
    role = models.CharField(max_length=50, default='developer')
    birthday = models.DateField()
    avatar = models.ImageField(upload_to=upload_to, default=default_avatar, blank=True, null=True)
    phone_number = models.CharField(max_length=50)
    is_activated = models.BooleanField(default=False)
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, default=1)