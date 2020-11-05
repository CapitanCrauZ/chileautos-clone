def cart_total_amount(request):
    total = 0
    if request.user.is_authenticated:
        for key, value in request.session['carro'].items():
            total = total + (int(value['precio']))
    return {'cart_total_amount': total}