from django.db import models


def upload_to(instance, filename):
    return 'files/{filename}'.format(filename=filename)



class ValidateFile(models.Model):
    request = models.ForeignKey('RequestValidateRequirement', on_delete=models.CASCADE)
    file = models.FileField(upload_to=upload_to)
