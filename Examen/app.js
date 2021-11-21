//@autor: Alberto Fernández Silva


function Edificio (calle, numero, poblacion, cp) { //constructor instanciar un edificio
    

    this.calle=calle;
    this.numero=numero;
    this.poblacion=poblacion;
    this.cp=cp;
    this.pisos= []; // Sera un array de objetos this.pisos = [{propietario: , planta: , letra: }]

    //funciones modificar
    this.modificarCalle = function (nuevaCalle) { //con funcion sin nombre o expresion funcional
        this.calle = nuevaCalle;
    };
    this.modificarNumero = (nuevoNumero) => this.numero = nuevoNumero; //con funcion flecha
    this.modificarPoblacion = function (nuevaPoblacion) {
        this.Poblacion = nuevaPoblacion;
    };
    this.modificarCP = function (nuevoCP) {
        this.cp = nuevoCP;
    };
    //funciones
    this.agregarPropietario = function (nombre, numPlanta, nPuerta) {
        let existe = false;
        let piso = {propietario: nombre, planta: numPlanta, letra: nPuerta};

        for (let i=0; i<=this.pisos.length; i++) {
            if (this.pisos[i].planta === numPlanta && this.pisos[i].letra === nPuerta) {
                this.pisos[i].propietario = nombre;
                existe=true;
                document.getElementById("propietarios").innerHTML += `La puerta con la letra ${nPuerta} de la planta ${numPlanta}
                ya existe, se ha actualizado su propietario por ${nombre}`;
                break;
            }
        }
        if (!existe) {
        this.pisos.push(piso);
        document.getElementById("texto").innerHTML += `Se ha añadido el propietario ${piso.propietario} a la puerta 
        ${piso.letra} de la planta ${piso.planta}`;
        }
    };

    this.imprimePlantas = function () {
        for (i = 0; i<=this.pisos.length; i++) {
            document.getElementById("plantas").innerHTML += `Propietario: ${this.pisos[i].propietario} de
            la puerta con la letra ${this.pisos[i].letra} de la planta ${this.pisos[i].planta}<br> `
        }
    };
    this.buscarPropietario = function () {
        let nombre = document.getElementById("propietarioBuscado").value;
        let encontrado = false;
        let datos;
        for (i = 0; i<=this.pisos.length; i++) {
            if (this.pisos[i].propietario === nombre) {
                datos = this.pisos[i];
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
        document.getElementById("propietario").innerHTML = `Se encontró al propietario ${datos.propietario} y vive en la puerta
        ${datos.letra} de la planta ${datos.planta}`;
        }
        else {
            document.getElementById("propietario").innerHTML = `No se encontró al propietario ${nombre}`;
        }
    }


}

let edificio = new Edificio ("calle francia", 4, "granada", 18170);

function ejecutarCodigo () {

    edificio.agregarPropietario("alberto", 3, "B");

}
document.getElementById("miBoton").addEventListener("click", edificio.agregarPropietario);
document.getElementById("botonBuscar").addEventListener("click", edificio.buscarPropietario);
