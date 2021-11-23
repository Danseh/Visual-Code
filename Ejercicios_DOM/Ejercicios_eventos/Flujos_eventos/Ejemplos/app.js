/**
 * @author Alberto
 * @description Escuchador de eventos del DOM
 * 
 */

function info (evento) {
    console.log(`Hola soy el evento ${this.className} y el click
    lo lanzó ${evento.target.className}`);
}

const eventosDiv = document.querySelectorAll(".flujos-eventos div");
eventosDiv.forEach((div) => {
    div.addEventListener("click", info , {
        capture: true, //Si pongo true la burbuja va de fuera a dentro, si pongo false o no pongo nada, se propaga de dentro a fuera
        once: true, //Solo se ejecuta una vez el evento
    });
});