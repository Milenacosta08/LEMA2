/*
    - IRÁ IMPORTAR A FUNÇÃO E PASSAR A FLAG DESEJADA
    - IREMOS RODAR NO TERMINAL O SEGUNDO ARQUIVO (ESTE) PASSANDO AS FLAGS, PARA QUE SEJA IMPRESSO NO TERMINAL O PEQUENO TEXTO
*/

const getFlag = require('./getFlag')

const name = getFlag('--name')
const greeting = getFlag("--greeting")
const age = Number(getFlag("--age"))
const farewell = getFlag("--farewell")

console.log(`Olá, ${name}! ${greeting} Vi que você tem ${age} anos de idade... Espero que esteja curtindo. ${farewell}`)