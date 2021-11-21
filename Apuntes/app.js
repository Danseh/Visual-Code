

let miArray = [1, 2 ,3 ,4, 5];

function invertir (nuevoArray) {
    return nuevoArray.reverse();
}

function aTexto (nuevoArray) {
    return nuevoArray.toString().replaceAll("," , "-");
}

function aArray (texto) {
    let miNuevoArray = [];
    for (let p of arguments) {
        if (typeof p == 'number') {
            miNuevoArray.push(p);
        }
        if (typeof p == 'string') {
           miNuevoArray = miNuevoArray.concat(p.split(""));
        }
    }
    return miNuevoArray;
}

