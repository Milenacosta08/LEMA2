// Navegando pelos elementos

// ELEMENTOS PAIS

// parentNode parentElement  ->  elementos pais
const body = document.querySelector('body')
console.log(body.parentElement)


// ELEMENTOS FILHOS

// childNodes children  ->  elementos filhos
console.log(body.childNodes)  // retorna em formato de nodeList (conta com os text)
console.log(body.children)  // retorna um HTMLColection


// firstChild firstElementChild
console.log(body.firstChild)  // o primeiro filho (pode ser text)
console.log(body.firstElementChild)  // o primeiro elemento filho


// lastChild  lastElementChild
console.log(body.lastChild)  // o último filho (pode ser text)
console.log(body.lastElementChild)  // o último elemento filho


// ELEMENTOS IRMÃOS

// nextSibling  nextElementSisbling
const element = document.querySelector('header')
console.log(element.nextSibling)  // leva em consideração o texto (espaço vazio)
console.log(element.nextElementSibling)  // pega o elemento irmão

// previousSibling  previusElementSibling
const script = document.querySelector('script')
console.log(script.previousSibling)  // primeiro irmão (espaços em branco)
console.log(script.previousElementSibling)  // primeiro elemento irmão

