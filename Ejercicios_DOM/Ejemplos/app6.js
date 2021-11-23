/**
 * @author Alberto
 * @description Creación de párrafos, enlaces y listas
 * 
 */

function inicio () {
    let contenido = document.getElementById("contenido"); //El contenedor div

    //Creacion de párrafos:

    let parrafo1 = document.createElement("p"); //Creo el elemento <p></p>;
    parrafo1.appendChild(document.createTextNode("Párrafo 1")); //Creo un nodo texto y se lo añado como hijo al parrafo 1
    contenido.appendChild(parrafo1); //Añado el parrafo con el texto al contenido o contenedor como un hijo.

    //Creación de enlaces:

    let enlace1 = document.createElement("a");
    enlace1.setAttribute("href", "https://www.google.es"); //Añado el atributo href al enlace1
    enlace1.appendChild(document.createTextNode("Enlace a google"));
    contenido.appendChild(enlace1);
    
    /**
     * Crea una lista con un numero de elementos y con el texto que le pasemos
     * @param {Object} contenedor 
     * @param {String} tipo 
     * @param {Number} numElementos 
     * @param {String} textoBase 
     */
    let miLista = (contenedor, tipo = "ul", numElementos = 1, textoBase) => {
        //
        if (tipo === "ul" || tipo ==="ol") {
            // creamos la lista
            let lista = document.createElement(tipo);
            for (let i = 1; i<= numElementos; i++) {
                //lista.appendChild(document.createElement("li").appendChild(document.createTextNode(textoBase + " " + i)));
                let li = document.createElement("li");
                let liTextNode = document.createTextNode(textoBase + " " + i);
                li.appendChild(liTextNode);
                lista.appendChild(lista);
            }
            contenedor.appendChild(lista);
        }
        else {
            console.log("error...");
        }
    }

    miLista(contenido, "ol", 10, "Hola mundo");

}


// ------------- Inicio de la aplicación ---------------
window.onload = inicio;