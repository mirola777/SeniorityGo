from django.urls import path
from api.views import profile_views, pokemon_views

urlpatterns = [
    # Pokemon urls
    path("pokemon/all", pokemon_views.getAll),
    path("pokemon/create", pokemon_views.create),
    
    # Profile urls
    path("profile/all", profile_views.getAll),
    path("profile/create", profile_views.create),
]