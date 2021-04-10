from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Point
from . import serializers


class PointViewSet(viewsets.ModelViewSet):
    queryset = Point.objects.all()
    serializer_class = serializers.PointSerializer
