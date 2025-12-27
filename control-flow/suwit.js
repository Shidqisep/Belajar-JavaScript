//persiapan object 
const gameStats = {
    win: 0,
    lose: 0,
    tied: 0
}

const win = document.getElementById('win');
const lose = document.getElementById('lose');
const tied = document.getElementById('tied');

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
        gameStats.tied = gameStats.tied + 1;
        tied.innerText = gameStats.tied
    } else if(userChoice == "Paper"){
        if (compChoice == "Rock") {
            alert("anda Menang")
            gameStats.win = gameStats.win + 1;
            win.innerText = gameStats.win
        } else {
            gameStats.lose = gameStats.lose + 1;
            lose.innerText = gameStats.lose
            alert("anda kalah")
        }
    } else if (userChoice == "Rock") {
        if (compChoice == "Scissor") {
            alert("anda menang")
            gameStats.win = gameStats.win + 1;
            win.innerText = gameStats.win
        } else {
             gameStats.lose = gameStats.lose + 1;
            lose.innerText = gameStats.lose
            alert("Anda kalah")
        }
    } else if (userChoice == "Scissor") {
        if (compChoice == "Paper") {
            gameStats.win = gameStats.win + 1;
            win.innerText = gameStats.win
            alert("anda menang")
        }else{
             gameStats.lose = gameStats.lose + 1;
            lose.innerText = gameStats.lose
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