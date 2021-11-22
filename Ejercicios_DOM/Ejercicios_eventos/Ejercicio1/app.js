/**
 * @author Alberto
 * @description Escuchador de eventos del DOM
 * 
 */

/*
Eventos del raton
- mouseenter
- mouseleave
- mousedown -> pulsar boton izq del raton
- mouseup -> soltar boton izq del raton

Eventos del teclado
- keydown -> pulsar tecla
- keyup -> soltar tecla
- keypress ->mantener presionada tecla

*/
const boton = document.getElementById("boton");
const caja = document.getElementById("caja");

boton.addEventListener("click", (e) => {
    //e hace referencia al evento que genera la accion
    //e.target apunta al objeto que ha lanzado el evento
   console.log(`Has pulsado ${e.target}`); 

});

caja.addEventListener("mouseenter", (e) => {
    //metodo cambiar o reemplazar una clase de css
    caja.classList.replace("red","blue")
});

caja.addEventListener("mouseleave", (e) => {
    //metodo cambiar o reemplazar una clase de css
    caja.classList.replace("blue","red")
});

boton.addEventListener("dblclick", (e) => {
    //metodo cambiar o reemplazar una clase de css
    caja.classList.replace("red","blue")
});

document.addEventListener("keydown", (e) => {
    //metodo añadir clase a css
    if (e.key === "g") {
    caja.classList.add("green");
    caja.classList.remove("red");
    }
});

document.addEventListener("keyup", (e) => {
    //metodo quitar clase a css
    if (e.key === "g") {
    caja.classList.remove("green");
    caja.classList.add("red");
    }
});