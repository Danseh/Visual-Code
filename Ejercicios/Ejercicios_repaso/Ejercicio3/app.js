//@autor: Alberto Fernández Silva

function Socios(dni,nombre,apellidos,capital_inicial){
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.capital_inicial = capital_inicial;
    this.acciones = [];
    this.agregarAcciones = function (nom, cap){
        let accion = {
            nombre: nom,
            capital: cap
        }
        this.acciones.push(accion);
    };
    this.incrementarGanancias = function (porcentaje){
        let accionesAumentadas = [];
            accionesAumentadas = this.acciones.map((e)=>{
                e.capital += e.capital * ((porcentaje? porcentaje:50)/100);
                return e;
            })
        
        this.acciones = accionesAumentadas;
    };
    this.ordenarAcciones = function (){
        this.acciones.sort(function (a,b){
            return a.capital - b.capital;
        });
    }
    this.mostrar = function (){
        let accionesTexto = this.acciones.map((e)=> {
            return `Nombre: ${e.nombre} Capital: ${e.capital}`;
        })
        document.getElementById("texto").innerHTML = `DNI: ${this.dni}<br> Nombre: ${this.nombre}<br>
        Apellidos: ${this.apellidos}<br> Acciones: ${accionesTexto}`;
    };
};


let socio = new Socios (77556215, "Alberto","Fernandez",25000);
socio.agregarAcciones("amazon",5500);
socio.agregarAcciones("google",1500);
socio.agregarAcciones("facebook",8500);

socio.incrementarGanancias();
socio.ordenarAcciones();
socio.mostrar();
