# Importando Path para generar Urls
from django.urls import path
# Importando los View para vincular una funcionalidad ocn una Url
from .views import *
urlpatterns = [
    path('agregar/', agregarAuto, name='agregar_auto'),
    path('eliminar/<int:id_auto>', eliminarAuto, name='eliminar_auto'),
    path('modificar/<int:id_auto>', modificarAuto, name='modificar_auto'),
    path('', listarAutos, name='listar_auto'),
    path('tienda/',listarAuto , name='prueba'),
    path('agregarCarro/<int:id_auto>', agregarCarro, name='agregarCarro'),
    path('borrar/<int:id_auto>',borrar, name='borrar'),
    path('limpiar/', limpiar, name='limpiar'),
    path('fail/', fail, name='fail'),
    

]
