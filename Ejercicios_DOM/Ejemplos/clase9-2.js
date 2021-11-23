//crear etiquetas, imagenes, etc en el dom


function crearParrafo () {
    //necesito metodo createElement
    var parrafo = document.createElement("p");
    var textoTextArea = document.getElementById("texto").value;
    var texto = document.createTextNode(textoTextArea);
    parrafo.appendChild(texto);

    document.getElementById("div1").appendChild(parrafo);

}

function crearImg() {
    var imagen = document.createElement("img");
    let ruta =prompt("Introduzca la ruta de la imagen: " , "Pon la ruta");
    if (ruta !=null) {
    imagen.setAttribute("src",ruta);
    document.getElementById("div1").appendChild(imagen);
    //imagen.settatribute 2 veces primero con src y la ruta y la segunda con alt y texto y liego appendchild
    }

}


function borrarPrimero () {
    //documentgetelement luego en una variable metes el firstchild del div y despues deletechild sin mas
    var miDiv = document.getElementById("div1");
    var primerHijo = miDiv.firstChild;
    try {
    miDiv.removeChild(primerHijo);
    }
    catch (error) {
        console.log(error);
    }
}

function borrarUltimo () {
    var contenedor = document.getElementById("div1");
    var ultimoHijo = contenedor.lastChild;
    contenedor.removeChild(ultimoHijo);
}

function sustituirPrimero () {
    var contenedor = document.getElementById("div1");
    var nuevoParrafo = document.createElement("p").appendChild(document.createTextNode("Estoy reemplazando al primer hijo"));
    contenedor.replaceChild(nuevoParrafo, contenedor.firstChild);
}

document.getElementById("crearParrafo").addEventListener("click", crearParrafo);
document.getElementById("crearImg").addEventListener("click", crearImg);
document.getElementById("borrarPrimerHijo").addEventListener("click", borrarPrimero);
document.getElementById("borrarUltimoHijo").addEventListener("click", borrarUltimo);
document.getElementById("sustituirPrimerHijo").addEventListener("click", sustituirPrimero);
