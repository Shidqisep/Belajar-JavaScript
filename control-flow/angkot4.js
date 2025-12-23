let noAngkot = 1
let angkotBeroperasi = 6

for (let noAngkot = 0; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log("Angkot " + noAngkot + " beroperasi dengan baik")
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log("Angkot " + noAngkot + " sedang lembur")
    } else {
        console.log("Angkot " + noAngkot + " tidak beroperasi")
    }
}