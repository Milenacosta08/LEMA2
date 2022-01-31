// Escrever algo na saída
const questions = [
    "Qual o seu nome?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que poderia fazer para melhorar?",
    "O que me deixou feliz?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write('\n' + questions[index] + '\n> ')
}

ask()

const answer = []

// Recebendo dados de entrada
process.stdin.on("data", data => {
    answer.push(data.toString().trim())  // trim()  ->  remover qualquer espaço vazio no começo ou no fim
    if(answer.length < questions.length) {
        ask(answer.length)
    }
    else {
        process.exit()  //process.exit()  ->  fecha o processo
    }
})

process.on('exit', () => {
    console.log(`Bacana ${answer[0]}!
    O que você aprendeu hoje foi:
    ${answer[1]}

    O que te aborreceu e você poderia melhorar foi:
    ${answer[2]}

    O que te dexou feliz hoje:
    ${answer[3]}

    Você ajudou ${answer[4]} pessoas hoje!

    Volte amanhã para novas reflexões!
    `)
})