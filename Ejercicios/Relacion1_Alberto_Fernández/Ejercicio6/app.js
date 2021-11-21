//(@autor: Alberto Fernández Silva)


document.getElementById("miBoton").addEventListener("click", comprobarDni);


function comprobarDni () {
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let letraDni;
let dni = parseInt(document.getElementById("dni").value.substr(0 , 8));
let letra = document.getElementById("dni").value.substr(8).toUpperCase();

if (dni.length!= 8 && letra.length!= 1) {
    alert("Debes introducir 8 numeros y 1 letra");
}
else {
    if (dni < 0 && dni > 99999999) {
        alert("El numero introducido no es válido");
    }
    else {
        letraDni = letras[dni % 23];
        if (letraDni == letra) {
            document.getElementById("texto").innerHTML = "<h2> El DNI y su letra son correctos</h2>";
        }
        else {
            alert("La letra indicada no es correcta para ese numero de DNI");
        }
    }
}

}
