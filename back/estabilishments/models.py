from django.db import models
# from djongo import models

# Create your models here.
class Estabilishment(models.Model):

    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    instagram = models.CharField(max_length=30)
    open_time = models.TimeField()
    close_time = models.TimeField()

    def __str__(self):
        return f"name={self.name}, id={self.id}"

    # class Meta:
    #     managed = True
