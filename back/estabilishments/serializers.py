from . import models
from rest_framework import serializers


class EstabilishmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EstabilishmentModel
        fields = (
            'name',
            'phone',
            'instagram',
            'open_time',
            'close_time',
            'id'
        )
        read_only_fields = ('id',)