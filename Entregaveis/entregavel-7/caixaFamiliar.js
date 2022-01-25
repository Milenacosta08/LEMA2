/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: [] 
        * despesas: []
    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.   
*/

let family = {
    receitas : [800, 1300.00, 1180.00],
    despesas : [100, 80, 1500.00, 1680.00]
}

function sum(array) {
    let result = 0
    for(let value of array){
        result += value
    }

    return result
}

function familyBox() {
    let totalReceita = sum(family.receitas)
    let totalDespesa = sum(family.despesas)

    let result = totalReceita - totalDespesa

    if(result < 0){
        console.log(`Seu saldo está negativado: ${result.toFixed(2)} R$`)
    }
    else{
        console.log(`Seu saldo é positivo: ${result.toFixed(2)} R$`)
    }
}

familyBox()