//(@autor: Alberto Fernández Silva)

    document.getElementById("miBoton").addEventListener("click", mostrarCadena);

    let convertirCadena = (texto) => {

    let arrayCadena = texto.split("");
        arrayCadena.forEach((e, i) => {
            if (e == e.toUpperCase() && e!=" ") {
                if (confirm(`¿Quieres convertir la letra ${e} a minúsculas?`)) {
                    arrayCadena[i] = e.toLowerCase();
                }
            }
          })
          
          return arrayCadena.join("");
    };

 
    function mostrarCadena() {
    let texto = document.getElementById("frase").value;
    document.getElementById("texto").innerHTML = `${convertirCadena(texto)}`;
    }
