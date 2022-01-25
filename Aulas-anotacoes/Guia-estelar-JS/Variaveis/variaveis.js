/*
    VARIÁVEIS
        - Nomes simbólicos para receber algum valor
        - Atalhos de código
        - Identificadores
        - 3 palavras reservadas para criar uma vriável
            * var
            * let // mais moderno
            * conts (não pode mudar)  // mais moderno
        
        - Linguagem fracamente tipada e dinâmica 
        - Não precisa ter um tipo previamente definido
        - Podemos mudar o conteúdo da variável (exceto o const)
            * typeof (para saber o tipo da variável)
 */

var clima = "Quente"
clima = "Frio"
console.log(clima)

let comida = "Pizza"
console.log(comida)

const nome = "Milena"
console.log(nome)


/*
    Scope
        - Escopo determina a visibilidade de alguma variável no JS
        - Escopo global e local

    Block statement
    ```
    //vamos iniciar um bloco
    {
        // aqui dentro é um bloco e posso colocar qualquer código
    } // aqui fechamos o bloco

    HOISTING (elevação)
        - A variável var faz isso
        - Joga a declaração lá para cima undefined e depois coloca o valor real
    
    CONST E LET SÃO LOCAIS E SÓ FUNCIONAM NO ESCOPO ONDE FOI CRIADO
*/

//VAR
console.log('exsite x antes do bloco?', x)

{
    var x = 1
}
console.log('existe x depois do bloco?', x)


//LET
console.log('existe y antes do bloco?', y)  // VAI DAR ERRO

{
    let y = 2
    console.log('existe y', y) // VAI DAR CERTO
}

console.log('existe y depois do bloco?', y)  //VAI DAR ERRO

let z
{
    z = 0
    console.log('existe z', z)
}
console.log('existe z depois do bloco?', z)  


//CONST
const a = 3
{
    const a = 0
    console.log('existe a', a)
}
console.log('existe a depois do bloco?', a)  