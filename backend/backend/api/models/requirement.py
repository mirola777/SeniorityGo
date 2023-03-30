from django.db import models


class Requirement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField()
    points = models.IntegerField()
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='requirements')
    
    class Meta:
        unique_together = ['name', 'organization']
