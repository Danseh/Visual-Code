function inicio () {
    for (let i = 0; i < document.getElementsByTagName("h2").length; i++) {
        document.getElementsByTagName("h2")[i].addEventListener("click", recorrer);
    }
}

function recorrer() {
    let texto="";
    let h2 = e.target;
    console.log(h2.textContent);
}



// ------------- Inicio Script -----------------
//window.onload = inicio;
window.addEventListener("load", inicio);
