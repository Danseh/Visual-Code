//(@autor: Alberto Fernández Silva)

document.getElementById("miBoton").addEventListener("click", calcularImc);

function calcularImc() {
    let imc;
    let estatura;
    let peso = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);
    if (isNaN(peso) || isNaN(altura)){
        alert("Debes de insertar numeros");
    }
    else{
    estatura = altura/100;
    imc = peso / (Math.pow(estatura, 2));
    document.getElementById("texto").innerHTML = tablaImc(imc);
    }
}

function tablaImc(imc) {
    if (imc<18.5) {
        return `Su indice de masa corporal es: ${imc.toFixed(1)} , por lo tanto tiene un bajo peso`;
    }
    if(imc<=24.9 && imc>=18.5) {
        return `Su indice de masa corporal es: ${imc.toFixed(1)} , por lo tanto tiene un peso normal`;
    }
    if(imc<=29.9 && imc>=25) {
        return `Su indice de masa corporal es: ${imc.toFixed(1)} , por lo tanto tiene sobrepeso`;
    }
    if(imc>30) {
        return `Su indice de masa corporal es: ${imc.toFixed(1)} , por lo tanto padece de obesidad`;
    }
}
