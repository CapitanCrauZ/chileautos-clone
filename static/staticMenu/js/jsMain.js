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

function generacionMain(){

    let section_1 = document.createElement("section");
    section_1.classList.add("section_1");

    let div_contenedor = document.createElement("div");
    div_contenedor.classList.add("div_contenedor");

    let input_texto = document.createElement("input");
    input_texto.classList.add("input_texto");
    input_texto.placeholder = "Ingrese una Marca";

    let submit_buscar = document.createElement("input");
    submit_buscar.classList.add("submit_buscar");
    submit_buscar.type = "submit";
    submit_buscar.value = "Buscar";
    

    div_contenedor.appendChild(input_texto);
    div_contenedor.appendChild(submit_buscar);

    section_1.appendChild(div_contenedor);

    main.appendChild(section_1);
}

//------------------------------------------
generacionMain();
//------------------------------------------

    function generacionMazo(){

        let section_2 = document.createElement("section");
        section_2.classList.add("section_2");

        let div_mazo = document.createElement("div");
        div_mazo.classList.add("div_mazo");

        // Datos Carta 1

        let div_card_1 = document.createElement("div");
        div_card_1.classList.add("div_card_1");

        let img_card_1 = document.createElement("img");
        img_card_1.classList.add("img_card_1");

        let h2_card_1 = document.createElement("h2");
        h2_card_1.classList.add("h2_card_1");
        h2_card_1.innerText = "Hyundai";

        let p_card_1 = document.createElement("p");
        p_card_1.classList.add("p_card_1");
        p_card_1.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quidem magni earum repudiandae ipsum accusamus aspernatur suscipit iste sed cupiditate vel molestias asperiores dolore laborum ducimus, voluptatem pariatur blanditiis eius.";

        let a_card_1 = document.createElement("a");
        a_card_1.classList.add("a_card_1");
        a_card_1.id = 'auto/tienda/';

        let submit_card_1 = document.createElement("input");
        submit_card_1.classList.add("submit_card_1");
        submit_card_1.type = "submit";
        submit_card_1.value = "Explorar";


        // Datos Carta 2

        let div_card_2 = document.createElement("div");
        div_card_2.classList.add("div_card_2");

        let img_card_2 = document.createElement("img");
        img_card_2.classList.add("img_card_2");

        let h2_card_2 = document.createElement("h2");
        h2_card_2.classList.add("h2_card_2");
        h2_card_2.innerText = "Toyota";

        let p_card_2 = document.createElement("p");
        p_card_2.classList.add("p_card_2");
        p_card_2.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quidem magni earum repudiandae ipsum accusamus aspernatur suscipit iste sed cupiditate vel molestias asperiores dolore laborum ducimus, voluptatem pariatur blanditiis eius.";

        let a_card_2 = document.createElement("a");
        a_card_2.classList.add("a_card_2");
        a_card_2.id = 'auto/tienda/';

        let submit_card_2 = document.createElement("input");
        submit_card_2.classList.add("submit_card_2");
        submit_card_2.type = "submit";
        submit_card_2.value = "Explorar";

        // Datos Carta 3

        let div_card_3 = document.createElement("div");
        div_card_3.classList.add("div_card_3");

        let img_card_3 = document.createElement("img");
        img_card_3.classList.add("img_card_3");

        let h2_card_3 = document.createElement("h2");
        h2_card_3.classList.add("h2_card_3");
        h2_card_3.innerText = "Ford";

        let p_card_3 = document.createElement("p");
        p_card_3.classList.add("p_card_3");
        p_card_3.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quidem magni earum repudiandae ipsum accusamus aspernatur suscipit iste sed cupiditate vel molestias asperiores dolore laborum ducimus, voluptatem pariatur blanditiis eius.";

        let a_card_3 = document.createElement("a");
        a_card_3.classList.add("a_card_3");
        a_card_3.id = 'auto/tienda/';

        let submit_card_3 = document.createElement("input");
        submit_card_3.classList.add("submit_card_3");
        submit_card_3.type = "submit";
        submit_card_3.value = "Explorar";

        a_card_1.appendChild(submit_card_1);

        div_card_1.appendChild(img_card_1);
        div_card_1.appendChild(h2_card_1);
        div_card_1.appendChild(p_card_1);
        div_card_1.appendChild(a_card_1);

        a_card_2.appendChild(submit_card_2);

        div_card_2.appendChild(img_card_2);
        div_card_2.appendChild(h2_card_2);
        div_card_2.appendChild(p_card_2);
        div_card_2.appendChild(a_card_2);

        a_card_3.appendChild(submit_card_3);

        div_card_3.appendChild(img_card_3);
        div_card_3.appendChild(h2_card_3);
        div_card_3.appendChild(p_card_3);
        div_card_3.appendChild(a_card_3);


        div_mazo.appendChild(div_card_1);
        div_mazo.appendChild(div_card_2);
        div_mazo.appendChild(div_card_3);

        section_2.appendChild(div_mazo)

        main.appendChild(section_2);
    }

//------------------------------------------
generacionMazo();
//------------------------------------------


})(document,window);