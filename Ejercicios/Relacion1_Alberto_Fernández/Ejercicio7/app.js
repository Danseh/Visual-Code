//(@autor: Alberto Fernández Silva)

document.getElementById("miBoton").addEventListener("click", calcular);

//Version 1
function calcularFactorial (valor) {
let n = 1;
for (let i = valor ; i > 0 ; i--) {
    n *= i;
}
return n;
}

//Version 2
function factorialRecursivo (valor) {

if (valor == 1) {
    return 1;
} 

else {
    return valor * factorialRecursivo(valor-1);
}

}

function calcular () {
    let numero = parseInt(document.getElementById("numero").value);
    document.getElementById("texto").innerHTML = `Versión 1: El factorial del numero ${numero} es ${calcularFactorial(numero)}<br>`; //Ejecutando version 1
    document.getElementById("texto").innerHTML += `Versión 2 con recursiva: El factorial del numero ${numero} es ${factorialRecursivo(numero)}`; //Ejecutando version 2
    
}