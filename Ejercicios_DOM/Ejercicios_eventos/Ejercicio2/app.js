/**
 * @author Alberto
 * @description Escuchador de eventos del DOM
 * 
 */

const eventoAcordeon = document.getElementsByClassName("acordeon");

for (let elemento of eventoAcordeon) {
    //metodo que cambia un elemento de una clase css
    elemento.addEventListener("click", (e) => {
        let panel = elemento.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    });

    elemento.addEventListener("mouseenter", (e) => {
        elemento.classList.toggle("blue");
    });
}