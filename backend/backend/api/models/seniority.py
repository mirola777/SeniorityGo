from django.db import models


class Seniority(models.Model):
    seniority = models.CharField(max_length=255)
    level = models.IntegerField()
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='seniorities')
    
    class Meta:
        unique_together = ['name', 'level', 'organization']
        constraints = [
            models.UniqueConstraint(fields=['name', 'organization'], name='unique_name_per_org'),
            models.UniqueConstraint(fields=['level', 'organization'], name='unique_level_per_org'),
        ]
