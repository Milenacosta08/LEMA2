const button = document.querySelector("#openModal")
const modal = document.querySelector('.modal')

button.onclick = () => {
    modal.classList.add('visible')
}

document.addEventListener('keydown', function(event) {
    if(event.key == 'Escape'){
        modal.classList.remove('visible')
    }
})