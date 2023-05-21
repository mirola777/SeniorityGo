from django.db import models
from django.contrib.auth.models import User


def upload_to(instance, filename):
    return 'images/user/{filename}'.format(filename=filename)


def default_avatar():
    return 'assets/user_default.png'


class Admin(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, default='admin')
    avatar = models.ImageField(upload_to=upload_to, default=default_avatar, blank=True, null=True)
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, default=1)