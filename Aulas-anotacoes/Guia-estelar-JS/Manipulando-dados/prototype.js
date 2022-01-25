/*
    PROTOTYPE
    - protypt-based language
    - prototype chain
    - __proto__

    Type cpnversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

// o 5 será transformado em string através do Type coersion
console.log('9' + 5) 


// o 9 será tranformado em number através do Type cobversion
console.log(Number('9') + 5) 


// MANIPULANDO STRING E NÚMEROS

// Contar quantos caracteres tem uma palavra
let word = 'paralelepípedo'
console.log(word.length)


// Quantos dígitos tem um número
let number = 159
console.log(String(number).length)


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let num = 43.6562362
console.log(number.toFixed(2).replace('.',','))


// Transformar letras minúsculas em maiúsculas
let palavra = 'Programar é só pra quem pode'
console.log(palavra.toUpperCase())


// Transforme letras maiúsculas em minúsculas
let wordUpper = 'PROGRAMAR É SÓ PRA QUEM PODE'
console.log(wordUpper.toLowerCase())


// Separe um texto que contém espaços, em um novo array onde cada texto é uma posiçao do array. Depois disso, tranorme o array e um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)


// Verificar se o texto contém a palavra amor
console.log(phrase.includes('Amor'))
console.log(phrase.includes('amor'))
