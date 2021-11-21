//(@autor: Alberto Fernández Silva)

let trabajador;
const arrayTrabajadores = [];
var sumaSueldos;

document.getElementById("miBoton").addEventListener("click", crearTrabajador);
document.getElementById("miBoton2").addEventListener("click", buscarTrabajador);


function calcularSueldo(sueldo_bruto, retenciones) {
    let sueldo_Neto;
    sueldo_Neto = sueldo_bruto - (sueldo_bruto * (retenciones / 100));
    return sueldo_Neto;
    }
    
    function Trabajador (dni, nombre, apellidos, telefono, sueldo_bruto, retenciones) {
    
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.sueldo_Bruto = sueldo_bruto;
        this.retenciones = retenciones;
        this.sueldo_Neto = calcularSueldo(this.sueldo_Bruto, this.retenciones);
    }
    
    function crearTrabajador () {
        let sumaSueldos;
        let dni = document.getElementById("dni").value;
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let telefono = document.getElementById("telefono").value;
        let sueldo_Bruto = document.getElementById("sueldo_bruto").value;
        let retenciones = document.getElementById("retenciones").value;
        
        trabajador = new Trabajador (dni, nombre, apellidos, telefono, sueldo_Bruto, retenciones); 
        arrayTrabajadores.push(trabajador);
        sumaSueldos += trabajador.sueldo_Bruto; //No sé como hacer la suma de los sueldos correctamente.
        mostrarDatos(trabajador);
        
    
    }

    function mostrarDatos(trabajador) {
        let propiedades = Object.keys(trabajador);
        let valores = Object.values(trabajador);
        let mostrarTexto = "";
        
        for (let i = 0; i < propiedades.length; i++) {
            mostrarTexto += `${propiedades[i]} : ${valores[i]} <br>`;
        }
        
        document.getElementById("texto").innerHTML = mostrarTexto + "El sueldo que la empresa debe pagar a los trabajadores es: " + sumaSueldos;
    }

    function buscarTrabajador () {
        let dni = document.getElementById("dniBuscar").value;

        let trabajador = arrayTrabajadores.find (t => t.dni === dni);

        let propiedades = Object.keys(trabajador);
        let valores = Object.values(trabajador);
        let mostrarTexto = "";
        
        for (let i = 0; i < propiedades.length; i++) {
            mostrarTexto = `${propiedades[i]} : ${valores[i]} <br>`;
        }
        
        document.getElementById("texto").innerHTML = mostrarTexto;
    }
    