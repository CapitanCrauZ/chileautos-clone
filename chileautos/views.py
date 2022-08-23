from django.shortcuts import redirect,render

def clima(request):
    return render(request,'base/clima.html')