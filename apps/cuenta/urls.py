from django.contrib import admin
from django.urls import path, include
from .views import registro, iniciarSesion, salir, perfil
from django.contrib.auth.views import LogoutView

#
urlpatterns = [
    path('registro/', registro, name='registro'),
    path('', iniciarSesion, name='iniciarSesion'),
    path('menu/', salir, name='salir'),
    path('perfil/', perfil, name='perfil'),
    path('salir/', LogoutView.as_view(), name='salirFB'),
    path('social/',include('social_django.urls', namespace='social')) #social:url
]