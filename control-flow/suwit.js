//tangkap pilihan player
const playerChooseContainer = document.getElementById('choices')

playerChooseContainer.addEventListener('click', (playerChoose) => {
    const buttonChoose = playerChoose.target.closest('button')
    if (!buttonChoose) {
        return
    }

    const userChoice = buttonChoose.dataset.choice;
    console.log("user memilih " + userChoice)
    playSuwit(userChoice)
})
//logika permainan
function playSuwit(userChoice){
    let angkaAcak = Math.round(Math.random() * 2 + 1)
// console.log(angkaAcak)
    let compChoice

    switch (angkaAcak) {
        case 1:
            compChoice = "Rock"
            break;

        case 2:
            compChoice = "Scissor"
            break;

        default:
            compChoice = "Paper"
            break;
    }

    if (userChoice == compChoice) {
        alert("Lu seri coy")
    } else if(userChoice == "Paper"){
        if (compChoice == "Rock") {
            alert("anda Menang")
        } else {
            alert("anda kalah")
        }
    } else if (userChoice == "Rock") {
        if (compChoice == "Scissor") {
            alert("anda menang")
        } else {
            alert("Anda kalah")
        }
    } else if (userChoice == "Scissor") {
        if (compChoice == "Paper") {
            alert("anda menang")
        }else{
            alert("anda kalah")
        }
    }
}

const btnKembali = document.getElementById('btn-kembali')

function routing(route){
    return window.location.href = route
}

btnKembali.addEventListener('click', () => {
    console.log('terpanggil')
    routing("/")
})