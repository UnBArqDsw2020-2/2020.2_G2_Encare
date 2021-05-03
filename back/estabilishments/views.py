from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets

from django.shortcuts import get_object_or_404

from .models import Estabilishment
from .serializers import EstabilishmentSerializer

class EstabilishmentViewSet(viewsets.ViewSet):
    
    queryset = Estabilishment.objects.all()

    def create(self, request):
        data = request.data

        estabilishment = Estabilishment(
            name = data.get("name"), 
            phone = data.get("phone"),
            instagram = data.get("instagram"), 
            open_time = data.get("open_time"), 
            close_time = data.get("close_time")
        )
        
        estabilishment.save()

        serialized = EstabilishmentSerializer(estabilishment)
        return Response(serialized.data)

    def list(self, request):
        queryset = Estabilishment.objects.all()
        serialized = EstabilishmentSerializer(queryset, many=True)
        return Response(serialized.data)
        
    def retrieve(self, request, pk=None):
        estabilishment = get_object_or_404(self.queryset, id=pk)
        serialized = EstabilishmentSerializer(estabilishment)
        return Response(serialized.data)

    def update(self, request, pk=None):
        data = request.data
        estabilishment = get_object_or_404(self.queryset, id=pk)
        
        estabilishment.name = data.get("name", estabilishment.name)
        estabilishment.phone = data.get("phone", estabilishment.phone)
        estabilishment.instagram = data.get("instagram", estabilishment.instagram)
        estabilishment.open_time = data.get("open_time", estabilishment.open_time)
        estabilishment.close_time = data.get("close_time", estabilishment.close_time)

        estabilishment.save()

        serialized = EstabilishmentSerializer(estabilishment)
        return Response(serialized.data)

    def destroy(self, request, pk=None):
        estabilishment = get_object_or_404(self.queryset, id=pk)
        number = estabilishment.delete()
        return Response(number)
