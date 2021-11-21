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
    let ecuacion;
    ecuacion = document.getElementById("ecuacion").value;
    let a = ecuacion.charAt(ecuacion.search("x^2"));
    console.log(ecuacion);
    console.log(a);
    //console.log(parabola(a));
    //console.log(vertice(a, b, c));
    
}

document.getElementById("miBoton").addEventListener("click", calcular);