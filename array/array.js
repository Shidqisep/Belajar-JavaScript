//instansiasi array

let arrMahasiswa = [];

//menambah data ke dalam array
arrMahasiswa[1] = "Tono";
arrMahasiswa[2] = "Antono";
arrMahasiswa[0] = "Doni"

//menampilkan array
// for (let i = 0; i < arrMahasiswa.length; i++) {
//     console.log(arrMahasiswa[i])
// }

//method array dari javacript
console.log(arrMahasiswa.length) //untuk mencari panjang array

let arrayAku = ['Shidqi', 'Anton','Donotol', 120123]
console.log(arrayAku.join(', ')) //untuk menjoin array menjadi sebuah string boleh pake parameter untuk pemisah

const elemenPertama = arrayAku.shift(); // ini menghilangkan elemen pertama dan mengembalikannya
console.log(arrayAku);
console.log(elemenPertama)

const elemenPOP = arrayAku.pop(); // ini ngilangin element terakhir dan mengembalikannya
console.log(arrayAku)
console.log(elemenPOP)

arrayAku.push("Shifana") // ini untuk menambah elemen di belakang dan lengthnya
console.log(arrayAku.push('andreas'))
console.log(arrayAku.length)

arrayAku.unshift('tonio', 'agliolio') // ini untuk menambahkan elemen dari index pertama dan mengembalikan lengthnya
console.log(arrayAku.unshift('robert', 'roberto'))