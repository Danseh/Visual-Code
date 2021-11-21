//(@autor: Alberto Fernández Silva)

const miArray = ["Nombre", 54, true, "Apellidos", "Teléfono", 29, true, "Edades", "Datos", "999"];

function sumarNumeros (array) {

    let suma = 0;

    array.forEach((e) => {
        let valor = parseInt(e);
        if (!isNaN(valor)) {
            suma += valor;
        }
    });

    return suma;
}

function formarArray (array) {
    const arrayPalabras = [];
    
    array.forEach((e) => {
        if (typeof e != "boolean" && typeof e === "string") {

            arrayPalabras.push(e);
        }
    });
    return arrayPalabras.sort(function(a, b) {
        return a.length - b.length;
    })
    
}



document.getElementById("texto").innerHTML = `<h2>La suma de los numeros es: ${sumarNumeros(miArray)}</h2>
<h2>El array de palabras ordenado es: ${formarArray(miArray)}</h2>`;