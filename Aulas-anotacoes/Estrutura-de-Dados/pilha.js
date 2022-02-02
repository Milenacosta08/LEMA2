/* 
    STACK (PILHA)
    - Linear, um após o outro
    - ÚLtimo a entrar é o primeiro a sair
    - Last in first out (LIFO)

    MÉTODOS NO CÓDIGO
    - puch()  ->  adicionar um elemento à ppilha
    - pop()  ->  remover o elemento do topo da pilha
    - peek()  ->  obter o elemento do topo da pilha
    - size()  ->  mostrar tamanho da pilha
*/

// PASSO 1: MODELANDO
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if(this.top < 0) {
            return undefined
        }
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}


// PASSO 2: UTILIZANDO
const stack = new Stack()

// Adicionando dados
stack.push('learning')
stack.push('data')
stack.push("stack")

// Vendo o topo
console.log(stack.peek())

// Remover
stack.pop()
console.log(stack.peek())