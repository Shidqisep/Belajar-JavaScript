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