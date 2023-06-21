from api.models.request import BaseRequest
from django.db import models


class RequestJoinProfile(BaseRequest):
    profile = models.ForeignKey('Profile', on_delete=models.CASCADE)