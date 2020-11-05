(function(d,w){
    //Evento para ver si el DOM esta listo
    d.onreadystatechange = function(){
        if(d.readyState === "interactive"){
            //Podemos empezar a cargar funciones con el dom
        }
    }
    //De aqui pa abajo pega el codigo
//aqui se define el main para generar todo dentro de el

const main = document.querySelector("main");
main.classList.add("main");

function generacionListarAuto(){

    let section_5 = document.createElement("section");
    section_5.classList.add("section_5");

    let div_listarAutos = document.createElement("div");
    div_listarAutos.classList.add("div_listarAutos");

    // se crea la tabla

    let table_la = document.createElement("table");
    table_la.classList.add("table_la");

    // cabezera tabla

    let thead_la = document.createElement("thead");
    thead_la.classList.add("thead_la");

    let tr_la_head = document.createElement("tr");
    tr_la_head.classList.add("tr_la_head");

    let th_la_1 = document.createElement("th");
    th_la_1.classList.add("th_la_1");
    th_la_1.innerHTML = "nombre";

    let th_la_2 = document.createElement("th");
    th_la_2.classList.add("th_la_2");
    th_la_2.innerHTML = "precio";

    let th_la_3 = document.createElement("th");
    th_la_3.classList.add("th_la_3");
    th_la_3.innerHTML = "detalle";

    let th_la_4 = document.createElement("th");
    th_la_4.classList.add("th_la_4");
    th_la_4.innerHTML = "año";
    
    let th_la_5 = document.createElement("th");
    th_la_5.classList.add("th_la_5");
    th_la_5.innerHTML = "fecha_ingreso";

    // cuerpo tabla

    let tbody_la = document.createElement("tbody");
    tbody_la.classList.add("tbody_la");

    let tr_la_body = document.createElement("tr");
    tr_la_body.classList.add("tr_la_body");


    // union de padres e hijos

    tr_la_head.appendChild(th_la_1);
    tr_la_head.appendChild(th_la_2);
    tr_la_head.appendChild(th_la_3);
    tr_la_head.appendChild(th_la_4);
    tr_la_head.appendChild(th_la_5);

    thead_la.appendChild(tr_la_head);

    table_la.appendChild(thead_la);

    div_listarAutos.appendChild(table_la);

    section_5.appendChild(div_listarAutos);

    main.appendChild(section_5);

}

generacionListarAuto();


})(document,window);