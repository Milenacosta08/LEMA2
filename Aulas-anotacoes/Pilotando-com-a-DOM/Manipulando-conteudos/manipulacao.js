// MANIPULANDO CONTEÚDOS

// textContent
const element = document.querySelector('h1')
element.textContent += ' Olá Devs!'

console.log(element.textContent)


// innerText
const element2 = document.querySelector('p')
element2.innerText = 'Textinho trocado pelo innerText'


// innerHTML
// Se quiser utilizar HTML diretamente no elemento
const element3 = document.querySelector('.text')
element3.innerHTML = 'Olá, texto trocado pelo <small>innerHTML</small>'


// value
const element4 = document.querySelector('input')
console.log(element4.value) // pega o valor que tiver lá

element4.value = 'Valor que eu quiser'


/* atributos
    - setAttributes('','')  ->  adiciona atributos ao elemento
    - getAttributes('')  ->  pega atributos do elemento
    - removAttributes('')  ->  remove atributos do elemento
*/
const element5 = document.querySelector('header')
element5.setAttribute('id', 'header')

const header = document.querySelector('#header')
console.log(header.getAttribute('id'))

header.removeAttribute('id')
