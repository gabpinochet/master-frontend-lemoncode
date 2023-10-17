array1 = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter"]
array2 = ["Saturno", "Urano", "Neptuno"]
array3 = ["Plutón"]

/* FUNCIÓN CONCAT */

const concat = (arr1, arr2) => {
    newArr = [...arr1, ...arr2];
    return newArr;
}

concat(array1, array2);
console.log(newArr);


/* FUNCIONES EJERCICIO 1 MODIFICADAS */

const head = arr => {
    [first, ...rest] = arr;
    return first;
}

const tail = arr => {
    [first, ...rest] = arr;
    return rest;
}

const init = arr => {
    almostAll = arr.slice(0, arr.length-1);
    return almostAll;
}

const last = arr => {
    lastest = arr[arr.length-1];
    return lastest;
}