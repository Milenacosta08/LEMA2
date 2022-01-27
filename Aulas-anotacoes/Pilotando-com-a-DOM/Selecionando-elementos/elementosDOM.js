// getElementById()  ->  pega o elemento do documento através do ID dele
const element = document.getElementById('blog');
console.log(element)


// getElementByClassName()  ->  pega diversos elementos pela classe dele
const element2 = document.getElementsByClassName('text');
console.log(element2)


// getElementByTagName()  ->  pega o elemento pela tag
const element3 = document.getElementsByTagName('title')
console.log(element3)


// querySelector()  ->  pega pelo seletor (igual CSS)
// ele retorna o primeiro que achar
const element4 = document.querySelector('.text2')
console.log(element4)


// querySelectorAll()
// pega todos que encontrar
const elements = document.querySelectorAll('.text3')
elements.forEach((el) => console.log(el))


/*
    QUAL USAR?
        - getElementById  (element)
        - getElementByClassName  (HTMLCollection)
        - getElementByTagName  (HTMLCollection)
        - querySlector  (element)
        - querySelectorAll  (Nodelist)
*/