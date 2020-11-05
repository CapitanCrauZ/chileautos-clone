from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def menu(request):
    return render(
        request,
        'menu/menu.html'
    )

def mantenimiento(request):
    return render(
        request,
        'menu/m.html'
    )
