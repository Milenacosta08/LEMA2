// PEGANDO INFORMAÇÕES DO PROCESSO

// console.log(process)  ->  lista de argumentos

// pegando argumentos e colocando no programa
const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`Seu nome é ${firstName} ${lastName}`)


/* PASSANDO FLAGS COMO ARGUMENTO

    no console escrever da seguint forma
        --name "nome da pessoa" --greeting "saudação aqui"
*/
console.log(process.argv)