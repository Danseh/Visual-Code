//(@autor: Alberto Fernández Silva)
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const estaciones = ["primavera", "verano", "otoño", "invierno"];

let mesObtenido = Math.floor(Math.random() * 13);


document.getElementById("texto").innerHTML = `${asociarEstacion(mesObtenido)} `;


function asociarEstacion (mes) {
    switch (mes) {
        case 2,3,4:
            return `<h2> La estación del mes: ${meses[mes]} es ${estaciones[0]} </h2>`;
            break;
        case 5,6,7:
            return `<h2> La estación del mes: ${meses[mes]} es ${estaciones[1]} </h2>`;
            break;
        case 8,9,10:
            return `<h2> La estación del mes: ${meses[mes]} es ${estaciones[2]} </h2> `;
            break;
        case 11,0,1:
            return `<h2> La estación del mes: ${meses[mes]} es ${estaciones[3]} </h2>`;
            break;
    }
}
