from api.serializers.request_serializer import BaseRequestSerializer
from api.models.request_join_profile import RequestJoinProfile
from api.serializers.profile_list_serializer import ProfileListSerializer


class RequestJoinProfileSerializer(BaseRequestSerializer):
    profile = ProfileListSerializer(read_only=True)
    
    class Meta(BaseRequestSerializer.Meta):
        model = RequestJoinProfile
        fields = '__all__'