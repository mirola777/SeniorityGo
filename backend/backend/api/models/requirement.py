from django.db import models


def upload_to(instance, filename):
    return 'images/requirements/{filename}'.format(filename=filename)


class Requirement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    points = models.IntegerField()
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE, related_name='requirements')
    
    class Meta:
        unique_together = ['name', 'organization']
