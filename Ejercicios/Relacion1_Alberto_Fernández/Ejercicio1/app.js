//(@autor: Alberto Fernández Silva)

const arrayNumeros = [];
let input;
let sumaNumeros = 0;
let mediaNumeros = 0;
let medianaNumeros = 0;
let maximo = 0;
let minimo = 0;

introducirNumeros();

let resultado = window.confirm("¿Quieres introducir más números?");
while (resultado) {
  introducirNumeros();
  resultado = window.confirm("¿Quieres introducir más números?");
}

arrayNumeros.forEach((e) => {
  sumaNumeros += e;
});

mediaNumeros = sumaNumeros / arrayNumeros.length;

let arrayOrdenado = arrayNumeros.sort();
if (arrayNumeros.length % 2 == 1) {
  medianaNumeros = arrayOrdenado[Math.floor(arrayOrdenado.length / 2)];
} else {
  medianaNumeros =
    (arrayOrdenado[arrayOrdenado.length / 2] +
      arrayOrdenado[arrayOrdenado.length / 2 - 1]) /
    2;
}

maximo = Math.max(...arrayNumeros);
minimo = Math.min(...arrayNumeros);
document.getElementById("texto").innerHTML = `<h1>Calculo pedido:</h1>
Suma de los numeros: ${sumaNumeros}<br>
Media de los numeros: ${mediaNumeros}<br>
Mediana de los numeros: ${medianaNumeros}<br>
Maximo de los numeros: ${maximo}<br>
Minimo de los numeros: ${minimo}<br>
Moda de los numeros: ${hallarModa()}`;

console.log(medianaNumeros);

console.log(arrayNumeros);

function introducirNumeros() {
  while (input != "FIN" && input != "fin") {
    input = prompt("Introduce un numero o la palabra fin para acabar");
    let valor = parseInt(input);
    if (!isNaN(valor)) {
      arrayNumeros.push(valor);
    } else {
      if (input != "FIN" && input != "fin") {
        alert("No puedes introducir palabras, introduce un numero");
      }
    }
  }
  input = "";
}

function hallarModa() {
  let maximoNumRepeticiones = 0;
  let moda = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    let numRepeticiones = 0;
    for (let j = 0; j < arrayNumeros.length; j++) {
      if (arrayNumeros[i] == arrayNumeros[j]) {
        numRepeticiones++;
      } 
      if (numRepeticiones > maximoNumRepeticiones) {
        moda = arrayNumeros[i];
        maximoNumRepeticiones = numRepeticiones;
      }
    }
  }
  return moda;
}
