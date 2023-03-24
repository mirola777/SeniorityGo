from django.db import models


class DeveloperProfile(models.Model):
    developer = models.ForeignKey('Developer', on_delete=models.CASCADE)
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)
    seniority = models.ForeignKey('Seniority', on_delete=models.CASCADE)
    is_accepted = models.BooleanField()
    entrance_date = models.DateField()