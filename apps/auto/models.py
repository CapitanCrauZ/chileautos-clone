from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Categoria(models.Model):
   name = models.CharField(max_length=40)

   def __str__(self):
       return self.name
   class Meta:
       #para darle nombre a la tabla
       db_table = 'categoria'
       verbose_name = 'Categoría'
       ordering = ['id']



class Auto(models.Model):
    nombre = models.CharField(max_length=50,null=False,blank=False)
    modelo = models.CharField(max_length=50)
    marca = models.CharField(max_length=50)
    detalle = models.TextField(max_length=50)
    año = models.PositiveIntegerField()
    precio = models.PositiveIntegerField()
    imagenAuto = models.FileField(upload_to='fotos', default=None)
    categoria = models.ForeignKey(Categoria,on_delete=models.CASCADE, default=None)
    vendedor = models.ForeignKey(User,on_delete=models.CASCADE, default =None,blank=True,null= True)