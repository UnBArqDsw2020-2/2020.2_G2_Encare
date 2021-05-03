from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager


class Geolocation:
    latitude = models.FloatField()


class CustomUser(AbstractUser):
    email = models.EmailField(
        _("email address"),
        unique=True,
        blank=False,
        error_messages={
            "unique": "A user with that email already exists.",
        },
    )

    name = models.CharField(
        _("Name"),
        default="",
        max_length=200,
        blank=False,
        null=False,
    )

    username = models.CharField(
        _("Username"),
        default="",
        max_length=200,
        blank=False,
        null=False,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Customer(CustomUser):
    def chat_establishment(self):
        pass

    def rate_establishment(self):
        pass

    def get_geolocation(self):
        pass

    def set_establishment(self):
        pass


class Owner(CustomUser):
    def create_establishment(self):
        pass

    def delete_establishment(self):
        pass

    def edit_establishment(self):
        pass

    def create_service(self):
        pass

    def delete_service(self):
        pass

    def edit_service(self):
        pass


class Admin(CustomUser):
    def delete_user(self):
        pass

    def delete_establishment(self):
        pass

    def delete_service(self):
        pass

    def delete_rating(self):
        pass
