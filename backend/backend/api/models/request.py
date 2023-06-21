from django.db import models


class BaseRequest(models.Model):
    developer = models.ForeignKey('Developer', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE)
    
    
    class Meta:
        abstract = True