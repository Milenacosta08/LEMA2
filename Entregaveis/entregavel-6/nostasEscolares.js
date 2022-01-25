/*
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima -   A
    * entre 80 - 89   -   B
    * entre 70 - 79   -   C
    * entre 60 - 69   -   D
    * menor que 60    -   F
*/

function transformNotes(note) {
    let resultScore

    if(note >= 90 && note <= 100) {
        resultScore = 'A'
    }
    else if(note >= 80) {
        resultScore = 'B'
    }
    else if(note >= 70) {
        resultScore = 'C'
    }
    else if(note >= 60) {
        resultScore = 'D'
    }
    else if(note >= 0){
        resultScore = 'F'
    }
    else{
        resultScore = 'Nota Inválida'
    }

    return resultScore
}

console.log(transformNotes(100))
console.log(transformNotes(90))
console.log(transformNotes(89))
console.log(transformNotes(80))
console.log(transformNotes(79))
console.log(transformNotes(70))
console.log(transformNotes(69))
console.log(transformNotes(60))
console.log(transformNotes(59))
console.log(transformNotes(50))
console.log(transformNotes(-10))