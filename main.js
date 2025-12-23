function tambah(...args) {
    let element = 0
        for (let i = 0; i < args.length; i++) {
            element += args[i];
        }
    return element;
}

function kali(...args) {
    let element = 1
        for (let i = 0; i < args.length; i++) {
            element *= args[i];
        }
    return element;
}

function faktorial(angka) {
    let element = 1
        for (let i = 0; i < angka; i++) {
            element *= angka - i;
        }
    return element;
}

console.log(tambah(1,2,3,4,5,6,7,8,9,10))
console.log(kali(1,2,3))
console.log(faktorial(5))