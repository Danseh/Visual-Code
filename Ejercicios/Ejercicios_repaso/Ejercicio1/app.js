//@autor: Alberto Fernández Silva


function saludar () {
    let idiomas = [ ["buenos_dias", "buenas_tardes", "buenas_noches"], ["good_morning", "good_afternoon", "good_night"], ["bonjour", "bonsoir", "bonne_nuit"] ];
    let dia = new Date();
    let hora = dia.getHours();

    if(hora >= 0 && hora < 12) {
        document.getElementById("texto").innerHTML = `Español: ${idiomas[0][0]}<br> Inglés: ${idiomas[1][0]}<br> Francés: ${idiomas[2][0]}`;
    }

    else if(hora >= 12 && hora < 18){
        document.getElementById("texto").innerHTML = `Español: ${idiomas[0][1]}<br> Inglés: ${idiomas[1][1]}<br> Francés: ${idiomas[2][1]}`;
    }
     
    else {
        document.getElementById("texto").innerHTML = `Español: ${idiomas[0][2]}<br> Inglés: ${idiomas[1][2]}<br> Francés: ${idiomas[2][2]}`;
    }
}


document.getElementById("miBoton").addEventListener("click", saludar);
