array = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]


/* FUNCIÓN HEAD */

const head = arr => {
    [first, ...rest] = arr;
    return first;
}

head(array);
console.log(first);



/* FUNCIÓN TAIL */

const tail = arr => {
    [first, ...rest] = arr;
    return rest;
}

tail(array);
console.log(rest);



/* FUNCIÓN INIT */

const init = arr => {
    almostAll = arr.slice(0, arr.length-1);
    return almostAll;
}

init(array);
console.log(almostAll);



/* FUNCIÓN LAST */

const last = arr => {
    lastest = arr[arr.length-1];
    return lastest;
}

last(array);
console.log(lastest);