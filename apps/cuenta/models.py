from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Genero(models.Model):
    detalleGenero = models.CharField(max_length=45, blank=False)
    
    def __str__(self):
        return self.detalleGenero

class PerfilUsuario(models.Model):
    genero = models.ForeignKey(Genero, on_delete=models.CASCADE)
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, blank=True)



