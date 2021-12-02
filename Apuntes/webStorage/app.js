//crear una tabla dinamica que almacene por filas el nombre, el apellido, el email y la geo de todos los usuarios del fichero json. 
//crear una cookie que contenga el numero de usuarios que he insertado en la tabla.
//crear utilizando webstorage una clave que contenga el codigo de colores asignado a la pagina web y a la tabla

/**
 * @author Alberto
 * @description Uso de json
 */

const tabla = document.getElementById("mitabla");
const JSONUsers = '[{"id":1, "name":"Leanne Graham","username":"Bret"},{"id":2, "name":"Ervin Howell","username":"Antonette"}]';
    

const objData = JSON.parse(JSONUsers);


for (let dato of objData) {
    let fila = document.createElement("tr");
    tabla.appendChild(fila);
    for (let clave in dato) {
        let columna = document.createElement("td");
        let texto = document.createTextNode(dato[clave]);
        columna.appendChild(texto);
        fila.appendChild(columna);
    }
}

function crearCookie() {
    let fecha = new Date();
    fecha.setDate(fecha.getDate() + 3);
    document.cookie = "usuarioscreados=3; expires=" + fecha.toUTCString();
}



