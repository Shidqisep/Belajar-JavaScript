//tangkap pilihan player
const playerChooseContainer = document.getElementById('choices')

playerChooseContainer.addEventListener('click', (playerChoose) => {
    const buttonChoose = playerChoose.target.closest('button')
    if (!buttonChoose) {
        return
    }

    const userChoice = buttonChoose.dataset.choice;
    console.log("user memilih " + userChoice)
    // playSuwit(buttonChoose)
})

const btnKembali = document.getElementById('btn-kembali')

function routing(route){
    return window.location.href = route
}

btnKembali.addEventListener('click', () => {
    console.log('terpanggil')
    routing("/")
})