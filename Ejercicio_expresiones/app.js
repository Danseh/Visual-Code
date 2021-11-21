//miExpresion = new RegExp();
//miExpresion = / /;
//miExpresion.test(texto); --> Devuelve true o false
//miExpresion.exec(texto); --> Devuelve un array (null si no se cumple la expresion)(si se cumple mete en el array la ocurrencia)
//texto.match(miExpresion) --> Devuelve un array de ocurrencias


document.getElementById("miBoton").addEventListener("click", validar);

const formulario = document.getElementById("formulario");

const inputs = document.querySelectorAll("#formulario input");

let expresion = new RegExp();

expresion = /([a-zA-ZÀ-ÿ-']+\s){2}[a-zA-ZÀ-ÿ-']+/;

/*const expresiones = {
    nombre: /([a-zA-ZÀ-ÿ-']+\s){2}[a-zA-ZÀ-ÿ-']+/,
    password: 

}*/

function validar () {
    let texto = document.getElementById("nombre").value;
    let lista = document.getElementById("listaNombres");
    let option = document.createElement("option");
    if (texto == validacion) {
        option.text = option.value = texto;
        lista.add(option);
        document.getElementById("texto").innerHTML = "Añadido";
    }
    else {
        alert("Nombre y apellidos no validos");
    }
}