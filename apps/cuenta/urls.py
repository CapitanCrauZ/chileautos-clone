from django.urls import path
from .views import registro, iniciarSesion, salir, perfil
#
urlpatterns = [
    path('registro/', registro, name='registro'),
    path('', iniciarSesion, name='iniciarSesion'),
    path('menu/', salir, name='salir'),
    path('perfil/', perfil, name='perfil')
]