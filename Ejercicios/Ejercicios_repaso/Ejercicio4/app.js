//@autor: Alberto Fernández Silva

let numLinea = 7;
let espacios1 = numLinea;
let espacios2 = 1;

for (i = 0; i<numLinea; i++) {
    if (i%2==0) {
        
        for (l = 0; l<Math.floor(espacios1/2); l++) {
            document.getElementById("texto").innerHTML +=  "&nbsp;&nbsp;";
        }
        for (j = 0; j<=i; j++) {
            document.getElementById("texto").innerHTML +=  "*";
        }
        document.getElementById("texto").innerHTML += "<br>";
        espacios1-=2;
    }
    
}

for (i = numLinea-2; i>=0; i--) {
    if (i%2==0) {

        for (l = 0; l<Math.floor(espacios2); l++) {
            document.getElementById("texto").innerHTML +=  "&nbsp;&nbsp;";
        }
        for (j = i; j>=0; j--) {
            document.getElementById("texto").innerHTML += "*";
        }
        document.getElementById("texto").innerHTML += "<br>";
        espacios2+=1;
    }

}
