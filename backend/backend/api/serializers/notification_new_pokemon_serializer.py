from api.serializers.notification_serializer import BaseNotificationSerializer
from api.models.notification_new_pokemon import NotificationNewPokemon
from api.models.pokemon import Pokemon
from api.serializers.fields.pokemon_field import PokemonField



class NotificationNewPokemonSerializer(BaseNotificationSerializer):
    pokemon = PokemonField(queryset=Pokemon.objects.all())
    
    class Meta(BaseNotificationSerializer.Meta):
        model = NotificationNewPokemon
        fields = '__all__'