// FUNCTIONS

// frases desmotivacionais
// Declaração da função (function statement)
function createPhrases(){
    console.log('Além de não ser fácil ainda é difícil')
    console.log("Esqueça os erros do passado e foque nos erros do futuro")
    console.log(`Deixe para amanhã o que ontem você deixou para hoje`)
}

// Executar - rodar, chamar, invocar - a função (execute, run, call, invoke)
createPhrases()
createPhrases()


// FUNCTION EXPRESSION
// FUNCTION ANONYMOUS

// parâmetros da função (parameters)
const sum = function(number1, number2){
    let total = number1 + number2 // SEMPRE COLOCAR UMA PALAVRA CHAVE ESPECIFICANDO A VARIÁVEL (VAR, LET, CONST)
    return total
}

/*
sum(2, 3) // arguments - argumentos
sum(25, 5)
sum(2.5, 5)
*/

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)


// FUNCTION SCOPE

let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

// FUNCTION HOISTING

sayMyName()

function sayMyName(){
    console.log('Milena')
}
