/**
 * @author Alberto
 * @description Proyecto de lista de tareas
 * 
 */
/* ------------------- */

const setTareas = new Set();
const setTareasEliminadas = new Set();
const lista = document.getElementById("lista");
const inputBuscar = document.getElementById("buscarTarea");

//Programa añadir y eliminar tareas
const eventLista = document.getElementById("lista").addEventListener ("click", eliminarTarea);
document.getElementById("boton").addEventListener("click", añadirTarea);

//Eventos

inputBuscar.addEventListener("keyup", (e) => {
    for (let tarea of setTareas) {
        if (tarea.nombre.startsWith(e.target.value) && tarea.nombre.includes(e.target.value)) {
            document.getElementById("busqueda").innerHTML = "Búsqueda de tareas: " + tarea.nombre;
        }
    }
});

lista.addEventListener("mouseenter", (e) => {
    if (e.target.matches("li")) {
        e.target.style.color = "red";
        e.target.style.textDecoration = "line-through"; 
    }
});

lista.addEventListener("mouseleave", (e) => {
    if (e.target.matches("li")) {
        e.target.style.color = "black";
        e.target.style.textDecoration = "none"; 
    }
});

//Funciones

/**
 * @description Añade una tarea al set de tareas y lo introduce como un elemento li de la lista ul
 */
function añadirTarea () {
    let existe = false; //chivato
    let nombreTarea = document.getElementById("tarea").value;

    for (let tarea of setTareas) {
        if (tarea.nombre == nombreTarea) {
            existe = true;
            break;
        }
    }

    if (!existe) {
    const fecha = new Date();
    const fechaActual = fecha.getDay() + ":" + fecha.getMonth() + ":" + fecha.getFullYear();
    const HoraActual = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    setTareas.add({'nombre': nombreTarea});

    let elementoLista = document.createElement("li");
    let texto = document.createTextNode(nombreTarea + "---" + fechaActual + "---" + HoraActual);
    
    elementoLista.appendChild(texto);
    lista.appendChild(elementoLista);
    document.getElementById("texto").innerHTML = setTareas.size;
    }
    else {
        console.log("la tarea ya existe");
    }
}

/**
 * 
 * @param {*} e 
 * @description Comprueba si el nombre de la tarea existe y si coincide, lo añade a un set de tareas eliminadas y elimina el elemento li de la lista.
 */
function eliminarTarea(e) {
    let nombreTarea;
    let tareaEliminada;
    if (e.target.matches("li")) {
        nombreTarea = e.target.innerText.substr(0, e.target.innerText.indexOf("-"));
        tareaEliminada = {'nombre': nombreTarea};
        setTareasEliminadas.add(tareaEliminada)
        for (let tarea of setTareas) { //Eliminar tarea del set de tareas creadas
            if(tarea.nombre == tareaEliminada.nombre) {
                setTareas.delete(tarea);
                break;
            }
        }
        for (let tarea of setTareasEliminadas) {
            console.log("Tarea eliminada: " + tarea.nombre);
        }
    }

    lista.removeChild(e.target);
    document.getElementById("texto").innerHTML = setTareas.size;

}

