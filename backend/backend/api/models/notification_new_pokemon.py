from api.models.notification import BaseNotification
from django.db import models


class NotificationNewPokemon(BaseNotification):
    pokemon = models.ForeignKey('Pokemon', on_delete=models.CASCADE)