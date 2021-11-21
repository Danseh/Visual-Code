const numeros = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const positivos = [];
const negativos = [];

let ordenar = (numeros) => {
    for (valor of numeros) {
        if (valor>=0) {
            positivos.push(valor);
        }
        else {
            negativos.push(valor);
        }
    }
};

ordenar(numeros);

//ARRAY FILTER
let restaurantes = [
    {nombre: "haha", puntaje:5, abierto: true},
    {nombre: "hehe", puntaje:4, abierto: false},
    {nombre: "hihi", puntaje:3, abierto: true}
];

let abiertos =  restaurantes.filter(function(element) {
    return element.abierto == true; 
    });

let puntaje =  restaurantes.filter(function(element) {
    return element.abierto>=5; 
    });

function mostrar (array) {
    for (valor of array) {
        console.log(valor.nombre);
    }
}
console.log("abiertos: " + abiertos);

//ESTRUCTURA SET --> Es lo mismo que un array pero los valores no se pueden repetir
//Dado un array de numeros, obtener un array sin repeticiones

const arrayNumeros = [1,2,2,5,4,3,5,6,3,4];

const arrayNumerosNoRepeat = new Set(arrayNumeros); //SET