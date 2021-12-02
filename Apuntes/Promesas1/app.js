/**
 * 
 * @description Uso de promesas para arreglar el problema del callback hell --- 1
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

//--------PROMESAS-----------
//las promesas se construyen con new Promise(resolve, reject) --> se cumple y no se cumple, respectivamente, si sé que se va a cumplir quito reject
const buscarPelicula = (id) => {
    let pelicula = peliculas.find((item) => item.id === id);
    return new Promise((resolve, reject) => {
        if(pelicula) {
            resolve(pelicula);
        }
        else {
            reject("No he encontrado la pelicula con id: " + id);
        }
    });
};

//para obtener los resolve del Promise tengo que llamar a .then
//para obtener los .reject del Promise tengo que llamar a .catch
//también puedo usar .finally que se mostraría siempre, sea resolve o reject.

setTimeout(() => {
    buscarPelicula(1)
    .then((pelicula) => {
        console.log(pelicula);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(console.log("Un placer buscar peliculas"));

},3000);

