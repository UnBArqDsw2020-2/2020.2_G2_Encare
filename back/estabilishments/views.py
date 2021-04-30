from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets

from .estabilishment import Estabilishment
from .serializers import EstabilishmentSerializer

class EstabilishmentViewSet(viewsets.ViewSet):
    
    estabilishment = Estabilishment()

    def create(self, request):
        new_estabilishment = self.estabilishment.create(request.data)
        serialized = EstabilishmentSerializer(new_estabilishment)
        return Response(serialized.data)

    def list(self, request):
        estabilishments = self.estabilishment.get_all()
        serialized = EstabilishmentSerializer(estabilishments, many=True)
        return Response(serialized.data)
        
    def retrieve(self, request, pk=None):
        estabilishment = self.estabilishment.get(pk)
        serialized = EstabilishmentSerializer(estabilishment)
        return Response(serialized.data)

    def update(self, request, pk=None):
        estabilishment = self.estabilishment.update(request.data, pk)
        serialized = EstabilishmentSerializer(estabilishment)
        return Response(serialized.data)

    def destroy(self, request, pk=None):
        number = self.estabilishment.delete(pk)
        return Response(number)
