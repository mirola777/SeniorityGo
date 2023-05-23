from django.db import models


class DeveloperPokemon(models.Model):
    developer = models.ForeignKey('Developer', on_delete=models.CASCADE)
    pokemon = models.ForeignKey('Pokemon', on_delete=models.CASCADE)