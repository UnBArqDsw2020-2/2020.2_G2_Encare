from . import models
from rest_framework import serializers


class RegisterUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField()

    class Meta:
        model = models.CustomUser
        fields = ("username", "name", "email", "password")
