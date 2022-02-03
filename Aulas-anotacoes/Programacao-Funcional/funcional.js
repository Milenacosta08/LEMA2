// IMPERATIVO: FAÇA DA SEGUINTE FORMA
// stateful function  ->  muda a variável externa, não recomendável
let number = 2

function square() {
    return number * number
}

number = square()

// DECLARATIVO: O QUE FAZER E NÃO IMPORTA COMO FAZER
// stateless function  ->  não depende de dados externos
const newSquare = n => n * n



// IMUTABILIDADE
const cart = {
    quantity: 2,
    total: 200
}

// criando novo cart para alterar valor
const newCart = {...cart, quantity: 3}
console.log(newCart)



// FUNÇÕES INDEPENDENTES
const random = (number, Math) =>
Math.floo(Math.random() * number);

// recursive
const factorial = x => {
    if(x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

console.log(factorial(5))



// FUNÇÃO IMPURA

// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'João Paulo',
    age: 'jovem'
}

function changeName(name) {
    person.name = name
}


// FUNÇÃO PURA

// Exemplo 1
const calcularCircunferencia = function (pi, radius) {
    return pi * (radius + radius)
}

/*  com arrow function
    const calcularCircunferencia = (pi, radius) => pi * (radius + radius)
*/

// Exemplo 2
const changePersonName = (person, name) => ({...person, name})


// FIRST-CLASS FUNCTION
const sayMyName = () => console.log('Milena')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))


// HIGHER-ORDER FUNCTION
// Exemplo com .map()
const numbers = [2, 4, 8, 16]
const squareNumber = numbers.map(newSquare)

// Exemplo de um retorno de função
//(currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600) (() => console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log("waiting 1s"))


// COMPOSIÇÃO DE FUNÇÕES
const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())

console.log(upperCasePeopleThatStartsWithD)