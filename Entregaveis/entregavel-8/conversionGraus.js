/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function transformDegree(degree) {
    let degreeUpper = degree.toUpperCase()
    let newDegree, formula, united;

    if(!degreeUpper.includes('C') && !degreeUpper.includes('F')) {
        throw new Error('Unidade de temperatura inválida')
    }

    if(degreeUpper.includes('C')) {
        newDegree = Number(degreeUpper.replace('C',''));
        formula = (celsius) => celsius * 9/5 + 32
        united = 'F'
    }
    else {
        newDegree = Number(degreeUpper.replace('F',''));
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        united = 'C'
    }

    return formula(newDegree) + united
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    console.log(transformDegree('40'))
}
catch(erro) {
    console.log(erro.message)
}