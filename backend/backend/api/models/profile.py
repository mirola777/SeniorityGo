from django.db import models
#from models import ProfileSeniority

class Profile(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='profiles')
    seniorities = models.ManyToManyField('Seniority', through='ProfileSeniority')
