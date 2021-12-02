/**
 * 
 * @description Uso de las CallBack
 * Una función de callback es una función que se pasa a otra función como argumento o parámetro (último argumento)
 * que posteriormente es invocado dentro de una función externa
 */

const peliculas = [
    {
        id: 1,
        titulo: "Titulo pelicula 1",
        sinopsis: "Contenido pelicula 1"
    },

    {
        id: 2,
        titulo: "Titulo pelicula 2",
        sinopsis: "Contenido pelicula 2"
    }

];

/*
const buscarPelicula = (id, callback) => {
    //filtro por id de pelicula
    const pelicula = peliculas.find((item) => item.id ===id);
    if (pelicula) {
        callback(pelicula); //cuando encuentra
    }
    else {
        callback("No he encontrado la película con id: " + id); //cuando no encuentra
    }
};

buscarPelicula(1,(pelicula)=> {
    console.log(pelicula);
});*/

/*let temporizador = setInterval(() => {
    document.getElementById("reloj").innerHTML = new Date().toLocaleTimeString();
},1000);
*/

const buscarPelicula = (id, callback) => {
    //filtro por id de pelicula
    const pelicula = peliculas.find((item) => item.id ===id);
    if (pelicula) {
        callback(pelicula); //cuando encuentra
    }
    else {
        callback("No he encontrado la película con id: " + id); //cuando no encuentra
    }
};



setTimeout(() => { //está en espera, se hace en diferido, es decir, aparte del resto del codigo, esperando 3 segundos
    buscarPelicula(1,(pelicula)=> {
        console.log(pelicula);
    });
},3000)

console.log("Estoy al final del codigo"); //hace antes que el timeout porque el timeout está en espera