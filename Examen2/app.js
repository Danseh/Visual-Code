//@autor: Alberto Fernández Silva

let Discografica = { //Creamos la estructura vacia

    
};

function generarCodigo(nombreAlbum) { //Genera automaticamente un codigo de barras con el nombre del album
    let codBarras;
    let dosPrimerasLetras = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65), Math.floor(Math.random() * (90 - 65 + 1) + 65));
    let dosSegundasLetras = nombreAlbum.substr(0, 2).toUpperCase();
    let cuatroNumerosRandom = Math.floor(Math.random() * 9999 + 1000);
    let ultimosNumeros;
    if (nombreAlbum.length < 10) {
        ultimosNumeros = "0" + nombreAlbum.length;
    }
    else {
        ultimosNumeros = nombreAlbum.length;
    }
    codBarras = dosPrimerasLetras + dosSegundasLetras + cuatroNumerosRandom + ultimosNumeros;
    return codBarras;
}

//Creacion de los codigos de barras generados por la función anterior
let codBarras = generarCodigo("miAlbum");
let codBarras1 = generarCodigo("miAlbum1");

function añadirAlbum (nombreDisco, codigo, nombreAlbum, nombreArtista, año ) {
    let encontrado = false;
    for (let prop in nombreDisco[codigo]) { //Recorre las propiedades
        if(nombreDisco[codigo][prop] == nombreAlbum) { //Comprueba si ya existe el nombre del album 
            alert("El nombre del album ya existe");
            encontrado = true; //Tenemos un chivato que será true si lo encuentra, si es false, sí lo añadirá
            break; //Si no, saldrá del bucle.
        }
    }
    if (!encontrado) { //Si no lo encontró lo añade
        nombreDisco[codigo] = {nombre: nombreAlbum, nombreArtista: nombreArtista, año: año, canciones: []}; 
    }

}

function insertarCanciones (nombreDisco, codigo, ...canciones) {
    let arrayCanciones = [];
    for (let cancion of canciones) { //recorre las canciones y las guarda en un array
        arrayCanciones.push(cancion);
    }
    nombreDisco[codigo].canciones = arrayCanciones; //asigna el array anterior a las canciones del album
}

function buscarAlbum (nombreDisco, codigo) {

        document.getElementById("album").innerHTML += `Codigo de barras: ${codigo}<br> Nombre: ${nombreDisco[codigo].nombre}<br>
        Nombre artista: ${nombreDisco[codigo].nombreArtista}<br> Año: ${nombreDisco[codigo].año}<br> Canciones: <ul>`;

        nombreDisco[codigo].canciones.forEach(element => {
            document.getElementById("album").innerHTML += `<li>${element}</li>`;
        });
        document.getElementById("album").innerHTML += `</ul>`;
}

function mostrarEstadisticas (nombreDisco) {
    let sumaCanciones = 0;
    let mediacanciones = 0;
    let numAlbums = 0;
    for (let prop in nombreDisco) {
        sumaCanciones += nombreDisco[prop].canciones.length;
        numAlbums++;
    }
    mediacanciones = sumaCanciones / numAlbums;
    document.getElementById("album").innerHTML += `<h2>Estadisticas:</h2> Suma de las canciones de los albums: ${sumaCanciones}<br>
    Promedio de canciones de todos los albums: ${mediacanciones}`;
}

function crearAlbums () { //Ejecutamos esta funcion con un botón que probará todo el código anterior
    añadirAlbum(Discografica, codBarras, "miAlbum", "alberto", 1998);
    añadirAlbum(Discografica, codBarras1, "miAlbum1", "pablo", 1841);
    insertarCanciones(Discografica, codBarras, "cancion1", "cancion2", "cancion3");
    buscarAlbum(Discografica, codBarras);
    buscarAlbum(Discografica, codBarras1);
    mostrarEstadisticas(Discografica);
}

document.getElementById("miBoton").addEventListener("click", crearAlbums);