from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Auto,Categoria
from .forms import AutoForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .carro import Carro


# Create your views here.

def agregarAuto(request):    
    formulario = AutoForm()
    if request.method == 'POST':
        formulario = AutoForm(request.POST, request.FILES)
        if formulario.is_valid():
            auto = formulario.save(commit=False)
            auto.vendedor = request.user
            auto.save()           
            return redirect('/auto/')
    context = {
        'titulo':'Agregar Auto',
        'formulario':formulario      
    }
    return render(
        request,
        'auto/agregar.html',
        context
    )

def eliminarAuto(request, id_auto):
    autoEncontrado = Auto.objects.get(pk = id_auto)
    autoEncontrado.delete()
    return redirect('/auto/')


def modificarAuto(request, id_auto):
    autoEncontrado = Auto.objects.get(pk=id_auto)
    formulario = AutoForm(instance=autoEncontrado)  
    if request.method == 'POST':
        formulario = AutoForm(request.POST, instance=autoEncontrado)
        if formulario.is_valid():
            formulario.save()
            return redirect('/auto/')
    context = {
        'titulo':'Modificar Auto',
        'formulario':formulario,
    }
    return render(
        request,
        'auto/modificar.html',
        context
    )

def listarAutos(request):
    autos = Auto.objects.all()
    context = {
        'titulo':'Listar Auto',
        'autos':autos,
    }
    return render(
        request,
        'auto/listar.html',
        context
    )


def listarAuto(request):
    autos = Auto.objects.all()
    context = {
        'titulo':'Listar Auto',
        'autos':autos,
    }
    return render(
        request,
        'auto/tienda.html',
        context
    )

def fail(request):
    context = {
        'titulo':'Fail Auto'
    }
    return render(
        request,
        'auto/fail.html',
        context
    )

@login_required(login_url="/auto/fail/")
def agregarCarro(request, id_auto):
    carro = Carro(request)
    auto = Auto.objects.get(id = id_auto)
    carro.agregarAuto(auto=auto)
    return redirect("/auto/tienda/")

@login_required(login_url="/auto/fail/")
def borrar(request, id_auto):
    carro = Carro(request)
    auto = Auto.objects.get(id = id_auto)
    carro.remove(auto=auto)
    return redirect("/auto/tienda/")


@login_required(login_url="/auto/fail")
def limpiar(request):
    carro= Carro(request)
    carro.clear()
    return redirect("/auto/tienda/")




