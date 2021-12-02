/**
 * La API Fetch proporciona una interfaz para recuperar recursos de internet 
 * Sustituye a XMLHttpRequest
 */

 const tabla = document.getElementById("mitabla");
const albums = new Set();

fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
        for (let dato of data) {
            let fila = document.createElement("tr");
            tabla.appendChild(fila);
            for (let clave in dato) {
                let columna = document.createElement("td");
                if (clave === "id") {
                    let texto = document.createTextNode(dato[clave]);
                    columna.appendChild(texto);
                    fila.appendChild(columna);
                }
                if (clave === "thumbnailUrl") {
                    let imagen = document.createElement("img");
                    imagen.setAttribute("src", dato[clave]);
                    columna.appendChild(imagen);
                    fila.appendChild(columna);
                }
            }
        }
    } );
    
console.log(albums);



