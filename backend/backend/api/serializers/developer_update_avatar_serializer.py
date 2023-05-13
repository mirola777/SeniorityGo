from rest_framework.validators import ValidationError
from rest_framework import serializers
from api.models.developer import Developer


class DeveloperUpdateAvatarSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=True)

    class Meta:
        model = Developer
        fields = ['avatar']
        
    def is_valid(self, *, raise_exception=False):
        try:
            return super().is_valid(raise_exception=True)
        except ValidationError as e:  
            if 'The submitted data was not a file. Check the encoding type on the form.' in str(e.detail):
                self._errors = {'errors': ["empty_avatar"]}
        
        return False
