// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres=[];


function agregarNombre(nombre){

    //aqui almacenamos en vector nombre
    let input = document.getElementById("amigo");
    //Uso trim() para evitar nombres vacíos o con solo espacios
    let nombre = input.ariaValueMax.trim();

    if(nombre !== ""){
        this.nombres.push(nombre);

        // Mostrar todos los amigos
        this.mostrarLista();

        // Mostrar el ultimo agregado
        this.mostrarResultado();

        input.value = ""; //limpiamos campo
    }else{
        alert("por favor, esccribe nombre antes de añadir")
    }
}

function mostrarLista(){
    let contenedor = document.getElementById("listaNombres")
    contenedor.innerHTML = this.nombres
        .map(n => `<li>${n}</li>`)
        .join("");
}

function mostrarResultado(nombre){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Nombre "${nombre}" agregado con éxito.</li>`;
}