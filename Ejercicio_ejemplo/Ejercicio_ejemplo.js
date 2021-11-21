// Disponemos de una pagina web que permite introducir una ecucacion de segundo grado. Es una parabola 
// Si a>0 parabola hacia arriba. si a<0 parabola hacia abajo
//2.0 --> introduce la ecucacion completa en un campo de texto y nos tenemos que quedar con la a, la b y la c.




function parabola (a) {

    if (a>0) {
        return "La parabola es hacia arriba";
    }
    else if (a<0) {
        return "La parabola es hacia abajo";
    }
    else return "No es una ecucacion válida";
}

function vertice(a, b, c) {
    let vx;
    let vy;

    vx = (-b / (2*a));
    vy = a*Math.pow(vx, 2) + b * vx + c;
    return "El vertice está en" + vx + vy;
}

function cortex(a, b, c) {
    let corte;
    let parte2 = (4*a*c);
    if (parte2<0) {
        return "No tiene una solucion real";
    }
    corte = (-b + Math.sqrt((b*2)-parte2)) / 2*a;

}


function calcular() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    console.log(parabola(a));
    console.log(vertice(a, b, c));
    
}

document.getElementById("miBoton").addEventListener("click", calcular);

/* disponemos de un botón.

miBoton.addEventListener("click", funcion_a_realizar);


*/