from api.models.request import BaseRequest
from django.db import models


class RequestValidateRequirement(BaseRequest):
    requirement = models.ForeignKey('Requirement', on_delete=models.CASCADE)