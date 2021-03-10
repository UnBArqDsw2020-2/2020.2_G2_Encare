from . import models
from rest_framework import serializers


class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Point
        fields = (
            'points',
            'id'
        )
        read_only_fields = ('id',)
