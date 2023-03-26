from django.db import models


class ProfileSeniority(models.Model):
    seniority = models.ForeignKey('Seniority', on_delete=models.CASCADE)
    pokemon = models.ForeignKey('Pokemon', on_delete=models.CASCADE)
    #pokemon = models.CharField(max_length=255)
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)