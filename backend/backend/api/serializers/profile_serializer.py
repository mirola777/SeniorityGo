
from api.models.profile import Profile
from drf_writable_nested.serializers import WritableNestedModelSerializer
from api.serializers.profileseniority_serializer import ProfileSenioritySerializer

class ProfileSerializer(WritableNestedModelSerializer):
    profileseniority_set = ProfileSenioritySerializer(many=True, required=False)

    class Meta:
        model = Profile
        fields = ['id', 'name', 'description', 'organization', 'profileseniority_set']