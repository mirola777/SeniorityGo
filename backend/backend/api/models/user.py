from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=30)
    second_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    password = models.CharField(max_length=128)
    creation_date = models.DateTimeField(auto_now_add=True)
