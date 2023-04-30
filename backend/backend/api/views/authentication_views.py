from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from api.serializers.user_serializer import UserSerializer
from api.serializers.developer_serializer import DeveloperSerializer
from api.serializers.admin_serializer import AdminSerializer
from api.models.admin import Admin
from api.models.developer import Developer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request): 
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserSession(request):
    if Developer.objects.filter(user=request.user.id).exists():
        developer = Developer.objects.get(user=request.user.id)
        serializer = DeveloperSerializer(developer)
        
    if Admin.objects.filter(user=request.user.id).exists():
        admin = Admin.objects.get(user=request.user.id)
        serializer = AdminSerializer(admin)
    
    
    return Response(serializer.data)