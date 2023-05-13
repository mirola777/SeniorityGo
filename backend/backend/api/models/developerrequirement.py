from django.db import models


class DeveloperRequirement(models.Model):
    developer = models.ForeignKey('Developer', on_delete=models.CASCADE)
    requirement = models.ForeignKey('Requirement', on_delete=models.CASCADE)
    is_completed = models.BooleanField(default=False)
    #documents = models.ManyToManyField('File')