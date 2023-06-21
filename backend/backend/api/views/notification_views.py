from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from api.models.notification_join_profile import NotificationJoinProfile
from api.serializers.notification_join_profile_serializer import NotificationProfileJoinSerializer
from api.serializers.notification_requirement_validated_serializer import NotificationRequirementValidatedSerializer
from api.models.notification_requirement_validated import NotificationRequirementValidated
from api.models.notification_advance_profile import NotificationAdvanceProfile
from api.serializers.notification_advance_profile_serializer import NotificationAdvanceProfileSerializer
from api.serializers.notification_admin_advance_profile_serializer import NotificationAdminAdvanceProfileSerializer
from api.models.notification_admin_advance_profile import NotificationAdminAdvanceProfile
from api.models.notification_new_pokemon import NotificationNewPokemon
from api.serializers.notification_new_pokemon_serializer import NotificationNewPokemonSerializer
from api.serializers.notification_new_user_serializer import NotificationNewUserSerializer
from api.models.notification_new_user import NotificationNewUser
from api.models.notification_request import NotificationRequest
from api.serializers.notification_request_serializer import NotificationRequestSerializer
from rest_framework.permissions import IsAuthenticated



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAll(request):
    notifications = []

    notifications += list(NotificationJoinProfile.objects.filter(user=request.user.id))
    notifications += list(NotificationRequirementValidated.objects.filter(user=request.user.id))
    notifications += list(NotificationAdvanceProfile.objects.filter(user=request.user.id))
    notifications += list(NotificationAdminAdvanceProfile.objects.filter(user=request.user.id))
    notifications += list(NotificationNewPokemon.objects.filter(user=request.user.id))
    notifications += list(NotificationNewUser.objects.filter(user=request.user.id))
    notifications += list(NotificationRequest.objects.filter(user=request.user.id))

    sorted_notifications = sorted(notifications, key=lambda x: x.created_at, reverse=True)

    serialized_data = []

    for notification in sorted_notifications:
        if isinstance(notification, NotificationJoinProfile):
            serialized_data.append(NotificationProfileJoinSerializer(notification).data)
        elif isinstance(notification, NotificationRequirementValidated):
            serialized_data.append(NotificationRequirementValidatedSerializer(notification).data)
        elif isinstance(notification, NotificationAdvanceProfile):
            serialized_data.append(NotificationAdvanceProfileSerializer(notification).data)
        elif isinstance(notification, NotificationAdminAdvanceProfile):
            serialized_data.append(NotificationAdminAdvanceProfileSerializer(notification).data)
        elif isinstance(notification, NotificationNewPokemon):
            serialized_data.append(NotificationNewPokemonSerializer(notification).data)
        elif isinstance(notification, NotificationNewUser):
            serialized_data.append(NotificationNewUserSerializer(notification).data)
        elif isinstance(notification, NotificationRequest):
            serialized_data.append(NotificationRequestSerializer(notification).data)
            
    serialized_data = serialized_data[:100]

    return Response(serialized_data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotSeen(request):
    notifications = NotificationJoinProfile.objects.filter(seen=False, user=request.user.id) 
    serialized_data = NotificationProfileJoinSerializer(notifications, many=True).data
    NotificationJoinProfile.objects.filter(seen=False).update(seen=True)
    
    notifications = NotificationRequirementValidated.objects.filter(seen=False, user=request.user.id) 
    serialized_data += NotificationRequirementValidatedSerializer(notifications, many=True).data
    NotificationRequirementValidated.objects.filter(seen=False).update(seen=True)
    
    notifications = NotificationAdvanceProfile.objects.filter(seen=False, user=request.user.id)
    serialized_data += NotificationAdvanceProfileSerializer(notifications, many=True).data
    NotificationAdvanceProfile.objects.filter(seen=False).update(seen=True)
    
    notifications = NotificationAdminAdvanceProfile.objects.filter(seen=False, user=request.user.id)
    serialized_data += NotificationAdminAdvanceProfileSerializer(notifications, many=True).data
    NotificationAdminAdvanceProfile.objects.filter(seen=False).update(seen=True)
    
    notifications = NotificationNewPokemon.objects.filter(seen=False, user=request.user.id)
    serialized_data += NotificationNewPokemonSerializer(notifications, many=True).data
    NotificationNewPokemon.objects.filter(seen=False).update(seen=True)
    
    notifications = NotificationNewUser.objects.filter(seen=False, user=request.user.id)
    serialized_data += NotificationNewUserSerializer(notifications, many=True).data
    NotificationNewUser.objects.filter(seen=False).update(seen=True)
    
    notifications = NotificationRequest.objects.filter(seen=False, user=request.user.id)
    serialized_data += NotificationRequestSerializer(notifications, many=True).data
    NotificationRequest.objects.filter(seen=False).update(seen=True)
    
    return Response(serialized_data)