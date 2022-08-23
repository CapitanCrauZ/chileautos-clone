/* LINK DEL TIEMPO EN SAN BERNARDO*/
/* http://api.openweathermap.org/data/2.5/weather?id=3872348&appid=aa9cc6341e3c98e8b27b796fd450ef8e*/

/*Variables*/

let input = document.querySelector('.input_text'); 
let main = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let humidity = document.querySelector('.humidity');
let clouds = document.querySelector('.clouds');
let idicon = document.querySelector('.idicon')
let button= document.querySelector('.submit');




button.addEventListener('click', function(name){
/*Conexion con los datos del tiempo*/
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=aa9cc6341e3c98e8b27b796fd450ef8e')
.then(response => response.json())
.then(data => {
  
    /*Retiro de datos mediante listas */

  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue = data['main']['humidity'];
  var idiconValue = data['weather'][0]['icon']
    
  /*insertando los datos de la api a Html*/

  main.innerHTML = nameValue;
  temp.innerHTML = "Temperatura - "+(tempValue-273.15).toFixed(2)+'C°';
  
  

  humidity.innerHTML="Humedad -"+" "+ humidityValue;
  input.value ="";

  /*Condicional del clima*/
function climaespañol(descValue){

    switch (descValue) {
        case 'clear sky':
            desc.innerHTML = "Clima - Cielo despejado";
            break;
        case 'few clouds':
            desc.innerHTML = "Clima - Pocas Nubes";
            break;
        case 'scattered clouds':
            desc.innerHTML = "Clima - Nubes dispersas";
            break;
        case 'broken clouds':
            desc.innerHTML = "Clima - Nublado";
        default:
            break;

    }
    return desc.innerHTML;
}

/*Condicional de icono*/
function invocacionIcono(idiconValue){
    switch (idiconValue) {
        case '01d':
        case '01n':
            idicon.innerHTML='<img src="asset/img/cielodespejadod.png" alt="">'; 
            break;
        case '02d':
        case '02n':
            idicon.innerHTML='<img src="asset/img/pocasnubesd.png" alt="">'; 
            break;
        case '03d':
        case '03n':
            idicon.innerHTML='<img src="asset/img/nubesdispersasd.png" alt="">'; 
            break;
        case '04d':
        case '04n':
            idicon.innerHTML='<img src="asset/img/nublado.png" alt="">'; 
            break;
        
    
        default:
            break;
    }
    return idicon.innerHTML;
}



/* Llamando funcion del clima*/
climaespañol(descValue);
/* Llamando icono del clima*/
invocacionIcono(idiconValue);


})

.catch(err => alert("Error ciudad no existe"));
})

