//(@autor: Alberto Fernández Silva)

document.getElementById("miBoton").addEventListener("click", mostrarResultado);

function lanzarDados () {
    let primerDado;
    let segundoDado;
    let arraySuma = [];
    let dobleUno = 0;
    let dobleSeis = 0;
    for (let i = 1 ; i < 1000 ; i++){
        primerDado = Math.floor(Math.random() * 6 + 1);
        segundoDado = Math.floor(Math.random() * 6 + 1);
        if (primerDado == 1 && segundoDado == 1){
            dobleUno++;
        }
        if (primerDado == 6 && segundoDado == 6){
            dobleSeis++;
        }
        arraySuma.push(primerDado + segundoDado);
    }
    return `Despues de 1000 tiradas el numero de veces que han salido los ojos de serpiente o doble uno es ${dobleUno} y el numero de veces que ha salido doble seis es ${dobleSeis}`;
    
}

function mostrarResultado () {
    document.getElementById("texto").innerHTML = `${lanzarDados()}`;
}

