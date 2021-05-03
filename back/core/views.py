from django.contrib.auth import authenticate
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Customer, Owner, Admin, CustomUser
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def create(self, request):
        """
        Criação de usuários. Envie um POST para esta rota, e inclua na request:
        - username
        - name
        - password
        - email

        E caso queira criar um Owner, envie o:
        - owner == true

        E caso queira criar Admin:
        - admin == true
        - O usuário logado para criar admin deve ser admin também
        """

        if request.user is not None and not isinstance(request.user, Admin):
            raise Exception("Cannot create user while logged in")

        if isinstance(request.user, Admin) and request.data.admin:
            user = Admin(
                username=request.data.username,
                email=request.data.email,
                name=request.data.name,
            )
            user.set_password(request.data.password)
        elif request.data.admin:
            raise Exception("Only admins can create other admins")

        if request.data.owner:
            user = Owner(
                username=request.data.username,
                email=request.data.email,
                name=request.data.name,
            )
            user.set_password(request.data.password)
        else:
            user = Customer(
                username=request.data.username,
                email=request.data.email,
                name=request.data.name,
            )
            user.set_password(request.data.password)

        if user is not None:
            return Response(
                data={"message": "User has been successfully created"},
                status_code=201,
            )

        raise Exception("Unknown error, user was not created.")
