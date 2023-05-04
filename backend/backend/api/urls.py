from django.urls import path
from api.views import profile_views, pokemon_views, organization_views, seniority_views, requirement_views, developer_views, authentication_views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # Auth urls
    path("auth/token/", jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path("auth/token/refresh/", jwt_views.TokenRefreshView.as_view(), name ='token_refresh'),
    path("auth/logout/", authentication_views.logout),
    path("auth/session/", authentication_views.getUserSession),
    
    # Pokemon urls
    path("pokemon/", pokemon_views.getAll),
    path("pokemon/<int:pk>/", pokemon_views.get),
    
    # Profile urls
    path("profile/all/", profile_views.getAll),
    path("profile/organization/", profile_views.getOrganizationProfiles),
    path("profile/create/", profile_views.create),
    path("profile/get/<int:pk>/", profile_views.get),
    path("profile/update/<int:pk>/", profile_views.update),
    path("profile/delete/<int:pk>/", profile_views.delete),
    
    # Seniority urls
    path("seniority/all/", seniority_views.getAll),
    path("seniority/organization/", seniority_views.getOrganizationSeniorities),
    path("seniority/create/", seniority_views.create),
    path("seniority/get/<int:pk>/", seniority_views.get),
    path("seniority/update/<int:pk>/", seniority_views.update),
    path("seniority/delete/<int:pk>/", seniority_views.delete),
    
    # Organization urls
    path("organization/all/", organization_views.getAll),
    path("organization/create/", organization_views.create),
    path("organization/get/<int:pk>/", organization_views.get),
    path("organization/update/<int:pk>/", organization_views.update),
    path("organization/delete/<int:pk>/", organization_views.delete),
    
    # Requirement urls
    path("requirement/all/", requirement_views.getAll),
    path("requirement/organization/", requirement_views.getOrganizationRequirements),
    path("requirement/create/", requirement_views.create),
    path("requirement/get/<int:pk>/", requirement_views.get),
    path("requirement/update/<int:pk>/", requirement_views.update),
    path("requirement/delete/<int:pk>/", requirement_views.delete),

    # Developers urls
    path("developer/all/", developer_views.getAll),
    path("developer/create/", developer_views.create),
    path("developer/get/<int:pk>/", developer_views.get),
    path("developer/update/<int:pk>/", developer_views.update),
    path("developer/delete/<int:pk>/", developer_views.delete),

]