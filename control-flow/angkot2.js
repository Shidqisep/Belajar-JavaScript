let noAngkot = 1
let angkotBeroperasi = 6

for (let noAngkot = 0; noAngkot <= 12; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot " + noAngkot + " beroperasi dengan baik")
    } else if (noAngkot > angkotBeroperasi) {
        console.log("Angkot " + noAngkot + " tidak beroperasi")
    }
}