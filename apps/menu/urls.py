# Importando Path para generar Urls
from django.urls import path
# Importando los View para vincular una funcionalidad ocn una Url
from .views import menu,mantenimiento
urlpatterns = [
    path('', menu),
    path('m',mantenimiento)
]