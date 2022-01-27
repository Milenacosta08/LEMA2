// EVENTOS

function print() {
    console.log('Print')
}


// EVENTOS DE TECLADO

/*
    onkeydown  ->  toda vez que colocar as teclas para baixo
    onkeyup  ->  quando soltar a tecla
    onkeypress  ->  toda vez que pressionar
*/
const input = document.querySelector('input')
input.onkeypress = () => {
    console.log('rodei')
}


// addEventListener()
// várias funções -> ele empilha as funções a ser executada
const p = document.querySelector('p')
p.addEventListener('click', print)
p.addEventListener('dblclick', () => {
    console.log('teste')
})

// outro jeito de fazer
// só executa uma função
p.onclick = print


// argumento event
const outroInput = document.querySelector('#outro')
outroInput.onkeypress = function(event) {
    console.log(event.currentTarget.value)
}