# from django.shortcuts import render
# from django.http import HttpRequest, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
# from rest_framework.decorators import api_view
from rest_framework import viewsets

from .estabilishment import Estabilishment
from .serializers import EstabilishmentSerializer

class EstabilishmentViewSet(viewsets.ViewSet):
    
    def create(self, request):
        new_estabilishment = Estabilishment.create(request.data)
        # print(new_estabilishment)
        serialized = EstabilishmentSerializer(new_estabilishment)
        return Response(serialized.data)

    def list(self, request):
        estabilishments = Estabilishment.get_all()
        serialized = EstabilishmentSerializer(estabilishments, many=True)
        return Response(serialized.data)
        
    def retrieve(self, request, pk=None):
        estabilishment = Estabilishment.get_estabilishment(pk)
        serialized = EstabilishmentSerializer(estabilishment)
        return Response(serialized.data)

    def update(self, request, pk=None):
        estabilishment = Estabilishment.update(request.data, pk)
        serialized = EstabilishmentSerializer(estabilishment)
        return Response(serialized.data)

    def destroy(self, request, pk=None):
        number = Estabilishment.delete(pk)
        return Response(number)

# from rest_framework import viewsets, status
# from rest_framework.response import Response

# # from .estabilishment import Estabilishment
# from .models import EstabilishmentModel
# from . import serializers

# class EstabilishmentViewSet(viewsets.ModelViewSet):

#     # def create(self, request):
#     queryset = EstabilishmentModel.objects.all()
#     serializer_class = serializers.EstabilishmentSerializer