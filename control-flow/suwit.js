//persiapan object 
const gameStats = {
    win: 0,
    lose: 0,
    tied: 0
}

const suwitIcons = {
    rock : "rock",
    paper: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
            </svg>`,
    scissor: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
                </svg>`

}

const resultStyle = {
    win: `bg-green-600 text-white-100 rounded-xl p-6 mb-6 text-2xl text-center font-bold`,
    lose: `bg-red-600 text-white-100 rounded-xl p-6 mb-6 text-2xl text-center font-bold`,
    tied: `bg-yellow-600 text-white-100 rounded-xl p-6 mb-6 text-2xl text-center font-bold`
}

const win = document.getElementById('win');
const lose = document.getElementById('lose');
const tied = document.getElementById('tied');
const userDisplay = document.getElementById('userDisplay')
const compDisplay = document.getElementById('compDisplay')
const resultDisplay = document.getElementById('gameResult')

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
            compDisplay.innerHTML = suwitIcons.rock
            break;

        case 2:
            compChoice = "Scissor"
            compDisplay.innerHTML = suwitIcons.scissor
            break;

        default:
            compChoice = "Paper"
            compDisplay.innerHTML = suwitIcons.paper
            break;
    }

    if (userChoice == compChoice) {
        // alert("Lu seri coy")
        gameStats.tied = gameStats.tied + 1;
        tied.innerText = gameStats.tied
        userDisplay.innerHTML = compDisplay.innerHTML
        resultDisplay.className = resultStyle.tied
        resultDisplay.innerText = "Anda Seri"
    } else if(userChoice == "Paper"){
        userDisplay.innerHTML = suwitIcons.paper
        if (compChoice == "Rock") {
            // alert("anda Menang")
            gameStats.win = gameStats.win + 1;
            win.innerText = gameStats.win
            resultDisplay.className = resultStyle.win
            resultDisplay.innerText = "Anda Menang!"
        } else {
            gameStats.lose = gameStats.lose + 1;
            lose.innerText = gameStats.lose
            resultDisplay.className = resultStyle.lose
            resultDisplay.innerText = "Anda Kalah!"
            // alert("anda kalah")
        }
    } else if (userChoice == "Rock") {
        userDisplay.innerHTML = suwitIcons.rock
        if (compChoice == "Scissor") {
            // alert("anda menang")
            gameStats.win = gameStats.win + 1;
            win.innerText = gameStats.win
            resultDisplay.className = resultStyle.win
            resultDisplay.innerText = "Anda Menang!"
        } else {
            gameStats.lose = gameStats.lose + 1;
            lose.innerText = gameStats.lose
            resultDisplay.className = resultStyle.lose
            resultDisplay.innerText = "Anda Kalah!"
            // alert("Anda kalah")
        }
    } else if (userChoice == "Scissor") {
        userDisplay.innerHTML = suwitIcons.scissor
        if (compChoice == "Paper") {
            gameStats.win = gameStats.win + 1;
            win.innerText = gameStats.win
            resultDisplay.className = resultStyle.win
            resultDisplay.innerText = "Anda Menang!"
            // alert("anda menang")
        }else{
             gameStats.lose = gameStats.lose + 1;
            lose.innerText = gameStats.lose
            resultDisplay.className = resultStyle.lose
            resultDisplay.innerText = "Anda Kalah!"
            // alert("anda kalah")
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