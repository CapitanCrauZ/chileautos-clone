class Carro:
    def __init__(self, request):
        self.request = request
        self.session = request.session
        carro= self.session.get("carro")
        if not carro:
            carro = self.session["carro"] = {}
        
        self.carro = carro 

    def agregarAuto(self, auto):
        if str(auto.id) not in self.carro.keys():
            self.carro[auto.id] = {
                "auto_id":auto.id,
                "nombre":auto.nombre,
                "precio":str(auto.precio),
                
            }
        self.save()

    def save(self):
        self.session["carro"] = self.carro
        self.session.modified = True

    def remove(self, auto):
        auto_id = str(auto.id)
        if(auto_id) in self.carro:
            del self.carro[auto_id]
            self.save()

    def clear(self):
        self.session["carro"] = {}
        self.session.modified =True