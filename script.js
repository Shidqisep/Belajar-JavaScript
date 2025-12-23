const btnUbahJudul = document.getElementById('btn-ubah-judul')
const btnAlert = document.getElementById('btn-alert')
const btnPrompt = document.getElementById('btn-prompt')
const btnConfirm = document.getElementById('btn-confirm')
const btnAngka = document.getElementById('btn-angka')
const btnMakanan = document.getElementById('btn-makanan')
const btnSuit = document.getElementById('btn-suit')
const judul = document.getElementById('judul')
const penjelasan = document.getElementById('penjelasan')
let toggle = false

function ubahJudul(){
    if (!judul) {
        return
    }
    if (toggle) {
        judul.innerHTML = 'Belajar Javascript'
        penjelasan.innerHTML = 'Javascript bisa memanipulasi document html secara langsung!, mengubah element html apapun. Coba klik tombol disana'
        toggle = false
        return
    } 
    judul.innerHTML = 'Judul berubah pake DOM!'
     penjelasan.innerHTML = 'Lihat kan? Penjelasannya berubah!. Note: best practicenya adalah dengan mengambil element menggunakan dom daripada langsung memberikan attribut onclick pada tag html.'
    toggle = true
}

function tampilkanAlert(){
    return alert('hello world')
}

function tampilkanPrompt(){
    const nama = prompt('Masukkan Nama', 'Anton')
    return alert("hai " + nama)
}

function getInput(questions){
    let answer = prompt(questions, null)
    return answer
}

function tampilkanConfirm(){
    const tes = confirm('Apakah anda yakin?')
    return alert(tes)
}

function cekAngkaGenap(angka){
    if (parseInt(angka) % 2 === 0) {
        return alert("Angkanya genap")
    } else if (parseInt(angka) % 2 !== 0){
         return alert("angkanya ganjil bos")
    } else {
         return alert("Kamu tidak memasukkan angka")
    }
}

function cekMakananEnak(makanan){
    switch (makanan) {
        case "nasi":
            alert('enak untuk orang dewasa')
            break;
        case "daging sapi" :
            alert("enak untuk semua kalangan")
            break;
        default:
            alert("data makanan belum tersedia")
            break;
    }
}


btnPrompt.addEventListener('click', tampilkanPrompt)
btnAlert.addEventListener('click', tampilkanAlert)
btnConfirm.addEventListener('click', tampilkanConfirm)
btnUbahJudul.addEventListener('click', ubahJudul)
btnAngka.addEventListener('click', function () {
    const hasil = getInput("Masukkan Angka");
    cekAngkaGenap(hasil);
})
btnMakanan.addEventListener('click', function(){
    const makanan = getInput("Masukkan Nama Makanan")
    cekMakananEnak(makanan) 
})