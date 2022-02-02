/*
    QUEUE (FILA)
    - Como uma fila em uma loja ou restaurante
    - Linear
    - Primeiro a entrar na fila é o primeiro a sair
    - First in first out (FIFO)
    - Front (frente) é a referência do primeiro a entrar na fila
    - Back (fundo) é a referência do último elemento a entrar na fila

    MÉTODOS FUNDAMENTAIS
    - enqueue()  ->  adicionar um elemento ao final da fila
    - dequeue()  ->  remover o primeiro elemento a entrar na fila
    - size()  ->  mostrar tamanho da fila
    - front()  ->  pegar o primeiro elemento da fila
*/

// PASSO 1: Modelagem
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()  // shift  ->  funcionalidade dos array, tirar primeiro que entrou
        console.log(`${item} saiu da fila!`)
    }
}

// PASSO 2: Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Milena')
fila.enqueue('Elane')
fila.dequeue()
fila.dequeue()
fila.dequeue()



