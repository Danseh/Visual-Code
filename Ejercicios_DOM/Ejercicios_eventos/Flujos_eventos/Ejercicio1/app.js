/**
 * @author Alberto
 * @description Ejercicio 1 eventos listas
 * 
 */

const eventDom = document.addEventListener ("click", (e) => {
    if (e.target.matches("li")) {
        let hijos = e.target.children;
        for (let elemento of hijos) {
            if (elemento.style.visibility == "hidden") {
            elemento.style.visibility = "visible";
            }
            else {
                elemento.style.visibility = "hidden";
            }
        }
    }

});

