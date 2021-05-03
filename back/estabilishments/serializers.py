from . import models
from rest_framework import serializers


class EstabilishmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Estabilishment
        fields = (
            'name',
            'phone',
            'instagram',
            'open_time',
            'close_time',
            'id'
        )
        read_only_fields = ('id',)