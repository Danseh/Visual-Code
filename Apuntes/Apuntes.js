//MÉTODOS ARRAYS
/*
array.push añade al principio
array.pop borra el ultimo
array.shift borra el primero
array.unshift añade al primero
delete.array[1] borra y deja el hueco vacio
array.slice (start, final) --> no modifica el array y devuelve una copia
array.slice (3) borra los 3 primeros
array.slice (3,4) borra de una posicion a otra
array.slice (-2) borra todos menos los 2 ultimos, es decir me quedo con los 2 últimos
array.concat([4,3]) concatena
array.splice(start, cantidad a borrar desde el start, item que queramos añadir a partir del start...) 
--> modifica el array y devuelve la cantidad de elementos del array
array.foreach(element => accion) hace algo a cada elemento del array. Necesita que le pasemos una funcion siempre.
array.foreach ((item,index,array) => {alert(item + "está en la posición" + index + "del array" + array)});

funcion sin nombre:

let dato = function (nuevaEdad) {
    usuario.edad = nuevaEdad;
}

dato(45);

funcion flecha: 

let serie = (r, n) => {
    let suma = 0
    for (let i = 0; i<=n ; i++) {
        suma += Math.pow(r , i);
    }
    return suma;
}




los arrays usaremos siempre for of y no el for in
El for of no da acceso al numero del elemento 
si no al valor del elemento.
*/


//FUNCIONES FLECHA

let func = (a, b) => a + b;
func (3, 2);
//EXPRESIONES FUNCIONALES

let func2 = function suma(a, b) {
    return a + b;
}

//OPERADORES TERNARIOS
// (condicion) ? acción si condicion true : accion si condicion falsa
let saludo = (edad > 18) ? 
() => alert ("Bienvenido") : 
() => alert ("Sorry no puedes acceder");

saludo();

//PARÁMETROS REST (No son el operador SPREAD "...")
// consisten en llamar a una función con cualquier número de parámetros

function sumarTodo(saludo, ...numeros) { //numeros será el array que paso
    let suma = 0;
    for (let valor of numeros) {
        suma += valor;
    }
    return suma;
}

sumarTodo(1,2,3,4,5);

//SPREAD ...
// CONVIERTE UN PARÁMETRO EN UNA LISTA DE ELEMENTOS
let miArray = [1,2,3,4,5];
alert(Math.max(...miArray));