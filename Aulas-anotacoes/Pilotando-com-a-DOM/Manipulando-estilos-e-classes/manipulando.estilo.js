// ALTERANDO ESTILO

const body = document.querySelector('body')

body.style.backgroundColor = 'lightgrey'
console.log(body.style.backgroundColor)


/* classList
    - add  ->  adiciona a classe da lista
    - remove  ->  remove a classe da lista
    - toggle  ->  se ele encontrar a classe remove se não encontrar adiciona

*/
body.classList.add('red', 'green')
console.log(body.classList)
body.classList.remove('red')
body.classList.toggle('green')