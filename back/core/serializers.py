from . import models
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = (
            "username",
            "name",
            "email",
        )
        write_only_fields = ("password",)
