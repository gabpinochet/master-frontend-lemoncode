let car = {
    wheels: 4,
    doors: 2,
    engine: "diesel"
}

let driver = {
    name: "Luis",
    surname: "Céspedes",
    engine: "gasoline"
}

/* FUNCIÓN CLONE */
function clone(source) {
    newClone = {
        ...source,
        clone: true
    };

    return newClone;
}

clone(car);
console.log(newClone);


/* FUNCIÓN MERGE */

function merge(target, source) {
    newMerge = {
        ...target,
        ...source
    };
    
    return newMerge;
}

merge(driver,car);
console.log(newMerge);