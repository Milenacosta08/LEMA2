/*   
    ARRAY  
    * Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação

    * Umas das estruturas mais básicas, simples de criar e utilizar

        [1, 'a', 10, 'd', true]

    - CARACTERÍSTICAS DO ARRAY
        * Acesso pelo index
        * Respeita a ordem de inserção dos elementos
        * Aceita valores duplicados
        * Dependendo do tamanho do Array, para encontrar e/ou deletar um elemento, será necessário um uso maior de performance

    - ARRAY NO JAVASCRIPT
        * São dinâmicos
        * Você poderá ter dados de diferentes tipos misturados dentro de um array
        * Existem muitos métodos implementados
            push()  pop()   find()  filter()    entre outros
*/

const pilotos = ['Senna', 'Prost', 'Schumacher','Hamilton']

console.log(pilotos[0]) // Senna

console.log(pilotos.length) // tamanho do array

// É iterável
for (let piloto of pilotos) {
    console.log(piloto)
}

// Adicionar elemento
pilotos.push('Alonso')

// Encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// Deletar um elemento
pilotos.splice(1, 1)

for (let piloto of pilotos) {
    console.log(piloto)
}