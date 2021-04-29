from django.shortcuts import get_object_or_404
from .models import EstabilishmentModel

class Estabilishment:

    def create(new_estabilishment):

        estabilishment = EstabilishmentModel.objects.create(
            name = new_estabilishment["name"], 
            phone = new_estabilishment["phone"],
            instagram = new_estabilishment["instagram"], 
            open_time = new_estabilishment["open_time"], 
            close_time = new_estabilishment["close_time"]
        )
        
        estabilishment.save()
        return estabilishment
    
    def get_all():
        
        all_estabilishments = EstabilishmentModel.objects.all()
        return all_estabilishments

    def get_estabilishment(id=None):

        queryset = EstabilishmentModel.objects.all()
        estabilishment = get_object_or_404(queryset, id=id)
        return estabilishment

    def update(data, id=None):
        
        queryset = EstabilishmentModel.objects.all()
        estabilishment = get_object_or_404(queryset, id=id)
        
        estabilishment.name = data.get("name", estabilishment.name)
        estabilishment.phone = data.get("phone", estabilishment.phone)
        estabilishment.instagram = data.get("instagram", estabilishment.instagram)
        estabilishment.open_time = data.get("open_time", estabilishment.open_time)
        estabilishment.close_time = data.get("close_time", estabilishment.close_time)

        estabilishment.save()
        return estabilishment

    def delete(id=None):
        
        queryset = EstabilishmentModel.objects.all()
        estabilishment = get_object_or_404(queryset, id=id)
        number = estabilishment.delete()
        return number[0]