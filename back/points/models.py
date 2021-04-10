# from django.db import models
from djongo import models


class Point(models.Model):

    id = models.ObjectIdField(db_column='_id', primary_key=True)

    points = models.CharField(
        max_length=1000,
        verbose_name=('Json of points'),
    )

    def __str__(self):
        return self.points
