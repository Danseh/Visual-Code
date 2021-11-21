//(@autor: Alberto Fernández Silva)

document.getElementById("miBoton").addEventListener("click", mostrarMensaje);

function mostrarMensaje () {
    let frase = document.getElementById("frase").value;
    document.getElementById("texto").innerHTML = `${comprobarPalindromo(frase)}`;
}

function comprobarPalindromo(texto) {
    let cadena = texto.replaceAll(" ", "").toLowerCase();
    let cadenaRevertida = cadena.split("").reverse().join("");
    
    if (cadena === cadenaRevertida) {
        return "Es un palindromo"
    }
    else {
        return "No es un palindromo";
    }
    
  }
  