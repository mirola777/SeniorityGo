from django.db import models


class ValidateFile(models.Model):
    request = models.ForeignKey('RequestValidateRequirement', on_delete=models.CASCADE)
    file = models.FileField(upload_to='files/')
