/**
 * @author Alberto
 * @description Proyecto de lista de tareas
 * 
 */

const setTareas = new Set();
const setTareasEliminadas = new Set();
const lista = document.getElementById("lista");


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
    const fechaActual = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    setTareas.add({'nombre': nombreTarea});

    let elementoLista = document.createElement("li");
    let texto = document.createTextNode(nombreTarea + " --- " + fechaActual);
    
    elementoLista.appendChild(texto);
    lista.appendChild(elementoLista);
    document.getElementById("texto").innerHTML = setTareas.size;
    }
    else {
        console.log("la tarea ya existe");
    }
}

function eliminarTarea(e) {
    let nombreTarea;
    let tareaEliminada;
    if (e.target.matches("li")) {
        nombreTarea = e.target.innerText.substr(0, e.target.innerText.indexOf(" "));
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

const eventLista = document.getElementById("lista").addEventListener ("click", eliminarTarea);
document.getElementById("boton").addEventListener("click", añadirTarea);