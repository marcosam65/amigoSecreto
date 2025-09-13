// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres=[];


function agregarAmigo(){

    //aqui almacenamos en vector nombre
    let input = document.getElementById("amigo");
    //Uso trim() para evitar nombres vacíos o con solo espacios
    let nombre = input.value.trim();

    if(nombre !== ""){
        nombres.push(nombre);

        // Mostrar todos los amigos
        mostrarLista();

        // Mostrar el ultimo agregado
        mostrarResultado();

        input.value = ""; //limpiamos campo
        input.focus();
    }else{
        alert("por favor, esccribe nombre antes de añadir")
    }
}

function mostrarLista(){
    let contenedor = document.getElementById("listaAmigos")
    contenedor.innerHTML = nombres
        .map(n => `<li>${n}</li>`)
        .join("");
}


// Esta función muestra un mensaje confirmando el último nombre agregado
function mostrarResultado(nombre){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Nombre "${nombre}" agregado con éxito.</li>`;
}

function sortearAmigo(){
    if(nombres.length == 0){
        alert("Primero agrega nombres, antes de sortear.");
        return;
    }

    //Gereamos el indice aleatorio en la funcion
    let indice = Math.floor(Math.random()*nombres.length);
    let amigoSorteado = nombres[indice];

    //Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}