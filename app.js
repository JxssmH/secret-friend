// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let amigoSecreto = "";
let listaAmigo = [];
let maximoAmigos = 10;

//Validar la entrada
function agregarAmigo() {

    //Obtener el input y su valor
    let inputAmigo = document.getElementById('nombreAmigo');
    let nombreAmigo = inputAmigo.value.trim();

    //validar que no esté vacio
    if(nombreAmigo == ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que solo contenga letras y espacios
    const soloLetrasRegex = /^[a-zA-Z\s]+$/;
    if (!soloLetrasRegex.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    //Validar el maximo de amigs
    if (listaAmigo >= maximoAmigos){
        alert("Has alcanzado el número máximo de amigos");
        return;
    }

    listaAmigo.push(nombreAmigo); //Actualizar Lista

    inputAmigo.value = ""; //Limpiar

    mostrarAmigosEnLista(listaAmigo);
}


function mostrarAmigosEnLista(amigos) {
    // Obtener el elemento de la lista HTML
    const listaElement = document.getElementById('listaAmigos');


    // Limpiar la lista existente
    listaElement.innerHTML = "";

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        const listItem = document.createElement('li');

        // Asignar el texto del amigo al <li>
        listItem.textContent = amigos[i];

        // Agregar el elemento <li> a la lista
        listaElement.appendChild(listItem);
    }
}

function sortearAmigo() {
    if (listaAmigo.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio y seleccionar un amigo
    const amigoSorteado = Math.floor(Math.random() * listaAmigo.length);
    const amigoElegido = listaAmigo[amigoSorteado];

    // Obtener el elemento donde se mostrará el resultado
    const resultadoElement = document.getElementById('resultado');

    if (resultadoElement) {
        // Reemplazar 
        resultadoElement.innerHTML = `<span style="color: #05DF05; font-weight: bold;">Amigo secreto sorteado: ${amigoElegido}</span>`;
    }

    // Ocultar 
    const listaElement = document.getElementById('listaAmigos');
    if (listaElement) {
        listaElement.style.display = 'none';
    }

    return amigoElegido;
}
