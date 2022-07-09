### Bienvenido al repositorio de Chileautos

### Table of Contents

- [Introducción](#Introducción).
- [Requerimientos](#Requerimientos).
- [Imagenes de la pagina web](#Imagenes-de-a-pagina-web).
- [Modelos](#Modelos).
- [Funciones](#Funciones).
- [Colaboradores](#Colaboradores).

### Introducción
-Este repositorio trata sobre una pagina web de venta de vehiculos trabajada con Django, JavaScript, HTML5 y MySQL con el editor de codigo Visual Studio Code.


### Requerimientos 
En esta sección podemos ver los requerimientos para poder ocupar este código.
                
   + python==3.7
   + asgiref==3.2.10
   + astroid==2.4.2
   + colorama==0.4.3
   + Django==3.1.2
   + isort==5.5.3
   + lazy-object-proxy==1.4.3
   + mccabe==0.6.1
   + mysql-connector-python==8.0.21
   + mysqlclient==2.0.1
   + Pillow==8.0.1
   + pylint==2.6.0
   + pymongo==3.11.0
   + pytz==2020.1
   + six==1.15.0
   + sqlparse==0.3.1
   + toml==0.10.1
   + typed-ast==1.4.1
   + wrapt==1.12.1

### Imagenes de la pagina web



> Menu Principal
![](https://github.com/PhillipsMayfir/Prueba/blob/master/1.png?raw=true)

> Login
![](https://github.com/PhillipsMayfir/Prueba/blob/master/2.png?raw=true)

> Registro Usuario
![](https://github.com/PhillipsMayfir/Prueba/blob/master/3.png?raw=true)

> Menú Autos Desplegandosé(por resolucción se ve mal pero está arreglado)(El Felipe la Trolleo)
![](https://github.com/PhillipsMayfir/Prueba/blob/master/4.png?raw=true)

> Url de Error de Ingreso a Tienda sin Login
![](https://github.com/PhillipsMayfir/Prueba/blob/master/6.png?raw=true)

#### Modelos
En esta sección se nombraran las tablas creadas ademas de las que se usan en django por defecto de usuario

| Nombre  | BD | Posición |
| :------------ |:---------------:| -----:|
| Genero | MySQL | apps-cuenta-models |
| PerfilUsuario | MySQL | apps-cuenta-models |
| Categoria | auto | apps-auto-models |
| Auto | auto | apps-auto-models |



### Funciones 

| Nombre  | Estado  | Posición |
| :------------ |:---------------:| -----:|
| registro   | completa | apps-cuenta-views |
| iniciarSesion      | completa        |  apps-cuenta-views  |
| salir | completa        |   apps-cuenta-views |
| perfil | completa | apps-cuenta-views |
| agregarAuto | completa | apps-auto-views |
| modificarAuto | completa | apps-auto-views |
| listarAutos | completa  | apps-auto-views |
| listarAuto | completa | apps-auto-views |
| fail | completa | apps-auto-views |
| agregarCarro | completa | apps-auto-views |
| borrar | completa | apps-auto-views |
| limpiar | completa | apps-auto-views |
| __init__ | completa | apps-auto-carro |
| agregarAuto | completa | apps-auto-carro |
| save | completa | apps-auto-carro |
| remove | completa | apps-auto-carro |
| clear | completa | apps-auto-carro |

### Colaboradores 
- PhillipsMayfir
- CaptainCrauZ
