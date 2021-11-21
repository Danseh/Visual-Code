//@autor: Alberto Fernández Silva
let preguntasRepetidas = [];

preguntar();

function preguntar() { 
    let seHaRepetido = true;
    let preguntas = ["pregunta1", "pregunta2", "pregunta3", "pregunta4", "pregunta5"];
    let respuestas = [ {Numero: 1, Respuesta: "respuesta1"}, {Numero: 2, Respuesta: "respuesta2"}, {Numero: 3, Respuesta: "respuesta3"}, 
    {Numero: 4, Respuesta: "respuesta4"}, {Numero: 5, Respuesta: "respuesta5"}];
    //No sé como hacer las respuestas
    if (preguntasRepetidas.length == 5) {
        document.getElementById("texto").innerHTML = "El juego ha finalizado";
        document.getElementById("miBoton").style.visibility = "hidden"; 
        document.getElementById("miBoton1").style.visibility = "hidden"; 
        return;
    }

    while (seHaRepetido) {
        let numero = generarNumeroRandom() - 1;
        if (preguntasRepetidas.indexOf(numero) == -1) {
            let pregunta = preguntas[numero];
            document.getElementById("texto").innerHTML = pregunta;
            seHaRepetido=false;
            preguntasRepetidas.push(numero);
            console.log(preguntasRepetidas);
        }
    }
    seHaRepetido = true;

}


function generarNumeroRandom () {
    let random = Math.floor(Math.random() * 5) + 1;
    return random;
}