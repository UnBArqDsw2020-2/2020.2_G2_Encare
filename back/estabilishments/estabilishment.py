from django.shortcuts import get_object_or_404
from .models import EstabilishmentModel

class Estabilishment:

    queryset = EstabilishmentModel.objects.all()

    def create(self, data):

        estabilishment = EstabilishmentModel(
            name = data.get("name"), 
            phone = data.get("phone"),
            instagram = data.get("instagram"), 
            open_time = data.get("open_time"), 
            close_time = data.get("close_time")
        )
        
        estabilishment.save()
        return estabilishment
    
    def get_all(self):
        return self.queryset

    def get(self, id=None):
        estabilishment = get_object_or_404(self.queryset, id=id)
        return estabilishment

    def update(self, data, id=None):

        estabilishment = get_object_or_404(self.queryset, id=id)
        
        estabilishment.name = data.get("name", estabilishment.name)
        estabilishment.phone = data.get("phone", estabilishment.phone)
        estabilishment.instagram = data.get("instagram", estabilishment.instagram)
        estabilishment.open_time = data.get("open_time", estabilishment.open_time)
        estabilishment.close_time = data.get("close_time", estabilishment.close_time)

        estabilishment.save()
        return estabilishment

    def delete(self, id=None):
        estabilishment = get_object_or_404(self.queryset, id=id)
        number = estabilishment.delete()
        return number[0]